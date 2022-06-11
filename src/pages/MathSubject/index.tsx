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

  /*
  function setLevel() {
    const text: any = document.getElementById('level');
    props.dispatch(
      getMathSubjectAction({
        ...config,
        level: text.value ? text.value : 10,
      })
    );
  }
  */

  // 生成 0-9 之间的随机数
  //function genRandom() {
  //  return Math.floor(Math.random() * config.level);
  //}

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
      let a: any = genRandom(3, 9);
      let b: any = genRandom(1, 9);
      while (a - b <= 0) {
        b = genRandom(2, 10);
      }
      let c: any = genRandom(3, 9);
      let d: any = genRandom(1, 9);
      while (c - d <= 0) {
        d = genRandom(2, 10);
      }

      subject.push([a * 10 + c, b * 10 + d]);
    }
    return subject;
  }

  //const mathSubject: any[] = genAdd();
  const mathSubject: any[] = genSub();

  const operatior = config.operator[0];
  return (
    <div className='bg'>
      <Title txt='数学题'>
        {/* <input id='level' type='text' onChange={setLevel}></input> */}
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
