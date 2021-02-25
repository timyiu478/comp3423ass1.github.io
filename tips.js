let row = JSON.parse(localStorage.getItem("row"));
let col = JSON.parse(localStorage.getItem("col"));

let n1 = document.getElementsByClassName("n1");
let n2 = document.getElementsByClassName("n2");
let n1n2_answer = document.getElementsByClassName("n1n2_answer");
let i;
for(i=0;i<n1.length;i++){
    n1[i].innerHTML = (row + 1);
    n2[i].innerHTML = (col + 1);
}
for(i=0;i<n1n2_answer.length;i++){
    n1n2_answer[i].innerHTML = (row + 1)*(col + 1);
}



function getTable(){
    let table1_row = document.getElementsByClassName("table1_row");
    let table2_row = document.getElementsByClassName("table2_row");
    let  i,j;
    for(i=0;i<table1_row.length;i++){
        for(j=0;j<10;j++){
            if((row == i && col == j)||(col == i && row == j)){
                table1_row[i].innerHTML +=`<th class="bg-info text-dark" style="width: 8%;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
            }else{
                table1_row[i].innerHTML +=`<th class="bg-light text-dark" style="width: 8%;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
            }      
        }
    } 
    for(i=0;i<table1_row.length;i++){
        for(j=0;j<10;j++){
            if(i<5&&j<5){
                table2_row[i].innerHTML +=`<th class="bg-info text-dark" style="width: 8%;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
            }else if(i<5&&j>=5){
                table2_row[i].innerHTML +=`<th class="bg-success text-light" style="width: 8%;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
            }else if(i>=5&&j<5){
                table2_row[i].innerHTML +=`<th class="bg-danger text-light" style="width: 8%;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
            }
            else{
                table2_row[i].innerHTML +=`<th class="bg-warning text-dark" style="width: 8%;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
            }      
        }
    } 
}

getTable();