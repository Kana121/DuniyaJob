import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import gridData from './gridtext.json';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {gridData.map((gridData, index) => (
            <Grid key={index} item>
              <Paper variant='elivation'
                sx={{
                  height: 350,
                  width: 350,
                  borderRadius: '7vh',
                  opacity: '80%',

                  ":hover":{boxShadow: 15, opacity: '100%'},
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : 'lightblue',
                  
                }}
              >
                <h1 className=' text-center text-2xl font-extrabold text-black pt-20'>{gridData.name}</h1>
                <p className=' text-black text-center pt-7 pl-6 pr-6'>{gridData.description}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        
        {/* <HighlightedCode code={jsx} language="jsx" /> */}
      </Grid>
    </Grid>
  );
}