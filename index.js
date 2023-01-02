let text = prompt ("Escribe Primer number ");
let text2 = prompt ("Escribe Segundo number ");
let text3 = prompt ("Escribe Trecer number ");


function mayorOMenor (){
    if(text >= 10){

        alert(text);

    } else if (text2 < 9) {

         alert(text2);

    } else if(text3 < 9){

        alert(text3);

    } else{
        
        alert("Invalido!")
    }
}

mayorOMenor();