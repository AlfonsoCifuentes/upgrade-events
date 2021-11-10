/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

let boton = document.createElement("button");
boton.setAttribute=("#btnToClick");
boton.innerHTML="Click Me"
let getClickClass = document.getElementsByClassName("click")[0];
document.body.appendChild(boton);
let inputFocus = document.getElementsByClassName("focus")[0];
let inputValue = document.getElementsByClassName("value")[0];



let operarClick = function(evento){
    console.log(evento, getClickClass.value, inputFocus.value, inputValue.value);  
    
}

boton.addEventListener("click", operarClick);


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let operarFocus = function(evento){
    console.log(inputFocus.value)
}

inputFocus.addEventListener("focus", operarFocus);

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let operarInput = function(evento){
    console.log(inputFocus.value)
}

inputValue.addEventListener("input", operarInput);

//Creo que no entiendo bien lo que pide el enunciado exactamente, por eso he añadido al botón la funcionalidad de imprimir por consola el valor de los tres inputs