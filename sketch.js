// m1*u1 + m2*u2 = m1*v1 + m2*v2
// u1 - u2 = v2 - v1

let block1, block2, p
let collisions = 0
let digsOfPi = 4
let timeStamps = 500

function setup() {
    createCanvas(800, 300);
    const m2 = 100**(digsOfPi-1)
    block1 = new Block(200, 1, 50, 0)
    block2 = new Block(400, m2, 100, -1.2/timeStamps)
    p = createP()
    p.html(`Collisions: ${collisions}`)
}

function draw() {
    // noLoop()
    for (let i = 0; i < timeStamps; i++) {
        background(100);
        p.html(`Collisions: ${collisions}`)
        block1.update()
        block1.edge()  
        block2.collide(block1) 
        block2.update(block1)   
        block1.show()   
        block2.show()   
    }
}






