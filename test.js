test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { euroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = euroToDollar(1);

   
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(euroToDollar(1)).toBe(1.07); 
})


test("One dollar should be 150.4 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1);

    const expected = 1 * 146.26168224299064;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})


test("One yen should be 0.087 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const libras = fromYenToPound(1);

  
    const expected = 1 * 0.00555910543130990;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe( 0.005559105431309904); 
})