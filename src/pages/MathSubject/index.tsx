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

  function randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 生成 0-9 之间的随机数
  function gemRandom() {
    return Math.floor(Math.random() * config.level);
  }

  // 生成加法题
  function gemAdd() {
    const subject: any[] = [];
    config.operator = ['+'];
    for (let i: any = 0; i < 104; i++) {
      let a: any = gemRandom();
      let b: any = gemRandom();
      while (a + b > 10) {
        b = gemRandom();
      }
      subject.push([a, b]);
    }
    return subject;
  }

  // 生成减法题
  function gemSub() {
    const subject: any[] = [];
    config.operator = ['-'];
    for (let i: any = 0; i < 104; i++) {
      let a: any = gemRandom() + 1;
      let b: any = gemRandom();
      while (a - b < 0) {
        b = gemRandom();
      }
      subject.push([a, b]);
    }
    return subject;
  }

  //const mathSubject: any[] = gemAdd();
  const mathSubject: any[] = gemSub();

  const operatior = config.operator[0];
  return (
    <div className='bg'>
      <Title txt='数学题'>
        <input id='level' type='text' onChange={setLevel}></input>
      </Title>
      <div className='scroll-box'>
        <div>
          <div className='subjects'>
            {mathSubject.map((e: any, i: number) => {
              return (
                <div className='mathSubject' key={i}>
                  {e[0]} {operatior} {e[1]} =
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(MathSubject);
