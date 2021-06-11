"use strict";

// 댓글 좋아요
var likeitToggle = function likeitToggle(elem) {
  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
  } else {
    elem.classList.add('checked');
  }
}; // 좋아요


var itemLikeit = function itemLikeit(elem) {
  var title = elem.querySelector('title');
  var path = elem.querySelector('path');

  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
    title.textContent = '좋아요 추가';
    path.setAttribute('d', 'M20.6,5.4c-1.9-1.9-5-1.9-6.9,0L12,7.1l-1.6-1.6c-1.9-1.9-5-1.9-6.9,0c-1.9,1.9-1.9,5,0,6.9l8.1,8.1 c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2l8.1-8.1c0.9-0.9,1.4-2.2,1.4-3.5C22,7.6,21.5,6.4,20.6,5.4z M19.7,11.5L12,19.2 l-7.7-7.7c-1.4-1.4-1.4-3.8,0-5.2C5,5.6,6,5.2,6.9,5.2c0.9,0,1.9,0.4,2.6,1.1l2.1,2.1c0.2,0.2,0.6,0.2,0.8,0l2.1-2.1 c1.4-1.4,3.8-1.4,5.2,0c0.7,0.7,1.1,1.6,1.1,2.6C20.8,9.9,20.4,10.8,19.7,11.5z');
  } else {
    elem.classList.add('checked');
    title.textContent = '좋아요 삭제';
    path.setAttribute('d', 'M12,20.7c-0.2,0-0.3-0.1-0.4-0.2l-8.1-8.1c-1.9-1.9-1.9-5,0-6.9c1.9-1.9,5-1.9,6.9,0L12,7.1l1.6-1.6 c1.9-1.9,5-1.9,6.9,0C21.5,6.4,22,7.6,22,8.9c0,1.3-0.5,2.5-1.4,3.5l-8.1,8.1C12.3,20.6,12.2,20.7,12,20.7');
  }
}; // 글관리 메뉴 열기 


var managementMenu = document.querySelector('.management-menu');

var menuToggle = function menuToggle(elem) {
  elem.classList.toggle('active');
};