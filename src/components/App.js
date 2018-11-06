import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stacklist from './Stacklist';


class App extends Component {
  render() {
    return(
      <div>
        
      <h2>Flash Card Pro</h2>
      <hr />
        <Stacklist />
        <hr />
        <Link to='/stack_form'><h4>Create a Stack Form</h4></Link>
      </div>
    );
  }
}

export default App;