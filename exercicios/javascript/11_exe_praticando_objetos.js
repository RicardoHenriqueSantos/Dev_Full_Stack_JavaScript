let spaceshipFunction = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function spaceshipData(){
    spaceshipFunction.name = prompt("Insira o nome da nave: "),
    spaceshipFunction.type = prompt("Insira o tipo da nave: "),
    spaceshipFunction.velMax = Number(prompt("Insira a velocidade máxima: "))
}

console.log(spaceshipData)

function spaceshipAccelarte(){
    let accelerate = Number(prompt("O quanto você quer acelerar?"))
    spaceshipFunction.speedUp(accelerate)
    if(spaceshipFunction.velocity > spaceshipFunction.velMax){
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nVelocidade atual: "+spaceshipFunction.velocity+" | Velocidade máxima: "+spaceshipFunction.velMax)
    }
}

function spaceshipStop(){
    alert("Nome: "+spaceshipFunction.name+"\nTipo: "+spaceshipFunction.type+"\nVelocidade: "+spaceshipFunction.velocity+"\nVelocidade Máxima: "+spaceshipFunction.velMax)
    spaceshipFunction.spaceshipVelocity = 0
}

function spaceshipMenu(){
    let chosenOption
    do{
        chosenOption = prompt("Você deseja? \n1 - Acelerar\n2 - Parar")
        switch(chosenOption){
            case "1":
                spaceshipAccelarte()
                break
            case "2":
                spaceshipStop()
                break
            default:
                alert("Opção inválida!")
            }
    }while(chosenOption != "2")
}

spaceshipData()
spaceshipMenu()