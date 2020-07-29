

listarSexoUsuario();
EmailMaestro();

$("#dpNacimiento").datepicker(
    {
        dateFormat: "dd/mm/yy",
        changeMonth: true,
        changeYear: true
    });

function llenarComboSexo(data, control, primerElemento) {
    var contenido = "";
    var hh = data.length
    if(primerElemento== true){
       contenido += "<option value='"+ 0 +"'>--Seleccione--</option>";
    }
    for (var i = 0; i < hh; i++){
        contenido += "<option value=' " + data[i].idsexo + " '>";
        contenido += data[i].sexo;
        contenido += "</option>";
    }
    control.innerHTML = contenido;
    //document.getElementById("idTipoSexo").innerHTML = contenido;
    
}

function listarSexoUsuario() {
    $.get("../Home/listarSexo", function (data) {
        llenarComboSexo(data,document.getElementById("idTipoSexo"),true);
    })
}

function datosObligatorios() {
    var exito = true;
    var controlesObligatorios = document.getElementsByClassName("obligatorio");
    var ncontroles = controlesObligatorios.length;
    for (var i = 0 ; i < ncontroles ; i++)
    {
        if (i == 4)
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
    listarSexoUsuario();
}

function GuardarDatos() {
    if (datosObligatorios() == true) {
        var frm = new FormData();
        //var id = document.getElementById("").value;
        var email = document.getElementById("txt_email").value;
        if (validar_email(email) == false) {
            //alert("Email Incorecto");
            var contenido = "";
            contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email No es valida.</small>";
            document.getElementById("emailHelp").innerHTML = contenido;
            return;
        }
        var clave = document.getElementById("txt_contraseña").value;
        var nombre = document.getElementById("txt_nombres").value;
        var apellido = document.getElementById("txt_apellido").value;
        var idtiposexo = document.getElementById("idTipoSexo").value;
        var fecha_nac = document.getElementById("dpNacimiento").value;
        //var imgFoto = document.getElementById("imgFoto").src.replace("data:image/png:base64,","");
        var imgFoto = document.getElementById("imgFoto").src;

        var fechaRegistro = new Date();
        var dia = fechaRegistro.getDate();
        var mes = fechaRegistro.getMonth();
        var año = fechaRegistro.getFullYear();
        
        var hora = fechaRegistro.getHours();
        var minuto = fechaRegistro.getMinutes();
        var segundos = fechaRegistro.getSeconds();
        var m_fecha = dia + "/" + mes + "/" + año + " " + hora + ":" + minuto + ":" + segundos;
        console.log(m_fecha);
        //frm.append("idusuario_piloto", 0);
        frm.append("correo", email);
        frm.append("clave", clave);
        frm.append("estado", 1);
        frm.append("fecha_registro", m_fecha);
        frm.append("Nombres", nombre);
        frm.append("Apellidos", apellido);
        frm.append("sexo", idtiposexo);
        frm.append("fecha_nacimiento", fecha_nac);
        frm.append("CADENAFOTO", imgFoto);

        $.ajax({
            type: "POST",
            url: "../Home/guardarUsuarios",
            data: frm,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 1)
                {
                    alert("Se registro al usuario.");
                    borrarDatos();
                    location.href = "../Home/Login";
                }
                else if (data == 2) {
                    var contenido = "";
                    contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email ¡¡Ya exite!!.</small>";
                    document.getElementById("emailHelp").innerHTML = contenido;
                }
                else
                {
                    alert("Ocurrio un error.");
                }
            }

        });
    }
    else
    {

       alert("llena los datos");
    }

}

//function validarEmail() {
//    var email = document.getElementById("txt_email").value;
//    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
//        alert("La dirección de email " + email + " es correcta.");
//    } else {
//        alert("La dirección de email es incorrecta.");
//    }
//}

function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function EmailMaestro() {
    var email = document.getElementById("txt_email").value;
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

$(document).ready(function () {
    $("#txt_nombres").on('paste', function (e) {
        e.preventDefault();
        //alert('Esta acción está prohibida');
    })

    $("#txt_nombres").on('copy', function (e) {
        e.preventDefault();
        //alert('Esta acción está prohibida');
    })

    $("#txt_apellido").on('paste', function (e) {
        e.preventDefault();
        //alert('Esta acción está prohibida');
    })

    $("#txt_apellido").on('copy', function (e) {
        e.preventDefault();
        //alert('Esta acción está prohibida');
    })
})

function Salir(){
    borrarDatos();
    location.href = "../Home/Login";
}

var btnFoto = document.getElementById("btnFoto");
btnFoto.onchange = function (e) {
    var file = document.getElementById("btnFoto").files[0];
    var reader = new FileReader();
    if( reader != null){
        reader.onloadend = function () {
            var img = document.getElementById("imgFoto");
            img.src = reader.result;
            alert(reader.result);
        }

    }
    reader.readAsDataURL(file);
}
