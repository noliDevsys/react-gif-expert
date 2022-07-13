import {useState} from 'react';
/*
esto esta simplificado con el index
//import { AddCategory, GifGrid } from './components';
*/

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        //agregar Valorant al final
        //para agregarlo al principio escribo primero lo que quiero agregar y luego ...categories
        //setCategories([...categories, 'Valorant']);

        if(categories.includes(newCategory))return;

        console.log(newCategory);
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            <h2>GifExpertApp</h2>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory}> </AddCategory>

        
            {/* Listado de Gif*/}
            {/* <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category= {category}></GifGrid>
                    ))
                }
            </ol> */}

            {
                categories.map((category) => (
                    <GifGrid key={category} category= {category}></GifGrid>
                ))
            }



        </>
    )
}




