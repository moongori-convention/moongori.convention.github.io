"use strict"; // 카테고리 리스트

var categoryList = new buiNavi('[data-bui-navi="category-list"]', {
  button: true,
  buttonClass: 'btn fold',
  buttonArea: '.navi-list',
  buttonTextActive: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>',
  buttonTextInactive: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>'
}); // 브랜드 검색

/* [moongori] 변경부분  BEGIN */

var brandItems = new buiTab('#brandLineup01.brand-3 .tab-display', {
  mode: 'scroll',
  targetClass: 'brand-navigations'
}); // 상품별 브랜드 검색

var brandItems = new buiTab('#brandLineup02.brand-4 .tab-display', {
  mode: 'scroll',
  targetClass: 'brand-navigations'
}); // 상품별 브랜드 검색

var brandItems = new buiTab('#brandLineup03.brand-5 .tab-display', {
  mode: 'scroll',
  targetClass: 'brand-navigations'
}); // 상품별 브랜드 검색

/* [moongori] 변경부분  END */

var brandTabBtn = document.querySelectorAll(".brand-lineup.type-a .tab-display .tab-list .tab-item");

var brandTabBtnClick = function brandTabBtnClick(e) {
  /* [moongori] 변경부분  BEGIN */
  //  Array.from(brandTabBtn).forEach(function (brandTabBtn) {
  //    brandTabBtn.classList.remove("current");
  //  });
  for (var i = 0; i < e.currentTarget.parentElement.children.length; i++) {
    e.currentTarget.parentElement.children.item(i).classList.remove("current");
  }

  e.currentTarget.classList.add("current");
  /* [moongori] 변경부분  END */
};

var brandTabBtnSetting = function brandTabBtnSetting(e) {
  brandTabBtn.forEach(function (item) {
    item.addEventListener('click', brandTabBtnClick);
  });
};

brandTabBtnSetting(); // 수정후 상단 스크립트 삭제 예정
// 브랜드 검색 - 가나다순 

var consonantItem = new buiTab('#consonantOrder .tab-display', {
  mode: 'scroll',
  targetClass: 'consonant-navigations'
}); // 브랜드 검색 - ABC순 

var alphabetItem = new buiTab('#alphabetOrder .tab-display', {
  mode: 'scroll',
  targetClass: 'abc-navigations'
}); // 브랜드 검색 - 기타순 

var etcItem = new buiTab('#etcOrder .tab-display', {
  mode: 'scroll',
  targetClass: 'etc-navigations'
});