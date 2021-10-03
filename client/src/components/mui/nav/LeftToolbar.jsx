import Toolbar from '@material-ui/core/Toolbar'
import PropTypes from 'prop-types';
import SettingsButton from '../../../ui/inch/button/SettingsButton';
import NavButton from '../../../ui/inch/button/NavButton'

const locale = {
    team:"Inch",
    modBoard:"Moderator Board",
    adminBoard:"Admin Board",
    userBoard:"User Board"
}

const LeftToolbar = props => {
    const { 
        currentUser, 
        showModeratorBoard, 
        showAdminBoard, 
        handleDrawerOpen,
        isSettingsOpen } = props

    return (
        <Toolbar>
            {!isSettingsOpen && (
                <SettingsButton handleDrawerOpen={handleDrawerOpen} />
            )}
            <NavButton size='large' to="/">{locale.team}</NavButton>
            
            {showModeratorBoard && (<NavButton 
                to={"/mod"}>
                    {locale.modBoard}
            </NavButton>)}
            {showAdminBoard && (<NavButton 
                to={"/admin"}>
                    {locale.adminBoard}
            </NavButton>)}
            {currentUser && (<NavButton 
                to={"/user"}>
                    {locale.userBoard}
            </NavButton>)}
        </Toolbar>
    )
}
export default LeftToolbar

LeftToolbar.propTypes = {
    showModeratorBoard: PropTypes.bool,
    showAdminBoard: PropTypes.bool,
    currentUser: PropTypes.object,
}