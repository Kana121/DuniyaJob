// import React, { useState, useRef } from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Box from "@mui/joy/Box";
// import Button from "@mui/joy/Button";
// import Divider from "@mui/joy/Divider";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import FormHelperText from "@mui/joy/FormHelperText";
// import Input from "@mui/joy/Input";
// import IconButton from "@mui/joy/IconButton";
// import Textarea from "@mui/joy/Textarea";
// import Stack from "@mui/joy/Stack";
// import Select from "@mui/joy/Select";
// import Option from "@mui/joy/Option";
// import Typography from "@mui/joy/Typography";
// import Card from "@mui/joy/Card";
// import CardActions from "@mui/joy/CardActions";
// import CardOverflow from "@mui/joy/CardOverflow";
// import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
// import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
// import EditRoundedIcon from "@mui/icons-material/EditRounded";
// import CountrySelector from "./CountrySelector";
// import EditorToolbar from "./EditorToolbar";
// import FormDialog from "./FormDialogue";

// export default function MyProfile() {
//   const [resumeFile, setResumeFile] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setResumeFile(file);
//   };

//   const handleUpdateResumeClick = () => {
//     // Trigger file input dialog
//     fileInputRef.current.click();
//   };

//   return (
//     <Box sx={{ flex: 1, width: "100%" }}>
//       <Box
//         sx={{
//           position: "sticky",
//           top: { sm: -100, md: -110 },
//           bgcolor: "background.body",
//           zIndex: 9995,
//         }}
//       >
//         <Box sx={{ px: { xs: 2, md: 6 } }}>
//           <div className=" sticky">
//             <Typography
//               level="h2"
//               component="h1"
//               sx={{ mt: 1, mb: 2, p: "10px" }}
//             >
//               My profile
//             </Typography>
//           </div>
//         </Box>
//       </Box>
//       <Stack
//         spacing={4}
//         sx={{
//           display: "flex",
//           maxWidth: "800px",
//           mx: "auto",
//           px: { xs: 2, md: 6 },
//           py: { xs: 2, md: 3 },
//         }}
//       >
// <Card>
//   <Box sx={{ mb: 1 }}>
//     <Typography level="title-md">Personal info</Typography>
//     <Typography level="body-sm">
//       Customize how your profile information will appear to the
//       networks.
//     </Typography>
//   </Box>
//   <Divider />
//   <Stack
//     direction="row"
//     spacing={3}
//     sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
//   >
//     <Stack direction="column" spacing={1}>
//       <AspectRatio
//         ratio="1"
//         maxHeight={200}
//         sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
//           srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
//           loading="lazy"
//           alt=""
//         />
//       </AspectRatio>
//       <IconButton
//         aria-label="upload new picture"
//         size="sm"
//         variant="outlined"
//         color="neutral"
//         sx={{
//           bgcolor: "background.body",
//           position: "absolute",
//           zIndex: 2,
//           borderRadius: "50%",
//           left: 100,
//           top: 170,
//           boxShadow: "sm",
//         }}
//       >
//         <EditRoundedIcon />
//       </IconButton>
//     </Stack>
//     <Stack spacing={2} sx={{ flexGrow: 1 }}>
//       <Stack spacing={1}>
//         <FormLabel>Name</FormLabel>
//         <FormControl
//           sx={{
//             display: { sm: "flex-column", md: "flex-row" },
//             gap: 2,
//           }}
//         >
//           <Input size="sm" placeholder="First name" />
//           <Input
//             size="sm"
//             placeholder="Last name"
//             sx={{ flexGrow: 1 }}
//           />
//         </FormControl>
//       </Stack>
//       <Stack direction="row" spacing={2}>
//         <FormControl>
//           <FormLabel>Role</FormLabel>
//           <Input size="sm" placeholder="python developer" />
//         </FormControl>
//         <FormControl sx={{ flexGrow: 1 }}>
//           <FormLabel>Email</FormLabel>
//           <Input
//             size="sm"
//             type="email"
//             startDecorator={<EmailRoundedIcon />}
//             placeholder="email"
//             sx={{ flexGrow: 1 }}
//           />
//         </FormControl>
//       </Stack>
//       <div>
//         <CountrySelector />
//       </div>
//     </Stack>
//   </Stack>
//   <Stack
//     direction="column"
//     spacing={2}
//     sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
//   >
//     <Stack direction="row" spacing={2}>
//       <Stack direction="column" spacing={1}>
//         <AspectRatio
//           ratio="1"
//           maxHeight={108}
//           sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
//             srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
//             loading="lazy"
//             alt=""
//           />
//         </AspectRatio>
//         <IconButton
//           aria-label="upload new picture"
//           size="sm"
//           variant="outlined"
//           color="neutral"
//           sx={{
//             bgcolor: "background.body",
//             position: "absolute",
//             zIndex: 2,
//             borderRadius: "50%",
//             left: 85,
//             top: 180,
//             boxShadow: "sm",
//           }}
//         >
//           <EditRoundedIcon />
//         </IconButton>
//       </Stack>
//       <Stack spacing={1} sx={{ flexGrow: 1 }}>
//         <FormLabel>Name</FormLabel>
//         <FormControl
//           sx={{
//             display: {
//               sm: "flex-column",
//               md: "flex-row",
//             },
//             gap: 2,
//           }}
//         >
//           <Input size="sm" placeholder="First name" />
//           <Input size="sm" placeholder="Last name" />
//         </FormControl>
//       </Stack>
//     </Stack>
//     <FormControl>
//       <FormLabel>Role</FormLabel>
//       <Input size="sm" defaultValue="UI Developer" />
//     </FormControl>
//     <FormControl sx={{ flexGrow: 1 }}>
//       <FormLabel>Email</FormLabel>
//       <Input
//         size="sm"
//         type="email"
//         startDecorator={<EmailRoundedIcon />}
//         placeholder="email"
//         sx={{ flexGrow: 1 }}
//       />
//     </FormControl>
//     <div>
//       <CountrySelector />
//     </div>
//   </Stack>
// </Card>

