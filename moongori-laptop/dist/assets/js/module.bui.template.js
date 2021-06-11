"use strict";

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }

    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
      return;
    }

    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
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
} // 위젯 툴바


window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 0) {
    document.querySelector('body').classList.add('active-scroll');
  } else {
    document.querySelector('body').classList.remove('active-scroll');
  }
});

function widget() {
  var gotoTop = document.querySelector('.goto-top');
  if (!gotoTop) return;
  gotoTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });
}

widget(); // 탭 기본

var tabs = new buiTab('[data-bui-tab="normal"]'); // form checkBox setup

function formCheckBox(selector) {
  var forms = document.querySelectorAll(selector);
  if (!forms) return;
  Array.prototype.forEach.call(forms, function (form) {
    var formElem = form.querySelector('.form-elem'); // var before = document.createElement('span');
    // before.className = 'before';
    // formElem.before(before);

    var after = document.createElement('span');
    after.className = 'after';
    formElem.after(after);
  });
}

Detectizr.browser.name === 'ie' ? formCheckBox('.form.radio, .form.checkbox') : null; // form textfield util setup

function formFieldset(selector) {
  var forms = document.querySelectorAll(selector);
  Array.prototype.forEach.call(forms, function (form) {
    var formElem = form.querySelector('.form-elem:not([readonly])');
    if (!formElem) return;
    var formUtil = form.querySelector('.form-util');
    if (!formUtil) return;
    var formClear = form.querySelector('.form-clear');
    if (!formClear) return;

    function checkValue() {
      if (formElem.value.length > 0) {
        formElem.classList.add('typed');
        formElem.style.paddingRight = formUtil.offsetWidth + 'px';
      } else {
        formElem.classList.remove('typed');
        formElem.style.paddingRight = null;
      }
    }

    checkValue();
    formElem.addEventListener('keyup', checkValue, false);
    formElem.addEventListener('click', function (e) {
      formElem.style.paddingRight = formUtil.offsetWidth + 'px';
      var xStart = formUtil.offsetLeft + formClear.offsetLeft;
      var yStart = formUtil.offsetTop + formClear.offsetTop;
      var xEnd = xStart + formClear.offsetWidth;
      var yEnd = yStart + formClear.offsetHeight;

      if (formElem.classList.contains('typed')) {
        if (e.offsetX >= xStart && e.offsetX <= xEnd && e.offsetY >= yStart && e.offsetY <= yEnd) {
          formElem.value = '';
          formElem.parentElement.dataset.value = '';
          formElem.removeAttribute('style');
        }
      }

      checkValue();
    });
    formElem.addEventListener('mousemove', function (e) {
      var xStart = formUtil.offsetLeft + formClear.offsetLeft;
      var yStart = formUtil.offsetTop + formClear.offsetTop;
      var xEnd = xStart + formClear.offsetWidth;
      var yEnd = yStart + formClear.offsetHeight;

      if (formElem.classList.contains('typed')) {
        if (e.offsetX >= xStart && e.offsetX <= xEnd && e.offsetY >= yStart && e.offsetY <= yEnd) {
          formElem.style.cursor = 'pointer';
        } else {
          formElem.style.cursor = null;
        }

        ;
      }
    });

    if (formElem.readOnly == true) {}
  });
}

;
formFieldset('.form.textfield'); // form textarea util setup

function formTextarea(selector) {
  var forms = document.querySelectorAll(selector);
  Array.prototype.forEach.call(forms, function (form) {
    var formElem = form.querySelector('.form-elem');
    if (!formElem) return;
    var formUtil = form.querySelector('.form-util');
    if (!formUtil) return;
    formElem.style.paddingBottom = formUtil.offsetHeight + 'px';
  });
}

; // formTextarea('.form.textarea');

var fromResizeTag = function fromResizeTag(elem) {
  elem.parentNode.setAttribute('data-bui-form-value', elem.value);
  elem.value.length > 0 ? elem.parentNode.classList.add('typed') : elem.parentNode.classList.remove('typed');
}; // formAddFile


