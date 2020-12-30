import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { turnPageAction } from '../../store/actions/chinese';

function Literacy(props: any) {
  const { dictionary, chinesePage } = props;
  const { chinese } = dictionary;
  const { currentPage } = chinesePage;

  let words: Array<object> = [];
  let data: Array<object> = [];

  useEffect(() => {
    if (!chinese) {
      props.dispatch(initDictionaryAction());
    }
  });

  if (chinese && !words.length) {
    Object.keys(chinese).map(e => words.push(chinese[e]));
  }

  /*
  if (words) {
    if (currentPage === 0) {
      data = words.slice(0, 3);
    } else if (currentPage === words.length - 1) {
      data = words.slice(words.length - 3, words.length);
    } else {
      data = words.slice(currentPage - 1, currentPage + 1);
    }
  }*/
  if (words) {
    data = words.slice(currentPage, currentPage + 3);
  }

  function turnLeft() {
    props.dispatch(turnPageAction(currentPage + 1));
  }
  function turnRight() {
    props.dispatch(turnPageAction(currentPage - 1));
  }

  let audio = new Audio(`./mp3/chinese/${currentPage}.mp3`);

  console.log(`currentPage ${currentPage}`);
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
                  onClick={() => audio.play()}>
                  <div className='swiper-word'>{decodeURI(card.URI)}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div />
        )}
        <div className='btn-container'>
          <div className='btn-play' onClick={() => turnLeft()}>
            翻左
          </div>
          <div className='btn-play' onClick={() => turnRight()}>
            翻右
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
})(Literacy);
