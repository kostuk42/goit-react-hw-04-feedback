import React, { Component } from 'react';
import './FeedbackOptions.css';
import propTypes from 'prop-types';

export default class FeedbackOptions extends Component {
    render() {
        return (
            <>
            <button onClick={() => this.props.onChangeState('good')}>Good</button>
            <button onClick={() => this.props.onChangeState('neutral')}>Neutral</button>
            <button onClick={() => this.props.onChangeState('bad')}>Bad</button>
            </>
     )
 }
    
}

FeedbackOptions.propTypes = {
    onChangeState: propTypes.func.isRequired
}