let newBook = prompt("Ingrese un título y autor/-a");
let finish = "salir";

while (newBook.toLowerCase() !== finish.toLowerCase()) { 

  if (newBook) {
    alert("Tu libro se ha ingresado correctamente");
    console.log("Este año has leído " + newBook);
    newBook = prompt("Ingrese otro libro o escriba 'salir' para terminar");

  } else {
    alert("Por favor, introduce un título y autor");
    console.log("No has introducido un título y autor/-a");
    newBook = prompt("Ingrese un título y autor/-a");
  }
}

alert("Has terminado de ingresar tu lista de libros"); 
