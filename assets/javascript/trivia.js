var card = $("#quiz-area");
var countStartNumber = 10;

//Variable to hold our setInterval

var timer;

var game = {
  answers: answers,
  currentAnswer: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (game.counter === 0) {
      console.log("Oops! Time's Up!");
      this.timeUp();
    }
  },

  loadAnswer: function() {
    timer = setInterval(this.countdown.bind(this), 1000);
    card.html("<h2>" + answers[this.currentAnswer].answer + "</h2>");

    for (var i = 0; i < answers[this.currentAnswer].questions.length; i++) {
      card.append(
        "<button class='btn btn-default btn-lg m-1 response-btn' id=button data-name='" +
          answers[this.currentAnswer].questions[i] +
          "'>" +
          answers[this.currentAnswer].questions[i] +
          "</button>"
      );
    }
  },

  nextAnswer: function() {
    this.counter = window.countStartNumber;
    $("counter-number").text(this.counter);
    this.currentAnswer++;
    this.loadAnswer.bind(this)();
  },

  timeUp: function() {
    this.incorrect++;
    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Beep! Beep! Beep!</h2>");
    card.append(
      "<h3>The correct Reponse was:" +
        answers[this.currentAnswer].correctResponse
    );
    card.append("<img src'" + answers[this.currentAnswer].image + "'/>");

    if (this.currentAnswer === answers.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    } else {
      setTimeout(this.nextAnswer.bind(this), 3 * 1000);
    }
  },

  results: function() {
    clearInterval(window.timer);

    card.html("<h2>All Finished! Here are the results!</h2>");

    $("#counter-number").text(this.counter);

    card.append("<h3>Corrects:" + this.correct + "</h3>");
    card.append("<h3>Incorrects:" + this.incorrect + "</h3>");
    card.append("<br><button id= 'start-over'>Restart</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if (
      $(e.target).attr("data-name") ===
      answers[this.currentAnswer].correctResponse
    ) {
      this.responseCorrectly();
    } else {
      this.reponseInorrectly();
    }
  },

  reponseInorrectly: function() {
    this.incorrect++;

    card.html("<h2>Nope!</h2>");
    card.append(
      "<h3>The Correct Response was: " +
        answers[this.currentAnswer].correctResponse +
        "</h3>"
    );
     card.append("<img src = './assets/img/alextrebek.jpg'/>");

    if (this.currentAnswer === this.answers.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    } else {
      setTimeout(this.nextAnswer.bind(this), 3 * 1000);
    }
  },

  responseCorrectly: function() {
    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    //  card.append("<img src ='" + answers[this.currentAnswer].image + "'/>");

    if (this.currentAnswer === this.answers.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    } else {
      setTimeout(this.nextAnswer.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentAnswer = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadAnswer();
  }
};

//Click Events

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".response-btn", function(e) {
  console.log("Clicked");
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend(
    "<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>"
  );
  game.loadAnswer.bind(game)();
});
