"use strict"

var hora = 0;
var minuto = 0;
var segundo = 0;

var tempo = 1000;
var cronometro;

function iniciar() {
    cronometro = setInterval(() => { timer(); }, tempo);
}


function pausar() {
    clearInterval(cronometro);
}


function parar() {
    clearInterval(cronometro);
    hora = 0;
    minuto = 0;
    segundo = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
    segundo++;
    if (segundo == 60) {
        segundo = 0;
        minuto++;

        if (minuto == 60) {
            minuto = 0;
            hora++;
        }
    }


    var formato = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);
    document.getElementById('counter').innerText = formato;

}