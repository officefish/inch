import PropTypes from 'prop-types'
import { MaxWidth } from '../../ui/enums'

import { DivBg } from '../../ui/node'
import {DivCtrFxdW} from '../../ui/display/container'

const Container = ({children, ...props}) => {
    const {
        primary,
        maxWidth
    } = props
    
    return <DivBg $primary={primary}>
    <DivCtrFxdW $maxWidth={maxWidth}>
        {children}
    </DivCtrFxdW>
    </DivBg>     
}
export default Container

Container.propTypes = {
    primary:PropTypes.bool,
    maxWidth:PropTypes.oneOf(Object.values(MaxWidth)),
}