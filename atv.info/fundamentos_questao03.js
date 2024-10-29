function celsiusParaFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32); 
}
function fahrenheitParaCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9); 
}
const celsius = 20; 
const fahrenheit = 80; 

console.log(`${celsius}°C é igual a ${celsiusParaFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F é igual a ${fahrenheitParaCelsius(fahrenheit)}°C`);
