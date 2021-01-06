import '../../css/exercise.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { record } from '../../module/record';
import { initDictionaryAction } from '../../store/actions/dictionary';

// function Ebase(str) {
//   try {
//     if (typeof str !== 'undefined' && str !== '' && typeof str !== 'object') {
//       if (typeof str !== 'string') {
//         str = str.toString();
//       }
//       return $.base64.btoa(str, true);
//     } else {
//       return '';
//     }
//   } catch (e) {
//     return '';
//   }
// }

function Exercise(props: any) {
  const history = useHistory();
  const [current, setCurrent] = useState(0);
  const ID = 825;
  const { dictionary } = props;
  const { chinese } = dictionary;

  let btns: any[] = [];

  useEffect(() => {
    if (!chinese) {
      props.dispatch(initDictionaryAction());
    }
  });

  if (chinese) {
    for (let i = 0; i < chinese.length; i += 8) {
      const btn = [];
      for (let j = 0; j < 8; j++) {
        btn.push(chinese[i + j]);
      }
      btns.push(btn);
    }
  }

  if (current === 0) {
    return (
      <div>
        <div className='title-red'>
          <div className='backBtn' onClick={() => history.push('/')}>
            返回
          </div>
        </div>

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
    );
  } else {
    const code = ID + current - 1;
    const url = `https://app.readoor.cn/app/qb/cs/1576644356?lib=NzkwNzY=&group=${btoa(
      code.toString()
    )}&cl=NzkwODhfMTU1Nzcz&f=1`;
    return (
      <div className='exercise'>
        <div className='backBtn' onClick={() => setCurrent(0)}>
          返回
        </div>
        <iframe className='inner' src={url}></iframe>
        {/* <div className='mask-l'></div>
        <div className='mask-r'></div> */}
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state,
  };
})(Exercise);
