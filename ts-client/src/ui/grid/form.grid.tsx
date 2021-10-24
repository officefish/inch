import { ReactChildren, ReactChild } from 'react'

import WithGrid from './with-grid'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

interface AuxProps {
    children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[] 
}

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: 20,
        width: '20rem',
    }
}))

const Form = ({children}: AuxProps) => {
    const classes = useStyles()

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