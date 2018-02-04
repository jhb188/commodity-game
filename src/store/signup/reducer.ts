import {
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
    EDIT_SIGNUP_FIELD,
} from './constants'

const initialState = {
    confirmPassword: '',
    email: '',
    errors: {
        email: '',
        password: '',
        username: '',
    },
    password: '',
    username: '',
    isSubmitting: false,
}

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                isSubmitting: true,
            }

        case CREATE_USER_FAIL:
            return {
                ...state,
                isSubmitting: false,
                errors: action.error.response.data.errors,
            }

        case CREATE_USER_SUCCESS:
            return initialState

        case EDIT_SIGNUP_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            }

        default:
            return state
    }
}
