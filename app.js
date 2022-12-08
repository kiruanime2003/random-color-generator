document.addEventListener("DOMContentLoaded", ()=>{

    var colorDisplayBox = document.getElementById("color-box");
    var hexValue = document.querySelector("span");
    var svgIcon = document.querySelector("svg");
    var valueArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var randomHexValue = ["#"];
    var undoHexValue = ["#06D7D7"];

    window.addEventListener("keydown", changeBackgroundColor);

    function calcHexValue(){
        for(let i=0; i<6; i++)
        {
            let y = valueArray[Math.round(Math.random() * (valueArray.length-1))];
            if(randomHexValue.length == 7){
                break;
            }
            else randomHexValue.push(y);
        }
        return randomHexValue.join("");
    }

    function changeBackgroundColor(event){
        if(event.key === " "){
            undoHexValue.push(calcHexValue());
            colorDisplayBox.style.backgroundColor = calcHexValue();
            hexValue.innerHTML = calcHexValue();
            console.log(undoHexValue);
            randomHexValue = ["#"];
        }
    }

    window.addEventListener("keydown", (event)=>{
        if(event.ctrlKey && event.key == "z"){
            undoHexValue.pop();
            console.log(undoHexValue.pop());
        }
    });

    svgIcon.addEventListener("click", function(){
        navigator.clipboard.writeText(hexValue.innerHTML);
    });
});