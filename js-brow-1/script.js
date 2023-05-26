const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
// Código para convertir el texto a mayúsculas y mostrarlo en el párrafo

input.focus();
input.addEventListener('input', function() {
    let string=input.value.toUpperCase();
    resultado.textContent=string;
  });

  /*Convertir a mayúsculas al dar click en el botón*/

  const input1=document.getElementById("texto1");
  const resultado1=document.getElementById("resultado1");

  function upperCase(){
    let texto = input1.value.toUpperCase();
    resultado1.textContent=texto;
  }


  /*******************Solución Palindromo******************/
/****************Solución a partir del análisis************/

const input2=document.getElementById("texto2");
const resultado2=document.getElementById("resultado2");
let palabra = input2.value.toLowerCase();

let palindromo="";

for(let i = (palabra.length-1); i>=0; i--){
    palindromo+=palabra[i];
    
}

/****queda pendiente eliminar tildes */

function esPalindromo(){

    if(palabra==palindromo){
        resultado2.textContent=`la palabra: ${palindromo} es PALINDROMO`;
    }
    else{
        resultado2.textContent=`la palabra: ${palindromo} NO ES PALINDROMO`;
    }    
        
    
}

