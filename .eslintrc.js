// eslint의 설정 파일인 js파일
// 노드 모듈 아래에 설치된 @eslint이기 때문에 바로사용은 안됨
// eslint role 기재
// 하나하나 기재 할 수 있지만, 이미 많은 룰을 한꺼번에 정의해놓은 플러그인 사용
// 강의에서는 airbnb eslint 사용
// npm install --save-dev eslint-config-airbnb-base (linting file 설치)
// (윗줄과 이어서) eslint-plugin-import (plugin file 설치)
// 이런 설정에서는 formatting과 충돌을 일으킬 수 있기 때문에
// npm install --save-dev eslint-config-prettier    설치
// 오류시 해당 링크 사용 https://velog.io/@ggombee/eslint
module.export = {
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
}
