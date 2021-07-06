//import { Fragment } from "react"; //es obligatorio los fragments si se quieren colocar divs

//FC

const saludo2 = {
    name : 'eduardo',
    edad: 23,
}

const saludo = 'Hola mundo'

const PrimeraApp = () => {
    return (
        <>
            <h1> { saludo } </h1>
            {/* JSON.stringify(saludo,null,3) */}
            <p>Esto es un fragmento</p>
        </> //en lugar de fragments se ponen las etiquetas vacias
    )
}

export default PrimeraApp;