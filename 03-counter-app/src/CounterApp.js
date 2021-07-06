//Functional component
import React, {useState} from 'react';
import propTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState(0); //recordemos que useState devuelve dos valores

    const handleAdd = () => {
        setCounter( counter + 1 );
    };

    return (
        <>
            <h1> CounterApp </h1>
            <p> { counter } </p>
            <button onClick= { handleAdd } > +1 </button>
        </>
    )

}

CounterApp.propTypes = {
    value : propTypes.number.isRequired
}

export default CounterApp;