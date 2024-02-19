import React from "react"; 
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline"; 
import Divider from "@mui/material/Divider"; 
import Drawer from "@mui/material/Drawer"; 
import IconButton from "@mui/material/IconButton"; 
import List from "@mui/material/List"; 
import ListItemButton from "@mui/material/ListItemButton"; 
import ListItemIcon from "@mui/material/ListItemIcon"; 
import ListItemText from "@mui/material/ListItemText"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
// import Navbardash from '../../components/dashboard/Navbardash'
import HomeIcon from '@mui/icons-material/Home';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChatIcon from '@mui/icons-material/Chat';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";


const drawWidth = 250; 

function App(){ 
	const [mobileViewOpen, setMobileViewOpen] = React.useState(false); 

	const handleToggle = () => { 
		setMobileViewOpen(!mobileViewOpen); 
	}; 

	const responsiveDrawer = ( 
		<div style={{ backgroundColor: "#09212E", 
			height: "100%" }}> 
			<Toolbar /> 
			<Divider /> 
			<Typography 
				sx={{ textAlign: "center", pt: 4, 
					color: "white", fontSize: 20 }} 
			> 
				Duniya Jobs
			</Typography> 
			<List sx={{ backgroundColor: "#09212E" }}> 
				<ListItemButton sx={{ color: "white" }} component={Link} to="/Dashboard-employer-Home"> 
					<ListItemIcon sx={{ color: "white" }}> 
						{<HomeIcon />} 
					</ListItemIcon> 
					<ListItemText primary={"Home"}/> 
				</ListItemButton> 
				<ListItemButton sx={{ color: "white" }}> 
					<ListItemIcon sx={{ color: "white" }}> 
						{<FileCopyIcon />} 
					</ListItemIcon> 
					<ListItemText primary={"Resumes"} /> 
				</ListItemButton> 
				<ListItemButton sx={{ color: "white" }}> 
					<ListItemIcon sx={{ color: "white" }}> 
						{<ChatIcon />} 
					</ListItemIcon> 
					<ListItemText primary={"Messages"} /> 
				</ListItemButton> 
				<ListItemButton sx={{ color: "white" }}> 
					<ListItemIcon sx={{ color: "white" }}> 
						{<PostAddIcon />} 
					</ListItemIcon> 
					<ListItemText primary={"Posted Job"} /> 
				</ListItemButton> 
			</List> 
			<Divider /> 
			<List> 
				<ListItemButton sx={{ color: "white" }}> 
					<ListItemIcon sx={{ color: "white" }}> 
						{<SupervisedUserCircleIcon />} 
					</ListItemIcon> 
					<ListItemText primary={"Candidates"} /> 
				</ListItemButton> 
				<ListItemButton sx={{ color: "white" }}> 
					<ListItemIcon sx={{ color: "white" }}> 
						{<SettingsIcon />} 
					</ListItemIcon> 
					<ListItemText primary={"Settings"} /> 
				</ListItemButton> 
			</List> 
			{/* <Typography 
				sx={{ 
					backgroundColor: "blue", 
					color: "white", 
					borderRadius: 10, 
					textAlign: "center", 
					pading: 1, 
					margin: 2, 
				}} 
			> 
				Sign In 
			</Typography>  */}
		</div> 
	); 

	return ( 
		<div> 
			<div> 
				<Box sx={{ display: "flex" }}> 
					<CssBaseline /> 
					<AppBar 
						position="fixed"
						sx={{ 
							width: { sm: `calc(100% - ${drawWidth}px)` }, 
							ml: { sm: `${drawWidth}px` }, 
							backgroundColor: "#5e95c4", 
						}} 
					> 
						<Toolbar> 
							<IconButton 
								color="inherit"
								edge="start"
								onClick={handleToggle} 
								sx={{ mr: 2, display: { sm: "none" } }} 
							> 
								<MenuIcon /> 
							</IconButton> 
							<Typography variant="h6"> 
								{/* <Navbardash/> */}
							</Typography> 
						</Toolbar> 
					</AppBar> 
					<Box 
						component="nav"
						sx={{ width: { sm: drawWidth }, 
							flexShrink: { sm: 0 } }} 
					> 
						<Drawer 
							variant="temporary"
							open={mobileViewOpen} 
							onClose={handleToggle} 
							ModalProps={{ 
								keepMounted: true, 
							}} 
							sx={{ 
								display: { xs: "block", sm: "none" }, 
								"& .MuiDrawer-paper": { 
									boxSizing: "border-box", 
									width: drawWidth, 
								}, 
							}} 
						> 
							{responsiveDrawer} 
						</Drawer> 
						<Drawer 
							variant="permanent"
							sx={{ 
								display: { xs: "none", sm: "block" }, 
								"& .MuiDrawer-paper": { 
									boxSizing: "border-box", 
									width: drawWidth, 
								}, 
							}} 
							open 
						> 
							{responsiveDrawer} 
						</Drawer> 
					</Box> 
					<Box 
						component="main"
						sx={{ 
							flexGrow: 1, 
							p: 3, 
							width: { sm: `calc(100% - ${drawWidth}px)` }, 
						}} 
					> 
						<Toolbar /> 
						<Typography paragraph> 
							{/*GeeksforGeeks provides Free Tutorials, 
							Millions of Articles, Live, 
							Online and Classroom Courses ,Frequent 
							Coding Competitions, Webinars by Industry 
							Experts, Internship opportunities and Job 
							Opportunities. It provides all the 
							individuals with a ‘Contribute’ 
							feature on their platform where they 
							can come to write on a particular topic 
							and share it with everyone and helps you to 
							enhance your knowledge and expertise 
							of particular subjects and 
							allows you to showcase your research 
							and writing skills to all 
							others across the world. Not only 
							this but you’ll also get 
							rewarded for it in the form of 
							remuneration, internship 
							opportunities, discount offers, etc.  */}
						</Typography> 
					</Box> 
				</Box> 
			</div> 
		</div> 
	); 
} 

export default App;
