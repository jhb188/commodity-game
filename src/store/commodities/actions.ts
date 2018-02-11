import {
    FETCH_COMMODITIES,
} from './constants'

export const fetchCommodities = () => ({
    type: FETCH_COMMODITIES,
    payload: {
        request: {
            url: '/commodities'
        },
    },
})
