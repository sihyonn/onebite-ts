/**
 * 대수 타입
 * - 여러개 타입을 합성해서 새롭게 만들어낸 타입
 * - 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - union 타입
 */

let a: string | number; // 스트링넘버 유니온 타입!
a = 'string';
a = 8;

let arr: (number | string | boolean)[] = [8, 'string', true];

// 객체의 union
type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

const union1: Union1 = {
  name: 'choco',
  color: 'brown',
};
const union2: Union1 = {
  name: 'choco',
  language: 'ko',
};
const union3: Union1 = {
  name: 'choco',
  color: '',
  language: 'ko',
};

const union4: Union1 = {
  name: 'choco', // 얘는 Dog, Person에 공통적으로는 있지만 그 어느것에도 속한다고 볼 수 없음 = 오류
};
