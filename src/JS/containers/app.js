import React from 'react';
import { connect } from 'react-redux';

import ListComponent from '../components/listComent';
import { addComent, delComent } from '../actions/index'
import AddComent from '../components/appComent';

let Coments = (props) => {

  const { coments, addComent, delComent } = props;

  return (
    <div>
      <ListComponent 
      coments={coments}
       delComent={delComent} 
      />
      <AddComent
      addComent={addComent} 
      />
    </div>
  )
}

const mapStateToProps = (state ) => {
  return {
    coments: state
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addComent: (author, textComent) => dispatch(addComent(author, textComent)),
    delComent: (id) => dispatch(delComent(id))
  }
}

Coments = connect (
  mapStateToProps,
  mapDispatchToProps
)(Coments)

export default Coments;