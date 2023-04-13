function doubleVelocity(velocity, printer){
    console.log("Entrei na doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printerVelocity = velocity => {
    console.log("Nova velocidade: " +velocity+ " km/s")
}

let newVelocity = doubleVelocity(120, printerVelocity)

console.log(newVelocity)