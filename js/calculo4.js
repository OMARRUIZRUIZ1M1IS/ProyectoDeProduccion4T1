//Calculos de control de inventario por ciclo de revision (T) 

function CalculoMCIxCiclo() {
    event.preventDefault(); 

    var CantidadDemandada = parseFloat(document.getElementById("CantDemanda").value);
    var Ciclo = parseFloat(document.getElementById("Ciclo").value);
    var InventarioDeSeguridad = parseFloat(document.getElementById("InventarioSeguridad").value);
    var Tiempo = parseFloat(document.getElementById("Tiempo").value);

    if (isNaN(CantidadDemandada) || isNaN(Ciclo) || isNaN(InventarioDeSeguridad) || isNaN(Tiempo)) {
        // Mostrar un mensaje de error si algún campo está vacío
        document.getElementById("resultado5").innerText = "Por favor, complete todos los campos. ";
        return; // Detener la ejecución de la función si hay campos vacíos
    }
    

    //Realizar calculo de Inventario promedio y Rotacion de inventario 
    var InventProm = (((CantidadDemandada * Ciclo) / 2) + InventarioDeSeguridad).toFixed();
    var RotInvent = (CantidadDemandada * Tiempo / InventProm).toFixed();

    document.getElementById("resultado5").innerText = "Inventario promedio: " + InventProm;
    document.getElementById("resultado6").innerText = "Rotacion de inventario : " + RotInvent;
}

document.getElementById("calcularBtn4").addEventListener("click", CalculoMCIxCiclo);
function Limpiar(){
     
    document.getElementById("formulario").reset();
}

document.getElementById("limpiarBtn").addEventListener("click", Limpiar);