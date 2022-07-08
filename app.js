document.addEventListener("DOMContentLoaded", ()=>{
    var colorDisplayBox = document.getElementById("color-box");
    var hexValue = document.querySelector("span");
    var svgIcon = document.querySelector("svg");
    var valueArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var randomHexValue = ["#"];

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
            colorDisplayBox.style.backgroundColor = calcHexValue();
            hexValue.innerHTML = calcHexValue();
            randomHexValue = ["#"];
        }
        
    }

    svgIcon.addEventListener("click", function(){
        navigator.clipboard.writeText(hexValue.innerHTML);
    });
});