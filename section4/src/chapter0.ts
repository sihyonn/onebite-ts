/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number {
  //반환 값 타입 안넣어도 알아서 리턴문에서 추론
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = '누렁', tall?: number) {
  console.log(`naem: ${name}`);
  if (typeof tall === 'number') {
    console.log(`tall: ${tall + 10}`); // tall이 number로 좁혀짐
  }
}

introduce('김누렁', 180);
introduce('김누렁'); // 2개 전달되는걸로 정의해놓고 하나만 전달해서 에러 그래서 tall은 옵셔널로 변경

function getSum(...rest: number[]) {
  // [number, number, number] 이렇게 튶플식으로 정의해서 이 개수가 아니면 못들어오게도 가능!
  let sum = 0;
  rest.forEach((v) => (sum += v));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
