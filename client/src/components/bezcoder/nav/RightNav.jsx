import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const RightNav = ({...props}) => {
    const { currentUser } = props;

    if (currentUser) return( 
        <nav className='flex flex-no-wrap'>
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={this.logOut}>
              LogOut
            </a>
          </li>
        </nav>
        )
    else return (
        <nav className='flex flex-no-wrap'>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </nav>)
    

}
export default RightNav

RightNav.propTypes = {
    currentUser:PropTypes.object
}