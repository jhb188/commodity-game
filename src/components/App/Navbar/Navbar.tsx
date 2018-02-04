import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface NavbarProps {
    activeRoute: string,
    isLoggedIn: boolean,
}

const loggedInMenuItems = [
    'Home',
]

const loggedOutMenuItems = [
    'Signup',
    'Login',
]

const Navbar: React.StatelessComponent<NavbarProps> = ({
    activeRoute,
    isLoggedIn,
}) =>
    <Menu fixed="top" inverted>
        <Menu.Menu position="left">
            <Menu.Item as={ Link } to="">
                Commodity Game
            </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
            {
                (isLoggedIn
                    ? loggedInMenuItems
                    : loggedOutMenuItems
                ).map(
                    menuItem => {
                        const route = `/${menuItem.toLowerCase()}`

                        return (
                            <Menu.Item
                                key={ menuItem }
                                active={ route === activeRoute }
                                as={ Link }
                                to={ route }
                            >
                                { menuItem }
                            </Menu.Item>
                        )
                    }
                )
            }
        </Menu.Menu>
    </Menu>

export default Navbar
