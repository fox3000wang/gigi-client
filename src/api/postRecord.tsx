import axios from 'axios';

// export async function postRecord(record: any) {
export function postRecord(record: any) {
  const url = `http://localhost/vita`;

  // const response = await axios.post(url, record);
  axios.post(url, record);
}
