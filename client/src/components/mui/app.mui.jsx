import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Home from './home.component'
import Login from './login.component'

import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import TwoSidesBar from '../../ui/inch/bar/TwoSidesBar'
import LeftToolbar from './nav/LeftToolbar';
import RightToolbar from './nav/RightToolbar';

import { history } from '../../helpers/history';
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createTheme, ThemeProvider } from '@material-ui/core';
const theme = createTheme();

const App = props => {

  const [currentUser, setCurrentUser] = useState(null);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
    
    const { user } = props;

    if (user) {
      setCurrentUser(user)
      const moderatorRole = user.roles.includes("ROLE_MODERATOR")
      setShowModeratorBoard(moderatorRole)
      const adminRole = user.roles.includes("ROLE_ADMIN")
      setShowAdminBoard(adminRole)
    }

  });

  const handleLogout = () => {
    props.dispatch(logout());
  }

  const leftToolbar = <LeftToolbar
  currentUser={currentUser}
  showAdminBoard={showAdminBoard}
  showModeratorBoard={showModeratorBoard}/>   

  const rightToolbar = <RightToolbar currentUser={currentUser} />

  return <ThemeProvider theme={theme}>
      <Router history={history}>
        <TwoSidesBar
          leftToolbar={leftToolbar}
          rightToolbar={rightToolbar}
        />

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container> 
    </Router>
  </ThemeProvider>
  
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App)

// <Route exact path="/register" component={Register} />
// <Route exact path="/profile" component={Profile} />
// <Route path="/user" component={UserBoard} />
// <Route path="/mod" component={ModeratorBoard} />
// <Route path="/admin" component={AdminBoard} />