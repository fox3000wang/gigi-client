import { Dispatch } from 'redux';
import { getDictionary } from '../../api/getDictionary';
import { INIT_DICTIONARY } from '../types';

export const initDictionaryAction: () => any = () => {
  return (dispatch: Dispatch) => {
    const data = getDictionary();

    dispatch({ type: INIT_DICTIONARY, dictionary: data });
  };
};
