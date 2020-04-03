// FUNCTION DECLARATION

// Funciones imprimir
// console.log("hola");

// prompt('cuantos años tienes')

// alert('hola')

function Saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
Saludar("lalo");
Saludar("dani");
Saludar("vic");
Saludar("elias");

let suma;
suma = sumar(7, 3);

function sumar(a, b) {
  //   console.log(a + b);
  return a + b;
}
console.log(suma);

function saludo(nombre) {
  return `hola funcion ${nombre}`;
}
console.log(saludo("lalo"));

// Fuction expression

const sumaexpresion = function (a, b) {
  return a + b;
};
console.log(sumaexpresion(3, 5));

const nombresSaludo = function (nombre = "visita ") {
  return `que onda ${nombre}`;
};
console.log(nombresSaludo("SandovalJr"));

// IIFE

(function (tecnologia) {
  console.log(`Aprendiendo ${tecnologia}`);
})("JS");

// Metodos de propiedad
// Cuando una funcion se pone dentro de un objeto

const musica = {
  reproducir: function (id) {
    console.log(`Reproduciendo musica ${id}`);
  },
  pausar: function () {
    console.log("Pause la musica");
  },
};

musica.reproducir(30);
musica.pausar();
