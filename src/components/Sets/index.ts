import { compose, mapProps } from 'recompose'
import { withRouter } from 'react-router'
import withCommoditySets from 'store/commoditySets/withCommoditySets'
import Sets from './Sets'

export default compose(
    withRouter,
    mapProps(({ match: { params }, ...otherProps }) => ({
        selectedCommodityId: Number(params.commodityId),
        selectedCommoditySetId: Number(params.commoditySetId),
        ...otherProps,
    })),
    withCommoditySets
)(Sets)