//         <Card>
//           <Box sx={{ mb: 1 }}>
//             <Typography level="title-md">Bio</Typography>
//             <Typography level="body-sm">
//               Write a short introduction to be displayed on your profile
//             </Typography>
//           </Box>
//           <Divider />
//           <Stack spacing={2} sx={{ my: 1 }}>
//             <EditorToolbar />
//             <Textarea
//               size="sm"
//               minRows={4}
//               sx={{ mt: 1.5 }}
//               defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
//             />
//             <FormHelperText sx={{ mt: 0.75, fontSize: "xs" }}>
//               275 characters left
//             </FormHelperText>
//           </Stack>
//         </Card>

//         <Card>
//           <Box sx={{ mb: 1 }}>
//             <Box
//               display={"flex "}
//               sx={{ width: "100%", justifyContent: "space-between" }}
//             >
//               <Typography level="title-md">Education</Typography>
//               <Box>
//                 <FormDialog sx={{ alignSelf: "flex-end" }} />
//               </Box>
//             </Box>
//           </Box>
//           <Divider />
//           <Stack spacing={2} sx={{ my: 1 }}>
//             <Stack direction="row" spacing={2}>
//               <FormControl>
//                 <FormLabel>Degree</FormLabel>
//                 <Input size="sm" placeholder="Bachelor's in Computer Science" />
//               </FormControl>
//               <FormControl sx={{ flexGrow: 1 }}>
//                 <FormLabel>Institution</FormLabel>
//                 <Input size="sm" placeholder="University of XYZ" />
//               </FormControl>
//             </Stack>
//             <Stack direction="row" spacing={2}>
//               <FormControl>
//                 <FormLabel>Year of Graduation</FormLabel>
//                 <Input size="sm" type="number" placeholder="2022" />
//               </FormControl>
//               <FormControl sx={{ flexGrow: 1 }}>
//                 <FormLabel>GPA</FormLabel>
//                 <Input size="sm" placeholder="3.8" />
//               </FormControl>
//             </Stack>
//           </Stack>
//         </Card>

