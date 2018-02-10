import {
    FETCH_COMMODITY_SETS,
} from './constants'

export const fetchCommoditySets = () => ({
    type: FETCH_COMMODITY_SETS,
    payload: {
        request: {
            url: '/commodity-sets'
        },
    },
})
