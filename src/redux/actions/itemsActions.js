const ADD_ITEMS_INFO = 'items/addItemsInfo';
export { ADD_ITEMS_INFO };
const DELETE_ITEMS_INFO = 'items/deleteItemsInfo';
export { DELETE_ITEMS_INFO };

const addItemsInfo = contactNew => {
  return {
    type: ADD_ITEMS_INFO,
    payload: contactNew,
  };
};

export { addItemsInfo };

const deleteItemsInfo = idContact => {
  return {
    type: DELETE_ITEMS_INFO,
    payload: idContact,
  };
};

export { deleteItemsInfo };
