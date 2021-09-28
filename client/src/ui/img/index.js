import tw from "tailwind-styled-components";

export const ImgRnd = tw.img`
    block 
    rounded-full  
    mx-auto 
    ${(p) => (p.$width)}
    ${(p) => (p.$height)}
    `