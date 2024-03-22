// enum 타입(열거형)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  DAD = 20,
  MOM,
  SON,
}

const user1 = {
  name: '신형만',
  role: Role.DAD, // 0 -> 아빠
};
const user2 = {
  name: '봉미선',
  role: Role.MOM, // 1 -> 엄마
};
const user3 = {
  name: '신짱구',
  role: Role.SON, // 2 -> 아들
};

console.log(user1, user2, user3);
