import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LogoutIcon from '@material-ui/icons/ExitToApp'
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Image, Alert } from 'react-bootstrap';
import { useAuth } from '../../AccountAuth/authcontext';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CardMedia from '@mui/material/CardMedia';
import logo from '../../../images/logo-clear.png';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { logout } = useAuth()

  const [error, setError] = useState("")
  const { currentUser } = useAuth()
  const history = useHistory()

  async function handleLogOut (e) {
    e.preventDefault()
    setError('')

    try {
      await logout()
      history.push("/login")
    } catch {
      setError('Failed to logout')
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
            <ListItem button component={Link} to="/player_dashboard">
                <ListItemIcon><DashboardIcon/></ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItem>

            <ListItem button component={Link} to="/statistics">
                <ListItemIcon><FolderIcon/></ListItemIcon>
                <ListItemText>Statistics</ListItemText>
            </ListItem>

            <ListItem button component={Link} to="/generate_statistics">
                <ListItemIcon><AssessmentIcon/></ListItemIcon>
                <ListItemText>Generate Stats</ListItemText>
            </ListItem>

            <ListItem button component={Link} to="/videos">
                <ListItemIcon><VideoLibraryIcon/></ListItemIcon>
                <ListItemText>Videos</ListItemText>
            </ListItem>

        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/edit_profile">
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
          <ListItem button component={Link} onClick={ handleLogOut } >
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText>Log Out</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText><br />
            {error && <Alert variant="danger">{error}</Alert>}
            <br /><br /><br /><br /><br />
            <p>Welcome,<br/>
            {currentUser && currentUser.email}</p>
            </ListItemText>
          </ListItem>
          <CardMedia
         
          image={logo}
        />
        </List>
    </Box>
  );

  return (
  
    <div>
    <MenuIcon></MenuIcon>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor='left'
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}