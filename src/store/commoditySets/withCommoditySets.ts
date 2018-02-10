import { compose } from 'recompose'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import ensureFetched from 'services/ensureFetched'
import { fetchCommoditySets } from './actions'

const getCommoditySetsData = state => state.commoditySets.data
const getCommoditySetsOrder = state => state.commoditySets.order
const getOrderedCommoditySets = createSelector(
    getCommoditySetsData,
    getCommoditySetsOrder,
    (data, order) => order.map(k => data[k])
)

const withCommoditySets = compose(
    ensureFetched('commoditySets', fetchCommoditySets),
    connect((state) => ({
        commoditySets: getCommoditySetsData(state),
        orderedCommoditySets: getOrderedCommoditySets(state),
    }))
)

export default withCommoditySets
