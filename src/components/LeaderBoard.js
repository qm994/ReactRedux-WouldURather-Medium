import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import "../css/index.css";
class LeaderBoard extends Component {

    render() {
        console.log(this.props.leaderData)
        return (
            <div>
                {this.props.leaderData
                    .sort((a,b) => b.sum - a.sum).map(data => (
                    <Card key={data.id} style={{ width: '50rem' }}>
                        <Card.Body style={{ width: '35rem' }}>
                            <Card.Title>{data.name}</Card.Title>

                            <FigureImage
                                width={171}
                                height={180}
                                src={data.avatarURL}
                                alt={data.name}
                                fluid
                                roundedCircle
                            />
                            <div className="leader">
                                <Card.Text as="h5">
                                    Answerd Questions: <span>{data.answered}</span>
                                </Card.Text>
                                <Card.Text as="h5">
                                    Created Questions: <span>{data.created}</span>
                                </Card.Text>
                            </div>
                                <h3>
                                    <Button variant="primary">
                                        Score
                                        <Badge variant="light">{data.answered + data.created}</Badge>
                                    </Button>
                                </h3>
                        </Card.Body>
                    </Card>

                ))}
            </div>
        )
    }
};

function mapStateToProps({ users, authedUser }) {
    const leaderData = Object.keys(users).map(id => ({
        id: id,
        name: users[id].name,
        avatarURL: users[id].avatarURL,
        created: users[id].questions.length,
        answered: Object.keys(users[id].answers).length,
        sum: users[id].questions.length + Object.keys(users[id].answers).length
    }));

    return {
        leaderData,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);