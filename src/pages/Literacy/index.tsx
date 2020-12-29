import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { getMockDate } from '../../api/getMockData';
import './style.css';

function Literacy(props: any) {
  console.log(props);

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
