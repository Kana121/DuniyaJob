// import React from 'react'
// import 
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'

// function Sidebar({openSidebarToggle, OpenSidebar}) {
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
//         <div className='sidebar-title'>
//             <div className='sidebar-brand'>
//                 <BsCart3  className='icon_header'/> SHOP
//             </div>
//             <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//         </div>

//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsGrid1X2Fill className='icon'/> Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillArchiveFill className='icon'/> Products
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Categories
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsPeopleFill className='icon'/> Customers
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsListCheck className='icon'/> Inventory
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsMenuButtonWideFill className='icon'/> Reports
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="/settings">
//                     <BsFillGearFill className='icon'/> Setting
//                 </a>
//             </li>
//         </ul>
//     </aside>
//   )
// }

// export default Sidebar

// import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCart3 } from 'react-icons/bs';

// function Sidebar({ handleItemClick ,openSidebarToggle, OpenSidebar}) { // Receive handleItemClick as props
//   return (
//     <aside id="sidebar"  className={openSidebarToggle ? "sidebar-responsive": ""}>

// <div className='sidebar-title'>
//              <div className='sidebar-brand'>
//                  <BsCart3  className='icon_header'/> SHOP
//              </div>
//              <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//          </div>
//       {/* Sidebar content */}
//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Dashboard')}>
//           <a>
//             <BsGrid1X2Fill className='icon'/> Dashboard
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Products')}>
//           <a>
//             <BsFillArchiveFill className='icon'/> Products
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Categories')}>
//           <a>
//             <BsFillGrid3X3GapFill className='icon'/> Categories
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Customers')}>
//           <a>
//             <BsPeopleFill className='icon'/> Customers
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Inventory')}>
//           <a>
//             <BsListCheck className='icon'/> Inventory
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Reports')}>
//           <a>
//             <BsMenuButtonWideFill className='icon'/> Reports
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Settings')}>
//           <a>
//             <BsFillGearFill className='icon'/> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;


// import React from 'react';
// import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCart3 } from 'react-icons/bs';

// function Sidebar({ handleItemClick ,openSidebarToggle, OpenSidebar}) { // Receive handleItemClick as props
//   return (
//     <aside id="sidebar"  className={openSidebarToggle ? "sidebar-responsive": ""}>

//       <div className='sidebar-title' onClick={OpenSidebar}> {/* Attach onClick event handler to open sidebar */}
//         <div className='sidebar-brand'>
//           <BsCart3  className='icon_header'/> SHOP
//         </div>
//         <span className='icon close_icon'>X</span>
//       </div>

//       {/* Sidebar content */}
//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Dashboard')}>
//           <a>
//             <BsGrid1X2Fill className='icon'/> Dashboard
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Products')}>
//           <a>
//             <BsFillArchiveFill className='icon'/> Products
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Categories')}>
//           <a>
//             <BsFillGrid3X3GapFill className='icon'/> Categories
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Customers')}>
//           <a>
//             <BsPeopleFill className='icon'/> Customers
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Inventory')}>
//           <a>
//             <BsListCheck className='icon'/> Inventory
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Reports')}>
//           <a>
//             <BsMenuButtonWideFill className='icon'/> Reports
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Settings')}>
//           <a>
//             <BsFillGearFill className='icon'/> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;

// import React from 'react';
// import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCart3 } from 'react-icons/bs';
// import './dash.css'

// function Sidebar({ handleItemClick ,openSidebarToggle, OpenSidebar}) { // Receive handleItemClick as props
//   return (
//     <aside id="sidebar"  className={openSidebarToggle ? "sidebar-responsive": ""}>

//       <div className='sidebar-title' onClick={OpenSidebar}> {/* Attach onClick event handler to open sidebar */}
//         <div className='sidebar-brand'>
//           <BsCart3  className='icon_header'/> SHOP
//         </div>
//         <span className='icon close_icon'>X</span>
//       </div>

//       {/* Sidebar content */}
//       <ul className='sidebar-list'>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Dashboard')}>
//           <a>
//             <BsGrid1X2Fill className='icon'/> Dashboard
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Products')}>
//           <a>
//             <BsFillArchiveFill className='icon'/> Products
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Categories')}>
//           <a>
//             <BsFillGrid3X3GapFill className='icon'/> Categories
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Customers')}>
//           <a>
//             <BsPeopleFill className='icon'/> Customers
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Inventory')}>
//           <a>
//             <BsListCheck className='icon'/> Inventory
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Reports')}>
//           <a>
//             <BsMenuButtonWideFill className='icon'/> Reports
//           </a>
//         </li>
//         <li className='sidebar-list-item' onClick={() => handleItemClick('Settings')}>
//           <a>
//             <BsFillGearFill className='icon'/> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;

// Sidebar.js
import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCart3 } from 'react-icons/bs';

function Sidebar({ handleItemClick, activeSection , openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand text-3xl'>
          {/* <BsCart3 className='icon_header'/>  */}
          Duniya Jobs
        </div>
        <span onClick={OpenSidebar} className='icon close_icon'>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${activeSection === 'Dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('Dashboard')}>
          <a className=''>
            <BsGrid1X2Fill className='icon'/> Home
          </a>
        </li>
        <li className={`sidebar-list-item ${activeSection === 'Products' ? 'active' : ''}`} onClick={() => handleItemClick('Products')}>
          <a>
            <BsFillArchiveFill className='icon'/> Candidates
          </a>
        </li>
        <li className={`sidebar-list-item ${activeSection === 'Categories' ? 'active' : ''}`} onClick={() => handleItemClick('Categories')}>
          <a>
            <BsFillGrid3X3GapFill className='icon'/> Post Job
          </a>
        </li>
        <li className={`sidebar-list-item ${activeSection === 'Customers' ? 'active' : ''}`} onClick={() => handleItemClick('Customers')}>
          <a>
            <BsPeopleFill className='icon'/> Shortlisted
          </a>
        </li>
        <li className={`sidebar-list-item ${activeSection === 'Inventory' ? 'active' : ''}`} onClick={() => handleItemClick('Inventory')}>
          <a>
            <BsListCheck className='icon'/> Interview
          </a>
        </li>
        <li className={`sidebar-list-item ${activeSection === 'Reports' ? 'active' : ''}`} onClick={() => handleItemClick('Reports')}>
          <a>
            <BsMenuButtonWideFill className='icon'/> Message
          </a>
        </li>
        <li className={`sidebar-list-item ${activeSection === 'Settings' ? 'active' : ''}`} onClick={() => handleItemClick('Settings')}>
          <a>
            <BsFillGearFill className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
