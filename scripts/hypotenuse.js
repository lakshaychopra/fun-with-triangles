var base = document.querySelector("#base")
var height = document.querySelector("#height")
var btn = document.querySelector("#calc")
var output = document.querySelector("#output")

btn.addEventListener("click", function calculateHypotenuse(){
    var hypotenuse = Math.sqrt(Math.pow(base.value, 2) + Math.pow(height.value, 2)).toFixed(4)
    output.innerText = `The length of hypotenuse is ${hypotenuse} units`
}) 
