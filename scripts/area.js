var base = document.querySelector("#base")
var height = document.querySelector("#height")
var btn = document.querySelector("#calc")
var output = document.querySelector("#output")

btn.addEventListener("click", function calculateHypotenuse(){
    var area = 0.5*(base.value * height.value).toFixed(4)
    output.innerText = `The Area of triangle is  ${area} sq units`
}) 
