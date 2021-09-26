
import PropTypes from 'prop-types';
import {DivFlxItmCntJstBtwFxdH} from '../display/flex'
import {Height} from '../enums'

 const TwoSidesBar = ({...props}) => {

    const {leftNav, rightNav, fixedHeight} = props
  
    return (
        <DivFlxItmCntJstBtwFxdH $fixedHeight={fixedHeight}>
            {leftNav}
            {rightNav}
        </DivFlxItmCntJstBtwFxdH>
    )}
export default TwoSidesBar 

TwoSidesBar.propTypes = {
    leftNav:PropTypes.node,
    rightNav:PropTypes.node,
    fixedHeight:PropTypes.oneOf(Object.values(Height)).isRequired,
}