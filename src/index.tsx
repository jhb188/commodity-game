import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import {
    BrowserRouter,
    // Redirect,
    Route,
    // Switch,
} from 'react-router-dom'

import store from 'store'

import App from 'components/App'
import Login from 'components/Login'
import Signup from 'components/Signup'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
    <ReduxProvider store={ store }>
        <BrowserRouter>
            <App>
                <Route path="/login" component={ Login } />
                <Route path="/signup" component={ Signup } />
            </App>
        </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root') as HTMLElement
)