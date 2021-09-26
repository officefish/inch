import PropTypes from 'prop-types'
import { NavNoWrp } from '../../../ui/list'
import NavLink from '../../../ui/navlink/NavLink'
import { ListType, FontWeight, TextSize, SpaceBetween } from '../../../ui/enums';

const RightNav = ({...props}) => {
    const { currentUser } = props;

    if (currentUser) return( 
      <NavNoWrp 
        $listType={ListType.NONE}
        $spaceBetween={SpaceBetween.X_6}
        >
          <li>
            <NavLink to={"/profile"} 
              primary={true} 
              fontWeight={FontWeight.BASE}
              textSize={TextSize.BASE}
              >{currentUser.username}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} 
              primary={true} 
              fontWeight={FontWeight.BASE}
              textSize={TextSize.BASE}
              >LogOut
            </NavLink>
            {/* <a href="/login" className="nav-link" onClick={this.logOut}>
              LogOut
            </a> */}
          </li>
      </NavNoWrp>
    )
    else return (
      <NavNoWrp 
      $listType={ListType.NONE}
      $spaceBetween={SpaceBetween.X_6}
      >
          <li>
            <NavLink to={"/login"} 
              primary={true} 
              fontWeight={FontWeight.BASE}
              textSize={TextSize.BASE}
              >Login
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"} 
              primary={true} 
              fontWeight={FontWeight.BASE}
              textSize={TextSize.BASE}
              >Sign Up
            </NavLink>
          </li>
        </NavNoWrp>
      )
    }
export default RightNav

RightNav.propTypes = {
    currentUser:PropTypes.object
}