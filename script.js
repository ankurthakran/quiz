const quizData = [


{
   question : " ______ is an ancient Greek ideal ratio that can be expressed in numbers as 0.618034:1",

   a: " intensity",
   b:"Golden Section",
   c:"color scheme",
   d:" proportion",
   correct:"b",
},
{
   question : "________ is a false visual perception seeing something other than what is really there",

   a: " proportion",
   b:"illusion",
   c:" Graphic design",
   d:"none of the above",

   correct:"b",
},
{
    question : "_______a pattern that shows",

   a: " template",
   b:"dingo",
   c:"Dungo ",
   d:"Red fox",

   correct:"a",
},
{
    question : " _______is the process of organizing and composing words and images to create a message",

   a: "Graphic design",
   b:"walrus",
   c:"seal",
   d:" expression",

   correct:"a",
}

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
  deselectAnswers ();
  const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
              answer = answerEL.id;
            }

      });

      return answer;

  }

function deselectAnswers () {
  answerEls.forEach(answerEL=> {
            answerEL.checked = false;

      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();

   if(answer){
         if(answer === quizData[currentQuiz].correct){

          score++;
         }

         currentQuiz++;

         if(currentQuiz < quizData.length){
          loadQuiz();
         }
         else{
          quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











}); 