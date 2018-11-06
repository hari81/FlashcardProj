import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';
import { combineReducers } from 'redux';

function stack(state = {}, action) {
  switch(action.type) {
    case SET_STACK:
    return action.stack;
    default:
    return state;
  }
}

function stacks (state=[], action) {
  switch(action.type) {
    case LOAD_STACKS:
      return action.stacks;
      case ADD_STACK:
      return [...state, { id: state.length, title: action.newstack.title, cards: action.newstack.cards }];
    default:
    return state;
  }
}

export default combineReducers({stack, stacks});
