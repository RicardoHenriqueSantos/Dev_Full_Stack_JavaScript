
let pilotName = prompt("Enter The Pilot Name")
let shipVelocity = 0

alert("Ship's Initial Speed - " + shipVelocity + " KM/s")

shipVelocity = prompt("Enter The Ship's Acceleration Speed")

let shipConfirmation = confirm("Want To Confirm The Speed " + shipVelocity + "KM/s ?")

console.log(shipConfirmation)

if (shipConfirmation == false) {
    shipVelocity = 0
}

if (shipVelocity <= 0) {
    alert("The Ship Is Stopped. Consider Starting And Increasing Speed.")
} else if (shipVelocity < 40) {
    alert("The Ship Is Slow. We Can Raise More.")
} else if (shipVelocity < 80) {
    alert("Looks Like A Good Speed To Keep Up.")
} else if (shipVelocity < 100) {
    alert("High Speed! Consider Decreasing.")
} else {
    alert("Dangerous Speed! Forced Automatic Control.")
}

alert("Pilot: " + pilotName + "\nCurrent Speed: " + shipVelocity + " KM/s")