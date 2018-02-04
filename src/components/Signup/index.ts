import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { editField } from 'store/signup/actions'
import Signup from './Signup'

export default compose(
    connect(
        ({ signup }) => ({
            confirmPassword: signup.confirmPassword,
            password: signup.password,
            username: signup.username,
        }),
        {
            editField,
        }
    ),
    withProps(props => ({
        editConfirmPassword: e => props.editField('confirmPassword', e.target.value || ''),
        editPassword: e => props.editField('password', e.target.value || ''),
        editUsername: e => props.editField('username', e.target.value || ''),
    }))
)(Signup)
