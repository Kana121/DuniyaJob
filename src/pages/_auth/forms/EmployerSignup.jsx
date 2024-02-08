import React from 'react'
import { Form } from 'react-router-dom'

const EmployerSignup = () => {
  return(
    <div className='d-flex w-100 via-blue-100 bg-primary justify-content-center align-items-center'>
      <div className='bg.white p-3 rounded w-25'>
      <h2>Sign-Up</h2>
      <form>
        <div className='mb-3'>
          <label htmlFor="name"><strong>Name</strong></label>
          <input type="name" placeholder='Enter Name' name='name' className='form-control rounded-0'/>
        </div>

    <section className="h-full flex flex-col md:flex-row justify-center space-y-10 mt-40 mx-5 my-3 md:space-y-0 md:space-x-16 items-center  bg-gray-900 rounded-lg ">
      <div className="md:w-1/3 mt-36 text-white ">
      <Typography sx={{pb:"10px",textAlign:"center"}}>
      Employer Signup
      </Typography>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Sample img" />
          
      </div>
      <div className="md:w-1/3  bg-white p-12 rounded-lg">

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl" type="text" placeholder="Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="text" placeholder="Company Name" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="number" placeholder="Phone Number" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="email" placeholder="Email Address" />
        

        {/* <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mt-2">
          <input className="mr-1" type="checkbox" />
          <span>Remember Me</span>
        </label> */}
        <div className="text-center md:text-left">
          <Link to="/employer-verification-otp">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Get OTP</button>
          </Link>
        </div>

        <div className='mb-3'>
          <label htmlFor="password"><strong>Password</strong></label>
          <input type="password" placeholder='Enter password' name='password' className='form-control rounded-0'/>
        </div>

        <button type='submit' className='btn btn-success w-100 rounded-0' Sign up></button>
        <p>You are agree to aur terms and policies</p> 
        <a to="/" className='btn btn-fefault border w-100 bg-light rounded-0 text-decoration'></a>
      </form>
      </div>
    </div>
  )  
}  
export default EmployerSignup; 

