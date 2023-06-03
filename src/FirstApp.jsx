//APP O PARTE DE LA APP---------------------------
// Clase 36, segunda app


//SECCION IMPORTS-----------------------
//Clase 41, propTypes o tipos de props
//Sirven para indicar parametros obligatorios de mis componentes
import PropTypes from 'prop-types';  //solo en Vite


//SECCION VARIABLES
// import { Fragment } from "react"

//SECCION VARIABLES----------------------------
//definición de variables que NO renderizo con el componente
//recomendado acá, no dentro del componente
const newMessage = 'Hola Juan!!';
const newCalculo = 5;
const newBooleano = true;
const newArreglo = [1,2,3,4,5,6,7,8,9];

const newObjeto = {
    mensaje: 'Hola Mundo',
    titulo: 'Fernando'
}

const newFuncion = ( nombre ) => {
    usuarioId = '0266444',
    usuarioNombre = nombre,
    usuarioClase = 'Admin'
}

const newFuncion2 = ( numero1, numero2 ) => { 
    return numero1 + numero2
}

//SECCION COMPONENTES-------------------------
//puedo usar snnipper rafc
export const FirstApp = ({ titulo, subtitulo, numero, esTitulo }) => {
    
    // Clase 40 props, las props son objetos, 
    // me permite transmitir info del componente hijo al padre
    // export const FirstApp = ( props ) => {  
    // generalmente no traigo el props completo
    // console.log('objeto completo prop:', props);  
    // export const FirstApp = ({ titulo = 'Hola soy Daniel!' }) => {
    // anda, pero no paso los props acá, lo hago en el padre


    //definición de variables que SI renderizo con el componente
    //cuando clic en un boton u otros, no usar para constantes
    const newMessage2 = 'Hola Pedro!!';

    const numero2 = numero + 1; 
    //el props en el padre entre llaves, para que no lo tome como texto.
    

    return (
        // Para mas de una linea html, solo un nodo padre
        // envolver con un <> (es un Fragment sin el import)

                //Framento html 
        <> 
            <h1>
                Titulo: { titulo } <br />
                Subtitulo: { subtitulo } <br />
                Numero: { numero } <br />
                Numero2: { numero2 } <br />
                esTitulo: { esTitulo }
                {/* esTitulo debería mostrar true en pantalla */}
            </h1>
            {/* lo traigo del props, desestructurado el elemento titulo */}
            <hr />

            <h1>Hello Daniel!!</h1>
            <p>Soy un subtitulo--</p>

            {/* Fragmento con javascript, no un objeto (clase 38) */}
            <h1>{ 1 + 1 }</h1>
            <h2>Message: { newMessage }</h2>
            <h2>Message2: { newMessage2 }</h2>
            <hr />
            <h2>
                Calculo: { (newCalculo*2)-3 } <br />
                
                Booleano: { newBooleano } <br />
                {/* al booleano true no lo muestra, pero está */}
            
                Arreglo: { newArreglo } <br />
                {/* al arreglo lo muestra todo junto, pero son elementos separados */}

                Elemento 1, del objeto: { newObjeto.mensaje } <br />
                Elemento 2, del objeto: { newObjeto.titulo } <br />
                {/* los objetos no se pueden mostrar completos en el segmento html */}

                <code>{ JSON.stringify( newObjeto )}</code> <br />
                {/* con este metodo de js, se puede mostrar completo el objeto */}
                <br />

                {/* asi se escriben comentarios dentro del segmento */}

                {/* Funcion: { newFuncion('Raul').usuarioId } */}
                {/* no se puede porque devuelve un objeto, 
                tampoco una funcion async no se puede */}

                Funcion2: { newFuncion2(5,7) }
            </h2>

        </>            
    );
  }
  
  //Defino los tipos de mis props (tipo de campo y si es obligatorio)
  //para que no se rompa la aplicacion, pero si devuelve error en consola
  FirstApp.propTypes = {
      titulo: PropTypes.string.isRequired,  
      //si no viene del padre, devuelve error en consola
      subtitulo: PropTypes.string,  
      numero: PropTypes.number,  
      //si desde el padre viene un string devuelve en consola error, porque viene numero
      esTitulo: PropTypes.bool
  }

  //Clase 41 DefaulProps
  //valores por default de mis props, los tomá si no viene del padre
  //tener en cuenta que coincida con los tipos de datos 
  FirstApp.defaultProps = {
    subtitulo: 'No hay titulo',
    numero: 'deberia haber un numero'
  }