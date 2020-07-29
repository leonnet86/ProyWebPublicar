listarTipoServicio();
listarCobertura();
//listarProcesos();

function sololetras(e) {
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key).toLowerCase();

    letras = "qwertyuiopasdfghjklñzxcvbnm ";

    especiales = "8-37-38-46-164";

    teclado_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            teclado_especial = true;
            break;
        }
    }

    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }

}

function llenarComboTipo_Servicio(data, control, primerElemento) {
    var contenido = "";
    var hh = data.length
    if (primerElemento == true) {
        contenido += "<option value='" + 0 + "'>--Seleccione--</option>";
    }
    for (var i = 0; i < hh; i++) {
        contenido += "<option value=' " + data[i].id_tipo_plan + " '>";
        contenido += data[i].tipo_plan;
        contenido += "</option>";
    }
    control.innerHTML = contenido;
    //document.getElementById("idTipoSexo").innerHTML = contenido;

}

function llenarCombo_Cobertura(data, control, primerElemento) {
    var contenido = "";
    var hh = data.length
    if (primerElemento == true) {
        contenido += "<option value='" + 0 + "'>--Seleccione--</option>";
    }
    for (var i = 0; i < hh; i++) {
        contenido += "<option value=' " + data[i].id_cobertura + " '>";
        contenido += data[i].cobertura;
        contenido += "</option>";
    }
    control.innerHTML = contenido;
    //document.getElementById("idTipoSexo").innerHTML = contenido;

}

function listarTipoServicio() {
    $.get("../RegistroPago/Listar_TipoServicio", function (data) {
        llenarComboTipo_Servicio(data, document.getElementById("cb_tipo_servicio"), true);
    })
}

function listarCobertura() {
    $.get("../RegistroPago/Listar_Cobertura", function (data) {
        llenarCombo_Cobertura(data, document.getElementById("cb_distrito"), true);
    })
}

function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function EmailMaestro() {
    var email = document.getElementById("txt_correo").value;
    if (validar_email(email)) {
        //alert("El email es correcto");
        var contenido = "";
        contenido += "<small id='emailHelp' class='form-text text-success +'>La direccion Email es valida.</small>";
        document.getElementById("emailHelp").innerHTML = contenido;
    }
    else {
        //alert("El email NO es correcto");
        var contenido = "";
        contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email No es valida.</small>";
        document.getElementById("emailHelp").innerHTML = contenido;
    }
}
//var btnenviar_data = document.getElementById("btn_enviar");
//  btnenviar_data.onclick = function (e) {
//      if (datosObligatorios() == true)
//      {

//      }
//      else
//      {
//          alert("llena los datos");
//          console.log("entro aqui");
//      }
//}

var btnenviar_data = document.getElementById("btn_enviar");
btnenviar_data.onclick = function (e) {
    Enviar_Datos();
}

function Enviar_Datos() {
    if (datosObligatorios() == true) {
        var frm = new FormData();
        //var id = document.getElementById("").value;
        var email = document.getElementById("txt_correo").value;
        if (validar_email(email) == false)
        {
            swal("Mensaje!", "Ha puesto un Email Incorrecto.", "error");
            //alert("Email Incorecto");
            //var contenido = "";
            //contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email No es valida.</small>";
            //document.getElementById("emailHelp").innerHTML = contenido;
            return;
        }
        var nombre_cliente = document.getElementById("txt_cliente").value;
        var dni = document.getElementById("txt_dni").value;
        var nro_operacion = document.getElementById("txt_operacion").value;
        var tipo_servicio = document.getElementById("cb_tipo_servicio");
        var texto_Servicio = tipo_servicio.options[tipo_servicio.selectedIndex].text;
        var distrito = document.getElementById("cb_distrito");
        var texto_distrito = distrito.options[distrito.selectedIndex].text;

        //console.log(tipo_servicio);
        frm.append("correo", email);
        frm.append("nombre_cliente", nombre_cliente);
        frm.append("dni", dni);
        frm.append("nro_operacion", nro_operacion);
        frm.append("tipo_servicio", texto_Servicio);
        frm.append("distrito", texto_distrito);

        $.ajax({
            type: "POST",
            //url: "../PaginaPrincipal/Enviar_Email",
            url: "../RegistroPago/Enviar_Email",
            data: frm,
            contentType: false,
            processData: false,
            success: function (data) {
                //console.log("ingesal ajax");
                if (data == 1)
                {
                    //alert("Se envio correo.");
                    swal("Mensaje!", "Se envio la informacion al correo!", "success");
                    borrarDatos();
                    //location.href = "../PaginaPrincipal/PaginaFront_2";
                }
                else
                {
                    //alert("Ocurrio un error.");
                    swal("Mensaje!", "Ocurrio un error.", "error");
                }
            }

        });
    }
    else
    {
        swal("Mensaje!", "Llena los campos Obligatorios.", "error");
        //alert("llena los datos");
    }
}

