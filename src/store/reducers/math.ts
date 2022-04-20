import { GET_MATH_SUBJECT } from '../types';

let initMathSubject: any = {
  mathSubject: null,
};

export const mathSubjectReducer = (state: any = initMathSubject, action: any) => {
  switch (action.type) {
    case GET_MATH_SUBJECT:
      return {
        ...state,
        mathSubject: action.config,
      };
    default:
      return {
        ...state,
      };
  }
};
