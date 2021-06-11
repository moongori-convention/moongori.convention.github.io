"use strict";

// 브랜드 검색 > 추천 브랜드
var favoriteStore = new Swiper('.local-body.brand-search .favorite-store .sort-display.swiper-container', {
  simulateTouch: false,
  slidesPerView: 8,
  slidesPerGroup: 8,
  spaceBetween: 32,
  watchOverflow: true,
  navigation: {
    nextEl: '.local-body.brand-search .favorite-store .sort-display .swiper-button-next',
    prevEl: '.local-body.brand-search .favorite-store .sort-display .swiper-button-prev'
  }
}); // 브랜드 검색 > 바로가기 탭

if (document.querySelector('.local-body.brand-search .section.search-results')) {
  ScrollTrigger.create({
    trigger: '.section.search-results',
    start: 'top top',
    end: 'bottom top',
    toggleClass: "active",
    onToggle: function onToggle() {} // markers: true

  });
  scrollNavigations('.section.search-results .tab-display'); // 해더 숨김

  ScrollTrigger.create({
    trigger: '.section.search-results',
    start: 'top 240',
    end: 'bottom top',
    onEnter: function onEnter(self) {
      document.querySelector('#page').classList.add('inactive-head');
    },
    onLeaveBack: function onLeaveBack(self) {
      document.querySelector('#page').classList.remove('inactive-head');
    } // markers: true

  });
}