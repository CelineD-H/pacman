//import { Grille } from "./classes/grille.js";
//import { Pacman } from "./classes/pacman.js";
import {changeBorder, changeColor, initGrille, moveDown, moveLeft, moveRight, moveUp, stopFlashBorder, stopFlashColor} from "./utils.js";

//let grille = getGrille();
//console.log(grille.tableau);

let btnAfficher = document.getElementById("btnAfficher");
let foot = document.getElementById("foot");
let titre = document.getElementById("titre");
let flashOn = document.getElementById("btnFlashOn");
let flashOff = document.getElementById("btnFlashOff");
let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");
let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");

btnAfficher.addEventListener("click", initGrille);
titre.addEventListener("click", changeBorder);
foot.addEventListener("click", stopFlashBorder);
flashOn.addEventListener("click", changeColor);
flashOff.addEventListener("click", stopFlashColor);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);


//document.body.addEventListener("keydown", changeDirection);
//(getGrille().setPacman(getPacman())).pacman