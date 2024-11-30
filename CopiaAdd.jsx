import { useState } from "react";
import PropTypes from 'prop-types';
import '../GifExpertApp';


export const AddCategory = ( {onNewCategory} ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( {target} ) => {
    setInputValue(target.value);
  }
  

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
    
    }
    AddCategory.propTypes = {
        onNewCategory: PropTypes.func.isRequired
    }
  return (
    <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="Add a category"
        value={inputValue}
        onChange={handleInputChange}
        />
    </form>
    
  )
}
