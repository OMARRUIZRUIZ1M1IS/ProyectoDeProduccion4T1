//Calculos de control de inventario por cantidad pedida (Q)

function CalculoMCIxCantidadPedida() {

    event.preventDefault(); 
       
        var CantidadDemandada = parseFloat(document.getElementById("CantidadDeDemanda").value);
        var CantidadPedida = parseFloat(document.getElementById("CantidadPedida").value);
        var InventarioDeSeguridad = parseFloat(document.getElementById("InventarioDeSeguridad").value);

        if (isNaN(CantidadDemandada) || isNaN(CantidadPedida) || isNaN(InventarioDeSeguridad)) {
            // Mostrar un mensaje de error si algún campo está vacío
            document.getElementById("resultado3").innerText = "Por favor, complete todos los campos.";
            return; // Detener la ejecución de la función si hay campos vacíos
        }

        //Realizar calculo de Rotacion de inventario 

         var InventarioProm = ((CantidadPedida/2)+InventarioDeSeguridad).toFixed();
         var RotInventario =(CantidadDemandada/InventarioProm) .toFixed();


         document.getElementById("resultado3").innerText = "Inventario promedio: " + " " + InventarioProm + " ;" + "   Rotacion de inventario : " + RotInventario ;
        
}

document.getElementById("calcularBtn3").addEventListener("click", CalculoMCIxCantidadPedida);

document.getElementById("calcularBtn4").addEventListener("click", CalculoMCIxCiclo);
function Limpiar(){
     
    document.getElementById("formulario").reset();
}

document.getElementById("limpiarBtn").addEventListener("click", Limpiar);