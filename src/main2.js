/* eslint-disable */

var numCnt = 0

function getCnt() {
  numCnt++

  var result = { cnt: cnt, total: 0 }
  function cnt() {
    result.total += 1
  }
  return result
}

var cntA = getCnt()
cntA.cnt()
cntA.cnt()

var cntB = getCnt()
cntB.cnt()

console.log(cntA.total, cntB.total, numCnt)
