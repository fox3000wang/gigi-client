import React from 'react';
import { connect } from 'react-redux';
import './button.css';

function Button(params: any) {
  return (
    <div className='component-button' onClick={params.onClick}>
      {params.txt}
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Button);
