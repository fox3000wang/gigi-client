import axios from 'axios';
import * as recordCnJson from './record.cn.json';
import * as recordEnJson from './record.en.json';

const url = `http://localhost/vita`;

export function postRecord(record: any) {
  axios.post(url, record).then(response => {
    console.log(`post record ${record.name} ${response.status}`);
  });
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
  const recordCn:any[] = [];
  const recordEn:any[] = [];
  let i = 0;
  while(recordCnJson[i]){
    recordCn.push(recordCnJson[i++]);
  }
  i = 0;
  while(recordEnJson[i]){
    recordEn.push(recordEnJson[i++]);
  }
  return {recordCn,recordEn};
}

