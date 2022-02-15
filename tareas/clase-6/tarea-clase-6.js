/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $siguientePaso = document.querySelector("#siguiente-paso");
$siguientePaso.onclick = function(){
    const cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
    const integrantes = document.querySelector("#integrantes");
    
    mostrarInformacion("#calcular");
    mostrarInformacion("#resetear")
    
    
    for(let i=0; i < cantidadIntegrantes; i++){
        crearIntegrantes(i);
    }

}

function mostrarInformacion(elemento){
    document.querySelector(elemento).className="";
}

function ocultarInformacion(elemento){
    document.querySelector(elemento).className="oculto";
}


function ocultarIntegrantes(){
    const cantidad= document.querySelectorAll(".integrante")
    for(let i=0; i < cantidad.length; i++){
        document.querySelector(".integrante").className= "oculto";
    }
}


const $resetear = document.querySelector("#resetear");
$resetear.onclick = function(){
    
    ocultarIntegrantes();
    ocultarInformacion("#analisis");
    ocultarInformacion("#calcular");
}



function crearIntegrantes(indice){
    const $div = document.createElement("div");
    $div.className="integrante"

    const $label = document.createElement("label");
    $label.textContent = "La edad de tu integrante " + (indice + 1);

    const $input = document.createElement("input");
    $input.className= "edad-integrante";

    integrantes.appendChild($div);
    $div.appendChild($label);
    $div.appendChild($input);

}

const $calcular = document.querySelector("#calcular");
$calcular.onclick = function(){
    mostrarInformacion("#analisis");
    document.querySelector("#edad-mayor").textContent = calcularMayorEdad(document.querySelectorAll(".edad-integrante"));
    document.querySelector("#edad-menor").textContent = calcularMenorEdad(document.querySelectorAll(".edad-integrante"));
    document.querySelector("#edad-promedio").textContent = calcularPromedio(document.querySelectorAll(".edad-integrante"));
    mostrarInformacion("#espacios-calculo");
    mostrarInformacion("#boton-salario");
}



function calcularMayorEdad(elemento){
    const edades = elemento;
    let edadMayor = 0;
    for(let i=0;i < edades.length;i++){
        if(i === 0){
            edadMayor = Number(edades[i].value);
        }
        else if(edades[i].value > edadMayor ){
            edadMayor = Number(edades[i].value);
        }
    }
    return edadMayor;
}

function calcularMenorEdad(elemento){
    const edades = elemento;
    let edadMenor = 0;
    for(let i=0;i < edades.length;i++){
        if(i === 0){
            edadMenor = Number(edades[i].value);
        }
        else if(edades[i].value < edadMenor ){
            edadMenor = Number(edades[i].value);
        }
    }
    return edadMenor;
}

function calcularPromedio(elemento){
    const edades = elemento;
    let sumaPromedio = 0;
    let cantidad = edades.length;
    for(let i=0; i < cantidad; i++){
        sumaPromedio += Number(edades[i].value);
    }
    return sumaPromedio / cantidad;
   
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $agregar_salario = document.querySelector("#agregar-salario");
$agregar_salario.onclick= function(){
    agregarEspacio();
}

const $quitar_salario = document.querySelector("#quitar-salario");
$quitar_salario.onclick = function(){
    quitarEspacio()
}

const $calcular_salario = document.querySelector("#calcular-salario");
$calcular_salario.onclick = function(){
    
    mostrarInformacion("#calculos");
    document.querySelector('#salario-mayor').textContent = calcularMayorSalario(document.querySelectorAll('.espacio-calculo'));
    document.querySelector('#salario-menor').textContent = calcularMenorSalario(document.querySelectorAll('.espacio-calculo'));
    document.querySelector('#salario-promedio').textContent = calcularPromedioSalario(document.querySelectorAll('.espacio-calculo'));
}

function agregarEspacio(){
    const $div = document.createElement('div');
    $div.className = 'espacio-cal';
  
    const $label = document.createElement('label');
    $label.textContent = "Salario anual" ;
  
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.className= 'espacio-calculo'
  
    $div.appendChild($label);
    $div.appendChild($input);
  
   const $espacios = document.querySelector("#espacios-calculo");
   $espacios.appendChild($div);
  }


function quitarEspacio(){
    const $div = document.querySelector(".espacio-calculo");
    
    const $espacios = document.querySelector("#espacios-calculo");
    $espacios.removeChild($div);
}




function calcularMayorSalario(elemento){
    const salarios = elemento;
    let mayorSalario=0;
    for(let i=0;i < salarios.length; i++){
        if(i === 0){
            mayorSalario = Number(salarios[i].value);
        }
        else if(salarios[i].value > mayorSalario){
            mayorSalario = Number(salarios[i].value);
        }
    }
    return mayorSalario;
}


function calcularMenorSalario(elemento){
    const salarios = elemento;
    let menorSalario=0;
    for(let i=0;i < salarios.length; i++){
        if(i === 0){
            menorSalario = Number(salarios[i].value);
        }
        else if(salarios[i].value < menorSalario){
            menorSalario = Number(salarios[i].value);
        }
    }
    return menorSalario;
}


function calcularPromedioSalario(elemento){
    const salarios = elemento;
    let cantidad= salarios.length;
    let sumaTotal = 0;
    for(let i=0;i < salarios.length; i++){
        sumaTotal += Number(salarios[i].value);
    
    }
    
    return sumaTotal / cantidad;
}

