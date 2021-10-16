export class MessageAction {
    static SET_MESSAGE: 'SET_MESSAGE'
    static CLEAR_MESSAGE: 'CLEAR_MESSAGE'
}

export const setMessage = (message: string) => ({
    type: MessageAction.SET_MESSAGE,
    payload: message    
})

export const clearMessage = () => ({
    type: MessageAction.CLEAR_MESSAGE
})