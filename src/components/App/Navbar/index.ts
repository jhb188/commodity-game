import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Navbar from './Navbar'

export default compose(
    connect(({ auth }) => ({ user: auth.data })),
    withRouter,
    mapProps(({ location, user }) => ({
        activeRoute: location.pathname,
        isLoggedIn: Boolean(user.id),
    }))
)(Navbar)
