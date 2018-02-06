import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { RESET_STATE } from './auth/constants'
import auth from './auth/reducer'
import login from './login/reducer'
import signup from './signup/reducer'

const appReducer = combineReducers({
    auth,
    form,
    login,
    signup,
})

export default (state, action) => appReducer(
    action.type === RESET_STATE
        ? undefined
        : state,
    action
)
