import { Dispatch } from 'redux';
import { GET_MATH_SUBJECT } from '../types';

export const getMathSubjectAction: (data: any) => any = data => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_MATH_SUBJECT, config: data });
  };
};

