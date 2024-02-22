import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { Home } from "@mui/icons-material";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar className="bg-gradient-to-r from-blue-300 via-sky-500 to-blue-900">
        <Toolbar>
          <Button href="/Home">
          <Home sx={{ transform: "scale(2)",color:'white' }} />
          </Button> 
            
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.2rem", paddingLeft: "5%" }}>
                Duniya Jobs
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label='Home' href="/Home"/>
                <Tab label="Find Candidates" href="/FindCandidate"/>
              </Tabs>
              
              <Button href="/Employer-Dashboard"  sx={{ marginLeft: "10px" }} variant="contained">    
                Employer Dashboard
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
