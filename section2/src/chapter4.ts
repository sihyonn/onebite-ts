// 타입 별칭
// 공통적으로 사용할 수 있게 중복을 제거하는 타입별칭을 써보자!
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
};

let user1: User = {
  id: 1,
  name: '시현',
  nickname: '션',
  birth: '0823',
};

let user2: User = {
  id: 2,
  name: '시연',
  nickname: '숀',
  birth: '0825',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

// type CountryNumberCodes = {
//   [key: string]: number;
//   Korea: number; // 추가 지정한타입과 인덱스 시그니처의 타입은 일치 or 호환가능해야함
// };

// let countryNumberCodes = {
//   Korea: 410,
// };
