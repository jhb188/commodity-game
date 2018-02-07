import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { createSession } from 'store/auth/actions'
import { editField } from 'store/login/actions'
import Login from './Login'

export default compose(
    connect(
        ({ login }) => ({
            password: login.password,
            username: login.username,
        }),
        {
            createSession,
            editField,
        }
    ),
    withProps(props => ({
        editPassword: e => props.editField('password', e.target.value || ''),
        editUsername: e => props.editField('username', e.target.value || ''),
        onSubmit: () => props.createSession(props.username, props.password),
    }))
)(Login)
