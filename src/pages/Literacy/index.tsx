import './style.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { getMockDate } from '../../api/getMockData';

import { initDictionaryAction } from '../../store/actions/dictionary';

function Literacy(props: any) {
  //props.dispatch(initDictionaryAction());

  const { dictionary } = props;

  useEffect(() => {
    if (null === dictionary.chinese) {
      props.dispatch(initDictionaryAction());
    }
  });

  const data = getMockDate();

  return (
    <div id='box'>
      <div className='bg'></div>
      <div id='list'>
        <ul>
          {data.map((e: any, i: number) => {
            return (
              <li key={i}>
                <img src={e.big} />
                <div></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Literacy);
