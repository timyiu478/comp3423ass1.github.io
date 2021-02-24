

function getTable_blank(){
    let url_string = window.location.href;
    let url = new URL(url_string);
    let number = url.searchParams.get("table");
    console.log(number);
    let n1 = document.getElementsByClassName("n1");
    let i;
    for(i=0;n1.length;i++){
        n1[i].innerHTML = number;
    }
}

getTable_blank();