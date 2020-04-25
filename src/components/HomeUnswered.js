import React, { Component } from 'react';

import { connect } from "react-redux";

class HomeUnAnswered extends Component {
    render() {
        return (
            <div>
                Unanswered Questions
            </div>
        )
    }
};


export default connect()(HomeUnAnswered)