// Arrays numeros
// const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Numeros);
// console.log(`Tamaño array ${Numeros.length}`);

// Array strings metodo alternativo
const meses = new Array("Enero", "Febrero", "Marzo");
meses.push("Agosto");
console.log(meses);

console.log(meses.reverse());

// // Agrega un elemento al inicio del array
// meses.unshift("diciembre");
// console.log(meses);
// // Elimina el ultimo elemneto de un arreglo
// meses.pop();
// console.log(meses);
// // Elimena el primer elemento del arreglo
// meses.shift();
// console.log(meses);

// // Eliminar ciertas posiciones de un array
// meses.splice(0, 1);
// console.log(meses);

// // comprobar si es array
// console.log(Array.isArray(meses));
// console.log(meses.indexOf("Marzo"));

let array2 = [1, 2, 3],
  array3 = [4, 3, 5];
console.log(array2.concat(array3));

console.log(array3.sort((a, b) => a - b));
