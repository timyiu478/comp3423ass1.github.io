function playSelectSound(){
    if(document.getElementById("toggleSoundButton").classList.contains("muted")){
        //do nothing
    }
    else{
        let audio = document.getElementById("select_click");
        if(audio!=null){
            audio.currentTime = 0;
            audio.play();
        }

    }

}



function goHomepage(){
    window.open('index.html', '_self'); 
}


function getSetting(){
    let setting = JSON.parse(localStorage.getItem("setting"));
    return setting;
}

function initSetup(){
    if(getSetting()==null){
        localStorage.setItem("setting",JSON.stringify([1,1,0]));
    }
    
}

function setup(){
    let setup = getSetting();

    let changeGamemodeButton = document.getElementById("changeGamemodeButton");
    let childNodes1 = changeGamemodeButton.childNodes;
    if(setup[0]==1){
        childNodes1[1].innerHTML = "&nbsp;Multiple Choice";
        childNodes1[2].innerHTML = "&nbsp;多項選擇";
    }
    else if(setup[0]==2){
        childNodes1[1].innerHTML = "&nbsp;Fill in the blank";
        childNodes1[2].innerHTML = "&nbsp;填空";
    }
    else if(setup[0]==3){
        childNodes1[1].innerHTML = "&nbsp;Fill in the table";
        childNodes1[2].innerHTML = "&nbsp;填寫表格";
    }

    let childNodes2 = document.getElementById("toggleSoundButton").childNodes;

    if(setup[1]==1){
        document.getElementById("toggleSoundButton").firstChild.classList.add("fa-volume-down");
        document.getElementById("toggleSoundButton").firstChild.classList.remove("fa-volume-mute");
        document.getElementById("toggleSoundButton").classList.remove("muted");

        childNodes2[1].innerHTML = "&nbsp;Sound";  
        childNodes2[2].innerHTML = "&nbsp;音效"; 
      
    }else{
        document.getElementById("toggleSoundButton").firstChild.classList.remove("fa-volume-down");
        document.getElementById("toggleSoundButton").firstChild.classList.add("fa-volume-mute");
        document.getElementById("toggleSoundButton").classList.add("muted");

        childNodes2[1].innerHTML = "&nbsp;Muted"; 
        childNodes2[2].innerHTML = "&nbsp;靜音";  

    }

    let ch = document.getElementsByClassName("ch");
    let eng = document.getElementsByClassName("eng");
    if(setup[2]==1){
        let i;
        for(i=0;i<ch.length;i++){
            if(i>4){
                ch[i].style.display = "inline-block";
                eng[i].style.display = "none";
            }
            else{
                ch[i].classList.add("lang");
                eng[i].classList.remove("lang");
            }
        }
    }
    else{
        let i;
        for(i=0;i<ch.length;i++){
            if(i>4){
                eng[i].style.display = "inline-block";
                ch[i].style.display = "none";
            }
            else{
                eng[i].classList.add("lang");
                ch[i].classList.remove("lang");
            }
        }
    }
}


function startGame(){
    playSelectSound();
    if(getGamemode()==1){
        window.open('multiple_choice.html', '_self', ''); 
        localStorage.setItem("setting",JSON.stringify([1,isMuted(),isEng()]));
    }
    else if(getGamemode()==2){
        window.open('select_table.html', '_self', ''); 
        localStorage.setItem("setting",JSON.stringify([2,isMuted(),isEng()]));
    }
    else{
        window.open('fill_in_the_table.html', '_self', ''); 
        localStorage.setItem("setting",JSON.stringify([3,isMuted(),isEng()]));
    }
}


function changeGamemodeButtonText(){
    let changeGamemodeButton = document.getElementById("changeGamemodeButton");
    let childNodes = changeGamemodeButton.childNodes;
    if(childNodes[1].innerHTML == "&nbsp;Fill in the table"){
        childNodes[1].innerHTML = "&nbsp;Multiple Choice";
        childNodes[2].innerHTML = "&nbsp;多項選擇";
    }
    else if(childNodes[1].innerHTML == "&nbsp;Multiple Choice"){
        childNodes[1].innerHTML = "&nbsp;Fill in the blank";
        childNodes[2].innerHTML = "&nbsp;填空";
    }
    else if(childNodes[1].innerHTML == "&nbsp;Fill in the blank"){
        childNodes[1].innerHTML = "&nbsp;Fill in the table";
        childNodes[2].innerHTML = "&nbsp;填寫表格";
    }
}

function changeGamemode(){
    playSelectSound();
    changeGamemodeButtonText();
}

function getGamemode(){
    let setGamemodeButton = document.getElementById("changeGamemodeButton");
    let childNodes = setGamemodeButton.childNodes;
    if(childNodes[1].innerHTML == "&nbsp;Fill in the table"||childNodes[2].innerHTML == "&nbsp;填寫表格"){
        return 3; // Fill in the form
    }
    else if(childNodes[1].innerHTML == "&nbsp;Fill in the blank"||childNodes[2].innerHTML == "&nbsp;填空"){
        return 2; // Fill in the blank
    }
    else if(childNodes[1].innerHTML == "&nbsp;Multiple Choice"||childNodes[2].innerHTML == "&nbsp;多項選擇"){
        return 1; // Multiple Choice
    }
    return 0;
}

