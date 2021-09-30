import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const SettingsButton = () => {
    return <IconButton
        size="medium"
        edge="start"
        color="inherit"
        aria-label="menu">
        <MenuIcon />
    </IconButton>
}
export default SettingsButton