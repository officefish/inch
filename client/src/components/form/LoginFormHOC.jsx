import React from 'react';
import {connect} from "react-redux";
import LoginForm from "../../ui/form/LoginForm";
import {
    SetNickNamePreviewAC,
    SetPasswordPreviewAC,
    ToggleNeedRememberAC,
    ToggleShowPasswordAC
} from "../../redux/reducers/profileReducer";

class LoginFormHOC extends React.Component {

    render () {
        return <LoginForm {...this.props}>
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