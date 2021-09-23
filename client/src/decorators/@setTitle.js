/**
 title is a string that will be set as a document title
 WrappedComponent is what our decorator will receive when
 put directly above a component class as seen in the example above
 */
import React from "react";
import {connect} from "react-redux";
import {SetTitleAC} from "../redux/reducers/titleReducer";

/** SetTitle redux wrapper */
let mapStateToProps = (state) =>
{
    return {
        /** Page title */
        title: state.document.title,
        /** Authorized user */
        user: state.profile.user
    }
}

let mapDispatchToProps = (dispatch) =>
{
    return {
        /** Set document title */
        setTitle: (title) => { dispatch( SetTitleAC(title) ) }
    }
}

/** SetTitle decorator */
export const setTitle = (getTitle) => (WrappedComponent) => {

    class SetTitleDecorator extends React.Component {

        constructor(props) {
            super(props);
            document.title = props.title
        }

        updateTitle = (props) => {
            const title = getTitle(props)
            if(title) {
                document.title = title
            }
        }

        componentDidMount() {
            this.updateTitle(this.props)
        }

        //componentWillReceiveProps(props) {
        //    this.updateTitle(props)
        //}

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(SetTitleDecorator)

}