
import WithGrid from '../grid/WithGrid'
import Link from '../link/NavLink'

import { JustifyBetween } from '../../../components/mui/styled/'


const locale = {
    forgotPass:"Forgot password?",
    signup:"No account? Sign Up"
}

const LoginTools = () => {
    return <JustifyBetween>
            <Link 
            size="small" 
            color='default'
            to="/" >
                {locale.forgotPass}
            </Link>
            <Link 
            size="small" 
            color='default'
            to="/signup" >
                {locale.signup}
            </Link>
    </JustifyBetween>
}
export default LoginTools