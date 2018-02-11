import { compose } from 'recompose'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import ensureFetched from 'services/ensureFetched'
import { fetchCommodities } from './actions'

const getCommoditiesData = state => state.commodities.data
const getCommoditiesOrder = state => state.commodities.order
const getOrderedCommodities = createSelector(
    getCommoditiesData,
    getCommoditiesOrder,
    (data, order) => order.map(k => data[k])
)

const withCommodities = compose(
    ensureFetched('commodities', fetchCommodities),
    connect((state) => ({
        commodities: getCommoditiesData(state),
        orderedCommodities: getOrderedCommodities(state),
    }))
)

export default withCommodities