var formAddFile = function formAddFile(inputEl) {
  var curFiles = inputEl.files;

  if (curFiles.length === 0) {
    inputEl.parentElement.classList.remove('typed');
    inputEl.parentElement.setAttribute('data-bui-placeholder', inputEl.getAttribute('title'));
    inputEl.parentElement.removeAttribute('style');
    inputEl.parentElement.removeAttribute('data-bui-file-type');
    inputEl.focus();
  } else {
    inputEl.parentElement.setAttribute('data-bui-file-type', curFiles[0].type.split('/')[0]);
    inputEl.parentElement.classList.add('typed');
    inputEl.parentElement.setAttribute('data-bui-placeholder', inputEl.files[0].name);
    inputEl.focus();
  }

  inputEl.parentElement.querySelector('.form-clear').addEventListener('click', function () {
    inputEl.value = null;
    inputEl.parentElement.classList.remove('typed');
    inputEl.parentElement.setAttribute('data-bui-placeholder', inputEl.getAttribute('title'));
    inputEl.parentElement.removeAttribute('style');
    inputEl.parentElement.removeAttribute('data-bui-file-type');
    inputEl.focus();
  });
}; // 파일 업로더


var fileUploader = function fileUploader(selector) {
  var fileList = selector.files;

  if (fileList.length === 0) {
    selector.parentElement.classList.remove('typed');
    selector.parentElement.setAttribute('data-bui-file-type', 'none');
    selector.parentElement.removeAttribute('style');
    selector.parentElement.removeAttribute('title');
  } else {
    selector.parentElement.setAttribute('data-bui-file-type', fileList[0].type.split('/')[0]);
    selector.parentElement.classList.add('typed');

    if (fileList[0].type.split('/')[0] === 'image') {
      selector.parentElement.setAttribute('style', 'background-image: url(' + URL.createObjectURL(fileList[0]) + ')');
    } else {
      selector.parentElement.removeAttribute('style');
      selector.parentElement.removeAttribute('title');
    }
  }
}; // 로컬 네비게이션


function localNavigations(selector) {
  var naviItems = document.querySelectorAll(selector);
  if (!naviItems) return;
  Array.prototype.forEach.call(naviItems, function (naviItem) {
    naviItem.addEventListener('focusin', function () {
      naviItem.classList.add('focus-within');
    });
    naviItem.addEventListener('focusout', function () {
      setTimeout(function () {
        naviItem.querySelector('*:focus') != null ? naviItem.classList.add('focus-within') : naviItem.classList.remove('focus-within');
      }, 1);
    });
  });
}

localNavigations('.local-navi .navi-item'); // 검색 필드

function dataFinder(selector) {
  var datafinder = document.querySelector(selector);
  if (!datafinder) return;
  var dataForm = datafinder.querySelector('.form-elem'); // focus event

  datafinder.addEventListener('focusin', function () {
    datafinder.classList.add('focus-within');
  });
  datafinder.addEventListener('focusout', function () {
    setTimeout(function () {
      datafinder.querySelector('*:focus') != null ? datafinder.classList.add('focus-within') : datafinder.classList.remove('focus-within');
    }, 1);
  }); // input event

  dataForm.value.length > 0 ? datafinder.classList.add('typed') : datafinder.classList.remove('typed');
  dataForm.addEventListener('input', function () {
    dataForm.value.length > 0 ? datafinder.classList.add('typed') : datafinder.classList.remove('typed');
  });
  dataForm.addEventListener('click', function () {
    dataForm.value.length > 0 ? datafinder.classList.add('typed') : datafinder.classList.remove('typed');
  });
}

dataFinder('#brandSearchForm');
dataFinder('#unifiedSearch'); // 기간 설정 서식

