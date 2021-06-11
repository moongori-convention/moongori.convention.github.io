# Moon-Convention

<a href="https://applemilk0987.github.io/moon-convention/moongori-convention/" title="새창열림" target="_blank">https://applemilk0987.github.io/moon-convention/moongori-convention/</a>


## 환경설정
1. [Node.js 설치](https://nodejs.org/ko/) (안정적, 신뢰도 높음 설치)
2. [Gulp.js 설치](https://gulpjs.com/docs/en/getting-started/quick-start)
	1. node, npm, npx 설치 확인

		```bash
		node --version

		npm --version

		npx --version
		```

	2. gulp-cli 설치 : Gulp를 콘솔에서 편리하게 실행할 수 있게 해주는 유틸리티 도구

		```bash
		npm install gulp-cli -g
		```

	3. 경로 이동

		```bash
		cd C:\프로젝트명
		```

	4. 프로젝트 폴더에 package.json 생성

		```bash
		npm init
		```

	5. gulp package 설치 (node_modules 폴더 생성됨)

		```bash
		npm install gulp --save-dev
		```

	6. gulp 버전 확인

		```bash
		gulp --version
		```

	7. gulpfile.js 생성

		```bash
		function defaultTask(cb) {
			// place code for your default task here
			cb();
		}

		exports.default = defaultTask
		```

	8. gulp 실행

		```bash
		gulp
		```
1. 필요한 모듈 설치

	```bash
	npm i gulp-sourcemaps
	npm i gulp-sass
	npm i browser-sync
	npm i gulp-autoprefixer
	npm i gulp-headerfooter
	npm i gulp-remove-empty-lines
	npm i gulp-inject
	npm i gulp-ejs
	npm i gulp-rename
	npm i gulp-imagemin
	npm i gulp-concat
	npm i gulp-uglify
	npm i @babel/core
	npm i @babel/preset-env
	npm i gulp-babel
	npm i gulp-plumber
	```

	1. gulp-sourcemaps : css map 생성해줌
		1. source map이란?
			- 배포용으로 빌드한 파일(ex. css)과 원본파일(ex. scss)을 연결해줌.
	2. gulp-sass : sass 컴파일
	3. browser-sync : 파일 변경 시 자동 refresh, 여러 브라우저를 띄어놓고, 한 브라우저에서 클릭 동작 시 동일한 처리
	4. gulp-autoprefixer : 최신 CSS를 IE나 구형 브라우저가 이해할 수 있게 prefix 생성해줌.

		↓ 예시

		```css
		-webkit-box-pack: center;
			-ms-flex-pack: center;
				justify-content: center;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
		```

	5. gulp-headerfooter : html include
	6. gulp-remove-empty-lines : 빈줄 삭제
	7. gulp-inject : 경로에 따른 include 추가
	8. gulp-ejs : ejs → html 파일 변환
	9. gulp-rename : 병합, 압축하는 파일을 이름을 변경하여 출력 (압축 x파일과 압축 ㅇ파일 두개 출력 → 사용 예시 : min.js - js)
	10. gulp-imagemin : 이미지 압축
	11. gulp-concat : 파일 이어 붙이기
	12. gulp-uglify : 파일 압축
	13. gulp-babel : es6 → es5 변환
	14. gulp-plumber : 에러로그 출력

## version
<ul>
  <li>jquery : 3.6.0</li>
  <li>gulp : 4.0</li>
</ul>
<table>
  <thead>
    <tr>
      <th>버전</th>
      <th>작성자</th>
      <th>변경내용</th>
      <th>작성일자</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>v1.0</td>
      <td>이혜진</td>
      <td>최초작성</td>
      <td>2021.05.06</td>
    </tr>
  </tbody>
</table>
