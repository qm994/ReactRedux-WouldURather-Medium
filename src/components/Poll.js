import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../css/index.css";


class Poll extends Component {
    render() {
        const { poll, users } = this.props;
        console.log(poll, users)
        const avatar = users[poll.author].avatarURL
        const name = users[poll.author].name;
        const question = poll.optionOne.text;
        return (
            <div>
                <Image src={avatar} roundedCircle fluid className="avatar"/>
                <Card.Body>
                    <Card.Title>{name}asks question:</Card.Title>
                    <Card.Text>{question}</Card.Text>
                    <Button variant="primary">View Question</Button>
                </Card.Body>
            </div>
            
        )
    }
};

export default Poll;