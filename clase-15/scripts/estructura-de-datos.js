let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombress = ['sebastian', 'jose', 'luis', 'pedro'];
let sabores = ['uva', 'melon', 'sandia'];
let prueba = [['zero', [0, 'uno', 2, 3], 2, 3], 0, [0, 1, 2, 3], [0, 1, 2, 3]];

console.log(nombress[0]);
console.log(nombress[1]);
console.log(nombress[2]);
console.log(nombress[3]);

console.log('prueba', prueba[0][0]);
console.log ('prueba', prueba[0][1][1]);

/* LENGTH */
numbers.length; // longitud de array

/* PUSH */
 numbers.push(11); //agregar numero al final de array

 /* UNSHIFT */
 numbers.unshift(11); // agregar numero al inicio del array

 /* POP */
 numbers.pop(); // Eliminar el ultimo elemento de un Array

 /* SHIFT */
 numbers.shift(); // Eliminar el primer elemento de un array

 /* SPLICE */
 numbers.splice(2, 2);


 let alumno = {
  nombre: 'ronald',
  lastname: 'ccoa',
  age: 35,
  grade: 5,
  sex: 'm',
  getName: function() {
    return this.nombre;
  },
  getFullName: function() {
    return `${this.nombre} ${this.lastname}`;
  },
 };

 console.log('alunmo.nombre', alumno.nombre);
 console.log('alumno.nombre', alumno.lastname);
 console.log('alumno.nombre', alumno.getName());



 let profesor = {
  nombre: 'sebastian',
  lastname: 'yabiku',
  age: 35,
  grade: 5,
  sex: 'm',
  experience: [
    {
      college: 'santisima trinidad',
      age: 2022,
    },
    {
      college: 'recoleta',
      age: 2000,
    },
  ],
};

const alumnos = [
  {
    nombre: 'sebastian',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'jose',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'pedro',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
  {
    nombre: 'hector',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  },
];

console.log('alumnos', alumnos);

for (let index = 0; index < alumnos.length; index++) {
  console.log(alumnos[index]);
}