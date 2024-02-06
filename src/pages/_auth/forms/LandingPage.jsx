import React, { useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import '../../../styles/landing.css';  // Ensure that Tailwind CSS styles are imported
import { Link } from 'react-router-dom';

const LandingPage = () => {
  useEffect(() => {
    // Apply Tailwind CSS class to the body element
    document.body.classList.add('overflow-hidden');

    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <>
      <section className="w-screen h-screen overflow-y-scroll no-scrollbar flex flex-col">
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
              <div className="small-tagline">
                <p>Got fired..!! Get Ready to be hired</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="button mb-14" data-testid="btn">
        <Link to="/JobSearch">Browse Jobs</Link>
      </div>
    </>
  );
};

export default LandingPage;