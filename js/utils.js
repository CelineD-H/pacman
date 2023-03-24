import { Grille } from "./classes/grille.js";
import { Pacman } from "./classes/pacman.js";

const btn = document.getElementById("btnAfficher");
const flashOn = document.getElementById("btnFlashOn");
const flashOff = document.getElementById("btnFlashOff");
export const tab = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

export function getGrille() {
    let grille = Grille.getInstance(tab);
    return grille;
}

export function getPacman() {
    let pacman = Pacman.getInstance();
    return pacman;
}


export function jouer(grille) {
    //console.log("ça démarre");
    let pacman = grille.getPacmanGrille();
    let tableau = grille.getTab();
    let pacmancss = document.querySelector(".pacman");
    if(hasBonbon(grille, pacman)) {
        tableau[pacman.x][pacman.y] = 1;
    }
    if(okDeplacerPacman(pacman)) {
        tableau[pacman.x][pacman.y] = 1;
        switch (pacman.getDirection()) {
            case "right" : pacman.sety(pacman.gety() + 1);
            pacmancss.style.transform = "rotate(0deg)";
            break;
            case "left" : pacman.sety(pacman.gety() - 1);
            pacmancss.style.transform = "rotate(180deg)";
            break;
            case "up" : pacman.setx(pacman.getx() - 1);
            pacmancss.style.transform = "rotate(270deg)";
            break;
            case "down" : pacman.setx(pacman.getx() + 1);
            pacmancss.style.transform = "rotate(90deg)";
        }
    }
    tableau[pacman.x][pacman.y] = 3;
    grille.setTab(tableau);
    grille.setPacman(pacman);
    clearGrille();
    afficherGrille(grille);
}

function okDeplacerPacman(pacman) {
    let grille = getGrille();
    //console.log("deplacerPacman");
    let ok = false;
    //let pacman = grille.getPacmanGrille();
    let x = pacman.getx();
    let y = pacman.gety();
    let tableau = grille.getTab();
    switch (pacman.getDirection()) {
        case "right" : y += 1;
        break;
        case "left" : y -= 1;
        break;
        case "up" : x -= 1;
        break;
        case "down" : x += 1;
    }
    if (tableau[x][y] != 0) {
        ok = true;
    }
    //console.log(ok);
    return ok;
}

function hasBonbon(grille, pacman) {
    let ok = false;
    let tableau = grille.getTab();
    let elem = tableau[pacman.x][pacman.y];
    if (elem == 2) { 
        ok = true;
    }
    return ok;
}

function afficherGrille(grille) {
    let tableau = grille.getTab();
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            createElem(tableau[i][j]);
        }
    }
}


export function initGrille() {
    let grille = getGrille();
    let pacman = getPacman();
    let tableau = grille.getTab();
    tableau[pacman.getx()][pacman.gety()] = 3;
    grille.setPacman(pacman);
    grille.setTab(tableau);
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            createElem(tab[i][j]);
        }
    }
    btn.style.display = "none";
    flashOn.style.display ="inline";
    lancerJeu(grille);
}

function createElem(k) {
    let monElem = document.createElement('p');
    switch (k) {
        case 0 : monElem.classList.add("mur");
        break;
        case 1 : monElem.classList.add("sol");
        break;
        case 2 : monElem.classList.add("bonbon");
                monElem.innerText = "-";
        break;
        case 3 : monElem.classList.add("pacman");
        break;
    }
    document.querySelector(".content").appendChild(monElem);
}

let inter;
let inter2;
let interJeu;

function lancerJeu(grille) {
   if (!interJeu) {
       interJeu = setInterval(() => jouer(grille), 1000);
    }
}

export function changeColor() {
    if (!inter2) {
        inter2 = setInterval(flashBonbon, 100);
    }
}

