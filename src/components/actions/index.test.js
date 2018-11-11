
import * as actions from './';
import { stack, stacks } from '../data/fixtures';


describe('actions', () => {
  it('creates an action to set the main stack', () => {
    const expectedAction = { type: actions.SET_STACK, stack };

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });

  it('creates an action to add a stack', () => {
    const newstack = { stack }
    const expectedAction = { type: actions.ADD_STACK, newstack };
    expect(actions.addStack(newstack)).toEqual(expectedAction);
  });
  it('creates an action to load stacks', () => {
    const expectedAction = { type: actions.LOAD_STACKS, stacks};
    expect(actions.loadStacks(stacks)).toEqual(expectedAction);
  });
});
