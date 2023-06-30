const quizData = [
    {
        question: "Сколько всего было председателей в СНМК?",
        a: "8",
        b: "9",
        c: "11",
        d: "10",
        correct: "d",
    },
    {
        question: "Wann wurde Verband der Deutschen Jugend Kasachstans gegründet? ?",
        a: " 3. März 1996",
        b: "23. Februar 1996",
        c: "21. Februar 1996",
        d: "30. Februar 1996",
        correct: "b",
    },
    {
        question: "Wer ist derzeit Vorsitzender des VDJK?",
        a: "Kristina Librikht",
        b: "Maria Borisevich",
        c: "Eugenia Schreiber",
        d: " Anastasia Rimmer",
        correct: "a",
    },
    {
        question: "Was bedeutet der Phönix auf dem Logo der  Gesellschaftlichen Stiftung 'Vereinigung  der Deutschen Kasachstans?'",
        a: "Unabhängigkeit",
        b: "Brücke zwischen",
        c: "Kasachstan und Deutschland Völkerfreundschaft",
        d: "Wiedergeburt",
        correct: "d",
    },

    {
        question: "Wie alt wird VDJK im Jahr 2239 sein?",
        a: "223",
        b: "226",
        c: "243",
        d: "232",
        correct: "c",
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