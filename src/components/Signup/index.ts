import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { createUser, editField } from 'store/signup/actions'
import Signup from './Signup'

export default compose(
    connect(
        ({ signup }) => ({
            confirmPassword: signup.confirmPassword,
            email: signup.email,
            errors: signup.errors,
            isSubmitting: signup.isSubmitting,
            password: signup.password,
            username: signup.username,
        }),
        {
            createUser,
            editField,
        }
    ),
    withProps(props => ({
        editConfirmPassword: e => props.editField('confirmPassword', e.target.value || ''),
        editEmail: e => props.editField('email', e.target.value || ''),
        editPassword: e => props.editField('password', e.target.value || ''),
        editUsername: e => props.editField('username', e.target.value || ''),
        onSubmit: () => props.createUser({
            email: props.email,
            password: props.password,
            username: props.username,
        }),
    }))
)(Signup)
