$(function(){
	$("#snb-btn").click(function(){
		$(this).toggleClass("active");
		$("#snb, #content").toggleClass("close");
	});

	// 검색 (정책 > @mixin 검색)
	$("#keyword").keyup(function() {
		var k = $(this).val();
		$(".info-table > table > tbody > tr").hide();
		var temp = $(".info-table > table > tbody > tr:contains('" + k + "')");

		$(temp).show();
	});



	/* [.snb-list li 클래스 설명]
	.active_c : 현재 페이지에 붙는 클래스
	.active : pc에서 마우스 오버 시 붙는 클래스
	*/

	//현재 페이지에 active_c 클래스 추가	
	// var path = $(location).attr('pathname');
	// $("#snb > ul > li > a[href="+path+"]").parent().addClass("active_c");

	/*//다국어 사이트 선택
	var language = array_location[array_location.length-3];
	$('.language-list a[data-text="'+language+'"').addClass('active');
	$('.language-list02 a[data-text="'+language+'"').addClass('active');

	//메뉴 (PC)
	$('.gnb-list > ul > li > a').mouseover(function(){
		$('body').addClass('open');
	});
	$('.gnb-list li > a').mouseover(function(){
		$('.gnb-list li').removeClass('active');
		$(this).parents('li').addClass('active');
	});
	$(".header__wrap").mouseleave(function(){
		$('body').removeClass('open');
		$('.gnb-list li').removeClass('active');
	});

	//메뉴 (Mobile)
	var h = $(window).height() - 95;
	$('.gnb-open').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('open_m');
		$("html, body").animate({scrollTop:0 }, 0);

		if($(".dimm").length==0) {//<div class="dimm">이 없을 경우에만 생성
			$('body').append('<div class="dimm" style="height:'+h+'px"></div>');
		}
		if($(this).hasClass('active')) {
			$('.dimm').show();
		} else {
			$('.dimm').hide();
		}
	});
	$('.gnb-list > ul > li').click(function(){
		$('.gnb-list > ul > li').removeClass('active_m active_c');
		$(this).addClass('active_m');
	});*/
});