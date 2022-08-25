
const screen = document.querySelector(".screentexts")


function add (a,b) {
    console.log(+a + +b)
   // screen.textContent = (+a + +b)
    return +a + +b
}

function subtract (a,b) {
    console.log(+a - +b)
   screen.textContent = +a - +b
    return +a - +b
}

function multiply (a,b) {
    screen.textContent = +a * +b
    return a * b
}
  


function divide (a,b) {
   screen.textContent = +a / +b
    return +a / +b
}


function percent (a,b) {
    screen.textContent = +a / +b
     return +a % +b
 }



function operate(operator,a,b) {

if (operator == "+") {
    add(a,b)}
else if (operator == "-") {subtract(a,b)}
else if (operator == "*") {multiply(a,b)}
else if (operator == "/") {divide(a,b)}
else if (operator == "%") {percent(a,b)}



}

window.addEventListener('keydown', e => {
    console.log(e.key)
})







const buttons = document.querySelectorAll("button")


let input = []
let operand = "";
let value1 = "";

buttons.forEach((elem,ind,arr) => {



    elem.addEventListener("click", (e) => {
        

      

        let displayValue = e.target.textContent

        if (e.target.textContent == "AC") {
            screen.textContent = ""
            input = []
            console.log(input)}


        else if (e.target.textContent == "<") {
       
             input.pop()
             screen.textContent = input.join("")
                console.log(input)

            }


                else if (
                    e.target.textContent == "+" ||
                         e.target.textContent == "-" ||
                         e.target.textContent == "*" ||
                         e.target.textContent == "/") {
                            
                            value1 = screen.textContent;
                            operand = e.target.textContent;
                           console.log(value1, operand)
                            input.push(e.target.textContent)
                            screen.textContent = "" 
                          
                            input = []  



                }
          


        else if (e.target.textContent == "=") {

            current = input.join("")
            console.log(operand,value1,current, "operand, value1, current")
            value1 = +value1
            current = +current
            operate(operand, value1, current ) 
           
      
            
        }

        else {
            screen.textContent += e.target.textContent
            input.push(e.target.textContent)
        console.log(input)}
        




    })
        



})