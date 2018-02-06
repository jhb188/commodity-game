import * as React from 'react'
import Navbar from './Navbar'

const style = {
    container: {
        padding: '60px 10px',
    },
}

const App: React.StatelessComponent<{ children?: React.ReactNode }> = ({ children }) =>
    <div style={ style.container }>
        <Navbar />

        { children }
    </div>

export default App