function setGamemode(n){
    let setGamemodeButton = document.getElementById("changeGamemodeButton");
    let childNodes = setGamemodeButton.childNodes;
    let setting = JSON.parse(localStorage.getItem("setting"));
    
    if(n==3){
        childNodes[1].innerHTML == "&nbsp;Fill in the table";
        childNodes[2].innerHTML == "&nbsp;填寫表格";
        setting[0] = 3;
    }
    else if(n==2){
        childNodes[1].innerHTML == "&nbsp;Fill in the blank";
        childNodes[2].innerHTML == "&nbsp;填空";
        setting[0] = 2;
    }
    else{
        childNodes[1].innerHTML == "&nbsp;Multiple Choice";
        childNodes[2].innerHTML == "&nbsp;多項選擇";
        setting[0] = 1;
    }
    localStorage.setItem("setting",JSON.stringify(setting)); 
}

function toggleSound(){
    playSelectSound();
    let setting = JSON.parse(localStorage.getItem("setting"));
    let childNodes = document.getElementById("toggleSoundButton").childNodes;

    if(document.getElementById("toggleSoundButton").classList.contains("muted")){
        document.getElementById("toggleSoundButton").firstChild.classList.add("fa-volume-down");
        document.getElementById("toggleSoundButton").firstChild.classList.remove("fa-volume-mute");
        document.getElementById("toggleSoundButton").classList.remove("muted");

        childNodes[1].innerHTML = "&nbsp;Sound";  
        childNodes[2].innerHTML = "&nbsp;音效"; 
        
        setting[1] = 1;
    }else{
        document.getElementById("toggleSoundButton").firstChild.classList.remove("fa-volume-down");
        document.getElementById("toggleSoundButton").firstChild.classList.add("fa-volume-mute");
        document.getElementById("toggleSoundButton").classList.add("muted");

        childNodes[1].innerHTML = "&nbsp;Muted";  
        childNodes[2].innerHTML = "&nbsp;靜音"; 

        setting[1] = 0;  
    }
    localStorage.setItem("setting",JSON.stringify(setting));
}

function isMuted(){
    if(document.getElementById("toggleSoundButton").classList.contains("muted")){
        return 0;
    }else{
        return 1;
    }

}

function isEng(){
    let ch = document.getElementsByClassName("ch");
    if(ch[6].style.display != "inline-block"){
        return 0;
    }else{
        return 1;
    }
}

function setLanguage(){
    playSelectSound();
    let setting = JSON.parse(localStorage.getItem("setting"));
    let ch = document.getElementsByClassName("ch");
    let eng = document.getElementsByClassName("eng");
    if(ch[6].style.display != "inline-block"){
        let i;
        for(i=0;i<ch.length;i++){
            if(i>4){
                ch[i].style.display = "inline-block";
                eng[i].style.display = "none";
            }
            else{
                ch[i].classList.add("lang");
                eng[i].classList.remove("lang");
            }
        }
        setting[2] = 1;
    }
    else{
        let i;
        for(i=0;i<ch.length;i++){
            if(i>4){
                eng[i].style.display = "inline-block";
                ch[i].style.display = "none";
            }
            else{
                eng[i].classList.add("lang");
                ch[i].classList.remove("lang");
            }
        }
        setting[2] = 0;
    }
    localStorage.setItem("setting",JSON.stringify(setting));
}


class multiplication_table{
    constructor(row, col, startfrom){
        this.row = row;
        this.col = col;
        this.startfrom = startfrom;
    }

    getRandRow(){
        return this.startfrom + Math.floor(Math.random() * this.row); 
    }

    getRandCol(){
        return this.startfrom + Math.floor(Math.random() * this.col); 
    }

    getAnswer(n1,n2){
        return n1*n2;
    }

    isCorrect(input,answer){
        if(input == answer){
            return true;
        }
        return false;
    }

    getRandOption(){
        let n1 = this.startfrom + Math.floor(Math.random() * this.row);
        let n2 = this.startfrom + Math.floor(Math.random() * this.col);
        let answer = this.getAnswer(n1,n2);
        return [n1,n2,answer];
    }

    getRandPosition(){
        let randPosition = Math.floor(Math.random() * 4) ;
        return randPosition;
    }

    getRandQuestion(){
        let question = [];
        while(question.length < 4){
            let randOption =  this.getRandOption();
            if(question.indexOf(randOption) === -1) question.push(randOption);
        }
        let randPosition = this.getRandPosition();
        question.push(randPosition);
        return question;
    }

    getRandQuestions(n){
        let questions = [];
        while(questions.length < n){
            let question = this.getRandQuestion();
            if(questions.indexOf(question) === -1) questions.push(question);
        }
        return questions;
    }

}

function startTutorial(){
    playSelectSound();
    window.open('tutorial.html', '_self'); 
}

window.onload = function(){
    initSetup();
    setup();
};