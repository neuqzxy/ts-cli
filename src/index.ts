import { v4 as uuid } from 'uuid';
import { add } from './abc/abc';

export default (num: number): number => {
  console.log(num + add(num, num), uuid);
  return num * 6;
}