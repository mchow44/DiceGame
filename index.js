alert("Refresh Page to Determine Winner.")

var randNumber1 = Math.floor(Math.random()*6) + 1;
var randNumber2 = Math.floor(Math.random()*6) + 1;

var strName1 = "images/dice" + randNumber1 + ".png";
var strName2 = "images/dice" + randNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", strName1);
document.querySelector("img.img2").setAttribute("src", strName2);
//or...we can querySelectorAll and do this:
//var image1 = document.querySelectorAll("img")[0];
//image1.setAttribute("src", strName1);
//or....simplify to one line: document.querySelectorAll("img")[0].setAttribute("src", strName1);


if (randNumber1 === randNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randNumber1 > randNumber2) {
  document.querySelector("h1").textContent = "⛳️Play 1 Wins!";
} else if (randNumber1 < randNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!⛳️";
}
