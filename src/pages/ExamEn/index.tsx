import './style.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initDictionaryAction } from '../../store/actions/dictionary';
import { turnEnPageAction } from '../../store/actions/examAction';
import { postRecord } from '../../api/record';
import Title from '../../component/title';

function ExamEn(props: any) {
  const { dictionary, englishPage } = props;
  const { english } = dictionary;
  const { currentPage } = englishPage;
  const { lastPage } = englishPage;

  const audio = new Audio(`./mp3/english/${currentPage}.mp3`);

  useEffect(() => {
    english || props.dispatch(initDictionaryAction());
  });

  function turnLeft() {
    if (currentPage < english.length - 1) {
      props.dispatch(turnEnPageAction(currentPage + 1));
    } else {
      props.dispatch(turnEnPageAction(0));
    }
  }

  function turnRight() {
    if (currentPage > 0) {
      props.dispatch(turnEnPageAction(currentPage - 1));
    } else {
      props.dispatch(turnEnPageAction(english.length - 1));
    }
  }

  function btnClickHandler(result: boolean) {
    postRecord({
      ...english[currentPage],
      result,
      language: 'en',
    });
  }

  function jumpTo() {
    const text: any = document.getElementById('jump');
    if (!text.value) {
      return;
    }
    for (let i = 0; i < english.length; i++) {
      if (english[i].name === text.value) {
        props.dispatch(turnEnPageAction(english[i].id));
        text.value = '';
        return;
      }
    }
    text.blur();
    console.log(`${text.value} not fonud!!!`);
  }

  const isInit: boolean = currentPage === lastPage;
  const isNext: boolean = currentPage > lastPage;

  console.log(`state ${JSON.stringify(englishPage)}`);

  document.onkeydown = function (event) {
    // console.log(event.code);
    event.code === 'ArrowRight' ? turnRight() : null;
    event.code === 'ArrowLeft' ? turnLeft() : null;
    event.code === 'ArrowUp' ? btnClickHandler(true) : null;
    event.code === 'ArrowDown' ? btnClickHandler(false) : null;
    event.code === 'Space' ? audio.play() : null;
    event.code === 'Enter' ? jumpTo() : null;
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
        <div className='swiper-en-word'>{data.name}</div>
        <div className='swiper-id'>{data.id}</div>
        <div className='swiper-times'>{data.times}</div>
      </div>
    );
  }

  return (
    <div className='bg'>
      <Title txt='考试 English'></Title>
      <div className='literacy_input'>
        <input id='jump' type='text'></input>
        <button onClick={jumpTo}>go</button>
      </div>
      <div className='swiper-en-container'>
        {english && english.length ? (
          <div className='swiper-wrapper'>
            {isNext ? getCard(english[currentPage - 1], false) : null}
            {!isNext ? getCard(english[currentPage + 1], false) : null}
            {getCard(english[currentPage], true)}
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
})(ExamEn);
