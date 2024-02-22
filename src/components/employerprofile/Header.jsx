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
import React from "react";
import { BsJustify } from "react-icons/bs";

import "./dash.css";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon" onClick={OpenSidebar}>
        <BsJustify className="icon" />
      </div>
      {/* Add other header content here */}

      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 opacity-30 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          required
        />
        {/* <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button> */}
      </div>
      <div className=" portrait:hidden">
        <IconButton size="large" aria-label="show 4 new mails" color="black" >
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="black"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
