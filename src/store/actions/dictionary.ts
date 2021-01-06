import { Dispatch } from 'redux';
import { getChineseArray } from '../../api/getDictionary';
import { INIT_DICTIONARY } from '../types';

export const initDictionaryAction: () => any = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: INIT_DICTIONARY, chinese: getChineseArray() });
  };
};
