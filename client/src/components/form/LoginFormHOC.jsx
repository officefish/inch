import React from 'react';
import {connect} from "react-redux";
import LoginForm from "../../ui/form/login/LoginForm";
import {
    SetNickNamePreviewAC,
    SetPasswordPreviewAC,
    ToggleNeedRememberAC,
    ToggleShowPasswordAC
} from "../../redux/reducers/profileReducer";

class LoginFormHOC extends React.Component {

    render () {

        const signupPath = '/'
        const forgetPassPath = '/'

        return <LoginForm 
            {...this.props} 
            signupPath={signupPath}
            forgetPassPath={forgetPassPath}
            >
            Welcome <br/>
            Back
        </LoginForm>
    }
}

const mapStateToProps = state => {
    return {
        nickNamePreview:state.profile.nickNamePreview,
        passwordPreview:state.profile.passwordPreview,
        needRemember:state.profile.needRemember,
        showPassword:state.profile.showPassword
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateNickNamePreview: preview => {
            dispatch(SetNickNamePreviewAC(preview))
        },
        updatePasswordPreview: preview => {
            dispatch(SetPasswordPreviewAC(preview))
        },
        toggleNeedRemember: flag => {
            dispatch(ToggleNeedRememberAC(flag))
        },
        toggleShowPassword: flag => {
            dispatch(ToggleShowPasswordAC(flag))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormHOC)