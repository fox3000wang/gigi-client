import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { record } from '../../module/record';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { getRecordAction } from '../../store/actions/record';
import Title from '../../component/title';

function Analysis(props: any) {
  const { dictionary, record } = props;
  const { chinese } = dictionary;
  const { recordCn } = record;
  const right: any[] = [];
  const wrong: any[] = [];

  useEffect(() => {
    chinese || props.dispatch(initDictionaryAction());
    recordCn || props.dispatch(getRecordAction());
  });

  function hasRecord(record: record, records: Array<record>): boolean {
    let result = false;
    records.forEach((r: record) => {
      if (record.id === r.id) {
        result = true;
      }
    });
    return result;
  }

  recordCn &&
    recordCn.forEach((e: record) => {
      if (e.result) {
        if (!hasRecord(e, right)) {
          right.push(e);
        }
      } else {
        if (!hasRecord(e, wrong)) {
          wrong.push(e);
        }
      }
    });

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
      <Title txt='识字分析'></Title>
      <div className='scroll-box'>
        <div className='subTitle'>掌握 ({right.length})</div>
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
        <div className='subTitle'></div>
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
      <div className='analysis-buttom'>
        <div>掌握</div>
        <div>全部</div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Analysis);
