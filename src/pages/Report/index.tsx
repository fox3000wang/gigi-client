import '../../css/report.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecord } from '../../api/record';
import { record } from '../../module/record';
import { useHistory } from 'react-router-dom';

let data: any = getRecord();

function Report(props: any) {
  const history = useHistory();
  const right: any[] = [];
  const wrong: any[] = [];

  // debugger;

  data.forEach((e: record) => {
    if (e.result) {
      right.push(e);
    } else {
      wrong.push(e);
    }
  });

  return (
    <div className='bg'>
      <div className='backBtn' onClick={() => history.push('/')}>
        返回
      </div>
      <div className='title'>报告页</div>
      <div className='box'>
        <div className='subTitle'>掌握</div>
        <div className='words'>
          {right.map((e: record, i: number) => {
            return (
              <div className='word' key={i}>
                {e.name}
              </div>
            );
          })}
        </div>
        <div className='subTitle'>不认识</div>
        <div className='words'>
          {wrong.map((e: record, i: number) => {
            return (
              <div className='word' key={i}>
                {e.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Report);
