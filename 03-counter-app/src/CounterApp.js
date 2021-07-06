//Functional component
import propTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const handleAdd = (e) => {
        console.log(e)
    };

    return (
        <>
            <h1> CounterApp </h1>
            <p> { value } </p>
            <button onClick= { handleAdd } > +1 </button>
        </>
    )

}

CounterApp.propTypes = {
    value : propTypes.number.isRequired
}

export default CounterApp;