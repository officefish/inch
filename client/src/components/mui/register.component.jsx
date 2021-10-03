import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerValidation } from '../../validators'
import RegisterForm from '../../ui/inch/form/RegisterForm'
import { connect } from "react-redux"

import { useState } from 'react'

import { register as registerAction } from "../../actions/auth"

import AuthService from '../../services/auth.service'

const Register = ({...props}) => {

    const {
        dispatch,
        message,
        host,
        port
    } = props

    const [values, setValues] = useState({
        showPassword: false,
        loading:false,
        successful:false        
    });

    const setLoading = payload => {
        setValues({
            ...values,
            loading: payload
          });
    }

    const setSuccessful = payload => {
        setValues({
            ...values,
            successful: payload
          });
    }

    const toggleShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
          });
    }
        
    const onSubmit = data => {
        setLoading(true)
        const {username, email, password} = data
        const service = new AuthService(host, port)
        dispatch(
            registerAction(service, username, email, password))
            .then(() => {
                setLoading(false)
                setSuccessful(true)
                
            })
            .catch(() => {
                setLoading(false)
                setSuccessful(false)
            })   
    }
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerValidation)
    });

    return <RegisterForm
        register={register}
        errors={errors}
        message={message}
        handleSubmit={handleSubmit(onSubmit)}
        loading={values.loading}
        successful={values.successful}
        showPassword={values.showPassword}
        toggleShowPassword={toggleShowPassword}
        /> 
}

const mapStateToProps = state => {
    const { message } = state.message
    const { host, port } = state.connect
    return {
      message,
      host,
      port
    }
  }
  
export default connect(mapStateToProps)(Register)

RegisterForm.propTypes = {
    host:PropTypes.string,
    port:PropTypes.number,
    message:PropTypes.string,
    dispatch:PropTypes.func,
}