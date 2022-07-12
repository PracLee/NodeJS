const a = [1, 2, 3, 4, 5]

const [head, ...rest] = a

console.log(head, rest)

const personalData = {
  email: 'spsbsc@naver.com',
  password: '****',
}

const publicData = {
  nickname: 'BJ',
}

const overrides = {
  email: 'bjlee.spsbsc@gmail.com',
}

const user = {
  ...personalData,
  ...publicData,
  ...overrides, // 최종 데이터를 가져옴
  ...{
    age: 30, // inline으로 사용 가능
  },
}

console.log(user)

function foo(head, ...rest) {
  console.log(head)
  console.log(rest)
}

foo(1, 2, 3, 4)
