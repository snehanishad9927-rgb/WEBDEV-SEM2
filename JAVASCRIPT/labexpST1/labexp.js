function calculateTemp() {
    let fahrenheit = document.getElementById("celcius").value;
    
    if (fahrenheit === "") {
        alert("Please enter temperature");
        return;
    }

    let celcius = (fahrenheit - 32) * 5 / 9;

    document.getElementById("result").innerText =
        "farenheit: " + celcius.toFixed(2);
}