class Spaceship {    
    constructor(name, maxCrew, maxVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
        this.currentVelocity = 0
    }
    speedUp(accelaration){
        this.currentVelocity += accelaration
        if (currentVelocity > this.maxVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nReduza a velocidade!")
        }
    }
}

class TransportSpaceship extends Spaceship{
    speedUp(){
        this.currentVelocity += 1
        alert("Naves de viagem só aceleram 1 km/s!")
    }
}

let transport = new TransportSpaceship("TransMarkX", 4, 120)
