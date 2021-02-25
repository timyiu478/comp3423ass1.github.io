let table = new multiplication_table(10,10,1);
function getTable(){
    let table_row = document.getElementsByClassName("table_row");
    let  i,j;
    for(i=0;i<table_row.length;i++){
        for(j=0;j<10;j++){
            table_row[i].innerHTML +=`<th class="bg-light text-dark"  onmouseover="changeColor(${i},${j})" onclick="getTips(${i},${j})" style="width: 8%;cursor: pointer;" ><span class="user_input" style="text-align:center; ">${(i+1) * (j+1)}</span></th>`;
        }
    } 
}

let table_row = document.getElementsByClassName("table_row");
let colnum = document.getElementsByClassName("colnum");
let times_table = document.getElementById("times_table");
let n1_x_n2 =  document.getElementById("n1_x_n2");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n1n2_answer = document.getElementById("n1n2_answer");
function changeColor(row,col){
    n1_x_n2.style.display = "block";
    times_table.style.display = "none";
    n1.innerHTML = (row + 1);
    n2.innerHTML = (col + 1);
    n1n2_answer.innerHTML = (row + 1)*(col + 1);
    let i,j;
    for(i=0;i<colnum.length;i++){
        colnum[i].classList.remove("bg-info");
        colnum[i].classList.remove("text-dark");
    }
    for(i=0;i<table_row.length;i++){
        for(j=0;j<table_row[i].childNodes.length;j++){
            if(j==0){      
                table_row[i].childNodes[j].classList.remove("text-dark"); 
            }else{
                table_row[i].childNodes[j].classList.add("bg-light");
            }
            table_row[i].childNodes[j].classList.remove("bg-info");
            
        }
    }
    for(i=0;i<table_row.length;i++){
        for(j=0;j<table_row[i].childNodes.length;j++){
            if((i<row&&j==(col+1))||(i==row&&j<=(col+1))){
                if(j==0){
                    table_row[i].childNodes[j].classList.add("text-dark");
                }else{
                    table_row[i].childNodes[j].classList.remove("bg-light");
                }
                table_row[i].childNodes[j].classList.add("bg-info");
                
            }
            else if((i==row&&j>col)||(i>row&&j>col)){
                break;
            }
        }
    }
    colnum[col].classList.add("bg-info");
    colnum[col].classList.add("text-dark");

    
}



function getTips(row,col){
    playSelectSound();
    localStorage.setItem("row",JSON.stringify(row));
    localStorage.setItem("col",JSON.stringify(col));
    window.open('tips.html', '_self', ''); 
}

getTable();