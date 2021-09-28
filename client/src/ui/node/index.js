import tw from "tailwind-styled-components";

export const DIV = tw.div`
    ${(p) => (p.$spaceBetween)}
    `

export const NAV = tw.nav`
    ${(p) => (p.$spaceBetween)}
    `

export const DivBg = tw.div`
    ${(p) => ("bg-" + p.$bgColor)}
    ${(p) => ("hover:bg-" + p.$hoverBgColor)}
    `