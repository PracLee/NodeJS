let count = 0

const handle = setInterval(() => {
  console.log('Interval')
  count += 1
  if (count === 4) {
    console.log('Done!')
    clearInterval(handle)
  }
}, 1000)

const outHandle = setTimeout(() => {
  console.log('Timeout')
}, 1000)

clearTimeout(outHandle)
