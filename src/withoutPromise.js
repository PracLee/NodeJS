// code의 depth 가 깊어지는 것을 볼 수 있다.
// scope의 분리도 이루어지지 않아, 유지보수의 어려움이 있음
setTimeout(() => {
  const value = Math.random()
  console.log(value)
  setTimeout(() => {
    const value = Math.random()
    console.log(value)
    setTimeout(() => {
      const value = Math.random()
      console.log(value)
      setTimeout(() => {
        const value = Math.random()
        console.log(value)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
