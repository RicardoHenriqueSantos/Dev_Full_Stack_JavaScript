class Spaceship {
    constructor(name, year, pilot){
        this.name = name
        this.year = year
        this.pilot = pilot
        this.velocity = 0
    }
    speedUp(acceleration){
        this.velocity += acceleration
    }
}

let apolloX = new Spaceship("Apollo X", 2023, "Ten. Rossbaum")
let colossal = new Spaceship("Colossal", 2026, "Cap. Maverick")
let elemental = new Spaceship("Elemental XV", 2030, "Maj. Rosswell")

apolloX.speedUp(125)
console.log(apolloX)

colossal.speedUp(165)
console.log(colossal)

elemental.speedUp(199)
console.log(elemental)