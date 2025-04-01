const nameUser = prompt("Come ti chiami?", "Davide");
const ageUser = parseInt(prompt("Quanti anni hai?", "29"));
const kmUser = parseInt(prompt("Quanti Km vuoi percorrere?", "10"));

let Pricekm = kmUser * 0.21;
let discount20 = (Pricekm * 20) / 100;
let discount40 = (Pricekm * 40) / 100;
let Pricediscount20 = Pricekm - discount20;
let Pricediscount40 = Pricekm - discount40;

console.log(nameUser);
console.log(ageUser);
console.log(kmUser);
console.log(Pricekm);
console.log(Pricediscount20);
console.log(Pricediscount40);

let outputText;

//controllo validità input

if (nameUser.length > 0 && !isNaN(ageUser) && ageUser > 0) {
  //se l'età è inferiore a 18
  if (ageUser < 18) {
    outputText = "Il Prezzo è di" + " " + Pricediscount20 + "€";
  }
  //se l'età è superiore a 65
  if (ageUser > 65) {
    outputText = "Il Prezzo è di" + " " + Pricediscount40 + "€";
  } else {
    outputText = "Il Prezzo è di" + " " + Pricekm + "€";
  }
}

alert(outputText);
