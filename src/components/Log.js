import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { divStyle } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Log extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        // const selectedIndex = e.target.select.options.selectedIndex;
        // const options = e.target.select.options;
        // console.log(e.target.select.options)
        // const newAuthedUserId = options[selectedIndex].value;
        console.log(this.username)
        //this.props.dispatch(setAuthedUser(this.myOption.value))
    };

    onChange = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.username.value))
    }

    render() {
        const { users, authedUser } = this.props;
        
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
                    <Form.Control as="select" size="lg"
                     custom 
                     onChange={this.onChange}
                     ref={ele => this.username = ele}>  
                        {
                            users.map(user => (
                                <option
                                    key={user.id}
                                    defaultValue={user.id === authedUser}
                                    value={user.id}    
                                >
                                    {user.name}
                                </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
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