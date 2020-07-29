
var id_imagen = 0;
var nombre_foto = "";
var id_boton = "";

ListarImagen_1();
ListarImagen_2();
ListarImagen_3();
ListarImagen_4();
ListarImagen_5();
ListarImagen_6();
ListarImagen_7();
ListarImagen_8();
ListarImagen_9();

///////////////////////////////////////////////////////////////////////////////////////
//var contenido = "";
//contenido += "<img id='" + var_id + "' class='card-img-top' src='../Imagen/imagenes_Mant/img35.jpg' alt='Image Description'>";
////contenido += "<img id='imagen_1' class='card-img-top' src='../Imagen/imagenes_Mant/img35.jpg' alt='Image Description'>";
//document.getElementById(var_id).innerHTML = contenido;
////////////////////////////////////////////////////////////////////////////////////////////

var file1_ = document.getElementById("file1");
file1_.onchange = function (e) {
    var file = document.getElementById("file1").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_1");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_1' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_1").innerHTML = contenido;
            id_imagen = 1;
            nombre_foto = "foto_1";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file2_ = document.getElementById("file2");
file2_.onchange = function (e) {
    var file = document.getElementById("file2").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_2");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_2' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_2").innerHTML = contenido;
            id_imagen = 2;
            nombre_foto = "foto_2";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file3_ = document.getElementById("file3");
file3_.onchange = function (e) {
    var file = document.getElementById("file3").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_3");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_3' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_3").innerHTML = contenido;
            id_imagen = 3;
            nombre_foto = "foto_3";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file4_ = document.getElementById("file4");
file4_.onchange = function (e) {
    var file = document.getElementById("file4").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_4");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_4' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_4").innerHTML = contenido;
            id_imagen = 4;
            nombre_foto = "foto_4";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file5_ = document.getElementById("file5");
file5_.onchange = function (e) {
    var file = document.getElementById("file5").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_5");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_5' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_5").innerHTML = contenido;
            id_imagen = 5;
            nombre_foto = "foto_5";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file6_ = document.getElementById("file6");
file6_.onchange = function (e) {
    var file = document.getElementById("file6").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_6");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_6' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_6").innerHTML = contenido;
            id_imagen = 6;
            nombre_foto = "foto_6";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file7_ = document.getElementById("file7");
file7_.onchange = function (e) {
    var file = document.getElementById("file7").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_7");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_7' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_7").innerHTML = contenido;
            id_imagen = 7;
            nombre_foto = "foto_7";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file8_ = document.getElementById("file8");
file8_.onchange = function (e) {
    var file = document.getElementById("file8").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_8");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_8' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_8").innerHTML = contenido;
            id_imagen = 8;
            nombre_foto = "foto_8";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}

var file9_ = document.getElementById("file9");
file9_.onchange = function (e) {
    var file = document.getElementById("file9").files[0];
    var reader = new FileReader();
    if (reader != null) {
        reader.onloadend = function () {
            var img = document.getElementById("imagen_9");
            img.src = reader.result;
            var contenido = "";
            contenido += "<img id='imagen_9' class='card-img-top' width='354' height='231' src='" + reader.result + "' alt='Image Description'>";
            document.getElementById("imagen_9").innerHTML = contenido;
            id_imagen = 9;
            nombre_foto = "foto_9";
            //alert(reader.result);
        }
    }
    reader.readAsDataURL(file);
}