if (Detectizr.browser.name != 'ie') {
  // datepicker options setup
  Datepicker.locales.ko = {
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    daysShort: ["일", "월", "화", "수", "목", "금", "토"],
    daysMin: ["일", "월", "화", "수", "목", "금", "토"],
    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    today: "오늘",
    clear: "삭제",
    format: "yyyy-mm-dd",
    titleFormat: "y년 mm월",
    weekStart: 0
  };
  var datepickers = document.querySelectorAll('.datepicker .form-elem:not(:read-only)');
  Array.prototype.forEach.call(datepickers, function (datepickerSelector) {
    // datepicker
    var datepicker = new Datepicker(datepickerSelector, {
      language: 'ko',
      format: 'yyyy-mm-dd',
      prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false"><title>전월</title><path d="M14.4,6.2c0.3-0.3,0.7-0.3,0.9,0c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1l-5,4.9l5,4.9c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1c-0.2,0.2-0.6,0.2-0.8,0.1l-0.1-0.1L8.5,12C8.5,12,14.4,6.2,14.4,6.2z"></path></svg>',
      nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false"><title>차월</title><path d="M9.6,17.8c-0.3,0.3-0.7,0.3-0.9,0c-0.2-0.2-0.3-0.6-0.1-0.8l0.1-0.1l5-4.9l-5-4.9C8.5,6.9,8.4,6.5,8.6,6.3l0.1-0.1C8.9,6,9.3,5.9,9.5,6.1l0.1,0.1l5.9,5.8C15.5,12,9.6,17.8,9.6,17.8z"></path></svg>',
      weekStart: 1,
      autohide: true,
      todayHighlight: true,
      orientation: 'bottom auto'
    });
  }); // rangepicker

  var dateRangePickers = document.querySelectorAll('.daterangepicker');
  Array.prototype.forEach.call(dateRangePickers, function (elem) {
    var dateRangePicker = new DateRangePicker(elem, {
      language: 'ko',
      format: 'yyyy-mm-dd',
      prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false"><title>전월</title><path d="M14.4,6.2c0.3-0.3,0.7-0.3,0.9,0c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1l-5,4.9l5,4.9c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1c-0.2,0.2-0.6,0.2-0.8,0.1l-0.1-0.1L8.5,12C8.5,12,14.4,6.2,14.4,6.2z"></path></svg>',
      nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false"><title>차월</title><path d="M9.6,17.8c-0.3,0.3-0.7,0.3-0.9,0c-0.2-0.2-0.3-0.6-0.1-0.8l0.1-0.1l5-4.9l-5-4.9C8.5,6.9,8.4,6.5,8.6,6.3l0.1-0.1C8.9,6,9.3,5.9,9.5,6.1l0.1,0.1l5.9,5.8C15.5,12,9.6,17.8,9.6,17.8z"></path></svg>',
      weekStart: 1,
      autohide: true,
      todayHighlight: true,
      orientation: 'bottom auto'
    });
  });
} // 항목 스크랩


var itemScrap = function itemScrap(elem) {
  var title = elem.querySelector('title');
  var path = elem.querySelector('path');

  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
    title.textContent = '스크랩 추가';
    path.setAttribute('d', 'M18,3H6C5.4,3,5,3.4,5,4v17l7-4l7,4V4C19,3.4,18.6,3,18,3z M17.8,18.9L12,15.6l-5.8,3.3V4.2h11.6V18.9z');
  } else {
    elem.classList.add('checked');
    title.textContent = '스크랩 삭제';
    path.setAttribute('d', 'M19,4v17l-7-4l-7,4V4c0-0.6,0.4-1,1-1h12C18.6,3,19,3.4,19,4z');
  }
}; // 상품 스크랩


var goodsScrap = function goodsScrap(elem) {
  var title = elem.querySelector('title');
  var path = elem.querySelector('path');

  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
    title.textContent = '스크랩 추가';
    path.setAttribute('d', 'M18,3H6C5.4,3,5,3.4,5,4v17l7-4l7,4V4C19,3.4,18.6,3,18,3z M17,17.6l-5-2.9l-5,2.9V5h10V17.6z');
  } else {
    elem.classList.add('checked');
    title.textContent = '스크랩 삭제';
    path.setAttribute('d', 'M19,4v17l-7-4l-7,4V4c0-0.6,0.4-1,1-1h12C18.6,3,19,3.4,19,4z');
  }
}; // 컬러칩 스크랩


