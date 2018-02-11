import { normalize } from 'normalizr'
import {
    FETCH_COMMODITIES,
    FETCH_COMMODITIES_FAIL,
    FETCH_COMMODITIES_SUCCESS,
} from './constants'
import { commoditiesSchema } from './schema'

const initialState = {
    data: {},
    order: [],
    errors: {},
    hasFetched: false,
    isFetching: false,
}

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case FETCH_COMMODITIES:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_COMMODITIES_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.error.response.data.errors,
            }

        case FETCH_COMMODITIES_SUCCESS: {
            const {
                entities: { commodity },
                result,
            } = normalize(action.payload.data.data, commoditiesSchema)

            return {
                ...state,
                data: commodity,
                order: result,
                hasFetched: true,
                isFetching: false,
            }
        }

        default:
            return state
    }
}
