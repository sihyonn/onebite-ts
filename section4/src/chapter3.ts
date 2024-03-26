/**
 * 오버로딩
 */

/**
 * 예시
 * - 하나의 함수 func
 * - 모든 매개변수 타입 number
 *  - ver1. 매개변수가 1개 -> 이 매개변수에 20 곱한 값 출력
 *  - ver1. 매개변수가 3개 -> 이 매개변수들 다 더한 값 출력
 */

// 버전들 -> 오버로드 시그니처 func(매개변수 타입정의): 반환값타입정의
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처(호출시 영향X)
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
