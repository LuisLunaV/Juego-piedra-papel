import './styles.css';
import {manos,crearHtml,computadora, lapsoBtn, piedra, papel, tijera, turno} from './js/index.js';

piedra.addEventListener('click',()=>{

    crearHtml('piedra', computadora(manos));
    lapsoBtn();
   
});

papel.addEventListener('click',()=>{

    crearHtml('papel', computadora(manos));
    lapsoBtn();

});

tijera.addEventListener('click',()=>{

    crearHtml('tijera', computadora(manos)); 
    lapsoBtn();

});

turno();