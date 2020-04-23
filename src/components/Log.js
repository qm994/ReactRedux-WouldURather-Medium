import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

import { Form, Icon, Input, Button, Checkbox } from 'antd';


class Log extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        const selectedIndex = e.target.select.options.selectedIndex;
        const options = e.target.select.options;
        const newAuthedUserId = options[selectedIndex].value;

        this.props.dispatch(setAuthedUser(newAuthedUserId))
    };

    render() {
        const { users, authedUser } = this.props;
        return (
            <div>
                <div>
                    <h3 className="center">Welcome to the Would U Rather App!</h3>
                    <h4>Please sign in to contiue</h4>
                </div>
                <div>
                    <h2>Sign in</h2>
                    <form className="sign-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="select"></label>
                        <select id="select">
                            {users.map(user => (
                                <option value={user.id} key={user.id} defaultValue={user.id === authedUser}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <button type='submit'>Primary Button</button>
                    </form>
                </div>
            </div>
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