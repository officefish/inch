import tw from "tailwind-styled-components"
import styled from "styled-components"
import PropTypes from "prop-types";
import { ThemeColor } from "../enums";


const FixedWidthBase = styled.div`
    max-width: 350px;
    `

const StyledCard = tw(FixedWidthBase)`
    rounded-sm 
    mx-auto 
    mb-6 
    mt-12 
    p-10
    shadow-md
    ${(p) => ('bg-'+p.$bgColor)}
    `

const BezcoderCard = ({children, ...props}) => {
    const {bgColor} = props

    return <StyledCard
    $bgColor={bgColor}
    >{children}</StyledCard>
}
export default BezcoderCard

BezcoderCard.propTypes = {
    bgColor:PropTypes.oneOf(Object.values(ThemeColor)),
}