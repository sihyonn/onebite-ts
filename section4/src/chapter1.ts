/**
 * 함수 타입 표현식
 * 타입별칭 사용해서 함수의 타입 별도로 정의
 * 매개변수의 타입과 개수를 맞춰줘야함!
 */

type Operation = (a: number, b: number) => number;
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 * 일반적으로 함수 정의할 때 타입 정의된 부분만 똑 떼어서 붙인거
 */

type Operation2 = {
  (a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;
