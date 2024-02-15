// import { Box } from "@mui/material";
// import React from "react";
// import Header from "../../../components/innerNavbar/Header";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import job from "../../../assets/post.png";
// import Footer from "../../../components/Footer";
// import amazon from "../../../assets/amazon.png";
// import cisco from "../../../assets/cisco.png";
// import google from "../../../assets/google_n.png";
// import hp from "../../../assets/hp.png";
// import ibm from "../../../assets/ibm_n.png";
// import infosys from "../../../assets/infosys_n.png";
// import intel from "../../../assets/intel.png";
// import landt from "../../../assets/landt.png";
// import persistant from "../../../assets/persistant_n.png";
// import samsung from "../../../assets/samsung_n.png";
// import tata from "../../../assets/tata.png";
// import unilever from "../../../assets/unilever.png";
// import Typography from "@mui/material/Typography";
// import Grids from "../../../components/employerprofile/Grids";

// const EmployerHome = () => {
//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div className=" sm:flex mt-24 ml-10 mr-10 ">
//         <React.Fragment>
//           {/*<CssBaseline />*/}
//           <Container>
//             <Box
//               sx={{
//                 bgcolor: "#cfe8fc",
//                 height: "50vh",
//                 display: " flex",
//                 borderBottomRightRadius: "30px",
//                 borderTopLeftRadius: "30px",
//                 boxShadow:15,
//                 ":hover":{boxShadow:22}
//               }}
//             >
//               <Box
//                 alignSelf={" flex-end"}
//                 sx={{ width: "40%", height: "50vh" }}
//               >
//                 <img src={job} className=" object-fill" height={"100%"} />
//               </Box>
//               <Box>
//                 <h1 className=" text-black text-4xl font-semibold mt-8">
//                   Search Candidate For Suitable Job Role
//                 </h1>
//                 <h6 className=" text-gray-500 text-xl ml-3 mt-4">
//                   Let's hire your next great candidate. Fast.
//                 </h6>
//                 <div className=" mt-20 ml-36">
//                   <Button
//                   href="/Edit-profile"
//                     variant="contained"
//                     className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
//                   >
//                     Get Started
//                   </Button>
//                 </div>
//               </Box>
//             </Box>
//             <Container>
//               <div className=" mt-16">
//                 <Box
//                   sx={{ bgcolor: "#e2eaec",borderRadius:'20px',boxShadow:15, display: " flex", ":hover":{boxShadow:22} }}
//                 >
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={tata}
//                       alt="logo1"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-7 ml-7"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={hp}
//                       alt="logo2"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-4 ml-4 mb-4"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={intel}
//                       alt="logo3"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-12 mb-12"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={ibm}
//                       alt="logo4"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-10 mb-10"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={infosys}
//                       alt="logo5"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-11 mb-11"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={persistant}
//                       alt="logo6"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-5 mb-5"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={google}
//                       alt="logo6"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-8"
//                     />
//                   </Box>
//                   <Box
//                     alignSelf={" flex-end"}
//                     sx={{ width: "20%", height: "25vh" }}
//                   >
//                     <img
//                       src={samsung}
//                       alt="logo6"
//                       height={"80vh"}
//                       width={"100vh"}
//                       className=" object-fill mt-10"
//                     />
//                   </Box>
//                 </Box>
//               </div>
//             </Container>
//             <Container maxWidth="xl">
//               <div className=" mt-16">
//                 {/*<Box
//                   sx={{
//                     bgcolor: "#000435",
//                     height: "70vh",
//                     display: " flex",
//                   }}
//                 >*/}
//                 <Container>
//                   <h1 className=" text-white mt-40 text-center text-3xl m-10 font-extrabold ">
//                     {" "}
//                     Why Choose Duniya Job Posting?
//                   </h1>
//                 </Container>
//                 <Box>
//                   <Grids />
//                 </Box>
//               </div>
//             </Container>
//           </Container>
//         </React.Fragment>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default EmployerHome;



