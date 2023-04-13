function setBlueBackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "#007ACC"
}
function setTransparentBackground(){
    let element = document.getElementById("style-text").style.backgroundColor = "transparent"
}

function setRedColor(){
    let element = document.getElementById("style-text").classList.add("red-color")
}

function removeRedColor(){
    document.getElementById("style-text").classList.remove("red-color")
}