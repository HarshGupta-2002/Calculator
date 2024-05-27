var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        myFunction(this);
    });
}

function myFunction(button) {
    var output = document.getElementsByClassName("output")[0];
    var buttonText = button.innerText;
    if(buttonText == "x") {
        buttonText = "*";
    }
    if (buttonText == "%") {
        output.innerText = eval((output.innerText))/100;
    }
    else if (buttonText === "=") {
        try {
            output.innerHTML = eval(output.innerHTML);
        } catch (e) {
            window.alert("Error");
        }
    }
    else if (buttonText === "AC") {
        output.innerHTML = "";
    }
    else if (buttonText === "C") {
        output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
        output.innerHTML += buttonText;
    }
}
