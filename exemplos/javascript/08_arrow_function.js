// ALTERNATIVO | const doubleVelocity = (velocity) => velocity * 2
// ALTERNATIVO | const doubleVelocity = velocity => velocity * 2

const doubleVelocity = (velocity) =>{
    return velocity * 2
}

let spaceshipVelocity = parseFloat(prompt("Insira a velocidade: "))

option = confirm("Ligar propulsor para dobra de velocidade?")

if (option == true){
    alert("Velocidade atualizada " +doubleVelocity(spaceshipVelocity)+ " km/s")
} else{
    alert("Velocidade atualizada "+spaceshipVelocity+ " km/s")
}