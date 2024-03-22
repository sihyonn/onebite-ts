/**
 * 객체 타입간 호환성
 * 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮을까?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '푸들',
};

// 조건이 더 적은게 슈퍼타입, 추가프로퍼티로 더 세세한게 하위타입
animal = dog; // 슈퍼 = 하위 할당ok!
dog = animal; // 하위 = 슈퍼 할당no!