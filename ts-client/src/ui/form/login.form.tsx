import React from 'react'

import Password from './field/password.field'
import Username from './field/username.field'
import NeedRemember from './checkbox/need-remember.checkbox'
import Error from './typography/error.typography'
import Submit from '../button/submit.button'
import LoginTools from '../bar/login-tools.bar'
import Signin from '../avatar/signin.avatar'

import Form from '../grid/form.grid'
import Column from '../container/column.container'

export interface ILoginForm {
    loading: boolean,
    message: string,
    errors: any,
    register: Function,
    handleSubmit: Function,
    needRemember: boolean,
    showPassword: boolean,
    toggleShowPassword: Function,
    toggleNeedRemember: Function
}

const locale = {
    signin: "Sign in"
}

const LoginForm :React.FC<ILoginForm> = props => {
    
    const { message } = props

    return <Column>
            <Signin>{ locale.signin }</Signin>
            <Form>
                <Username autoFocus = { true } {...props } /> 
                <Password {...props } /> 
                <NeedRemember {...props } /> 
                <Error>{message}</Error> 
                <Submit {...props } > { locale.signin } </Submit> 
                <LoginTools />
            </Form> 
        </Column>
}
export default LoginForm
