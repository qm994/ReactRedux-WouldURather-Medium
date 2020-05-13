import React, { Component } from 'react';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../css/index.css";
import { Link, withRouter } from 'react-router-dom';

class Poll extends Component {
    
    toQuestion = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/questions/${id}`)
    }

    render() {
        const { poll, users } = this.props;
        const avatar = users[poll.author].avatarURL
        const name = users[poll.author].name;
        const question1 = poll.optionOne.text;
        const question2 = poll.optionTwo.text;
        return (
            <div>
                <Image src={avatar} roundedCircle fluid className="avatar"/>
                <Card.Body>
                    <Card.Title>{name}asks question:</Card.Title>
                    <Card.Text>1. {question1}</Card.Text>
                    <h3><span>OR</span></h3>
                    <Card.Text>2. {question2}</Card.Text>
                    <Link to={`questions/${poll.id}`}>
                        <Button variant="primary" onClick={(e, id) => this.toQuestion(e, poll.id)}>
                            View Question
                        </Button>
                    </Link>
                </Card.Body>
            </div>
            
        )
    }
};

export default withRouter(Poll);