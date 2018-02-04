import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { editField } from 'store/login/actions'
import Login from './Login'

export default compose(
    connect(
        ({ login }) => ({
            password: login.password,
            username: login.username,
        }),
        {
            editField,
        }
    ),
    withProps(props => ({
        editPassword: e => props.editField('password', e.target.value || ''),
        editUsername: e => props.editField('username', e.target.value || ''),
    }))
)(Login)
