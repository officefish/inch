import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))
const Column = ({children}) => {
    const classes = useStyles();
    
    return <Box 
    className={classes.container}    
    >{children}
    </Box>
}
export default Column