function flashBonbon() {
    let elem = document.querySelectorAll(".bonbon");
    let elem2 = document.querySelectorAll(".mur");
    for (let e of elem) {
        e.classList.toggle("bonbonrouge");
    }
    for (let e of elem2) {
        e.classList.toggle("red");
    }
    flashOn.style.display = "none";
    flashOff.style.display ="inline";
}

export function changeBorder() {
    if (!inter) {
        inter = setInterval(flashBorder, 100);
    }
}

export function flashBorder() {
    let elem1 = document.getElementById("foot");
    let elem2 = document.getElementById("titre");
    let elem4 = document.getElementById("stats");
    let elem3 = document.getElementById("up");
    let elem5 = document.getElementById("down");
    let elem6 = document.getElementById("left");
    let elem7 = document.getElementById("right");
    elem1.className = elem1.className === "red" ? "green" : "red";
    elem2.className = elem2.className === "red" ? "green" : "red";
    btn.className = btn.className === "red" ? "green" : "red";
    elem4.className = elem4.className === "red" ? "green" : "red";
    flashOn.className = flashOn.className === "red" ? "green" : "red";
    flashOff.className = flashOff.className === "red" ? "green" : "red";
    elem3.className = elem3.className === "red" ? "green" : "red";
    elem5.className = elem5.className === "red" ? "green" : "red";
    elem6.className = elem6.className === "red" ? "green" : "red";
    elem7.className = elem7.className === "red" ? "green" : "red";
}

export function stopFlashBorder() {
    clearInterval(inter);
    inter = null;
}
export function stopFlashColor() {
    clearInterval(inter2);
    inter2 = null;
    flashOff.style.display = "none";
    flashOn.style.display = "inline";
}

function clearGrille() {
    let ps = document.querySelectorAll(".mur");
    for (let p of ps) {
        p.remove();
    }
    ps = document.querySelectorAll(".bonbon");
    for (let p of ps) {
        p.remove();
    }
    ps = document.querySelectorAll(".bonbonrouge");
    for (let p of ps) {
        p.remove();
    }
    ps = document.querySelectorAll(".sol");
    for (let p of ps) {
        p.remove();
    }
    ps = document.querySelectorAll(".pacman");
    for (let p of ps) {
        p.remove();
    }
}

/*export function changeDirection(pacman) {
    let newDir;
    switch (event.keycode) {
        case "0x002c" : newDir = "up";
        console.log(newDir);
        break;
        case "0x001f" : newDir = "down";
        console.log(newDir);
        break;
        case "0x0010" : newDir = "left";
        console.log(newDir);
        break;
        case "0x0020" : newDir = "right"
        console.log(newDir);
        break;
    }
    pacman.direction = newDir;
}*/

export function moveUp() {
    let grille = getGrille();
    let pacman = grille.getPacmanGrille();
    let pacman2 = pacman;
    pacman2.setDirection("up");
    if(okDeplacerPacman(pacman2)) {
        pacman.setDirection("up");
        grille.setPacman(pacman);
        //console.log("up");
    }

}

export function moveDown() {
    let grille = getGrille();
    let pacman = grille.getPacmanGrille();
    let pacman2 = pacman;
    pacman2.setDirection("down");
    if(okDeplacerPacman(pacman2)) {
        pacman.setDirection("down");
        grille.setPacman(pacman);
        //console.log("down");
    }
}

export function moveLeft() {
    let grille = getGrille();
    let pacman = grille.getPacmanGrille();
    let pacman2 = pacman;
    pacman2.setDirection("left");
    if(okDeplacerPacman(pacman2)) {
        pacman.setDirection("left");
        grille.setPacman(pacman);
        //console.log("left");
    }
}

export function moveRight() {
    let grille = getGrille();
    let pacman = grille.getPacmanGrille();
    let pacman2 = pacman;
    pacman2.setDirection("right");
    if(okDeplacerPacman(pacman2)) {
        pacman.setDirection("right");
        grille.setPacman(pacman);
        //console.log("right");
    }
}