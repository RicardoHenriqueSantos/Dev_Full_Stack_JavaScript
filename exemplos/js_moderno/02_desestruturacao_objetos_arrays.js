// OBJETOS
let spaceship = {
    name: "Colossus",
    crewQuantity: 12,
    isHitched: true
}

// OPÇÃO 1
let spaceshipName = spaceship.name
console.log(spaceshipName)

// OPÇÃO 2
let {crewQuantity: spaceshipCrewQuantity} = spaceship
console.log(spaceshipCrewQuantity)

// OPÇÃO 3
let {isHitched} = spaceship
console.log(isHitched)

// ARRAYS
let spaceshipPilots = ["Neil Armstron", "Corry Sunders", "Mark Hamil"]

// OPÇÃO 1
let firstPilot = spaceshipPilots[0]
console.log(firstPilot)

// OPÇÃO 2
let [pilotOne, pilotTwo, pilotThree] = spaceshipPilots
console.log(pilotTwo)
 
