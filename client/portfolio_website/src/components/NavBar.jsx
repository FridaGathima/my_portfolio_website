// src/components/Navbar.js
import React from 'react';

const Navbar = ({ onSectionChange }) => {
  return (
    <nav>
      <ul className='navbarul'>
        <li onClick={() => onSectionChange('home')}>Home</li>
        <li onClick={() => onSectionChange('about')}>About</li>
        <li onClick={() => onSectionChange('portfolio')}>Portfolio</li>
        <li onClick={() => onSectionChange('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;



// const NavBar = () => {
//   return (
//     <nav>
//         <ul className='navbarul'>
//             <li>About</li>
//             <li>Portfolio</li>
//             <li>Contact</li>
//         </ul>   

//     </nav>
//   ) 
// }

// export default NavBar