import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class PollDetail extends Component {
    state = {
        checked: false,
        option: ""
    }

    onClick = (event, val) => {
        // this.setState({
        //     checked: event.target.checked,
        //     option: val
        // })
    }

    onSubmit = (event, checkId) => {
        event.preventDefault();
        //const selectedVal = document.querySelector(".checkId:checked").value
        
        console.log(event.target)
    }
    render() {
        const { id, polls, users, authedUser } = this.props;
        const pollInfo = polls[id];
        const authorId = pollInfo.author;
        const authorInfo = users[authorId];
        console.log(authorInfo, polls[id])
        return (
            <Form onSubmit={(event)=> this.onSubmit(event, pollInfo.id)}>
                <Image roundedCircle fluid src={authorInfo.avatarURL} className="avatar" />
                <Card.Body>
                    <Card.Title>{authorInfo.name} asks:</Card.Title>
                    <Card.Subtitle>
                        Would U Rather...
                    </Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <Form.Check
                            type="checkbox"
                            className={pollInfo.id}
                            label={pollInfo.optionOne.text}
                            value="optionOne"
                            checked={this.state.checked}
                            onClick={this.onClick(id)}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check
                            type="checkbox"
                            className={pollInfo.id}
                            label={pollInfo.optionTwo.text}
                            value="optionTwo"
                            checked={this.state.checked}
                            onClick={this.onClick(id)}
                        />
                    </ListGroup.Item>
                </ListGroup>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
};

function mapStateToProps({ polls, users, authedUser }, props) {
    const id = props.match.params.id
    return {
        id,
        polls,
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(PollDetail);