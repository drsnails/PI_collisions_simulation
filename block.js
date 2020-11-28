// log10(mass) + 1
function solveForVels(m1, m2, v1, v2) {
    return {
        u1: (2 * m2 * v2 - m2 * v1 + m1 * v1) / (m2 + m1),
        u2: (m2 * v2 - v2 * m1 + 2 * m1 * v1) / (m2 + m1)
    }
}

class Block {
    constructor(x, mass, w, velX) {
        this.mass = mass
        this.w = w
        this.pos = createVector(x, height - this.w)
        this.vel = createVector(velX, 0)
    }

    update(other) {
        // if (other) {
        //     if (this.pos.x <= other.pos.x + other.w) {
        //         let dif = (this.vel.x < 0)?other.pos.x + other.w - this.pos.x:other.pos.x + other.w + this.pos.x
        //         console.log("Block -> update -> diff", dif)
        //         this.pos.x += dif
        //     }
        // }
        this.pos.add(this.vel)
    }

    edge() {
        if (this.pos.x <= 0) {
            collisions++
            this.pos.x = 0
            this.vel.mult(-1)
        }
    }

    collide(other) {
        if (this.pos.x + this.w < other.pos.x || this.pos.x > other.pos.x + other.w) return
        collisions++

        const { u1, u2 } = solveForVels(this.mass, other.mass, this.vel.x, other.vel.x)

        this.vel = createVector(u1, 0)
        other.vel = createVector(u2, 0)

        // if (this.pos.x >= other.pos.x &&
            
        //     this.pos.x + this.vel.x <= other.pos.x + other.w + other.vel.x) {
        //         this.pos.x += this.w
        //         collisions ++
        //         const { u1, u2 } = solveForVels(this.mass, other.mass, this.vel.x, other.vel.x)

        //     this.vel = createVector(u1, 0)
        //     other.vel = createVector(u2, 0)
        // }
    }

    show() {
        fill(255)
        stroke(100)
        rect(this.pos.x, this.pos.y, this.w, this.w)
    }
}