// <Card>
//   <Box sx={{ mb: 1 }}>
//     <Typography level="title-md">Upload Resume</Typography>
//     <Typography level="body-sm">
//       Upload your resume in PDF format.
//     </Typography>
//   </Box>
//   <Divider />
//   <Stack spacing={2} sx={{ my: 1 }}>
//     <FormControl>
//       <input
//         accept=".pdf"
//         style={{ display: "none" }}
//         id="resume-upload"
//         type="file"
//         onChange={handleFileChange}
//         ref={fileInputRef}
//       />
//       <label htmlFor="resume-upload">
//         <Button
//           component="span"
//           size="sm"
//           variant="outlined"
//           color="primary"
//         >
//           Upload Resume (PDF)
//         </Button>
//       </label>
//       <Button
//         size="sm"
//         variant="outlined" // Use the same variant as the "Upload Resume (PDF)" button
//         color="primary" // Use the same color as the "Upload Resume (PDF)" button
//         onClick={handleUpdateResumeClick}
//         sx={{ width: "162px" }} // Adjust the width as needed
//       >
//         Update Resume
//       </Button>
//       {resumeFile && (
//         <Box sx={{ mb: 1 }}>
//           <Typography>{resumeFile.name}</Typography>
//           <a
//             href={URL.createObjectURL(resumeFile)}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Open Resume
//           </a>
//         </Box>
//       )}
//     </FormControl>
//     <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//       <CardActions sx={{ pt: 2, pb: 4 }}>
//         <Button size="sm" variant="outlined" color="neutral">
//           Cancel
//         </Button>
//         <Button size="sm" variant="solid">
//           Save
//         </Button>
//       </CardActions>
//     </Box>
//   </Stack>
// </Card>
//       </Stack>
//     </Box>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CountrySelector from "./CountrySelector";
// import fs from 'fs'
// import * as fs from 'fs';

import profilesData from '../../jsondata/profiles.json';

