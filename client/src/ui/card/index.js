import tw from "tailwind-styled-components"

export const StyledCard = tw.div`
    ${(p) => (p.$padding)}
    ${(p) => (p.$margin)}
    ${(p) => (p.$maxWidth)}
    ${(p) => (p.$width)}
    border
    `