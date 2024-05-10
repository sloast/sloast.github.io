
const usecursor = true
const cursor = '_'
const end = '&nbsp;';
//const cursor = '&#x2588;'

function typeletter(obj) {
    if (obj.textarr.length > 0) {
        obj.currtext += obj.textarr.shift()
        obj.innerHTML = obj.currtext + ( usecursor ? cursor : obj.suffixtext)
    } else if (usecursor) {
        if (obj.counter == undefined) obj.counter = 0;
        if (obj.counter++ == 5) {
            obj.cursoractive = !obj.cursoractive
            obj.innerHTML = obj.currtext
            + (obj.cursoractive ? cursor : obj.suffixtext)
            obj.counter = 0
        }
        //typewriter.style.animation = 'blink-caret 1.5s step-end infinite'
    } else {
        clearInterval(obj.intervalId);
    }
}

function startTypewriter(obj, text) {
    obj.currtext = obj.innerHTML
    obj.textarr = text.split(''); //.map(x => x == ' ' ? '&nbsp;' : x)
    obj.suffixtext = '&nbsp;'
    obj.cursoractive = true
    obj.intervalId = setInterval(() => typeletter(obj), 90);
}
