import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Student from './Student';

const Students = function(props) {

  const checkToRender = (student) => {
  if (+props.params.id == +student.id) {
    console.log(true);
    return (<Student student={student} />);
  } else { return null }
}

  return (
          <div>
            { props.students.map(student => {
                return (
                        <div key={student.id}>
                        <hr/>
                        <Link to={`/students/${ student.id }`}><h3>{student.firstName} {student.lastName}, from {student.campus.name}</h3>
                        </Link>
                        { checkToRender(student) }
                        </div>
                        )
              })
            }
            </div>
          )
}



// HOW TO PASS PROPS FROM ONE INTO A REACT ROUTER CHILD, IF GETTING FROM REDUX STATE IS UNECESSARY:

//           { props.children
//             && React.cloneElement(props.children, {
// students: props.students }) }

const mapStateToProps = state => {
  return {
    students: state.students
  }
}

// const mapDispatch;

export default connect(mapStateToProps, null)(Students)
