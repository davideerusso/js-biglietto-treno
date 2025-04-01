const nameUser = prompt("Come ti chiami?", "Davide");
const ageUser = parseInt(prompt("Quanti anni hai?", "29"));
const kmUser = parseInt(prompt("Quanti Km vuoi percorrere?", "10"));

const pricekm = kmUser * 0.21; // pricekm -> String

const discount20 = (pricekm * 20) / 100;
const discount40 = (pricekm * 40) / 100;
const pricediscount20 = pricekm - discount20;
const pricediscount40 = pricekm - discount40;

console.log(nameUser);
console.log(ageUser);
console.log(kmUser);
console.log(pricekm);
console.log(pricediscount20);
console.log(pricediscount40);

let outputText;

//controllo validità input

if (nameUser.length > 0 && !isNaN(ageUser) && ageUser > 0 && kmUser > 0) {
  //se l'età è inferiore a 18
  if (ageUser < 18) {
    outputText = "Il Prezzo è di" + " " + pricediscount20.toFixed(2) + "€";
  }
  //se l'età è superiore a 65
  else if (ageUser > 65) {
    outputText = "Il Prezzo è di" + " " + pricediscount40.toFixed(2) + "€";
  } else {
    outputText = "Il Prezzo è di" + " " + pricekm + "€";
  }
}

alert(outputText);
