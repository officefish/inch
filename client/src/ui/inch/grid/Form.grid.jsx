import WithGrid from './WithGrid'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: 1,
        width: '20rem',
    }
}))

const Form = ({children}) => {
    const classes = useStyles();

    return <Box 
        className={classes.form}>
        <WithGrid 
        direction={"column"} 
        spacing={2}>
            {children}
        </WithGrid>
</Box>
}
export default Form