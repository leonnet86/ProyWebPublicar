//Listar_planes();

//function Listar_planes() {
//    $.get("../PaginaPrincipal/ListarPlanes", function (data) {
//        crearListado(["Id","Plan Residenciales", "Mensualidad", "Velocidad Mbps", "Capacidad"], data)
//    });
//};

Listar_planes();
//listarTipoServicio();
//listarCobertura();

function Listar_planes() {
$.get("../PaginaPrincipal/ListarPlanes/?idtipo_plan=" + 1, function (data) {
    crearListado(["Id", "Plan Residenciales", "Mensualidad", "Velocidad Mbps", "Capacidad"], data)
});
};

//function sololetras(e) {
//    key = e.keyCode || e.which;

//    teclado = String.fromCharCode(key).toLowerCase();

//    letras = "qwertyuiopasdfghjklñzxcvbnm ";

//    especiales = "8-37-38-46-164";

//    teclado_especial = false;

//    for (var i in especiales) {
//        if (key == especiales[i]) {
//            teclado_especial = true;
//            break;
//        }
//    }

//    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
//        return false;
//    }

//}

function crearListado(arrayColumnas, data) {
    var contenido = "";
    contenido += "<table id='tabla_planes' class='table table-striped table-responsive-sm'>";
    contenido += "<thead>";
    contenido += "<tr>";
    for (var i = 0; i < arrayColumnas.length ;i++){
        contenido += "<td>";
        contenido += arrayColumnas[i];
        contenido += "</td>";
    }
    contenido += "</tr>";
    contenido += "</thead>";
    var llaves = Object.keys(data[0]);

    contenido += "<tbody>";
    for (var i = 0 ; i < data.length ; i++){
        contenido += "<tr>";
        for (var j = 0; j < llaves.length; j++) {
            var valorLLaves = llaves[j];
            contenido += "<td>";
            contenido += data[i][valorLLaves];
            contenido += "</td>";
        }
        contenido += "</tr>";
    }
    contenido += "</tbody>";
    contenido += "</table>";
    document.getElementById("tabla_planes").innerHTML = contenido;

}

function crearListado_2(arrayColumnas, data) {
    var contenido = "";
    contenido += "<table id='tabla_planes_2' class='table table-striped table-responsive-sm'>";
    contenido += "<thead>";
    contenido += "<tr>";
    for (var i = 0; i < arrayColumnas.length ; i++) {
        contenido += "<td>";
        contenido += arrayColumnas[i];
        contenido += "</td>";
    }
    contenido += "</tr>";
    contenido += "</thead>";
    var llaves = Object.keys(data[0]);

    contenido += "<tbody>";
    for (var i = 0 ; i < data.length ; i++) {
        contenido += "<tr>";
        for (var j = 0; j < llaves.length; j++) {
            var valorLLaves = llaves[j];
            contenido += "<td>";
            contenido += data[i][valorLLaves];
            contenido += "</td>";
        }
        contenido += "</tr>";
    }
    contenido += "</tbody>";
    contenido += "</table>";
    document.getElementById("tabla_planes_2").innerHTML = contenido;

}
//var btnPlanes = document.getElementById("btn_plan");
var hipervinculo1 = document.getElementById("h_montly");
hipervinculo1.onclick = function () {
    $.get("../PaginaPrincipal/ListarPlanes/?idtipo_plan=" + 1, function (data) {
        crearListado(["Id", "Plan Residenciales", "Mensualidad", "Velocidad Mbps", "Capacidad"], data)
    });
}

var hipervinculo2 = document.getElementById("h_yearly");
hipervinculo2.onclick = function () {
    $.get("../PaginaPrincipal/ListarPlanes/?idtipo_plan=" + 2, function (data) {
        crearListado_2(["Id", "Plan Coorporativo", "Mensualidad", "Velocidad Mbps", "Capacidad"], data)
    });
}

//function llenarComboTipo_Servicio(data, control, primerElemento) {
//    var contenido = "";
//    var hh = data.length
//    if (primerElemento == true) {
//        contenido += "<option value='" + 0 + "'>--Seleccione--</option>";
//    }
//    for (var i = 0; i < hh; i++) {
//        contenido += "<option value=' " + data[i].id_tipo_plan + " '>";
//        contenido += data[i].tipo_plan;
//        contenido += "</option>";
//    }
//    control.innerHTML = contenido;
//    //document.getElementById("idTipoSexo").innerHTML = contenido;

