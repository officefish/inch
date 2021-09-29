import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display:'flex',
      justifyContent:'space-between'
    }
}))

const App = () => {
  const classes = useStyles();

  return <AppBar
      position="static"
      >
        <div className={classes.container}>
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Inch
            </Typography>
        </Toolbar>

        <Toolbar>
        <Button color="inherit">Login</Button>
        </Toolbar>
        </div>
            
    </AppBar>
  
}
export default App