
const screen = document.querySelector(".screentexts")


function add (a,b) {
    console.log(+a + +b);
    screen.textContent =  parseFloat((+a + +b).toFixed(7))

  

    return (+a + +b)
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
    if (a == 0 || b == 0) {screen.textContent = "Can't dun divihud by zeruh"}
else {    screen.textContent = +a / +b
return +a / +b}
}

function switcher(a) {
    screen.textContent = -1 * a
    return -1 * a
}





function operate(operator,a,b) {

if (operator == "+") {
    add(a,b)}
else if (operator == "-") {subtract(a,b)}
else if (operator == "*") {multiply(a,b)}
else if (operator == "/") {divide(a,b)}
else if (operator == "%") {percent(a,b)}
else if (operator == "+/-") {switcher(a)}


}

window.addEventListener('', e => {
    console.log(e.key, "key") 
    {
        

      

        let displayValue = e.key

        if (e.key == "AC") {
            document.getElementById("dec").setAttribute("disabled", "false")
            screen.textContent = ""
            input = []
            console.log(input)
            operand = "";
            value1 = "";
            current = "";
           
        }

     
            else if (e.key == ".") {
                screen.textContent += e.key
                input.push(e.key)
            console.log(input)
            document.getElementById("dec").setAttribute("disabled", "true")
            //document.querySelector(".newcontainer").removeChild(decimal)
            }




                else if (
                    e.key == "+" ||
                         e.key == "-" ||
                         e.key == "*" ||
                         e.key == "/" ||
                         e.key == "%"  ) {
                            document.getElementById("dec").removeAttribute("disabled")
                            value1 = screen.textContent;
                            operand = e.key;
                
                            input.push(e.key)
                            screen.textContent = "" 
                          
                            input = []  
                      



                }
          


        else if (e.key == "Enter") {

            current = input.join("")
            console.log(operand,value1,current, "operand, value1, current")
            value1 = +value1
            current = +current
            operate(operand, value1, current ) 
            document.getElementById("dec").setAttribute("disabled", "false")
      
            
        }

        else {
            screen.textContent += e.key
            input.push(e.target.textContent)
        console.log(input)}
        




    }


})

window.addEventListener("keypress", e=> {



if (!isNaN(parseInt(e.key))) {
    console.log(e.key)
    if (screen.textContent == "0") {screen.textContent = ""}
    screen.textContent += e.key
    input.push(e.key)
    console.log(input)

}

else if (e.key == "Enter") {
    console.log("enter here")
    current = input.join("")
    console.log(operand,value1,current, "operand, value1, current")
    value1 = +value1
    current = +current
    operate(operand, value1, current ) 
    document.getElementById("dec").setAttribute("disabled", "false")
 

}

else if (e.key == "+" ||
        e.key == "-" ||
        e.key == "/" ||
        e.key == "*")
        {
            console.log("operator")
            document.getElementById("dec").removeAttribute("disabled")
            value1 = screen.textContent;
            operand = e.key;

            input.push(e.key)
            screen.textContent = "" 
          
            input = []  
      




        }


else if (e.key == ".") {
console.log("decimal here")
screen.textContent += e.key
input.push(e.key)
console.log(input)
document.getElementById("dec").setAttribute("disabled", "true")


}


})






const buttons = document.querySelectorAll("button")


let input = []
let operand = "";
let value1 = "";
const decimal = document.querySelector(".decimal")

buttons.forEach((elem,ind,arr) => {



    elem.addEventListener("click", (e) => {
        

      

        let displayValue = e.target.textContent

        if (e.target.textContent == "AC") {
            document.getElementById("dec").setAttribute("disabled", "false")
            screen.textContent = "0"
            input = []
            console.log(input)
         
            operand = "";
            value1 = "";
            current = "";
           
           
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
       
             input.pop()
             screen.textContent = input.join("")
                console.log(input)

            }


                else if (
                    e.target.textContent == "+" ||
                         e.target.textContent == "-" ||
                         e.target.textContent == "*" ||
                         e.target.textContent == "/" ||
                         e.target.textContent == "%"  ) {
                            document.getElementById("dec").removeAttribute("disabled")
                            value1 = screen.textContent;
                            operand = e.target.textContent;
                
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
            document.getElementById("dec").setAttribute("disabled", "false")
         
           
           
            
        }

        else {
            if (screen.textContent == "0") {screen.textContent = ""}
            screen.textContent += e.target.textContent
            input.push(e.target.textContent)
        console.log(input)}
        




    })
        



})