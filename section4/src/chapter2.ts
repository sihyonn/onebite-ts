/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 */

// 1. 반환값 호환되는지
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number literal

a = b; // number > number literal O
// b = a; // number literal < number X

// 2. 매개변수 호환되는지
//  2-1. 매개변수의 개수가 같을 때
//  2-2. 매개변수의 개수가 다를 때

/**
 * 매개변수 개수 같을 때
 */
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = () => {};
let d: D = () => {};

// c = d; // number > number literal 업캐스팅 X
d = c; // number literal < number 다운캐스팅 O

// 🤔 why? 위와 같은 상황이 일어나는가
type Animal = {
  //슈퍼
  name: string;
};
type Dog = {
  // 서브
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 이제 이걸 서로 할당한다면?
// 슈퍼 <- 서브 animalFunc = dogFunc를 할당할 경우
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color) 슈퍼는 더 안구체적이라 color가 없어서 안됨
};

// 서브 <- 슈퍼 dogFunc = animalFunc 할당할 경우
let testFunc2 = (dog: Dog) => {
  // 더 가지고 있는거에 할당한거라 ㅇㅇ
  console.log(dog.name);
  console.log(dog.color);
};

/**
 * 매개변수 개수 다를 때
 */

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 2 <- 1 O
// func2 = func1; // 1 <- 2 X
