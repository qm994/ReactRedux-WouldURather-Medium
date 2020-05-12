import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { divStyle } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Log extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        // const allOptions = document.querySelectorAll('.custom-select.custom-select')[0].options;
        // const selectedIndex = allOptions.selectedIndex;
        // const id = allOptions[selectedIndex].value;
        // console.log(id)
        this.props.dispatch(setAuthedUser(null))
    };

    onChange = (e, authedUser) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.username.value))
    }

    render() {
        const { users } = this.props;
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label column sm="10">
                        <h2>Welcome to the Would U Rather App!</h2>
                        <h4>Please sign in to contiue</h4>
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        <h4>Sign in</h4>
                    </Form.Label>
                    <Form.Control 
                     as="select" 
                     size="lg"
                     custom 
                     onChange={(e) => this.onChange(e, this.props.authedUser)}
                     ref={ele => this.username = ele}>
                    <option disabled selected>Select User</option>
                        {
                            users.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
                <Button type='submit'>Log Out</Button>
            </Form>
        )
    }
};

function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser
    }
}

export default connect(mapStateToProps)(Log);