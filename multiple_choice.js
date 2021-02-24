let table = new multiplication_table(10,10,1);
var questions = table.getRandQuestions(10);
setMCQuestionHTML(0);
console.log(questions);

function setMCQuestionHTML(n){
    let question_number = document.getElementById("question_number");

    question_number.innerHTML = n+1;

    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let answer_position = questions[n][4];
    n1.innerHTML = questions[n][answer_position][0];
    n2.innerHTML = questions[n][answer_position][1];

    let mcoption = document.getElementsByClassName("mcoption");
    let i;
    for(i=0;i<mcoption.length;i++){
        mcoption[i].innerHTML = questions[n][i][2];
    }
}


function playAgain_mc(){
    playSelectSound();
    table = new multiplication_table(10,10,1);
    questions = table.getRandQuestions(10);
    console.log(questions);
    let alert = document.getElementsByClassName("alert")[0];
    alert.style.opacity = "0%";  
    setMCQuestionHTML(0);
}

function answerMCQuestion(n){
    playSelectSound();
    let mcoption = document.getElementsByClassName("mcoption");
    let n1 = document.getElementById("n1").innerHTML;
    let n2 = document.getElementById("n2").innerHTML;
    let answer = table.getAnswer(n1,n2);
    let isCorrect = table.isCorrect(mcoption[n].innerHTML,answer);
    let question_number = document.getElementById("question_number").innerHTML;
    let alert = document.getElementsByClassName("alert")[0];

    if(isCorrect &&(question_number-1)!=9){ 
        alert.style.opacity = "0%";    
        setMCQuestionHTML(parseInt(question_number));

    }else if(isCorrect &&(question_number-1)==9){
        alert.style.opacity = "100%";
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
        document.getElementById("alert_wording_eng").innerHTML = "Finish!&nbsp;&nbsp;&nbsp;<button class='btn btn-outline-success' onclick='playAgain()'><i class='fas fa-redo'></i>&nbsp;Play Again</button>";
        document.getElementById("alert_wording_ch").innerHTML = "完成!&nbsp;&nbsp;&nbsp;<button class='btn btn-outline-success' accesskey='r' onclick='playAgain_mc()'><i class='fas fa-redo'></i>&nbsp;再玩一遍</button>";
    }else{
        alert.classList.add("alert-danger");
        alert.classList.remove("alert-success");
        document.getElementById("alert_wording_eng").innerHTML = "Incorrect!&nbsp;&nbsp;&nbsp;Please try again.";
        document.getElementById("alert_wording_ch").innerHTML = "錯誤!&nbsp;&nbsp;&nbsp;請再試一次。";
        alert.style.opacity = "100%";
    }
}

function keyevent_mc(){
    console.log(window.event.key);
    if(window.event.key == 1){
        answerMCQuestion(0);
    }
    if(window.event.key == 2){
        answerMCQuestion(1);
    }
    if(window.event.key == 3){
        answerMCQuestion(2);
    }
    if(window.event.key == 4){
        answerMCQuestion(3);
    }
}