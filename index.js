/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let convert = document.querySelector("#convert-btn")
let inputField = document.querySelector("#input-field")


// ID Of the output equation | Length
let volumeMeters = document.querySelector("#meters")

// ID Of the output equation | Volume
let volumeLiters = document.querySelector("#liters")

// ID of the output equation | Mass
let volumeKilos = document.querySelector("#kilos")


convert.addEventListener("click", function(){
    // Calculate and appear in the Length cards
    volumeMeters.innerHTML = `${inputField.value} meters = ${((Number(inputField.value)) * 3.281).toFixed(3)} | ${inputField.value} feet = ${((Number(inputField.value))/3.281).toFixed(3)}`
    
    // Calculate and appear in the Volume cards
    volumeLiters.innerHTML = `${inputField.value} liters = ${((Number(inputField.value)) * 0.624).toFixed(3)} | ${inputField.value} gallons = ${(Number(inputField.value) / 0.624).toFixed(3)}`
    
    // Calculate and appear in the Kilo cards
    volumeKilos.innerHTML = `${inputField.value} kilos = ${(Number(inputField.value) * 2.204).toFixed(3)} | ${inputField.value} pounds | ${inputField.value} pounds = ${(Number(inputField.value) / 2.204).toFixed(3)}`
    
    
})