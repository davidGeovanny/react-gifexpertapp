import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Test with useFetchGifs hook', () => {
    test('should to return the init state', async () => {
        const category = 'Boku No Hero';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });
    
    test('should to return an array images and loading in false', async () => {
        const category = 'Boku No Hero';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;
    
        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    });
    
     
});
