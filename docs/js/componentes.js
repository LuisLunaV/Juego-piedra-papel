import { juegos, turnos, puntos, puntosPc, reiniciar } from './puntajes.js';

export const manos          = ['Piedra-2','Papel-2','Tijera-2'],
             piedra         = document.querySelector('.btn-piedra'),
             papel          = document.querySelector('.btn-papel'),
             tijera         = document.querySelector('.btn-tijera'),
             cantidaTurno   = document.querySelector('#cantidad-turnos'),
             imgJugador     = document.querySelector('#jugador'),
             imgComputadora = document.querySelector('#computadora'),
             div            = document.createElement('div');

//Funcion que devuelve un valor aleatoriio de el arreglo manos, el cual se toma como la figura seleccionada por la maquina para jugar.
export const computadora =( array ) => {

    let mano = array.sort(()=> Math.random() - 0.5); 

    return mano[2];

}

//Recibe como argumento las figuras seleccionadas por el jugador-computadora, y se crean las eiquetas <img> para mostrar sus respectivas figuras.
export const crearHtml=( tipo1, tipo2 ) => {
console.log(tipo1, tipo2);
    if(tipo1){
        const htmlJugador = `<img src="./img/manos/${tipo1}.png" alt="Jugador-1" /> `;
        div.innerHTML     =  htmlJugador;
       imgJugador.append(div.firstElementChild);
       
        
    }
    
    if(tipo2[tipo2.length-1]==2){
        const htmlMaquina = `<img src="./img/manos/${tipo2}.png" alt="Jugador-2" />`;
        div.innerHTML     =  htmlMaquina;    
        imgComputadora.append(div.firstElementChild);
      
    }
  
//Envia como argumento los tipos de figuras a una funcion que toma las decisiones de quien gana o quien pierde dependiendo las figuras.
    juegos(tipo1, tipo2);
   
    };

//Limpiamos el campo de juego eliminando las etiquetas <img> de jugador1 y computadora del html.
    export const limpiarHtml=()=>{
        imgJugador.innerHTML='';
        imgComputadora.innerHTML='';
    };
  

    export const lapsoBtn=()=>{

//Cada que termina un turno, si este es mayor a 0, se bloquean los botones por 2s, se limpia la mesa, e inicia el proximo turno.

    if(turnos != 0){

        piedra.disabled = true;
        papel.disabled  = true;
        tijera.disabled = true;

        setTimeout(()=>{
        piedra.disabled = false;
        papel.disabled  = false;
        tijera.disabled = false; 

        limpiarHtml();

        },2000); 
        
    }else{

            piedra.disabled = true;
            papel.disabled  = true;
            tijera.disabled = true;
            
            setTimeout(()=>{
            
                limpiarHtml();
//Los siguientes IF reciben los valores puntos y puntosPc despues de que la cantidad de turnos quedaros en 0, dependiendo cual de las variables
//obtuvo mas victorias, se tomara la decision de mostrar al jugador una imagen de ganador o una de que perdio.
//Despues llama a la funcion 'reiniciar()' para volver a jugar.
                if(puntos > puntosPc){
    
            const htmlJugador = `<img src="./img/final/win.png" alt="Jugador-1" /> `;
            div.innerHTML     =  htmlJugador;
            imgJugador.append(div.firstElementChild);
    
            const htmlMaquina = `<img src="./img/final/lose.png" alt="Jugador-1" /> `;
            div.innerHTML     =  htmlMaquina;    
            imgComputadora.append(div.firstElementChild);

reiniciar();

            
        }
                else if(puntos < puntosPc){

                    const htmlMaquina = `<./img src="img/final/win.png" alt="Jugador-1" /> `;
                    div.innerHTML     =  htmlMaquina
                    imgComputadora.append(div.firstElementChild);
    
                    const htmlJugador = `<./img src="img/final/lose.png" alt="Jugador-1" /> `;
                    div.innerHTML     =  htmlJugador   
                    imgJugador.append(div.firstElementChild);
reiniciar();
                    
                }
        
                else{ 
                    
                    cantidaTurno.innerText = 'Empate';
                    reiniciar();
            }    

            },2000)
            
            
        }
    };
            

    