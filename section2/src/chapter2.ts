// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1, 'first'];

// 다차원 배열의 타입을 정의하는 경우
let doubleArr1: number[][] = [
  [1, 2, 3],
  [4, 5],
];
let doubleArr2: (number[] | string[])[] = [[1, 2, 3], ['a']];

// 튜플(길이와 타입이 고정된 배열)
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3] -> 위에서 number 타입에 길이가 2이게 지정해서 길이를 넘으면 오류
let tup2: [number, string, boolean] = [1, '2', true];
// tup2 = [1, true, '3'] -> 있어야할 자리에 다른타입이 있는 순서가 맞지않다거나, 길이넘으면 오류
const users: [string, number][] = [
  ['김씨', 1],
  ['이씨', 2],
  ['박씨', 3],
];
