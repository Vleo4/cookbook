import React from 'react';
import images from '../../constants/images';
import './CategoriesIngCard.css';

const CategoriesIngCard = ({data}) => {
    const {name} = data;
  return (
    <div className='app__categoriesIngCard'>
        <img src={images.Example} alt="Example" />
        <p>{name}</p>
    </div>
  )
}

export default CategoriesIngCard