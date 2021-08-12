import React, { Component } from 'react';
// import Section from '../Section/Section';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

export default class Statistics extends Component {
    render() {
        console.log(this.props)
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            
                <ul className={styles.list}>
                <li>Good: {good}</li>
                
                <li>Neutral: {neutral}</li>
                
                <li>Bad: {bad}</li>
                
                <li>Total: {total}</li>
             
                <li>positive Percentage: {positivePercentage}%</li>
                
                </ul>
    )
}
    
}

Statistics.propTypes = {
	good: propTypes.number.isRequired,
	bad: propTypes.number.isRequired,
	neutral: propTypes.number.isRequired,
	total: propTypes.number.isRequired,
	positivePercentage: propTypes.number.isRequired
};