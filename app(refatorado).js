const form = document.querySelector('.quiz-form')

const correctAnswers = ['B', 'B', 'B', 'B', 'A', 'B']

let score = 0

const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value
]

const funcForm = event => {
    event.preventDefault()
    
    
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score+= 25
        }
    })
    console.log(score)
}


form.addEventListener('submit', funcForm)

