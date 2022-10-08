var hora = 0;
var minuto = 0;
var segundo = 0;

var active = 0;

var horas = document.querySelector('.horas');
var minutos = document.querySelector('.minutos');
var segundos = document.querySelector('.segundos');

var comeca = document.getElementById('comeca');

var interval = ''

var load = document.querySelector('.borda')

function play() {
    if(active == 0 ) {
        interval = setInterval(contadorSegundos,1000)  
        active = 1
    }
};

function contadorSegundos() {
    load.classList.add('animeBorda')
    setTimeout(function remove() {
        load.classList.remove('animeBorda')
    },500)

    segundo++ 
    if(segundo >= 60) {
        minuto++
        segundo = 00

        if(minuto<10) {minuto = '0'+minuto}
        minutos.innerHTML= minuto+':'

        if(minuto >= 60) {
            hora++
            minuto = 0

            
            if(minuto<10) {minuto = '0'+minuto}
            if(hora<10) {hora = '0'+hora}
            minutos.innerHTML = minuto+':'
            horas.innerHTML= hora+':'
        }
    }
    if(segundo < 10) {segundo = '0'+segundo}
    segundos.innerHTML = segundo
    
}

function pause() {
    clearInterval(interval)
    active = 0
}
function stoping() {
    clearInterval(interval)
    active = 0

    hora = 0;
    minuto = 0;
    segundo = 0;


    if(hora<10) {hora = '0'+hora}
    if(minuto<10) {minuto = '0'+minuto}
    if(segundo<10) {segundo = '0'+segundo}

    horas.innerHTML= hora+':'
    minutos.innerHTML= minuto+':'
    segundos.innerHTML = segundo
    
}
