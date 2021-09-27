
import PropTypes from 'prop-types';

import {HdrClrBrdB} from './index'
import {DivCtrFxdW} from '../display/container'
import TwoSidesBar from '../bar/TwoSidesBar'
import {
    MaxWidth, 
    Height,
    ThemeColor
} from '../enums'

const TwoSidesHeader = ({...props}) => {
    
    const {
        bgColor,
        hoverBgColor,
        borderColor,
        maxWidth, 
        leftNav, 
        rightNav, 
        fixedHeight} = props 

    return <HdrClrBrdB 
        $bgColor={bgColor}
        $hoverBgColor={hoverBgColor}
        $borderColor={borderColor}
        >
        <DivCtrFxdW $maxWidth={maxWidth}>
            <TwoSidesBar leftNav={leftNav} rightNav={rightNav} fixedHeight={fixedHeight} />
        </DivCtrFxdW>
    </HdrClrBrdB>
}
export default TwoSidesHeader

TwoSidesHeader.propTypes = {
    bgColor:PropTypes.oneOf(Object.values(ThemeColor)),
    hoverBgColor:PropTypes.oneOf(Object.values(ThemeColor)),
    borderColor:PropTypes.oneOf(Object.values(ThemeColor)),
    maxWidth:PropTypes.oneOf(Object.values(MaxWidth)),
    fixedHeight:PropTypes.oneOf(Object.values(Height)),
    leftNav:PropTypes.node,
    rightNav:PropTypes.node
}