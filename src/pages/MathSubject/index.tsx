import './style.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Title from '../../component/title';
import { getMathSubjectAction } from '../../store/actions/math';

const config = {
  operator: ['+', '-', '*', '/'],
  level: 10,
};

function MathSubject(props: any) {
  useEffect(() => {});

  function setLevel() {
    const text: any = document.getElementById('level');
    props.dispatch(
      getMathSubjectAction({
        ...config,
        level: text.value ? text.value : 10,
      })
    );
  }

  const mathSubject: any[] = [];
  for (let i: any = 0; i < 104; i++) {
    mathSubject.push([
      Math.floor(Math.random() * config.level),
      Math.floor(Math.random() * config.level),
    ]);
  }

  return (
    <div className='bg'>
      <Title txt='数学题'>
        <input id='level' type='text' onChange={setLevel}></input>
      </Title>
      <div className='scroll-box'>
        <div>
          <div className='words'>
            {mathSubject.map((e: any, i: number) => {
              return (
                <div className='mathSubject' key={i}>
                  {e[0]} + {e[1]} =
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className='analysis-buttom'></div> */}
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(MathSubject);
