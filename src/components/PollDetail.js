import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

import { getFixedNumber } from '../utils/helper';
import { handleAddAnswer } from '../actions/shared';

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
        if (this.state.optionOne === 'false' && this.state.optionTwo === 'false') {
            alert("Please make one choice!")
        } else {
            const userSelection = this.state.optionOne ? "optionOne" : "optionTwo";
            const saveData = {
                authedUser: this.props.authedUser,
                qid: this.props.id,
                answer: this.state.option
            };
            this.props.dispatch(handleAddAnswer(saveData))
        }
    }

    render() {
        const { id, polls, users, authedUser } = this.props;
        const userHasAnswered = Object.keys(users[authedUser].answers);
        if(polls[id] === undefined) {
            return(
                <Redirect to="/404" />
            )
        };
        const pollInfo = polls[id];
        const authorId = pollInfo.author;
        const authorInfo = users[authorId];
        const optionOneVotes = getFixedNumber(pollInfo.optionOne);
        const optionTwoVotes = getFixedNumber(pollInfo.optionTwo);
        const userSelection = userHasAnswered.includes(id) ? authorInfo.answers[id] : null;
        return (
            userHasAnswered.includes(id)
                // show the answered questions: result
                ? <Form>
                    <Image roundedCircle fluid src={authorInfo.avatarURL} className="avatar" />
                    <Card.Body>
                        <Card.Title>Asked by {authorInfo.name}</Card.Title>
                        <Card.Subtitle>
                            <h3>Results:</h3>
                        </Card.Subtitle>
                        {
                            userSelection === "optionOne"
                                ? <div>
                                    <div>
                                        <Card.Text>
                                            <strong>{pollInfo.optionOne.text}</strong>
                                            <Badge pill variant="success">Your Vote!</Badge>
                                        </Card.Text>
                                        <ProgressBar animated now={optionOneVotes} label={`${optionOneVotes}%`} />
                                        <Card.Header as="h5">{pollInfo.optionOne.votes.length} out of 3 votes</Card.Header>
                                    </div>
                                    <br/>
                                    <div>
                                        <Card.Text>
                                            <strong>{pollInfo.optionTwo.text}</strong>
                                        </Card.Text>
                                        <ProgressBar animated now={optionTwoVotes} label={`${optionTwoVotes}%`} />
                                        <Card.Header as="h5">{pollInfo.optionTwo.votes.length} out of 3 votes</Card.Header>
                                    </div>
                                </div>

                                : <div>
                                    <Card.Text>
                                        <strong>{pollInfo.optionOne.text}</strong>
                                    </Card.Text>
                                    <ProgressBar animated now={optionOneVotes} label={`${optionOneVotes}%`} />
                                    <Card.Text>
                                        <strong>{pollInfo.optionTwo.text}</strong>
                                        <Badge pill variant="success">Your Vote!</Badge>
                                    </Card.Text>
                                    <ProgressBar animated now={optionTwoVotes} label={`${optionTwoVotes}%`} />
                                </div>
                        }


                    </Card.Body>
                </Form>
                // show the unanswered questions: make selection
                : <Form onSubmit={(event) => this.onSubmit(event, pollInfo.id)}>
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

                    <Button variant="success" type="submit" onSubmit={this.onSubmit}>Submit</Button>
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