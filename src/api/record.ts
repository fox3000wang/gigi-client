import axios from 'axios';
import * as recordJson from './record.cn.json';

const url = `http://localhost/vita`;

export function postRecord(record: any) {
  axios.post(url, record);
}

// TODO:改成兼容版本
export function getRecord() {
  const data:any[] = [];
  let i = 0;
  while(recordJson[i]){
    data.push(recordJson[i++]);
  }
  return data;
}

