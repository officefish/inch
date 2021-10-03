import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: 3,
        marginBottom: 2
    }
}))

const Submit = ({children, ...props}) => {
    
    const {
        handleSubmit,
        loading
    } = props
    
    const classes = useStyles();

    return  <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        disabled={loading}
        className={classes.button}>
        {children}
    </Button>
}
export default Submit