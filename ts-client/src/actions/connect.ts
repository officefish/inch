export class ConnectAction {
    static SET_HOST: 'SET_HOST'
    static SET_PORT: 'SET_PORT'
}

export const setHost = (host: string) => ({
    type:ConnectAction.SET_HOST,
    payload:host
})

export const setPort = (port: number) => ({
    type: ConnectAction.SET_PORT,
    payload: port    
})

