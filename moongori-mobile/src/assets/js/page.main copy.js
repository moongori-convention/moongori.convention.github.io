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
let headerHeight = ($(".category-list.type1").outerHeight());
let category_cnt = 0;

function init() {
	// load json
	$.getJSON("user_category_data.json", function (data) {
			jsonData = data;
		})
		.done(function () {})
		.fail(function () {
			console.log("error");
			jsonData = initJson;
			category_cnt = Object.keys(initJson).length;
		})
		.always(function () {
			orderCategory(true);
		});

	fixedCategory();
	//activeCategory();
}
$(function () {
	init();

	// 카테고리 설정 버튼
	$(".btn-setting").click(function () {
		$(".category-layer").show();
		$("body").addClass("active-layer-popup");	
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
	$(".btn-close").click(function () {
		$(".category-layer").hide();
		$("body").removeClass("active-layer-popup");
	});
	// 카테고리 설정 > 확인 버튼
	$(".btn-confirm").click(function () {
		settingCategory();
		orderCategory();
		$(".category-layer").hide();
		$("body").removeClass("active-layer-popup");
	});

	// 카테고리 설정 > 체크박스
	$(".category-list.type2 input[type='checkbox']").on("change", function () {
		if ($(this).prop('checked')) {
			category_cnt++;
			$(this).closest(".category-item").removeClass("unenabled");
			toast("<strong>" + $(this).siblings(".category-name").text() + "</strong> 카테고리가 설정되었습니다.");
		} else {
			category_cnt--;
			$(this).closest(".category-item").addClass("unenabled");
			toast("<strong>" + $(this).siblings(".category-name").text() + "</strong> 카테고리가 해제되었습니다.");
		}

		$(".category-description .description2 span").text(category_cnt);
	});

	$(".category-list.type2 .category-item").addClass("no-move");
	$(".category-list.type2").sortable({ // drag (category-list)
		// 움직이지 못하는 css 선택자
		cancel: ".no-move",
		stop:function(event,ui){
			toast($(ui.item).text()+" 카테고리 순서가 변경되었습니다.");
		}
	});	

	$(".category-list.type2 .category-name").on("taphold", function() {
		$(this).closest(".category-item").css("border","1px solid red").removeClass("no-move");
	});

	$(".category-list.type1 .category-name").on('click', function (e) { // scroll move (click element)
		e.preventDefault();

		let link = $(this).attr("href");
		let position = $(link).offset().top - headerHeight;
		$(window).scrollTop(position);
	});

	$(window).on('scroll', function () {
		fixedCategory();
		//activeCategory();
	});
	$('#category-wrap .goods-list').slick({
		infinite: true,
		rows: 4,
		slidesPerRow: 2,
		arrows: false,
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

function fixedCategory() { // scroll : category-list show/hide
	let $category_wrap = $(".section.category");

	if (($category_wrap.offset().top - headerHeight - $(window).scrollTop()) < 0) {
		$(".category-list-wrap").addClass("fixed");
		activeCategory();
	}
	if (($category_wrap.offset().top + $category_wrap.outerHeight() - headerHeight - $(window).scrollTop()) < 0 || ($category_wrap.offset().top - headerHeight - $(window).scrollTop()) > 0) {
		$(".category-list-wrap").removeClass("fixed");
	}
}

function activeCategory() { // scroll, click : add active class
	$("[id^=cate-]").not(".hide").each(function (index) {
		let id = $(this).attr("id").split("-")[1];

		if (($(this).offset().top - headerHeight - 20 - $(window).scrollTop()) < 0) {
			let $this = $(".category-list.type1 .category-name." + id);
			//$this.focus().addClass('active').siblings().removeClass('active');
			$this.addClass('active').siblings().removeClass('active');

			let this_pos = $this.outerWidth() * index;//$this.offset().left;
			$(".category-list-wrap").scrollLeft(this_pos);
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
}

function orderCategory() { // 'btn-confirm' click : sort (category-list, category-wrap)
	category_cnt = 0;

	[].forEach.call(jsonData, function (element) {
		let data_code = "[data-code='" + element.code + "']";
		let $cate_list = $(".category-list.type1 .category-name" + data_code);
		let $cate_list2 = $(".category-list.type2 .category-item" + data_code);
		let $cate_wrap = $("#category-wrap .category-inner" + data_code);
		$(".category-list.type1").append($cate_list);
		$("#category-wrap").append($cate_wrap);
		$(".category-list.type2").append($cate_list2);

		if (element.display == "Y") {
			category_cnt++;
			$cate_list.removeClass("hide");
			$cate_wrap.removeClass("hide");
			$cate_wrap.find('.goods-list, .category-banner-list').slick('refresh');
			$cate_list2.removeClass("unenabled");
			$cate_list2.children("input").prop("checked", true);
		} else {
			$cate_list.addClass("hide");
			$cate_wrap.addClass("hide");
			$cate_list2.addClass("unenabled");
			$cate_list2.children("input").prop("checked", false);
		}
	});
	$(".category-description .description2 span").text(category_cnt);
}
/*-- [e] category setting */