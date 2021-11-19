// SESSIONSTORAGE
// La informacion persiste solo en pestaña actual
sessionStorage.setItem('clave', 1234); // setear un valor
console.log(sessionStorage.getItem('clave')); // obtener el valor
console.log(sessionStorage);
sessionStorage.removeItem('clave'); // remove el valor
console.log(sessionStorage);


// LOCALSTORAGE
// La informacion persiste aunque la pestaña se cierre
localStorage.setItem('clave', 1234); // setear un valor
console.log(localStorage.getItem('clave')); // obtener el valor
console.log(localStorage);
localStorage.removeItem('clave'); // remove el valor
console.log(localStorage);

// JSON STRINGIFY = GUARDA EN FORMA JSON
const numeros = [0,1,2,3,4]
sessionStorage.setItem('numeros', JSON.stringify(numeros)); // guardo en json
JSON.parse(sessionStorage.getItem('numeros')); // lo convierte en array


const objetos = {name: 'sebastian'};
sessionStorage.setItem('objeto', JSON.stringify(objeto)); // guardo en json
JSON.parse(sessionStorage.getItem('objeto')); // lo convierte en objeto
