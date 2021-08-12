import React, { Component } from 'react';
import './App.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  
  // total = this.countTotalFeedback()
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  changeState(vote) {
    this.setState((state) => {
      return {[vote]: state[vote] + 1}
    })
    console.log(this.state);
  }
  countTotalFeedback() {
    
    return this.state.good + this.state.neutral + this.state.bad
  }
  countPositiveFeedbackPercentage() {
    return Math.round(this.state.good/this.countTotalFeedback()*100) || 0
   }
  render() {
      
    return (
     <>
     <Section title="feedbackOptions">
       <FeedbackOptions
            onChangeState={this.changeState.bind(this)}
       />
        </Section>
        <Section title="statistics"
                 total={this.countTotalFeedback()}
        >
          {this.countTotalFeedback() ? 
                 <Statistics
                  good={ this.state.good }
                  neutral={ this.state.neutral }
                  bad={ this.state.bad }
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
            /> : <Notification />
            }
        </Section> 
        
      </>
     
  )
  }
  
}