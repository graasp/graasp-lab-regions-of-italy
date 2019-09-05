import { SET_INPUT } from '../types';

const setInput = input => dispatch => {
  dispatch({
    payload: input,
    type: SET_INPUT,
  });
};

export {
  // todo: remove when more actions are added
  // eslint-disable-next-line import/prefer-default-export
  setInput,
};
