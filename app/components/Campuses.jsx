import React, { Component } from 'react';
import { connect } from 'react-redux';

class Campuses extends Component {
  constructor() {
    super()


  }

  render() {

    return (
            <div>
            { this.props.campuses.map(campus => {
                return (
                        <div key={campus.name}>
                        <h1>{campus.name}</h1>
                        <img src={campus.imageURL}/>
                        </div>
                        )
              })
            }
            </div>
            )
  }
}

function mapStateToProps(state) {
  return {
    campuses: state.campuses
  }
}
function mapDispatch(){

}

export default connect(mapStateToProps, null)(Campuses);
