import { EDIT_LOGIN_FIELD } from './constants'

export const editField = (field, value) => ({
    type: EDIT_LOGIN_FIELD,
    field,
    value,
})
