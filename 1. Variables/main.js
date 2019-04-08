// const -> Wert nicht änderbar (immutable)
// let   -> Wert änderbar (mutable)
// var   -> nicht mehr verwenden !!!

// Variable vom Typ string
const vorname = "Fabian";
const nachname = "Grebe";

// Variable vom Typ number
const alter = 28;

// Variable vom Typ Array
const haustiere = ["Katze", "Hund"];

// Variablen vom Typ string
let ort = "Kalkar";

// Beispiel für String-Konkatenation
console.log("Hallo, ich bin " + vorname + " " + nachname);
console.table("Ich bin " + alter + " Jahre alt");
console.table("Ich habe folgende Haustiere: " + haustiere);
console.table("Ich wohne in " + ort);

ort = "Kleve";
console.log("Ich bin gerade in " + ort);

const SekundenSeit1970 = Date.now();
const heute = new Date(SekundenSeit1970);
console.log("Aktuelles Datum/Uhrzeit:", heute);
