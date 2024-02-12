import { Box } from '@mui/material'
import React from 'react'
import Header from '../../../components/innerNavbar/Header'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import job from '../../../assets/post_job1.jpg'

const PostJobs = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className=' flex mt-24 ml-10 mr-10'>
    <React.Fragment>
      {/*<CssBaseline />*/}
      
        <Box className=' container' sx={{ bgcolor: '#cfe8fc', height: '50vh',}} >
          <Box alignSelf={' flex-end'} sx={{width:'50%', height: '50vh',}}>
            <img src={job} className=' object-cover' height={'100vh'}/>
          </Box>
        </Box>
        
     
    </React.Fragment>
    </div>
    </>
    
  )
}

export default PostJobs