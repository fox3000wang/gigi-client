import axios from 'axios';
import * as dictJsonCn from './dict.cn.json';

/*
 * 原始字典数据
 */
export function getDictCn(): any {
  // delete dictJsonCn.default;
  const dictCn:any = dictJsonCn;
  return dictCn['default'];
}

/*
 * 字的数组
 */
export function getDictCnArray(): any {
  const dict: any = getDictCn();
  const words: any = [];
  Object.keys(dict).map(e => {
    words.push({
      ...dict[e],
      name: e,
    });
  });
  return words;
}
