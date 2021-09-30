import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types';
import SettingsButton from '../../../ui/inch/button/SettingsButton';
import NavLink from '../../../ui/inch/link/NavLink'

const locale = {
    team:"Inch",
    modBoard:"Moderator Board",
    adminBoard:"Admin Board",
    userBoard:"User Board"
}

const LeftToolbar = props => {
    const { currentUser, showModeratorBoard, showAdminBoard } = props;

    return (
        <Toolbar>
            <SettingsButton />
            <NavLink size='large' to="/">{locale.team}</NavLink>
            
            {showModeratorBoard && (<NavLink 
                to={"/mod"}>
                    {locale.modBoard}
            </NavLink>)}
            {showAdminBoard && (<NavLink 
                to={"/admin"}>
                    {locale.adminBoard}
            </NavLink>)}
            {currentUser && (<NavLink 
                to={"/user"}>
                    {locale.userBoard}
            </NavLink>)}
        </Toolbar>
    )
}
export default LeftToolbar

LeftToolbar.propTypes = {
    showModeratorBoard: PropTypes.bool,
    showAdminBoard: PropTypes.bool,
    currentUser: PropTypes.object,
}