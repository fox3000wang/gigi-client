import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { record } from '../../module/record';
import Title from '../../component/title';
import { getRecordAction } from '../../store/actions/record';
import { initDictionaryAction } from '../../store/actions/dictionary';

function History(props: any) {
  const { dictionary, record } = props;
  const { chinese } = dictionary;
  const { recordCn } = record;
  const history: any = {};

  useEffect(() => {
    chinese || props.dispatch(initDictionaryAction());
    recordCn || props.dispatch(getRecordAction());
  });

  recordCn &&
    recordCn.forEach((record: record) => {
      if (!history[record.date]) {
        history[record.date] = [];
      }
      history[record.date].push(record);
    });

  if (!recordCn) {
    return <></>;
  }
  return (
    <div className='bg'>
      <Title txt='识字履历'></Title>
      <div className='box'>
        {Object.keys(history).map((key: string) => {
          const words = history[key];
          return (
            <div className='words' key={key}>
              <div className='subTitle'>{key}</div>
              {words.map((record: record) => {
                return (
                  <div className='word' key={`${key}${record.id}`}>
                    {record.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(History);