function datosObligatorios() {
    var exito = true;
    var controlesObligatorios = document.getElementsByClassName("obligatorio");
    var ncontroles = controlesObligatorios.length;
    //console.log(ncontroles);
    for (var i = 0 ; i < ncontroles ; i++) {
        if (i == 4 || i == 5)
        {
            if (controlesObligatorios[i].value == 0)
            {
                exito = false;
            }
        }
        else if (controlesObligatorios[i].value == "")
        {
            exito = false;
        }

        //if (controlesObligatorios[i].value == "")
        //{
        //    exito = false
        //    //console.log("entro aquiiii");
        //}
    }
    return exito;
}

function borrarDatos() {
    //console.log("entro a borrar datos");
    var controles = document.getElementsByClassName("borrar");
    var ncontroles = controles.length;
    for (var i = 0 ; i < ncontroles ; i++) {
        controles[i].value = "";
    }
    var contenido = "";
    contenido += "<small id='emailHelp' style='display: none' class='form-text text-danger +'>La direccion Email No es valida.</small>";
    document.getElementById("emailHelp").innerHTML = contenido;
    listarTipoServicio();
    listarCobertura();
}

//function listarProcesos() {
//    fetch("")
//        .then(res => res.json())
//        .then(res => { llenarComboProcesos(res, document.getElementById("cb_procesos"), true) });
//}

//function llenarComboProcesos(res, control, primerElemento) {
//    var contenido = "";
//    var hh = res.length
//    if (primerElemento == true) {
//        contenido += "<option value='" + 0 + "'>--Seleccione--</option>";
//    }
//    for (var i = 0; i < hh; i++) {
//        contenido += "<option value=' " + res[i].idprocesos + " '>";
//        contenido += res[i].procesos;
//        contenido += "</option>";
//    }
//    control.innerHTML = contenido;
//    //document.getElementById("idTipoSexo").innerHTML = contenido;

//}

//var btnEliminar_data = document.getElementById("btn_eliminar");
//btnEliminar_data.onclick = function (e) {
//    Eliminar_Procesos();
//}

//function Eliminar_Procesos() {
//    fetch("", {
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        method: 'POST',
//        body: JSON.stringify({
//            "IDAGENCIAS": 283
//        })

//    }).then(res => res.json())
//        .then(res => {
//            if (res == 1) {
//                alert("se elimino agencia");
//                listarProcesos();
//            }
//            else
//            {
//                alert("ocurrio un error");
//            }
//        })

//}
//function datosObligatorios() {
//    var exito = true;
//    var controlesObligatorios = document.getElementsByClassName("obligatorio");
//    var ncontroles = controlesObligatorios.length;
//    for (var i = 0 ; i < ncontroles ; i++) {
//        if (i == 4) {
//            if (controlesObligatorios[i].value == 0) {
//                exito = false;
//            }
//        }
//        else if (controlesObligatorios[i].value == "") {
//            exito = false;
//        }
//    }
//    return exito;

//}