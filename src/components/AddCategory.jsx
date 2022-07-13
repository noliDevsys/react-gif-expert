import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return; 
        
        //setCategories(categories => [...categories, inputValue]);
        setinputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text" placeholder="Buscar" value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>
    )
}
