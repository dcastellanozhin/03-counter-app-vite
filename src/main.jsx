// Clase 34, hola mundo en react
// archivo jsx porque tiene js con html

//SECCION DE IMPORTACIONES --------------------
import React from 'react'
import ReactDOM from 'react-dom/client'

//Mi app es un componente basado en funciones
//en mayuscula la primera letra
// function App() {
//     return (<h1>Hola Mundo!!</h1>);
// }

// import { HelloWordApp } from './HelloWordApp'
import { FirstApp } from './FirstApp'

import './styles.css';  //importo estilos


//Renderizar mi app-------------------
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWordApp /> */}
        {/* llamo al componente y le paso los parametros o props */}
        <FirstApp   titulo = 'Hola soy Daniel!' 
                    // subtitulo = 'Esto es un subtitulo'
                    numero = { 3 }
                    esTitulo/>
        {/* props tipo numero entre llaves,
            los booleanos solo se nombran y pasan true */}
    </React.StrictMode>
)