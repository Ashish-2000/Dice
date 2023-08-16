let rannum = Math.floor(Math.random() * 6) + 1;
let ranImg = "./images/dice" + rannum + ".png";
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", ranImg);

let rannum2 = Math.floor(Math.random() * 6) + 1;
let ranImg2 = "./images/dice" + rannum2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", ranImg2);

if (rannum > rannum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (rannum == rannum2) {
 document.querySelector("h1").innerHTML = "Match Tie";
}
else {
 document.querySelector("h1").innerHTML = "Player 2 wins";
}
