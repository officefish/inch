import tw from "tailwind-styled-components";
import { NavFlx } from "../display/flex";

export const NavNoWrp = tw(NavFlx)` 
    flex-no-wrap
    ${(p) => (p.$spaceBetween)}
    ${(p) => (p.$listType)}
    ` 