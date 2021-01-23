import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './title.css';

function Title(params: any) {
  const history = useHistory();
  return (
    <div>
      <div className='component-title'>
        <div className='component-backBtn' onClick={() => history.push('/')}>
          返回
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Title);
