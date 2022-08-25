
const screen = document.querySelector(".screentexts")
function add (a,b) {
    console.log(+a + +b)
   // screen.textContent = (+a + +b)
    return +a + +b
}

function subtract (a,b) {
    console.log(a-b)
  //  screen.textContent = +a - +b
    return +a - +b
}

function multiply (a,b) {
   // screen.textContent = +a * +b
    return +a * +b
}
  


function divide (a,b) {
   // screen.textContent = +a / +b
    return +a / +b
}

function operate(operator,a,b) {

if (operator == "+") {
    add(a,b)}
else if (operator == "-") {subtract(a,b)}
else if (operator == "*") {multiply(a,b)}
else if (operator == "/") {divide(a,b)}



}









const buttons = document.querySelectorAll("button")


let input = []


buttons.forEach((elem,ind,arr) => {



    elem.addEventListener("click", (e) => {
        

      

        let displayValue = e.target.textContent

        if (e.target.textContent == "clear") {
            screen.textContent = ""
            input = []
            console.log(input)}


        else if (e.target.textContent == "<") {
           console.log( )
            
             input.pop()
             screen.textContent = input.join("")
                console.log(input)}

                else if (e.target.textContent == "+" ||
                         e.target.textContent == "-" ||
                         e.target.textContent == "*" ||
                         e.target.textContent == "/") {
                           
                            input.push(e.target.textContent)
                            screen.textContent = "" 
                            console.log(input)   



                }
          


        else if (e.target.textContent == "=") {
            screen.textContent += e.target.textContent
           operate(input[1], input[0], input[2]) 
      
            
        }

        else {
            
            input.push(e.target.textContent)
        console.log(input)}
        




    })
        



})