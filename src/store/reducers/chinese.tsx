import { TURN_CHINESE_PAGE } from '../types';

let page: any = {
  currentPage: 0,
};
export const chineseReducer = (state: any = page, action: any) => {
  switch (action.type) {
    case TURN_CHINESE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return {
        ...state,
      };
  }
};
