export class Pacman {
    x;
    y;
    direction;
    static instance = null;
    
    constructor() {
        this.x = 10;
        this.y = 9;
        this.direction = "up";
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
}