import React from "react";
import Navbar from "../../../components/Navbar";
import "../../../styles/landing.css";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <>
    <section className=" overflow-y-scroll no-scrollbar">
      <div className="sticky">
        <Navbar />
      </div>

      <div className=" mt-16">
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        
      </div>
      

      </div>
    </section>
    <div className="button " data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>

        </>
  );
};

export default LandingPage;
