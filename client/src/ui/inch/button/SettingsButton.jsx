import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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