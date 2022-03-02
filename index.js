// list of answers
const correctAnswers = ["A", "B", "A", "B"];

const quizForm = document.querySelector(".quiz-form");

console.log(quizForm);

const result = document.querySelector(".result");

const points = document.querySelector(".points");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
  ];
  let score = 0;

  userAnswers.forEach((answers, index) => {
    if (answers === correctAnswers[index]) {
      score += 25;
    }

    result.classList.remove("d-none");
    
    scrollTo(0, 0);
    
    let output = 0;

    const timer = setInterval(() => {
        points.textContent = output + "%"
        if(output === score){
            clearInterval(timer)
        }else {
            output ++
        }
    }, 10);

  });
});
