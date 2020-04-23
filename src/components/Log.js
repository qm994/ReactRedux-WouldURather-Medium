import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { divStyle } from '../utils/helper';
import { Button, DatePicker, Form } from 'antd';
import 'antd/dist/antd.css';

class Log extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const selectedIndex = e.target.select.options.selectedIndex;
        const options = e.target.select.options;
        console.log(e.target.select.options)
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
                                <option
                                    key={user.id}
                                    value={user.id}
                                    defaultValue={user.id === authedUser}
                                    style={divStyle(user)}
                                >
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <button type="submit">Primary Button</button>
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