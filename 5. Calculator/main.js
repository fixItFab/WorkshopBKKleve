const calc = operation => {
  const a = document.querySelector("#a");
  const b = document.querySelector("#b");
  const sumField = document.querySelector("#sum");

  // Werte aus den Feldern in Zahlen konvertieren
  const aNumber = parseInt(a.value);
  const bNumber = parseInt(b.value);

  // Variable für die Summe vorbereiten
  let sum = 0;

  // Rechenarten unterscheiden und berechnen
  if (operation === "addition") {
    sum = aNumber + bNumber;
  } else if (operation === "subtraction") {
    sum = aNumber - bNumber;
  } else if (operation === "multiplication") {
    sum = aNumber * bNumber;
  } else if (operation === "division") {
    sum = aNumber / bNumber;
  }

  // Ergebnis ins Ergebnis-Feld schreiben
  sumField.value = sum;
};
