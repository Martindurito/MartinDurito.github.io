function verificar() {
    var input_usuario = document.getElementById('user_text');
    var input_password = document.getElementById('password_text');

    var u ="contra";
    var c ="123456";
    if (input_usuario.value == u && input_password.value == c) {
        window.location.href = "https://MartinDurito.github.io/expresiones.html";
    } else {
        window.alert("Vuelve a Intentar");
    }

}