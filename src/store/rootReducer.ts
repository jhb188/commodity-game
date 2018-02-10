import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { RESET_STATE } from './auth/constants'
import auth from './auth/reducer'
import commoditySets from './commoditySets/reducer'
import login from './login/reducer'
import signup from './signup/reducer'

const appReducer = combineReducers({
    auth,
    commoditySets,
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
