# calculator


        <div class="buttons">
            <div class="numbers" id="foo">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <br><br><br><br><br><br><br><br><br><br><br>
                <button id="zero">0</button>
            </div>
            <div class="operators">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <br><br><br><br><br><br><br><br>

                <button class="last">clear</button>
                <button class="last"><</button>
                <button id="equals">=</button>

            </div>
        </div>

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
            e.key == "%") {
            document.getElementById("dec").removeAttribute("disabled")
            value1 = screen.textContent;
            operand = e.key;

            input.push(e.key)
            screen.textContent = ""

            input = []




        }



        else if (e.key == "Enter") {

            current = input.join("")
            console.log(operand, value1, current, "operand, value1, current")
            value1 = +value1
            current = +current
            operate(operand, value1, current)
            document.getElementById("dec").setAttribute("disabled", "false")


        }

        else {
            screen.textContent += e.key
            input.push(e.target.textContent)
            console.log(input)
        }





    }


})