EventListener();

function EventListener() {
  let nombre = prompt("Cual es el nombre");
  let edad = prompt("cual es tu edad");
  document.getElementById("app").innerHTML = `Hola ${nombre} tu edad es: ${edad}`;
}
