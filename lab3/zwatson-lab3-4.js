function celsiusToFahrenheit(cels){
    let far = parseInt(cels)*9/5+32;
    console.log('Celsius:', parseInt(cels).toFixed(1), 'Fahrenheit:', far.toFixed(1))

}
celsiusToFahrenheit(43)
celsiusToFahrenheit('26F')