// 객체
let user: {
  id?: number; // 옵셔널 프로퍼티
  name: string;
} = {
  id: 1,
  name: '김시현',
};

// 읽기전용 프로퍼티 예제( api키 같은건 함부로 변경되면 안되니까 readOnly 붙여주기)
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'my api key',
};

// config.apiKey = 'hacked'; // 읽기전용을 바꾸려해서 오류가 나고 있는모습!
