import PropTypes from 'prop-types'

import LeftToolbar from './LeftToolbar'
import RightToolbar from './RightToolbar'

import {
    StyledAppBar,
    JustifyBetween
} from '../styled/'

const AppBar = props => {

    const { 
        currentUser, 
        showModeratorBoard, 
        showAdminBoard, 
        handleDrawerOpen,
        isSettingsOpen,
        drawerWidth 
    } = props

    const leftToolbar = <LeftToolbar 
        currentUser={currentUser}
        showAdminBoard={showAdminBoard}
        showModeratorBoard={showModeratorBoard}
        isSettingsOpen={isSettingsOpen}
        handleDrawerOpen={handleDrawerOpen}
    />   
    const rightToolbar = <RightToolbar currentUser={currentUser} />

    return <StyledAppBar 
        position='fixed' 
        drawer_width={drawerWidth}
        open={isSettingsOpen}
        >
        <JustifyBetween>
            {leftToolbar}
            {rightToolbar}  
        </JustifyBetween>
    </StyledAppBar>
}
export default AppBar

AppBar.propTypes = {
    drawerWidth: PropTypes.number,
    currentUser: PropTypes.object, 
    showModeratorBoard: PropTypes.bool, 
    showAdminBoard: PropTypes.bool, 
    isSettingsOpen: PropTypes.bool,
    handleDrawerOpen: PropTypes.func
}