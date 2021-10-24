import React, { Children }  from 'react'
import Grid from "@mui/material/Grid"
import { ResponsiveStyleValue } from '@mui/system'
import { GridDirection } from '@mui/material'

export interface IWithGrid {
    direction:ResponsiveStyleValue<GridDirection> | undefined,
    spacing:number
}

const WithGrid:React.FC<IWithGrid> = ({ children, ...props }) => {
    
    const {
        direction,
        spacing
    } = props
    
    return <Grid 
    container
    direction={direction} 
    spacing={spacing}
    >
        {Children.map(children, (child, index) => {
            <Grid item key={index}>
                {child}
            </Grid>
        })}
    </Grid>
       
}
export default WithGrid
