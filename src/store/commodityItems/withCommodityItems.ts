import { compose } from 'recompose'
import { connect } from 'react-redux'
import ensureFetched from 'services/ensureFetched'
import { fetchCommodityItems } from './actions'

const withCommodityItems = compose(
    ensureFetched('commodityItems', fetchCommodityItems),
    connect(({ commodityItems }) => ({
        commodityItems: commodityItems.data,
    }))
)

export default withCommodityItems
