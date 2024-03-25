/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

// let person = {} // 이러면 {}안에 name, age 없어서 오류
// // 그렇다고 Person 지정한 걸 지우면 이 아래 두개에서 오류가난다!
// person.name = "김션"
// person.age = 27

// as 사용해서 타입 단언!
let person = {} as Person;
person.name = '김션';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// 변수 초기화할때 초기화값으로 리터럴 사용하면 초과 프로퍼티검사 발생
let dog = {
  name: '됼됼',
  color: 'gray',
  breed: '푸들', // 추가프로퍼티 허용 안함 -> 단언이 필요
} as Dog;

/**
 * 타입 단언의 규칙
 * :타입단언 아무때나 막쓰는 거 아님!
 * - 값 as 단언 <- 단언식
 * - A as B
 * - A가 B의 슈퍼타입이거나
 * - B가 A의 서브타입이어야 함
 */

let num1 = 10 as never; // never는 모든 타입의 서브타입이기때문에 가능
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼 전체집합이라 가능

let num3 = 10 as string; // number와 string은 동등한 라인 겹치지 않는 타입이라 불가능
let num4 = 10 as unknown as string; // 다중단언으로 하면 가능하지만 비추

/**
 * const 단언
 * : readonly로 만들어줄 수 있음!
 */

let num5 = 10 as const;

let CAT = {
  NAME: '고양이',
  COLOR: 'yellow',
} as const;

/**
 * Non Null 단언
 * : 어떤 값이 null이거나 undefined가 아니라고 알려줌
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '시현',
};

// const authorLen: number  = post.author?.length;
// -> 옵셔널 체이닝이 자동으로 적용되는데 이 경우 undefined가 될 수도있어서 number | undefined가 되어서 number만 하니까 오류가남
// 이럴때 !를 붙여주면 null이나 undefined가 아닐거라고 타입스크립트한테 알려줘서 undefined 없이 number라고 믿게되서 오류 해결
const authorLen: number = post.author!.length;
