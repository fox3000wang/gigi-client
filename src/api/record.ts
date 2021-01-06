import axios from 'axios';
import { record } from '../module/record';
import fs from 'fs';
import path from 'path';



const url = `http://localhost/vita`;

export function postRecord(record: any) {
  axios.post(url, record);
}

// export async function getRecord() {
//   const { data } = await axios.get(url);
//   return data;
// }

export function getRecord() {

  return [{"id":0,"URI":"%E4%B8%80","name":"一","result":true,"date":"2021-1-1"},{"id":1,"URI":"%E4%BA%8C","name":"二","result":true,"date":"2021-1-1"},{"id":2,"URI":"%E4%B8%89","name":"三","result":true,"date":"2021-1-1"},{"id":3,"URI":"%E5%9B%9B","name":"四","result":true,"date":"2021-1-1"},{"id":4,"URI":"%E4%BA%94","name":"五","result":true,"date":"2021-1-1"},{"id":5,"URI":"%E5%85%AD","name":"六","result":true,"date":"2021-1-1"},{"id":6,"URI":"%E4%B8%83","name":"七","result":true,"date":"2021-1-1"},{"id":7,"URI":"%E5%85%AB","name":"八","result":true,"date":"2021-1-1"},{"id":8,"URI":"%E4%B9%9D","name":"九","result":true,"date":"2021-1-1"},{"id":9,"URI":"%E5%8D%81","name":"十","result":true,"date":"2021-1-1"},{"id":10,"URI":"%E5%8D%8A","name":"半","result":false,"date":"2021-1-1"},{"id":11,"URI":"%E4%B8%A4","name":"两","result":true,"date":"2021-1-1"},{"id":12,"URI":"%E5%87%A0","name":"几","result":false,"date":"2021-1-1"},{"id":13,"URI":"%E6%95%B0","name":"数","result":false,"date":"2021-1-1"},{"id":14,"URI":"%E5%A4%A7","name":"大","result":true,"date":"2021-1-1"},{"id":15,"URI":"%E5%B0%8F","name":"小","result":true,"date":"2021-1-1"},{"id":16,"URI":"%E7%99%BE","name":"百","result":false,"date":"2021-1-1"},{"id":17,"URI":"%E5%8D%83","name":"千","result":false,"date":"2021-1-1"},{"id":18,"URI":"%E4%B8%87","name":"万","result":false,"date":"2021-1-1"},{"id":19,"URI":"%E4%BA%BF","name":"亿","result":false,"date":"2021-1-1"},{"id":20,"URI":"%E5%A4%9A","name":"多","result":true,"date":"2021-1-1"},{"id":21,"URI":"%E5%B0%91","name":"少","result":true,"date":"2021-1-1"},{"id":22,"URI":"%E5%8D%95","name":"单","result":false,"date":"2021-1-2"},{"id":23,"URI":"%E5%8F%8C","name":"双","result":false,"date":"2021-1-2"},{"id":24,"URI":"%E5%A4%A9","name":"天","result":true,"date":"2021-1-2"},{"id":25,"URI":"%E5%9C%B0","name":"地","result":false,"date":"2021-1-2"},{"id":26,"URI":"%E4%BA%BA","name":"人","result":true,"date":"2021-1-2"},{"id":27,"URI":"%E9%87%91","name":"金","result":false,"date":"2021-1-2"},{"id":28,"URI":"%E6%9C%A8","name":"木","result":true,"date":"2021-1-2"},{"id":29,"URI":"%E6%B0%B4","name":"水","result":true,"date":"2021-1-2"},{"id":30,"URI":"%E7%81%AB","name":"火","result":true,"date":"2021-1-2"},{"id":31,"URI":"%E5%9C%9F","name":"土","result":false,"date":"2021-1-2"},{"id":32,"URI":"%E6%97%A5","name":"日","result":true,"date":"2021-1-2"},{"id":33,"URI":"%E6%9C%88","name":"月","result":true,"date":"2021-1-2"},{"id":34,"URI":"%E6%98%9F","name":"星","result":true,"date":"2021-1-2"},{"id":35,"URI":"%E4%BA%91","name":"云","result":true,"date":"2021-1-2"},{"id":36,"URI":"%E5%B1%B1","name":"山","result":true,"date":"2021-1-2"},{"id":37,"URI":"%E7%9F%B3","name":"石","result":true,"date":"2021-1-2"},{"id":38,"URI":"%E7%94%B0","name":"田","result":true,"date":"2021-1-2"},{"id":39,"URI":"%E7%A6%BE","name":"禾","result":false,"date":"2021-1-2"},{"id":40,"URI":"%E4%B8%9C","name":"东","result":false,"date":"2021-1-3"},{"id":41,"URI":"%E8%A5%BF","name":"西","result":false,"date":"2021-1-3"},{"id":42,"URI":"%E5%8D%97","name":"南","result":false,"date":"2021-1-3"},{"id":43,"URI":"%E5%8C%97","name":"北","result":false,"date":"2021-1-3"},{"id":44,"URI":"%E4%B8%8A","name":"上","result":true,"date":"2021-1-3"},{"id":45,"URI":"%E4%B8%8B","name":"下","result":true,"date":"2021-1-3"},{"id":46,"URI":"%E5%B7%A6","name":"左","result":true,"date":"2021-1-3"},{"id":47,"URI":"%E5%8F%B3","name":"右","result":true,"date":"2021-1-3"},{"id":48,"URI":"%E5%89%8D","name":"前","result":false,"date":"2021-1-3"},{"id":49,"URI":"%E5%90%8E","name":"后","result":false,"date":"2021-1-3"},{"id":50,"URI":"%E9%87%8C","name":"里","result":false,"date":"2021-1-3"},{"id":51,"URI":"%E5%A4%96","name":"外","result":true,"date":"2021-1-3"},{"id":52,"URI":"%E9%A1%B6","name":"顶","result":false,"date":"2021-1-3"},{"id":53,"URI":"%E5%BA%95","name":"底","result":false,"date":"2021-1-3"},{"id":54,"URI":"%E4%B8%AD","name":"中","result":true,"date":"2021-1-3"},{"id":55,"URI":"%E8%BE%B9","name":"边","result":false,"date":"2021-1-3"},{"id":56,"URI":"%E6%98%A5","name":"春","result":false,"date":"2021-1-3"},{"id":57,"URI":"%E5%A4%8F","name":"夏","result":false,"date":"2021-1-3"},{"id":58,"URI":"%E7%A7%8B","name":"秋","result":false,"date":"2021-1-3"},{"id":59,"URI":"%E5%86%AC","name":"冬","result":false,"date":"2021-1-3"},{"id":60,"URI":"%E5%B9%B4","name":"年","result":false,"date":"2021-1-3"},{"id":60,"URI":"%E5%B9%B4","name":"年","result":false,"date":"2021-1-4"},{"id":61,"URI":"%E5%AD%A3","name":"季","result":false,"date":"2021-1-4"},{"id":62,"URI":"%E5%91%A8","name":"周","result":false,"date":"2021-1-4"},{"id":63,"URI":"%E5%A4%9C","name":"夜","result":false,"date":"2021-1-4"},{"id":64,"URI":"%E6%97%A9","name":"早","result":false,"date":"2021-1-4"},{"id":65,"URI":"%E5%8D%88","name":"午","result":false,"date":"2021-1-4"},{"id":66,"URI":"%E6%99%9A","name":"晚","result":false,"date":"2021-1-4"},{"id":67,"URI":"%E6%98%A8","name":"昨","result":false,"date":"2021-1-4"},{"id":68,"URI":"%E6%98%8E","name":"明","result":false,"date":"2021-1-4"},{"id":69,"URI":"%E6%97%B6","name":"时","result":false,"date":"2021-1-4"},{"id":70,"URI":"%E5%88%86","name":"分","result":false,"date":"2021-1-4"},{"id":71,"URI":"%E7%A7%92","name":"秒","result":false,"date":"2021-1-4"},{"id":72,"URI":"%E6%B1%9F","name":"江","result":false,"date":"2021-1-4"},{"id":73,"URI":"%E6%B2%B3","name":"河","result":false,"date":"2021-1-4"},{"id":74,"URI":"%E6%B9%96","name":"湖","result":false,"date":"2021-1-4"},{"id":75,"URI":"%E6%B5%B7","name":"海","result":false,"date":"2021-1-4"},{"id":76,"URI":"%E9%9B%A8","name":"雨","result":true,"date":"2021-1-4"},{"id":77,"URI":"%E9%9B%AA","name":"雪","result":false,"date":"2021-1-4"},{"id":78,"URI":"%E5%86%B0","name":"冰","result":false,"date":"2021-1-4"},{"id":79,"URI":"%E9%9C%9C","name":"霜","result":false,"date":"2021-1-4"},{"id":80,"URI":"%E9%9B%B7","name":"雷","result":false,"date":"2021-1-4"},{"id":81,"URI":"%E7%94%B5","name":"电","result":false,"date":"2021-1-4"},{"id":82,"URI":"%E5%85%89","name":"光","result":false,"date":"2021-1-4"},{"id":83,"URI":"%E9%A3%8E","name":"风","result":true,"date":"2021-1-4"},{"id":84,"URI":"%E9%9C%B2","name":"露","result":false,"date":"2021-1-4"},{"id":85,"URI":"%E9%9B%BE","name":"雾","result":false,"date":"2021-1-4"},{"id":87,"URI":"%E9%9C%9E","name":"霞","result":false,"date":"2021-1-4"},{"id":88,"URI":"%E6%B4%8B","name":"洋","result":false,"date":"2021-1-4"},{"id":89,"URI":"%E5%B2%9B","name":"岛","result":false,"date":"2021-1-4"},{"id":90,"URI":"%E5%B2%AD","name":"岭","result":false,"date":"2021-1-4"},{"id":91,"URI":"%E6%BD%AD","name":"潭","result":false,"date":"2021-1-4"},{"id":92,"URI":"%E6%B3%89","name":"泉","result":false,"date":"2021-1-4"},{"id":93,"URI":"%E6%BA%AA","name":"溪","result":false,"date":"2021-1-4"},{"id":94,"URI":"%E6%BB%A9","name":"滩","result":false,"date":"2021-1-4"},{"id":95,"URI":"%E5%B3%A1","name":"峡","result":false,"date":"2021-1-4"},{"id":96,"URI":"%E6%B1%A0","name":"池","result":false,"date":"2021-1-4"},{"id":97,"URI":"%E6%B9%BE","name":"湾","result":false,"date":"2021-1-4"},{"id":98,"URI":"%E6%A1%A5","name":"桥","result":false,"date":"2021-1-4"},{"id":99,"URI":"%E5%B2%B8","name":"岸","result":false,"date":"2021-1-4"},{"id":102,"URI":"%E6%B2%9F","name":"沟","result":false,"date":"2021-1-6"},{"id":100,"URI":"%E5%A1%98","name":"塘","result":false,"date":"2021-1-6"},{"id":101,"URI":"%E6%B8%A0","name":"渠","result":false,"date":"2021-1-6"},{"id":103,"URI":"%E4%BA%95","name":"井","result":true,"date":"2021-1-6"},{"id":104,"URI":"%E5%9D%A1","name":"坡","result":false,"date":"2021-1-6"},{"id":105,"URI":"%E5%B4%96","name":"崖","result":false,"date":"2021-1-6"},{"id":106,"URI":"%E5%A3%81","name":"壁","result":false,"date":"2021-1-6"},{"id":107,"URI":"%E6%B4%9E","name":"洞","result":false,"date":"2021-1-6"},{"id":108,"URI":"%E5%9D%91","name":"坑","result":false,"date":"2021-1-6"},{"id":109,"URI":"%E5%9D%9D","name":"坝","result":false,"date":"2021-1-6"},{"id":110,"URI":"%E5%8E%82","name":"厂","result":false,"date":"2021-1-6"},{"id":111,"URI":"%E7%9F%BF","name":"矿","result":false,"date":"2021-1-6"},{"id":112,"URI":"%E4%BA%AD","name":"亭","result":false,"date":"2021-1-6"},{"id":113,"URI":"%E7%AA%9F","name":"窟","result":false,"date":"2021-1-6"},{"id":114,"URI":"%E5%A2%99","name":"墙","result":false,"date":"2021-1-6"},{"id":115,"URI":"%E6%A2%81","name":"梁","result":false,"date":"2021-1-6"},{"id":116,"URI":"%E7%A0%96","name":"砖","result":false,"date":"2021-1-6"},{"id":117,"URI":"%E6%B2%99","name":"沙","result":false,"date":"2021-1-6"},{"id":118,"URI":"%E6%B3%A5","name":"泥","result":false,"date":"2021-1-6"},{"id":119,"URI":"%E7%93%A6","name":"瓦","result":false,"date":"2021-1-6"},{"id":128,"URI":"%E7%88%B8","name":"爸","result":true,"date":"2021-1-6"},{"id":129,"URI":"%E5%A6%88","name":"妈","result":true,"date":"2021-1-6"},{"id":148,"URI":"%E5%84%BF","name":"儿","result":true,"date":"2021-1-6"},{"id":160,"URI":"%E5%B7%A5","name":"工","result":true,"date":"2021-1-6"},{"id":184,"URI":"%E5%8F%A3","name":"口","result":true,"date":"2021-1-6"},{"id":186,"URI":"%E8%80%B3","name":"耳","result":true,"date":"2021-1-6"},{"id":187,"URI":"%E5%A4%B4","name":"头","result":true,"date":"2021-1-6"},{"id":197,"URI":"%E6%89%8B","name":"手","result":true,"date":"2021-1-6"},{"id":213,"URI":"%E5%BF%83","name":"心","result":true,"date":"2021-1-6"},{"id":359,"URI":"%E6%88%91","name":"我","result":true,"date":"2021-1-6"},{"id":358,"URI":"%E4%BD%A0","name":"你","result":true,"date":"2021-1-6"},{"id":360,"URI":"%E8%8A%B1","name":"花","result":true,"date":"2021-1-6"},{"id":363,"URI":"%E6%9E%97","name":"林","result":true,"date":"2021-1-6"},{"id":390,"URI":"%E7%93%9C","name":"瓜","result":true,"date":"2021-1-6"},{"id":391,"URI":"%E6%9E%9C","name":"果","result":true,"date":"2021-1-6"}];
}