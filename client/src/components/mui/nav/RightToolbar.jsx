import PropTypes from 'prop-types';
import AuthToolbar from './AuthToolbar'
import AnonimousToolbar from './AnonimousToolbar'

const RightToolbar = props => {

    const { currentUser } = props;
   
    return currentUser
    ? <AuthToolbar currentUser={currentUser} />
    : <AnonimousToolbar />    
    
}
export default RightToolbar

RightToolbar.propTypes = {
    currentUser:PropTypes.object
}