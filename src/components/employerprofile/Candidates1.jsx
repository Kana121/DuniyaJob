import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

const CheckProfile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Load profiles from local storage
    const loadedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(loadedProfiles);
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography level="h4" component="h2" sx={{ mb: 2 }}>
        Profiles
      </Typography>
      {profiles.map((profile) => (
        <Card key={profile.id} sx={{ mb: 2, padding: '20px' }}>
          <Typography level="h6">ID: {profile.id}</Typography>
          <Typography>First Name: {profile.firstName}</Typography>
          <Typography>Last Name: {profile.lastName}</Typography>
          <Typography>Email: {profile.email}</Typography>
          <Typography>Role: {profile.role}</Typography>
          <Typography>Country: {profile.country}</Typography>
          <Typography>Bio: {profile.bio}</Typography>
          <Typography>Degree: {profile.degree}</Typography>
          <Typography>Institution: {profile.institution}</Typography>
          <Typography>Graduation Year: {profile.graduationYear}</Typography>
          <Typography>GPA: {profile.gpa}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default CheckProfile;
