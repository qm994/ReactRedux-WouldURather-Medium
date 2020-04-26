import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component {
    render() {
        return (
            <div>
                poll
            </div>
        )
    }
};

function mapStateToProps({}) {

}

export default connect(mapStateToProps)(Poll)