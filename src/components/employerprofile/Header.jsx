// import React from 'react';
// import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
// import './dash.css'

// function Header({ OpenSidebar }) {
//   return (
//     <header className='header'>
//       <div className='menu-icon' onClick={OpenSidebar}> {/* Attach onClick event handler to open sidebar */}
//         <BsJustify className='icon' />
//       </div>
//       <div className='header-left'>
//         <BsSearch className='icon' />
//       </div>
//       <div className='header-right'>
//         <BsFillBellFill className='icon' />
//         <BsFillEnvelopeFill className='icon' />
//         <BsPersonCircle className='icon' />
//       </div>
//     </header>
//   );
// }

// export default Header;


// Header.js
import React from 'react';
import { BsJustify } from 'react-icons/bs';

import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, } from 'react-icons/bs';
import './dash.css'
import { Stack } from '@mui/material';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon' onClick={OpenSidebar}>
        <BsJustify className='icon' />
      </div>
      {/* Add other header content here */}

      <div className='header-left'>
         <BsSearch className='icon' />
       </div>
       <div className='header-right'>
       <Stack direction={'row'}>
         <BsFillBellFill className='icon cursor-pointer'  />
         <BsFillEnvelopeFill className='icon cursor-pointer' />
         <BsPersonCircle className='icon cursor-pointer' />
       </Stack>
       </div>
    </header>
  );
}

export default Header;
