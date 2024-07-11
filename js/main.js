const helloname = prompt("Ingresa tu nombre");

function welcome(){
  alert("¡Hola, " + helloname + "!" + " " + "Te doy la bienvenida a esta aplicación de seguimiento de lecturas");
}

welcome();

let newBook = prompt("Ingresa un título y autor/-a");
let finish = "salir";

if (newBook == null) {
  alert("Has salido de la aplicación correctamente");
  console.log("Has finalizado la aplicación con éxito");
}

while (newBook.toLowerCase() !== finish.toLowerCase()) { 

  if (newBook) {
    alert("Tu libro se ha ingresado correctamente");
    console.log("Este año has leído " + newBook);
    newBook = prompt("Ingresa otro libro o escribe 'salir' para terminar");

  } else {
    alert("Por favor, introduce un título y autor");
    console.log("No has introducido un título y autor/-a");
    newBook = prompt("Ingresa un título y autor/-a");
  }
}

alert("Has terminado de ingresar tu lista de libros"); 
