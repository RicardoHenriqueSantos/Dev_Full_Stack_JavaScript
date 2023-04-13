function spaceshipSlow(velocity, message){
    let slow = 20
    
    while (velocity > 0){
        message(velocity)
        velocity -= 20
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

spaceshipSlow(spaceshipVelocity, function(velocity){
    console.log("Velocidade atual: " + velocity)
})