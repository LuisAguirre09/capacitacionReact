import { getSaludo } from '../../../src/bases/02-template-string';
import '@testing-library/jest-dom';


describe('Pruebas en el archivo 02-template-string.test.js', () => {
    //getSaludo debe retorn hola carlos! si no hay argumentos

    test('Debe retornar Hola Carlos si no hay argumento', ()=> {
        const res = "Hola Carlos!";

        expect( getSaludo() ).toBe( res );
    })

});

