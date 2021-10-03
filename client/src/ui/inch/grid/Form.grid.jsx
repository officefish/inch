import WithGrid from './WithGrid'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: 20,
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