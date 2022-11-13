import { Dispatch } from 'redux';
import { getDict } from '../../api/dict';
import { INIT_DICTIONARY } from '../types';

/*
export const initDictionaryAction: () => any = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: INIT_DICTIONARY, chinese: getDictCn(), english: getDictEn() });
  };
};
*/

export const initDictionaryAction: () => any = () => {
  return (dispatch: Dispatch) => {
    getDict().then((dict: any) => {
      dispatch({ type: INIT_DICTIONARY, chinese: dict.cn, english: dict.en });
    });
  };
};
