const ADD_FILTER_INFO = 'items/addFilterInfo';
export { ADD_FILTER_INFO };

const addFilterInfo = value => {
  return {
    type: ADD_FILTER_INFO,
    payload: value,
  };
};

export { addFilterInfo };
