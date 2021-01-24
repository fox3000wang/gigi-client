import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { getRecordAction } from '../../store/actions/record';
import Title from '../../component/title';

function Home(props: any) {
  const history = useHistory();

  useEffect(() => {
    const { dictionary, record } = props;
    const { chinese } = dictionary;
    const { recordCn } = record;
    chinese || props.dispatch(initDictionaryAction());
    recordCn || props.dispatch(getRecordAction());
  });

  return (
    <div className='bg'>
      <div className='home-title'>琪琪识字</div>
      <div className='menu'>
        <div className='home-btn' onClick={() => history.push('/exercise')}>
          练习
        </div>
        <div className='home-btn' onClick={() => history.push('/exam')}>
          考试
        </div>
        {/* <div className='btn' onClick={() => history.push('/record')}>
          识字情况
        </div> */}
        <div className='home-btn' onClick={() => history.push('/analysis')}>
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
