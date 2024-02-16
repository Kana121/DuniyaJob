// import React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import IconButton from '@mui/joy/IconButton';
// import LinearProgress from '@mui/joy/LinearProgress';
// import Typography from '@mui/joy/Typography';
// // import { CardProps } from '@mui/joy/Card'; // Assuming CardProps is imported from '@mui/joy/Card'

// import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
// import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
// import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

// export default function FileUpload(props) {
//   const { icon, fileName, fileSize, progress, sx, ...other } = props;
//   return (
//     <Card
//       variant="outlined"
//       orientation="horizontal"
//       {...other}
//       sx={[
//         {
//           gap: 1.5,
//           alignItems: 'flex-start',
//         },
//         ...(Array.isArray(sx) ? sx : [sx]),
//       ]}
//     >
//       <AspectRatio
//         ratio="1"
//         variant="soft"
//         color="neutral"
//         sx={{
//           minWidth: 32,
//           borderRadius: '50%',
//           '--Icon-fontSize': '16px',
//         }}
//       >
//         <div>{icon ?? <InsertDriveFileRoundedIcon />}</div>
//       </AspectRatio>
//       <CardContent>
//         <Typography fontSize="sm">{fileName}</Typography>
//         <Typography level="body-xs">{fileSize}</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <LinearProgress
//             color="neutral"
//             value={progress}
//             determinate
//             sx={[
//               {
//                 ...(progress >= 100 && {
//                   color: 'var(--joy-palette-success-solidBg)',
//                 }),
//               },
//             ]}
//           />
//           <Typography fontSize="xs">{progress}%</Typography>
//         </Box>
//       </CardContent>
//       {progress >= 100 ? (
//         <AspectRatio
//           ratio="1"
//           variant="solid"
//           color="success"
//           sx={{
//             minWidth: 20,
//             borderRadius: '50%',
//             '--Icon-fontSize': '14px',
//           }}
//         >
//           <div>
//             <CheckRoundedIcon />
//           </div>
//         </AspectRatio>
//       ) : (
//         <IconButton variant="plain" color="danger" size="sm" sx={{ mt: -1, mr: -1 }}>
//           <RemoveCircleOutlineRoundedIcon />
//         </IconButton>
//       )}
//     </Card>
//   );
// }

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

export default function FileUpload(props) {
  const { icon, fileName, fileSize, progress = 0, sx, ...other } = props;

  return (
    <Card variant="outlined" {...other} sx={sx}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <AspectRatio
          ratio={1}
          variant="circular"
          sx={{
            minWidth: 32,
            bgcolor: 'primary.main',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon || <InsertDriveFileRoundedIcon />}
        </AspectRatio>
        <div style={{ marginLeft: '8px' }}>
          <Typography variant="subtitle1">{fileName}</Typography>
          <Typography variant="body2">{fileSize}</Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color={progress >= 100 ? 'success' : 'primary'}
            sx={{ width: '100%', mt: '4px' }}
          />
          <Typography variant="caption">{progress}%</Typography>
        </div>
        {progress >= 100 ? (
          <AspectRatio
            ratio={1}
            variant="circular"
            sx={{
              minWidth: 20,
              bgcolor: 'success.main',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '8px',
            }}
          >
            <CheckRoundedIcon />
          </AspectRatio>
        ) : (
          <IconButton
            size="small"
            sx={{
              ml: 'auto',
            }}
          >
            <RemoveCircleOutlineRoundedIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
}
