let velocityInitial = 0
let velocityChosen = prompt("Select Velocity: ")

while(velocityInitial < velocityChosen){
    alert("Speeding Up: " +velocityInitial+ " KM/s")
    velocityInitial += 1
}

alert("We Arrive At The Chosen Speed!")