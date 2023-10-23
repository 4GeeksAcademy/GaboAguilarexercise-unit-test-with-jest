

// One euro is:
let oneEuroIs = {
    "EUR": 1,    // Euro
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Función para convertir de dólares a yenes
function fromDollarToYen(amount) {
    // Obtener el valor de conversión de los yenes
    let yenToDollar = oneEuroIs["JPY"] / oneEuroIs["USD"];

    // Convertir la cantidad a yenes
    return amount * yenToDollar;
}

// Función para convertir de euros a dólares
function euroToDollar(amount) {
    // Obtener el valor de conversión de los dólares
    let dollarToEuro = oneEuroIs["USD"] / oneEuroIs["EUR"];

    // Convertir la cantidad a dólares
    return amount * dollarToEuro;
}

// Función para convertir de yenes a libras esterlinas
function fromYenToPound(amount) {
    // Obtener el valor de conversión de las libras esterlinas
    let poundToYen = oneEuroIs["GBP"] / oneEuroIs["JPY"];

    // Convertir la cantidad a libras esterlinas
    return amount * poundToYen;
}


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {euroToDollar,fromDollarToYen,fromYenToPound}