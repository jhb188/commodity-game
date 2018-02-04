import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchUser } from 'store/user/actions'
import App from './App'

export default compose(
    withRouter,
    connect(
        ({ auth, user }) => ({
            hasFetchedUser: user.hasFetched,
            token: auth.token,
        }),
        {
            fetchUser,
        }
    ),
    lifecycle({
        componentDidMount() {
            if (!this.props.hasFetchedUser) {
                this.props.fetchUser()
            }
        },
        componentWillReceiveProps(nextProps: { token?: string }) {
            const { token } = nextProps
            if (token !== this.props.token) {
                if (token) {
                    this.props.fetchUser()
                }
            }
        }
    })
)(App)
