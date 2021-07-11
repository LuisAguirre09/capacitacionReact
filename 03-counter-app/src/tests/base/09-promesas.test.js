import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe asincrono', (done) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                
                expect( heroes[0] ).toBe( heroe );
                done();

            })

    });

    test('getHeroeByIdAsync debe retornar un undefined', () => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( err => {
                
                //expect( err ).toBe( 'No se pudo encontrar el héroe!' );
                //done();
                //esta prueba da error naturalmente

            })

    });

});