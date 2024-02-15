import { Box } from "@mui/material";
import React from "react";
import Header from "../../../components/innerNavbar/Header";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import job from "../../../assets/post.png";
import Footer from "../../../components/Footer";
import amazon from "../../../assets/amazon.png";
import cisco from "../../../assets/cisco.png";
import google from "../../../assets/google_n.png";
import hp from "../../../assets/hp.png";
import ibm from "../../../assets/ibm_n.png";
import infosys from "../../../assets/infosys_n.png";
import intel from "../../../assets/intel.png";
import landt from "../../../assets/landt.png";
import persistant from "../../../assets/persistant_n.png";
import samsung from "../../../assets/samsung_n.png";
import tata from "../../../assets/tata.png";
import unilever from "../../../assets/unilever.png";
import Typography from '@mui/material/Typography';
import Grids from "../../../components/employerprofile/Grids";

const EmployerHome = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className=" sm:flex mt-24 ml-10 mr-10 ">
        <React.Fragment>
          {/*<CssBaseline />*/}
          <Container>
            <Box
              sx={{
                bgcolor: "#cfe8fc",
                height: "50vh",
                display: " flex",
                borderBottomRightRadius: "30px",
                borderTopLeftRadius: "30px",
              }}
            >
              <Box
                alignSelf={" flex-end"}
                sx={{ width: "40%", height: "50vh" }}
              >
                <img src={job} alt='' className=" object-fill" height={"100%"} />
              </Box>
              <Box>
                <h1 className=" text-black text-4xl font-semibold mt-8">
                  Search Candidate For Suitable Job Role
                </h1>
                <h6 className=" text-gray-500 text-xl ml-3 mt-4">
                  Let's hire your next great candidate. Fast.
                </h6>
                <div className=" mt-20 ml-36">
                  <Button
                    variant="contained"
                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  >
                    Get Started
                  </Button>
                </div>
              </Box>
            </Box>
            <Container>
              <div className=" mt-16">
                <Box
                  sx={{ bgcolor: "#e2eaec", height: "25vh", display: " flex" }}
                >
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={tata}
                      alt="logo1"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-7 ml-7"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={hp}
                      alt="logo2"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-4 ml-4 mb-4"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={intel}
                      alt="logo3"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-12 mb-12"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={ibm}
                      alt="logo4"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-10 mb-10"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={infosys}
                      alt="logo5"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-11 mb-11"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={persistant}
                      alt="logo6"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-5 mb-5"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={google}
                      alt="logo6"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-8"
                    />
                  </Box>
                  <Box
                    alignSelf={" flex-end"}
                    sx={{ width: "20%", height: "25vh" }}
                  >
                    <img
                      src={samsung}
                      alt="logo6"
                      height={"80vh"}
                      width={"100vh"}
                      className=" object-fill mt-10"
                    />
                  </Box>
                </Box>
              </div>
            </Container>
            <Container maxWidth="xl">
              <div className=" mt-16">
                {/*<Box
                  sx={{
                    bgcolor: "#000435",
                    height: "70vh",
                    display: " flex",
                  }}
                >*/}
                <Container>
                  <h1 className=" text-white mt-40 text-center text-3xl m-10 font-extrabold "> Why Choose Duniya Job Posting?</h1>
                </Container>
                <Box>
                  
                    
                  <Grids/>
                </Box>
                 
              </div>
            </Container>
          </Container>
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
};

export default EmployerHome;

