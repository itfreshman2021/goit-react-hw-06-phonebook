import { ADD_ITEMS_INFO, DELETE_ITEMS_INFO } from '../actions/itemsActions';

const initialState = () => {
  return (
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
};

const itemsReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ADD_ITEMS_INFO:
      return [...state, action.payload];
    case DELETE_ITEMS_INFO:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};
export default itemsReducer;
