import React, { useState, useRef } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CountrySelector from "./CountrySelector";
import EditorToolbar from "./EditorToolbar";
import FormDialog from "./FormDialogue";

export default function MyProfile() {
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handleUpdateResumeClick = () => {
    // Trigger file input dialog
    fileInputRef.current.click();
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
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will appear to the
              networks.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: "background.body",
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: 100,
                  top: 170,
                  boxShadow: "sm",
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="First name" />
                  <Input
                    size="sm"
                    placeholder="Last name"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input size="sm" placeholder="python developer" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <div>
                <CountrySelector />
              </div>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: 85,
                    top: 180,
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: "flex-column",
                      md: "flex-row",
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="First name" />
                  <Input size="sm" placeholder="Last name" />
                </FormControl>
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input size="sm" defaultValue="UI Developer" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size="sm"
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <div>
              <CountrySelector />
            </div>
          </Stack>
        </Card>

        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
            <Typography level="body-sm">
              Write a short introduction to be displayed on your profile
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <EditorToolbar />
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
            />
            <FormHelperText sx={{ mt: 0.75, fontSize: "xs" }}>
              275 characters left
            </FormHelperText>
          </Stack>
        </Card>

        <Card>
          <Box sx={{ mb: 1 }}>
            <Box
              display={"flex "}
              sx={{ width: "100%", justifyContent: "space-between" }}
            >
              <Typography level="title-md">Education</Typography>
              <Box>
                <FormDialog sx={{ alignSelf: "flex-end" }} />
              </Box>
            </Box>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <Stack direction="row" spacing={2}>
              <FormControl>
                <FormLabel>Degree</FormLabel>
                <Input size="sm" placeholder="Bachelor's in Computer Science" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Institution</FormLabel>
                <Input size="sm" placeholder="University of XYZ" />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={2}>
              <FormControl>
                <FormLabel>Year of Graduation</FormLabel>
                <Input size="sm" type="number" placeholder="2022" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>GPA</FormLabel>
                <Input size="sm" placeholder="3.8" />
              </FormControl>
            </Stack>
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
                    href={URL.createObjectURL(resumeFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Resume
                  </a>
                </Box>
              )}
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CardActions sx={{ pt: 2, pb: 4 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button size="sm" variant="solid">
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
