const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let spaceshipsCrew9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

console.log(spaceshipsCrew9)

let pendingHitchPlataform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let spaceshipUpperCase = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let finalMessage = "Espaçonaves com mais de 9 tripulantes: " +spaceshipsCrew9.join(", ")
finalMessage += "\nPlataforma com processo de engate pendente: " +(pendingHitchPlataform + 1)
finalMessage += "\nEspaçonaves destacadas: " +spaceshipUpperCase.join(", ")

alert(finalMessage)