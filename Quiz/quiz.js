const submitBtn = document.querySelector(".submit-btn");
let checked = document.querySelectorAll(".question1");
let quiz = document.querySelector(".quiz");
const correctOption = 1;

const questions = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iddd?",
    option1: "option 1",
    option2: "option 2",
    correctOption: "1",
    class: "question1",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, id?ds",
    option1: "option 1",
    option2: "option 2",
    correctOption: "2",
    className: "question2",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,",
    option1: "option 1",
    option2: "option 2",
    correctOption: "1",
    className: "question3",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ?",
    option1: "option 1",
    option2: "option 2",
    correctOption: "2",
    className: "question4",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, i?",
    option1: "option 1",
    option2: "option 2",
    correctOption: "2",
    className: "question5",
  },
];

//display all qustions
function displayQuestions() {
  const questionAndAnswers = questions.map((q) => {
    return `<div class="q-and-a">

    <div class="question">
        ${q.question}
    </div>

    <div class="mcq">
        <input type="radio" name=${q.className} id="" class=${q.className}>${q.option1}</input>
        <input type="radio" name=${q.className} id="" class=${q.className}>${q.option2}</input>
    </div>
  
  </div>`;
  });

  quiz.innerHTML = questionAndAnswers;
}

submitBtn.addEventListener("click", submit);

function submit() {
  console.log(checked);
  if (checked[correctOption].checked === true) {
    console.log("true");
  } else if (checked[correctOption].checked === false) {
    console.log("flase");
  }
}

displayQuestions();
