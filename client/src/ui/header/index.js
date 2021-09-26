import tw from "tailwind-styled-components"

export const HdrClrBrdB = tw.header`
    ${(p) => (p.$primary 
        ? "bg-primary-background" 
        : "bg-secondary-background")}
    ${(p) => (p.$primary 
        ? "border-primary-background-dark" 
        : "border-secondary-background-dark")}
    border-b
    `