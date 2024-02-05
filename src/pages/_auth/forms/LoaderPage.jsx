import React from "react";
import PreLoader from "../../../components/PreLoader";
import logo from "../../../assets/dj-white.png";
// import PreLoader from '../components/PreLoader'
import Button from "@mui/material/Button";
// import {navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/Loader_bg.png"

const LoaderPage = () => {
  const navigate = useNavigate();
  const navigateToDuniya = () => {
    navigate('/Duniya');
  };
  
  return (
    <>
      {/* <img src={bg} alt="image" className=" flex h-2/3 w-full"/>   */}

      <div className=" bg-gray-900 h-[100vh] w-[100%] no-scrollbar">
        <div className=" flex  text-right text-white font-mono">

      <div className=" bg-gray-900 w-full h-screen">
        <div className=" flex w-full text-right text-white font-mono">

          <div className="flex ">
            <img src={logo} alt="image" />
          </div>

          <div className="flex-col ">
            <div className="flex text-2xl align-middle mt-40">
              Got Fired...?
            </div>
            <div className="flex space-x-3 text-6xl">
              Ready to be hired...
            </div>

            <div className=" mt-28">
              <Button variant="contained" onClick={navigateToDuniya}>
                Get Started ⇒
              </Button>
            </div>
          </div>
        </div>

        <PreLoader />
      </div>
    </>
  );
};

export default LoaderPage;
