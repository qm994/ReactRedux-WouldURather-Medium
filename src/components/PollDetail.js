import React, { Component } from 'react';
import { connect } from 'react-redux';


class PollDetail extends Component {
    render() {
        return (
        <div><h3>Poll Detail: {this.props.id}</h3></div>
        )
    }
};

function mapStateToProps({ }, props) {
    const id = props.match.params.id
    console.log(props.match.params.id)
    return {
        id
    }
}
export default connect(mapStateToProps)(PollDetail);