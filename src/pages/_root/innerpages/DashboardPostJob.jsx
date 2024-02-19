// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, } from 'react-router-dom';
// import Drawer from '../../../components/dashboard/Drawer';
// import Home from '../../../components/dashboard/Home'; // Import your Page1 component
// import Resumes from '../../../components/dashboard/Resumes'; // Import your Page2 component
// import Switch from '@mui/material/Switch'

// const DashboardPostJob = () => {
//   const [currentPage, setCurrentPage] = useState('/Home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case '/Home':
//         return <Home />;
//       case '/Resumes':
//         return <Resumes />;
//       // Add more cases for additional pages
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Drawer />

//       <section style={{ flex: 1, padding: '20px' }}>
//         {/* Your page content goes here */}
//         {renderPage()}
//       </section>
//     </div>
//   );
// }

// export default DashboardPostJob;

import React, { useState } from "react";
import {
  CssBaseline,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import Home from "../../../components/dashboard/Home";
import Resumes from "../../../components/dashboard/Resumes";
import Postedjobs from "../../../components/dashboard/Postedjobs";
import Candidates from "../../../components/dashboard/Candidates";
import Settings from "../../../components/dashboard/Settings";
import Messages from "../../../components/dashboard/Messages";

const drawerWidth = 240;

const EmployerDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Home");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "Home":
        return <Home />;
      case "Resumes":
        return <Resumes />;
      case "Messages":
        return <Messages />;
      case "Posted Jobs":
        return <Postedjobs />;
      case "Candidates":
        return <Candidates />;
      case "Settings":
        return <Settings />;
      default:
        return <Typography paragraph>Home Page Content</Typography>;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Employer Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <div style={{ overflow: "auto" }}>
          <List>
            {[
              "Home",
              "Resumes",
              "Messages",
              "Posted Jobs",
              "Candidates",
              "Settings",
            ].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => handleMenuItemClick(text)}
              >
                <ListItemIcon>
                  {text === "Home" && <HomeIcon />}
                  {text === "Resumes" && <DescriptionIcon />}
                  {text === "Messages" && <MessageIcon />}
                  {text === "Posted Jobs" && <WorkIcon />}
                  {text === "Candidates" && <PersonIcon />}
                  {text === "Settings" && <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Toolbar />
        {renderContent()}
      </main>
    </div>
  );
};

export default EmployerDashboard;
