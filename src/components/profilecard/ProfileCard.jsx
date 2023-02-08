import React from 'react';
import './ProfileCard.css';
import images from '../../constants/images';

const ProfileCard = ({data}) => {

  const {name,ico} = data;
  return (
    <div className='app__profileCard'>
        <p>{name}</p>
        <img src={ico} alt="example" />
    </div>
  )
}

export default ProfileCard