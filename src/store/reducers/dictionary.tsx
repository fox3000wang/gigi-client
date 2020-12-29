import { INIT_DICTIONARY } from '../types';

let initDictionary: any = {
  chinese: null,
};
export const dictionaryReducer = (state: any = initDictionary, action: any) => {
  switch (action.type) {
    case INIT_DICTIONARY:
      return {
        ...state,
        chinese: action.dictionary,
      };
    default:
      return {
        ...state,
      };
  }
};
