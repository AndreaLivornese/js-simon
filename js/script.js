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

// prendiamo il numero del giorno corrente
let currentGg = 9; 
// data.getDate();
// prendiamo l'ora corrente
let currentHour = 16; 
// data.getHours();
// prendiamo i minuti correnti
let currentMinute = 0;  
// data.getMinutes();
// prendiamo i secondi correnti
let currentSeconds =0; 
// data.getSeconds();


let timerGg = 0;

let timerHour = 0;

let timerMinute = 0;

let timerSeconds = 0;



dateSubtraction();

console.log(timerGg, timerHour, timerMinute, timerSeconds);



setInterval(timer, 1000);




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
        timerHour--;
    }

    if(timerHour < 1){
        timerGg--;
    }


    console.log(timerGg, timerHour, timerMinute, timerSeconds);

}