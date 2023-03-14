
let textarr = 'undefined'.split('')
let textobj = null
let currtext = ''
let counter = 0
let cursoractive = true
const cursor = '_'
//const cursor = '&#x2588;'

function typeletter() {
    if (textarr.length > 0) {
        currtext += textarr.shift()
        textobj.innerHTML = currtext + cursor
    } else {
        if (counter++ == 5) {
            cursoractive = !cursoractive
            textobj.innerHTML = currtext
            + (cursoractive ? cursor : '&nbsp;')
            counter = 0
        }
        //typewriter.style.animation = 'blink-caret 1.5s step-end infinite'
    }
}

window.onload = function() {
    textobj = document.querySelector('#typewriter')
    currtext = textobj.innerHTML
    if (textobj != null) {
        textarr = document.querySelector('#typewriter-text').value.split(''); //.map(x => x == ' ' ? '&nbsp;' : x)
        setInterval(typeletter, 80);
    }
}


