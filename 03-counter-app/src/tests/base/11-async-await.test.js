import { getImagen } from "../../bases/11-async-await"

describe('Pruebas en 11-async', () => {

    test('debe retornar una imagen', async() => {

        const url = await getImagen();

        expect( typeof url ).toBe('string');

    })

})
