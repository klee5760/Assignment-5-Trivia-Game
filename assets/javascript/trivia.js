
var music = document.getElementById("myAudio");
var startScreen = $("#startScreen");
var gameScreen = $("#gameScreen");
var resultsScreen = $("#resultsScreen");
var startBtn = $("#startBtn");
var timerEl = $("#timer");
var correctEl = $("#correct");
var incorrectEl = $("#incorrect");

var questionBox = $("#questionBox")
var answerOne = $("#option1")
var answerTwo = $("#option2")
var answerThree = $("#option3")
var answerFour = $("#option4")
var answerBtns = $(".answerBtn")



var correct, incorrect, timerCount, timerId, questionIndex;

startBtn.on("click", start);
answerBtns.on("click", clickAnswer)

function start() {
  music.play()

  questionIndex = 0;
  correct = 0;
  incorrect = 0;
  timerCount = 20;
  startScreen.addClass("hide");
  gameScreen.removeClass("hide");
  resultsScreen.addClass("hide");
  loadQuestion();
  timer();
}

function clickAnswer(){
    var key = $(this).attr("id")

    console.log(questions[questionIndex][key])
    console.log(questions[questionIndex].answer)
}

function timer() {
  clearInterval(timerId);
  timerId = setInterval(function() {
    timerCount--;
    timerEl.text(timerCount);
  }, 1 * 1000);

  if (timercount<1){

    clearInterval(counter);
    $(timerEl).remove();
    $(".answers button").remove();
    $(answerBtns).remove();
    $("#correctEl").append(correct);
    $("#correctAnswer").append(correctAnswerDiv);
    $(".correctAns").text("Wrong! The correct answer was: "+questions[key].correct);
    $("#image").append(rightImage);
    $(".img").html("<img src = 'asset/images/"+imgArray[loadQuestion]+".jpg' class='mx-auto' width='400px'>");
    incorrect++;
    loadquestion++;

  }
}

function loadQuestion() {
  var q = questions[questionIndex];
  questionBox.text(q.question);
  answerOne.text(q.option1);
  answerTwo.text(q.option2);
  answerThree.text(q.option3);
  answerFour.text(q.option4);
};


function rightOrWrong(){
  var key = $(this).attr("id")

    console.log(questions[questionIndex][key])
    console.log(questions[questionIndex].answer)

  if(selected === questions[key].correct) {
    clearInterval(counter);
    $(timerEl).remove();
    $(".answers button").remove();
    $(answerBtns).remove();
    $("#correctEl").append(correct);
    $("#correctAnswer").append(correctAnswerDiv);
    $(".correctAns").text("Point!");
    $("#image").append(rightImage);
    $(".img").html("<img src = 'asset/images/"+imgArray[loadQuestion]+".jpg' class='mx-auto' width='400px'>");
    correct++;
    loadquestion++;
  
  
  }  else{
    clearInterval(counter);
    $(timerEl).remove();
    $(".answers button").remove();
    $(answerBtns).remove();
    $("#correctEl").append(correct);
    $("#correctAnswer").append(correctAnswerDiv);
    $(".correctAns").text("Wrong! The correct answer was: "+questions[key].correct);
    $("#image").append(rightImage);
    $(".img").html("<img src = 'asset/images/"+imgArray[loadQuestion]+".jpg' class='mx-auto' width='400px'>");
    incorrect++;
    loadquestion++;
  
  }

  function finalScore(){

    
  }

}