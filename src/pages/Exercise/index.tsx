import './style.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initDictionaryAction } from '../../store/actions/dictionary';
import Title from '../../component/title';

/**
 * 用iframe套一个识字的app
 * @param props
 */
function Exercise(props: any) {
  const { dictionary } = props;
  const { chinese } = dictionary;
  const [current, setCurrent] = useState(0);
  const ID = 825;
  let btns: any[] = [];

  useEffect(() => {
    chinese || props.dispatch(initDictionaryAction());
  });

  if (chinese) {
    // for (let i = 0; i < chinese.length; i += 8) {
    for (let i = 0; i < 1000; i += 8) {
      const btn = [];
      for (let j = 0; j < 8; j++) {
        btn.push(chinese[i + j]);
      }
      btns.push(btn);
    }
  }

  if (current === 0) {
    return (
      <div className='bg'>
        <Title txt='练习'></Title>
        <div className='box'>
          <div className='btn-ctn'>
            {btns.map((items, i) => {
              return (
                <div
                  key={i}
                  className='red-btn'
                  onClick={() => setCurrent(i + 1)}>
                  {items.map((item: any) => {
                    return <div key={item.id}>{item.name}</div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const code = ID + current - 1;
    const url = `https://app.readoor.cn/app/qb/cs/1576644356?lib=NzkwNzY=&group=${btoa(
      code.toString()
    )}&cl=NzkwODhfMTU1Nzcz&f=1`;
    return (
      <div className='exercise'>
        <div className='exercise-back-btn' onClick={() => setCurrent(0)}>
          返回
        </div>
        <iframe className='inner' src={url}></iframe>
        <div className='mask-l'></div>
        <div className='mask-r'></div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state,
  };
})(Exercise);
