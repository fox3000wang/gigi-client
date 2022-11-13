import axios from 'axios';

const url = `http://localhost:9999/dict`;
//const url = `http://wangzm.cn:9999/dict`;

/*
 * 原始字典数据
 */
export function getDict(): any {
  return new Promise((resolve: Function) => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(e => console.log(e));
  });
}
