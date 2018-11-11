import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
  const stackform = shallow(<StackForm />);

  it('renders the home title', () => {
    expect(stackform.find('h4').first().text()).toEqual('Home');
  });
  it('renders the create a new stack', () => {
    expect(stackform.find('h4').at(1).text()).toEqual('Create a New Stack');
  });
  it('renders Link element', () => {
    expect(stackform.find('Link').exists()).toBe(true);
  });
  it('renders a button to add a new card', () => {
    expect(stackform.find('Button').at(0).props().children).toEqual('Add Card');
  });
  it('renders a button to submit the form', () => {
    expect(stackform.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
  });
  describe('add updating the title',() => {
    beforeEach(() => {
      stackform.find('FormControl').at(0).simulate('change', {target: { value: changeTitle}});
    });
    it('updates the title in state', () => {
      expect(stackform.state().title).toEqual(changeTitle);
    });
  });
  describe('when adding a new card', () => {
    beforeEach(() => {
      stackform.find('Button').at(0).simulate('click');
    });
    // afterEach(() => {
    //   stackform.setState({cards: []});
    // })
    it('adds a new card to the state', () => {
      // console.log(stackform.debug());
      expect(stackform.state().cards.length).toEqual(1);
    });
    it('renders the propmpt section', () => {
      expect(stackform.find('ControlLabel').at(1).props().children).toEqual('Prompt:')
    });
    it('renders the answer sction', () => {
      expect(stackform.find('ControlLabel').at(2).props().children).toEqual('Answer:');
    });
  });
  describe('and updating the card prompt', () => {
    beforeEach(() => {
      stackform.find('FormControl').at(1).simulate('change', {target: {value: changePrompt}});
    });
    it('updates the prompt in the state', () => {
      console.log(stackform.debug());
      expect(stackform.state().cards[0].prompt).toEqual(changePrompt);
    });
  });
  describe('and updating the card answer', () => {
    beforeEach(() => {
      stackform.find('FormControl').at(2).simulate('change', {target: {value: changeAnswer}});
    });
    it('updates the prompt in the state', () => {
     
      expect(stackform.state().cards[0].answer).toEqual(changeAnswer);
    });
    describe('updates the stack at store', () => {
      beforeEach(() => {
        stackform.find('Button').at(1).simulate('click');
      });
      // it('Sending state object as prarmeter', () => {
        
      // })
    });
  });
});