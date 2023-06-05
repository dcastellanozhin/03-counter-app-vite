

//Pruebas clase 55

//para pruebas tengo que exportarlo
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
//en carpeta test, crear la misma estructura de subcarpetas

const nombre = 'Pedro';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );