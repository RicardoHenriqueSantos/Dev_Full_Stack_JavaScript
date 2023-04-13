class Spaceship {    
    constructor(name, maxCrew, maxVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nReduza a velocidade!")
        }
    }
}

class TransportSpaceship extends Spaceship{
    constructor(name, maxCrew, maxVelocity, maxLoadWeight){
        super(name, maxCrew, maxVelocity)
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration){
        acceleration /= 2
        alert("Incrementando velocidade em "+acceleration+" km/s")
        super.speedUp(acceleration)
    }
}

let triploadx = new TransportSpaceship("TripLoadX", 12, 100, 250)

console.log(triploadx)

triploadx.speedUp(210)