import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types';
import NavLink from '../../../ui/inch/link/NavLink'

const locale = {
    logout:"LogOut"
}

const AuthToolbar = props => {
    const {currentUser} = props

    return <Toolbar>
        <NavLink to={'/profile'}>{currentUser.username}</NavLink>
        <NavLink to={"/login"}>{locale.logout}</NavLink>
    </Toolbar>
}
export default AuthToolbar

AuthToolbar.propTypes = {
    currentUser:PropTypes.object
}