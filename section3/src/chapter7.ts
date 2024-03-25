/**
 * 타입 좁히기
 * : 조건문 등을 이용해 넓은타입에서 좁은타입으로
 *   타입을 상황에 따라 좁히는 방법
 */

// value가 number면 => toFixed를
// value가 string이면 => toUpperCase로
function func(value: number | string | Date) {
  value; // number | string
  if (typeof value === 'number') {
    // -> 타입 가드
    console.log(value.toFixed()); // value = number
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // value = string
  } else if (typeof value === 'object') {
    console.log(value.getTime()); // value = Date 객체
  }
}
// value에 | null 추가하는 순간 마지막 조건문 value에 오류가 난다?!
// => null도 typeof를 거치면 객체로 인식되기때문에 지금 value가 Date | null 두개가 되어버려서
// 새로운 타입가드 필요 -> instanceof 사용하면 null은 Date 객체에 해당이 안되니까 통과 안됨 해결
function func2(value: number | string | Date) {
  value; // number | string
  if (typeof value === 'number') {
    // -> 타입 가드
    console.log(value.toFixed()); // value = number
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // value = string
  } else if (value instanceof Date) {
    console.log(value.getTime()); // value = Date 객체
  }
}

type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value && 'age' in value) {
    // 그냥 'age' in value사용하면 에러 => in 뒤에 undefined 못오는걸 생각해서 명시
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
