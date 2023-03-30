let velocity = parseInt(prompt("Insira a velocidade: "))
let acceleration = parseInt(prompt("Insira a aceleração: "))

do{
    alert("Acelerando! Estamos a "+velocity+ " km/s")
    velocity += acceleration
} while(velocity <= 100)