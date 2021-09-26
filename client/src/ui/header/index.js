import tw from "tailwind-styled-components"

export const HdrClrBrdB = tw.header`
    ${(p) => (p.$primary ? "bg-primary" : "bg-secondary")}
    ${(p) => (p.$primary ? "border-primary-dark" : "border-secondary-dark")}
    border-b
    `