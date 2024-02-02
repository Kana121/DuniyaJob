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

        <div className='mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0'/>
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

