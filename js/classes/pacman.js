export class Pacman {
    x;
    y;
    direction;
    pseudo;
    score;
    static instance = null;
    
    constructor() {
        this.x = 10;
        this.y = 9;
        this.direction = "up";
        this.score = 0;
        Pacman.instance = this;
    }

    static getInstance() {
        if (Pacman.instance) {
            return Pacman.instance;
        } else {
            return new Pacman();
        }
    }

    getDirection() {
        return this.direction
    }
    getx() {
        return this.x;
    }

    gety() {
        return this.y;
    }
    setx(x) {
        this.x = x;
    }

    sety(y) {
        this.y = y;
    }

    setDirection(dir) {
        this.direction = dir;
    }

    addPoint() {
        this.score += 1;
    }

    getScore() {
        return this.score;
    }
}