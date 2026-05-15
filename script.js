const textbox = document.getElementById("textbox");
const toFahrenhiet = document.getElementById("toFahrenhiet");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenhiet.checked) {
        temp = (Number(textbox.value) * 9) / 5 + 32;
        result.textContent = "" + textbox.value + "°C is equal to " + temp + "°F";
    } else if (toCelcius.checked) {
        temp = ((Number(textbox.value) - 32) * 5) / 9;
        result.textContent = "" + textbox.value + "°F is equal to " + temp + "°C";
    } else {
        result.textContent = "select a unit";
    }
    if(toKalvin.checked){
        temp = (Number(textbox.value)+273);
        result.textContent = "" + textbox.value + "°C is equal to" + temp + "k"    }

}