import { StyledCard } from './index'
import PropTypes from "prop-types";
import {
    Margin,
    MaxWidth,
    Padding,
    Width
} from '../enums'

const Card = ({children, ...props}) => {
    const {
        width,
        margin,
        padding,
        maxWidth
    } = props

    return <StyledCard
        $width={width}
        $margin={margin}
        $padding={padding}
        $maxWidth={maxWidth}
    >
        {children}
    </StyledCard>
}
export default Card

Card.propTypes = {
    width:PropTypes.oneOf(Object.values(Width)),
    margin:PropTypes.oneOf(Object.values(Margin)),
    padding:PropTypes.oneOf(Object.values(Padding)),
    maxWidth:PropTypes.oneOf(Object.values(MaxWidth))
}

