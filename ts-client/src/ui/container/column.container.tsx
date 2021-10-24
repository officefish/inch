import { ReactChildren, ReactChild } from 'react'

import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'

interface AuxProps {
    children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[] 
}

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

const Column = ({children}: AuxProps) => {
    const classes = useStyles();
    
    return <Box 
    className={classes.container}    
    >{children}
    </Box>
}
export default Column