
// Creado en clase 55

import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('PRUEBAS EN 02-template-string', () => {
    test('getSaludo debe retornar "Hola Fernando"', () => {

        const name = 'Fernando';
        const message = getSaludo( name );

        //expect ( message ).toBe(`Hola ${ name } !!`); 
        // da error por el signo admiración
        expect ( message ).toBe(`Hola ${ name }`); 
        
    
    });

});

