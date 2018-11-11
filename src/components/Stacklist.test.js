import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from './Stacklist';
import { stacks } from './data/fixtures';

const props = { stacks };
describe('Stacklist', () => {

  const stacklist = shallow(<StackList {...props} />);
  it('renders h4 in jsx', () => {
    expect(stacklist.find('h4').exists()).toBe(true);
  });
  it('renders the correct number of links', () => {
    expect(stacklist.find('Link').length).toBe(props.stacks.length)
  });
  it('renders div element', () => {
    expect(stacklist.find('div').exists()).toBe(true);
  });
  describe('functional behaviour test', () => {
    beforeEach(() => {
      stacklist.find('Link').at(0).simulate('click');
    });
  });
});