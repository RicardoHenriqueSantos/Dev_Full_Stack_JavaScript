class Spaceship{
    static get decelerationRate(){
        return 0.17
    }
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }
    speedUp(accelaration){
        this.currentVelocity += accelaration * (1 - Spaceship.decelerationRate)
    }
}