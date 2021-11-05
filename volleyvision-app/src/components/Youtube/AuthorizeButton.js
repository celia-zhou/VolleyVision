import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

export default function AuthorizeButton() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Button target="_blank" href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&response_type=code&client_id=810069680059-6j7tgs3klq50o6ddpji9kjvr2a5ckqgf.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fplayer_dashboard">
        <Fab variant="extended">
          <VerifiedUserIcon sx={{ mr: 1 }} />
            Authorize Youtube Access
        </Fab>
      </Button>
    </main>
  );
}