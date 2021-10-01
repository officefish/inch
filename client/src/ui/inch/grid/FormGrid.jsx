import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

const FormGrid = ({children, ...props}) => {
    
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
export default FormGrid

FormGrid.propTypes = {
    direction:PropTypes.string,
    spacing:PropTypes.number
}