function calcularCMC() {




    event.preventDefault();
    var horas = parseFloat(document.getElementById("horas").value);
    var duracion = parseFloat(document.getElementById("duracion").value);
    var mtbf = parseFloat(document.getElementById("mtbf").value);
    var ht = parseFloat(document.getElementById("costo-horas-trabajo").value);
    var repuesto = parseFloat(document.getElementById("repuestos").value);
    var operacionales = parseFloat(document.getElementById("tareas-operacionales").value);
    var retraso = parseFloat(document.getElementById("retraso").value);
    var parada = parseFloat(document.getElementById("costo-unitario-parada").value);
    var falla = parseFloat(document.getElementById("falla-unica").value);
    var radioButtons = document.getElementsByName('frecuencia');

    if (isNaN(horas) || isNaN(duracion) || isNaN(mtbf) || isNaN(ht) || isNaN(repuesto) || isNaN(operacionales) || isNaN(retraso) || isNaN(parada) || isNaN(falla)) {
        // Mostrar un mensaje de error si algún campo está vacío
        document.getElementById("resultado2").innerText = "Por favor, complete todos los campos.";
        return; // Detener la ejecución de la función si hay campos vacíos
    }


    var seleccion = document.getElementById("opciones").value;

    


    if (seleccion=== "normal"){

        var numerofallas = (horas / mtbf).toFixed();
        var CMC = (numerofallas * (((ht * duracion) + repuesto + operacionales + retraso) + ((duracion * parada) + falla))).toFixed();
        document.getElementById("resultado2").innerText = "El costo del mantenimiento correctivo es: " + CMC;




    }
    else {

       


        

        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                if (radioButtons[i].value === "hora") {
                    mtbf = (horas * (mtbf / 100)).toFixed();
                } else if (radioButtons[i].value === "tareasopercionales") {
                    mtbf = (operacionales * (mtbf / 100)).toFixed();
                } else if (radioButtons[i].value === "costofallaunica") {
                    mtbf = (falla * (mtbf / 100)).toFixed();
                }
                break; // No es necesario continuar verificando los radio buttons una vez que se encuentra uno seleccionado
            }
        }

       

    
     var numerofallas = (horas / mtbf).toFixed();
        var CMC = (numerofallas * (((ht * duracion) + repuesto + operacionales + retraso) + ((duracion * parada) + falla))).toFixed();
        document.getElementById("resultado2").innerText = "El costo del mantenimiento de transporte es: " + CMC;


    }

   

    
    
}



document.getElementById("calcularBtn2").addEventListener("click", calcularCMC);

function Limpiar(){
     
    document.getElementById("formulario").reset();
}

document.getElementById("limpiarBtn").addEventListener("click", Limpiar);