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