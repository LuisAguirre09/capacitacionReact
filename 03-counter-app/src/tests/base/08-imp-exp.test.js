import { getHeroeById, getHeroesByOwner } from '../../../src/bases/08-imp-exp';
import heroes from '../../data/heroes';

describe( 'pruebas en 08-imp-exp', () => {

    test('debe retornar un heroe correcto', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe retornar undefined cuando no encuentra un heroe', () => {

        const id = 10;
        const heroe = getHeroeById(10);

        expect( heroe ).toBe( undefined );

    });

    //DC, retornar un arreglo con heroes filtrados de DC
    //owner
    //toEqual, al arreglo filtrado
    test('debe retornar arreglo con heroes filtrados de DC', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === 'DC');

        expect( heroe ).toEqual( heroeData );

    });
    
    //marvel, debe retornar un arreglo con el length= 2 (toBe)
    test('Debe retornar la longitud de heroes de Marvel', () => {

        const owner = 'Marvel';
        const cantidad = getHeroesByOwner( owner ).length;

        expect( cantidad ).toBe( heroes.filter( h => h.owner === owner ).length );

    })

})