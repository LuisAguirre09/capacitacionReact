import '@testing-library/jest-dom';

describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Deben ser dos string iguales', () => {
    
        //1.inicializaion
        const ms1 = 'Hola Eduardo';
    
        //2. estimulo
        const ms2 = 'Hola Eduardo';
    
        //3.Observar el estimulo
        expect( ms2 ).toBe( ms1 );
    
    });

});

