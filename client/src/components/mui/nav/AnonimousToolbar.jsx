import Toolbar from '@material-ui/core/Toolbar'
import NavButton from '../../../ui/inch/button/NavButton'

const locale = {
    login:"Login",
    register:"Register"
}

const AnonimousToolbar = () => {

    return <Toolbar>
        <NavButton color='white' to={'/login'}>{locale.login}</NavButton>
        <NavButton color='white' to={"/register"}>{locale.register}</NavButton>
    </Toolbar>
}
export default AnonimousToolbar
