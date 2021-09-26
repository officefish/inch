import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./login.component";
import Register from "./register.component";
import Home from "./home.component";
import Profile from "./profile.component";
import { 
    ModeratorBoard,
    AdminBoard,
    UserBoard
 } from "./board.component";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import { history } from '../../helpers/history';

import TwoSidesHeader from "../../ui/header/TwoSidesHeader";
import { MaxWidth, Height } from '../../ui/enums'

import LeftNav from './nav/LeftNav'
import RightNav from "./nav/RightNav";

import { applyTheme } from "../../themes/utils";
import baseTheme from "../../themes/base";
import darkTheme from "../../themes/dark";

class BezkoderAuthApp extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
    
        history.listen((location) => {
          props.dispatch(clearMessage()); // clear message when changing location
        });
    }

    componentDidMount() {
        const { user } = this.props;
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }

        applyTheme(baseTheme)
    }

    logOut() {
        this.props.dispatch(logout());
    }

    render() {
        
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        const leftNav = <LeftNav
          currentUser={currentUser}
          showAdminBoard={showAdminBoard}
          showModeratorBoard={showModeratorBoard}
        />   
        const rightNav = <RightNav currentUser={currentUser} />
    
        return (
          <Router history={history}>
            
            <TwoSidesHeader
              primary={false}
              maxWidth={MaxWidth.W_SCREEN_MD}
              fixedHeight={Height.H_12}
              leftNav={leftNav}
              rightNav={rightNav}
            />
                  
            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={UserBoard} />
                <Route path="/mod" component={ModeratorBoard} />
                <Route path="/admin" component={AdminBoard} />
              </Switch>
            </div>
            
          </Router>
        );
    }
}

const mapStateToProps = state => {
    const { user } = state.auth
    return {
      user
    }
}
  
export default connect(mapStateToProps)(BezkoderAuthApp)