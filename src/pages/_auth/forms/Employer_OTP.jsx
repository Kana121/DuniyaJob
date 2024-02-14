

import React from 'react';
import Navbar from '../../../components/Navbar';
import { Box, Button, Input, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Employer_OTP = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow justify-center items-center bg-transparent">
          <div className="flex flex-col p-10 text-white rounded-lg">
            <Box sx={{ p: '20px', alignSelf: 'center' }}>
              <Typography sx={{ p: '15px' }}>
                Enter the OTP That you Received on Your Given Mail
              </Typography>
              <Input
                sx={{
                  border: 'solid white',
                  width: '100%',
                  color: 'white',
                  borderRadius: '10px',
                  p: '15px',
                }}
              />
            </Box>
            <Button
              component={Link}
              to="/Employer-set-password"
              sx={{ width: 'max-content', alignSelf: 'center', border: 'solid' }}
            >
              Verify
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPPage;
