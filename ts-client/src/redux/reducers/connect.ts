import { ConnectAction } from "../../actions/connect"

interface IConnectState {
    host: string,
    port: number
}

interface ISetHost {
    type: typeof ConnectAction.SET_HOST,
    payload: string
}

interface ISetPort {
    type: typeof ConnectAction.SET_PORT,
    payload: number
}

type actionType = ISetHost | ISetPort

const initialState:IConnectState = {
    host:'localhost',
    port: 3001
}

const connect = (state = initialState, action:actionType) : IConnectState => {
    switch(action.type) {
        case ConnectAction.SET_PORT:
            return {
                ...state,
                port: action.payload
            }
        case ConnectAction.SET_HOST:
            return {
                ...state,
                host: action.payload
            }
        default:
            return state
    }
}
export default connect
