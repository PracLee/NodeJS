// resolve 한 값을 뒤로 넘겨줌
// reject  에러 상황을 결정함
// promise 는 resolve || reject 둘중 하나의 값만 사용
// 비동기 코드를 순차적으로 이어서 사용 할 수 있게 함
function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    console.log('Before TimeOut')
    setTimeout(() => {
      resolve(Math.random())
      console.log('After resolve')
    }, 1000)

    //  console.log('Inside Promise')
    //  console.log('Before resolve')
    //  resolve('First resolve')
    //  console.log('After resolve')
    //  reject(new Error('First reject'))
  })
}

returnPromiseForTimeout()
  .then((value) => {
    console.log('then 1')
    console.log('value', value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log('then 2')
    console.log('value', value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log('then 3')
    console.log('value', value)
    return returnPromiseForTimeout()
  })
  .then((value) => {
    console.log('then 4')
    console.log('value', value)
    return returnPromiseForTimeout()
  })
//  .catch((error) => {
//    console.log('error', error)
//  })
//
//  .then((value) => {
//    console.log('Inside First Then')
//    console.log(value)
//  })

returnPromiseForTimeout()
