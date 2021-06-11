"use strict";

// 상품홈 > 기획전 및 이벤트
var exhibitionEvent = new Swiper('.local-body.shopping-intro .display-board.swiper-container', {
  autoplay: {
    delay: 1000
  },
  loop: true,
  simulateTouch: false,
  slidesPerView: 2,
  spaceBetween: 32,
  slidesPerGroup: 2,
  watchOverflow: true,
  navigation: {
    nextEl: '.local-body.shopping-intro .display-board.swiper-container .swiper-button-next',
    prevEl: '.local-body.shopping-intro .display-board.swiper-container .swiper-button-prev'
  },
  pagination: {
    el: '.local-body.shopping-intro .display-board.swiper-container .swiper-pagination',
    type: 'fraction'
  }
});

if (document.querySelector('.shopping-intro .display-board.swiper-container')) {
  exhibitionEvent.on('autoplayStart', function () {
    document.querySelector('.shopping-intro .display-board.swiper-container .swiper-stop').classList.add('active');
    document.querySelector('.shopping-intro .display-board.swiper-container .swiper-start').classList.remove('active');
  });
  exhibitionEvent.on('autoplayStop', function () {
    document.querySelector('.shopping-intro .display-board.swiper-container .swiper-stop').classList.remove('active');
    document.querySelector('.shopping-intro .display-board.swiper-container .swiper-start').classList.add('active');
  });
  document.querySelector('.shopping-intro .display-board.swiper-container .swiper-stop').addEventListener('click', exhibitionEvent.autoplay.stop);
  document.querySelector('.shopping-intro .display-board.swiper-container .swiper-start').addEventListener('click', exhibitionEvent.autoplay.start);
} // 상품홈 > 오늘의 인기 상품
// var todayHotItems = new Swiper('.local-body.shopping-intro .today-hot .goods-display.swiper-container', {
// 	simulateTouch: false,
// 	slidesPerView: 5,
// 	spaceBetween: 32,
// 	slidesPerGroup: 5,
// 	watchOverflow: true,
// 	navigation: {
// 		nextEl: '.local-body.shopping-intro .today-hot .goods-display.swiper-container .swiper-button-next',
// 		prevEl: '.local-body.shopping-intro .today-hot .goods-display.swiper-container .swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '.local-body.shopping-intro .today-hot .goods-display.swiper-container .swiper-pagination',
// 		clickable: true,
// 	},
// });
// 상품홈 > 추천 브랜드


var recommendBrand = new Swiper('.local-body.shopping-intro .brand-display.swiper-container', {
  simulateTouch: false,
  slidesPerView: 1,
  spaceBetween: 32,
  slidesPerGroup: 1,
  watchOverflow: true,
  navigation: {
    nextEl: '.local-body.shopping-intro .brand-display.swiper-container .swiper-button-next',
    prevEl: '.local-body.shopping-intro .brand-display.swiper-container .swiper-button-prev'
  },
  pagination: {
    el: '.local-body.shopping-intro .brand-display.swiper-container .swiper-pagination',
    clickable: true
  }
}); // 상품상세 > 상품 이미지

var goodsDetailsFigurePaging = document.querySelectorAll('#goodsFigure .image');
var goodsDetailsFigure = new Swiper('#goodsFigure .swiper-container', {
  simulateTouch: false,
  loop: true,
  navigation: {
    nextEl: '#goodsFigure .swiper-button-next',
    prevEl: '#goodsFigure .swiper-button-prev'
  },
  pagination: {
    el: '#goodsFigure .swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="swiper-pagination-bullet" style="background-image: url(' + goodsDetailsFigurePaging[index].getAttribute('src') + ');" onmouseover="this.click();" onfocus="this.click();"><span class="text">' + index + '</span></span>';
    }
  }
}); //상품상세 > 스토리

var postsDisplayMedium = new Swiper('.local-body.goods-details .section.story .posts-display.swiper-container', {
  simulateTouch: false,
  slidesPerView: 3,
  spaceBetween: 22,
  slidesPerGroup: 3,
  watchOverflow: true,
  navigation: {
    nextEl: '.local-body.goods-details .section.story .posts-display.swiper-container .swiper-button-next',
    prevEl: '.local-body.goods-details .section.story .posts-display.swiper-container .swiper-button-prev'
  }
}); // 상품상세 > 리뷰 목록

var reviewBody = new buiFold('[data-bui-fold="posts-summary"]', {
  ellipsis: true,
  ellipsisLimit: 3,
  ellipsisField: '.posts-summary .para',
  activeClass: 'active',
  buttonClass: 'em normal-04 xxx-small fold',
  buttonText: '더보기',
  buttonActiveText: '접기'
}); // 상품상세 > 문의

var qnaItems = new buiFold('[data-bui-fold="qna-item"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"/></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"/></svg>',
  buttonAppendTo: '.posts-head'
}); // 상품 상세 > 상품 설명

if (document.querySelector('#productIntroTableOfContents')) {
  ScrollTrigger.create({
    trigger: '#productIntroTableOfContents',
    start: 'top 240',
    end: 'bottom bottom',
    // markers: true,
    onEnter: function onEnter(self) {
      document.querySelector('#page').classList.add('inactive-head');
    },
    onLeaveBack: function onLeaveBack(self) {
      document.querySelector('#page').classList.remove('inactive-head');
    }
  });
} // 상품 상세 > 상품 옵션


if (document.querySelector('#productIntro')) {
  ScrollTrigger.create({
    trigger: '#productIntro',
    start: 'top top',
    end: 'bottom bottom',
    toggleClass: 'active',
    onEnter: function onEnter(self) {
      document.querySelector('#productOrderArea').classList.add('active');
    },
    onLeaveBack: function onLeaveBack(self) {
      document.querySelector('#productOrderArea').classList.remove('active');
    },
    onLeave: function onLeave(self) {
      document.querySelector('#productOrderArea').classList.add('on-leave');
    },
    onEnterBack: function onEnterBack(self) {
      document.querySelector('#productOrderArea').classList.remove('on-leave');
    } // markers: true

  });
  scrollNavigations('#productIntroTableOfContents', 64);
} //카테고리 홈 > 추천상품


var exhibitionEvent = new Swiper('.category-intro .display-board.style-b.large.swiper-container', {
  simulateTouch: false,
  slidesPerView: 1,
  spaceBetween: 24,
  slidesPerGroup: 1,
  watchOverflow: true,
  navigation: {
    nextEl: '.category-intro .display-board.style-b.large.swiper-container .swiper-button-next',
    prevEl: '.category-intro .display-board.style-b.large.swiper-container .swiper-button-prev'
  },
  pagination: {
    el: '.category-intro .display-board.style-b.large.swiper-container .swiper-pagination',
    type: 'fraction'
  }
});