var colorScrap = function colorScrap(elem) {
  var title = elem.querySelector('title');
  var path = elem.querySelector('path');

  if (elem.classList.contains('checked')) {
    elem.classList.remove('checked');
    title.textContent = '스크랩 추가';
    path.setAttribute('d', 'M18,3H6C5.4,3,5,3.4,5,4v17l7-4l7,4V4C19,3.4,18.6,3,18,3z M17,17.6l-5-2.9l-5,2.9V5h10V17.6z');
  } else {
    elem.classList.add('checked');
    title.textContent = '스크랩 삭제';
    path.setAttribute('d', 'M19,4v17l-7-4l-7,4V4c0-0.6,0.4-1,1-1h12C18.6,3,19,3.4,19,4z');
  }
};

var contentNavigations = new Swiper('#contentNavigations', {
  simulateTouch: false,
  slidesPerView: 8,
  spaceBetween: 32,
  slidesPerGroup: 8,
  watchOverflow: true,
  navigation: {
    nextEl: '#contentNavigations .swiper-button-next',
    prevEl: '#contentNavigations .swiper-button-prev'
  }
}); // 드롭다운 메뉴

var dropdownStyleA = new buiToggle('.dropdown.style-a [data-bui-toggle="toggle-dropdown"]', {
  reactParent: '.dropdown',
  clickout: true,
  focusout: true,
  onloadCallBack: function onloadCallBack() {
    var target = this;
    var dataName = target.querySelectorAll('.data-name');
    var dataSelected = target.parentElement.querySelector('[data-bui-toggle-button="' + this.id + '"] .dropdown-name');
    Array.prototype.forEach.call(dataName, function (name) {
      name.addEventListener('click', function (event) {
        event.preventDefault();
        dataSelected.innerHTML = this.innerHTML;
        name.parentElement.classList.add('active');
        Array.prototype.forEach.call(getSiblings(name.parentElement), function (siblingsItem) {
          siblingsItem.classList.remove('active');
        });
        dropdownStyleA.toggle(target.id);
      });
    });
  }
}); // 드롭다운 B

var dropdownStyleB = new buiToggle('.dropdown.style-b [data-bui-toggle="toggle-dropdown"]', {
  reactParent: '.dropdown',
  focusout: true
}); // 팝업 레이어

var openPopup = new buiToggle('[data-bui-toggle="openPopup"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>닫기</title><path d="M6,5.1L6,5.1l6,6l5.9-5.9c0.2-0.2,0.6-0.2,0.8,0C19,5.4,19,5.7,18.9,6l-0.1,0.1L12.8,12l5.9,5.9c0.2,0.2,0.2,0.6,0,0.8C18.6,19,18.3,19,18,18.9l-0.1-0.1L12,12.8l-5.9,5.9c-0.2,0.2-0.6,0.2-0.8,0C5,18.6,5,18.3,5.1,18l0.1-0.1l5.9-5.9L5.2,6.1C5,5.8,5,5.4,5.2,5.2C5.4,5,5.7,5,6,5.1z"/></svg>',
  closeButtonClass: 'btn popup-close',
  closeButtonArea: '.popup-local',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-layer-popup',
  focusin: true,
  focusout: true // clickout: true,
  // clickoutTarget: '.popup-page-body',

}); // 팝업 레이어

var notiPopup = new buiToggle('[data-bui-toggle="notiPopup"]', {
  close: true,
  closeButtonText: '닫기',
  closeButtonClass: 'btn popup-close',
  closeButtonArea: '.popup-local-util',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-noti-popup',
  focusin: true,
  focusout: true // clickout: true,
  // clickoutTarget: '.popup-page-body',

}); // Leaderboard

