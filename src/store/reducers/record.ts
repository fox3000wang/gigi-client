import { UPDAET_RECORD, GET_RECORD } from '../types';

let initRecord: any = {
  recordCn: null,
  recordEn: null,
};
export const recordReducer = (state: any = initRecord, action: any) => {
  switch (action.type) {
    case GET_RECORD:
      return {
        ...state,
        recordCn: action.records,
      };
    case UPDAET_RECORD:
      return {
        ...state,
        recordCn: state.recordCn.push(action.record),
      };  
    default:
      return {
        ...state,
      };
  }
};