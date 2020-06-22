const { getGifs } = require("../../helpers/getGifs");

describe('Tests with getGifts helper', () => {
    test('should return 10 elements', async () => {
        const gifs = await getGifs('Boku No Hero');
        expect( gifs.length ).toBe( 10 );
    });
    
    test('should return 0 elements if the parameter is an empty string', async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    });
     
});
