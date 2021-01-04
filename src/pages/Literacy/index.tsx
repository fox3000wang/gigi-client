import '../../css/literacy.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { turnPageAction } from '../../store/actions/chinese';
import { postRecord } from '../../api/postRecord';

function Literacy(props: any) {
  const { dictionary, chinesePage } = props;
  const { chinese } = dictionary;
  const { currentPage } = chinesePage;
  const { lastPage } = chinesePage;

  const audio = new Audio(`./mp3/chinese/${currentPage}.mp3`);

  useEffect(() => {
    if (!chinese) {
      props.dispatch(initDictionaryAction());
    }
  });

  function turnLeft() {
    if (currentPage < chinese.length - 1) {
      props.dispatch(turnPageAction(currentPage + 1));
    } else {
      props.dispatch(turnPageAction(0));
    }
  }

  function turnRight() {
    if (currentPage > 0) {
      props.dispatch(turnPageAction(currentPage - 1));
    } else {
      props.dispatch(turnPageAction(chinese.length - 1));
    }
  }

  function btnClickHandler(result: boolean) {
    postRecord({
      ...chinese[currentPage],
      result,
    });
  }

  const isInit: boolean = currentPage === lastPage;
  const isNext: boolean = currentPage > lastPage;

  console.log(`state ${JSON.stringify(chinesePage)}`);

  function getCard(data: any, isMain: boolean) {
    if (!data) {
      return <></>;
    }
    function getName() {
      if (isInit && isMain) {
        return 'swiper-slide';
      }
      return `swiper-slide ${
        isMain
          ? isNext
            ? `turnLeft`
            : `turnRight`
          : isNext
          ? `turnLeft2`
          : `turnRight2`
      }`;
    }
    return (
      <div
        className={getName()}
        key={Math.random()}
        onClick={() => audio.play()}>
        <div className='swiper-word'>{data.name}</div>
      </div>
    );
  }

  return (
    <div className='bg'>
      <div className='swiper-container'>
        {chinese && chinese.length ? (
          <div className='swiper-wrapper'>
            {isNext ? getCard(chinese[currentPage - 1], false) : null}
            {!isNext ? getCard(chinese[currentPage + 1], false) : null}
            {getCard(chinese[currentPage], true)}
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className='btn-container'>
        <div className='btn-group'>
          <div className='btn-right' onClick={() => btnClickHandler(true)}>
            正确
          </div>
          <div className='btn-wrong' onClick={() => btnClickHandler(false)}>
            错误
          </div>
        </div>
        <div className='btn-group'>
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
