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

  // 生成随机数
  function genRandom(from: number, to: number) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  // 生成加法题
  function genAdd() {
    const subject: any[] = [];
    config.operator = ['+'];
    //for (let i: any = 0; i < 104; i++) {
    for (let i: any = 0; i < 112; i++) {
      let a: any = genRandom(1, 7);
      let b: any = genRandom(1, 10);
      while (a + b > 9) {
        b = genRandom(1, 10);
      }
      subject.push([a + 10, b + 10]);
    }
    return subject;
  }

  // 生成减法题
  function genSub() {
    const subject: any[] = [];
    config.operator = ['-'];
    for (let i: any = 0; i < 104; i++) {
      let a: any = genRandom(9, 18);
      let b: any = genRandom(6, 12);
      while (a - b <= 0) {
        b = genRandom(1, 9);
      }
      subject.push([a, b]);
    }
    return subject;
  }

  // 生成乘法题
  function genmul() {
    const subject: any[] = [];
    config.operator = ['X'];

    for (let i: any = 0; i < 112; i++) {
      let a: any = genRandom(1, 2);
      let b: any = genRandom(1, 9);
      subject.push([a, b]);
    }
    return subject;
  }

  const mathSubject: any[] = genmul();

  const operatior = config.operator[0];
  return (
    <div className='bg'>
      <Title txt='数学题'>{/* <input id='level' type='text' onChange={setLevel}></input> */}</Title>
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
