import { EDIT_SIGNUP_FIELD } from './constants'

export const editField = (field, value) => ({
    type: EDIT_SIGNUP_FIELD,
    field,
    value,
})
