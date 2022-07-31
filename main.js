let usuario = prompt("Ingresa tu usuario");



while (usuario != "ESC"){
    switch (usuario) {
        case "tutor":
        alert("Hola Tutor");
        break;
        case "profe":
        alert("Hola profe");
        break;
        default:
        alert("Hola coder");
        break;
    }
    usuario = prompt("Ingresa tu usuario");
}
console.log("Tu usuario es " + usuario);