function boton_guardar_foto_1() {
    id_boton = "imagen_1";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_2() {
    id_boton = "imagen_2";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_3() {
    id_boton = "imagen_3";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_4() {
    id_boton = "imagen_4";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_5() {
    id_boton = "imagen_5";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_6() {
    id_boton = "imagen_6";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_7() {
    id_boton = "imagen_7";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_8() {
    id_boton = "imagen_8";
    GuardarImagenes_BaseDatos();
}

function boton_guardar_foto_9() {
    id_boton = "imagen_9";
    GuardarImagenes_BaseDatos();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function MostrarImagen(data,var_id)
{
    var tam = data.length
    if (tam == 0)
    {
        var contenido = "";
        contenido += "<img id='" + var_id + "' class='card-img-top' width='354' height='231' src='../Imagen/imagenes_Mant/img35.jpg' alt='Image Description'>";
        //contenido += "<img id='imagen_1' class='card-img-top' src='../Imagen/imagenes_Mant/img35.jpg' alt='Image Description'>";
        document.getElementById(var_id).innerHTML = contenido;
    }
    else
    {
        for (var j = 0; j < tam; j++)
        {
            var contenido = "";
            var cabezera = data[j].cabezera_foto + "," ;
            var body_foto = cabezera + data[j].foto_1;
            //contenido += "<img id='imagen_1' class='card-img-top' src='" + body_foto + "' alt='Image Description'>";
            //document.getElementById("imagen_1").innerHTML = contenido;
            contenido += "<img id='" + var_id + "' class='card-img-top' width='354' height='231' src='" + body_foto + "' alt='Image Description'>";
            document.getElementById(var_id).innerHTML = contenido;
        }
    }
}


function ListarImagen_1()
{
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 1, function (data) {
        MostrarImagen(data, "imagen_1");
    });

    //for (var i = 1; i <= 9; i++)
    //{
    //    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + i, function (data) {
    //        MostrarImagen(data, "imagen_" + i);
    //    })
    //}
}

function ListarImagen_2() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 2, function (data) {
        MostrarImagen(data, "imagen_2");
    });
}

function ListarImagen_3() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 3, function (data) {
        MostrarImagen(data, "imagen_3");
    });
}

function ListarImagen_4() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 4, function (data) {
        MostrarImagen(data, "imagen_4");
    });
}

function ListarImagen_5() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 5, function (data) {
        MostrarImagen(data, "imagen_5");
    });
}

function ListarImagen_6() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 6, function (data) {
        MostrarImagen(data, "imagen_6");
    });
}

function ListarImagen_7() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 7, function (data) {
        MostrarImagen(data, "imagen_7");
    });
}

function ListarImagen_8() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 8, function (data) {
        MostrarImagen(data, "imagen_8");
    });
}

function ListarImagen_9() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 9, function (data) {
        MostrarImagen(data, "imagen_9");
    });
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function GuardarImagenes_BaseDatos() {
    //if (datosObligatorios() == true)
    //{
        var frm = new FormData();
        //var imgFoto_1 = document.getElementById("imagen_1").src.replace("data:image/png:base64,","");
    //var let = "imagen_1"
    //var imgFoto = document.getElementById(flat_imagen).src;
    var imgFoto = document.getElementById(id_boton).src;
    var idfoto = id_imagen;
    var nombreFoto = nombre_foto;
        //frm.append("NOMBRE_IMAGEN")=;
    frm.append("CADENAFOTO", imgFoto);
    frm.append("idimagen_maestro", idfoto);
    frm.append("nombre_imagen", nombreFoto);

        $.ajax({
            type: "POST",
            url: "../PaginaPrincipal/guardarImagenes",
            data: frm,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 1)
                {
                    swal("Mensaje!", "Se registro la Foto con exito!", "success");
                    //alert("Se registro la Foto con exito.");

                    //borrarDatos();
                    //location.href = "../Home/Login";
                }
                else if (data == 3)
                {
                    //alert("Seleccione la Foto que no sea por Defecto.");
                    swal("Mensaje!", "Seleccione la Foto que no sea por Defecto!", "error");
                    //var contenido = "";
                    //contenido += "<small id='emailHelp' class='form-text text-danger +'>La direccion Email ¡¡Ya exite!!.</small>";
                    //document.getElementById("emailHelp").innerHTML = contenido;
                }
                else
                {
                    swal("Mensaje!", "Ocurrio un error!", "error");
                    //alert("Ocurrio un error.");
                }
            }

        });
    //}
    //else {

      //  alert("llena los datos");
    //}

}