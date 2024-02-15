
// import React from 'react'
// import imagefirst from "../../../assets/img1.jpg"
// import { Box } from '@mui/material'
// import Footer from "../../../components/Footer"
// const AboutUs = () => {
//   return (
//     <>
//     <div className=' '>
//     <div className=' text-white flex w-full align-middle mt-12 font-mono text-6xl'>ABOUT US</div>
//     <div className='flex flex-col'>
//       <div className=' flex'>
//        <img src={imagefirst} alt='image1' className=' mt-10 align-middle justify-center ml-20 mr-20 hover:opacity-0.75 rounded-xl' height={"500px"} width={"500px"}  />
//       </div>
//       <div>
//       <Box sx={{height:'auto',width:'auto',boxShadow:'5px',m:'10px',borderRadius:'20px',background: 'linear-gradient(270deg, rgba(63,94,251,1) 0%, rgba(145,76,184,1) 39%, rgba(166,60,125,1) 74%, rgba(187,53,99,1) 89%, rgba(202,48,80,1) 100%)'}} p={'10px'}>

//     <p className=' flex text-yellow-500   mt-7 text-xl text-justify font-serif'>
//             Duniya Jobs is largest job portal owned and operated by .... It was founded in 2024 and is headquartered in India. With live jobs and large CVs, Duniya Jobs currently service many corporate clients. The company operates various office in state across the countries.
//     </p>
//       </Box>

//       <Box sx={{height:'auto',width:'auto',boxShadow:'5px',m:'10px',borderRadius:'20px',background: 'linear-gradient(90deg, rgba(65,88,200,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}} p={'10px'}>


//     <p className=' flex text-yellow-500 ml-32 mr-32 mt-7 text-xl font-serif '>
//       With a deep understanding and insights on each market, along with the latest technology, Duniya Jobs connects jobseekers with a wide range of job opportunities and deliver exceptional value to employers. Duniya Jobs offers its clients a bouquet of end to end recruitment services, including resume database, job listings, email marketing, SMS marketing, etc. In addition, it also features services for job seekers. It includes resume writing, profile enhancement, recruiter reach for job seekers.
//     </p>
//     </Box>
    
//     </div>
//     </div>
//     <Footer/>
//     </div>

//     </>
//   )
// }

// export default AboutUs;

import React from 'react';
import imagefirst from "../../../assets/img1.jpg";
import Footer from "../../../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:px-4 mb-8 lg:mb-0">
            <img src={imagefirst} alt="image1" className="rounded-lg shadow-lg mx-auto lg:mx-0" />
          </div>
          <div className="lg:w-1/2 lg:px-4">
            <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4 w-full">
                Duniya Jobs is the largest job portal owned and operated by .... It was founded in 2024 and is headquartered in India. With live jobs and large CVs, Duniya Jobs currently services many corporate clients. The company operates various offices in states across the country.
              </p>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4 w-full">
                Our mission is to connect job seekers with a wide range of job opportunities and deliver exceptional value to employers. We offer a bouquet of end-to-end recruitment services, including resume database, job listings, email marketing, SMS marketing, etc. Additionally, we provide services for job seekers such as resume writing, profile enhancement, and recruiter reach.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
