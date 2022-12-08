document.addEventListener("DOMContentLoaded", ()=>{

    var colorDisplayBox = document.getElementById("color-box");
    var hexValue = document.querySelector("span");
    var svgIcon = document.querySelector("svg");
    var valueArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var randomHexValue = ["#"];
    var undoHexValue = ["#06D7D7"];
    var top = 0;

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
            top = top+1;
            colorDisplayBox.style.backgroundColor = calcHexValue();
            hexValue.innerHTML = calcHexValue();
            randomHexValue = ["#"];
        }
    }

    window.addEventListener("keydown", (event)=>{
        if(event.ctrlKey && event.key == "z"){ //checking multiple key presses
            var temp = [];
            undoHexValue.pop();
            top = top -1;
            if(top<0){
                colorDisplayBox.style.backgroundColor = "#06D7D7";
                hexValue.innerHTML = "#06D7D7";
            }
            else{  
                temp = undoHexValue[top];
                colorDisplayBox.style.backgroundColor = temp;
                hexValue.innerHTML = temp;
            }
        }
    });

    svgIcon.addEventListener("click", function(){
        navigator.clipboard.writeText(hexValue.innerHTML);
    });
});