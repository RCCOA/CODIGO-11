// 1.- Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

function suma(a, b) {
 let sumar = a + b;

   return `La suma de ${a}  + ${b}  es = ${sumar} ` ;
}

function pregunta1() {
  let a = Number(prompt('Ingresa el primer numero '));
  let b = Number(prompt('Ingresa el segundo numero'));

  alert(suma(a, b));

  console.log(suma(a, b)); // para ver la respuesta en la consola
}

//pregunta1();

//-----------------------------------------------------------

// 2.- Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.

function sumar(a, b) {
  return a+ b;
}

function promedio(a, b, c, d) {
  let promediar = (a + b + c + d )/4;
    return `El promedio de ${a},  ${b},  ${c},  ${d}  es =  ${promediar} ` ;
 }

 function pregunta2() {
   let a = Number(prompt('Ingresa el primer numero '));
   let b = Number(prompt('Ingresa el segundo numero'));
   let c = Number(prompt('Ingresa el tercer numero'));
   let d = Number(prompt('Ingresa el cuarto numero'));

   alert(promedio(a, b, c, d));
   console.log(promedio(a, b, c, d)); // para ver la respuesta en la consola
 }

 //pregunta2();

//-------------------------------------------------------------

// 3.- Calcular el área de un rectángulo.

function arearectangulo(l, a) {
  let arearect = ( l * a);

    return `El area del rectangulo de largo  ${l}  y ancho ${a}  es = ${arearect} ` ;
 }

 function pregunta3() {
   let l = Number(prompt('Ingresa el largo del rectangulo '));
   let a = Number(prompt('Ingresa el ancho del rectagulo'));

   alert(arearectangulo(l, a));

   console.log(arearectangulo(l, a)); // para ver la respuesta en la consola
 }

 //pregunta3();

 //-----------------------------------------------------------

 // 4.- Calcular el área de un triángulo

 function areatriangulo(b, h) {
  let areatriang = ( b * h ) / 2;

    return `El area del triangulo de base  ${b}  y altura ${h}  es = ${areatriang} ` ;
 }

 function pregunta4() {
   let b = Number(prompt('Ingresa la base del triangulo '));
   let h = Number(prompt('Ingresa la altura del triangulo'));

   alert(areatriangulo(b, h));

   console.log(areatriangulo(b, h)); // para ver la respuesta en la consola
 }

//pregunta4();

 //------------------------------------------------------------

 //5.- Calcular el área de una circunferencia.

 function areacirculo(pi,r) {
  let areacir = pi*(r**2);

    return `El area del circulo de radio  ${r}  es = ${areacir} ` ;
 }

 function pregunta5() {
   const pi=3.14
   let r = Number(prompt('Ingresa el radio del circulo '));

   alert(areacirculo(pi, r));

   console.log(areacirculo(pi, r)); // para ver la respuesta en la consola
 }

 //pregunta5();

 //------------------------------------------------------------

 //6.- Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre

 function sueldoSemanal(h, s) {
  let sueldo = h*s;

    return `El sueldo semanal por ${h}  horas es = ${sueldo} ` ;
 }

 function pregunta6() {
   let h = Number(prompt('Ingresa la cantidad de horas trabajadas'));
   let s = Number(prompt('Ingresa salario por hora hombre '));

   alert(sueldoSemanal(h, s));

   console.log(sueldoSemanal(h, s)); // para ver la respuesta en la consola
 }

//pregunta6();

//-------------------------------------------------------------

// 7.- Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).

function conversionPulgadas(eq,m) {
  let aPulgadas = m/eq;

    return `La cantidad de pulgadas a requerir es = ${aPulgadas} ` ;
 }

 function pregunta7() {
   const eq=0.0254
   let m = Number(prompt('Ingresa la canitdad metros de telas a pedir :  '));

   alert(conversionPulgadas(eq, m));

   console.log(conversionPulgadas(eq, m)); // para ver la respuesta en la consola
 }

 //pregunta7();

 //-----------------------------------------------------------------

 // 8.- Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.

 function cambioAdolar(tc, s) {
  let dolares = s/tc;

    return `Con S/${s}  puedes aquirir $${dolares} ` ;
 }

 function pregunta8() {
   let tc = Number(prompt('Ingresa el tipo de cambio del dolar'));
   let s = Number(prompt('Ingresa la cantidad de soles que desea cambiar a dolares '));

   alert(cambioAdolar(tc, s));

   console.log(cambioAdolar(tc, s)); // para ver la respuesta en la consola
 }

//pregunta8();

//----------------------------------------------------------

// 9.- Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron

function cantidadAño(fa,a) {
  let edad = fa-a;

    return `La cantidad de años del postulante es: ${edad} ` ;
 }

 function pregunta9() {
   let fa = (new Date).getFullYear();

   let a = Number(prompt('Ingresa el año de nacimiento del postulante'));

   alert(cantidadAño(fa,a));

   console.log(cantidadAño(fa,a)); // para ver la respuesta en la consola
 }

pregunta9();

//----------------------------------------------------------

// 10.- Se tiene el nombre y la edad de tres personas. Se desean saber el nombre y la edad de la persona de menor edad.

