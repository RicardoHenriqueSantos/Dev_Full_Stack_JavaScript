class SpecialStation{
    constructor(name, crew_quant){
        this.name = name
        this.crew_quant = crew_quant
        this.hitch = false
        this.open_door = false
    }
    
    hitched(){
        this.status_hitch = true
        this.open_door = true
    }
}

function menuStation(){
    let chosen = ""
    while(chosen != "1" && chosen != "2" && chosen != "3"){
        chosen = prompt("Menu\n\n1 - Engatar nave\n2 - Imprimir naves\n3 - Sair do programa\n")
        console.log(chosen)
    }
    return chosen
}

function createSpaceship(){
    let spaceshipName = prompt("Insira o nome da nave: ")
    let spaceshipCrew = prompt("Insira a quantidade de tripulantes: ")
    let spaceship = new SpecialStation(spaceshipName, spaceshipCrew)
    return spaceship
}

function printSpaceship(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + " - " +spaceship.name+ " [Quant. Tripulantes - " +spaceship.crew_quant+ "]\n"
    })
    alert(spaceshipList)
}

let hitchStation = []

let chosenOption 

while(chosenOption != "3"){
    chosenOption = menuStation()
    switch(chosenOption){
        case "1":
            let spaceshipAdd = createSpaceship()
            spaceshipAdd.hitched()
            console.log(spaceshipAdd)
            hitchStation.push(spaceshipAdd)
            break
        case "2":
            printSpaceship(hitchStation)
            break
    }
}