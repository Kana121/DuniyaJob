import React from 'react';
// import Navbar from '../../../components/Navbar';
import { Typography } from '@mui/material';
import * as yup from 'yup'; // Import yup for validation
import { useFormik } from 'formik'; // Import useFormik for form handling
import Header from '../../../components/innerNavbar/Header';

const ForgetPassword = () => {
  // Define validation schema using yup
  const validationSchema = yup.object({
    emailAddress: yup.string().email('Invalid email address').required('Email Address is required'),
  });

  // Use useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      emailAddress: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      // You can add additional logic here, such as sending a password reset email
    },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Header />
        <section className="flex flex-col md:flex-row justify-center items-center flex-grow bg-transparent mt-14">
          <div className="md:w-1/2 p-8">
            <Typography variant="h4" className="text-white text-center md:text-left mb-8">
              Forgot Your Password?
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <div className="bg-white rounded-lg shadow-md p-5">
                {/* Email address input field */}
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5"
                  type="email"
                  name="emailAddress"
                  value={formik.values.emailAddress}
                  onChange={formik.handleChange}
                  placeholder="Email Address"
                />
                {formik.touched.emailAddress && formik.errors.emailAddress ? (
                  <div className="text-red-500 text-sm">{formik.errors.emailAddress}</div>
                ) : null}

                {/* Submit button */}
                <div className="text-center md:text-left mt-4">
                  <button
                  onClick={() =>{
                    alert('check your mail')
                  }}
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs w-[70%] tracking-wider"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 flex mt-3 justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt="Sample img"
              className="w-full md:max-w-lg"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgetPassword;
