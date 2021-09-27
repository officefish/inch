import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";

import { login } from '../../actions/auth'

import {required} from '../../validators'

import Card from "../../ui/card/Card";
import {
    Padding,
    MaxWidth
} from '../../ui/enums'

class Login extends Component {
    constructor(props) {
        super(props)
        
        this.form = React.createRef();
        this.checkBtn = React.createRef();
        
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        
        this.state = {
            username: "",
            password: "",
            loading: false,
        }
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
          password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading:true
        })

        this.form.validateAll()

        const { dispatch, history } = this.props;

        if (this.checkBtn.current.context._errors.length === 0) {
            dispatch(login(this.state.username, this.state.password))
                .then(() => {
                    history.push('/profile')
                    window.location.reload()
                })
                .catch(() => {
                    this.setState({
                        loading:false
                    })
                })
        } else {
            this.setState({
                loading:false
            })
        }
    }

    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/profile" />;
        }

        return <div className="flex items-center justify-center pt-12">
                    <Card
                    padding={Padding.P_4}
                    maxWidth={MaxWidth.W_MD}
                    >
                        <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                        />
                        <Form 
                        onSubmit={this.handleLogin}
                        ref={this.form}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}
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
                                validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                                >
                                    {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Login</span>
                                </button>
                            </div>
                            {message && (
                                <div className="form-group">
                                  <div className="alert alert-danger" role="alert">
                                    {message}
                                  </div>
                                </div>
                              )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={this.checkBtn}
                            />
                        </Form>
                    </Card>
                </div>
    }
}

const mapStateToProps = state => {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }

export default connect(mapStateToProps)(Login);
