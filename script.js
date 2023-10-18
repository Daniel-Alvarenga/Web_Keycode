document.addEventListener("keydown", keyPush);

function keyPush(event) {

    if (event.keyCode == 32) {
        t.innerText = "Space";
        key.innerText = "Space";
    } else {
        t.innerText = "  " + event.key + "  ";
        key.innerText = "  " + event.key + "  ";
    }

    kc.innerText = "  " + event.keyCode + "  ";
    code.innerText = "  " + event.keyCode + "  ";
}