let edad = 18;

if (edad >= 18) {
  console.log("si puedes entrar");
} else {
  console.log("no puedes entrar al ciclo");
}

let puntaje = 3000;

if (puntaje) {
  console.log(`El puntaje fue de ${puntaje}`);
} else {
  console.log("no hay puntaje");
}

let tcompra = 600;
let efectivo = 500;

if (tcompra < efectivo) {
  console.log("Pagando...");
} else {
  let resta = tcompra - efectivo;
  console.log("No cumples con el dinero suficiente te faltan " + resta);
}

// Con operadores 

let e = 1000;
let tcarrito = 1800;
let credito = 200;

if(tcarrito < e || tcarrito < credito){
    console.log('pagaste...');
    
} else {
    console.log('no puedes pagar');
    
}