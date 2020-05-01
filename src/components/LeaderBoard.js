import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';


class LeaderBoard extends Component {
    
    render() {
        console.log(this.props.leaderData)
        return (
            <div>
                
                <Card>

                </Card>
            </div>
        )
    }
};

function mapStateToProps({users, authedUser}) {
    const leaderData = Object.keys(users).map(id => ({
        id: id,
        name: users[id].name,
        created: users[id].questions.length,
        answered: Object.keys(users[id].answers).length
    }));

    return {
        leaderData,
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);