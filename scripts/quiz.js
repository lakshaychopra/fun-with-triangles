var quizForm = document.querySelector(".quiz-form")
var btn = document.querySelector("#submit")
var output = document.querySelector("#output")

const correctAnswers = [
    "90°",
    "Right",
    "Obtuse Triangle",
    "Acute Triangle",
    "Issoceles Triangle",
    "Perimeter",
    "∠A = ∠C"
]

btn.addEventListener("click", function calculateScore() {
    const formResults = new FormData(quizForm);
    let score = 0,
        index = 0;
    console.log(formResults)
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText = "Your score is " + score;
})