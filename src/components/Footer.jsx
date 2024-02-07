// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
	Icon_row,
} from "./FooterStyles";
import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import ln from '../assets/linkedin.png';
import yt from '../assets/youtube.png';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Footer = () => {
	return (
		<div className=" flex -mt-20">
		<Box>
			<h2 style={{
					color: "white",
					textAlign: "left",
					marginTop: "3px",
					marginBottom: "3px",
					fontFamily: "monospace",
					fontSize:"25px",
					fontWeight: "bold",}}>
					We are here to help you in finding jobs. </h2>
					
			<Button> Help Centre</Button>
			
			<h1
				style={{
					color: "Lightblue",
					textAlign: "center",
					marginTop: "2px",
					marginBottom: "60px",
					fontSize: "18px",
				}}
			>
				A Job Portal for Job Seekers!
			</h1 >
			
			<FooterContainer>
				<Row>
					<Column>
						<Heading>SUPPORT</Heading>
						<FooterLink href="#">
							FAQ
						</FooterLink>
						<FooterLink href="#">
						  	Terms & Conditions
						</FooterLink>
						<FooterLink href="#">
							Contact Us
						</FooterLink>
						<FooterLink href="#">
							Request Demo
						</FooterLink>
					</Column>
					<Column>
						<Heading>OUR COMPANY</Heading>
						<FooterLink href="#">
							About Us
						</FooterLink>
						<FooterLink href="#">
							Meet the Team
						</FooterLink>
						<FooterLink href="#">
							Our News
						</FooterLink>
						<FooterLink href="#">
							Our Blogs
						</FooterLink>
					</Column>
					<Column>
						<Heading>OUR SERVICE</Heading>
						<FooterLink href="#">
							Advertise with Us
						</FooterLink>
						<FooterLink href="#">
							Customer Reviews
						</FooterLink>
						<FooterLink href="#">
							Client Testimonials
						</FooterLink>
						<FooterLink href="#">
							How it Works
						</FooterLink>
					</Column>
					
				</Row>
			</FooterContainer>
			<Icon_row>
			All rights reserved @ 2022 MiroDen Software Solution Pvt. Ltd.
			<div className=" flex flex-row space-x-2 -mb-4">
			<Link to="">
        		<img src={fb} alt="facebook" className=" h-10"/>
      		</Link>
			  <Link to="">
        		<img src={ig} alt="instagram" className=" h-10" />
      		</Link>
			  <Link to="">
        		<img src={ln} alt="linkedin" className=" h-10"/>
      		</Link>
			  <Link to="">
        		<img src={yt} alt="youtube" className=" h-10 "/>
      		</Link>
			

			</div>
			</Icon_row> 
		</Box>
		</div>
	);
};
export default Footer;

