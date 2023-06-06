//Clase 58 pruebas

import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('PRUEBAS EN 08-imp-exp', () => { 
    
    test('1. getHeroeById debe de retornar un heroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

     });

     test('2. getHeroeById debe de retornar undefine', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual( undefined );
        expect( hero ).toBeFalsy();  //otra forma de verificar undefined y otros

     });

     test('3. getHeroesByOwner debe de regresar heroes de DC', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        console.log(heroes);

        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

      });

      test('4. getHeroesByOwner debe de regresar heroes de Marvel', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        console.log(heroes);

        expect( heroes.length ).toBe( 2 );
        
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

      });
     
 });