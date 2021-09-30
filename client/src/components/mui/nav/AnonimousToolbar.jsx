import Toolbar from '@material-ui/core/Toolbar'
import NavLink from '../../../ui/inch/link/NavLink'

const locale = {
    login:"Login",
    register:"Register"
}

const AnonimousToolbar = () => {

    return <Toolbar>
        <NavLink to={'/login'}>{locale.login}</NavLink>
        <NavLink to={"/register"}>{locale.register}</NavLink>
    </Toolbar>
}
export default AnonimousToolbar
