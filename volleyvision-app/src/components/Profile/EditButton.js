import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

export default function UploadButton() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Button component={Link} to="/edit_profile">
        <Fab variant="extended">
          <EditIcon sx={{ mr: 1 }} />
            Edit Profile
        </Fab>
      </Button>
    </main>
  );
}