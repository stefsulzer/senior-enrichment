// IMPORTS FOR REDUCERS
import { combineReducers } from 'redux';

// IMPORTS FOR DISPATCHERS
import axios from 'axios';

// TYPES
const GOT_CAMPUSES = 'GOT_CAMPUSES';

// ACTION CREATORS
function gotCampuses(campuses) {
  return {
    type: GOT_CAMPUSES,
    campuses
  }
}

// DISPATCHERS
export function getCampuses() {
  return (dispatch) => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(gotCampuses(campuses)))
    .catch(console.error);
  }
}

const initialState = {
  campuses: []
}

const rootReducer = function(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case GOT_CAMPUSES:
      newState.campuses = action.campuses;
      break;
    default:
      return state;
  }
  return newState;
};

export default rootReducer;
