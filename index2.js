//EJERCICIO 1
let edad=prompt("Que edad tienes?");
console.log(edad);
if(edad>=18) {
    console.log("Eres mayor de edad");  
}else if(edad<18) {
    console.log("No eres mayor de edad");
}
//EJERCICIO 2 
let contraseña="1906";
const contra=prompt("Ingresa tu contraseña:");
if(contraseña == contra ) {
    console.log("La contraseña ingresada coincide");
}else {
    console.log("La contraseña no coincide")
}

//EJERCICIO 3 
let numero1=prompt("Ingresa un numero");
let numero2=prompt("Ingresa otro numero");
let resultado= ("numero1/numero2");
if(numero2==0) {
    console.log("Error")
} else {
    console.log("Division:" + resultado)
}
//EJERCICIO 4
let  nume= prompt ( "Ingrese un numero"  ) ;
 if ( nume  %  2  ==  0  ) {
    console.log ( "El numero" + nume  +  "es par" ) ;
 } else {
    console.log( "El numero " + nume + " es impar " )
 }

//EJERCICIO 5
console.log(edad);
let ingresos=prompt("Cuales son tus ingresos?");
console.log(ingresos);
if( edad > 16 && ingresos >= 10000){
    console.log("tiene que tributar");
}else { 
    console.log("no tiene que tributar");
 }


//EJERCICIO 7

let  renta=prompt ("Cual es su renta anual?" );
console.log (renta);
if ( renta < 10000 ) {
   console.log ("Le corresponde un impositivo del 5%") ;
} else  if ( renta  > 10000  &&  renta  < 20000 ) {
   console.log ("Le corresponde un impositivo del 15%") ;
} else  if (renta  > 20000  &&  renta  < 35000) {
   console.log ("Le corresponde un impositivo del 20%" ) ;
} else  if ( renta  > 35000  &&  renta  < 60000) {
   console.log ("Le corresponde un impositivo del 30%") ;
} else  {
     console.log ("Le corresponde un impositivo del 45%") ;
}

//EJERCICIO 8

let  premio=parseInt(2400) ;
let  puntuacion=prompt ("Ingrese su puntuacion")  ;
console.log (puntuación) ;
if (puntuacion == 0.0) {
   console.log("inaceptable")
   console.log ("Su premio es de" + puntuación * premio ) ;
} else  if (puntuación == 0.4) {
   console.log( "Aceptable" )
   console.log( "Su premio es de" + puntuación * premio ) ;
} else  if (puntuación  >=  0.6) { 
   console.log ("meritorio")
   console.log ("Su premio es de" +  puntuación * premio) ;
}

//EJERCICIO 8

let edad2= promp("Que edad tienes");
console.log=(edad2);
if (edad2 <  4) {
   console.log ("Ingresa gratis");
} else  if (edad2 >= 4 && edad2 < 18 ); {
   console.log ("Debe pagar 5$");
} else  if ( edad2 >  18 ); {
   console.log("Debe pagar 10$");
}
