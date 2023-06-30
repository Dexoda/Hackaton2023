const quizData = [
    {
    question: "1. В каком году и где прошел первый Республиканский молодёжный лингвистический лагерь?",
    a: "1998 Алматы",
    b: "1996 Боровое",
    c: "2001 Тараз",
    d: "2002 Астана",
    correct: "b",
    },
    {
    question: "2. Кто является председателем Казахстанского объединения немцев 'Общественный фонд 'Возрождение'?",
    a: "Альберт Павлович",
    b: "Сергей Иванович",
    c: "Евгений Больгерт",
    d: "Ольга Бедер",
    correct: "c",
    },
    {
    question: "3. Где была создана первая театральная студия при КНМ?",
    a: "Алматы",
    b: "Караганда",
    c: "Актобе",
    d: "Астана",
    correct: "d",
    },
    {
    question: "4. Сколько подписчиков на аккаунте VDJK в инстаграм?",
    a: "2356",
    b: "3768",
    c: "4423",
    d: "4447",
    correct: "c",
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