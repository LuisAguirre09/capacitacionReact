import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../../src/bases/05-funciones';

describe('Pruebas en el archivo 05-funciones.test.js', () => {

    test('getUser debe retornar un objeto', () =>{

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( userTest ).toEqual( user );

    });
    //getUserAactivo  
    
    test('getUserActivo debe retornar objeto con argumento', () => {

        const val = 'Eduardo';

        expect( getUsuarioActivo( val ) ).toEqual({
            uid: 'ABC567',
            username: val
        });

    });

});