import { Dispatch } from 'redux';
import { TURN_CHINESE_PAGE } from '../types';

export const turnPageAction: (data: any) => any = data => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TURN_CHINESE_PAGE, currentPage: data });
  };
};
