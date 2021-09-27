
import PropTypes from 'prop-types';
import { NavNoWrp } from '../../../ui/list';
import NavLink from '../../../ui/navlink/NavLink'
import { ListType, FontWeight, TextSize, SpaceBetween, ThemeColor } from '../../../ui/enums';

const LeftNav = ({...props}) => {
    const { currentUser, showModeratorBoard, showAdminBoard } = props;
    
    return (
        <NavNoWrp 
        $listType={ListType.NONE}
        $spaceBetween={SpaceBetween.X_6}
        >
            <NavLink to={"/"}
            textColor={ThemeColor.PRM_TXT}
            fontWeight={FontWeight.SEMI_BOLD}
            textSize={TextSize.BASE}
            >bezKoder
            </NavLink>

        {showModeratorBoard && (
            <li>
                <NavLink to={"/mod"}
                textColor={ThemeColor.PRM_TXT}
                fontWeight={FontWeight.BASE}
                textSize={TextSize.BASE}
                >Moderator Board
                </NavLink>
            </li>
        )}

        {showAdminBoard && (
            <li>
                <NavLink to={"/admin"} 
                textColor={ThemeColor.PRM_TXT}
                fontWeight={FontWeight.BASE}
                textSize={TextSize.BASE}
                >Admin Board
                </NavLink>
            </li>
        )}

        {currentUser && (
            <li>
                <NavLink to={"/user"}
                textColor={ThemeColor.PRM_TXT}
                fontWeight={FontWeight.BASE}
                textSize={TextSize.BASE}
                >User
                </NavLink>
            </li>
        )}
        </NavNoWrp>
    ) 
}
export default LeftNav

LeftNav.propTypes = {
    showModeratorBoard: PropTypes.bool,
    showAdminBoard: PropTypes.bool,
    currentUser: PropTypes.object,
}

