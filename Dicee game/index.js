// window.onload=function(){
// var randomnumber1 = Math.floor(Math.random() * 6) + 1;
// var diceImage1 = "./images/dice" + randomnumber1 + ".png";
// var diceImage2 = "./images/dice" + randomnumber1 + ".png";

// document.querySelector(".img1").setAttribute("src", diceImage1);
// document.querySelector(".img2").setAttribute("src", diceImage2);
// }
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "./images/dice" + randomnumber1 + ".png";
var diceImage2 = "./images/dice" + randomnumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 won";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 won";
} else {
  document.querySelector("h1").textContent = "Draw";
}