/**
 * unknown 타입
 */

function unknownEx() {
  // 이건 다 업캐스트라 가능
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 얘네는 할당한게 정의한 타입보다 상위라 다운캐스트라 불가능
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * never 타입
 */
function neverEx() {
  function neverFunc(): never {
    while (true) {}
  }

  // 상위 타입에 하위타입인 never타입함수를 할당하는 건 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 하위 타입에 상위타입을 할당하는 건 다운캐스트라 불가능
  let never1: never = 1;
  let never2: never = 'string';
  let never3: never = true;
}
