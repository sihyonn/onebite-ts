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
// dog = animal; // 하위 = 슈퍼 할당no!

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한크잘 타스',
  price: 33000,
  skill: 'typescript',
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 * 객체 타입 변수 초기화 할 때, 초기화 값으로 객체 리터럴을 사용하면 발동
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: '한크잘 타스',
  price: 33000,
  // skill: 'typescript',
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: '한크잘 타스',
  price: 33000,
  // skill: 'typescript'
});

func(programmingBook);
