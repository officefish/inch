import React, { useState } from 'react'

import { Redirect } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { loginValidation } from '../validators'

import { connect } from "react-redux"
import { login } from "../actions/auth"

export interface ILoginComponent {
    dispatch:Function,
    history:any,
    isLoggedIn:boolean,
    message:string,
    host: string,
    port: number    
}

const Login :React.FC<ILoginComponent> = props => {
    const {
        dispatch,
        history,
        isLoggedIn,
        message,
        host,
        port
    } = props;

    const [values, setValues] = useState({
        showPassword: false,
        needRemember: true,
        loading: false
    });

    const setLoading = (payload:any) => {
        setValues({
            ...values,
            loading: payload
        });
    }

    const toggleNeedRemember = () => {
        setValues({
            ...values,
            needRemember: !values.needRemember,
        });
    }

    const toggleShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginValidation)
    })

    const onSubmit = (data:any) => {
        setLoading(true)
        const { username, password } = data
        dispatch(login(host, port)(username, password, values.needRemember))
            .then(() => {
                history.push("/profile")
                window.location.reload()
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return isLoggedIn ?
        <Redirect to = "/profile" />
        : <LoginForm
            register = { register }
            errors = { errors }
            message = { message }
            handleSubmit = { handleSubmit(onSubmit) }
            loading = { values.loading }
            needRemember = { values.needRemember }
            showPassword = { values.showPassword }
            toggleShowPassword = { toggleShowPassword }
            toggleNeedRemember = { toggleNeedRemember }
            />

}


