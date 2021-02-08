import { Dispatch } from 'redux';
import { TURN_CHINESE_PAGE, TURN_ENGLISH_PAGE } from '../types';

export const turnCnPageAction: (data: any) => any = data => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TURN_CHINESE_PAGE, currentPage: data });
  };
};

export const turnEnPageAction: (data: any) => any = data => {
  return (dispatch: Dispatch) => {
    dispatch({ type: TURN_ENGLISH_PAGE, currentPage: data });
  };
};
