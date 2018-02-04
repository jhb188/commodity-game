import axios from 'axios'
import { assocPath } from 'ramda'

const setAuthorizationHeader = (config, jwt) => assocPath(
    ['headers', 'Authorization'],
    `Token ${jwt}`,
    config
)

export const commodityApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const commodityApiConfig = {
    interceptors: {
        request: [{
            error: (_, error) => Promise.reject(error),
            success: ({ getState }, config) => {
                const { token } = getState().auth

                if (token) {
                    return setAuthorizationHeader(config, token)
                }

                return config
            }
        }],
        response: [{
            error: (_, error) => {
                const { response } = error
                const { status } = response

                switch (status) {
                    case 401: // unauthorized
                        localStorage.removeItem('token')
                        break

                    default:
                        if (process.env.NODE_ENV === 'development') {
                            console.log(response)
                        }
                        break
                }

                return Promise.reject(error)
            },
            success: (_, response) => response
        }],
    },
}

export default commodityApi