// import { Box, Grid } from "@mui/material";
// import React from "react";
// import Header from "../../../components/innerNavbar/Header";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import job from "../../../assets/post.png";
// import Footer from "../../../components/Footer";
// import amazon from "../../../assets/amazon.png";
// import cisco from "../../../assets/cisco.png";
// import google from "../../../assets/google_n.png";
// import hp from "../../../assets/hp.png";
// import ibm from "../../../assets/ibm_n.png";
// import infosys from "../../../assets/infosys_n.png";
// import intel from "../../../assets/intel.png";
// import landt from "../../../assets/landt.png";
// import persistant from "../../../assets/persistant_n.png";
// import samsung from "../../../assets/samsung_n.png";
// import tata from "../../../assets/tata.png";
// import unilever from "../../../assets/unilever.png";
// import Typography from "@mui/material/Typography";
// import Grids from "../../../components/employerprofile/Grids";

// const EmployerHome = () => {
//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div className="sm:flex mt-24 ml-10 mr-10 ">
//         <React.Fragment>
//           <Container>
//             <Box
//               sx={{
//                 bgcolor: "#cfe8fc",
//                 height: "50vh",
//                 display: "flex",
//                 borderBottomRightRadius: "30px",
//                 borderTopLeftRadius: "30px",
//                 boxShadow: 15,
//               }}
//             >
//               <Box
//                 alignSelf={"flex-end"}
//                 sx={{ width: "100%", height: ["30vh", "50vh"], textAlign: "center" }}
//               >
//                 <img src={job} className="object-fill" height={"100%"} />
//               </Box>
//               <Box sx={{ flex: 1, textAlign: ["center", "left"] }}>
//                 <Typography variant="h4" mt={[4, 0]}>
//                   Search Candidate For Suitable Job Role
//                 </Typography>
//                 <Typography variant="subtitle1" mt={2} mb={4}>
//                   Let's hire your next great candidate. Fast.
//                 </Typography>
//                 <Button
//                   href="/Edit-profile"
//                   variant="contained"
//                   className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
//                 >
//                   Get Started
//                 </Button>
//               </Box>
//             </Box>
//             <Box sx={{ bgcolor: "#e2eaec", borderRadius: '20px', boxShadow: 15, mt: 4, p: 2 }}>
//               <Grid container spacing={2}>
//                 {[tata, hp, intel, ibm, infosys, persistant, google, samsung].map((logo, index) => (
//                   <Grid item xs={6} sm={3} key={index}>
//                     <img src={logo} alt={`logo${index}`} className="object-fill mt-4 mb-4" />
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//             <Container maxWidth="xl">
//               <Typography variant="h3" align="center" mt={8} mb={4} fontWeight="bold">
//                 Why Choose Duniya Job Posting?
//               </Typography>
//               <Grids />
//             </Container>
//           </Container>
//         </React.Fragment>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default EmployerHome;



// import { Box, Grid } from "@mui/material";
// import React from "react";
// import Header from "../../../components/innerNavbar/Header";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import job from "../../../assets/post.png";
// import Footer from "../../../components/Footer";
// import amazon from "../../../assets/amazon.png";
// import cisco from "../../../assets/cisco.png";
// import google from "../../../assets/google_n.png";
// import hp from "../../../assets/hp.png";
// import ibm from "../../../assets/ibm_n.png";
// import infosys from "../../../assets/infosys_n.png";
// import intel from "../../../assets/intel.png";
// import landt from "../../../assets/landt.png";
// import persistant from "../../../assets/persistant_n.png";
// import samsung from "../../../assets/samsung_n.png";
// import tata from "../../../assets/tata.png";
// import unilever from "../../../assets/unilever.png";
// import Typography from "@mui/material/Typography";
// import Grids from "../../../components/employerprofile/Grids";

