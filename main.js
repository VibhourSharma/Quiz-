const quizData = [
    {
        question: `How old is Vibhour?`,
        a: `20`,
        b: `21`,
        c: `23`,
        d: `22`,
        correct: `c`
    },
    {
        question: `The most popular programming language is?`,
        a: `JavaScript`,
        b: `Python`,
        c: `Java`,
        d: `C++`,
        correct: `a`
    }, {
        question: `Who is the President of US?`,
        a: `Chris Evans`,
        b: `Joe Biden`,
        c: `Maninder Mankotia`,
        d: `Vipansh Thakur`,
        correct: `b`
    }, {
        question: `Who is the President of Russia?`,
        a: `Vladimir Putin`,
        b: `Abdu Rozik`,
        c: `Ibrahim Zadran`,
        d: `Kharkiv`,
        correct: `a`
    }, {
        question: `Who is the Prime Minister of India?`,
        a: `Rahul Gandhi`,
        b: `Shahrukh Khan`,
        c: `Vibhour Sharma`,
        d: `None of the above`,
        correct: `d`
    }
]
const answerEls = document.querySelectorAll(`.answer`);
const questionDc = document.getElementById(`question`);
const a_text = document.getElementById(`a_text`);
const b_text = document.getElementById(`b_text`);
const c_text = document.getElementById(`c_text`);
const d_text = document.getElementById(`d_text`);
const submitBtn = document.getElementById(`submitBtn`);
const quiz = document.getElementById(`quiz`);

let currentQuiz = 0;
let score = 0;


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionDc.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

function getSelected() {
    let answer = undefined;
    answerEls.forEach(function(answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach( function (answerEl){
        answerEl.checked = false;
    });
}

submitBtn.addEventListener(`click`, function () {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++;
        if (
            currentQuiz < quizData.length
        ) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> 
            
            <button onclick='location.reload()'>Reload</button>`;
        }
    }
});