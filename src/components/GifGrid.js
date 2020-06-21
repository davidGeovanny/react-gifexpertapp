import React, { Fragment } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category ).then( images => {
    //         setImages( images );
    //     });
    // }, [ category ]);

    const { data: images, loading } = useFetchGifs( category );

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifGridItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </Fragment>
    );
}
 
export default GifGrid;