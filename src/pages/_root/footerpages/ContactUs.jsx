import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { styled } from '@mui/system';
import con from "../../../assets/contactuslogo.png";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../../../styles/contact.css';
import Footer from "../../../components/Footer";







const StyledInput = styled(Input)({
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: 'none',
  },
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




function App() {

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [messageError, setMessageError] = useState('');

 

  const validateFirstName = () => {
    if (firstName.trim() === '') {
      setFirstNameError('First Name is required');
    } else {
      setFirstNameError('');
    }
  };

  const validateLastName = () => {
    if (lastName.trim() === '') {
      setLastNameError('Last Name is required');
    } else {
      setLastNameError('');
    }
  };

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateMobileNumber = () => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError('Enter a valid 10-digit mobile number');
    } else {
      setMobileNumberError('');
    }
  };

  const validateMessage = () => {
    if (message.trim() === '') {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  };



  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError('');
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    setMobileNumberError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleCloseDialog = () => {
    // Your logic for closing the dialog
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks for each field
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isMobileNumberValid = validateMobileNumber();
    const isMessageValid = validateMessage();

    // Check if all validations pass before proceeding
    if (isFirstNameValid && isLastNameValid && isEmailValid && isMobileNumberValid && isMessageValid) {
      // All validations passed, proceed with the form submission logic
      // (Assuming the logic here involves creating user information)

      // Display success message using react-toastify
      setOpenSnackbar(true);

     
      // Additional logic for form submission if needed

    } else {
      // Handle the case where some validations fail
      console.log("Form validation failed");
    }
  };

 



  return (
    <div className="background-image">
      <Container className='content' style={{height:1040}}>
        <Typography variant='h2' style={{ marginBottom: '20px', color: 'orangered', textAlign: 'center', fontWeight: 'bold', fontSize: 50, fontFamily: 'Arial, sans-serif', marginTop: 10 }}>
          Contact Us
        </Typography>
        <Typography variant='h6' style={{ marginBottom: '40px', color: 'black', textAlign: 'center' }}>
          This is the page that marks the beginning of your interactions with potential clients and partners.
        </Typography>

        <div className='Container_1' style={{ display: 'flex', marginLeft: 85 }}>
          <div className='image_1' style={{ width: 500 }}>
            <img src={con} alt="Company Logo" style={{ height: '600px', marginLeft: '650px', float: 'right', borderRadius: 1 }} />
          </div>

          <div className='Contact-form' style={{ marginLeft: 1, marginTop: -1, width: 450, height: 602, background: '#194A8D', padding: '20px', borderRadius: '1px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '18px', background:'#194A8D', marginTop:-20, marginLeft:-25, height:602 }} onSubmit={handleSubmit}>
              <Typography style={{ fontWeight: 'bold', fontSize: 30, color: 'white', textAlign: 'center', marginTop:-10 }}>
                Contact Form
              </Typography>
              <FormGroup style={{ background: 'white', borderRadius: 25, height: 60, marginTop: 1 }}>
                <FormControl style={{ margin: 'none' }}>
                  <InputLabel htmlFor="firstName" style={{ color: '#194A8D', marginTop: 8, height: 30 }}>First Name</InputLabel>
                  <Input
                    id="text"
                    type="Name"
                    placeholder="Enter your First Name"
                    style={{ marginLeft: 25, color: 'black', width: 300, marginTop: 10, borderBottom: 'none', padding: '10px' }}
                    onChange={handleFirstNameChange}
                    onBlur={validateFirstName}
                  />
                  {firstNameError && (
                    <div className='error_message' style={{ color: 'red', marginTop: -5, marginLeft: 10 }}>
                      {firstNameError}
                    </div>
                  )}
                </FormControl>
              </FormGroup>
              <FormGroup style={{ background: 'white', borderRadius: 25, height: 60 }}>
                <FormControl>
                  <InputLabel htmlFor="lastName" style={{ color: '#194A8D', marginTop: 8, height: 20 }}>Las Name</InputLabel>
                  <Input
                    id="text"
                    type="Name"
                    placeholder="Enter your Last Name"
                    style={{ marginLeft: 25, color: 'black', width: 300, marginTop: 10, borderBottom: 'none', padding: '10px' }}
                    onChange={handleLastNameChange}
                    onBlur={validateLastName} />
                  {lastNameError && (
                    <div className='error_message' style={{ color: 'red', marginTop: -5, marginLeft: 10 }}>
                      {lastNameError}
                    </div>
                  )}
                </FormControl>
              </FormGroup>
              <FormGroup style={{ background: 'white', borderRadius: 25, height: 60 }}>
                <FormControl>
                  <InputLabel htmlFor="email" style={{ color: '#194A8D', marginTop: 8, height: 20 }}>Enter Your Email</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    style={{ marginLeft: 25, color: 'black', width: 300, marginTop: 10, borderBottom: 'none', padding: '10px' }}
                    onChange={handleEmailChange}
                    onBlur={validateEmail}
                  />
                  {emailError && (
                    <div className='error_message' style={{ color: 'red', marginTop: -5, marginLeft: 10 }}>
                      {emailError}
                    </div>
                  )}
                </FormControl>
              </FormGroup>

              <FormGroup style={{ background: 'white', borderRadius: 25, height: 60 }}>
                <FormControl>
                  <InputLabel htmlFor="mobileNumber" style={{ color: '#194A8D', marginTop: 8, height: 20 }}>Mobile Number</InputLabel>
                  <StyledInput
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter your Mobile Number"
                    style={{ textAlign: 'center', marginLeft: 25, color: 'black', width: 300, marginTop: 10, borderBottom: 'none', padding: '10px' }}
                    onChange={handleMobileNumberChange}
                    onBlur={validateMobileNumber}
                  />
                  {mobileNumberError && (
                    <div className='error_message' style={{ color: 'red', marginTop: -5, marginLeft: 10 }}>
                      {mobileNumberError}
                    </div>
                  )}

                </FormControl>
              </FormGroup>
              <FormGroup style={{ background: 'white', borderRadius: 25, height: 60 }}>
                <FormControl>
                  <InputLabel htmlFor="message" style={{ color: '#194A8D', marginTop: 8, height: 20 }}>Message</InputLabel>
                  <StyledInput
                    id="message"
                    type="Name"
                    placeholder="Type Your Message"
                    style={{ textAlign: 'center', marginLeft: 25, color: 'black', width: 300, marginTop: 10, borderBottom: 'none', padding: '10px' }}
                    onChange={handleMessageChange}
                    onBlur={validateMessage}
                  />
                  {messageError && (
                    <div className='error_message' style={{ color: 'red', marginTop: -5, marginLeft: 10 }}>
                      {messageError}
                    </div>
                  )}

                </FormControl>
              </FormGroup>
              <Button
  type="submit"
  variant="contained"
  color="primary"
  style={{ alignSelf: 'flex-start', width: 350, marginTop: '10px', borderRadius: 25 }}
>
  Submit
</Button>

<Button 
  type="button" 
  variant="contained"
  style={{ alignSelf: 'flex-start', width: 350, marginTop: '1px', borderRadius: 25, backgroundColor: '#ff4500', color: 'white' }}
>
  Cancel
</Button>


</form>
</div>
<Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
  <MuiAlert onClose={() => handleCloseSnackbar()} severity="success">
    Form submitted successfully!
  </MuiAlert>
</Snackbar>

        </div>
        <iframe
          className='map'
          style={{ marginTop: 50, marginLeft: -165 }}
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.999278678832!2d78.36621959800524!3d17.447753085193387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1707477846456!5m2!1sen!2sin"
          width="1480"
          height="330"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
