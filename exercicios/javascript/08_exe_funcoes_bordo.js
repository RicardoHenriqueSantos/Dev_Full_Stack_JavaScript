let spaceshipVelocity = 0
let chosenMenu = 0
let spaceshipName = prompt("Insira o nome da espaçonave: ")

function spaceshipAcelerar(velocity) {
    velocity += 5
    return velocity
}

function spaceshipDesacelerar(velocity) {
    velocity -= 5
    return velocity
}

function spaceshipMenu(spaceship) {
    let chosen = prompt("Menu " + spaceship + "\n\n1 - Acelerar a nave em 5 km/s\n2 - Desacelerar em 5 km/s\n3 - Imprimir dados de bordo\n4 - Sair\n")
    return chosen
}

function spaceshipData(name, velocity) {
    return "A nave " + name + " está a " + velocity + " km/s"
}


do {

    chosenMenu = (spaceshipMenu(spaceshipName))

    if (chosenMenu == 1) {
        console.log(spaceshipVelocity = spaceshipAcelerar(spaceshipVelocity))
    } else if (chosenMenu == 2 && spaceshipVelocity > 0) {
        console.log(spaceshipVelocity = spaceshipDesacelerar(spaceshipVelocity))
    } else if (chosenMenu == 3) {
        console.log(spaceshipData(spaceshipName, spaceshipVelocity))
        alert(spaceshipData(spaceshipName, spaceshipVelocity))
    } else if (chosenMenu == 4) {
        alert("Saída confirmada!\n\nExibindo resultado final de bordo: " +spaceshipData(spaceshipName, spaceshipVelocity))
    } else {
        alert("Opção Inválida!\n\nExibindo resultado final de bordo: " +spaceshipData(spaceshipName, spaceshipVelocity))
    }

} while (chosenMenu != 4 && spaceshipVelocity > 0)