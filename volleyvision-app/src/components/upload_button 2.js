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

export default function UploadButton() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Button target="_blank" href="https://www.youtube.com">
        <Fab variant="extended">
          <UploadIcon sx={{ mr: 1 }} />
            Upload
        </Fab>
      </Button>
    </main>
  );
} 