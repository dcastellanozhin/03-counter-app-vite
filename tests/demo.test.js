// Clase 52 mi primera prueba

//Agrupador de pruebas (describe)
describe('---PRUEBAS EN <DemoComponent />---', () => {

    //Primera prueba
    test('Esta prueba no debe de fallar', () => {
    
        //condicion de error
        if ( 1 === 0 ) {    
            // 0 === 0   da error en power shell
            throw new Error('No puede dividir entre cero');
        }
    
        //Clase 53 Jest Expect - toBE
        //1.inicializacion
        // const message1 = 'Hola Mundo   '; //con espacios al final da error
        const message1 = 'Hola Mundo';
    
        //2. estimulo
        const message2 = message1.trim();
    
        //3. observar el compartamientoe esperado
        //funcion de jest expect, condicion para que pase la prueba
        expect( message1 ).toBe( message2 );
    
    });

});
//Usualmente un describe, por cada archivo de pruebas