export default function MyProfile() {
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    id: 1,
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    country: "",
    bio: "",
    degree: "",
    institution: "",
    graduationYear: "",
    gpa: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert file content to Base64
        const base64String = reader.result;
        // Save the Base64 string representation of the file to localStorage
        localStorage.setItem("resumeFile", base64String);
        // Update your component state or context as needed
        // Assuming there's a setState for the resume file, e.g., setResumeFile
        setResumeFile({
          name: file.name,
          type: file.type,
          size: file.size,
          base64: base64String,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedResume = localStorage.getItem("resumeFile");
    if (savedResume) {
      // Assuming the savedResume is a Base64 string of the file
      // Parse or use this information as needed, e.g., displaying the file name or allowing it to be downloaded
      // This example assumes a simplified file object structure for demonstration
      const fileObj = {
        // You might want to store more file info in localStorage for a complete solution
        base64: savedResume,
        name: "Resume.pdf", // Placeholder, ideally you save the file name in localStorage too
      };
      setResumeFile(fileObj);
    }
  }, []);

  useEffect(() => {
    const fileInfoString = localStorage.getItem('uploadedPDF');
    if (fileInfoString) {
      const fileInfo = JSON.parse(fileInfoString);
      setResumeFile(fileInfo); // Update your state with the fetched file info
    }
  }, []);

  const handleUpdateResumeClick = () => {
    // Trigger file input dialog
    fileInputRef.current.click();
  };

  const handleSaveClick = () => {
    // Generate unique ID for the profile
    const newId = formData.id;

    // Add the ID to the form data
    setFormData((prevData) => ({
      ...prevData,
      id: newId + 1, // Increment ID for the next profile
    }));

    // Save profile data to local storage
    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    localStorage.setItem("profiles", JSON.stringify([...profiles, formData]));

    const newProfileData = {
      id: newId, // Use the new ID
      ...formData, // Add all form data
    };
    
    // const updatedProfilesData = [...profilesData, newProfileData];
  
    // const fs = require('file-system')
    // fs.writeFile('/src/jsondata/profiles.json', JSON.stringify(updatedProfilesData, null, 2));
  
    // Reset form data
    setFormData({
      id: newId + 1, // Increment ID for the next profile
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      country: "",
      bio: "",
      degree: "",
      institution: "",
      graduationYear: "",
      gpa: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -100, md: -110 },
          bgcolor: "background.body",
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <div className=" sticky">
            <Typography
              level="h2"
              component="h1"
              sx={{ mt: 1, mb: 2, p: "10px" }}
            >
              My profile
            </Typography>
          </div>
        </Box>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card sx={{ px: 2, py: { xs: 2, md: 3 } }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear to the
              networks.
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <AspectRatio
              ratio="1"
              maxHeight={200}
              sx={{
                flex: 1,
                minWidth: 120,
                borderRadius: "100%",
                mr: { xs: 0, md: 2 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <Box sx={{ flexGrow: 1 }}>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>First Name</FormLabel>
                <Input
                  size="sm"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  size="sm"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Role</FormLabel>
                <Input
                  size="sm"
                  placeholder="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Country</FormLabel>
                <Input
                  size="sm"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  // onClick={handleSub}
                />
                {/* <CountrySelector/> */}
              </FormControl>
            </Box>
          </Box>
        </Card>

        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            {/* Bio */}
            <FormControl>
              <Textarea
                size="sm"
                placeholder="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
        </Card>

        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Education</Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            {/* Degree */}
            <FormControl>
              <FormLabel>Degree</FormLabel>
              <Input
                size="sm"
                placeholder="Degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </FormControl>

            {/* Institution */}
            <FormControl>
              <FormLabel>Institution</FormLabel>
              <Input
                size="sm"
                placeholder="Institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
              />
            </FormControl>

            {/* Graduation Year */}
            <FormControl>
              <FormLabel>Graduation Year</FormLabel>
              <Input
                size="sm"
                type="number"
                placeholder="Graduation Year"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
              />
            </FormControl>

            {/* GPA */}
            <FormControl>
              <FormLabel>GPA</FormLabel>
              <Input
                size="sm"
                type="number"
                placeholder="GPA"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
        </Card>

        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Upload Resume</Typography>
            <Typography level="body-sm">
              Upload your resume in PDF format.
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <FormControl>
              <input
                accept=".pdf"
                style={{ display: "none" }}
                id="resume-upload"
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <label htmlFor="resume-upload">
                <Button
                  component="span"
                  size="sm"
                  variant="outlined"
                  color="primary"
                >
                  Upload Resume (PDF)
                </Button>
              </label>
              <Button
                size="sm"
                variant="outlined" // Use the same variant as the "Upload Resume (PDF)" button
                color="primary" // Use the same color as the "Upload Resume (PDF)" button
                onClick={handleUpdateResumeClick}
                sx={{ width: "162px" }} // Adjust the width as needed
              >
                Update Resume
              </Button>
              {resumeFile && (
                <Box sx={{ mb: 1 }}>
                  <Typography>{resumeFile.name}</Typography>
                  <a
                    href={resumeFile.base64} // Use the Base64 data URL directly
                    download={resumeFile.name} // Suggest a filename for downloading
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Resume
                  </a>
                </Box>
              )}
            </FormControl>
            {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CardActions sx={{ pt: 2, pb: 4 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button size="sm" variant="solid">
                  Save
                </Button>
              </CardActions>
            </Box> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" }, // Center on small devices, align end on medium and larger devices
                mt: 2,
                px: { xs: 2, md: 0 }, // Adjust horizontal padding for small devices
              }}
            >
              <CardActions sx={{ pt: 2, pb: 4, width: "80%" }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button href="/check" size="sm" variant="solid" onClick={handleSaveClick}>
                  Save
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}

