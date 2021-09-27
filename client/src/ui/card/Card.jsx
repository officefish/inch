import { StyledCard } from './index'
import PropTypes from "prop-types";
import {
    Margin,
    MaxWidth,
    Padding
} from '../enums'

const Card = ({children, ...props}) => {
    const {
        margin,
        padding,
        maxWidth
    } = props

    return <StyledCard
        $margin={margin}
        $padding={padding}
        $maxWidth={maxWidth}
    >
        {children}
    </StyledCard>
}
export default Card

Card.propTypes = {
    margin:PropTypes.oneOf(Object.values(Margin)),
    padding:PropTypes.oneOf(Object.values(Padding)),
    maxWidth:PropTypes.oneOf(Object.values(MaxWidth))
}

