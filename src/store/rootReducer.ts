import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { LOG_OUT } from './auth/constants'
import auth from './auth/reducer'
import commodities from './commodities/reducer'
import commoditySets from './commoditySets/reducer'
import login from './login/reducer'
import signup from './signup/reducer'

const appReducer = combineReducers({
    auth,
    commodities,
    commoditySets,
    form,
    login,
    signup,
})

export default (state, action) => appReducer(
    action.type === LOG_OUT
        ? undefined
        : state,
    action
)
