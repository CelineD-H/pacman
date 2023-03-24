export class Grille {
    tableau;
    pacman;
    static instance = null;
    
    constructor(tab) {
        this.tableau = tab;
        Grille.instance = this;
    }

    setPacman(pacman) {
        this.pacman = pacman;
    }

    getPacmanGrille() {
        return this.pacman;
    }

    static getInstance(tab) {
        if (Grille.instance) {
            return Grille.instance;
        } else {
            return new Grille(tab);
        }
    }

    setTab(tab) {
        this.tableau = tab;
    }

    getTab() {
        return this.tableau;
    }
}