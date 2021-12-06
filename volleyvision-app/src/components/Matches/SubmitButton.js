import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@mui/material/Fab';
import PublishIcon from '@mui/icons-material/Publish';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

export default function SubmitButton() {
    const classes = useStyles();
    
    return (
      <main className={classes.content}>
      <Button variant="contained" color="secondary" type="submit">
          {/* <Fab variant="extended"> */}
            <PublishIcon sx={{ mr: 1 }} />
              Submit
          {/* </Fab> */}
        </Button>
      </main>
    );
  }