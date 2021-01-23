import { Dispatch } from 'redux';
import { UPDAET_RECORD, GET_RECORD } from '../types';
import { getRecord, postRecord } from '../../api/record';

export const getRecordAction: () => any = () => {
  return (dispatch: Dispatch) => {
    getRecord().then(records => {
      dispatch({ type: GET_RECORD, records });
    });
  };
};

export const updateRecordAction: (data: any) => any = data => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UPDAET_RECORD, record: postRecord(data) });
  };
}
