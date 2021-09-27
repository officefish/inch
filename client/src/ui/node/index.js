import tw from "tailwind-styled-components";

export const DIV = tw.div`
    ${(p) => (p.$spaceBetween)}
    `

export const NAV = tw.nav`
    ${(p) => (p.$spaceBetween)}
    `

export const DivBg = tw.div`
    ${(p) => (p.$primary ? "bg-primary-background" : "bg-secondary-background")}
    `