import tw from "tailwind-styled-components"

export const HdrClrBrdB = tw.header`
    ${(p) => ("bg-" + p.$bgColor)}
    ${(p) => ("hover:bg-" + p.$hoverBgColor)}
    ${(p) => ("border-" + p.$borderColor)}
    border-b
    `