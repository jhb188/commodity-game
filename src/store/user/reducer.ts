import * as Redux from 'redux'
import {
    FETCH_USER_FAIL,
    FETCH_USER_SUCCESS,
} from './constants'

interface UserState {
    data: {},
    hasFetched: boolean,
    isFetching: boolean,
}

const initialState = {
    data: {},
    isFetching: true,
    hasFetched: false,
}

const reducer: (state: UserState, action: Redux.AnyAction) => UserState = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case FETCH_USER_FAIL:
            return {
                ...state,
                hasFetched: true,
                isFetching: false,
            }

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                hasFetched: true,
                isFetching: false,
            }

        default:
            return state
    }
}

export default reducer
