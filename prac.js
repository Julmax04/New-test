//3 chicos de 23 años
//entran a comprar en una heladería

//Problema a: ingresar su monto para que devuelva todos los precios de los helados
//si hay dos o mas en el mismo precio, mostar ambos
// cofla quiere saber cuanto es el vuelto

// Problema a: 

//Primer paso: indetificar personajes


let name1 = "cofla";
let name2 = "Pedro";
let name3 = "juan";

//Ingreso de monto

let moneyCofla =  prompt("Ingresa tu monto,  Cofla ");
let moneyPedro =  prompt("Ingresa tu monto, pedro ");
let moneyJuan =  prompt("Ingresa tu monto, juan ");

//pasar a numeros enteros las string para saber el vuelto de cada uno

moneyCofla = parseInt(moneyCofla);


function wiew (){

    if(moneyCofla >= 0.6 && moneyCofla <= 1){
     alert("Comprate el helado de agua ") ;    
     alert( " tu vuelto del producto es " + (moneyCofla - 0.6));

}else if(moneyCofla >= 1 && moneyCofla <= 1.6) {
    alert("Cofla, Comprate el helado de crema");
    alert(" tu vuelto del producto es " + (moneyCofla - 1)); 

}else if(moneyCofla >= 1.6 && moneyCofla <= 1.7){
   alert("Cofla, Comprate el helado de heladix");
   alert(" tu vuelto del producto es " + (moneyCofla - 1.6)); 


} else if(moneyCofla >= 1.7 && moneyCofla <= 1.8){
    alert(" Cofla, Comprate el helado de heladovich");
    alert(" tu vuelto del producto es " + (moneyCofla - 1.7)); 


}else if(moneyCofla >= 1.8 && moneyCofla < 2.9 ){
    alert("Cofla, Comprate el helado de helardo");
    alert(" tu vuelto del producto es " + (moneyCofla - 1.8)); 

} else if(moneyCofla >= 2.9 ){
    alert("Cofla, Comprate el helado de  confites o de 1/4kg");
    alert(" tu vuelto del producto es " + (moneyCofla - 2.9 )); 

} else{
    alert("lo siento sos probre " + name1 );
}

if(moneyPedro >= 0.6 && moneyPedro <= 1){
    alert( name2 + " Comprate el helado de agua ") ;  
    alert( " tu vuelto del producto es " + (moneyPedro - 0.6));     

}else if(moneyPedro >= 1 && moneyPedro <= 1.6) {
   alert( name2 + " Comprate el helado de crema");
   alert( " tu vuelto del producto es " + (moneyPedro - 1));

}else if(moneyPedro>= 1.6 && moneyPedro <= 1.7){
  alert(name2 + " Comprate el helado de heladix");
  alert( " tu vuelto del producto es " + (moneyPedro - 1.6));

} else if(moneyPedro >= 1.7 && moneyPedro <= 1.8){
   alert( name2 + " Comprate el helado de heladovich");
   alert( " tu vuelto del producto es " + (moneyPedro - 1.7));

}else if(moneyPedro >= 1.8 && moneyPedro< 2.9 ){
   alert(name2 + " Comprate el helado de helardo");
   alert( " tu vuelto del producto es " + (moneyPedro - 1.8));

} else if(moneyPedro >= 2.9 ){
   alert(name2 + " Comprate el helado de  confites o de 1/4kg");
   alert( " tu vuelto del producto es " + (moneyPedro - 2.9));
} else{
   alert( name2 + " lo siento sos probre");
}

if(moneyJuan >= 0.6 && moneyJuan <= 1){
    alert( name3 + " Comprate el helado de agua ") ; 
    alert( " tu vuelto del producto es " + (moneyJuan - 0.6));
          

}else if(moneyJuan >= 1 && moneyJuan <= 1.6) {
   alert(name3 +  " Comprate el helado de crema");
   alert( " tu vuelto del producto es " + (moneyJuan - 1));

}else if(moneyJuan >= 1.6 && moneyJuan <= 1.7){
  alert(name3 + " Comprate el helado de heladix");
  alert( " tu vuelto del producto es " + (moneyJuan - 1.6));

} else if(moneyJuan >= 1.7 && moneyJuan <= 1.8){
   alert(name3 + " Comprate el helado de heladovich");
   alert( " tu vuelto del producto es " + (moneyJuan - 1.7));

}else if(moneyJuan  >= 1.8 && moneyJuan < 2.9 ){
   alert(name3 + " Comprate el helado de helardo");
   alert( " tu vuelto del producto es " + (moneyJuan - 1.8));

} else if(moneyJuan >= 2.9 ){
   alert(name3 + " Comprate el helado de  confites o de 1/4kg");
   alert( " tu vuelto del producto es " + (moneyJuan - 2.9));
} else{
   alert( name3 + " lo siento sos probre");
}

}

