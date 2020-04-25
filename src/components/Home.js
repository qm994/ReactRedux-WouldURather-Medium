import React, { Component } from 'react';
import { connect } from "react-redux";

import HomeAnswered from './HomeAnswered';
import HomeUnAnswered from './HomeUnswered';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeAnswered />
                <HomeUnAnswered />  
            </div>
        )
    }
};

export default connect()(Home);
