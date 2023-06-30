const quizData = [
    {
        question: "1. Какой элемент одежды женского костюма подразделялся на верхний, сшитый из атласа и нижний, сшитый из обычной ткани?",
        a: "юбка",
        b: "сапоги",
        c: "шляпа",
        d: "носки",
        correct: "a",
        },
        {
        question: "Какой элемент крестьянской одежды стал частью национального костюма поволжских немцев, после проезда Жданова в районе Екатериненштадта?",
        a: "рубашка",
        b: "Соломенная шляпа",
        c: "пояс",
        d: "ничего из вышеперечисленного",
        correct: "b",
        },
        {
        question: "Какой цвет считался праздничным и торжественным у поволжских немцев?",
        a: "черный",
        b: "зеленый",
        c: "желтый",
        d: "синий",
        correct: "a",
        },
        {
        question: "Какой свадебный головной убор невесты не претерпел изменений, которые затронули костюмы немцев-переселенцев?",
        a: "шляпа",
        b: "венок",
        c: "платок",
        d: "ничего из вышеперечисленного",
        correct: "b",
        },
        {
        question: "Обязательный элемент мужского костюма поволжских немцев, имеющий большое количество пуговиц",
        a: "жилет ",
        b: "брюки",
        c: "галстук",
        d: "ничего из вышеперечисленного",
        correct: "a",
        }
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
                <button onclick="redirectToPage('./main.html')">HOME</button>
            `
        }
    }
})