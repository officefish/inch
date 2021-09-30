import LoginForm from '../../ui/inch/form/LoginForm'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const locale = {
    emailRequired:"Email is required",
    emailInvalid:"Email is invalid",
    passRequired:"Password is required",
    passMin:"Password must be at least 6 characters",
    passMax:"Password must not exceed 40 characters"
}

const Login = props => {
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required(locale.emailRequired)
            .email(locale.emailInvalid),
        password: Yup.string()
            .required(locale.passRequired)
            .min(6, locale.passMin)
            .max(40, locale.passMax)
    })

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

    const onSubmit = data => {
        debugger
        console.log(JSON.stringify(data, null, 2))
    }

    return <LoginForm
        register={register}
        control={control}
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
    />
}
export default Login