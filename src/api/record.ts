import axios from 'axios';
import * as recordJson from './record.cn.json';

const url = `http://localhost/vita`;

export function postRecord(record: any) {
  axios.post(url, record);
  return record;
}

/**
 * 获取学习记录
 *  如果服务端报错,则加载本地版本
 */
export function getRecord() {
  return new Promise((resolve:Function) => {
    axios.get(url).then( response =>{
      resolve(response.data);
    } ).catch(() => {
      resolve(getLocalRecord());
    })
  });
}

function getLocalRecord() {
  const data:any[] = [];
  let i = 0;
  while(recordJson[i]){
    data.push(recordJson[i++]);
  }
  return data;
}

