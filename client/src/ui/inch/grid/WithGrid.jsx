import PropTypes from 'prop-types'
import Grid from "@mui/material/Grid"

const WithGrid = ({children, ...props}) => {
    
    const {
        direction,
        spacing
    } = props
    
    return <Grid 
    container
    direction={direction} 
    spacing={spacing}
    >
        {children
            .map((child, index) => <Grid 
                item 
                key={index}>
                    {child
            }</Grid>)
        }
    </Grid>
}
export default WithGrid

WithGrid.propTypes = {
    direction:PropTypes.string,
    spacing:PropTypes.number
}