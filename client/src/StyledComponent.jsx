import tw from 'tailwind-styled-components'
import React from "react";
import {setTitle} from "./decorators/@setTitle";

@setTitle((props) => {
    if(!props.user) return 'Loading profile...'
    return `${props.user.name}'s Profile`
})
class StyledComponent extends React.Component {

    render () {

        return (<div className="w-full h-screen flex justify-center items-center">
            <StyledButton>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>

            </StyledButton>

            <StyledButton className="mx-5 flex">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>

                <span className="ml-2">Download</span>
            </StyledButton>

            <StyledButton className="flex">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>

                <span className="ml-2">Bookmark</span>
            </StyledButton>
        </div>)
    }


}

const StyledButton = tw.button`
    btn
    px-4 
    py-3 
    bg-blue-600 
    rounded-md 
    text-white 
    outline-none 
    focus:ring-4 
    shadow-lg 
    transform 
    active:scale-75 
    transition-transform
    `

export default StyledComponent;
