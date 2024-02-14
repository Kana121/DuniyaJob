

import React from "react";
import PreLoader from "../../../components/PreLoader";
import logo from "../../../assets/dj-white.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoaderPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/Home');
  };
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white font-mono">
      <img src={logo} alt="img" className="w-64" />

      <div className="flex flex-col items-center text-center mx-4 md:mx-auto md:max-w-2xl">
        <div className="text-xl md:text-2xl lg:text-3xl">
          Elevate your career with the right job.
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl mt-4">
          Your Future, Your Choice.
        </div>
        <div className="mt-12">
          <Button variant="contained" onClick={navigateToHome}>
            Get Started ⇒
          </Button>
        </div>
      </div>

      <PreLoader />
    </div>
  );
};

export default LoaderPage;
