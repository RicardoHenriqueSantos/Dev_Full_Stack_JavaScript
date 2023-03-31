function greetPilot(name, message = "Olá"){
    alert(message+ " " +name+ "!")    
}

greetPilot("John Maverick")
greetPilot("Ice Man", "Seja Bem-vindo")

function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    console.log("Nova Velocidade: "+newVelocity)
}

console.log(speedUp(60, 10))
console.log(speedUp(75, 25))
console.log(speedUp(110, 110))

function infoJourney(pilot, spaceship, velocity, acceleration = 72.5, enterprise = "SpaceX"){
    let newVelocity = parseFloat(velocity) + parseFloat(acceleration)
    message = enterprise+"\n" +pilot+ ", você está a bordo da espaçonave " +spaceship+ ", com a aceleração atualizada de " +newVelocity+ " km/s."
    return message
}

let pilotName = prompt("Insira o seu nome piloto: ")
let spaceShipName = prompt("Insira o nome da espaçonave: ")
let velocitySpace = prompt("Insira a velocidade: ")

alert(infoJourney(pilotName, spaceShipName, velocitySpace))