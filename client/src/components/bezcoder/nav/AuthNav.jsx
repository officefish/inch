
import { NavNoWrp } from '../../../ui/list'
import NavLink from '../../../ui/navlink/NavLink'
import { ListType, FontWeight, TextSize, SpaceBetween, ThemeColor } from '../../../ui/enums';

const AuthNav = ({...props}) => {
    const {currentUser} = props
    return <NavNoWrp 
        $listType={ListType.NONE}
        $spaceBetween={SpaceBetween.X_6}
        >
        <li>
            <NavLink to={"/profile"} 
            textColor={ThemeColor.PRM_TXT}
            fontWeight={FontWeight.BASE}
            textSize={TextSize.BASE}
            >{currentUser.username}
            </NavLink>
        </li>
        <li>
            <NavLink to={"/login"} 
            textColor={ThemeColor.PRM_TXT}
            fontWeight={FontWeight.BASE}
            textSize={TextSize.BASE}
            >LogOut
            </NavLink>
            {/* <a href="/login" className="nav-link" onClick={this.logOut}>
            LogOut
            </a> */}
        </li>
    </NavNoWrp>
}
export default AuthNav