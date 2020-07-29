

var btnIngresar = document.getElementById("btn_ingresar");

btnIngresar.onclick = function () {
    //function IngresarLogin() {

    var usuario = document.getElementById("inputEmail").value;
    var clave = document.getElementById("inputPassword").value;

    if (usuario == "") {
        alert("Ingrese Usuario de nuevo");
        return;
    }

    if (clave == "") {
        alert("Ingrese Contraseña");
        return;
    }

    $.get("../Home/ValidarUsuario/?usuario=" + usuario + "&contra=" + clave, function (data) {
        if (data == 1) {
            location.href = "../PaginaPrincipal/Index";

        } else {
            alert("Volver a intentar");

        }
    })
}

//function ValidarLogin() {

//        var frm = new FormData();
//        var usu = document.getElementById("inputEmail").value;
//        var clave = document.getElementById("inputPassword").value;
//        frm.append("usuario", usu);
//        frm.append("clave", clave);

//        $.ajax({
//            type: "POST",
//            url: "../Home/ValidarUsuario",
//            data: frm,
//            contentType: false,
//            processData: false,
//            success: function (data) {
//                if (data == 1) {
//                    alert("Ingreso el usuario.");
//                    location.href = "../PaginaPrincipal/Index";
//                }
//                else {
//                    alert("Ocurrio un error.");
//                }
//            }

//        });

//}

//function ingresarLogin() {
//    //$.get("../Home/ValidarUsuario/?usuario=" + usuario + "&contra=" + clave, function (data) {
//    $.get("../Home/ValidarUsuario", function (data) {
//        console.log("entro aqui 2");
//        if (data == 1) {
//            location.href = "../PaginaPrincipal/Index";

//        } else {
//            alert("Volver a intentar");

//        }
//    })
//}