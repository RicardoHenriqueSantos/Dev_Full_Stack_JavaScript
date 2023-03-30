let departureDateEntry = prompt("Enter Departure Date - Format [DD/MM/YYYY]")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let currentDate = moment()

let periodDate = currentDate - departureDate

let chosenOption = prompt("Enter How You Would Like To See The Period\n1 - Seconds\n2 - Minutes\n3 - Hours\n4 - Days")

if (chosenOption == "1"){
    periodDate = Math.round(periodDate / 1000)
    alert("Flight Time: " +periodDate+" Seconds")
} else if (chosenOption == "2"){
    periodDate = Math.round((periodDate / 1000)/60)
    alert("Flight Time: " +periodDate+" Minutes")
} else if (chosenOption == "3"){
    periodDate = Math.round((periodDate / 1000)/3600)
    alert("Flight Time: " +periodDate+" Hours")
} else if (chosenOption == "4"){
    periodDate = Math.round(((periodDate / 1000)/3600)/24)
    alert("Flight Time: " +periodDate+" Days")
} else{
    alert("Invalid Option")
}