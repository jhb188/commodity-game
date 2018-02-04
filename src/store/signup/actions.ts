import {
    CREATE_USER,
    EDIT_SIGNUP_FIELD,
} from './constants'

export const editField = (field, value) => ({
    type: EDIT_SIGNUP_FIELD,
    field,
    value,
})

export const createUser = data => ({
    type: CREATE_USER,
    payload: {
        request: {
            data,
            method: 'POST',
            url: '/users',
        }
    }
})
