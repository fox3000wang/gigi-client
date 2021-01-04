import '../../css/home.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Home(props: any) {
  const history = useHistory();
  return (
    <div className='bg'>
      <div className='title'>目录</div>
      <div className='menu'>
        <div className='btn' onClick={() => history.push('/literacy')}>
          考试
        </div>
        <div className='btn' onClick={() => history.push('/')}>
          识字情况
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Home);
