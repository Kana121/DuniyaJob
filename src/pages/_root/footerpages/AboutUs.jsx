import React from 'react'
import Footer from "../../../components/Footer";
import CEOImage from "../../../assets/ceo.jpeg"; 
import CRICKET from "../../../assets/cricket.jpeg"; 
import Team from "../../../assets/team.jpeg"; 
import Awards from "../../../assets/awards.jpeg"; 
import { Box, Typography } from '@mui/material';
// import '../../../styles/About.css';

const AboutUs = () => {
  return (
    <div className='about'>
      <Box className='container' style={{height:2840}}>
      <Typography variant="h2" style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>
        About Us
      </Typography>
      <Typography variant="h3" style={{ color: 'blue', textAlign: 'center', marginTop: 40, fontWeight: 'bold', fontSize: 28 }}>
        Together we make hiring better
      </Typography>
      <Typography className='head'   variant="h4" style={{ color: 'black', marginTop: 40, fontSize: 16, width: 1300, marginLeft: -300, marginRight: 'auto' }}>
        We are an AI-based job board platform that allows businesses to directly source and hire global talent. We offer companies a streamlined hiring solution, allowing them to focus on growth and leverage business operations in the long run. For Job seekers, we connect them with leading employers and help them find the best fit they deserve.
        <div style={{textAlign:'center', color: 'blue' }}>
          By applying the latest technologies, DuniyaJobs gives organizations excellent results in recruitment.
        </div>
      </Typography>

      <div className='connect' style={{ display: 'flex', marginTop: 100, marginLeft:50}}>
      <img src={CEOImage} alt='CEO' style={{ marginRight: 20, borderRadius: '50%', marginLeft:-250, height:430, width:450}} />
        <div>
          <Typography variant="h4" style={{ fontWeight: 'bold', color:'blue', fontSize:28, width:400, marginTop:100, marginLeft:100}}>Name Of The CEO</Typography>
          <div className='heading'>
            <Typography variant="h6" style={{color:'red', marginLeft:100,marginTop:20}}>Praveen Madirre</Typography>
            <Typography variant="body1" style={{width:600, marginTop:40, marginLeft:100, fontSize:15}}>
              We need to innovate to be part of a new digital age. The future belongs to businesses that use technology at the centre of their outlook. This is a revolution, as it impacts society and is becoming today’s reality for millions of workers and companies around the world, reflecting the best of the digital and physical worlds".
            </Typography>
          </div>
        </div>
      </div>
      <Typography style={{marginTop:100, color:'blue',textAlign:'center', fontSize:28, fontWeight:'bold'}}>
      Our Clients
      </Typography>
      <Typography style={{marginTop:20, color:'red', textAlign:'center'}}>Partnering with the best</Typography>
      <Typography style={{marginTop:10, color:'black', width:1100, marginLeft:-200, fontSize:15}}>We are very fortunate to have some of the top leading companies such as IBM, Accenture, Oracle, TATA, NTT Data, Path Infotech and TES-Amm using our services, saving an average of 80% on total recruitment cost. If you are looking for immediate results in your recruitment process...
      <div className='side' style={{marginLeft:350, background:'red', width:460, marginTop:5, color:'white'}}>
       then DuniyaJob is an excellent platform to be registered on.
       </div>
        </Typography>
        <div className='connect' style={{ display: 'flex', marginTop: 100, marginLeft:50}}>
      <img src={CRICKET} alt='Sports' style={{ marginRight: 20, borderRadius: '10%', marginLeft:-250, height:430, width:450}} />
        <div>
          <Typography variant="h4" style={{ fontWeight: 'bold', color:'blue', fontSize:28, width:400, marginTop:100, marginLeft:100}}>Sponsorship</Typography>
          <div className='heading'>
            <Typography variant="h6" style={{color:'red', marginLeft:100,marginTop:20}}>Proud to be supporting Irish Cricket</Typography>
            <Typography variant="body1" style={{width:600, marginTop:40, marginLeft:100, fontSize:15}}>
            Irish cricket continues to make great strides in its development on the international stage, and on the domestic front interest and participation have never been greater. Essential to this continued growth is a First-class competition and Techfynder are very proud to support this through our sponsorship.
            </Typography>
            <div style={{ marginLeft: 200, color: 'red' }}>
          <a href='https://www.cricketireland.ie/'>Cricket Ireland</a> 
        </div>
          </div>
        </div>
      </div>
      <div className='connect' style={{ display: 'flex', marginTop: 100, marginLeft:50}}>
      <img src={Team} alt='OUR TEAM' style={{ marginRight: 20, borderRadius: '10%', marginLeft:-250, height:430, width:450}} />
        <div>
          <Typography variant="h4" style={{ fontWeight: 'bold', color:'blue', fontSize:28, width:400, marginTop:100, marginLeft:100}}>Our Team</Typography>
          <div className='heading'>
            <Typography variant="h6" style={{color:'red', marginLeft:100,marginTop:20}}>The people that make it happen</Typography>
            <Typography variant="body1" style={{width:600, marginTop:40, marginLeft:100, fontSize:15}}>
            Today, Techfynder is recognised for its adaptability, speed, ﬂexibility and high success rates in ﬁnding qualiﬁed and experienced talents for all business needs. We have grown steadily, and now have over 200 talented individuals who work tremendously hard to make it happen. 
            </Typography>
            <div style={{ marginLeft: 200, color: 'red' }}>
          <a href='https://www.cricketireland.ie/'>View our full team. </a> 
        </div>
          </div>
        </div>
      </div>
     <div className='content' style={{width:1530 , background:'pink', height:380, marginLeft:-400, display:'flex', marginTop:10}}>
   <div className='vision' style={{marginLeft:150}}>
    <Typography style={{paddingTop:80}}>Vision</Typography>
    <Typography style={{width:300, paddingTop:40}}>To be a global leader in the HR Tech industry, providing an economical and quality-driven service for businesses to source professional talent.</Typography>
   </div>
   <div className='Mission' style={{marginLeft:150}}>
    <Typography style={{paddingTop:80}}>Mission</Typography>
    <Typography style={{width:300, paddingTop:40}}>Our mission is to connect global job seekers with global businesses with employment opportunities in all sectors for all kind of people.</Typography>
   </div>
   <div className='Mission' style={{marginLeft:200}}>
    <Typography style={{paddingTop:80}}>Purpose</Typography>
    <Typography style={{width:300, paddingTop:40}}>To provide a direct solution for businesses to hire global talent and for job seekers to match with the right employer for remote and onsite projects.</Typography>
   </div>
     </div>
     <div className='Awards' style={{ display: 'flex', background: 'white', marginLeft: -405, width: 1530, height:450 }}>
      <div>
        <img src={Awards} alt='awards' style={{ marginRight: 20, borderRadius: '10%', marginLeft: 200, height: 370, width: 350, marginTop: 20 }} />
      </div>
      <div>
        <Typography variant="h4" style={{ background: 'white', marginTop:100, marginLeft:30}}>
          Awards & Achievements
        </Typography>
        <div>
          <Typography style={{marginTop:30, marginLeft:30}}>
            National Startup Awards 2020 - Silver for Top Tech Startup of the Year
          </Typography>
          <Typography style={{marginTop:30, marginLeft:30}}>
          Certificate of Appreciation 2021-Business Connect Magazine
          </Typography>
          <Typography style={{marginTop:30, marginLeft:30}}>
          Think Business-Shortlisted as one of the 24 companies positioning for a future beyond Covid-19
          </Typography>
        </div>
      </div>
    </div>
</Box>
<Footer/>
</div>
  )
}

export default AboutUs
