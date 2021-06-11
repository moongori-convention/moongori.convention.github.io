"use strict";

/**
 * noimage
 */
function imgError(image) {
  image.onerror = "";
  image.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTYgMTk2IiB3aWR0aD0iMTk2IiBoZWlnaHQ9IjE5NiI+PHBhdGggZD0iTTEyMiw4MS4yVjgyaC0xNlY2NmgwLjhjMC44LDAsMS42LDAuMywyLjEsMC45bDEyLjIsMTIuMkMxMjEuNyw3OS43LDEyMiw4MC40LDEyMiw4MS4yeiBNMTA1LDg2Yy0xLjcsMC0zLTEuMy0zLTNWNjZINzdjLTEuNywwLTMsMS4zLTMsM3Y1OGMwLDEuNywxLjMsMywzLDNoNDJjMS43LDAsMy0xLjMsMy0zVjg2SDEwNXogTTg4LjEsODhjMy4zLDAsNiwyLjcsNiw2cy0yLjcsNi02LDZjLTMuMywwLTYtMi43LTYtNlM4NC44LDg4LDg4LjEsODh6IE0xMTQuMSwxMThoLTMybDAuMS02LjFsNC45LTQuOWMwLjYtMC42LDEuNS0wLjUsMi4xLDAuMWw0LjksNC45TDEwNyw5OS4xYzAuNi0wLjYsMS41LTAuNiwyLjEsMGw0LjksNC45TDExNC4xLDExOEwxMTQuMSwxMTh6Ii8+PC9zdmc+";
  image.className += ' noimage';
}

if (Detectizr.browser.name === 'ie') {
  var svgElements = document.querySelectorAll('svg');
  Array.prototype.forEach.call(svgElements, function (item) {
    item.setAttribute('focusable', 'false');
  });
  var buttonTemeA = document.querySelectorAll('.btn.theme-a');
  Array.prototype.forEach.call(buttonTemeA, function (item) {
    item.addEventListener('click', function (event) {
      var target = this;
      var highlight = document.createElement('span');
      highlight.classList.add('highlight');
      target.appendChild(highlight);
      setTimeout(function () {
        // highlight.remove();
        target.removeChild(highlight);
      }, 1000); // item.classList.add('click');
    });
  });
} // 패널 및 탭바 유무 확인


var findContent = function findContent(target, className) {
  var target = document.querySelector(target);
  target ? document.querySelector('body').classList.add(className) : null;
};

findContent('.content-panel', 'has-content-panel');
findContent('.tab-bars', 'has-tab-bars'); // 스크랩

var itemScrap = function itemScrap(elem) {
  var title = elem.querySelector('title');
  var path = elem.querySelector('path');

  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
    title.textContent = '스크랩 추가';
    path.setAttribute('d', 'M17,3.4H7C6.1,3.4,5.4,4.1,5.4,5v16.1l6.6-3.9l6.6,3.9V5C18.6,4.1,17.9,3.4,17,3.4z M17.4,18.9L12,15.7l-5.4,3.2V5c0-0.2,0.2-0.4,0.4-0.4h10l0.1,0c0.2,0,0.3,0.2,0.3,0.4V18.9z');
  } else {
    elem.classList.add('checked');
    title.textContent = '스크랩 삭제';
    path.setAttribute('d', 'M18.6,5v16.1L12,17.1l-6.6,3.9V5c0-0.9,0.7-1.6,1.6-1.6h10C17.9,3.4,18.6,4.1,18.6,5z');
  }
}; // 스크랩


