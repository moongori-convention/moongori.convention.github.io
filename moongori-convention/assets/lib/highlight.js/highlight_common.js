/* 실행 함수 */
(function (obj) {/* 페이지 로드 완료되면 실행*/
	hljs.initHighlightingOnLoad();
	hljs.initLineNumbersOnLoad();
	$(obj.onLoad);
})({
	onLoad: function () {
		/* 하이라이트 코드 스타일 설정 */
		$("pre code").each(function () {
			/* copy 버튼 만들기 */
			$(this).after($("<a href='javascript:void(0);' class='code-copy'><i class='fa fa-copy'></i> copy</a>"));
			/* 타이틀 만들기 */
			$(this).before($("<div class='code-title'></div>")
				.append($("<i class='fa fa-minus-square code-collapse' style='margin-right:10px;'></i>"))
				.append(" [소스 보기] "));
			/* 클래스 추가 */
			$(this).parent().addClass("code-view");
		});
		/* 타이틀을 클릭 했을 때*/
		$(document).on("click", ".code-title", function () {
			$this = $(this);
			/* collapse 효과 만들기 */
			$i = $this.find("i.code-collapse");
			/* + 버튼일때*/
			if ($i.hasClass("fa-plus-square")) {
				/* 버튼을 -로 교체 */
				$i.removeClass("fa-plus-square");
				$i.addClass("fa-minus-square");
				/* 코드 클래스를 제거함으로 표시한다. */
				$this.parent().removeClass("code-view-disabled");
			} else {
				/* 버튼을 +로 교체*/
				$i.removeClass("fa-minus-square");
				$i.addClass("fa-plus-square");
				/* 코드 클래스를 추가함으로 화면에서 없앤다. */
				$this.parent().addClass("code-view-disabled");
			}
		});
		/* copy 버튼을 클릭했을 경우 */
		$(document).on("click", '.code-copy', function () {
			/* escape 문자 치환하기 */
			function escapeHTML(str) {
				return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/'/g, "'");
			}
			/* code-view 클래스를 찾는다. */
			$parent = $(this).closest(".code-view");
			/* collapse로 코드 화면이 닫겨져 있을 때*/
			if ($parent.hasClass("code-view-disabled")) {
				/* 펼친다. */
				$i = $parent.find("i.code-collapse");
				/* -에서 + 버튼으로 교체*/
				$i.removeClass("fa-plus-square");
				$i.addClass("fa-minus-square");
				/* 화면 표시*/
				$parent.removeClass("code-view-disabled");
			}
			/* 메시지 표시*/
			toastr.success(null, "소스가 복사되었습니다.", {
				timeOut: 700
			});
			/* code 태그를 찾는다. */
			var code_element = $(this).closest("pre").find("code")[0];
			/* 연속 개행일 경우 수정한다. */
			var value = code_element.innerText.replace(/\n\n/ig, '\n').replace(/\n\n\n/ig, '').replace(' \n', '').replace(/\t/ig, '');
			/* 셀렉션 취득 */
			var selection = window.getSelection();
			/* body 태그 찾는다. */
			var body_element = document.getElementsByTagName('body')[0];
			/* div 태그 생성*/
			var newdiv = document.createElement('div');
			/* 절대 위치로 브라우져에 보이지 않는 곳에 생성*/
			newdiv.style.position = 'absolute';
			newdiv.style.left = '-10000px';
			newdiv.style.top = '-10000px';
			/* body 태그에 div 태그 추가 */
			body_element.appendChild(newdiv);
			/* 복사해 온 값을 표시한다. */
			newdiv.innerHTML = "<pre>" + escapeHTML(value) + "</pre>";
			/* 선택한다.*/
			selection.selectAllChildren(newdiv);
			/* 10초 후에 div 태그 삭제한다.*/
			setTimeout(function () {
				newdiv.remove();
			}, 10000);
			/* 복사한다.*/
			document.execCommand('copy');
		});
	}
});