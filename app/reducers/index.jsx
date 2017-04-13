// IMPORTS FOR REDUCERS
import { combineReducers } from 'redux';

// IMPORTS FOR DISPATCHERS
import axios from 'axios';

// TYPES
const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_STUDENTS = 'GOT_STUDENTS';

// ACTION CREATORS
function gotCampuses(campuses) {
  return {
    type: GOT_CAMPUSES,
    campuses
  }
}
function gotStudents(students) {
  return {
    type: GOT_STUDENTS,
    students
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
export function getStudents() {
  return (dispatch) => {
    axios.get('api/students')
    .then(res => res.data)
    .then(students => dispatch(gotStudents(students)))
    .catch(console.error);
  }
}

const initialState = {
  campuses: [],
  students: []
}

const rootReducer = function(state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GOT_CAMPUSES:
      newState.campuses = action.campuses;
      break;
    case GOT_STUDENTS:
      newState.students = action.students;
      break;
    default:
      return state;
  }
  return newState;
};

export default rootReducer;
