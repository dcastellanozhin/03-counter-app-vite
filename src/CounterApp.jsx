// Clase 43 Practica


//Imports
import PropTypes from 'prop-types';  
import { useState } from 'react';  //las funciones use son Hooks

//Componente
export const CounterApp = ({ value }) => {

  //Clase 45 useState Hook (permite mostrar en tiempo real el cambio)
  //guarda que cada vez que cambio el hook con un clic, se vuelve a renderizar el componente
  
  //defino el hook, su tipo (lo importé) y le asigno el valor inicial
  const [ contador, setContador ] = useState( value );
  //en el debug del chrome, components, puedo ver los hooks
  //la que cambia, en el nombre va primero set
  

  //Clase 44 funcion para el boton
  //esta funcion va a dentro del componente, porque se actualiza el value
  // const adicionoUno = (event, newValue) => { 
  //   // console.log(event);  //tira toda la info del clic
  //   // console.log(newValue)  //tira toda la info del clic
  // };
  const adicionoUno = () => {
    setContador( contador + 1 );
  }

  const restoUno = () => setContador( contador - 1 );
  
  const reset = () => {
    setContador( value );   //la funcion set asume el mismo de value
  }


  //Salida
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { contador }</h2>

      {/* Clase 44 botón clic */}
      <button onClick={ (event) => adicionoUno(event, 'hola') }>
        +1
      </button>
      
      <button onClick={ restoUno }> 
        -1 
      </button>

      <button onClick={ reset }>
        Reset
      </button>

    </>
  ) 

}


//Tipos de parámetros
CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}


//Defualt de parámetros
CounterApp.defaultProps = {
  value: 0
}