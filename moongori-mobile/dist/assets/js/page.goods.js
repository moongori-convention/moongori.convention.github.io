"use strict";

var categoryList = new buiNavi('[data-bui-navi="category-list"]', {
  button: true,
  buttonClass: 'btn fold',
  buttonArea: '.navi-list',
  buttonTextActive: '<span class="btn-text">닫기</span>',
  buttonTextInactive: '<span class="btn-text">열기</span>'
});
var tooltipTypeA = new buiToggle('.tooltip.style-b.type-a[data-bui-tooltip="info-tooltip"]', {
  mode: 'tooltip',
  event: 'none',
  tooltipArrow: true
});
var tooltipTypeB = new buiToggle('.tooltip.style-b.type-b[data-bui-tooltip="info-tooltip"]', {
  mode: 'tooltip',
  event: 'none',
  tooltipArrow: true,
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>close</title><path d="M7.341 6.506l.083.07L11.95 11.1l4.526-4.525c.235-.235.614-.235.849 0 .208.208.231.531.07.765l-.07.083-4.526 4.525 4.526 4.526c.234.235.234.614 0 .849-.209.208-.532.231-.766.07l-.083-.07-4.526-4.526-4.525 4.526c-.234.234-.614.234-.848 0-.209-.209-.232-.532-.07-.766l.07-.083L11.1 11.95 6.576 7.424c-.235-.234-.235-.614 0-.848.208-.209.531-.232.765-.07z"/></svg>',
  closeButtonArea: '.tooltip-body',
  closeButtonClass: 'btn close'
}); // 판매자 및 브랜드 인트로

var foldSection = new buiFold('.store-summary[data-bui-fold="data-summary"], .brand-summary[data-bui-fold="data-summary"]', {
  ellipsis: true,
  ellipsisLimit: 2,
  ellipsisField: '.wrap',
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>'
}); // 리뷰 목록 본문

var reviewBody = new buiFold('[data-bui-fold="posts-body"]', {
  ellipsis: true,
  ellipsisLimit: 3,
  ellipsisField: '.wrap',
  activeClass: 'active',
  buttonClass: 'btn style-text type-a normal-03 xxx-small symbol-rtl-chevron-under fold',
  buttonText: '더보기',
  buttonActiveText: '접기'
});
var openFilter = new buiToggle('[data-bui-toggle="open-filter"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>close</title><path d="M6,5.1L6,5.1l6,6l5.9-5.9c0.2-0.2,0.6-0.2,0.8,0C19,5.4,19,5.7,18.9,6l-0.1,0.1L12.8,12l5.9,5.9c0.2,0.2,0.2,0.6,0,0.8C18.6,19,18.3,19,18,18.9l-0.1-0.1L12,12.8l-5.9,5.9c-0.2,0.2-0.6,0.2-0.8,0C5,18.6,5,18.3,5.1,18l0.1-0.1l5.9-5.9L5.2,6.1C5,5.8,5,5.4,5.2,5.2C5.4,5,5.7,5,6,5.1z"/></svg>',
  closeButtonClass: 'btn popup-close',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-layer-popup',
  focusin: true,
  focusout: true
});
var goodsDisplay = new Swiper('.goods-figure.swiper-container', {
  speed: 200,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
});
ScrollTrigger.create({
  trigger: '#productIntroTableOfContents',
  endTrigger: '#foot',
  start: 'top top',
  end: 'bottom center',
  toggleClass: "active" // markers: true

});
var contentNavigations = new buiFold('[data-bui-fold="product-features"]', {
  activeClass: 'active',
  buttonClass: 'btn theme-b style-b type-b normal-01 x-large symbol-rtl-chevron-under flex',
  buttonText: '<span class="btn-text">상품정보 더보기</span>',
  buttonActiveText: '<span class="btn-text">상품정보 접기</span>',
  buttonAppendTo: '.button-area',
  eventCallBack: function eventCallBack() {
    ScrollTrigger.refresh();
  }
});
Array.prototype.forEach.call(document.querySelectorAll('#productIntroTableOfContents .tab-name'), function (button, index) {
  var target = button.getAttribute('href');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.4,
      scrollTo: {
        y: target,
        offsetY: 48
      }
    });
  });
});
var links = document.querySelectorAll('#productIntroTableOfContents .tab-item');
var sections = document.querySelectorAll('.product-intro .section');
Array.prototype.forEach.call(sections, function (section, index) {
  document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop + 96 >= window.pageYOffset + section.getBoundingClientRect().top && document.documentElement.scrollTop + 96 < window.pageYOffset + section.getBoundingClientRect().top + section.getBoundingClientRect().height) {
      if (links.length > index) {
        // console.log(index);
        links[index].classList.add('current');
        Array.prototype.forEach.call(getSiblings(links[index]), function (siblingsItem) {
          siblingsItem.classList.remove('current');
        });
      }
    }
  });
});
var precisionMachining = new buiFold('[data-bui-fold="precision-machining"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"/></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"/></svg>',
  buttonAppendTo: '.goods-area'
});
var displayWoodItem = new buiFold('.goods-display.style-d.type-a [data-bui-fold="goods-item"]', {
  activeClass: 'active',
  buttonClass: 'btn style-text type-03 xx-small normal-01 symbol-rtl-chevron-under',
  buttonText: '자세히',
  buttonAppendTo: '.button-area.style-a.type-d>.button-item:first-child'
}); // userGallery

var userStory = new Swiper('#userStory', {
  // autoplay: {
  // 	delay: 4000,
  // },
  // loop: true,
  simulateTouch: false,
  slidesPerView: 2,
  spaceBetween: 8,
  slidesPerGroup: 2,
  watchOverflow: true,
  navigation: {
    nextEl: '#userStory .swiper-button-next',
    prevEl: '#userStory .swiper-button-prev'
  }
});