"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var toggleName = new buiToggle('[data-bui-toggle="management-menu"]');
}); // textarea auto height

var inputResize = function inputResize(elem) {
  var elemParent = elem.closest('.submit-form');

  if (elemParent.querySelector('.target-name')) {
    var target = elemParent.querySelector('.target-name').textContent;
    elemParent.querySelector('.form').setAttribute('data-form-value', target + elem.value);
  } else {
    elemParent.querySelector('.form').setAttribute('data-form-value', elem.value);
  }

  elemParent.classList.add('entering');
}; // textarea reset


var writeReset = function writeReset(elem) {
  var elemParent = elem.closest('.submit-form');
  var imgArea = elemParent.querySelector('.image-area');

  if (elemParent.querySelector('.type-comment').value.length < 1 && imgArea.classList == 'image-area') {
    elemParent.classList.remove('entering');
  }
}; // 대댓글 작성하기 


var btnCommentWrite = new buiToggle('[data-bui-toggle="comment-write"]', {
  onloadCallBack: function onloadCallBack() {
    var target = this;
    var elemParent = target.closest('[data-target="parent-element"]');
    var target = elemParent.querySelector('.writer .body').textContent.replace('작성자', '');
    var targetEl = '<span class="em accent-01 xx-small target-name">@' + target + '</span>';
    elemParent.querySelector('.form-area').insertAdjacentHTML('beforeend', targetEl);
  },
  activeCallBack: function activeCallBack() {
    var target = this;
    var elemParent = target.closest('[data-target="parent-element"]');
    elemParent.querySelector('.type-comment').style.textIndent = elemParent.querySelector('.target-name').offsetWidth + 5 + "px";
  }
}); // 이미지 업로드

var imageuploader = function fileuploader(fileForm) {
  var elemParent = fileForm.closest('.submit-form');
  var fivarype = elemParent.querySelector('.image-area .image-type');
  var fileName = elemParent.querySelector('.image-area .image-name');
  var fileClear = elemParent.querySelector('.image-area .image-clear');

  if (fileForm.files.length === 0) {
    elemParent.querySelector('.image-area').classList.remove('typed');
    fileName.removeAttribute('data-bui-file-name');
    fivarype.removeAttribute('data-bui-file-type');
    fivarype.removeAttribute('style');
  } else {
    fileForm.parentElement.classList.add('typed');
    elemParent.querySelector('.image-area').classList.add('typed');
    fivarype.setAttribute('data-bui-file-type', fileForm.files[0].type.split('/')[0]);
    fileName.setAttribute('data-bui-file-name', fileForm.files[0].name);
    elemParent.classList.add('entering');

    if (fileForm.files[0].type.split('/')[0] === 'image') {
      fivarype.setAttribute('style', 'background-image: url(' + URL.createObjectURL(fileForm.files[0]) + ')');
      console.log(1);
    } else {
      fivarype.removeAttribute('style');
      console.log(2);
    }
  }
}; // 댓글 좋아요


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
}; // 태그작성


var tagInputArea = document.querySelector(".tag-area"),
    hide = document.querySelector('.input-text');

var tagSize = function tagSize(elem) {
  if (elem.value.length < 10) {
    hide.setAttribute('data-text', elem.value);
    elem.style.width = hide.offsetWidth + 14 + 'px';
  } // else {
  // 	elem.disabled = true;
  // }

};