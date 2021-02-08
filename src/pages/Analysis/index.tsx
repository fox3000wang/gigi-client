import './style.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { record } from '../../module/record';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { getRecordAction } from '../../store/actions/record';
import Title from '../../component/title';
import Button from '../../component/button';

enum State {
  All,
  Known,
  Unknown,
}

function Analysis(props: any) {
  const { dictionary, record } = props;
  const { chinese, english } = dictionary;
  const { recordCn, recordEn } = record;
  const knownCn: any[] = [];
  const unknowCn: any[] = [];
  const knownEn: any[] = [];
  const unknowEn: any[] = [];

  useEffect(() => {
    chinese || props.dispatch(initDictionaryAction());
    recordCn || props.dispatch(getRecordAction());
  });

  const [state, setState] = useState(State.All);

  // 记录学习次数
  if (recordCn && chinese) {
    chinese.forEach((word: any) => {
      word.times = 0;
      recordCn.forEach((record: record) => {
        if (word.id === record.id && record.result) {
          word.times = word.times + 1;
        }
      });
      word.times > 0 ? knownCn.push(word) : unknowCn.push(word);
    });
  }
  if (recordEn && english) {
    english.forEach((word: any) => {
      word.times = 0;
      recordEn.forEach((record: record) => {
        if (word.id === record.id && record.result) {
          word.times = word.times + 1;
        }
      });
      word.times > 0 ? knownEn.push(word) : unknowEn.push(word);
    });
  }

  const wordsCn: any = {};
  wordsCn[State.All] = chinese;
  wordsCn[State.Known] = knownCn;
  wordsCn[State.Unknown] = unknowCn;

  const wordsEn: any = {};
  wordsEn[State.All] = english;
  wordsEn[State.Known] = knownEn;
  wordsEn[State.Unknown] = unknowEn;

  if (!recordCn || !chinese) {
    return <div></div>;
  }
  return (
    <div className='bg'>
      <Title txt='识字分析'></Title>
      <div className='scroll-box'>
        <div className='subTitle'>
          掌握({knownCn.length}/{chinese.length}){' '}
        </div>
        <div className='words'>
          {wordsCn[state].map((e: any, i: number) => {
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
        <div className='subTitle'>
          掌握({knownEn.length}/{english.length}){' '}
        </div>
        <div className='words'>
          {wordsEn[state].map((e: any, i: number) => {
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
        <Button txt='掌握' onClick={() => setState(State.Known)}></Button>
        <Button txt='不会' onClick={() => setState(State.Unknown)}></Button>
        <Button txt='全部' onClick={() => setState(State.All)}></Button>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Analysis);

// recordCn &&
//   recordCn.forEach((e: record) => {
//     if (e.result) {
//       if (!hasRecord(e, right)) {
//         right.push(e);
//       }
//     } else {
//       if (!hasRecord(e, wrong)) {
//         wrong.push(e);
//       }
//     }
//   });

// function hasRecord(record: record, records: Array<record>): boolean {
//   let result = false;
//   records.forEach((r: record) => {
//     if (record.id === r.id) {
//       result = true;
//     }
//   });
//   return result;
// }
