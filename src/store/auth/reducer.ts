import * as Redux from 'redux'
import {
    CREATE_USER_SUCCESS,
} from 'store/signup/constants'
import {
    CREATE_SESSION_SUCCESS,
    LOG_OUT,
} from './constants'

interface AuthState {
    token: string,
    data: {},
    hasFetched: boolean,
    isFetching: boolean,
}

const initialState = {
    token: localStorage.getItem('token') || '',
    data: JSON.parse(localStorage.getItem('user') || JSON.stringify({})),
    hasFetched: false,
    isFetching: false,
}

const reducer: (state: AuthState, action: Redux.AnyAction) => AuthState = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
        case CREATE_SESSION_SUCCESS:
            const { data, meta: { token } } = action.payload.data
            return {
                ...state,
                data,
                token,
                hasFetched: true,
                isFetching: false,
            }

        case LOG_OUT:
            return {
                ...state,
                token: '',
                data: {},
            }

        default:
            return state
    }
}

export default reducer
