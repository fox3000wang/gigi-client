import '../../css/analysis.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecord } from '../../api/record';
import { record } from '../../module/record';
import { useHistory } from 'react-router-dom';
import { initDictionaryAction } from '../../store/actions/dictionary';
import '../../css/analysis.css';

function Analysis(props: any) {
  const history = useHistory();

  const { dictionary } = props;
  const { chinese } = dictionary;
  const records: any = getRecord();

  useEffect(() => {
    if (!chinese) {
      props.dispatch(initDictionaryAction());
      return;
    }
  });

  function hasRecord(record: record, records: Array<record>): boolean {
    let result = false;
    records.forEach((r: record) => {
      if (record.id === r.id && r.result) {
        result = true;
      }
    });
    return result;
  }

  chinese &&
    chinese.forEach((word: any) => {
      word.times = 0;
      records.forEach((record: record) => {
        if (word.id === record.id && record.result) {
          word.times = word.times + 1;
        }
      });
    });

  if (!chinese) {
    return <div></div>;
  }
  return (
    <div className='bg'>
      <div className='backBtn' onClick={() => history.push('/')}>
        返回
      </div>
      <div className='title'>报告页</div>
      <div className='box'>
        <div className='words'>
          {chinese.map((e: any, i: number) => {
            const sty = e.times ? 'analysis-box greenBg' : 'analysis-box';
            return (
              <div className={sty} key={i}>
                <div className='analysis-word'>
                  <div className='analysis-id'>{e.id}</div>
                  {e.name}
                </div>
                <div className='analysis-num'>{e.times}</div>
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
})(Analysis);
