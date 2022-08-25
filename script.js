
const screen = document.querySelector(".screentexts")
const lcd = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")
const calcbody = document.querySelector(".calculatorbody")
const innerline = document.querySelector(".eqtext")

let input = []
let operand = "";
let value1 = "";
const decimal = document.querySelector(".decimal")




function add(a = 0, b = 0) {
    console.log(a + b);
  
 
screen.textContent = parseFloat((+a + +b).toFixed(7))



    return (parseFloat((+a + +b).toFixed(7)))
}

function subtract(a, b) {

    console.log(+a - +b)
    screen.textContent = parseFloat((+a - +b).toFixed(7))
    return parseFloat((+a - +b).toFixed(7))
}

function multiply(a, b) {
    screen.textContent = parseFloat((+a * +b).toFixed(7))

    return parseFloat((+a * +b).toFixed(7))
}



function divide(a, b) {

    if (a == 0 || b == 0) { screen.textContent = "Can't dun divihud by zeruh" }
    else {
        screen.textContent = parseFloat((+a / +b).toFixed(2))
        return +a / +b
    }
}

function switcher(a) {
    screen.textContent = -1 * a
    return -1 * a
}





function operate(operator, a, b) {

    if (operator == "+") {
        add(a, b)
    }
    else if (operator == "-") { subtract(a, b) }
    else if (operator == "*") { multiply(a, b) }
    else if (operator == "/") { divide(a, b) }
    else if (operator == "%") { percent(a, b) }
    else if (operator == "+/-") { switcher(a) }


}



window.addEventListener("keydown", e => {
    if (input.some(elem => {elem == "."})) {
        document.getElementById("dec").setAttribute("disabled", "true")
    }

   console.log(e.key, "leytracker")

    if (!isNaN(parseInt(e.key))) {
  
        if (screen.textContent == "0") { screen.textContent = "" }
        screen.textContent += e.key
        input.push(e.key)
        console.log(input)

    }

    else if (e.key == "=" || e.key == "Enter") {
        
        e.cancelBubble = true;
        
        e.preventDefault()
        current = input.join("")
        value1 = +value1
        current = +current
            document.getElementById("dec").setAttribute("disabled", "false")
            operate(operand, value1, current)
            innerline.textContent += ` ${current}`
    }

    else if (e.key == "Backspace") {
        input = screen.textContent.split("")
        if (input[input.length - 1] == ".") {
            document.getElementById("dec").removeAttribute("disabled")
        }

        input.pop()
        screen.textContent = input.join("")
        console.log(input)

    }

    else if (e.key == "+" ||
        e.key == "-" ||
        e.key == "/" ||
        e.key == "*") {
  
        if (screen.textContent == "0") { screen.textContent = "" }
        document.getElementById("dec").removeAttribute("disabled")
        value1 = +screen.textContent
        operand = e.key + "";

        input.push(e.key)
        screen.textContent = ""

        input = []
        innerline.textContent = `${value1} ${operand}`


       




    }


    else if (e.key == ".") {
        console.log("dont add")
     
        if (input.indexOf(".") >= 0 || screen.textContent.indexOf(".") >=0 || current.indexOf("." >= 0)) {
            screen.textContent == screen.textContent
            

        }


        else {  
             screen.textContent += e.key
            input.push(e.key)
 
            document.getElementById("dec").setAttribute("disabled", "true")}
      
 
   


    }


})







//

buttons.forEach((elem, ind, arr) => {



    elem.addEventListener("click", (e) => {

        if (input.some(elem => {elem == "."})) {
            document.getElementById("dec").setAttribute("disabled", "true")
        }


        let displayValue = e.target.textContent

        if (e.target.textContent == "AC") {
            innerline.textContent = ""
            e.target.blur
            document.getElementById("dec").removeAttribute("disabled", "false");
            input = [0]
            screen.textContent = "0"
            e.stopPropagation()          
           
    


        }

        else if (e.target.textContent == "+/-") {
            operate(e.target.textContent, screen.textContent)
        }

        else if (e.target.textContent == ".") {
            screen.textContent += e.target.textContent
            input.push(e.target.textContent)
            console.log(input)
            document.getElementById("dec").setAttribute("disabled", "true")
            //document.querySelector(".newcontainer").removeChild(decimal)
        }


        else if (e.target.textContent == "<") {
            input = screen.textContent.split("")
            if (input[input.length - 1] == ".") {
                document.getElementById("dec").removeAttribute("disabled")
            }

            input.pop()
            screen.textContent = input.join("")
            console.log(input)

        }


        else if (
            e.target.textContent == "+" ||
            e.target.textContent == "-" ||
            e.target.textContent == "*" ||
            e.target.textContent == "/" ||
            e.target.textContent == "%") {




            document.getElementById("dec").removeAttribute("disabled")

            //innerline.textContent = input.join("")+ " " +e.target.textContent + " "
            value1 = screen.textContent;
            operand = e.target.textContent;
            input.push(e.target.textContent)
            screen.textContent = ""

            input = []

            innerline.textContent = `${value1} ${operand}`



        }



        else if (e.target.textContent == "=") {

            current = input.join("")
            console.log(operand, value1, current, "operand, value1, current")
            value1 = +value1
            current = +current


            operate(operand, value1, current)


            console.log(input)
            document.getElementById("dec").setAttribute("disabled", "false")

            innerline.textContent += `${current}`


        }

        else {
            if (screen.textContent == "0") { screen.textContent = "" }
            screen.textContent += e.target.textContent
            input.push(e.target.textContent)
            console.log(input)
        }





    })




})