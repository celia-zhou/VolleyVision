import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@mui/material/Fab';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Button from '@mui/material/Button';

import {CLIENT_ID,  REDIRECT_URI} from './config';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

// If there's an access token, try an API request.
// Otherwise, start OAuth 2.0 flow.
// function tryYTRequest() {
//   var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
//   if (params && params['access_token']) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET',
//         'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=' +YOUTUBE_API_KEY);
//     xhr.onreadystatechange = function (e) {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.response);
//       } else if (xhr.readyState === 4 && xhr.status === 401) {
//         // Token invalid, so prompt for user permission.
//         oauth2SignIn();
//       }
//     };
//     xhr.send(null);
//   } else {
//     oauth2SignIn();
//   }
// }

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauth2SignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create element to open OAuth 2.0 endpoint in new window.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': CLIENT_ID,
                'redirect_uri': REDIRECT_URI,
                'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                'state': 'try_yt_request',
                'include_granted_scopes': 'true',
                'response_type': 'token'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

export default function AuthorizeButton() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Button variant="contained" color="secondary" onClick={oauth2SignIn}>
        {/* <Fab variant="extended"> */}
          <VerifiedUserIcon sx={{ mr: 1 }} />
            Authorize Youtube Access
        {/* </Fab> */}
      </Button>
    </main>
  );
}