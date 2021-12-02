import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

export default function AddMatchButton() {
    const classes = useStyles();
    
    return (
      <main className={classes.content}>
      <Button component={Link} to="/create_match">
          <Fab variant="extended">
            <AddIcon sx={{ mr: 1 }} />
              New Match
          </Fab>
        </Button>
      </main>
    );
  }