import {manos,crearHtml,computadora, lapsoBtn, piedra, papel, tijera, turno} from './js/index.js';

piedra.addEventListener('click',()=>{

    crearHtml('Piedra', computadora(manos));
    lapsoBtn();
   
});

papel.addEventListener('click',()=>{

    crearHtml('Papel', computadora(manos));
    lapsoBtn();

});

tijera.addEventListener('click',()=>{

    crearHtml('Tijera', computadora(manos)); 
    lapsoBtn();

});

turno();