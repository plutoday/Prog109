/*
================================
Coder: Xiaoxuan Li
Date : 03/03/2018

Description: M06 Assignment - letting user input answer, and compare with user input, give results.

*/ 
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame, false);
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextQuestion, false);
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", checkAnswer, false);
const quitBtn = document.querySelector("#quit");
quitBtn.addEventListener("click", quit, false);
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", startGame, false);
let question = document.querySelector("#question");
let answer;
let output = document.querySelector("#output");
let gameScene =  document.querySelector("#gameScene");


const questions = ["If you divide twenty by half and add 30, what do you get?", 
"How many 5mm slices of bread can be cut from a loaf of bread that is 30cm long?",
"Lee's parents immigrated from China. They have five kids. The first four are named La, Le, Li and Lo, what did they name the fifth?",
"If I drink, I die. If I eat, I am fine. What am I?",
"John digs a hole that is 2 yards wide, 3 yards long, and 1 yard deep. How many cubic yards of dirt are needed to fill the hole?",
"You are 3rd place right now in a race. What place are you in when you pass the peron in 2nd place?",
"How many months have 28 days?"];
const answers = ["70", "60", "lee", "fire", "6", "2nd","12"];
const totalQuestions = questions.length;

let questionIndex = 0;
let rightCount = 0;
let wrongCount = 0;

function startGame(){
    startBtn.style.display = "none";
    restartBtn.style.display = "none";
    gameScene.style.display = "block";
    output.innerHTML = "";
    question.innerHTML = questions[0];
    rightCount = 0;
    wrongCount = 0;
}
function nextQuestion(){
    output.innerHTML = "";
    document.querySelector("#answer").value = "";

    if (questionIndex<totalQuestions-1){
        console.log(totalQuestions);
        questionIndex++;
        question.innerHTML = questions[questionIndex];
    } else{
        quit();
    }
}

function checkAnswer(){
    answer = document.querySelector("#answer").value.trim().toLowerCase();

    if (answer==answers[questionIndex]){

        rightCount++;
        output.innerHTML = "It is correct!";
    } else{
        wrongCount++;
        output.innerHTML = "It is wrong! The answer is " + answers[questionIndex];;
    }
}

function quit(){
    gameScene.style.display = "none";
    restartBtn.style.display = "block";
    if (rightCount+wrongCount<questions.length){
        output.innerHTML = "You did not finish whole quiz, you got " + rightCount + " out of " + questions.length + " points";
    } else {
        if (wrongCount==0){
        output.innerHTML = "Congrats, you got " + rightCount + " out of " + questions.length + " points. Excelent job!";
        } else if (wrongCount<=1){
            output.innerHTML = "Congrats, you got " + rightCount + " out of " + questions.length + " points. Great job!";
            } else if (wrongCount<=3){
                output.innerHTML = "Congrats, you got " + rightCount + " out of " + questions.length + " points. Good job!";
                } else {
                    output.innerHTML = "You got " + rightCount + " out of " + questions.length + " points. You need do some practice to pass the test!";
                    } 
    }
}