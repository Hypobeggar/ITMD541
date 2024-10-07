function celsiusToFahrenheit(cels){
    cels = parseFloat(String(cels).replace(/[^0-9.]/g, ''));
    let far = cels*9/5+32;
    console.log('Celsius:', cels.toFixed(1), 'Fahrenheit:', far.toFixed(1))

}
celsiusToFahrenheit(43)
celsiusToFahrenheit(94.5)
celsiusToFahrenheit(269)
celsiusToFahrenheit('26C')
celsiusToFahrenheit('C48.2')