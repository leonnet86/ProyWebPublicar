
ListarImagen_4();
ListarImagen_5();
ListarImagen_6();
ListarImagen_7();
ListarImagen_8();
ListarImagen_9();

function ListarImagen_4() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 4, function (data) {
        MostrarImagen(data, "img_front_4");
    });
}

function ListarImagen_5() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 5, function (data) {
        MostrarImagen(data, "img_front_5");
    });
}

function ListarImagen_6() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 6, function (data) {
        MostrarImagen(data, "img_front_6");
    });
}

function ListarImagen_7() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 7, function (data) {
        MostrarImagen(data, "img_front_7");
    });
}

function ListarImagen_8() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 8, function (data) {
        MostrarImagen(data, "img_front_8");
    });
}

function ListarImagen_9() {
    $.get("../PaginaPrincipal/ConsultarImagenes/?idImagen=" + 9, function (data) {
        MostrarImagen(data, "img_front_9");
    });
}


function MostrarImagen(data, var_id) {
    var tam = data.length;
    //var idimagen = data.idimagen_maestro;

    if (tam == 0)
    {
        if (var_id == "img_front_8")
        {
            var contenido = "";
            contenido += "<img id='" + var_id + "' src='../Imagen/imagenes_Mant/img35.jpg' class='img-fluid'  width='500' height='500'/>";
        }
        else if (var_id == "img_front_9")
        {
            var contenido = "";
            contenido += "<img id='" + var_id + "' src='../Imagen/imagenes_Mant/img35.jpg' class='img-fluid'  width='450' height='450'/>";
        }
        else
        {
            var contenido = "";
            contenido += "<img id='" + var_id + "' src='../Imagen/imagenes_Mant/img35.jpg' width='200' height='250'/>";
        }

        //var contenido = "";
        //contenido += "<img id='" + var_id + "' src='../Imagen/imagenes_Mant/img35.jpg' width='200' height='250'/>";
        document.getElementById(var_id).innerHTML = contenido;
    }
    else
    {
        for (var j = 0; j < tam; j++)
        {
            
            //var idimagen = data[j].idimagen_maestro;
            var cabezera = data[j].cabezera_foto + ",";
            var body_foto = cabezera + data[j].foto_1;
            if (var_id == "img_front_8")
            {
                var contenido = "";
                contenido += "<img id='" + var_id + "' src='" + body_foto + "' class='img-fluid'  width='500' height='500'/>";
            }
            else if (var_id == "img_front_9") {
                var contenido = "";
                contenido += "<img id='" + var_id + "' src='" + body_foto + "' class='img-fluid'  width='450' height='450'/>";
            }
            else
            {
                var contenido = "";
                contenido += "<img id='" + var_id + "' src='" + body_foto + "' width='200' height='250'/>";
            }
           
            document.getElementById(var_id).innerHTML = contenido;
        }
    }
}