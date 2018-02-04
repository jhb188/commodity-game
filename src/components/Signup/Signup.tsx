import * as React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Form, Icon, Header } from 'semantic-ui-react'

const Login = ({
    confirmPassword,
    editConfirmPassword,
    editEmail,
    editPassword,
    editUsername,
    email,
    errors,
    isSubmitting,
    onSubmit,
    password,
    username,
}) =>
    <Row>
        <Col xs={ 12 } sm={ 6 } smOffset={ 3 } md={ 4 } mdOffset={ 4 }>
            <Form loading={ isSubmitting } warning onSubmit={ onSubmit }>
                <Header as="h2" icon textAlign="center">
                    <Icon name="game" circular />
                    <Header.Content>
                        Sign up
                    </Header.Content>
                </Header>

                <Form.Input
                    error={ Boolean(errors.email) }
                    label="Email"
                    onChange={ editEmail }
                    placeholder="email@example.com"
                    type="email"
                    value={ email }
                />

                <Form.Input
                    error={ Boolean(errors.username) }
                    label="Username"
                    onChange={ editUsername }
                    placeholder="username"
                    value={ username }
                />

                <Form.Input
                    error={ Boolean(errors.password) }
                    label="Password"
                    onChange={ editPassword }
                    placeholder="password"
                    type="password"
                    value={ password }
                />

                <Form.Input
                    label="Password"
                    onChange={ editConfirmPassword }
                    placeholder="password"
                    type="password"
                    value={ confirmPassword }
                />

                <Form.Button
                    disabled={
                        !username
                        || !(password.length >= 6)
                        || (password !== confirmPassword)
                    }
                    fluid
                    color="teal"
                >
                    Submit
                </Form.Button>
            </Form>
        </Col>
    </Row>

export default Login
