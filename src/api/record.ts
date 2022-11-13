import axios from 'axios';

const url = `http://localhost:9999/record`;
//const url = `http://wangzm.cn:9999/record`;

export function postRecord(record: any) {
  axios
    .post(url, record)
    .then(response => console.log(`post record ${record.label} ${response.status}`));
  return record;
}

/**
 * 获取学习记录
 */
export function getRecord() {
  return new Promise((resolve: Function) => {
    axios
      .get(url)
      .then(response => resolve(response.data))
      .catch(e => console.log(e));
  });
}
