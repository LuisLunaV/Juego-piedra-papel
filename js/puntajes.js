import { limpiarHtml, piedra, papel, tijera } from './index.js';

const puntosJugador = document.querySelector('#puntos-jugador'),
      puntosMaquina = document.querySelector('#puntos-maquina'),
      cantidadTurno = document.querySelector('#cantidad-turnos');

export let turnos   = 3,
           puntos   = 0,
           puntosPc = 0;

//Esta funcion toma las decisiones mediante los valores recibidos en los paramretos jugador-maquina utilizando if/else.
//Resta los turnos usados y agrega las victorias a las variables 'puntos-puntosPc', dependiendo las decisiones tomadas.
export const juegos = ( jugador, maquina ) => {

    if(jugador == 'Piedra' && maquina == 'Piedra-2'){
        turnos--;
    } else if(jugador == 'Piedra' && maquina == 'Papel-2'){
        
        puntosPc++;
        turnos--;
    } else if(jugador == 'Piedra' && maquina == 'Tijera-2'){
        
        puntos++;
        turnos--;
    } else if(jugador == 'Papel' && maquina == 'Piedra-2'){
        
        puntos++;
        turnos--;
    } else if(jugador == 'Papel' && maquina == 'Papel-2'){
        
        turnos--;
    } else if(jugador == 'Papel' && maquina == 'Tijera-2'){
        
        puntosPc++;
        turnos--;
    } else if(jugador == 'Tijera' && maquina == 'Piedra-2'){
        
        puntosPc++;
        turnos--;
    } else if(jugador == 'Tijera' && maquina == 'Papel-2'){
        
        puntos++;
        turnos--;
    } else if(jugador == 'Tijera' && maquina == 'Tijera-2'){
        
        turnos--;
    }
 
    turno( );


}

//Obtenemos el nuevo valor de los puntos del jugador, de la computadora, y restamos turnos de los 3 primeros que se habian asignado.
//Actualizando el DOM por los nuevos valores de las variables puntos, puntosPc y turnos
export const turno=( )=>{

puntosJugador.innerText = puntos;
puntosMaquina.innerText = puntosPc;
cantidadTurno.innerText = turnos;

}

//Reiniciamos los puntajes a 0, los turnos los devolvemos a valor 3, y volvemos a activar los botones del jugador.

export const reiniciar =()=>{

setTimeout(()=>{
    limpiarHtml();
    turnos=3;
    puntos=0;
    puntosPc=0;

puntosJugador.innerText = puntos;
puntosMaquina.innerText = puntosPc;
cantidadTurno.innerText = turnos;

piedra.disabled = false;
papel.disabled  = false;
tijera.disabled = false; 

},4000)
    
}