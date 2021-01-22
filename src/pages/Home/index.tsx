import '../../css/home.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Home(props: any) {
  const history = useHistory();
  return (
    <div className='bg'>
      <div className='title'>琪琪识字</div>
      <div className='menu'>
        <div className='btn' onClick={() => history.push('/exercise')}>
          练习
        </div>
        <div className='btn' onClick={() => history.push('/literacy')}>
          考试
        </div>
        <div className='btn' onClick={() => history.push('/record')}>
          识字情况
        </div>
        <div className='btn' onClick={() => history.push('/analysis')}>
          识字分析
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