var openLeaderboard = new buiToggle('[data-bui-toggle="openLeaderboard"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>닫기</title><path d="M6,5.1L6,5.1l6,6l5.9-5.9c0.2-0.2,0.6-0.2,0.8,0C19,5.4,19,5.7,18.9,6l-0.1,0.1L12.8,12l5.9,5.9c0.2,0.2,0.2,0.6,0,0.8C18.6,19,18.3,19,18,18.9l-0.1-0.1L12,12.8l-5.9,5.9c-0.2,0.2-0.6,0.2-0.8,0C5,18.6,5,18.3,5.1,18l0.1-0.1l5.9-5.9L5.2,6.1C5,5.8,5,5.4,5.2,5.2C5.4,5,5.7,5,6,5.1z"/></svg>',
  closeButtonClass: 'btn board-close',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-leaderboard"'
}); // 간편재단 툴팁 알람

var openTooltipSimpleCutAlam = new buiToggle('[data-bui-tooltip="simpleCutAlam"]', {
  mode: 'tooltip',
  // event: 'none',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-tooltip'
}); // 툴팁 정보

var openTooltipInfo = new buiToggle('[data-bui-tooltip="openTooltipInfo"]', {
  mode: 'tooltip',
  event: 'hover',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-tooltip'
}); // 툴팁 알람

var openTooltipAlarm = new buiToggle('[data-bui-tooltip="openTooltipAlarm"]', {
  mode: 'tooltip',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-tooltip',
  clickout: true
}); // 툴팁 알람

var openTooltipAlarm = new buiToggle('[data-bui-tooltip="accountData"]', {
  mode: 'tooltip',
  event: 'hover',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-tooltip' // clickout: true,

}); // 섹션 폴드

var foldSection = new buiFold('.section[data-bui-fold="foldItem"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>',
  buttonAppendTo: '.section-head',
  targetClass: 'bui-fold-target'
}); // submit-form 폴드

var foldSubmitForm = new buiFold('.form-item[data-bui-fold="foldItem"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>',
  buttonAppendTo: '.form-head',
  targetClass: 'bui-fold-target'
});
var optionItem = new buiFold('[data-bui-fold="dataDisplayFold"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"></path></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"></path></svg>',
  buttonAppendTo: '.data-area',
  targetClass: 'bui-fold-target'
}); // 스크랩 컬러

var scrapColor = new Swiper('#scrapColor', {
  observer: true,
  observeParents: true,
  simulateTouch: false,
  slidesPerView: 12,
  spaceBetween: 4,
  slidesPerGroup: 12,
  watchOverflow: true,
  navigation: {
    nextEl: '#scrapColor .swiper-button-next',
    prevEl: '#scrapColor .swiper-button-prev'
  }
}); // colorCategory

var colorCategory = new Swiper('#colorCategory', {
  simulateTouch: false,
  slidesPerView: 10,
  spaceBetween: 16,
  slidesPerGroup: 10,
  watchOverflow: true,
  navigation: {
    nextEl: '#colorCategory .swiper-button-next',
    prevEl: '#colorCategory .swiper-button-prev'
  }
}); // 컬러칩

var openColorchip = new buiToggle('[data-bui-toggle="openColorchip"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>닫기</title><path d="M6,5.1L6,5.1l6,6l5.9-5.9c0.2-0.2,0.6-0.2,0.8,0C19,5.4,19,5.7,18.9,6l-0.1,0.1L12.8,12l5.9,5.9c0.2,0.2,0.2,0.6,0,0.8C18.6,19,18.3,19,18,18.9l-0.1-0.1L12,12.8l-5.9,5.9c-0.2,0.2-0.6,0.2-0.8,0C5,18.6,5,18.3,5.1,18l0.1-0.1l5.9-5.9L5.2,6.1C5,5.8,5,5.4,5.2,5.2C5.4,5,5.7,5,6,5.1z"/></svg>',
  closeButtonClass: 'btn popup-close',
  closeButtonArea: '.popup-local',
  reactTarget: 'body',
  reactTargetActiveClass: 'active-layer-popup',
  focusin: true,
  focusout: true,
  activeCallBack: function activeCallBack() {
    document.querySelector(colorCategory.params.el) ? colorCategory.update() : null;
    document.querySelector(scrapColor.params.el) ? scrapColor.update() : null;
  }
}); // 컬러칩 쇼룸

