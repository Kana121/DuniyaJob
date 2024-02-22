import React, { useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import '../../../styles/landing.css';  // Ensure that Tailwind CSS styles are imported
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';
import MoveCandidate from '../../../components/MoveCandidate';
import candidatesData from '../../../jsondata/candidate.json';

const LandingPage = () => {
  // useEffect(() => {
  //   // Apply Tailwind CSS class to the body element
  //   document.body.classList.add('overflow-hidden');

  //   // Clean up the class on component unmount
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, []); // Empty dependency array ensures that the effect runs only once


  return (
    <>
    <div className=' overflow-y-scroll '>
      
      <section className="w-screen h-screen flex flex-col">
        <div className="sticky">
          <Navbar />
        </div>

        <div className="flex-1 mt-4 flex items-center justify-center">
          <div className="banner-img">
            <div className="title text-center text-gray-600">
              <h3>
                Find the <span className=' text-black'>Right Job</span> in the
                <br />
                <span className='mt-1 text-black'>Right Companies</span>
              </h3>
              <div className=" sm:text-xl text-gray-400">
                <p>Got fired..!! Get Ready to be hired</p>
              </div>
            </div>
          </div>
        </div>
      
      <div className=' flex flex-row justify-center space-x-6 '>
      <div className="button mb-28 text-black" data-testid="btn">
        <Link to="/JobSearch">Browse Jobs</Link>
      </div>
      <div className="button mb-28" data-testid="btn">
        <Link to="/EmployerHome">Post Jobs</Link>
      </div>
      </div>
      
      </section>
      {/* <div className="moving flex items-center gap-14 animate-marquee absolute ">

        {candidatesData.map(candidate => (
        <MoveCandidate key={candidate.id} candidate={candidate} />
      ))} 
        </div> */}

      <Footer />

    </div>

    </>
  );
};

export default LandingPage;