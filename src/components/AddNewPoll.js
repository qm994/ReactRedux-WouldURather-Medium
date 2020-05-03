import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { handleAddNewPoll } from '../actions/shared';

class AddNewPoll extends Component {

    onSubmit = (event) => {
        event.preventDefault();
        const optionOneText = this.optionOne.value;
        const optionTwoText = this.optionTwo.value;
        const author = this.props.authedUser;
        const newQuestion = {
            author,
            optionOneText,
            optionTwoText
        };
        this.props.dispatch(handleAddNewPoll(newQuestion))
    };
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label column sm="10">
                        <h2>Create New Question</h2>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label column sm="5">
                        <h4><strong>Would U rather...</strong></h4>
                    </Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter option one here"
                        ref={ele => this.optionOne = ele} />
                    <Form.Label column sm="2">
                        <h4><strong>OR</strong></h4>
                    </Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter option two here"
                        ref={ele => this.optionTwo = ele} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
};

function mapStateToProps({ authedUser }, {}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(AddNewPoll);