var favoriteStore = function favoriteStore(elem) {
  var title = elem.querySelector('title');
  var path = elem.querySelector('path');

  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
    title.textContent = '스크랩 추가';
    path.setAttribute('d', 'M17,3.4H7C6.1,3.4,5.4,4.1,5.4,5v16.1l6.6-3.9l6.6,3.9V5C18.6,4.1,17.9,3.4,17,3.4z M17.4,18.9L12,15.7l-5.4,3.2V5c0-0.2,0.2-0.4,0.4-0.4h10l0.1,0c0.2,0,0.3,0.2,0.3,0.4V18.9z');
  } else {
    elem.classList.add('checked');
    title.textContent = '스크랩 삭제';
    path.setAttribute('d', 'M18.6,5v16.1L12,17.1l-6.6,3.9V5c0-0.9,0.7-1.6,1.6-1.6h10C17.9,3.4,18.6,4.1,18.6,5z');
  }
};

var directToggle = new buiToggle('[data-bui-toggle="direct-toggle"]'); // 드롭다운 메뉴

var dropdownStyleA = new buiToggle('.dropdown.style-a [data-bui-toggle="toggle-dropdown"]', {
  reactParent: '.dropdown',
  clickout: true,
  focusout: true,
  onloadCallBack: function onloadCallBack() {
    var target = this;
    var dataName = this.querySelectorAll('.data-name');
    var dataSelected = document.querySelector('[data-bui-toggle-button="' + this.id + '"]');
    Array.prototype.forEach.call(dataName, function (name) {
      name.addEventListener('click', function (event) {
        event.preventDefault();
        dataSelected.textContent = this.textContent;
        name.parentElement.classList.add('active');
        Array.prototype.forEach.call(getSiblings(name.parentElement), function (siblingsItem) {
          siblingsItem.classList.remove('active');
        });
        dropdownStyleA.toggle(target.id);
      });
    });
  }
});
var dropdownStyleB = new buiToggle('.dropdown.style-b [data-bui-toggle="toggle-dropdown"]', {
  reactParent: '.dropdown',
  focusout: true
});
var dropdownStyleC = new buiToggle('.dropdown.style-c [data-bui-toggle="toggle-dropdown"]', {
  reactParent: '.dropdown',
  clickout: true,
  focusout: true
});
var openPopup = new buiToggle('.layer-popup.style-a[data-bui-toggle="open-popup"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>close</title><path d="M6,5.1L6,5.1l6,6l5.9-5.9c0.2-0.2,0.6-0.2,0.8,0C19,5.4,19,5.7,18.9,6l-0.1,0.1L12.8,12l5.9,5.9c0.2,0.2,0.2,0.6,0,0.8C18.6,19,18.3,19,18,18.9l-0.1-0.1L12,12.8l-5.9,5.9c-0.2,0.2-0.6,0.2-0.8,0C5,18.6,5,18.3,5.1,18l0.1-0.1l5.9-5.9L5.2,6.1C5,5.8,5,5.4,5.2,5.2C5.4,5,5.7,5,6,5.1z"/></svg>',
  closeButtonClass: 'btn popup-close',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-layer-popup',
  focusin: true,
  focusout: true
});
var openPopupB = new buiToggle('.layer-popup.style-b[data-bui-toggle="open-popup"]', {
  reactTarget: 'body',
  reactTargetActiveClass: 'active-layer-popup',
  focusin: true,
  focusout: true
});
var openInfoPopup = new buiToggle('[data-bui-toggle="info-popup"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>close</title><path d="M6,5.1L6,5.1l6,6l5.9-5.9c0.2-0.2,0.6-0.2,0.8,0C19,5.4,19,5.7,18.9,6l-0.1,0.1L12.8,12l5.9,5.9c0.2,0.2,0.2,0.6,0,0.8C18.6,19,18.3,19,18,18.9l-0.1-0.1L12,12.8l-5.9,5.9c-0.2,0.2-0.6,0.2-0.8,0C5,18.6,5,18.3,5.1,18l0.1-0.1l5.9-5.9L5.2,6.1C5,5.8,5,5.4,5.2,5.2C5.4,5,5.7,5,6,5.1z"/></svg>',
  closeButtonArea: '.popup-item',
  closeButtonClass: 'btn popup-close',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-info-popup',
  focusin: true,
  focusout: true
});
var foldSection = new buiFold('[data-bui-fold="section"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>',
  buttonAppendTo: '.section-intro',
  targetClass: 'bui-fold-target'
});
var foldDataItem = new buiFold('.data-display.style-c.type-b .data-item[data-bui-fold="data-item"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6,8.3h12l-6,7.5L6,8.3z"/></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M18,15.8H6l6-7.5L18,15.8z"/></svg>',
  buttonAppendTo: '.data-head',
  targetClass: 'bui-fold-target'
});
var foldLeadBoard = new buiFold('.lead-board[data-bui-fold="foldLeadBoard"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"/></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"/></svg>',
  buttonAppendTo: '.board-head'
});
var foldDataDisplay = new buiFold('.data-display.style-d.type-b .data-item[data-bui-fold="data-item"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"/></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"/></svg>',
  buttonAppendTo: '.data-body',
  targetClass: 'bui-fold-target'
});
var optionItem = new buiFold('[data-bui-fold="option-item"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>',
  buttonAppendTo: '.option-side',
  targetClass: 'bui-fold-target'
});
var contentNavigations = new buiFold('[data-bui-fold="content-navigations"]', {
  activeClass: 'active',
  buttonClass: 'btn style-text type-b normal-02 xx-small symbol-rtl-chevron-under',
  buttonText: '더보기',
  buttonActiveText: '접기',
  buttonAppendTo: '.more-data'
}); // 탭 기본

