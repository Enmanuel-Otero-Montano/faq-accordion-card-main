const questions = document.querySelectorAll(".question")
const arrows = document.querySelectorAll(".arrow")
const answers = document.querySelectorAll(".answer")

const questionA = Array.from(questions)
const arrowA = Array.from(arrows)
const answerA = Array.from(answers)

for(let question of questionA) {
    question.addEventListener("click", () => {
        if(question.classList.contains("bold-font")) {
            question.classList.remove("bold-font")
            question.nextElementSibling.classList.remove("rotate")
            question.nextElementSibling.nextElementSibling.classList.add("hidden")
        }else {
            for(let questionR of questionA) {
                questionR.classList.remove("bold-font")
            }
            for(let arrowR of arrowA) {
                arrowR.classList.remove("rotate")
            }
            for(let answerR of answerA) {
                answerR.classList.add("hidden")
            }
            question.classList.add("bold-font")
            question.nextElementSibling.classList.add("rotate")
            question.nextElementSibling.nextElementSibling.classList.remove("hidden")
        }
    })
}

for(let arrow of arrowA) {
    arrow.addEventListener("click", () => {
        if(!arrow.classList.contains("rotate")) {
            for(let arrowR of arrowA) {
                arrowR.classList.remove("rotate")
            }
            for(let questionR of questionA) {
                questionR.classList.remove("bold-font")
            }
            for(let answerR of answerA) {
                answerR.classList.add("hidden")
            }
            arrow.classList.add("rotate")
            arrow.previousElementSibling.classList.add("bold-font")
            arrow.nextElementSibling.classList.remove("hidden")
        }else {
            arrow.classList.remove("rotate")
            arrow.previousElementSibling.classList.remove("bold-font")
            arrow.nextElementSibling.classList.add("hidden")
        }
    })
}