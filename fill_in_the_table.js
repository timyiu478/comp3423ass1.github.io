let table = new multiplication_table(10,10,1);
function getTable(){
    let table_row = document.getElementsByClassName("table_row");
    let  i,j;
    for(i=0;i<table_row.length;i++){
        for(j=0;j<10;j++){
            table_row[i].innerHTML +='<th style="width: 8%;" ><input type="text" class="user_input form-control" style="text-align:center;"></th>';
        }
    } 
    let input = document.getElementsByClassName("user_input");
    input[0].focus();

}

function submit_table(){
    playSelectSound();
    let input = document.getElementsByClassName("user_input");
    let i;
    let row = 0;
    for(i=0;i<input.length;i++){
        if(input[i].value==null){
            input[i].value = "";
        }
        col = i%10 + 1;
        if(col==1){
            row++;
        }
        console.log("col:"+col+", row :"+row);
        answer = table.getAnswer(row,col);
        console.log('answer: ' + answer);
        if(table.isCorrect(input[i].value,answer)){
            input[i].classList.remove("btn-outline-danger");
            input[i].classList.add("btn-outline-success");
            input[i].style.border = "2px solid green";
        }else{
            input[i].classList.add("btn-outline-danger");
            input[i].classList.remove("btn-outline-success");
            input[i].style.border = "2px solid red";
        }
    }
}

function playAgain_table(){
    playSelectSound();
    let input = document.getElementsByClassName("user_input");
    for(i=0;i<input.length;i++){
        input[i].value ="";
        input[i].classList.remove("btn-outline-danger");
        input[i].classList.remove("btn-outline-success");
        input[i].style.border = "";
    }
}


function keyevent_table(){
    if(window.event.key == "Enter"){
        submit_table();
    }
}

getTable();

