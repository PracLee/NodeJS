// @ts-check
/**
 * 다른 참고 자료보다 개발자 문서 참고
 * module
 *  - Node에서는 각 파일 하나하나가 모듈이다
 *  - require('fileName') 으로 호출
 * 방식 1 : commonJS => require() 사용
 * 방식 2 : ECMAScript => export{}, import{} 사용
 **/

// require

const { path, paths, filename } = module

// 불러오기
console.log(require('./node_Basic_Exam'))

// 파일명, 경로 불러오기
console.log({ path, paths, filename })
