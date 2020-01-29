var correctanswer = 0;
var wronganswer =0;
var time = 20;

var correctDiv = $("<div class='correct'></div>");
var timerDiv = $("<div class = 'timeremain'><h2></h2></div>");
var questionDiv = $("<div class = 'question'><h1></h1></div>");
var answerDiv = $("<div class = 'answers>/div>");

var container = document.getElementById('quizContainer');
var questionEl
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContext = (questionIndex +1) + '. ' + q.question;
    opt1.textContext = q.option1;
    opt1.textContext = q.option2;
    opt1.textContext = q.option3;
    opt1.textContext = q.option4;
};

function showQuestions() {
    
}

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selctedOption) {
        alert('Please select your answer!');
        return;
    }

   function finalScore() {
       $(".correctAnswer").remove();
       $("#question-block").prepend("<h3> Correct: + answeredCorrect+ </h3>");
       $("#question-block").prepend("<h3> Wrong: + answeredIncorrect+ </h3>");
       $("#start-button").show();
       $("start-here").show();

   }

};

$(document).on("click","#start-button",reset);





