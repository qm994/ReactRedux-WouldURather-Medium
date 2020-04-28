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
        optionOneChecked: false,
        optionTwoChecked: false,
        option: ""
    }

    onChangeOne = () => {
        //e.preventDefault();
        this.setState({
            optionOneChecked: !this.state.optionOneChecked,
            option: !this.state.optionOneChecked ? "optionOne" : ""
        })
    };

    onChangeTwo = () => {
        this.setState(() => ({
            optionTwoChecked: !this.state.optionTwoChecked,
            option: !this.state.optionTwoChecked ? "optionTwo" : ""
        }))
    }

    onSubmit = (event) => {
        event.preventDefault();
        //const selectedVal = document.querySelector(".checkId:checked").values
        console.log(event.target)
    }
    
    render() {
        console.log(this.state.option)
        console.log(this.state.optionOneChecked)
        const { id, polls, users, authedUser } = this.props;
        const pollInfo = polls[id];
        const authorId = pollInfo.author;
        const authorInfo = users[authorId];
        console.log(authorInfo, polls[id])
        return (
            <Form onSubmit={(event) => this.onSubmit(event, pollInfo.id)}>
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
                            id="optionOne"
                            label={pollInfo.optionOne.text}
                            checked={this.state.checked}
                            value="optionOne"
                            ref={ele => this.myCheck = ele}
                            onChange={this.onChangeOne}

                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Form.Check
                            type="checkbox"
                            id="optionTwo"
                            label={pollInfo.optionTwo.text}
                            value="optionTwo"
                            ref="check"
                            onChange={this.onChangeTwo}
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