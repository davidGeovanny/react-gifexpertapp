import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas de GifGridItem', () => {
    const title = 'Un título';
    const url = 'https://localhost/image.jpg';

    let wrapper = shallow( 
        <GifGridItem 
            title={ title } 
            url={ url } 
        /> 
    );
    
    test('Debe de renderizarse el componente y hacer match con el snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('Should have an image equal to url and alt of the props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('should have a class called animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe( true ); 
    });
    
});
