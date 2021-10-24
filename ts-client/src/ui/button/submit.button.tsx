import React, {MouseEvent} from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: 3,
        marginBottom: 2
    }
}))

interface ISubmitButton {
    handleSubmit:Function,
    loading:boolean
}

const Submit:React.FC<ISubmitButton> = ({children, ...props}) => {
    
    const {
        handleSubmit,
        loading
    } = props
    
    const classes = useStyles()

    const onSubmit = (event:MouseEvent) => {
        handleSubmit()
    }

    return  <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={onSubmit}
        disabled={loading}
        className={classes.button}>
        {children}
    </Button>
}
export default Submit