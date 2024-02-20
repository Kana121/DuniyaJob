import React, { useState } from 'react';
import { TextField, Box, List, ListItem, ListItemText } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import Jobs from "../../jsondata/sampleJobs.json";
import './Home.css';

const SearchSuggestions = () => {
    const [filteredJobs, setFilteredJobs] = useState(Jobs.jobs);

    const handleJobSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = Jobs.jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(searchTerm)
        );
        setFilteredJobs(filtered);
    };

    const handleJobClick = (job) => {
        document.getElementById("JobDescriptionBox").innerHTML = `
        <h4 class='BoldClass'>Job Title: </h4><label class='InfoClass'>${job.title}</label>
        <h4 class='BoldClass'>Job Description: </h4><p class='InfoClass'>${job.description}</p>
        <h4 class='BoldClass'>CTC (Approx per Annum): </h4><label class='InfoClass'>${job.average_salary}</label>
        <h4 class='BoldClass'>Required Experience: </h4><label class='InfoClass'>${job.required_experience}</label>
        <h4 class='BoldClass'>Skills Required: </h4><label class='InfoClass'>${job.skills_required.join(", ")}</label>
        <h4 class='BoldClass'>Education Required: </h4><label class='InfoClass'>${job.education_required}</label>
      `;
    };

    return (
        <Box display="flex" borderRadius='md' marginTop='30px' border="double #CCCC" textAlign='left' className="bg-white text-black overflow-y-scroll ">
            <Box width='35%' borderRight='double #CCCC' id="JobsListUL" height='310px' overflowY='scroll' position='relative' className='overflow-y-scroll'>
                <Box display="flex" width="100%" position='sticky' top='0' left='0' paddingLeft='8px' justifyContent='flex-start' alignItems='center' zIndex='1' boxShadow='0px 2px 2px 0px #CCCC' backgroundColor='white '>
                    <TextField type="text" fullWidth placeholder='Search job here...' onChange={handleJobSearch} className='rounded-2xl' />
                    <BsSearch className='icon jobSearchIcon' />
                </Box>
                <List id="JobsListUL" className='JobsListUL'>
                    {filteredJobs.map((job, index) => (
                        <ListItem key={index} onClick={() => handleJobClick(job)} button>
                            <ListItemText primary={job.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box width='65%' id='JobDescriptionBox' height='310px' overflowY='scroll' className='overflow-y-scroll' padding='5px 15px'></Box>
        </Box>
    );
}

export default SearchSuggestions;
