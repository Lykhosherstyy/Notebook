const initialState = 'SHOW_LIST';

export const view = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW': {
      return action.view;
    }
    default: {
      return state;
    }
  }
};