
function welcome(){
  alert("¡Hola! Te doy la bienvenida a esta aplicación de seguimiento de lecturas");
}

welcome();

let newBook = prompt("Ingresa un título y autor/-a");
let finish = "salir";

do {
  newBook = prompt("Ingresa un título y autor/-a");
} while (newBook === null);

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
