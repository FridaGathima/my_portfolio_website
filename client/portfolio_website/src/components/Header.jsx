import React from 'react';
import myProfile from '../assets/myprofile.jpeg'
const Header = () => {
  return (
    <header>
      <img src={myProfile} className='myprofilepic' alt="profile_picture" />
      <h1>Frida Gathima</h1>
      <p>Fullstack Web Developer</p>
    </header>
  );
};

export default Header;
