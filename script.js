const inputtxt = document.querySelector(".inputtxt");
const fartxt = document.querySelector(".fartxt");
const celtxt = document.querySelector(".celtxt");
const keltxt = document.querySelector(".keltxt");
const convert = document.querySelector(".convert");

const selected = document.querySelector("#options");

function calculate() {
    if(inputtxt.value.length==0)
        return
    
    let temp = inputtxt.value;

    if (selected.value == "Celsius") {
        celtxt.value = (temp) + " Celsius";
        keltxt.value = ((parseFloat(temp) + 273.15).toFixed(4)) + " Kelvin";
        fartxt.value = (((temp * 9 / 5) + 32).toFixed(4)) + " Fahrenheit";
    }
    else if (selected.value == "Kelvin") {
        keltxt.value = (temp) + " Kelvin";
        fartxt.value = (((temp - 273.15) * 9 / 5 + 32).toFixed(4)) + " Fahrenheit";
        celtxt.value = ((temp - 273.15).toFixed(4)) + " Celsius";
    }
    else if (selected.value == "Fahrenheit") {
        fartxt.value = temp + " Fahrenheit";
        celtxt.value = (((temp - 32) * 5 / 9).toFixed(4)) + " Celsius";
        keltxt.value = ((temp - 32) * 5 / 9 + 273.15).toFixed(4) + " Kelvin";
    }
}

document.addEventListener("change", () => {
    calculate();
})
convert.addEventListener("click", () => {
    calculate();
})