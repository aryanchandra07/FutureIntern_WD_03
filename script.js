document.getElementById("convertBtn").addEventListener("click", function () {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const resultElement = document.getElementById("result");
    const errorMessage = document.getElementById("errorMessage");

    if (isNaN(temperatureInput) || temperatureInput === "") {
        errorMessage.textContent = "Please enter a valid number.";
        resultElement.textContent = "";
        return;
    } else {
        errorMessage.textContent = "";
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp = 0;

    if (unitSelect === "celsius") {
        convertedTemp = `${(temperature * 9/5 + 32).toFixed(2)}°F / ${(temperature + 273.15).toFixed(2)}K`;
    } else if (unitSelect === "fahrenheit") {
        convertedTemp = `${((temperature - 32) * 5/9).toFixed(2)}°C / ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
    } else if (unitSelect === "kelvin") {
        convertedTemp = `${(temperature - 273.15).toFixed(2)}°C / ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    resultElement.textContent = convertedTemp;
});
