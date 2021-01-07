import { TURN_CHINESE_PAGE } from '../types';

let page: any = {
  currentPage: 100,
  lastPage: 100,
};
export const chineseReducer = (state: any = page, action: any) => {
  switch (action.type) {
    case TURN_CHINESE_PAGE:
      return {
        ...state,
        lastPage: state.currentPage,
        currentPage: action.currentPage,
      };
    default:
      return {
        ...state,
      };
  }
};

