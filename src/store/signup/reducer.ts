import { EDIT_SIGNUP_FIELD } from './constants'

const initialState = {
    confirmPassword: '',
    password: '',
    username: '',
    isSubmitting: false,
}

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case EDIT_SIGNUP_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            }

        default:
            return state
    }
}
