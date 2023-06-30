const quizData = [
    {
        question: "Wie viele Aussiedlungswellen der Deutschen nach Kasachstan gab es?",
        a: "4",
        b: "7",
        c: "3",
        d: "2",
        correct: "d",
    },
    {
        question: "Название этой выпечки происходит от глагола «натирать». Что это?",
        a: "Franzbrötchen",
        b: "Riwwelkuchen",
        c: "Stollen",
        d: "Der Speckkuchen",
        correct: "b",
    },
    {
        question: "Dieses Fest feiert man im Herbst nach der Ernte. Es hat kein festes Datum. Was für ein Fest ist das?",
        a: "der Reformationstag ",
        b: "Allerheiligen",
        c: "Erntedankfest",
        d: "Oktoberfest",
        correct: "c",
    },
    {
        question: "Vor Russlanddeutschen hat es niemand in Russland gezüchtet?",
        a: "Süßer Pfeffer",
        b: "Sauerkraut",
        c: "Senf",
        d: "Kartoffel",
        correct: "c",
    },
    {
        question: "На этом празднике пары прыгают через костер?",
        a: "Johannistag",
        b: "Valentinstag",
        c: "Fasching",
        d: "Weihnachten",
        correct: "a",
    },
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