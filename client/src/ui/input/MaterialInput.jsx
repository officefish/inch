
import tw from 'tailwind-styled-components'
import styled from 'styled-components'

const StyledInputBase = tw.div`
    rounded 
    box-border 
    cursor-text 
    inline-flex 
    items-center 
    font-normal 
    text-base 
    leading-6 
    relative 
    text-black 
    tracking-normal 
    w-full
    `

export const MaterialInputBase = ({...props}) => {
    return <StyledInputBase {...props} />
}

const StyledInput = tw.input`
    bg-none 
    border-0 
    box-content 
    block 
    h-6 
    m-0 
    min-w-0 
    px-3 
    py-4 
    text-current 
    w-full
    `

export const MaterialInput = ({...props}) => {
    return <StyledInput {...props} />
}

const StyledFieldSetBase = styled.fieldset`
    top: -5px;
    border-radius: inherit;
    min-width: 0%;
    `

const StyledFieldSet = tw(StyledFieldSetBase)`
    border-black 
    border-solid 
    border 
    m-0 
    overflow-hidden 
    py-0 
    px-2 
    pointer-events-none 
    absolute 
    inset-x-0 
    bottom-0 
    text-left;
    top: -5px;
    `
export const MaterialFieldSet = ({...props}) => {
    return <StyledFieldSet {...props} />
} 

const StyledLegendBase = tw.legend`
    max-width: 0.01px;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    `

const StyledLegend = tw(StyledLegendBase)`
    block 
    h-3 
    text-xs 
    p-0 
    w-auto
    invisible
    ` 

export const MaterialLegend = ({...props}) => {
    return <StyledLegend {...props} />
} 