// const EmployerHome = () => {
//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div className="sm:flex mt-24 ml-10 mr-10 ">
//         <React.Fragment>
//           <Container>
//             <Box
//               sx={{
//                 bgcolor: "#cfe8fc",
//                 height: "50vh",
//                 display: "flex",
//                 borderBottomRightRadius: "30px",
//                 borderTopLeftRadius: "30px",
//                 boxShadow: 15,
//               }}
//             >
//               <Box
//                 alignSelf={"flex-end"}
//                 sx={{ width: "100%", height: ["30vh", "50vh"], textAlign: "center" }}
//               >
//                 <img src={job} className="object-fill" height={"100%"} />
//               </Box>
//               <Box sx={{ flex: 1, textAlign: ["center", "left"] }}>
//                 <Typography variant="h4" mt={[4, 0]}>
//                   Search Candidate For Suitable Job Role
//                 </Typography>
//                 <Typography variant="subtitle1" mt={2} mb={4}>
//                   Let's hire your next great candidate. Fast.
//                 </Typography>
//                 <Button
//                   href="/Edit-profile"
//                   variant="contained"
//                   className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
//                 >
//                   Get Started
//                 </Button>
//               </Box>
//             </Box>
//             <Box sx={{ bgcolor: "#e2eaec", borderRadius: '20px', boxShadow: 15, mt: 4, p: 2 }}>
//               <Grid container spacing={2}>
//                 {[tata, hp, intel, ibm, infosys, persistant, google, samsung].map((logo, index) => (
//                   <Grid item xs={6} sm={3} key={index}>
//                     <img src={logo} alt={`logo${index}`} className="object-fill mt-4 mb-4" style={{ maxWidth: "100%", height: "auto", width: "100%" }} />
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//             <Container maxWidth="xl">
//               <Typography variant="h3" align="center" mt={8} mb={4} fontWeight="bold">
//                 Why Choose Duniya Job Posting?
//               </Typography>
//               <Grids />
//             </Container>
//           </Container>
//         </React.Fragment>
//       </div>
//       <Footer />
//     </>
//   );
// };

//  export default EmployerHome;
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
import Typography from "@mui/material/Typography";
import Grids from "../../../components/employerprofile/Grids";

const EmployerHome = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-24 ml-10 mr-10">
        <Container>
          <div className="bg-blue-100 p-8 rounded-xl md:flex items-center">
            <div className="md:w-2/5 md:mr-8">
              <img src={job} className="w-full" alt="job" />
            </div>
            <div className="md:w-3/5 mt-4 md:mt-0">
              <h1 className="text-black text-4xl font-semibold">
                Search Candidate For Suitable Job Role
              </h1>
              <h6 className="text-gray-500 text-xl mt-4">
                Let's hire your next great candidate. Fast.
              </h6>
              <div className="mt-8">
                <Button
                  href="/Edit-profile"
                  variant="contained"
                  className="bg-blue-500 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="mt-16 ">
            <div className="grid grid-cols-2  md:grid-cols-4 gap-4 bg-gray-200 p-4 rounded-xl">
              <img src={tata} alt="Tata" className="w-full xl:w-[40%] xl:h-[70%]  md:w-[40%] md:h-[70%]" />
              <img src={hp} alt="HP" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
              <img src={intel} alt="Intel" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
              <img src={ibm} alt="IBM" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
              <img src={infosys} alt="Infosys" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
              <img src={persistant} alt="Persistant" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
              <img src={google} alt="Google" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
              <img src={samsung} alt="Samsung" className="w-full xl:w-[40%] xl:h-[70%] md:w-[40%] md:h-[70%]" />
            </div>
          </div>
        </Container>

        <Container maxWidth="xl">
          <div className="mt-16">
            <Typography variant="h2" className="text-white text-center mt-10">
              Why Choose Duniya Job Posting?
            </Typography>
            <Grids />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default EmployerHome;

