import { compose, withProps } from 'recompose'
import preloadImages from 'services/preloadImages'
import Commodities from './Commodities'

export default compose(
    withProps(({ commodities }) => ({ images: commodities.map(c => c.image) })),
    preloadImages
)(Commodities)
