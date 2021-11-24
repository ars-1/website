let text = "Real Estate Virtual Assistants";
let text2 = "About " +"Us";
let x = 0;
let y = 0;
//twriter();
blink();
twriter2();
function twriter() {
    if (x < text.length) {
        document.getElementById('typewriter').innerText += text[x];
        x++;
        setTimeout('twriter()', 100);
    }
    else {
        x = 0;
        document.getElementById('typewriter').innerText = "";
        twriter();
    }
}
function twriter2() {
    if (y < text2.length) {
        document.getElementById('abtused').innerHTML += text2[y];
        y++;
        setTimeout('twriter2()', 500);
    }
    else {
        y = 0;
        document.getElementById('abtused').innerHTML = "";
        twriter2();
    }
}

function blink() {
    document.getElementById('abtusedc').innerText = "|";
    setTimeout('unblink()', 250);
}
function unblink() {
    document.getElementById('abtusedc').innerText = "";
    setTimeout('blink()', 250);
}
