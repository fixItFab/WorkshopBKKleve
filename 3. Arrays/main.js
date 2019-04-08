const numbers = [1, 14, 73, 237];

// 1. Variante - forEach

let sum = 0;

numbers.forEach(zahl => {
  sum += zahl;
});

console.log("Summe mit forEach: ", sum);

//--------------------------------------------------------//

// 2. Variante - for

sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Summe mit for: ", sum);
