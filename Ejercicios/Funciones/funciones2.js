// try catch

try {
  algo();
} catch (error) {
  console.log("Error");
} finally{
console.log('No le importa ejecuta todo');
    obtenerClientes();
}

function obtenerClientes() {
  console.log("Descargando....");

  // Para que lo imprima despues de un tiempo
  setTimeout(function () {
    console.log("Completo");
    console.log("-------------------------------------------------------------");
  }, 3000);
}



// FECHAS

// Fecha actual
const DiaHoy = new Date();
console.log(DiaHoy);

let valor;
// mes
valor = DiaHoy.getMonth();
// dia
valor = DiaHoy.getDay();
// año
valor = DiaHoy.getFullYear();

// minutos
valor = DiaHoy.getMinutes();
// hora
valor = DiaHoy.getHours();
// milisegundos desde 1970
valor = DiaHoy.getTime();


valor = DiaHoy.setFullYear(2031);
valor = DiaHoy.getFullYear();


console.log("VALOR:" +valor);


// Fecha especifica mes/dia/año
let navidad = new Date('12-25-2017');
console.log(navidad);

