import * as React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Form, Icon, Header } from 'semantic-ui-react'

const Login = ({
    editPassword,
    editUsername,
    onSubmit,
    password,
    username,
}) =>
    <Row>
        <Col xs={ 12 } sm={ 6 } smOffset={ 3 } md={ 4 } mdOffset={ 4 }>
            <Form warning onSubmit={ onSubmit }>
                <Header as="h2" icon textAlign="center">
                    <Icon name="sign in" circular />
                    <Header.Content>
                        Log in
                    </Header.Content>
                </Header>

                <Form.Input
                    label="Username"
                    onChange={ editUsername }
                    placeholder="username"
                    value={ username }
                />

                <Form.Input
                    label="Password"
                    onChange={ editPassword }
                    placeholder="password"
                    type="password"
                    value={ password }
                />

                <Form.Button
                    disabled={ !username || !(password.length >= 6) }
                    fluid
                    color="teal"
                >
                    Submit
                </Form.Button>
            </Form>
        </Col>
    </Row>

export default Login
