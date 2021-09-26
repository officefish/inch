import tw from "tailwind-styled-components";

export const DivFlx = tw.div`
    flex
    `

export const DivFlxItmCnt = tw(DivFlx)`
    items-center
    `
export const DivFlxJstCnt = tw(DivFlx)`
    justify-center
    `
export const DivFlxCnt = tw(DivFlx)`
    items-center
    justify-center
    `
export const DivFlxFllScn = tw(DivFlxCnt)`
    w-full
    h-full
    `
export const DivFlxJstBtw = tw(DivFlx)`
    justify-between
    `

export const DivFlxItmCntJstBtw = tw(DivFlx)`
    items-center
    justify-between
    `

export const DivFlxItmCntJstBtwFxdH = tw(DivFlxItmCntJstBtw)`
    ${(p) => (p.$fixedHeight)}
    `
