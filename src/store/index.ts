import { applyMiddleware, createStore } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import { commodityApi, commodityApiConfig } from 'clients/commodityApi'
import rootReducer from './rootReducer'

const devMiddlewares = [
    loggerMiddleware,
]

const prodMiddlewares = []

const middlewares = [
    thunkMiddleware,
    axiosMiddleware(commodityApi, commodityApiConfig),
    ...(process.env.NODE_ENV === 'development'
        ? devMiddlewares
        : prodMiddlewares
    )
]

export default createStore(rootReducer, applyMiddleware(...middlewares))
