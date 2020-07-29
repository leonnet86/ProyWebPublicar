
//var btn_logeo = document.getElementById("btn_logeo");

//btn_logeo.onclick = function () {

//    var usuario = document.getElementById("signinEmail").value;
//    var clave = document.getElementById("signinPassword").value;

//    if (usuario == "") {
//        alert("Ingrese Usuario de nuevo");
//        return;
//    }

//    if (clave == "") {
//        alert("Ingrese Contraseña");
//        return;
//    }

//    $.get("../PaginaPrincipal/ValidarUsuario/?usuario=" + usuario + "&contra=" + clave, function (data) {
//        if (data == 1) {
//            location.href = "../PaginaPrincipal/paginaMantImagenes";

//        } else {
//            alert("Volver a intentar");

//        }
//    })
//}

var btn_RegistroUsuario = document.getElementById("btn_RegistroUsuario");

btn_RegistroUsuario.onclick = function ()
{
    GuardarDatos();
}

function GuardarDatos() {
    if (datosObligatorios() == true)
    {
        if (Verificar_Igualdad_Contraseña() == true)
        {
        var frm = new FormData();
        var email = document.getElementById("signupEmail").value;
        var contraseña = document.getElementById("signupPassword").value;


            if (validar_email(email) == false) {
                swal("Mensaje!", "Email Incorrecto!", "error");
            //alert("Email Incorrecto.");

            //var contenido = "";
            //contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email No es valida.</small>";
            //document.getElementById("emailHelp").innerHTML = contenido;
            return;
        }
       
        frm.append("email", email);
        frm.append("contraseña", contraseña);

        $.ajax({
            type: "POST",
            url: "../PaginaPrincipal/guardarUsuarios",
            data: frm,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 1)
                {
                    swal("Mensaje!", "Se registro al usuario con Exito!", "success");
                    //alert("Se registro al usuario con Exito.");
                    //return;

                    //borrarDatos();
                    //location.href = "../PaginaPrincipal/paginaMantImagenes";
                    //location.href = "../PaginaPrincipal/paginaMantImagenes";
                }
                else if (data == 2) {
                    swal("Mensaje!", "La direccion Email ¡¡Ya existe!!", "error");
                    //alert("La direccion Email ¡¡Ya existe!!");
                    //return;

                    //var contenido = "";
                    //contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email ¡¡Ya exite!!.</small>";
                    //document.getElementById("emailHelp").innerHTML = contenido;
                }
                else
                {
                    swal("Mensaje!", "Ocurrio un error!", "error");
                    //alert("Ocurrio un error.");
                    //return;
                }
            }

            });
        }
        else
        {
            swal("Mensaje!", "La Contraseña no Coincide,digitarla nuevamente por favor!", "error");
            //alert("La Contraseña no Coincide,digitarla nuevamente por favor");
            //return;
        }
    }
    else
    {
        //var contenido = "";
        //contenido += "<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
        //contenido += "<div id='exampleModal' class='modal-dialog modal-dialog-centered'>";
        //contenido += "<div class='modal-content'>";
        //contenido += "<div class='modal-header'>";
        //contenido += "<h5 class='modal-title' id='exampleModalLabel'><strong>Mensaje</strong></h5>";
        //contenido += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        //contenido += "<span aria-hidden='true'>&times;</span>";
        //contenido += "</button>";
        //contenido += "</div>";
        //contenido += "<div class='modal-body'>";
        //contenido += "<p><strong>Llena los Datos Necesarios.</strong></p>";
        //contenido += "<div class='container'>";
        //contenido += "<div class='row d-flex justify-content-around'>";
        //contenido += "<div class='col'><img src='../Imagen/imagenes_Front/empresa1.PNG' width='85' height='40'/></div>";
        //contenido += "<div class='col'><img src='../Imagen/imagenes_Front/empresa1.PNG' width='85' height='40'/></div>";
        //contenido += "<div class='col'><img src='../Imagen/imagenes_Front/empresa1.PNG' width='85' height='40'/></div>";
        //contenido += "<div class='col'><img src='../Imagen/imagenes_Front/empresa1.PNG' width='85' height='40'/></div>";
        //contenido += "</div>";
        //contenido += "</div>";
        //contenido += "</div>";
        //contenido += "<div class='modal-footer'>";
        //contenido += "<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'>Cerrar</button>";
        //contenido += "</div>";
        //contenido += "</div>";
        //contenido += "</div>";
        //contenido += "</div>";
        //document.getElementById("exampleModal").innerHTML = contenido;

        //alert("Llena los Datos Necesarios.");
        //return;

        swal("Mensaje!", "Llena los Datos Necesarios!", "error");
    }
}

function datosObligatorios() {
    var exito = true;
    var controlesObligatorios = document.getElementsByClassName("obligatorio");
    var ncontroles = controlesObligatorios.length;
    for (var i = 0; i < ncontroles; i++) {
        if (controlesObligatorios[i].value == "")
        {
        exito = false;
        }
    }
    return exito;

}

function Verificar_Igualdad_Contraseña() {
    var exito = true;
    var contraseña1 = document.getElementById("signupPassword").value;
    var contraseña2 = document.getElementById("signupConfirmPassword").value;

    if (contraseña1 != contraseña2 ) {
            exito = false;
        }
    return exito;

}

function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

var btn_cerrar_sesion = document.getElementById("btn_cerrar_sesion");

btn_cerrar_sesion.onclick = function () {
     $.get("../MantenimientoImagen/CerrarSesion_Usuario/", function (data) {
        if (data == 1) {
            location.href = "../PaginaPrincipal/PaginaFront_2";
        } else {
            //alert("Volver a intentar");
            swal("Mensaje!", "Volver a intentar!", "error");
        }
    })
}


var btn_recuContra = document.getElementById("btn_recuContra");

btn_recuContra.onclick = function () {
    //function IngresarLogin() {

    var correo_envio = document.getElementById("recoverEmail").value;

    if (correo_envio == "") {
        swal("Mensaje!", "Ingrese el Correo Electronico!", "error");
        //alert("Ingrese el Correo Electronico");
        return;
    }

    //if (validar_email(email) == false)
    //{
    //    swal("Mensaje!", "Email Incorrecto!", "error");
    //    //alert("Email Incorrecto.");
    //    return;
    //}

    $.get("../MantenimientoImagen/Enviar_Email_Recuperacion/?correo=" + correo_envio, function (data) {
        if (data == 1) {
            swal("Mensaje!", "Se envio el correo con Exito!", "success");
        } else {
            swal("Mensaje!", "Volver a intentar!", "error");
        }
    })
}
