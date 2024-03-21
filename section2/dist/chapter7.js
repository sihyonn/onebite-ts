// void
// 아무것도 없음을 의미하는 타입
function func1() {
    return 'hello';
}
function func2() {
    console.log('hello');
}
let a;
// a = 1; // undefined 말고는 담을 수가 없음!
a = undefined;
// never
// 불가능한 타입
function func3() {
    while (true) { }
}
function func4() {
    throw new Error();
}
let b;
export {};
// b = undefined; // never는 undefined도 안됨!
