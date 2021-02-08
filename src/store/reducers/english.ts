import { TURN_ENGLISH_PAGE } from '../types';

const DEFAULT_PAGE:number = 0;

let page: any = {
  currentPage: DEFAULT_PAGE,
  lastPage: DEFAULT_PAGE,
};
export const englishReducer = (state: any = page, action: any) => {
  switch (action.type) {
    case TURN_ENGLISH_PAGE:
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

