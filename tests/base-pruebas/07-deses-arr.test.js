//Clase 57

import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('PRUEBAS EN 07-deses-arr', () => { 
    
    test('1. debe retornar un string y un numero', () => { 

        const [ letters, numbers ] = retornaArreglo();
        
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //testeo los tipos de datos
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        
    });

});