var tabs = new buiTab('[data-bui-tab="normal"]'); // 필터

var filterItems = new buiTab('#searchFilter .tab-display', {
  mode: 'scroll',
  targetClass: 'fillter-navigations'
}); // local-navigations

var navigationsItems = new buiTab('[data-bui-tab="local-navigations"]', {
  tabItem: '.lnb-item',
  tabName: '.lnb-name',
  tabItemReact: true
}); // 가로스크롤 탭

var navigationsItems = new buiTab('[data-bui-tab="tabitem-scroll"]', {
  tabItemReact: true
});

var contentBreadcrumbs = function contentBreadcrumbs(selector) {
  var elem = document.querySelector(selector);
  var reactTarget = document.querySelector('body');
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 48) {
      reactTarget.classList.add('active-content-breadcrumbs');
    } else {
      reactTarget.classList.remove('active-content-breadcrumbs');
    }
  });
};

contentBreadcrumbs('#page');

var formAddFile = function formAddFile(inputEl) {
  var curFiles = inputEl.files;

  if (curFiles.length === 0) {
    inputEl.parentElement.classList.remove('typed');
    inputEl.parentElement.setAttribute('data-bui-file-type', 'none');
    inputEl.parentElement.setAttribute('data-bui-placeholder', inputEl.getAttribute('title'));
    inputEl.parentElement.removeAttribute('style');
  } else {
    inputEl.parentElement.setAttribute('data-bui-file-type', curFiles[0].type.split('/')[0]);
    inputEl.parentElement.classList.add('typed');
    inputEl.parentElement.setAttribute('data-bui-placeholder', inputEl.files[0].name);

    if (curFiles[0].type.split('/')[0] === 'image') {
      inputEl.parentElement.setAttribute('style', 'background-image: url(' + URL.createObjectURL(curFiles[0]) + ')');
    } else {
      inputEl.parentElement.removeAttribute('style');
    }
  }
};

var formClear = function formClear() {
  var fileUploader = event.target.closest('.file-uploader');
  var form = event.target.closest('.form');
  var formElem = form.querySelector('.form-elem');
  formElem.value = null;
  formAddFile(formElem);
}; // swiper


var swiperStyleA = {
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function renderFraction(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span><span class="' + totalClass + '"></span>';
    }
  }
};
var swiperStyleB = {
  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 8,
  watchOverflow: true,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
};
var swiperStyleC = {
  slidesPerView: 4,
  slidesPerGroup: 4,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  spaceBetween: 8,
  watchOverflow: true,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      spaceBetween: 16
    },
    360: {
      spaceBetween: 20
    }
  }
};