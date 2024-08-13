const pantalla = document.getElementById("pantalla");

function calculoEnPantalla(input) {
  pantalla.value += input;
}

function borrarPantalla() {
  pantalla.value = "";
}

function resultado() {
  try {
    pantalla.value = eval(pantalla.value);
  }
   catch (error) {
    pantalla.value = "error";
  }
}
