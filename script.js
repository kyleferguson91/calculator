

function add (a,b) {
    console.log(a+b)
    return a + b
}

function subtract (a,b) {
    console.log(a-b)
    return a-b
}

function multiply (a,b) {

    return a*b
}

function divide (a,b) {

    return a/b
}

function operate(operator,a,b) {

if (operator == "+") {
    add(a,b)}
else if (operator == "-") {subtract(a,b)}
else if (operator == "*") {multiply(a,b)}
else if (operator == "/") {divide(a,b)}



}


(operate("-",2,3))
