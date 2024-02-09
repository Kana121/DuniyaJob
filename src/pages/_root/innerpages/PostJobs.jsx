import { Box } from '@mui/material'
import React from 'react'
import Header from '../../../components/innerNavbar/Header'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import job from '../../../assets/post_job.png'

const PostJobs = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className=' flex mt-28'>
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', display: 'flex',}} >

          <Box alignSelf={'flex-end'} sx={{width:'50%', height: '100%',}}>
            <img src={job} className=' flex object-cover'/>
          </Box>

        </Box>
        
      </Container>
    </React.Fragment>
    </div>
    </>
    
  )
}

export default PostJobs