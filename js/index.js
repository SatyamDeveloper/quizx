const data = [
  {
    question: "What is balanced force?",
    options: ["something", "nothing", "either", "neither"],
    answer: "ans1",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
  },
  {
    question: "What is circumscribed force?",
    options: ["Hellso", "bsdfelo", "celfdslo", "defsllo"],
    answer: "ans2",
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
const showScore = document.getElementById("score");

let q_n = 0;
let score = 0;
let result = [];

const setData = () => {
  question.innerHTML = `${q_n + 1}. ${data[q_n].question}`;

  for (let i = 0; i < options.length; i++) {
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

  console.log(check);

  if (check === data[q_n].answer) {
    score++;
  } else {
    result.push(q_n + 1);
  }

  q_n++;

  deselect();

  if (q_n < data.length) {
    setData();
  } else {
    showScore.innerHTML = `Your score is "${score}/${data.length}" and you have given wrong answers of q/no. "${result}" ✌😎<button onclick="location.reload()">Play Again</button>`;

    showScore.classList.remove("din");

    nextButton.style.display = 'none';
  }
});
