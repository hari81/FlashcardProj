import React, { Component } from 'react';

// import '../index.css';
class Card extends Component {
  state = {
    flag: false,
  }
  render () {
    const { prompt, answer } = this.props.card;
    return (
      <div className='card' onClick={() => this.setState({flag: !this.state.flag})}>
        <div className='card-prompt'>
          <h4>{prompt}</h4>
        </div>
        <div className= 'card-answer'>
        
          <h4 className={this.state.flag ? 'text-reveal' : 'text-hidden'}>{answer}</h4>
        
        </div>
       
      </div>
    );
  }
}

export default Card;