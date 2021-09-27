import React from "react";
import {DivFlx} from '../../../ui/display/flex'

import {
    AlignItems,
    JustifyContent,
    Height,
    Padding
} from '../../../ui/enums'

export const withContentLiner = WrappedComponent => {
    class Decorator extends React.Component {

        render() {
             return <DivFlx
             $alignItems={AlignItems.START}
             $justifyContent={JustifyContent.CENTER}
             $height={Height.H_SCREEN}
             $padding={Padding.PT_12}
             > 
                <WrappedComponent {...this.props} />
            </DivFlx>
        }
    }
    return Decorator 
}