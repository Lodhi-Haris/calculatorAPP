var display = document.getElementById("display");


function getvalue(num){
    display.value +=num;
}

function calculate (){
    display.value = eval(display.value);
}

function clearall (){
    display.value = "";
}