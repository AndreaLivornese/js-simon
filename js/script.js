// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!



/*

Analisi

Ipotiziamo che si apre la pagina  alle 16:00 del 09/02/2024
dobbiammo calcolare quanti giorni quante ore quanti minuti e secondi mancano alle 9:30 di lunedì 12 Febbraio.
Per prima cosa con Date possiamo prendere la data corrente

Bisognerebbe sottrarre il giorno stabilito meno 1, il giorno corrente
sottrare a 24 le ore correnti
sottrare a 0 minuti i minuti correnti 
sottrarre a 0 secondi i secondi correnti
Da questi calcoli ci troviamo il tempo che rimane fino alla mezzanotte del giorno scelto

Successivamente bisogna addizionare al risultato di prima l'orario scelto nella giornata voluta (in questo caso 9 e 30 del mattino)
così conosciamo il tempo in giorni ore minuti e secondi che mancano.

*/