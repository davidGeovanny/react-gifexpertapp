import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Boku No Hero']);

    // const handleAdd = e => {
    //     const newCategory = 'Rising of Shield Hero';

    //     setCategories( [...categories, newCategory] );
    //     // setCategories( category => {
    //     //     return [...category, newCategory];
    //     // });
    // };
    
    return (
        <Fragment>
            <h2>GifExpert</h2>
            <AddCategory 
                setCategories={ setCategories } 
            />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={ category }
                            key={ category }
                        />
                    ))
                }
            </ol>
        </Fragment>
    );
}
 
export default GifExpertApp;