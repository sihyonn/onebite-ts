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
  let num: number = unknownVar;
  let str: string = unknownVar;
  let bool: boolean = unknownVar;
}
