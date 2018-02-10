import { normalize } from 'normalizr'
import {
    FETCH_COMMODITY_SETS,
    FETCH_COMMODITY_SETS_FAIL,
    FETCH_COMMODITY_SETS_SUCCESS,
} from './constants'
import { commoditySetsSchema } from './schema'

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
        case FETCH_COMMODITY_SETS:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_COMMODITY_SETS_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.error.response.data.errors,
            }

        case FETCH_COMMODITY_SETS_SUCCESS: {
            const {
                entities: { commoditySet },
                result,
            } = normalize(action.payload.data.data, commoditySetsSchema)

            return {
                ...state,
                data: commoditySet,
                order: result,
                hasFetched: true,
                isFetching: false,
            }
        }

        default:
            return state
    }
}
