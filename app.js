// CODIGO FEITO NA AULA 19, NÃO FUNCIONOU
const form = document.querySelector('form')

const correctAnswers = ['B', 'B', 'B', 'B',]

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    let score = 0

    userAnswers.forEach((userAnswer, index) => {
        
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    });
    console.log(score)
})


// REVISADO DEPOIS DA ATIVIDADE 20, FUNCIONA
const form = document.querySelector('.quiz-form')

const correctAnswers = ['B', 'B', 'B', 'B', 'A', 'B']

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0
    
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score+= 25
        }
    })
    console.log(score)
})
