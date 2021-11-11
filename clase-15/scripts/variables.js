/*
VARIABLES
Las varaibles son contenedores de valores, existen diferentes variables.
Entre ellas tenemos la variable tipo let, tipo const y tambien una que no es recomendable usa que es var
*/
//let
let nombre = "RONALD";
let ccoa;
let edad = 35;
console.log(nombre);
console.log(ccoa);

ccoa = "CUALQUIER VALOR";
console.log(ccoa);

//const
const PI = 3.14;
console.log(PI);
// PI = 2;  dara error

/*
TIPOS DE DATOS
*/
let user = 'Ronald'; // string
let age = 35; //number
let isMan = true; // boolean - verdadero o false - true - false
let isMan2 = false;
let account = null; // null
let married; // undefined
let hash = Symbol('123456'); // Symbol -- valor unico
let alumno = {
  sexo: 'f',
  edad: 35,
  grado: 5,
}; // object

console.log(user, typeof user)
console.log(age, typeof age)
console.log(isMan, typeof isMan)
console.log(isMan2, typeof isMan2)
console.log(account, typeof account)
console.log(married, typeof married)
console.log(hash, typeof hash)
console.log(alumno, typeof alumno)


/*
CAMBIAR TIPOS DE DATOS
*/

let age2 = 30;
let age3 = '30 Ronald';
console.log(age2, typeof age2)
console.log(age2, String(age2).replace('30', 200));
console.log(age2, typeof Boolean(age2));
console.log(age3,  Number(age3).toFixed(2));



