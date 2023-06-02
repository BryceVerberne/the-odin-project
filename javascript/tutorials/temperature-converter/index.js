// Prompt the user for the temperature and the temperature scale
let temperature = prompt("Please enter the temperature value: ");
let tempScale = prompt("Specify the temperature scale (Celsius or Fahrenheit): ");

// Declare our variable to hold the new temperature
let convertedTemp;

// This is an if-else statement, which is syntactically the same as Java!
if (tempScale == "Celsius") {
    convertedTemp = (temperature * 9/5) + 32;  // Convert to Fahrenheit
}
else {
    convertedTemp = (temperature - 32) * 5/9;  // Convert to Celsius
}

// Display the result as an alert
alert("The equivalent temperature in Fahrenheit is " + convertedTemp + "˚F.");