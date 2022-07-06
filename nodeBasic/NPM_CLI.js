/**
 * npm CLI
 * ./node_module/.bin/eslint 경로(ex src/** /*)
 * merge시 eslint로 문제가 되는 상황을 막을 수 있도록 함
 * ->
 * pakage.json 의 scripts 항목을 아래와 같이 변경
 * ->
 *   "scripts":{
 *  "lint": "eslint src/** /*"
 *},
 * ->
 * npm run lint 로 호출 가능
 *  => 자주쓰는 기능들을 pakage.json의 scripts에 추가하여 편하게 호출 가능 **
 */

var x = 1

/**
 * yarn : npm의 대체제의 대표격인 툴
 * 1. 설치 방법
 *  - npm install -g yarn        => -g 생략가능
 * 2. 확인
 *  - which yarn
 * 3. 사용
 *  - yarn add PakageName
 * 4. 삭제
 *  - yarn delete PakageName
 *
 */
