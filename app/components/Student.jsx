import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const Student = function(props) {
  console.log('props for single student: ', props.student);

  let student = props.student
  return (
        <div>
          <h3>{student.email}</h3>
          <img src={student.imageURL}/>
        </div>
      )

}

export default Student


