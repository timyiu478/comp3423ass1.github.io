let row = JSON.parse(localStorage.getItem("row"));
let col = JSON.parse(localStorage.getItem("col"));

let n1 = document.getElementsByClassName("n1");
let n2 = document.getElementsByClassName("n2");
let n1n2_answer = document.getElementsByClassName("n1n2_answer");
let i;
for(i=0;i<n1.length;i++){
    n1[i].innerHTML = (row + 1);
}
for(i=0;i<n2.length;i++){
    n2[i].innerHTML = (col + 1);
}

for(i=0;i<n1n2_answer.length;i++){
    n1n2_answer[i].innerHTML = (row + 1)*(col + 1);
}



function getTable(){
    let repeated_addition = document.getElementById("repeated_addition");
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
    let txt;
    let addition_table = document.getElementById("addition_table");


    for(i=0;i<col;i++){
        txt = " + " + "<strong>"+(row + 1)+"</strong>";
        repeated_addition.innerHTML += txt;
    } 



    console.log(addition_table.innerHTML);
    
    let row_number,col_number;

    row_number = (row+1);
    col_number = ((col+1)*2-1);
    
    
    console.log("col:" + col);
    console.log("row_num:" + row_number);
    console.log("col_num:" + col_number);
    for(i=0;i<(row_number);i++){     
        addition_table.innerHTML += '<div class="row row_col justify-content-center"></div>';
    }
    console.log(addition_table.innerHTML);
    let row_col = document.getElementsByClassName("row_col");
    for(j=0;j<(col_number);j++){
        row_col[0].innerHTML +=`<div class="col-1 square coll"></div>`; 
        let coll = document.getElementsByClassName("coll");
        if(j%2==0){
            for(i=0;i<(row_number);i++){        
                coll[j].innerHTML += '<div class="p-3 m-1 bg-dark rounded-circle"></div>';
            }
        }
        else if(j%2!=0){
            for(i=0;i<(row_number);i++){  
                if(i==Math.floor((row_number/2))){
                    coll[j].innerHTML += '<i class="fas fa-plus fa-2x"></i>';
                }else{
                    coll[j].innerHTML +=` <div class="p-3 m-1"></div>`;
                }
            }
            
        }        
    }  
    console.log(addition_table.innerHTML);


    

       
    console.log(addition_table.innerHTML);
    txt = ' = <strong>'+(row + 1)*(col + 1)+'</strong>';
    repeated_addition.innerHTML += txt;
    

    

    console.log(addition_table.innerHTML);

}

getTable();