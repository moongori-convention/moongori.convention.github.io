/* [s] category setting */
let jsonData;
let initJson = [
	{"code": "0001", "display": "Y"}, /* handle */
	{"code": "0002", "display": "Y"}, /* hinge */
	{"code": "0003", "display": "Y"}, /* tool */
	{"code": "0004", "display": "Y"}, /* wood */
	{"code": "0005", "display": "Y"}, /* paint */
	{"code": "0006", "display": "Y"}, /* socket */
	{"code": "0007", "display": "Y"}, /* lighting */
	{"code": "0008", "display": "Y"}, /* kitchen */
	{"code": "0009", "display": "Y"}, /* faucet */
	{"code": "0010", "display": "Y"}, /* tile */
	{"code": "0011", "display": "Y"}, /* floor */
	{"code": "0012", "display": "Y"}, /* wallpaper */
	{"code": "0013", "display": "Y"}, /* sheet */
	{"code": "0014", "display": "Y"}, /* furniture */
	{"code": "0015", "display": "Y"}, /* outdoor */
	{"code": "0016", "display": "Y"}, /* living */
	{"code": "0017", "display": "Y"}, /* fabric */
	{"code": "0018", "display": "Y"}, /* office */
	{"code": "0019", "display": "Y"} /* appliances */
];
// 고정된 헤더 높이값
let headerHeight = ($("#head").outerHeight() - 18 + $(".local-head").height()); // ? 44 = #head 가 translateY로 조정된 값

function init() {
	// load json
	$.getJSON("user_category_data.json", function (data) {
			jsonData = data;
		})
		.done(function () {})
		.fail(function () {
			console.log("error");
			jsonData = initJson;
		})
		.always(function () {
			orderCategory(true);
		});

	showCategory();
}
$(function () {
	init();

	// 카테고리 설정 버튼
	$(".btn-setting").click(function () {
		$(".category-layer").toggle();
	});
	// 카테고리 설정 > 초기화 버튼
	$(".btn-reset").click(function () {
		jsonData = initJson;

		[].forEach.call(jsonData, function (element) {
			let data_code = "[data-code='" + element.code + "']";
			let $cate_list2 = $(".category-list.type2 .category-item" + data_code);
			$(".category-list.type2").append($cate_list2);

			if (element.display == "Y") {
				$cate_list2.removeClass("unenabled");
				$cate_list2.children("input").prop("checked", true);
			} else {
				$cate_list2.addClass("unenabled");
				$cate_list2.children("input").prop("checked", false);
			}
		})
	});
	// 카테고리 설정 > 취소 버튼
	$(".btn-cancel").click(function () {
		$(".category-layer").hide();
	});
	// 카테고리 설정 > 확인 버튼
	$(".btn-confirm").click(function () {
		settingCategory();
		orderCategory();
		$(".category-layer").hide();
	});

	// 카테고리 설정 > 체크박스
	$(".category-list.type2 input[type='checkbox']").on("change", function () {
		if ($(this).prop('checked')) {
			$(this).closest(".category-item").removeClass("unenabled");
		} else {
			$(this).closest(".category-item").addClass("unenabled");
		}
	});

	$(".category-list.type2").sortable({}); // drag (category-list)

	$(".category-list.type1 .category-name").on('click', function (e) { // scroll move (click element)
		e.preventDefault();

		let link = $(this).attr("href");
		let position = $(link).offset().top - headerHeight;
		$(window).scrollTop(position);
	});

	$(window).on('scroll', function () {
		showCategory();
		//activeCategory();
	});
	$('#category-wrap .goods-list').slick({
		infinite: true,
		rows: 2,
		slidesPerRow: 4
	});
	$('.category-banner-list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true
	});
});

function showCategory() { // scroll : category-list show/hide
	let $category_wrap = $(".section.category");

	if (($category_wrap.offset().top - headerHeight - $(window).scrollTop()) < 0) {
		$(".category-list-wrap").show();
	}
	if (($category_wrap.offset().top + $category_wrap.outerHeight() - headerHeight - $(window).scrollTop()) < 0 || ($category_wrap.offset().top - headerHeight - $(window).scrollTop()) > 0) {
		$(".category-list-wrap").hide();
	}
}

function activeCategory() { // scroll, click : add active class
	$("[id^=cate-]").not(".hide").each(function () {
		if (!($(this).hasClass("hide"))) {
			let id = $(this).attr("id").split("-")[1];

			if (($(this).offset().top - headerHeight - 20 - $(window).scrollTop()) < 0) {
				let $this = $(".category-list.type1 .category-name." + id);
				//$this.focus().addClass('active').siblings().removeClass('active');
				$this.addClass('active').siblings().removeClass('active');
			}
		}
	});
}

function settingCategory() { // 'btn-confirm' click : create json
	let user_category_data = new Array();

	for (let i = 0; i < 19; i++) {
		// 객체 생성
		let data = new Object();
		let $category_this = $(".category-list.type2 .category-item").eq(i);

		//data.number = i + 1;
		data.code = $category_this.attr("data-code");
		//data.code = $category_this.prop("class").replace("category-name","").replace("active","").replace(" ","");
		data.display = $category_this.children("input[type='checkbox']").prop("checked") ? 'Y' : 'N';

		// 리스트에 생성된 객체 삽입
		user_category_data.push(data);
	}

	// String 형태로 변환
	jsonData = user_category_data; //JSON.stringify(user_category_data);
	//console.log(jsonData);
}

function orderCategory() { // 'btn-confirm' click : sort (category-list, category-wrap)
	[].forEach.call(jsonData, function (element) {
		let data_code = "[data-code='" + element.code + "']";
		let $cate_list = $(".category-list.type1 .category-name" + data_code);
		let $cate_list2 = $(".category-list.type2 .category-item" + data_code);
		let $cate_wrap = $("#category-wrap .category-inner" + data_code);
		$(".category-list.type1").append($cate_list);
		$("#category-wrap").append($cate_wrap);
		$(".category-list.type2").append($cate_list2);

		if (element.display == "Y") {
			$cate_list.removeClass("hide");
			$cate_wrap.removeClass("hide");
			// $cate_wrap.find('#category-wrap .goods-list').slick('setPosition');
			// $cate_wrap.find('.category-banner-list').slick('setPosition');

			$cate_wrap.find('.goods-list, .category-banner-list').slick('refresh');
			//$cate_wrap.find('.category-banner-list').slick('refresh');
			$cate_list2.removeClass("unenabled");
			$cate_list2.children("input").prop("checked", true);
		} else {
			$cate_list.addClass("hide");
			$cate_wrap.addClass("hide");
			$cate_list2.addClass("unenabled");
			$cate_list2.children("input").prop("checked", false);
		}
	})
}
/*-- [e] category setting */