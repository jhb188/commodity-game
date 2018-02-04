import { compose, mapProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import Navbar from './Navbar'

export default compose(
    withRouter,
    mapProps(({ location }) => ({ activeRoute: location.pathname }))
)(Navbar)
