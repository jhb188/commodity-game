import { CREATE_SESSION, LOG_OUT } from './constants'

export const createSession = (username, password) => ({
    type: CREATE_SESSION,
    payload: {
        request: {
            data: {
                username,
                password,
            },
            method: 'POST',
            url: '/login'
        },
    },
})

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    return { type: LOG_OUT }
}
