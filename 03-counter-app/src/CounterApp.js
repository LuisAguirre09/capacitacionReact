//Functional component
import React, {useState} from 'react';
import propTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState(0); //recordemos que useState devuelve dos valores

    const handleAdd = () => {
        setCounter( counter + 1 );
    };

    const handleSubstract = () => { setCounter( counter -1 ) };

    const handleReset = () => { setCounter( value ) };

    return (
        <>
            <h1> CounterApp </h1>
            <p> { counter } </p>
            <button onClick= { handleAdd } > +1 </button>
            <button onClick= { handleReset }> Reset </button>
            <button onClick= { handleSubstract }> -1 </button>
        </>
    )

}

CounterApp.propTypes = {
    value : propTypes.number.isRequired
}

export default CounterApp;