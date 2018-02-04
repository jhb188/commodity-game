import * as React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const style = {
    container: {
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
    },
}

const PageLoader = () =>
    <Dimmer.Dimmable
        as="div"
        dimmed
        style={ style.container }
    >
        <Dimmer inverted active>
            <Loader />
        </Dimmer>
    </Dimmer.Dimmable>

export default PageLoader
