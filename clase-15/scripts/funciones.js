function sumar(a, b) {
  return a+ b;
}

function restar(a, b) {
  return a- b;
}

console.log(sumar(2, 3));
console.log(sumar(5, 5));
console.log(sumar(6, 6));
console.log(sumar(3, 4));

console.log(restar(12, 3));
console.log(restar(15, 5));
console.log(restar(16, 6));
console.log(restar(13, 4));

(function() {
  //solo se ejecuta comandos
  function calculadora() {
  let a = parseFloat(prompt('Ingrese el primer numero'));
  let b = parseFloat(prompt('Ingrese el segundo numero'));

  console.log('sumar a + b = ', sumar(a, b));
  console.log('restar a - b = ', restar(a, b));
}

calculadora();
})()