const initialState = [];

const contact = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        favorite:!state.favorite
      };
    }
    default: {
      return state;
    }
  }
};

export const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT': {
      return [
        ...state,
        {
          id:action.id,
          favorite:false,
          ...action.note
        }
      ];
    }
    case 'TOGGLE_FAVORITE': {
      return state.map(item => contact(item, action));
    }
    default: {
      return state;
    }
  }
};