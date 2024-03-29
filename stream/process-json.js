// 항상 chunk의 크기를 확인해야함!
const { log } = console

const fs = require('fs')

/**
 * @param {number} highWaterMark
 */
function processJson(highWaterMark) {
  const rs = fs.createReadStream('./exam_JSON', {
    encoding: 'utf-8',
    highWaterMark,
  })

  let totSum = 0

  let tempStr = ''

  rs.on('data', (chunk) => {
    if (typeof chunk !== 'string') {
      return
    }

    tempStr += chunk

    const lastIdx = tempStr.lastIndexOf('\n')

    const forward = tempStr.substring(0, lastIdx)
    tempStr = tempStr.substring(lastIdx)

    totSum += forward
      .split('\n')
      .map((jsonLine) => {
        try {
          return JSON.parse(jsonLine)
        } catch {
          return undefined
        }
      })
      .filter((json) => json)
      .map((json) => json.data)
      .reduce((sum, curr) => sum + curr, 0)
  })

  rs.on('end', () => {
    log('Event : End')
    log(`totalSum (highWaterMark : ${highWaterMark})`, totSum)
  })
}

for (let waterMark = 1; waterMark < 50; waterMark += 1) {
  processJson(waterMark)
}
