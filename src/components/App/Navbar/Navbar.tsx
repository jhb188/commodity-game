import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

interface NavbarProps {
    activeRoute: string,
    isLoggedIn: boolean,
    logout: Function,
    username?: string,
}

const loggedInMenuItems = [
    'Sets',
]

const loggedOutMenuItems = [
    'Signup',
    'Login',
]

const Navbar: React.StatelessComponent<NavbarProps> = ({
    activeRoute,
    isLoggedIn,
    logout,
    username,
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
            {
                username && (
                    <Dropdown item text={ username }>
                        <Dropdown.Menu>
                            <Dropdown.Item as={ Link } to="/profile">
                                Profile
                            </Dropdown.Item>

                            <Dropdown.Item onClick={ () => logout() }>
                                Log out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
        </Menu.Menu>
    </Menu>

export default Navbar
