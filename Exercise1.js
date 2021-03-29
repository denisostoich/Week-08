//Exercise 1 - Variables y Operadores
console.log ('Resultados Ejercicio 1');

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar 
el valor de la suma de ambos números en una 3er variable. */

var primerNumero, segundoNumero;
primerNumero = 15;
segundoNumero = 18;
suma = primerNumero + segundoNumero;
console.log(suma);

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado 
en una 3er variable. */

var cadena1 = 'Denis';
var cadena2 = 'Ostoich';
console.log(cadena1.concat(' ', cadena2));

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad 
de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length). */

var cadena3 = 'Susana';
var cadena4 = 'Gimenez';
sumaCadenas = cadena3.length + cadena4.length;
console.log(sumaCadenas);

console.log ('');