import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';

const EmployeePassword = () => {
  return (
    <>
      <div className="sticky">
        <Navbar />
      </div>

      <section className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 rounded-lg">
        <div className="md:w-1/3 mt-10 md:mt-0 text-white flex flex-col items-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt="Sample img"
          />
        </div>
        <div className="md:w-1/3 mt-10 bg-white p-12 rounded-lg">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5"
            type="password"
            placeholder="Password"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5"
            type="password"
            placeholder="Confirm Password"
          />
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mt-2">
            <input className="mr-1" type="checkbox" />
            <span className="text-black">Remember Me</span>
          </label>
          <div className="text-center md:text-left">
            <Link to="/Jobs">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">
                Register
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeePassword;
