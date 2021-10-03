import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerValidation } from '../../validators'
import RegisterForm from '../../ui/inch/form/RegisterForm'
import { connect } from "react-redux"

import { useState } from 'react'

import { register as registerAction } from "../../actions/auth"

const Register = ({...props}) => {

    const {
        dispatch,
        message,
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
        dispatch(
            registerAction(username, email, password))
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
    return {
      message,
    }
  }
  
export default connect(mapStateToProps)(Register)

RegisterForm.propTypes = {
    message:PropTypes.string,
    dispatch:PropTypes.func,
}