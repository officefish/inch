
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const LeftNav = ({...props}) => {
    const { currentUser, showModeratorBoard, showAdminBoard } = props;
    return <nav>
            <Link to={"/"} className="navbar-brand">
            bezKoder
        </Link>

        {showModeratorBoard && (
            <li className="nav-item">
            <Link to={"/mod"} className="nav-link">
                Moderator Board
            </Link>
            </li>
        )}

        {showAdminBoard && (
            <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
                Admin Board
            </Link>
            </li>
        )}

        {currentUser && (
            <li className="nav-item">
            <Link to={"/user"} className="nav-link">
                User
            </Link>
            </li>
        )}
    </nav>
}
export default LeftNav

LeftNav.propTypes = {
    showModeratorBoard: PropTypes.bool,
    showAdminBoard: PropTypes.bool,
    currentUser: PropTypes.object,
}

