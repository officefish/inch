import PropTypes from "prop-types";
import { ImgRnd } from "."

import { Width, Height } from "../enums";

const UserRoundedImg = ({...props}) => {
    
    const {
        width,
        height
    } = props

    return <ImgRnd
    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    $width={width}
    $height={height} 
    {...props} />
}
export default UserRoundedImg

UserRoundedImg.propTypes = {
    width:PropTypes.oneOf(Object.values(Width)),
    height:PropTypes.oneOf(Object.values(Height)),
}

