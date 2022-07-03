// @ts-check
/**
 * 다른 참고 자료보다 개발자 문서 참고
 * module
 *  - Node에서는 각 파일 하나하나가 모듈이다
 *  - require('fileName') 으로 호출
 * 방식 1 : commonJS => require() 사용 * node에서 사용 *
 * 방식 2 : ECMAScript => export{}, import{} 사용
 *          -> .mjs 라는 확장자를 사용 하지만, CommonJS 방식도 사용 가능
 *       => 방식 1로 사용해도 문제는 없지만, Front와 Back에서 import 할수 있도록 컴파일러 사용해야함
 **/

// require

const { path, paths, filename } = module

// 불러오기
//console.log(require('./node_Basic_Exam'))

// 파일명, 경로 불러오기
//console.log({ path, paths, filename })

// 같은 파일을 여러번 import가 되어도 동일한 객체로 불러와짐
/**
 * node standard library에 있는 모듈은 절대 경로로 불러와 지지만,
 * 프로젝트 내의 다른 파일은 상대경로를 지정하여 가져옴.
 * 절대 결로를 지정하면 module.path의 경로 중 하나에서 해당 모듈이 있는지 검사해 가져옴
 *  -> module.path의 경로에 여러개의 같은 모듈이 있을 경우, 해당 모듈이 있으면 가장 첫번째 것을 가져옴
 */

const animalA = require('./node_Basic_Exam')
const animalB = require('./node_Basic_Exam')
const animalC = require('./node_Basic_Exam')

console.log(animalA === animalB)
console.log(animalB === animalC)
