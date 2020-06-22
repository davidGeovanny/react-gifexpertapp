import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Test with <AddCategory />', () => {

    // const setCategories = () => {};
    const setCategories = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> ); 
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> ); 
    });

    test('should show the <AddCategory /> component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change the input box', () => {
        const input = wrapper.find('input');

        const value = 'Hello world';

        input.simulate('change', { 
            target: { 
                value 
            } 
        });

        expect( wrapper.find('p').text().trim()).toBe( value );
    });

    test('should not to post the data on submit', () => {
         wrapper.find('form').simulate('submit', {
             preventDefault() {}
         });

         expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean the input box', () => {
        const input = wrapper.find('input');
        const value = 'New Value';

        // 1.- Simular el inputChange
        input.simulate('change', { 
            target: { 
                value 
            } 
        });
        // 2.- Simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault() {},
        });
        // 3.- setCategories se debe de haber llamado
        // expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        // 4.- El valor del input debe de estar en '' 
        expect( input.prop('value') ).toBe('');
    });
    
});
