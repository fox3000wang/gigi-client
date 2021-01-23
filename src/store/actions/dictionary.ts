import { Dispatch } from 'redux';
import { getDictCnArray } from '../../api/dict';
import { INIT_DICTIONARY } from '../types';

export const initDictionaryAction: () => any = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: INIT_DICTIONARY, chinese: getDictCnArray() });
  };
};
