import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import "../../../styles/landing.css"; // Ensure that Tailwind CSS styles are imported
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import { Box } from "@mui/material";
// import Carousel from 'carousel';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LandingPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // useEffect(() => {
  //   // Apply Tailwind CSS class to the body element
  //   document.body.classList.add("overflow-hidden");

  //   // Clean up the class on component unmount
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <>
      <div className=" bg-black">
        <section className="w-screen h-screen flex flex-col">
          <div className="sticky">
            <Navbar />
          </div>

        <div className="flex-1 mt-4 flex items-center justify-center">
          <div className="banner-img">
            <div className="title text-center">
              <h3>
                Find the <span>Right Job</span> In the
                <br />
                <span>Right Companies</span>
              </h3>
              <div className=" sm:text-xl text-gray-400">
                <p>Got fired..!! Get Ready to be hired</p>
              </div>
            </div>
          </div>
        </div>
      
      <div className=' flex flex-row justify-center space-x-6 '>
      <div className="button mb-28" data-testid="btn">
        <Link to="/JobSearch">Browse Jobs</Link>
      </div>
      <div className="button mb-28" data-testid="btn">
        <Link to="/EmployerHome">Post Jobs</Link>
      </div>
      </div>
      <Box height={'100px'} alignSelf={'center'} width={'90%'} sx={{backdropFilter:'url(50px)', background:'transparent'}}>

      </Box>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
