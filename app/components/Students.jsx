import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Student from './Student'
import StdForm from './StdForm'

import store from '../store'
import { setEditable } from '../reducers/index'

const Students = function(props) {

  const checkToRender = (student) => {
    if (+props.params.id == +student.id) {
      console.log(true);
      return (<Student student={student} />);
    } else {
      return null
    }
  }
  const checkToRenderForm = (student) => {
    if (props.edit && +props.params.id == +student.id) {
      return (<StdForm student={ student }/>);
    } else {
      return null;
    }
  }

  const onClick = () => {
    store.dispatch(setEditable());
  }
  // Would  also like a route onChange the will dispatch a setUneditable

  return (
          <div>
            { props.students.map(student => {
                return (
                        <div key={student.id}>
                        <hr/>
                        <Link to={`/students/${ student.id }`}><h3>{student.firstName} {student.lastName}, from {student.campus.name}</h3>
                        </Link>
                        <span> <btn onClick={ onClick }>Edit</btn> </span>

                        { checkToRender(student) }
                        { checkToRenderForm(student) }

                        </div>
                        )
              })
            }
            </div>
          )
}



// HOW TO PASS PROPS FROM ONE COMP INTO A REACT ROUTER CHILD, IF GETTING FROM REDUX STATE IS UNDESIREABLE:

//           { props.children
//             && React.cloneElement(props.children, {
// thing: props.thing }) }

const mapStateToProps = state => {
  return {
    students: state.students,
    edit: state.edit
  }
}

// const mapDispatch;

export default connect(mapStateToProps, null)(Students)
