import { EDIT_LOGIN_FIELD } from './constants'

const initialState = {
    password: '',
    username: '',
    isSubmitting: false,
}

export default (
    state = initialState,
    action
) => {
    switch (action.type) {
        case EDIT_LOGIN_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            }

        default:
            return state
    }
}
