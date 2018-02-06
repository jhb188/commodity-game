import { CREATE_SESSION } from './constants'

export const createSession = (username, password) => ({
    type: CREATE_SESSION,
    payload: {
        request: {
            data: {
                username,
                password,
            },
            method: 'POST',
            url: '/sessions'
        },
    },
})
