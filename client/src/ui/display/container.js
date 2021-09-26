
import tw from "tailwind-styled-components";

export const DivCtrFxdW = tw.div`
    container
    mx-auto
    ${(p) => (p.$maxWidth)}
    `