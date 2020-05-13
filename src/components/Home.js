import React, { Component } from 'react';
import { connect } from "react-redux";

import HomeAnswered from './HomeAnswered';
import HomeUnAnswered from './HomeUnswered';

import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

class Home extends Component {
    render() {
        // if(this.props.authedUser === null){
        //     return (
        //         <Redirect to='/log'></Redirect>
        //     )
        // }
        return (
            <div>
                <Tab.Container id="tabs" defaultActiveKey="unanswered"> 
                    <Row className="navHomePage">
                        <Col sm={3} md={6} >
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="unanswered">UnAnswered Questions</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={3} md={6}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="answered">Answered Questions</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Tab.Content>
                            <Tab.Pane eventKey="unanswered" className="questions">
                                <HomeUnAnswered userUnAnswered={this.props.userUnAnswered} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="answered" className="questions">
                                <HomeAnswered userAnswered={this.props.userAnswered} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
};

function mapStateToProps({ polls, authedUser, users }) {
    const pollsNewProp = Object.values(polls).map((poll) => {
        const optionOneVoter = poll.optionOne.votes;
        const optionTwoVoter = poll.optionTwo.votes;
        const currentVoters = [...optionOneVoter, ...optionTwoVoter];

        return {
            ...poll,
            currentVoters,
            isAnswered: currentVoters.includes(authedUser)
        }
    });

    return {
        userAnswered: pollsNewProp.filter(ele => ele.isAnswered === true),
        userUnAnswered: pollsNewProp.filter(ele => ele.isAnswered === false),
        authedUser
    }
}

export default connect(mapStateToProps)(Home);
