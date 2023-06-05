//Clase 56 toEqual
//pruebas sobre objetos

import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('PRUEBAS EN 05-funciones', () => { 
    
    test('1. gestUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user); //ayuda a la depuracion

        //expect ( testUser ).toBe( user ); //da error
        //expect ( testUser ).toStrictEqual( user );    //pasa la prueba
        expect ( testUser ).toEqual( user );    // pasa la prueba


    });

    test('2. getUsuarioActivo debe de retornar un objeto', () => { 
        
        const name = 'Fernando';

        const user = getUsuarioActivo( name );
        console.log( user );

        expect ( user ).toStrictEqual({
            uid: 'ABC567dd',  //falla por que es otro uid
            uid: 'ABC567',  //ok
            username: name
        });

    });
        
});