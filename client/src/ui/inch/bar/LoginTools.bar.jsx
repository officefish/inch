
import WithGrid from '../grid/WithGrid'
import NavLink from '../link/NavLink'

const locale = {
    forgotPass:"Forgot password?",
    signup:"No account? Sign Up"
}

const LoginTools = () => {
    return <WithGrid
        spacing={2}
        >
        <NavLink 
        size="small" 
        color='default'
        to="/" >
            {locale.forgotPass}
        </NavLink>
        <NavLink 
        size="small" 
        color='default'
        to="/signup" >
            {locale.signup}
        </NavLink>
    </WithGrid>
}
export default LoginTools