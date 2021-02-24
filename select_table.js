function keyevent_select_table(){
    console.log(window.event.key);
    let btn = document.getElementsByClassName("btn btn-dark shadow rounded");
    let i;
    for(i=0;i<10;i++){
        if(window.event.key == (i+1)){
            btn[i].click();
        }
    }
    if(window.event.key == "t"){
        btn[9].click();
    }
    if(window.event.key == "r"){
        btn[10].click();
    }
}