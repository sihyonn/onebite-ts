// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용(지양합시다!)
let anyVar = 10;
let num = 10;
num = anyVar; //이렇게 반대로 할당해도 오류 안남~
// unknown(둘 중엔 얘를 좀 더 권장)
let unknownVar;
export {};
// num = unknownVar; // unknown은 반대로 할당 안되고, 메소드나 연산도 안됨!
