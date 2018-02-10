import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import {
    BrowserRouter,
    // Redirect,
    Route,
    Switch,
} from 'react-router-dom'

import store from 'store'
import {
    userIsAuthenticated,
    userIsNotAuthenticated,
} from 'store/auth/enhancers'

import App from 'components/App'
import Login from 'components/Login'
import Sets from 'components/Sets'
import Signup from 'components/Signup'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
    <ReduxProvider store={ store }>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={ userIsAuthenticated(() => null) } />
                    <Route path="/sets/:commoditySetId?/:commodityId?" component={ userIsAuthenticated(Sets) } />

                    <Route path="/login" component={ userIsNotAuthenticated(Login) } />
                    <Route path="/signup" component={ userIsNotAuthenticated(Signup) } />
                </Switch>
            </App>
        </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root') as HTMLElement
)
