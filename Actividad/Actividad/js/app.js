'use strict';
const envio = document.getElementById('enviar');
const listaNumeros = document.getElementById('lista_numeros');
let btnMayor;
btnMayor = document.createElement('button');
    btnMayor.type ='button';
    btnMayor.textContent = "Número Mayor";
let btnMenor;
btnMenor = document.createElement('button');
btnMenor.type = 'button';
btnMenor.textContent = "Número Menor"
envio.addEventListener('click',()=>{
   let cantNumeros = document.getElementById('numero').value;
   cantNumeros =parseInt(cantNumeros);
   if((cantNumeros >=1) && (cantNumeros<=900)){
    
      for(let i=1; i<=cantNumeros; i++){
        const div =document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type','number');
        input.id = "valor_numero";
        input.min =-999;
        input.max = 999;
        input.step = 1;
        div.appendChild(input);
        listaNumeros.appendChild(div);
      }
      listaNumeros.appendChild(btnMenor)
      listaNumeros.appendChild(btnMayor);
   }
});


btnMayor.onclick = function(){
    let arrayInput = [];
    arrayInput = document.querySelectorAll('#valor_numero');
    // Obtener el valor del primer elemento
    let mayor = parseFloat(arrayInput[0].value); 

    arrayInput.forEach(e => {
        // Obtener el valor de la posición actual del arreglo
        let valor = parseFloat(e.value); 
        //se verifica que sea un número y no una letra y se cumple que sea un numero mayor al anterio valor
        if (!isNaN(valor) && valor > mayor) {
           // Se da el valor mayor a la variable
            mayor = valor; 
        }
    });

    let divResultado = document.createElement('div');
    divResultado.className = "resultado";
    divResultado.textContent = `El numero mayor es: ${mayor}`;
    document.body.appendChild(divResultado);
}

btnMenor.onclick = function(){
    let arrayInput = [];
    arrayInput = document.querySelectorAll('#valor_numero');
    // Obtener el valor del primer elemento
    let menor = parseFloat(arrayInput[0].value); 

    arrayInput.forEach(e => {
        // Obtener el valor de la posición actual del arreglo
        let valor = parseFloat(e.value); 
        //se verifica que sea un número y no una letra y se cumple que sea un numero mayor al anterio valor
        if (!isNaN(valor) && valor < menor) {
           // Se da el valor mayor a la variable
            menor = valor; 
        }
    });

    let divResultado = document.createElement('div');
    divResultado.className = "resultado";
    divResultado.textContent = `El numero menor es: ${menor}`;
    document.body.appendChild(divResultado);
}
