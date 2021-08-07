const submitBtn = document.querySelector(".submit-btn");
const quiz = document.querySelector(".quiz");
const displayScore = document.querySelector(".score");

const questions = [
  {
    question: "A triangle's angles add upto 180 degrees.",
    questionNumber: "Q1",
    option1: "True",
    option2: "False",
    correctOption: 1,
    wrongOption: 2,
    className: "question1",
  },
  {
    question: "There can be 2 right angles in a triangle.",
    questionNumber: "Q2",
    option1: "True",
    option2: "Flase",
    correctOption: 2,
    wrongOption: 1,
    className: "question2",
  },
  {
    question: "Can A triangle have 2 obtuse angles?",
    questionNumber: "Q3",
    option1: "No",
    option2: "Yes",
    correctOption: 1,
    wrongOption: 2,
    className: "question3",
  },
  {
    question:
      "A triangle with all three equal sides is called an equilateral triangle",
    questionNumber: "Q4",
    option1: "True",
    option2: "False",
    correctOption: 1,
    wrongOption: 2,
    className: "question4",
  },
  {
    question: "An equilateral triangle has three acute angles",
    questionNumber: "Q5",
    option1: "Flase",
    option2: "True",
    correctOption: 2,
    wrongOption: 1,
    className: "question5",
  },
];

//display all qustions
function displayQuestions() {
  const questionAndAnswers = questions
    .map((q) => {
      return `<div class="q-and-a ${q.questionNumber}">
    <div class="question">
        ${q.questionNumber}) ${q.question}
    </div>

    <div class="mcq">
        <input type="radio" name=${q.className} id="" class="${q.className}">${q.option1}</input>
        <input type="radio" name=${q.className} id="" class="${q.className}">${q.option2}</input>
    </div>
  
  </div>`;
    })
    .join("");

  quiz.innerHTML = questionAndAnswers;
}

submitBtn.addEventListener("click", submit);

displayQuestions();

//calculate score
function submit() {
  let score = 0;
  for (i = 0; i < questions.length; i++) {
    // console.log("checked");

    let allOptions = document.querySelectorAll(`.question${i + 1}`);
    // console.log(allOptions[questions[i].correctOption - 1].checked);

    if (allOptions[questions[i].correctOption - 1].checked === true) {
      score += 2;
      let green = document.querySelector(`.Q${i + 1}`);
      green.style.background = "lightgreen";
    } else if (allOptions[questions[i].wrongOption - 1].checked === true) {
      let red = document.querySelector(`.Q${i + 1}`);
      score--;
      red.style.background = "pink";
    } else {
      score = score;
    }
  }

  displayScore.innerText = `Score:  ${score}`;
  if (score > 0) {
    displayScore.style.color = "green";
    displayScore.style.border = "1px solid green";
  } else if (score < 0) {
    displayScore.style.color = "red";
    displayScore.style.border = "1px solid red";
  }
}