var openColorchipShowroom = new buiToggle('[data-bui-toggle="openColorchipShowroom"]', {
  close: true,
  closeButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false"><title>닫기</title><path d="M20.4,8.1L12,13.4L3.6,8.1L3.5,8.1C3,7.9,2.4,8.1,2.1,8.6C1.9,9.1,2,9.8,2.5,10.1L12,16l9.5-5.9l0.1-0.1c0.4-0.3,0.6-1,0.3-1.5C21.7,8.2,21.3,8,20.9,8C20.8,8,20.6,8,20.4,8.1z"></path></svg>',
  closeButtonClass: 'btn showroom-close',
  // closeButtonArea: '.popup-local',
  reactTarget: '#paintColorchip',
  reactTargetActiveClass: 'active-showroom',
  focusin: true // focusout: true,

}); // 가공하기

var precisionMachining = new buiFold('[data-bui-fold="precisionMachining"]', {
  activeClass: 'active',
  buttonClass: 'btn fold',
  buttonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>열기</title><path d="M6.2,9.6c-0.3-0.3-0.3-0.7,0-0.9C6.4,8.5,6.8,8.4,7,8.6l0.1,0.1l4.9,5l4.9-5c0.2-0.2,0.6-0.3,0.8-0.1l0.1,0.1C18,8.9,18,9.3,17.9,9.5l-0.1,0.1L12,15.5L6.2,9.6z"/></svg>',
  buttonActiveText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>닫기</title><path d="M17.7,14.4c0.3,0.3,0.3,0.7,0,0.9c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1l-4.9-5l-4.9,5c-0.2,0.2-0.6,0.3-0.8,0.1l-0.1-0.1c-0.2-0.2-0.2-0.6-0.1-0.8l0.1-0.1l5.8-5.9L17.7,14.4z"/></svg>',
  buttonAppendTo: '.goods-area'
}); // 다른 사람들은 이런 상품을 보고 있어요
// var goodsDisplayMedium = new Swiper('#othersViewed', {
// 	simulateTouch: false,
// 	slidesPerView: 5,
// 	spaceBetween: 32,
// 	slidesPerGroup: 5,
// 	watchOverflow: true,
// 	navigation: {
// 		nextEl: '#othersViewed .swiper-button-next',
// 		prevEl: '#othersViewed .swiper-button-prev',
// 	},
// 	pagination: {
// 		el: '#othersViewed .swiper-pagination',
// 		clickable: true,
// 	},
// });

var goodsDisplayMedium = new Swiper('.goods-display.medium.swiper-container', {
  observer: true,
  observeParents: true,
  simulateTouch: false,
  slidesPerView: 5,
  spaceBetween: 32,
  slidesPerGroup: 5,
  watchOverflow: true,
  navigation: {
    nextEl: '.goods-display.medium.swiper-container .swiper-button-next',
    prevEl: '.goods-display.medium.swiper-container .swiper-button-prev'
  },
  pagination: {
    el: '.goods-display.medium.swiper-container .swiper-pagination',
    clickable: true
  }
});
var goodsDisplayLarge = new Swiper('.goods-display.style-a.type-c.large.swiper-container', {
  observer: true,
  observeParents: true,
  simulateTouch: false,
  slidesPerView: 4,
  spaceBetween: 32,
  slidesPerGroup: 4,
  watchOverflow: true,
  navigation: {
    nextEl: '.goods-display.style-a.type-c.large.swiper-container .swiper-button-next',
    prevEl: '.goods-display.style-a.type-c.large.swiper-container .swiper-button-prev'
  },
  pagination: {
    el: '.goods-display.style-a.type-c.large.swiper-container .swiper-pagination',
    clickable: true
  }
});
var postsDisplayLarge = new Swiper('.posts-display.type-c.large.swiper-container', {
  observer: true,
  observeParents: true,
  simulateTouch: false,
  slidesPerView: 4,
  spaceBetween: 32,
  slidesPerGroup: 4,
  watchOverflow: true,
  navigation: {
    nextEl: '.posts-display.type-c.large.swiper-container .swiper-button-next',
    prevEl: '.posts-display.type-c.large.swiper-container .swiper-button-prev'
  }
}); // 프린트

