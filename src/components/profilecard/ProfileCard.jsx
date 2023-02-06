import React from 'react';
import './ProfileCard.css';
import images from '../../constants/images';

const ProfileCard = () => {
  return (
    <div className='app__profileCard'>
        <p>Домашня піца</p>
        <img src={images.Example} alt="example" />
    </div>
  )
}

export default ProfileCard