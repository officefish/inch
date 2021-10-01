import PropTypes from 'prop-types';

import Password from './field/Password.field'
import Email from './field/Email.field' 
import NeedRemember from './checkbox/NeedRemember.checkbox'
import Error from './typography/Error.typography'
import Submit from '../button/Submit.button'
import LoginTools from '../bar/LoginTools.bar'
import Signin from '../avatar/Signin.avatar'

import Form from '../grid/Form.grid'
import Column from '../container/Column.container'

const locale = {
    signin:"Sign in"
}

const LoginForm = props => {

    const {message} = props
    
    return <Column>
            <Signin />
            <Form>
                <Email {...props} />
                <Password {...props} />
                <NeedRemember {...props} />
                <Error message={message} />
                <Submit {...props}>
                    {locale.signin}
                </Submit>
                <LoginTools />
            </Form>
        </Column>
}
export default LoginForm

LoginForm.propTypes = {
    loading:PropTypes.bool,
    message:PropTypes.string,
    errors:PropTypes.object,
    register:PropTypes.func,
    handleSubmit:PropTypes.func,
    needRemember:PropTypes.bool,
    showPassword:PropTypes.bool,
    toggleShowPassword:PropTypes.func,
    toggleNeedRemember:PropTypes.func
}