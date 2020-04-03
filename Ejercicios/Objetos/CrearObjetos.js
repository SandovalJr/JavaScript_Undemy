// Crear objetos

const persona = {
  nombre: "lalo",
  apellido: "sandoval",
  correo: "lalingas@hotmail.com",
  edad: 21,
  musica: ["rock", "pop", "reggaeton"],

  // Creo un objeto dentro de un objeto
  hogar: {
    pais: "mexico",
    ciudad: "aguascalientes"
  },

  Nacimiento: function() {
    return new Date().getFullYear() - this.edad;
  }
};
// Agrego un elemento a el array musica
// persona.musica.push("Hola me agregue");

// console.log(persona.hogar);

// Acedder a un elemento de  el objeto
// console.log("Acceder forma 2: " + persona["correo"]);

// console.log(persona);

console.log("El nacio el: "+persona.Nacimiento());
