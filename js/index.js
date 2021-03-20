const data = [
  {
    question: "Full form of HTML",
    options: ["Hyper Teck Mark Language", "Hyper Text Markup Language", "Hyper Tick Markup Language", "all of the above"],
    answer: "ans2",
  },
  {
    question: "Full form of CSS",
    options: ["Chrome Spread Sheet", "Cascading Style Spreadsheet", "Cascading Style Sheet", "None"],
    answer: "ans3",
  },
  {
    question: "Full form of JS",
    options: ["Javascript", "Javaspreadsheet", "Javasheet", "all of the above"],
    answer: "ans1",
  },
];


const question = document.querySelector("body > div > div > p");
const answers = document.querySelectorAll(
  "body > div > div > div > label > input"
);
const options = document.querySelectorAll(
  "body > div > div > div > label > h3"
);
const nextButton = document.querySelector("body > div > div > button");
const showScore = document.querySelector("body > div > div > #score");
const side = document.querySelector("body > div > .side");
const box = document.querySelector("body > div > .box");

let q_n = 0;
let score = 0;
let result = [];
let correct = [];


// console.log(Math.floor(Math.random()*data[q_n].options.length));

const setData = () => {
  question.innerHTML = `${q_n + 1}. ${data[q_n].question}`;
  
  for (let i = 0; i < options.length; i++) {
    // const regex = Math.floor(Math.random()*data[q_n].options.length)
    // options[i].innerHTML = data[q_n].options[regex];
    options[i].innerHTML = data[q_n].options[i];
  }
};

setData();

const getcheck = () => {
  let answer;

  answers.forEach((cuurentInput) => {
    if (cuurentInput.checked) {
      answer = cuurentInput.id;
    }
  });

  return answer;
};

const deselect = () => {
  answers.forEach((cuurentInput) => {
    cuurentInput.checked = false;
  });
};

nextButton.addEventListener("click", () => {
  const check = getcheck();

  if (check === data[q_n].answer) {
    score++;
    correct.push(
      `${box.innerHTML}<h3>Your Answer: <b>${
        check || "Not answered"
      }</b><br>  Correct Answer: <b>${data[q_n].answer}</b></h3>`
    );
  } else {
    result.push(q_n + 1);
    correct.push(
      `${box.innerHTML}<h3>Your Answer: <b>${
        check || "Not answered"
      }</b><br>  Correct Answer: <b>${data[q_n].answer}</b></h3>`
    );
  }

  q_n++;

  deselect();

  if (q_n < data.length) {
    setData();
  } else {
    showScore.innerHTML = `<h3>Your Score: <b>${score}/${data.length}</b></h3>
    <h4>Wrong Answers of Q/no: <b>${result}</b></h4>
    <button onclick="location.reload()">Play Again</button>`;

    showScore.classList.remove("din");

    for (let q = 0; q < correct.length; q++) {
      const element = correct[q];

      const correctDiv = document.createElement("div");
      correctDiv.classList.add("correct");
      correctDiv.innerHTML = correct[q];
      side.appendChild(correctDiv);
    }

    side.classList.remove("din");
  }
});
