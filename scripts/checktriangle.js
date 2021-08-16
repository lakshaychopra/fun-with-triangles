var angles = document.querySelectorAll(".angles");
var btn = document.querySelector("#calc");

var outputEL = document.querySelector("#output");


function calculateSum(angle1, angle2, angle3){
    var sum = angle1 + angle2 + angle3;
    return sum;
}

btn.addEventListener("click", function checkTriangle(){
    var sum = calculateSum(
        Number(angles[0].value),
        Number(angles[1].value),
        Number(angles[2].value)
    );
    if(sum === 180){
        outputEL.innerText = "Yes It is a Triangle";
    }
    else{
        outputEL.innerText = "No, It is not a Triangle";
    }
})