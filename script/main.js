console.log('JS is working!');

// 1. Get how many km the user wants to travel.
var userKm;

userKm = parseInt(prompt('Quanti km vuoi percorrere?'));

console.log('km del passeggero', userKm);


// 2. Get the user's age.
var userAge;

userAge = parseInt(prompt('Quanti anni hai?'));

console.log('età del passeggero', userAge);


// 3. With this information calculate the ticket price (0,21€ per km).
var ticketPrice = 0.21;

console.log('prezzo del biglietto al km', ticketPrice);

var ticketTot = ticketPrice * userKm;

console.log('prezzo del biglietto totale senza sconto', ticketTot);


// 4. Apply a 20% discount for minors and a 40% discount for over 65s.
var minorDiscount = 18;

console.log('sconto del 20% se è minorenne');

var overDiscount = 65;

console.log('sconto del 40% se è over 65');

var discount;

if (userAge < minorDiscount) {
  discount = ticketTot / 100 * 20;
}
else if (userAge >= overDiscount) {
  discount = ticketTot / 100 * 40;
}
else {
  discount = 0;
}

ticketTot = ticketTot - discount;

console.log('sconto in €', discount);

console.log('prezzo totale', ticketTot);


// 5. Show the price on the page, indicating whether a discount has been applied.
document.getElementById('discount-notice').innerHTML = ticketTot.toFixed(2);
