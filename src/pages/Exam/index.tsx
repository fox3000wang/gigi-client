import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { turnPageAction } from '../../store/actions/chinese';
import { postRecord } from '../../api/record';
import { useHistory } from 'react-router-dom';
import { record } from '../../module/record';
import Title from '../../component/title';

function Exam(props: any) {
  const { dictionary, chinesePage } = props;
  const { chinese } = dictionary;
  const { currentPage } = chinesePage;
  const { lastPage } = chinesePage;

  const audio = new Audio(`./mp3/chinese/${currentPage}.mp3`);

  useEffect(() => {
    chinese || props.dispatch(initDictionaryAction());
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

  function jumpTo() {
    const text: any = document.getElementById('jump');
    for (let i = 0; i < chinese.length; i++) {
      if (chinese[i].name === text.value) {
        props.dispatch(turnPageAction(chinese[i].id));
        text.value = '';
        return;
      }
    }
    console.log(`${text.value} not fonud!!!`);
  }

  const isInit: boolean = currentPage === lastPage;
  const isNext: boolean = currentPage > lastPage;

  console.log(`state ${JSON.stringify(chinesePage)}`);

  document.onkeydown = function (event) {
    // console.log(event.code);
    event.code === 'ArrowRight' ? turnRight() : null;
    event.code === 'ArrowLeft' ? turnLeft() : null;
    event.code === 'ArrowUp' ? btnClickHandler(true) : null;
    event.code === 'ArrowDown' ? btnClickHandler(false) : null;
    event.code === 'Space' ? audio.play() : null;
  };

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
        <div className='swiper-id'>{data.id}</div>
        <div className='swiper-times'>{data.times}</div>
      </div>
    );
  }

  return (
    <div className='bg'>
      <Title></Title>
      <div className='literacy_input'>
        <input id='jump' type='text'></input>
        <button onClick={jumpTo}>go</button>
      </div>
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
            <div className='triangleUp'></div>
            正确
          </div>
          <div className='btn-wrong' onClick={() => btnClickHandler(false)}>
            错误
            <div className='triangleDown'></div>
          </div>
        </div>
        <div className='btn-group'>
          <div className='btn-play' onClick={turnLeft}>
            <div className='triangleLeft'></div>
            翻左
          </div>
          <div className='btn-play' onClick={turnRight}>
            翻右
            <div className='triangleRight'></div>
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
})(Exam);
