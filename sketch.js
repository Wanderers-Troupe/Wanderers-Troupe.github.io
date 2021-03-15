var textfield;

function setup() {
    noCanvas();
    textfield = createInput();

//    textfield.changed(newText);
    textfield.input(newTyping);

}

function newTyping() {
    createP(input.value());
}

function newText() {
    createP(input.value());
}