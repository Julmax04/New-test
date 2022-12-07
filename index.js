//capitulo 1//

//Practica

//Tipos de datos: string, boolean, number.

//Lenguajes compilados y interpretaods


//lenguaje imperativo: Se ejecuta linea por linea, case sensitivity: sensibilidad a las mayusculas y minusculas

// var x = "hola"; //o

//tipado debil

// var x = "mama";

//respetar los: ";" al finalizar cada linea de código


//es.nex: "EsmaScriptNex" significa proxima actualización


// var m = "Bienvenido ";

// let l =  m + " mi señor";

//String:  cadenas de texto

//Boleans: numeros binarios 1 y 0 interpretado en true o flase
//number: cadenas de numeros

// Datos especiales: null, undefined, nan;

//variables var, let y const



//Undefined; es un dato que esta declarado pero no tiene valor





// var tiene un alcance de escala global y local
//let contiene un alcance limitado

// const x = [];


// Descripción. let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.



// function open (){

//   alert(l)
// };


// open();

// var x = null;

//Prompt: es un sitema de alerta para poder escribir en el campo

//NaN: NOT a Number: no se pueden hacer operaciones si no es un numero

//para guardar las variables en un sistema de alerta, es con esta sintaxis

//let number = prompt(" ");

//ej:

// let reg = prompt("Escribe tu nombre");

// var text = "Bienvenido ";

// function Enter(){

//     alert( text + reg )  
// };

// enter();



//operadores de asignacion y ariméticos


//el document.write asigna los valores que ubiquemos entre los parentesis imprimiendolos en el cuerpo del html 


//Opereadores matematicos : +,-,*,/,%

//Asignaciones: +=, -=, /=, %=, (Exponencial)**=; (Increment) ++ ; (Decrement) --, subtracción: -, 


//ej:





 //concat: sirve para las string= ej: numero = "1" numero2 = "2" , numero.concat(numero2); = 12 
// no sirve para numeros

//Código en practica
//Resultados recientes : "null"
// let btn = document.getElementById("boton");

// var btn1 = document.addEventListener("Hola, como va" function() {
//      prompt("Escribe tu contraseña ");

// } );

// ej: 

// let text = "Hola, se bienvenido a nuestro sitio ";

// let text2 = "Por favor Identificate ";

// let text3 = prompt(text2);

// function view (){

//   alert(text + text3)

// };

  
//  document.write(view());


 //tamplates strigs : ${Nombre} y backtliks : ``;

//  los tamplates de string sirven para evitar muchos bugs en el código


//operadores de compración y operadores lógicos
//Los operadores de comparacion comparan expresioes y devuleven en valores bolleanos que representa la deralicion de sus valores


//operaciones de comparacion: == (Compara si solo los valores son iguales) , ===(describe apariencias exactas), !==(extrictamente si no es el mismo tipo de dato), !=(indetifica si los valores son distintos), <(menor), > (mayor) , >=(mayor o igual), <(menot oigual), 

// let numero = 13;
// let numero2 = 12;

// document.write(numero != numero2);


// operadores lógicos: &&, ||, !
// &&( y) (si las dos son true o false devuleve) ||()

let x = 12;
let y = 20;

var res = x < y;

var res2 = x != y;

document.write(res && res2);

