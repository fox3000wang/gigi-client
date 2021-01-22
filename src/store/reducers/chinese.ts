import { TURN_CHINESE_PAGE } from '../types';

const DEFAULT_PAGE:number = 0;
//const DEFAULT_PAGE:number = 750;

let page: any = {
  currentPage: DEFAULT_PAGE,
  lastPage: DEFAULT_PAGE,
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

