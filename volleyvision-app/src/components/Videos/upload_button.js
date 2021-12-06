import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@mui/material/Fab'
import UploadIcon from '@mui/icons-material/Upload'
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

// function uploadVideo() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST',
//         'https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&access_token=' + sessionStorage.getItem('access_token'));
//   xhr.onreadystatechange = function (e) {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var jsonResp = JSON.parse(xhr.response);
//         console.log(xhr.response);
//         sessionStorage.setItem('uploadID', jsonResp.items[0].contentDetails.relatedPlaylists.uploads);
//       }
//       else if (xhr.readyState === 4 && xhr.status === 403) {
//         // Token invalid, so prompt for user permission.
//         alert("Access denied. Must authorize access to a Youtube account.");
//       }
//   };
//   xhr.send(null);
// }

export default function UploadButton() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Button variant="contained" color="secondary" target="_blank" href="https://www.youtube.com">
        {/* <Fab variant="extended"> */}
          <UploadIcon sx={{ mr: 1 }} />
            Upload
        {/* </Fab> */}
      </Button>
      {/* <Button onClick={uploadVideo}>
        <Fab variant="extended">
          <UploadIcon sx={{ mr: 1 }} />
            Upload
        </Fab>
      </Button> */}
    </main>
  );
}