function printElement(selector) {
  var reactTarget = document.querySelector('body');
  var printContents = document.querySelector(selector).innerHTML;
  var printArea = document.createElement('div');
  printArea.classList.add('print-area');
  printArea.innerHTML = printContents;
  reactTarget.appendChild(printArea);
  reactTarget.classList.add('active-print');
  window.print();
  reactTarget.classList.remove('active-print');
  printArea.remove();
} // 쿠폰 다운로드


var donloadCoupon = function donloadCoupon(elem) {
  elem.classList.add('completed');
  elem.disabled = true;
  elem.innerHTML = '<span class="btn-text">다운완료</span>';
};

var scrapStore = new Swiper('.local-body.scrap-store .goods-display.swiper-container', {
  simulateTouch: false,
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 16,
  watchOverflow: true,
  navigation: {
    nextEl: '.local-body.scrap-store .goods-display.swiper-container .swiper-button-next',
    prevEl: '.local-body.scrap-store .goods-display.swiper-container .swiper-button-prev'
  }
}); // 사진 후기

var photoReviewRead = new Swiper('#photoReviewRead .swiper-container', {
  simulateTouch: false,
  loop: true,
  navigation: {
    nextEl: '#photoReviewRead .swiper-button-next',
    prevEl: '#photoReviewRead .swiper-button-prev'
  },
  pagination: {
    el: '#photoReviewRead .swiper-pagination',
    type: 'fraction'
  }
}); // 가격 설정

var buiFormRange = function buiFormRange(selector) {
  var settings = {
    rangeMinimum: '.range-min',
    rangeMaximum: '.range-max',
    enteredTrack: 'entered-track',
    enteredValue: 'entered-value',
    thumbMinimum: 'thumb-minimum',
    thumbMaximum: 'thumb-maximum',
    outputMinimum: '#minimumPrice',
    outputMaximum: '#maximumPrice'
  };
  var formRanges = document.querySelectorAll(selector);
  Array.prototype.forEach.call(formRanges, function (formRange) {
    var rangeMinimum = formRange.querySelector(settings.rangeMinimum);
    var rangeMaximum = formRange.querySelector(settings.rangeMaximum);
    var outputMinimum = document.querySelector(settings.outputMinimum);
    var outputMaximum = document.querySelector(settings.outputMaximum);

    if (formRange.querySelector('.form-range-slider') === null) {
      var formRangeSlider = document.createElement('span');
      var enteredValue = document.createElement('span');
      var enteredTrack = document.createElement('span');
      var thumbMinimum = document.createElement('span');
      var thumbMaximum = document.createElement('span');
      formRangeSlider.className = 'form-range-slider';
      enteredValue.className = settings.enteredValue;
      enteredTrack.className = settings.enteredTrack;
      thumbMinimum.className = settings.thumbMinimum;
      thumbMaximum.className = settings.thumbMaximum;
      formRangeSlider.appendChild(enteredTrack);
      formRangeSlider.appendChild(enteredValue);
      formRangeSlider.appendChild(thumbMinimum);
      formRangeSlider.appendChild(thumbMaximum);
      formRange.appendChild(formRangeSlider);
    }

    function setMinimumValue() {
      var min = parseInt(rangeMinimum.min);
      var max = parseInt(rangeMinimum.max);
      rangeMinimum.value = Math.min(parseInt(rangeMinimum.value), parseInt(rangeMaximum.value) - 1);
      var percent = (rangeMinimum.value - min) / (max - min) * 100;
      thumbMinimum.style.left = percent + '%';
      enteredValue.style.left = percent + '%';
      outputMinimum.textContent = numberWithCommas(rangeMinimum.value);
    }

    setMinimumValue();

    function setMaximumValue() {
      var min = parseInt(rangeMaximum.min);
      var max = parseInt(rangeMaximum.max);
      rangeMaximum.value = Math.max(parseInt(rangeMaximum.value), parseInt(rangeMinimum.value) + 1);
      var percent = (rangeMaximum.value - min) / (max - min) * 100;
      thumbMaximum.style.right = 100 - percent + '%';
      enteredValue.style.right = 100 - percent + '%';
      outputMaximum.textContent = numberWithCommas(rangeMaximum.value);
    }

    setMaximumValue();
    rangeMinimum.addEventListener('input', setMinimumValue);
    rangeMaximum.addEventListener('input', setMaximumValue);
    rangeMinimum.addEventListener('change', setMinimumValue);
    rangeMaximum.addEventListener('change', setMaximumValue);
    rangeMinimum.addEventListener('click', function (event) {
      event.target.style.zIndex = '3';
      rangeMaximum.style.zIndex = '2';
    });
    rangeMaximum.addEventListener('click', function (event) {
      event.target.style.zIndex = '3';
      rangeMinimum.style.zIndex = '2';
    });
  });
};

