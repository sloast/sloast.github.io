const canvas = document.getElementById("glCanvas");
const gl = canvas.getContext("webgl2");

// if (!gl) {
//     alert("WebGL2 not supported");
// }

// Resize canvas
function resize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
}
window.addEventListener("resize", resize);
resize();

async function loadShader(url) {
    return fetch(url).then(r => r.text());
}

Promise.all([
    loadShader("vertex.glsl"),
    loadShader("fragment.glsl")
]).then(([vsSource, fsSource]) => {
    start(vsSource, fsSource);
});

function compileShader(type, source) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, source);
    gl.compileShader(sh);

    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
        throw new Error("Shader compilation error");
    }
    return sh;
}

function createTexture(w, h) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0,
        gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tex;
}

function createFBO(texture) {
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return fbo;
}

function start(vsSource, fsSource) {
    const vShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    // Uniforms
    const uResolution = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uMouse = gl.getUniformLocation(program, "iMouse");
    const uBuffer0 = gl.getUniformLocation(program, "buffer0");

    // Set sampler to texture unit 0
    gl.uniform1i(uBuffer0, 0);

    // --- CREATE TWO TEXTURES & TWO FBOS (ping-pong) ---
    let tex1 = createTexture(canvas.width, canvas.height);
    let tex2 = createTexture(canvas.width, canvas.height);
    let fb1 = createFBO(tex1);
    let fb2 = createFBO(tex2);

    // Mouse tracking
    let mouse = [0, 0, 0];

    canvas.addEventListener("mousemove", e => {
        const r = canvas.getBoundingClientRect();
        mouse[0] = e.clientX - r.left;               // X
        mouse[1] = r.height - (e.clientY - r.top);   // Y
    });

    canvas.addEventListener("mousedown", () => {
        mouse[2] = 1.0;
    });
    canvas.addEventListener("mouseup", () => {
        mouse[2] = 0.0;
    });
    canvas.addEventListener("mouseleave", () => {
        mouse[2] = 0.0;
    });


    let startTime = performance.now();

    function render() {
        const t = (performance.now() - startTime) / 1000;

        gl.bindFramebuffer(gl.FRAMEBUFFER, fb1);

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uTime, t);
        gl.uniform3f(uMouse, mouse[0], mouse[1], mouse[2]);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex2);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex1);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        [tex1, tex2] = [tex2, tex1];
        [fb1, fb2] = [fb2, fb1];

        requestAnimationFrame(render);
    }

    render();
}
