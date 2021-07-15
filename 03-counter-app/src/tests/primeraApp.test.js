import React from 'react';
//import { getByText, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";

describe('pruebas en primeraApp', () => {

    //test('debe mostar mensaje hola soy eduardo', () => {
    //    const saludo = "Hola soy eduardo";
    //    const { getByText } = render( <PrimeraApp saludo = { saludo } /> );
    //    expect( getByText( saludo ) ).toBeInTheDocument();
    //});

    test('Pruebas en <PrimeraApp />', () => {
        const saludo = 'Hola soy Eduardo';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );
        
        expect( wrapper ).toMatchSnapshot();
    })

});
