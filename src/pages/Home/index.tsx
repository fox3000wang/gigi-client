import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { getRecordAction } from '../../store/actions/record';

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
        <div className='home-btn' onClick={() => history.push('/exercise_cn')}>
          中文练习
        </div>
        <div className='home-btn' onClick={() => history.push('/exam_cn')}>
          中文考试
        </div>
        <div className='home-btn' onClick={() => history.push('/exam_en')}>
          英文考试
        </div>
        <div className='home-btn' onClick={() => history.push('/analysis')}>
          识字分析
        </div>
        <div className='home-btn' onClick={() => history.push('/math_subject')}>
          数学题
        </div>
        <div className='home-btn' onClick={() => history.push('/history')}>
          学习履历
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
