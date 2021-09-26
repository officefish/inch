
import PropTypes from 'prop-types';

import {HdrClrBrdB} from './index'
import {DivCtrFxdW} from '../display/container'
import TwoSidesBar from '../bar/TwoSidesBar'
import {MaxWidth, Height} from '../enums'

const TwoSidesHeader = ({...props}) => {
    
    const {primary} = props
    const {maxWidth} = props
    const {leftNav} = props
    const {rightNav} = props
    const {fixedHeight} = props 

    return <HdrClrBrdB $primary={primary}>
        <DivCtrFxdW $maxWidth={maxWidth}>
            <TwoSidesBar leftNav={leftNav} rightNav={rightNav} fixedHeight={fixedHeight} />
        </DivCtrFxdW>
    </HdrClrBrdB>
}
export default TwoSidesHeader

TwoSidesHeader.propTypes = {
    primary:PropTypes.bool,
    maxWidth:PropTypes.oneOf(Object.values(MaxWidth)),
    fixedHeight:PropTypes.oneOf(Object.values(Height)),
    leftNav:PropTypes.node,
    rightNav:PropTypes.node
}