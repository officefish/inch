import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";

import {register} from '../../actions/auth'

import {
    required, 
    email, 
    vusername, 
    vpassword 
} from '../../validators'  

import BezcoderCard from "../../ui/card/BezcoderCard";
import {
    Width,
    Height,
    ThemeColor
} from '../../ui/enums'

import UserRoundedImg from "../../ui/img/UserRoundedImg";

import { withContentLiner } from "./common/with-content-liner.decorator";

@withContentLiner
class Register extends Component {
    constructor(props) {
        super(props)
        
        this.form = React.createRef()
        this.checkBtn = React.createRef()
        
        this.handleRegister = this.handleRegister.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        
        this.state = {
          username: "",
          email: "",
          password: "",
          successful: false,
        }
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value,
        })
    }
    
    onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        })
    }
    
    onChangePassword(e) {
        this.setState({
          password: e.target.value,
        })
    }

    handleRegister(e) {
        e.preventDefault()
    
        this.setState({
          successful: false,
        })
    
        this.form.current.validateAll()

        const { dispatch } = this.props;
        const { username, email, password } = this.state

        if (this.checkBtn.current.context._errors.length === 0) {
            dispatch(
                register(username, email, password))
                .then(() => {
                    this.setState({
                        successful: true,
                    })
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    })
                })
        } 
    }

    render() {
        const { message } = this.props;
    
        return (
          <BezcoderCard
            bgColor={ThemeColor.SCD_BG_L}>
              <UserRoundedImg 
              width={Width.W_24}
              height={Height.H_24}
              alt="profile-img"/>
    
              <Form
                onSubmit={this.handleRegister}
                ref={this.form}
              >
                {!this.state.successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required, vusername]}
                      />
                    </div>
    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required, email]}
                      />
                    </div>
    
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required, vpassword]}
                      />
                    </div>
    
                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>
                )}
    
                {message && (
                  <div className="form-group">
                    <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={this.checkBtn}
                />
              </Form>
          </BezcoderCard>
        );
      }
}

const mapStateToProps = state => {
    const { message } = state.message;
    return {
      message,
    };
  }
  
export default connect(mapStateToProps)(Register);