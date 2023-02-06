import React from 'react';
import './SubHeading.css';

const SubHeading = ({title}) => {
  return (
    <div className='app__subheading'>
        <h1>{title}</h1>
        <span></span>
    </div>
  )
}

export default SubHeading