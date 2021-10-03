import PropTypes from 'prop-types'
import React from "react"

import Username from './field/Username.field'
import Password from './field/Password.field'
import Email from './field/Email.field' 
import Signin from '../avatar/Signin.avatar'
import Form from '../grid/Form.grid'
import Column from '../container/Column.container'
import Error from './typography/Error.typography'
import Success from "./typography/Success.typography"
import Submit from '../button/Submit.button'
import ConfirmPassword from './field/ConfirmPassword.field'

import Link from '../link/NavLink'

const locale = {
    register:"Register",
    tools:{
        signin:"Already have an account? Sign in"
    }
}

const RegisterForm = ({...props}) => {
    const {
        message,
        successful,
    } = props
    
    return successful 
        ?   <Column>
                {message && <React.Fragment>
                        <Success>{message}</Success>
                        <Link 
                        size="small" 
                        color='default'
                        to="/login" >
                            {locale.tools.signin}
                        </Link>
                </React.Fragment>}
            </Column>
        :   <Column>
                <Signin>{locale.register}</Signin>
                <Form>
                    <Username autoFocus={true} {...props} />
                    <Email {...props} />
                    <Password {...props} />
                    <ConfirmPassword {...props} />
                    <Error>{message}</Error>
                    <Submit {...props}>
                        {locale.register}
                    </Submit>
                    <Link 
                    size="small" 
                    color='default'
                    to="/login" >
                        {locale.tools.signin}
                    </Link>
                </Form>
            </Column>
}
export default RegisterForm

RegisterForm.propTypes = {
    message:PropTypes.string,
    errors:PropTypes.object,
    register:PropTypes.func,
    handleSubmit:PropTypes.func,
    showPassword:PropTypes.bool,
    toggleShowPassword:PropTypes.func,
    successful:PropTypes.bool,
    loading:PropTypes.bool
}