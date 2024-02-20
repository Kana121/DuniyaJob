// EmployerDashboard.js
import React, { useState } from 'react';
import './dash.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function EmployerDashboard() {
  const [activeSection, setActiveSection] = useState('Dashboard');

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const handleItemClick = (section) => {
    setActiveSection(section);
  
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  handleItemClick={handleItemClick} />
      <Home activeSection={activeSection} />
    </div>
  );

}

export default EmployerDashboard;