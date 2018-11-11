import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('renders the Flashcard pro title', () => {
    expect(app.find('h2').text()).toEqual('Flash Card Pro');
  });
  it('renders the StackList', () => {
    // console.log(app.debug());
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  });
  it('reders a link to create new stacks', () => {
    expect(app.find('Link h4').text()).toEqual('Create a Stack Form');
  })
});