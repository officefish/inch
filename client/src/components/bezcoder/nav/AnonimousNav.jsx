import { NavNoWrp } from '../../../ui/list'
import NavLink from '../../../ui/navlink/NavLink'
import { ListType, FontWeight, TextSize, SpaceBetween, ThemeColor } from '../../../ui/enums';

const AnonimousNav = () => {
    return <NavNoWrp 
    $listType={ListType.NONE}
    $spaceBetween={SpaceBetween.X_6}
    >
        <li>
          <NavLink to={"/login"} 
            textColor={ThemeColor.PRM_TXT}
            fontWeight={FontWeight.BASE}
            textSize={TextSize.BASE}
            >Login
          </NavLink>
        </li>
        <li>
          <NavLink to={"/register"} 
            textColor={ThemeColor.PRM_TXT}
            fontWeight={FontWeight.BASE}
            textSize={TextSize.BASE}
            >Sign Up
          </NavLink>
        </li>
      </NavNoWrp>
}
export default AnonimousNav