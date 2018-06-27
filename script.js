
function humano() {
  let adivina = getRandom(0,100);
  let intentos = 0;
  let pregunta = prompt("Adivina el numero que tiene el Robot en la memoria, ¿Que numero es?");

  //Si el jugador no ingresa nada se termina el juego
  if(pregunta === "") {
    return false;
  }

  while(adivina != pregunta){
    intentos++;
    if(adivina > pregunta){
      pregunta = prompt("El numero es mas grande!, ¿Que numero es?");
    } else {
      pregunta = prompt("El numero es mas chico!, ¿Que numero es?");
    }

    if(pregunta === "") {
      return false;
    }

  }
  alert("Felicitaciones adivinaste! el numero es " + pregunta + " fallaste " + intentos + " veces");
  return true;
}

function robot() {
  let adivina = getRandom(0,100);
  let intentos = 0;
  let pregunta = prompt("El numero que tienes en mente es " +  adivina + " ?, responde con +, - o si");

  //Si el jugador no ingresa nada se termina el juego
  if(pregunta === "") {
    return false;
  }

  while(pregunta != "si"){
    intentos++;
    if(pregunta == "+"){
      adivina = getRandom(adivina,100);
      pregunta = prompt("El numero es " + adivina + " ?, responde con +, - o si");
    } else {
      adivina = getRandom(0,adivina);
      pregunta = prompt("El numero es " + adivina + " ?, responde con +, - o si");
    }
    if(pregunta === "") {
      return false;
    }
  }
  alert("Lo logre! el numero es " + adivina + " falle " + intentos + " veces");
  return true;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
