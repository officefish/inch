import * as React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import Home from './home.component'
import Login from './login.component'
import Register from './register.component'

import { history } from '../../helpers/history';
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import CssBaseline from '@mui/material/CssBaseline';

import {
    Main,
    DrawerHeader,
    FlexBox 
} from './styled'

import AppBar from './nav/appbar.mui'
import SettingsBar from './nav/Settings.bar'

const App = props => {

  const drawerWidth = 240

  const [open, setOpen] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [showModeratorBoard, setShowModeratorBoard] = React.useState(false)
  const [showAdminBoard, setShowAdminBoard] = React.useState(false)

  React.useEffect(() => {

    history.listen((location) => {
      props.dispatch(clearMessage()) // clear message when changing location
    })
    
    const { user } = props

    if (user) {
      setCurrentUser(user)
      const moderatorRole = user.roles.includes("ROLE_MODERATOR")
      setShowModeratorBoard(moderatorRole)
      const adminRole = user.roles.includes("ROLE_ADMIN")
      setShowAdminBoard(adminRole)
    }

  })

  const handleLogout = () => {
    props.dispatch(logout())
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <BrowserRouter history={history}>
        <FlexBox>
            <CssBaseline />

            <AppBar
            currentUser={currentUser}
            showModeratorBoard={showModeratorBoard}
            showAdminBoard={showAdminBoard}
            isSettingsOpen={open}
            handleDrawerOpen={handleDrawerOpen}
            drawerWidth={drawerWidth}
            />

            <SettingsBar 
            drawerWidth={drawerWidth} 
            handleDrawerClose={handleDrawerClose}
            isOpen={open}
            />
        
            <Main 
            open={open} 
            drawerWidth={drawerWidth}>
                <DrawerHeader />
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Main>
        </FlexBox>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
    const { user } = state.auth;
    return {
      user,
    };
}
  
export default connect(mapStateToProps)(App)

App.propTypes = {
    user:PropTypes.object
}

// <Route exact path="/profile" component={Profile} />
// <Route path="/user" component={UserBoard} />
// <Route path="/mod" component={ModeratorBoard} />
// <Route path="/admin" component={AdminBoard} />