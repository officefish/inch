import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const SettingsButton = props => {

    const {handleDrawerOpen} = props

    return <IconButton
        size="medium"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        >
        <MenuIcon />
    </IconButton>
}
export default SettingsButton