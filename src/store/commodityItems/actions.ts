import {
    FETCH_COMMODITY_ITEMS,
} from './constants'

export const fetchCommodityItems = () => ({
    type: FETCH_COMMODITY_ITEMS,
    payload: {
        request: {
            url: '/commodity-items'
        },
    },
})
