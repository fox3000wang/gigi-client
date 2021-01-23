import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { record } from '../../module/record';
import { useHistory } from 'react-router-dom';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { getRecordAction } from '../../store/actions/record';
import Title from '../../component/title';

function Analysis(props: any) {
  const history = useHistory();

  const { dictionary, record } = props;
  const { chinese } = dictionary;
  const { recordCn } = record;

  useEffect(() => {
    chinese || props.dispatch(initDictionaryAction());
    recordCn || props.dispatch(getRecordAction());
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

  if (recordCn && chinese) {
    chinese.forEach((word: any) => {
      word.times = 0;
      recordCn.forEach((record: record) => {
        if (word.id === record.id && record.result) {
          word.times = word.times + 1;
        }
      });
    });
  }

  if (!recordCn || !chinese) {
    return <div></div>;
  }
  return (
    <div className='bg'>
      <Title>识字分析</Title>
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
