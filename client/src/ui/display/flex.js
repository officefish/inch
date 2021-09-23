import tw from "tailwind-styled-components";

export const DivFlx = tw.div`
    flex
    `
export const DivFlxJstBtw = tw(DivFlx)`
    justify-between
    `

export const DivFlxFllScn = tw(DivFlx)`
    w-full
    h-full
    items-center
    justify-center
    `