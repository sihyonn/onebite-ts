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

/**
 * void 타입
 */

function voidEx() {
  function voidFunc(): void {
    console.log('hello');
  }

  // void가 undefined의 슈퍼타입이기 때문에 가능
  let voidVar: void = undefined;
}

/**
 * any 타입(치트키타입임!)
 */
function anyEx() {
  let unknownVar: unknown;
  let anyVar: any;
  let neverVar: never;

  // 업이든 다운이든 다한다!
  anyVar = unknownVar;
  unknownVar = anyVar;

  // never 앞에선 막히는 존재. 네버로 다운캐스팅은 불가
  neverVar = anyVar;
}
