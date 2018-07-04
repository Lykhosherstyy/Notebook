export const addContact = (note) => ({
  type:'ADD_CONTACT',
  id: Date.now(),
  note
});

export const toogleFavorite = (id) => {
  return {
    type: 'TOGGLE_FAVORITE',
    id
  };
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

export const setView = (view) => {
  return {
    type: 'SET_VIEW',
    view
  };
};