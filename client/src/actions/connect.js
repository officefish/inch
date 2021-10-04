import { SET_HOST, SET_PORT } from "./types"

export const setPort = port => ({
    type:SET_PORT,
    payload:port    
})

export const setHost = host => ({
    type:SET_HOST,
    payload:host
})
