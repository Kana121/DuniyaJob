import { Box, Typography } from '@mui/material'
import React from 'react'

const ApplyForm = () => {
  return (
        <Box alignSelf={'center'} width={'60%'}  sx={{border:'solid 1px', borderRadius:'20px',background:'white',mt:'20px',boxShadow:'20'}}>

            <Box m={'15px'} sx={{ borderRadius:'15px',background:'white',boxShadow:'20'}}>
              <Typography variant='h6' p={'10px'}>Job Title</Typography>
              <Typography variant='subtitle1' p={'10px'}>Company name</Typography>
              

            </Box>
          


        </Box>
    )
}

export default ApplyForm