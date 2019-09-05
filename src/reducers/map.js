import { SET_INPUT } from '../types';

const INITIAL_STATE = {
  input: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        input: payload,
      };
    default:
      return state;
  }
};
