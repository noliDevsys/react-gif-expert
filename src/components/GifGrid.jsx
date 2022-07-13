//import {useEffect, useState } from 'react';
//import {getGifs} from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({images, isLoading});

    /* 
    const numeros = ["cap1","cap2","cap3","cap4","cap5"]
    //en el return se podria retornar los diferentes números que se encuentran en el arreglo "numeros"
    {
        numeros.map( num => (
            <p>{num}</p>
        ))
    } 
    */

    /* 
    //esto lo simplifica al crear hooks
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, []) 
    */

  return (
    <>
        <h4>{category}</h4>
     
        {
            isLoading ? <h5>Cargando...</h5> : null
           //isLoading && <h5>Cargando...</h5>
        }


        <div className="card-grid">            
        {
            /* images.map((img) => (
                <li key={img.id} >{img.title}</li>
            )) */
            images.map((image) => (
                <GifItem key={image.id} 
                /* title = {image.title}
                url={image.url} >
                */
               {...image}>
               </GifItem> 
                ))
        }
        </div>
    </>
  )
}










