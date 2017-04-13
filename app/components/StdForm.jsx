import React from 'react'
import axios from 'axios'

import store from '../store'
import { getStudents } from '../reducers/index'


const StdForm = (props) => {

  // todo: validate form
  const acceptForm = (e) => {
    // axios verify campus id, get campus inst
    // if (e.campus.value !== props.student.campus.name) {}
      // Create a route for finding a campus id by campus name
      //axios.get('/api/campuses')
    //let campusId =
    // create obj to upadate student
    // let where = {
    //   firstName: e.firstName.value,
    //   lastName: e.lastName.value,
    //   campusId: campusId
    // }
    // dispatch getStudents dispatcher
    store.dispatch(getStudents());
  }

  let student = props.student;
  return (
          <form onSubmit={ acceptForm }>
              <input type='text' defaultValue={student.firstName} name='firstName'/>
              <h3> </h3>
              <input type='text' defaultValue={student.lastName} name='firstName'/>
              <h3>, from </h3>
              <input type='text' defaultValue={student.campus.name} name='campus'/>
              <btn >Submit </btn>
            </form>
          )
}

export default StdForm
