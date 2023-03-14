
function checkResolution() {
    monkeimg = document.querySelector("#monke");
    if (window.innerWidth < monkeimg.width) {
        monkeimg.width = window.innerWidth - 15;
    }
}

window.addEventListener('load', () => {
    checkResolution();
    setTimeout(checkResolution, 300);
});