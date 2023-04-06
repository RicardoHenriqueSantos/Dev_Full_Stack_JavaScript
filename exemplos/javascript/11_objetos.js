// ALTERNATIVO - VAR = NEW OBJECT {}
let spaceship = {
    name: "Golias",
    age: 2018,
    type: "Battle",
    "nickname": "Go",
    true: false,
    09: "Discovery",
    crew: ["Cap. Maverick", "Cap. Maximus"],
    ceo: {
        name: "Elon Musk",
        age: 42
    } 
}

console.log(spaceship.name)
console.log(spaceship["type"])
spaceship.hitched = true
spaceship["level"] = 20
console.log(spaceship)

// FUNÇÕES COM OBJETOS
console.log(spaceship.name.toUpperCase())
spaceship.crew.push("Ten. Yankee")
console.log(spaceship.crew)

// FUNÇÕES LISTA COM OBJETOS
let newSpaceships = [
    {name: "Elemental", crew: 10},
    {name: "Colossus", crew: 8},
    {name: "Helmet", crew: 15}
]

console.log(newSpaceships[1].name)
newSpaceships.forEach(spaceship =>{
    alert(spaceship.name + " tem " +spaceship.crew + " tripulantes.")
})

console.log(spaceship.ceo.name)

let spaceshipData = {
    name: "Elemental X",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        alert("Preparando propulsão.")
        alert("Ligando computador de bordo.")
        console.log(this.name)
    }
}

spaceshipData.turnOn()
spaceshipData.velocity = 0
spaceshipData.speedUp = function(spaceshipSpeedUp, acceleration){
    spaceshipSpeedUp.velocity += acceleration
}

/* ALTERNATIVA
spaceshipData.speedUp = function(acceleration){
    this.velocity += acceleration
}
spaceshipData.speedUp(10)
*/

console.log(spaceshipData)
spaceshipData.speedUp(spaceshipData, 10)
console.log(spaceshipData)