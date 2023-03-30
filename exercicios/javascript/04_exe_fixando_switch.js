let distanceLightYears = prompt("Enter Speed in Light Years")

let optionConversion = prompt("Conversion Options:\n\n1 - Parsec - PC\n2 - Astronomical Unit - AU\n3 - Kilometers - KM\n")

let optionSelect = undefined
let convertedLightYears = undefined

switch(optionConversion){
    case "1":
        optionSelect = "Parsec"
        convertedLightYears = distanceLightYears / 3.262
        break
    case "2":
        optionSelect = "Astronomical Unit"
        convertedLightYears = distanceLightYears * 63241.1
        break
    case "3": 
        optionSelect = "Kilometers"
        convertedLightYears = (distanceLightYears * 9.5) * (10**12)
        break
    default:
        optionSelect = "Unidentified Unit"
        convertedLightYears = "Conversion Out of Scope"
}

alert("Distance In Light Years: "+distanceLightYears+"\n"+optionSelect+": "+convertedLightYears)