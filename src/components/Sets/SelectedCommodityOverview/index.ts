import { compose, withProps } from 'recompose'
import preloadImages from 'services/preloadImages'
import SelectedCommodityOverview from './SelectedCommodityOverview'

export default compose(
    withProps(({ selectedCommodity }) => ({ images: [selectedCommodity.image] })),
    preloadImages
)(SelectedCommodityOverview)
