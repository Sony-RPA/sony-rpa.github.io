(function() {
var myQuestions = [
{
  question: "What type of process are you looking to automate?",
  answers: {
    a: "Accounting/Financial Reporting (consolidating books, reporting etc)",
    b: "IT assignments (user-onboarding, software deployment, etc.",
    c: "Operational activities (ordering supplies, quality assurance, etc.)"
  },
  correctAnswer: "b"
},
{
  question: "How long does it take to complete one sequence for this process?",
  answers: {
    a: "Less than 5 minutes",
    b: "5 minutes to an hour",
    c: "Over an hour"
  },
  correctAnswer: "a"
},
{
  question: "Do you have a product owner?",
  answers: {
    a: "Yes",
    b: "No"
  },
  correctAnswer: "a"
},
{
  question: "How many people work on this process?",
  answers: {
    a: "1",
    b: "1 to 10 people",
    c: "10+"
  },
  correctAnswer: "c"
},
{
  question: "Does your process require any 3rd party software or vendor?",
  answers: {
    a: "True",
    b: "False"
  },
  correctAnswer: "b"
},
{
  question: "Does your process require Microsoft Office applications (Excel, Word, etc.)?",
  answers: {
    a: "Yes",
    b: "No"
  },
  correctAnswer: "a"
},
{
  question: "Are any external devices needed to complete your process (phone, printer, etc.)",
  answers: {
    a: "Yes",
    b: "No"
  },
  correctAnswer: "b"
},
{
  question: "Can you or another team administer privileges to the applications required for your process?",
  answers: {
    a: "Yes",
    b: "No"
  },
  correctAnswer: "a"
}
]

  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for (varter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${varter}">
              ${varter} :
              ${currentQuestion.answers[varter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();