import PropTypes from 'prop-types'
import AuthNav from './AuthNav'
import AnonimousNav from './AnonimousNav';

const RightNav = ({...props}) => {
    
    const { currentUser } = props;

    return currentUser
    ? <AuthNav currentUser={currentUser} />
    : <AnonimousNav />    
}
export default RightNav

RightNav.propTypes = {
    currentUser:PropTypes.object
}