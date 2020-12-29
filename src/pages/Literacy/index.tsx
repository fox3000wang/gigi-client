import './style.css';
//import './swiper.min.css';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initDictionaryAction } from '../../store/actions/dictionary';

function Literacy(props: any) {
  const { dictionary } = props;
  const { chinese } = dictionary;
  let words: Array<object> = [];
  let data: Array<object> = [];

  let slideIndex: number = 0;

  function cardOnClick(index: number) {
    slideIndex = index;
  }

  useEffect(() => {
    if (!chinese) {
      props.dispatch(initDictionaryAction());
    }
  });

  if (chinese && !words.length) {
    Object.keys(chinese).map(e => words.push(chinese[e]));
  }

  if (words) {
    data = words.slice(0, 5);
  }

  return (
    <div className='bg'>
      <div className='swiper-container'>
        {data && data.length > 0 ? (
          <div className='swiper-wrapper'>
            {data.map((card: any, index: number) => {
              return (
                <div
                  className='swiper-slide'
                  key={card.id}
                  onClick={() => cardOnClick(index)}>
                  <div className='swiper-word'>{decodeURI(card.URI)}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    ...state,
  };
})(Literacy);
