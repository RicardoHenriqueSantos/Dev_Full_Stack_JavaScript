class Spaceship {    
    constructor(name, maxCrew, maxVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxVelocity = maxVelocity
    }

    speedUp(accelaration){
        this.currentVelocity += accelaration
        if (currentVelocity > this.maxVelocity){
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nReduza a velocidade!")
        }
    }
}

class BattleSpaceship extends Spaceship{
    stopSpaceship(){
        this.currentVelocity = 0
        alert("Recolhendo armas para a batalha.")
    }
}

class DiscoverySpaceship extends Spaceship{
    stopSpaceship(){
        this.currentVelocity = 0
        alert("Recolhendo equipamentos e amostras da descoberta.")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)

darwin.speedUp(230)
fenix.speedUp(220)

darwin.stopSpaceship()
fenix.stopSpaceship()