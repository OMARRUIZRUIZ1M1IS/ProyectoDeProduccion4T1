
    //calculos del eoq
    function calcularEOQ() {

        event.preventDefault(); 
       
        var demanda = parseFloat(document.getElementById("demanda").value);
        var costoPedido = parseFloat(document.getElementById("costo_pedido").value);
        var costoMantenimiento = parseFloat(document.getElementById("costo_mantenimiento").value);

        var tiempo=parseFloat(document.getElementById("Tiempo").value);
        var radioButtons = document.getElementsByName('frecuencia');

        var factotiempo;




        if (isNaN(demanda) || isNaN(costoPedido) || isNaN(costoMantenimiento)) {
            // Mostrar un mensaje de error si algún campo está vacío
            document.getElementById("resultado").innerText = "Por favor, complete todos los campos.";
            return; // Detener la ejecución de la función si hay campos vacíos
        }

        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                if (radioButtons[i].value === "anual") {
                    factotiempo = 365;
                } else if (radioButtons[i].value === "mensual") {
                    factotiempo = 30;
                } else if (radioButtons[i].value === "semanal") {
                    factotiempo = 7;
                }
                break; // No es necesario continuar verificando los radio buttons una vez que se encuentra uno seleccionado
            }
        }




        // Realizar los cálculos
        tiempo= factotiempo*tiempo;
        var EOQ = Math.sqrt(((2 * demanda) *(costoPedido*tiempo) ) / costoMantenimiento).toFixed();
        



        
        document.getElementById("resultado").innerText = "Cantidad óptima de pedido (EOQ): " + EOQ;
    }


    //calculo del cmc

  



    document.getElementById("calcularBtn").addEventListener("click", calcularEOQ);



    function Limpiar(){
     
        document.getElementById("formulario").reset();
    }

    document.getElementById("limpiarBtn").addEventListener("click", Limpiar);