buiFormRange('.form.range'); // scrollNavigations

function scrollNavigations(navigations, margin) {
  var tabs = document.querySelector(navigations);
  var items = tabs.querySelectorAll('a');
  var scrollEvent = false;
  Array.prototype.forEach.call(items, function (item, index) {
    var target = item.getAttribute('href');
    var targetGap = margin != null ? margin : parseInt(window.getComputedStyle(document.querySelector(target)).getPropertyValue('margin-top'));
    item.addEventListener('click', function (e) {
      e.preventDefault();
      scrollEvent = false;
      gsap.to(window, {
        duration: 0.4,
        scrollTo: {
          y: target,
          offsetY: tabs.clientHeight + targetGap
        }
      });
      setTimeout(function () {
        item.parentElement.classList.add('current');
        Array.prototype.forEach.call(getSiblings(item.parentElement), function (siblingsItem) {
          siblingsItem.classList.remove('current');
        });
      }, 450);
    });
  });
  document.addEventListener('scroll', function () {
    if (scrollEvent === true) {
      Array.prototype.forEach.call(items, function (item, index) {
        var section = document.querySelector(item.hash);

        if (section.getBoundingClientRect().top <= tabs.offsetHeight && section.getBoundingClientRect().top + section.offsetHeight > tabs.offsetHeight) {
          item.parentElement.classList.add('current');
          Array.prototype.forEach.call(getSiblings(item.parentElement), function (siblingsItem) {
            siblingsItem.classList.remove('current');
          });
        }
      });
    }
  });
  document.addEventListener('wheel', function () {
    scrollEvent = true;
  });
  document.addEventListener('keydown', function () {
    scrollEvent = true;
  });
} // 상품상세 > 리뷰 목록 > 좋아요


var itemLikeit = function itemLikeit(elem) {
  if (elem.classList.contains('normal-04')) {
    elem.classList.remove('normal-04');
    elem.classList.add('accent-01');
  } else {
    elem.classList.add('normal-04');
    elem.classList.remove('accent-01');
  }
}; // 주문 > 결제금액


if (document.querySelector('#totalPayment')) {
  ScrollTrigger.create({
    trigger: '.content-body',
    start: 'top 192',
    end: function end() {
      return "bottom top+=".concat(document.querySelector('#totalPayment').offsetHeight + 192);
    },
    toggleClass: 'active',
    onLeave: function onLeave(self) {
      document.querySelector('.content-body').classList.add('on-leave');
    },
    onEnterBack: function onEnterBack(self) {
      document.querySelector('.content-body').classList.remove('on-leave');
    } // markers: true

  });
}