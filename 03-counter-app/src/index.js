import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
//import CounterApp from './CounterApp';
import './estilos.css'


const divRoot = document.querySelector('#app');

ReactDOM.render( <PrimeraApp saludo = "Hola soy eduardo" />, divRoot );
