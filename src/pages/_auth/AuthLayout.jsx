// import React from 'react'
import { Outlet,Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AuthLayout = () => {

  const isAuthenticated = false; 

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/JobSearch"} />
      ) : (
        <>
        <div className="sticky">
          <Navbar />
        </div>
          <section className="flex flex-1 overflow-y-scroll mt-10 no-scrollbar justify-center items-center flex-col py-5 ">
            <Outlet />
          </section>

          {/* <div className=" text-white mt-20">hello</div> */}
          
        </>
      )}
    </>
  )
}

export default AuthLayout