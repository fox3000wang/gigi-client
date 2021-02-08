import { INIT_DICTIONARY } from '../types';

let initDictionary: any = {
  chinese: null,
  english: null,
};
export const dictionaryReducer = (state: any = initDictionary, action: any) => {
  switch (action.type) {
    case INIT_DICTIONARY:
      return {
        ...state,
        chinese: action.chinese,
        english: action.english,
      };
    default:
      return {
        ...state,
      };
  }
};
