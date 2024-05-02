
function checkResolution() {
    monkeimg = document.querySelector("#monke");
    if (window.innerWidth < monkeimg?.width) {
        monkeimg.width = window.innerWidth - 15;
    }
}

const flavortexts = [
    "the cake is not a lie",
    "the cake is a lie",
    "the update will be out 5 hours from now",
    "the factory must grow",
    "we truly live in a society",
    "monke",
    "https://bigrat.monster",
    "crazy? i was crazy once",
    "i am not a robot",
    "try clicking somewhere on the screen!"
];

document.addEventListener('DOMContentLoaded', () => {
    const flavor = document.querySelector("#flavor");
    //flavor.innerHTML = '"' + flavortexts[Math.floor(Math.random() * flavortexts.length)] + '"';
});

window.addEventListener('load', () => {
    checkResolution();
    setTimeout(checkResolution, 300);

    const iframeStart = "<iframe src=\"https://www.shadertoy.com/embed/";
    const iframeEnd = '?gui=false&t=10&paused=false&muted=true" width="100%" height="100%" frameborder="0" allowfullscreen style="position: relative; left: 0px; top: 0px; height:110%"></iframe>';

    const shaderids = [
        "XfdSRs",
        "lfdSWS"
    ];

    const shadernames = {
        "XfdSRs": "3D perlin noise",
        "lfdSWS": "infinite squares"
    }

    var nextShaderTimeout;
    var autoNextShader = false;

    function setShader(id) {
        // clear timeouts

        document.querySelector("#background").innerHTML = iframeStart + shaderids[id] + iframeEnd;

        const goToShadertoyButton = document.getElementById("shadertoybutton");

        goToShadertoyButton.onclick = function() {
            window.open("https://www.shadertoy.com/view/" + shaderids[id]);
        };
        goToShadertoyButton.innerHTML = "current shader: " + shadernames[shaderids[id]];

        const nextShaderButton = document.getElementById("nextshaderbutton");
    
        nextShaderButton.onclick = function() {
            var nextid = (id + 1) % shaderids.length;
            setShader(nextid);
        };

        const flavor = document.querySelector("#flavor");
        flavor.innerHTML = '"' + flavortexts[Math.floor(Math.random() * flavortexts.length)] + '"';

        // go to next after 30s - make it cancelable
        if (typeof nextShaderTimeout !== 'undefined') {
            clearTimeout(nextShaderTimeout);
        }
        if (autoNextShader) {
            nextShaderTimeout = setTimeout(() => {
                var nextid = (id + 1) % shaderids.length;
                setShader(nextid);
            }, 30000);
        }
    }

    setShader(Math.floor(Math.random() * shaderids.length));

});