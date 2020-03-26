console.log('JS is working!');

// 1. Get how many km the user wants to travel.
var userKm;

userKm = parseInt(prompt('Quanti km vuoi percorrere?'));

console.log(userKm);


// 2. Get the user's age.
var userAge;

userAge = parseInt(prompt('Quanti anni hai?'));

console.log(userAge);


// 3. With this information calculate the ticket price (0,21€ per km).
var ticketPrice = 0.21;

console.log(ticketPrice);

var ticketTot = ticketPrice * userKm;

console.log(ticketTot);


// 4. Apply a 20% discount for minors and a 40% discount for over 65s.
var minorDiscount = 18;

var overDiscount = 65;

var discount;

if (userAge < minorDiscount) {
  discount = 'Hai uno sconto del 20%';
}
else if (userAge >= overDiscount) {
  discount = 'Hai uno sconto del 40%';
}

console.log(discount);

// 5. Show the price on the page, indicating whether a discount has been applied.
