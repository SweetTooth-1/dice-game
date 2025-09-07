var ranInt = Math.floor(Math.random()*6)+1 ;

var randomImage = "images/dice" + ranInt + ".png";

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var ranInt2 = Math.floor(Math.random()* 6) + 1;

var randomImage2 = "images/dice" + ranInt2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (ranInt > ranInt2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (ranInt < ranInt2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}
