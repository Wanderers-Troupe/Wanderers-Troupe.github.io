var textfield;

function setup() {
    noCanvas();
    textfield = createInput();

//    textfield.changed(newText);
    textfield.input(newTyping);

}

function newTyping() {
    createP(textfield.value());
}

function newText() {
    createP(textfield.value());
}