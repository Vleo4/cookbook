import React from 'react';
import './ProfileCard.css';
import images from '../../constants/images';

const ProfileCard = ({data}) => {

  const {name,ico} = data;
  return (
    <div className='app__profileCard'>
        <img src={ico} alt="example" />
        <p>{name}</p>
    </div>
  )
}

export default ProfileCard