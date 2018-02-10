import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from 'store/auth/actions'
import Navbar from './Navbar'

export default compose(
    withRouter,
    connect(({ auth }) => ({ user: auth.data }), { logout }),
    mapProps(({ location, user, ...otherProps }) => ({
        activeRoute: location.pathname,
        isLoggedIn: Boolean(user.id),
        username: user.username,
        ...otherProps,
    }))
)(Navbar)
