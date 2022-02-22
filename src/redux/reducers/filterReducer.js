import { createReducer } from '@reduxjs/toolkit';
import { addFilterInfo } from '../actions/filterActions';

const initialState = '';

const filterReducer = createReducer(initialState, {
  [addFilterInfo]: (state, action) => action.payload,
});

export default filterReducer;
// ============================= redux ============================================

// import { ADD_FILTER_INFO } from '../actions/filterActions';

// const initialState = '';

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FILTER_INFO:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default filterReducer;
