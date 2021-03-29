//Exercise 2 - Strings
console.log ('Resultados Ejercicio 2');

/* a) Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */

var cadena1 =  'convertir texto a mayuscula';
console.log(cadena1.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los primeros 5 caracteres guardando el resultado en una 
nueva variable (utilizar substring). */

var cadena2 = 'Corte de Cadena';
var subCadena = cadena2.substring (0,5);
console.log (subCadena);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los últimos 3 caracteres guardando el resultado en una nueva 
variable (utilizar substring). */

var cadena3 = 'Corte de Cadena';
var subCadena2 = cadena3.substring (cadena3.length - 3,cadena3.length);
console.log (subCadena2);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar 
el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y 
el operador +). */

var cadena4 = 'transformar CADENA'
var subCadena3 = cadena4.substring (0,1);
var subCadena4 = cadena4.substring (1,cadena4.length);
var cadenaModificada = subCadena3.toUpperCase() + subCadena4.toLocaleLowerCase();
console.log (cadenaModificada);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en 
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable 
(utilizar indexOf). */

var cadena5 = 'Buscar en cadena';
var cadenaBuscar = cadena5.indexOf (' ');
console.log (cadenaBuscar);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y 
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar 
un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

var cadena6 = 'longiTUD exTENsa';
var primeraMayuscula = cadena6.substring (0,1);
var minusculas1 = cadena6.substring(1,cadena6.indexOf (' '));
var segundaMayuscula = cadena6.substring(cadena6.indexOf (' ') + 1,cadena6.indexOf (' ') + 2);
var minusculas2 = cadena6.substring(cadena6.indexOf (' ') + 2,cadena6.length);
console.log (primeraMayuscula.toUpperCase() + minusculas1.toLowerCase() + ' ' + segundaMayuscula.toUpperCase() + 
minusculas2.toLowerCase());

console.log (' ');