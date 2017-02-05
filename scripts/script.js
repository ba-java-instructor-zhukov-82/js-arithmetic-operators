function readNumber(id) {
    return +(document.getElementById(id).value);
}

function print(data) {
    document.getElementById('result').innerHTML = data;
}

//-----------------------------------------------------

function multiple() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' * ' + second + ' = ' + (first * second);
    print(output);
}

function div() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' / ' + second + ' = ' + (first / second);
    print(output);
}

function add() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' + ' + second + ' = ' + (first + second);
    print(output);
}

function sub() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' - ' + second + ' = ' + (first - second);
    print(output);
}

function leftShift() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' << ' + second + ' = ' + (first << second);
    print(output);
}

function rightShift() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' >> ' + second + ' = ' + (first >> second);
    print(output);
}

function unsignedRightShift() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' >>> ' + second + ' = ' + (first >>> second);
    print(output);
}

function xor() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' ^ ' + second + ' = ' + (first ^ second);
    print(output);
}

function or() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' | ' + second + ' = ' + (first | second);
    print(output);
}

function and() {
    var first = readNumber('n1');
    var second = readNumber('n2');

    var output = first + ' & ' + second + ' = ' + (first & second);
    print(output);
}

function select() {

    var e = document.getElementById("numbers");
    var id = e.options[e.selectedIndex].value;

    var selectedNumber = readNumber(id);

    print(selectedNumber);
}