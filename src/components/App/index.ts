import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from './App'

export default compose(
    withRouter,
    connect(
        ({ auth }) => ({
            token: auth.token,
            user: auth.data,
        })
    ),
    lifecycle({
        componentWillReceiveProps(
            nextProps: {
                token?: string,
                user: {
                    id?: number,
                },
            },
        ) {
            const { token, user } = nextProps
            const userId = user.id
            if (token !== this.props.token) {
                if (token) {
                    localStorage.setItem('token', token)
                }
            }

            if (userId !== this.props.user.id) {
                if (userId) {
                    localStorage.setItem('user', JSON.stringify(user))
                }
            }
        }
    })
)(App)
