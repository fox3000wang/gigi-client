import '../../css/report.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecord } from '../../api/record';
import { record } from '../../module/record';
import { useHistory } from 'react-router-dom';
import Title from '../../component/title';

function Report(props: any) {
  const history = useHistory();
  const right: any[] = [];
  const wrong: any[] = [];
  const { record } = props;
  const { recordCn } = record;

  function hasRecord(record: record, records: Array<record>): boolean {
    let result = false;
    records.forEach((r: record) => {
      if (record.id === r.id) {
        result = true;
      }
    });
    return result;
  }

  // 去重版
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

  return (
    <div className='bg'>
      <Title>识字情况</Title>
      <div className='box'>
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
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Report);
