import React from 'react';
import { mount }  from 'enzyme';
import Card from './Card';

describe('Card Component', () => {
  const props = { prompt: 'info', answer: 'explain' };
  const card = mount(<Card card={props}/>);
  
  it('render Card component properly', () => {
    expect(card).toMatchSnapshot();
  });

  describe('Card render elements testing', () => {
    it('render div tag', () => { 
      // console.log(card.debug());
      expect(card.find('div').exists()).toBe(true);
    });
    it('reners the H4 tag', () => {
      expect(card.find('h4').exists()).toBe(true);
    });
    it('Total divs should be 3', () => {
      expect(card.find('div').length).toBe(3);
    });
    it('Ttoal h4 should be 2', () => {
      expect(card.find('h4').length).toBe(2);
    });
    it('Css checking', () => {
      expect(card.find('.card').exists()).toBe(true);
    });
    test('Css checking class name card-prompt', () => {
      expect(card.find('.card-prompt').exists()).toBe(true);
    });
    test('Css checking class name card-answer', () => {
      expect(card.find('.card-answer').exists()).toBe(true);
    });
    it('Answer value should be', () => {
      expect(card.find('h4').at(1).text()).toEqual('explain');
    })
    it('Answer value should be', () => {
      expect(card.find('h4').at(0).text()).toEqual('info');
    });
  });
  describe('when clicking on card', () => {
    let flag = false;
    beforeEach(() => {
      card.find('div').at(0).simulate('click');
    });
    it('updates the flag value in state', () => {
      expect(card.state().flag).toEqual(!flag);
    });
  });

});