//}

//function llenarCombo_Cobertura(data, control, primerElemento) {
//    var contenido = "";
//    var hh = data.length
//    if (primerElemento == true) {
//        contenido += "<option value='" + 0 + "'>--Seleccione--</option>";
//    }
//    for (var i = 0; i < hh; i++) {
//        contenido += "<option value=' " + data[i].id_cobertura + " '>";
//        contenido += data[i].cobertura;
//        contenido += "</option>";
//    }
//    control.innerHTML = contenido;
//    //document.getElementById("idTipoSexo").innerHTML = contenido;

//}

//function listarTipoServicio() {
//    $.get("../PaginaPrincipal/Listar_TipoServicio", function (data) {
//        llenarComboTipo_Servicio(data, document.getElementById("cb_tipo_servicio"), true);
//    })
//}

//function listarCobertura() {
//    $.get("../PaginaPrincipal/Listar_Cobertura", function (data) {
//        llenarCombo_Cobertura(data, document.getElementById("cb_distrito"), true);
//    })
//}

//function validar_email(email) {
//    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//    return regex.test(email) ? true : false;
//}

//function EmailMaestro() {
//    var email = document.getElementById("txt_correo").value;
//    if (validar_email(email)) {
//        //alert("El email es correcto");
//        var contenido = "";
//        contenido += "<small id='emailHelp' class='form-text text-success +'>La direccion Email es valida.</small>";
//        document.getElementById("emailHelp").innerHTML = contenido;
//    }
//    else {
//        //alert("El email NO es correcto");
//        var contenido = "";
//        contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email No es valida.</small>";
//        document.getElementById("emailHelp").innerHTML = contenido;
//    }
//}

//enviar correo con boton enviar
//var btn_enviar = document.getElementById("btn_enviar");
//btn_enviar.onclick = function () {
//    Enviar_Datos();
//}

//function Enviar_Datos() {
//    if (datosObligatorios() == true) {
//        var frm = new FormData();
//        //var id = document.getElementById("").value;
//        var email = document.getElementById("txt_correo").value;
//        if (validar_email(email) == false) {
//            //alert("Email Incorecto");
//            var contenido = "";
//            contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email No es valida.</small>";
//            document.getElementById("emailHelp").innerHTML = contenido;
//            return;
//        }
//        var nombre_cliente = document.getElementById("txt_cliente").value;
//        var dni = document.getElementById("txt_dni").value;
//        var nro_operacion = document.getElementById("txt_operacion").value;
//        var tipo_servicio = document.getElementById("cb_tipo_servicio");
//        var texto_Servicio = tipo_servicio.options[tipo_servicio.selectedIndex].text;
//        var distrito = document.getElementById("cb_distrito");
//        var texto_distrito = distrito.options[distrito.selectedIndex].text;

//        console.log(tipo_servicio);
//        frm.append("correo", email);
//        frm.append("nombre_cliente", nombre_cliente);
//        frm.append("dni", dni);
//        frm.append("nro_operacion", nro_operacion);
//        frm.append("tipo_servicio", texto_Servicio);
//        frm.append("distrito", texto_distrito);

//        $.ajax({
//            type: "POST",
//            url: "../PaginaPrincipal/Enviar_Email",
//            data: frm,
//            contentType: false,
//            processData: false,
//            success: function (data) {
//                if (data == 1) {
//                    alert("Se envio correo.");
//                    //borrarDatos();
//                    //location.href = "../Home/Login";
//                }
//                //else if (data == 2) {
//                //    var contenido = "";
//                //    contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email ¡¡Ya exite!!.</small>";
//                //    document.getElementById("emailHelp").innerHTML = contenido;
//                //}
//                else {
//                    alert("Ocurrio un error.");
//                }
//            }

//        });
//    }
//    else {

//        alert("llena los datos");
//    }

//}

//function datosObligatorios() {
//    var exito = true;
//    var controlesObligatorios = document.getElementsByClassName("obligatorio");
//    var ncontroles = controlesObligatorios.length;
//    for (var i = 0 ; i < ncontroles ; i++) {
//        if (i == 4 || i==5 )
//        {
//            if (controlesObligatorios[i].value == 0) {
//                exito = false;
//            }
//        }
//        else if (controlesObligatorios[i].value == "")
//        {
//            exito = false;
//        }
//    }
//    return exito;

//}
