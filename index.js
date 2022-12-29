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

// let x = 12;
// let y = 20;

// var res = x < y;

// var res2 = x != y;

// document.write(res && res2);

// //Pruebas:

// let text = "Por favor registrase para navegar ";
// let text2 = "Bienvenido a nuestro sitio!!, Muchas gracias!! ";



//  function imprime() {

//     let text3 = prompt(text);
 
//     alert(text2 + text3);

// };

// imprime ()

//prac de operadores logicos
// parseInt(); = (Significa) convertir a entero
// let num = 25;
// let num2  = 12;

// let resultado = num < num2 ;
// let resultado2 = num != num2;

// document.write(!resultado); 
  


// num1 = 12;
// num2 = 24;
// num3 = 25;
// num4 = 92;
// num5 = 91;


//camelcase: significa que cada palabra que empieza es con minuscula y la sengunda palabra es Mayusculas

//Condicionales : if, else if,else

// if = La linea se ejecuta si la expresion es verdadera o false
// else if = La linea se ejecuta si la linea if no se a ejecutado
// else = Si ninguna de las dos los lineas anteriores (if, else if) se ejecutan esta lo hará 

// let nombre = "a ";

// function imprime(){
    
//     if(nombre == "Facundo "){

//         alert("Tu nombre es facundo ");

//     } else if (nombre == "agustin "){
           
//         alert("Tu  nombre es agustin ");
// }else{
//     alert("Sos boludo ");
// }
// };  

// imprime();

//arrays
//creacion de un array

// let colores = ["Rojo", "azul", "Verde", "Amarillo"];


//como imvocamos un elemnto espesicio del array: colores[0] o colores[1] dependiendo en que elemento esta ubicado

//asignacion de un elemento vació dentro de un array
// document.write(colores[3]);

// let pc = {
//     nombre : "Dalto pc ",
//     procesador: "Intel Core I7 ",
//     ram: "16GB ",
//     espacio: "1TB "
// };
// //Arrays asociativos: 
// document.write(pc["Dalto pc"]);


//for, while, do while, for in, for of

//bucles

//while: es un bucle que se ejecuta constantemente en la repetición, es decir
//si  preguntamos que una condicion es verdadera al terminar de ejecutarse mandara otra vez a la consulta para constatar si se sigue cumpliendo al condicion

// esto es while
let numero = 0;

// function prac (){
    
//     while(numero <= 5){
//         numero++;
//         document.write(numero + "<br>");
//     }
// }

// prac();

//la diferencia entre while e if es que, uno pregunta siempre si la condicion en correcta (while) y la ota que una vez consultado se cierra la ejecución(if)
//Do while:

//el "do" sirve para explicar que hace el código antes de preguntar (while)
// luego se coloca la condición al final (while)
//ej:

// function prac2() {

// do{
//     //Primero presentar lo que queres mostarr
//     document.write(numero );

//     numero++;
    
// }

// while (numero <=5)


// };

// prac2();

//Break = Es utilizado para terminar la ejecucion de un codigo o condicion

// ej:

// function prac3() {
// while (numero < 10000){
//      numero ++;
//      document.write(numero);

//     if(numero == 20){

//         break;
//     }
// }
// };

// prac3();


//bucles for: se ejecuta las veces que nostros le indiquemos

// su sintaxis es : pasos = se crea una vairables ej: (for (let i = 0;))
//luego viene la condicion: ej:(for let i = 0; i < 6) y al final la iteracion for (let i = 0; i < 6; i++)

//ej:

// let object = ["casco", "moto", "auto"];

// let numeros = prompt("Escribe un numero ");


// function Suma (){

    
//     if(numeros >= 0){
//         for(let i = 0; i < object.length; i++){
//             alert([i]);
//     }
// } else{

//     alert("Mama huevo ");
// }
// };

// Suma();



    for (let i = 0; i < 30; i++){
        
        if (i == 10){
            continue;
        }
     
        document.write(i + "<br>");
    };
     
   

