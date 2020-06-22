import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test with <GifExpertApp />', () => {
    test('should match the <GifExpertApp /> with the snapshot correctly', () => {
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('should to show a category list', () => {
         const categories = ['Boku No Hero', 'Dragon Ball'];

         const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

         expect( wrapper ).toMatchSnapshot();
         expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
     
});
