import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { createUser } from '../../../store/actions/userActions';

class CreateUser extends Component {
    state = {
        fullname: '',
        username: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: '10%',
                backgroundColor: '#ffffff',
                width: '73%',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Create new User</h1>
                    <Form.Group className="mb-3" controlId="formBasicFullname">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                        We'll never share your private information with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Enter fullname" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                        We'll never share your private information with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(CreateUser);