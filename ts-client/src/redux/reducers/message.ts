import { MessageAction } from "../../actions/message"

interface IMessageState {
    message: string 
}

interface ISetMessage {
    type: typeof MessageAction.SET_MESSAGE,
    payload: string
}

interface IClearMessage {
    type: typeof MessageAction.CLEAR_MESSAGE,
}

type actionType = ISetMessage | IClearMessage

const initialState:IMessageState = {
    message:''
} 

const message = (state = initialState, action:actionType) : IMessageState => {
    switch(action.type) {
        case MessageAction.SET_MESSAGE:
            return {
                message: action.payload
            }
        case MessageAction.CLEAR_MESSAGE:
            return {...initialState}
        default:
            return state
    }
}
export default message