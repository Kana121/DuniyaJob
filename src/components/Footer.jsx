// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<div className=" flex -mt-20">
		<Box>
			<h1
				style={{
					color: "Lightblue",
					textAlign: "center",
					marginTop: "10px",
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
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
		</div>
	);
};
export default Footer;

