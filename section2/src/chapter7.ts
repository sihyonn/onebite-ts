// void
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
// a = 1; // undefined 말고는 담을 수가 없음!
a = undefined;

// never
// 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// b = undefined; // never는 undefined도 안됨!
