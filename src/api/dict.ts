import axios from 'axios';
import * as dictJsonEn from '../../data/dict.en.json';
import * as dictJsonCn from '../../data/dict.cn.json';

/*
 * 原始字典数据
 */
export function getDictCn(): any {
  const dictCn:any = dictJsonCn;
  return dictCn['default'];
}
export function getDictEn(): any {
  const dictEn:any = dictJsonEn;
  return dictEn['default'];
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

export function getDictEnArray(): any {
  const dict: any = getDictEn();
  const words: any = [];
  Object.keys(dict).map(e => {
    words.push({
      ...dict[e],
      name: e,
    });
  });
  return words;
}