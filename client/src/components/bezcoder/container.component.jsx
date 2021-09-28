import PropTypes from 'prop-types'
import { 
    MaxWidth,
    ThemeColor
} from '../../ui/enums'

import { DivBg } from '../../ui/node'
import {DivCtrFxdW} from '../../ui/display/container'

const Container = ({children, ...props}) => {
    const {
        bgColor,
        hoverBgColor,
        maxWidth
    } = props
    
    return <DivBg
        $bgColor={bgColor}
        $hoverBgColor={hoverBgColor}
    >
    <DivCtrFxdW $maxWidth={maxWidth}>
        {children}
    </DivCtrFxdW>
    </DivBg>     
}
export default Container

Container.propTypes = {
    bgColor:PropTypes.oneOf(Object.values(ThemeColor)),
    maxWidth:PropTypes.oneOf(Object.values(MaxWidth)),
}