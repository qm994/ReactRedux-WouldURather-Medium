import React, { Component } from 'react';
import { connect } from 'react-redux';


class PollDetail extends Component {
    render() {
        return (
            <div>Poll Detail</div>
        )
    }
};

function mapStateToProps({ }, props) {
    console.log(props)
}
export default PollDetail;