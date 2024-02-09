// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!



/*

Analisi

Ipotiziamo che si apre la pagina  alle 16:00 del 09/02/2024
dobbiammo calcolare quanti giorni quante ore quanti minuti e secondi mancano alle 9:30 di lunedì 12 Febbraio.
Per prima cosa con Date possiamo prendere la data corrente

Bisognerebbe sottrarre al giorno stabilito, il giorno corrente
sottrare al'ora stabilita  le ore correnti
sottrare ai minuti stabiliti i minuti correnti 
sottrarre ai secondi stabiliti i secondi correnti
Da questi calcoli ci troviamo il tempo che rimane fino alla data del giorno scelto

*/



// variabili che rappresentano il giorno l'ora minuti e secondi di quando deve terminare il timer

let gg = 12;
let hours= 9;
let minutes = 30;
let seconds = 0;


// prendiamo la data corrente
const data = new Date();
console.log(data);

// prendiamo il numero del giorno corrente
let currentGg = data.getDate();
// prendiamo l'ora corrente
let currentHour = data.getHours();
// prendiamo i minuti correnti
let currentMinute =  data.getMinutes();
// prendiamo i secondi correnti
let currentSeconds = data.getSeconds();


// giorni per il timer
let timerGg = 0;
// ore per il timer
let timerHour = 0;
// minuti per il timer
let timerMinute = 0;
// secondi per il timer
let timerSeconds = 0;



dateSubtraction();

console.log(timerGg, timerHour, timerMinute, timerSeconds);



const time = setInterval(timer, 1000);


if(timerGg == 0 && timerHour == 0 && timerMinute == 0 && timerSeconds == 0){
    clearInterval(time);
}



const timerEl = document.querySelector("#timer");


// funzioni 

function dateSubtraction(){

    if(seconds >= currentSeconds){
        timerSeconds = seconds - currentSeconds;
    }else{

        seconds += 60;

        minutes--;

        timerSeconds = seconds - currentSeconds;
    }

    if(minutes >= currentMinute){

        timerMinute = minutes - currentMinute;

    }else{

        minutes += 60;

        hours--;

        timerMinute = seconds - currentMinute;
    }

    if(hours >= currentHour){

        timerHour = hours - currentHour;

    }else{

        hours += 24;

        gg--;

        timerHour = hours - currentHour;
    }

    if(gg >= currentGg){

        timerGg = gg - currentGg;

    }

}






function timer(){

    if(timerSeconds > 0){
        timerSeconds--
    }else{
        timerSeconds = 60;
        timerMinute--;
    }

    if(timerMinute < 1){
        timerMinute = 60;
        timerHour--;
    }

    if(timerHour < 1){
        timerHour =24;
        timerGg--;
    }


    timerEl.innerHTML = `Mancano esattamente <br> ${timerGg} giorni ${timerHour} ore ${timerMinute} minuti ${timerSeconds} secondi <br> alle 9:30 di Lunedì 12 Febbraio`

}