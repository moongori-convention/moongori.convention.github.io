"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

// Polyfill closest
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
} // Polyfill entries


if (!Object.entries) {
  Object.entries = function (obj) {
    return Object.keys(obj).reduce(function (arr, key) {
      arr.push([key, obj[key]]);
      return arr;
    }, []);
  };
}

var getSiblings = function getSiblings(e) {
  // for collecting siblings
  var siblings = []; // if no parent, return no sibling

  if (!e.parentNode) {
    return siblings;
  } // first child of the parent node


  var sibling = e.parentNode.firstChild; // collecting siblings

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

function numberWithCommas(num) {
  var len, point, str;
  num = num + "";
  point = num.length % 3;
  len = num.length;
  str = num.substring(0, point);

  while (point < len) {
    if (str != "") str += ",";
    str += num.substring(point, point + 3);
    point += 3;
  }

  return str;
} // buiToggle


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiToggle = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; //
  // Variables
  //

  var defaults = {
    // general
    mode: 'normal',
    event: 'click',
    active: false,
    activeClass: 'active',
    disabled: false,
    disabledClass: null,
    focusin: false,
    focusout: false,
    clickout: false,
    clickoutTarget: null,
    // target
    target: null,
    targetClass: 'bui-toggle-target',
    targetActiveClass: 'active',
    targetAttribute: 'data-toggle-target',
    targetObject: null,
    // close
    close: false,
    closeButton: 'button',
    closeButtonClass: 'close',
    closeButtonText: 'close',
    closeButtonArea: null,
    // react target
    reactTarget: null,
    reactTargetClass: null,
    reactTargetActiveClass: 'active',
    // react Parent
    reactParent: null,
    reactParentClass: null,
    reactParentActiveClass: 'active',
    tooltipPosition: 'fixed',
    tooltipContainer: '#page',
    tooltipArrow: false,
    tooltipArrowClass: 'tooltip-arrow',

    /* callback */
    onloadCallBack: function onloadCallBack() {
      return false;
    },
    eventCallBack: function eventCallBack() {
      return false;
    },
    activeCallBack: function activeCallBack() {
      return false;
    },
    inactiveCallBack: function inactiveCallBack() {
      return false;
    }
  }; //
  // Methods
  //

  /**
   * Merge two or more objects together.
   * @param   {Object}   objects  The objects to merge together
   * @returns {Object}            Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };

  var active = function active(settings, toggleTarget, toggleButton) {
    toggleTarget.classList.add(settings.activeClass);
    settings.reactTarget != null ? document.querySelector(settings.reactTarget).classList.add(settings.reactTargetActiveClass) : null;
    settings.reactParent != null ? toggleTarget.closest(settings.reactParent).classList.add(settings.reactParentActiveClass) : null;

    if (settings.focusin === true) {
      focusin(toggleTarget);
    }

    var activeButtons = document.querySelectorAll(toggleButton);
    Array.prototype.forEach.call(activeButtons, function (activeButton) {
      activeButton.classList.add(settings.activeClass);
    });
    settings.activeCallBack.call(toggleTarget, toggleButton);
  };

  var inactive = function inactive(settings, toggleTarget, toggleButton) {
    toggleTarget.classList.remove(settings.activeClass);
    settings.reactTarget != null ? document.querySelector(settings.reactTarget).classList.remove(settings.reactTargetActiveClass) : null;
    settings.reactParent != null ? toggleTarget.closest(settings.reactParent).classList.remove(settings.reactParentActiveClass) : null;
    var inactiveButtons = document.querySelectorAll(toggleButton);
    Array.prototype.forEach.call(inactiveButtons, function (inactiveButton) {
      inactiveButton.classList.remove(settings.activeClass);
    });
    settings.inactiveCallBack.call(toggleTarget, toggleButton);
  };

  var createInactiveButton = function createInactiveButton(settings, name, toggleTarget, toggleButton) {
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.dataset.buiToggleCancel = name;
    button.className = settings.closeButtonClass;
    button.innerHTML = settings.closeButtonText;
    settings.closeButtonArea === null ? toggleTarget.appendChild(button) : toggleTarget.querySelector(settings.closeButtonArea).appendChild(button);
    button.addEventListener('click', function (event) {
      event.preventDefault();
      inactive(settings, toggleTarget, toggleButton);
    }, false);
  };

  var clickout = function clickout(settings, toggleTarget, toggleButton) {
    var clickoutTarget = settings.clickoutTarget != null ? toggleTarget.querySelector(settings.clickoutTarget) : toggleTarget;
    document.addEventListener('mouseup', function (event) {
      if (toggleTarget.classList.contains(settings.activeClass) === true) {
        if (!clickoutTarget.contains(event.target)) {
          inactive(settings, toggleTarget, toggleButton);
        }
      }
    });
  };

  var focusin = function focusin(toggleTarget) {
    toggleTarget.setAttribute('tabindex', '-1');
    toggleTarget.focus();
  };

  var focusout = function focusout(settings, toggleTarget, toggleButton) {
    var activeElement = toggleTarget.querySelectorAll('a, input, button, select, textarea');
    Array.prototype.forEach.call(activeElement, function (value, index) {
      value.addEventListener('keydown', function (event) {
        if (event.keyCode === 9) {
          if (index === activeElement.length - 1) {
            inactive(settings, toggleTarget, toggleButton);
          }
        }
      }, false);
    });
  };

  function tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow) {
    var toggleButton = document.querySelector("[data-bui-tooltip-button=" + toggleTarget.id + "]");
    var tooltipContainer = document.querySelector(settings.tooltipContainer);
    var buttonRightPosition, buttonLeftPosition;
    toggleTarget.style.position = settings.tooltipPosition;

    if (settings.tooltipPosition === 'fixed') {
      buttonLeftPosition = toggleButton.getBoundingClientRect().left + toggleButton.getBoundingClientRect().width / 2;
      buttonRightPosition = tooltipContainer.getBoundingClientRect().width - (toggleButton.getBoundingClientRect().left + toggleButton.getBoundingClientRect().width / 2);
      toggleTarget.style.top = toggleButton.getBoundingClientRect().top - toggleTarget.getBoundingClientRect().height + 'px'; // console.log('d');
    } else {
      buttonLeftPosition = toggleButton.offsetLeft + toggleButton.getBoundingClientRect().width / 2;
      buttonRightPosition = tooltipContainer.getBoundingClientRect().width - (toggleButton.offsetLeft + toggleButton.getBoundingClientRect().width / 2);
    }

    if (tooltipContainer.getBoundingClientRect().width / 2 >= buttonLeftPosition) {
      if (toggleTarget.getBoundingClientRect().width / 2 > buttonLeftPosition) {
        toggleTarget.style.right = 'auto';
        toggleTarget.style.left = '0';

        if (settings.tooltipArrow === true) {
          tooltipArrow.style.right = 'auto';
          tooltipArrow.style.left = buttonLeftPosition - tooltipArrow.getBoundingClientRect().width / 2 + 'px';
        }
      } else {
        toggleTarget.style.left = buttonLeftPosition - toggleTarget.getBoundingClientRect().width / 2 + 'px';

        if (settings.tooltipArrow === true) {
          tooltipArrow.style.left = toggleTarget.getBoundingClientRect().width / 2 - tooltipArrow.getBoundingClientRect().width / 2 + 'px';
        }
      }
    } else {
      if (toggleTarget.getBoundingClientRect().width / 2 > buttonRightPosition) {
        toggleTarget.style.left = 'auto';
        toggleTarget.style.right = '0';

        if (settings.tooltipArrow === true) {
          tooltipArrow.style.left = 'auto';
          tooltipArrow.style.right = buttonRightPosition - tooltipArrow.getBoundingClientRect().width / 2 + 'px';
        }
      } else {
        toggleTarget.style.right = buttonRightPosition - toggleTarget.getBoundingClientRect().width / 2 + 'px';

        if (settings.tooltipArrow === true) {
          tooltipArrow.style.right = toggleTarget.getBoundingClientRect().width / 2 - tooltipArrow.getBoundingClientRect().width / 2 + 'px';
        }
      }
    }
  }

  ;

  function tooltip(settings, toggleTarget, toggleButton) {
    var tooltipArrow;

    if (settings.tooltipArrow === true) {
      if (toggleTarget.querySelector('.' + settings.tooltipArrowClass)) {
        tooltipArrow = toggleTarget.querySelector('.' + settings.tooltipArrowClass);
      } else {
        tooltipArrow = document.createElement('span');
        tooltipArrow.className = settings.tooltipArrowClass;
        toggleTarget.append(tooltipArrow);
      }
    }

    tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow);
    window.addEventListener('resize', function () {
      tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow);
    }, false);
    window.addEventListener('scroll', function () {
      tooltipActions(settings, toggleTarget, toggleButton, tooltipArrow);
    }, false);
  }
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {});
    var publicAPIs = {};
    var settings;
    var toggleItems; // var active = settings.active;

    publicAPIs.itemEntry = [];
    /**
     * BuiToggle 관련 함수를 적용할 객체 생성
     * 
     * @method options
     * @param {String} object		실제로 바인딩이 될 엘리먼트 객체
     * @param {String} objectAct	액션 종류
     * @param {String} objectEvt	적요할 이벤트
     * @param {String} objectOpt	기타 옵션
     */

    publicAPIs.createProperties = function (name, target, button) {
      this.name = name;
      this.target = target;
      this.button = button; // this.disabled = disabled;
    }; // publicAPIs.toggle = function(toggleName) {
    // 	publicAPIs.itemEntry[toggleName].target.classList.contains(settings.activeClass) ? inactive(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button) : active(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
    // };


    publicAPIs.active = function (toggleName) {
      active(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);

      if (settings.mode === 'tooltip') {
        tooltip(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
      }

      ;
    };

    publicAPIs.inactive = function (toggleName) {
      inactive(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
    };

    publicAPIs.toggle = function (toggleName) {
      if (publicAPIs.itemEntry[toggleName].target.classList.contains(settings.activeClass)) {
        inactive(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button); // settings.activeCallBack.call(publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
        // settings.inactiveCallBack.call(publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
      } else {
        active(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
      }
    };
    /**
     * Setup the DOM with the proper attributes
     */


    publicAPIs.getProperties = function (selector) {
      var name = selector;
      var target = document.getElementById(selector);
      var button = settings.mode === 'tooltip' ? '[data-bui-tooltip-button="' + selector + '"]' : button = '[data-bui-toggle-button="' + selector + '"]'; // var disabled = false;
      // var disabled = target.dataset.buiToggleDisabled ? true : false;

      publicAPIs.itemEntry[selector] = new publicAPIs.createProperties(name, target, button);
    };

    publicAPIs.appendToggle = function (item) {
      publicAPIs.getProperties(item);
      publicAPIs.actions(item);
    }; // publicAPIs.activeCallback = function(elem, object) {
    // 	elem = publicAPIs.itemEntry[elem].target;
    // 	return object;
    // };
    // publicAPIs.inactiveCallback = function() {return false;}


    publicAPIs.actions = function (item) {
      // console.log(publicAPIs.itemEntry[item]);
      var toggleButtons = document.querySelectorAll(publicAPIs.itemEntry[item].button);
      if (!toggleButtons) return;

      if (settings.event != 'none') {
        Array.prototype.forEach.call(toggleButtons, function (toggleButton) {
          toggleButton.addEventListener('click', function (event) {
            event.preventDefault();
            !publicAPIs.itemEntry[item].target.classList.contains('disabled') ? publicAPIs.toggle(publicAPIs.itemEntry[item].name) : null;
          }, false);
        });
      }

      var toggleInactive = publicAPIs.itemEntry[item].target.querySelectorAll('[data-bui-toggle-inactive]');
      if (!toggleInactive) return;
      Array.prototype.forEach.call(toggleInactive, function (inactiveButton) {
        inactiveButton.addEventListener('click', function (event) {
          event.preventDefault();
          !publicAPIs.itemEntry[item].target.classList.contains('disabled') ? publicAPIs.toggle(publicAPIs.itemEntry[item].name) : null;
        }, false);
      });
      settings.close === true ? createInactiveButton(settings, publicAPIs.itemEntry[item].name, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button) : null;
      settings.clickout === true ? clickout(settings, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button) : null;
      settings.focusout === true ? focusout(settings, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button) : null;

      if (settings.mode === 'tooltip') {
        tooltip(settings, publicAPIs.itemEntry[item].target, publicAPIs.itemEntry[item].button);
      }

      ; // settings.targetObject = publicAPIs.itemEntry[item].target;

      settings.onloadCallBack.call(publicAPIs.itemEntry[item].target);
    };

    publicAPIs.setup = function () {
      var findItems = document.querySelectorAll(selector);
      if (!findItems) return;
      Array.prototype.forEach.call(findItems, function (findItem) {
        publicAPIs.getProperties(findItem.id);
      });
    };

    publicAPIs.playActions = function () {
      for (var _i = 0, _Object$entries = Object.entries(publicAPIs.itemEntry); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        publicAPIs.actions(key);
      }
    };

    ;
    /**
     * Handle click events
     */

    var eventHandler = function eventHandler(event) {// console.log('click');
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
      publicAPIs.playActions();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
/**
 * buiTab
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiTab = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; // Variables

  var defaults = {
    // general
    mode: 'normal',
    active: false,
    activeClass: 'current',
    initial: 0,
    // tab
    tabItem: '.tab-item',
    tabName: '.tab-name',
    buttonActiveText: null,
    buttonAppendTo: null,
    tabItemReact: false,
    // target
    target: null,
    targetClass: 'bui-tab-target',
    targetActiveClass: 'active',
    container: '.tab-content'
  };
  /**
   * Merge two or more objects together.
   * @param	{Object}	objects		The objects to merge together
   * @returns	{Object}				Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };

  var tabToggle = function tabToggle(settings, tabs) {
    tabs.item.classList.add(settings.activeClass);
    Array.prototype.forEach.call(getSiblings(tabs.item), function (siblingsItem) {
      siblingsItem.classList.remove(settings.activeClass);
    });

    if (tabs.target != null) {
      tabs.target.classList.add(settings.targetActiveClass);
      Array.prototype.forEach.call(getSiblings(tabs.target), function (siblingsItem) {
        siblingsItem.classList.remove(settings.targetActiveClass);
      });
    }

    if (settings.tabItemReact != false) {
      var items = tabs.item;
      var left = items.offsetLeft + items.clientWidth + 16;
      var move = left - window.outerWidth;

      if (window.outerWidth < left) {
        items.parentElement.parentElement.scrollTo(move, 0);
      } else {
        items.parentElement.parentElement.scrollTo(0, 0);
      }
    }
  };

  var tabItemReact = function tabItemReact(settings, selectItems) {
    if (settings.tabItemReact != false) {
      Array.prototype.forEach.call(selectItems, function (list, index) {
        var items = list.querySelector('.' + settings.activeClass);
        var left = items.offsetLeft + items.clientWidth + 16;
        var move = left - window.outerWidth;
        items.parentElement.parentElement.style.scrollBehavior = 'smooth';

        if (window.outerWidth < left) {
          items.parentElement.parentElement.scrollTo(move, 0);
        } else {
          items.parentElement.parentElement.scrollTo(0, 0);
        }
      });
    }
  };
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {}); // Variables

    var publicAPIs = {};
    var settings;
    publicAPIs.itemEntry = [];
    /**
     * BuiToggle 관련 함수를 적용할 객체 생성
     * 
     * @method options
     * @param {String} object		실제로 바인딩이 될 엘리먼트 객체
     * @param {String} objectAct	액션 종류
     */

    publicAPIs.createProperties = function (item, name, target) {
      this.item = item;
      this.name = name;
      this.target = target;
    };
    /**
     * Setup the DOM with the proper attributes
     */


    publicAPIs.setup = function () {
      // Variables
      var selectItems = document.querySelectorAll(selector);
      if (!selectItems) return;
      Array.prototype.forEach.call(selectItems, function (list, index) {
        var listEntry = [];
        var initial = settings.initial;
        var items = list.querySelectorAll(settings.tabItem);
        Array.prototype.forEach.call(items, function (item, index) {
          var name = item.querySelector(settings.tabName);
          var target = document.querySelector(name.getAttribute('href'));
          listEntry[index] = new publicAPIs.createProperties(item, name, target);
          item.classList.contains(settings.activeClass) ? initial = index : null;
        }); // actions

        Array.prototype.forEach.call(listEntry, function (tabs, index) {
          tabs.target != null ? tabs.target.classList.add(settings.targetClass) : null;
          initial === index ? tabToggle(settings, tabs) : null;
          tabs.name.addEventListener('click', function (e) {
            settings.mode != 'null' ? e.preventDefault() : null; // after click

            if (settings.mode === 'scroll') {
              tabs.target.closest(settings.container).scrollTo({
                top: tabs.target.offsetTop,
                behavior: 'smooth'
              });
            } else {
              tabToggle(settings, tabs);
            }
          }); // after scroll

          if (settings.mode === 'scroll') {
            // closest 으로 변경
            tabs.target.closest(settings.container).addEventListener('scroll', function (event) {
              if (this.scrollTop + 48 >= tabs.target.offsetTop && this.scrollTop + 48 < tabs.target.offsetTop + tabs.target.offsetHeight) {
                tabToggle(settings, tabs);
              }
            });
          }
        });
      });
      tabItemReact(settings, selectItems);
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
/**
 * buiTab 삭제예정
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiTabOld = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; // Variables

  var defaults = {
    // general
    mode: 'normal',
    active: false,
    activeClass: 'current',
    initial: 0,
    // tab
    tabItem: '.tab-item',
    tabName: '.tab-name',
    buttonActiveText: null,
    buttonAppendTo: null,
    // target
    target: null,
    targetClass: 'bui-tab-target',
    targetActiveClass: 'active',
    container: '.tab-content'
  };
  /**
   * Merge two or more objects together.
   * @param	{Object}	objects		The objects to merge together
   * @returns	{Object}				Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };

  var tabToggle = function tabToggle(settings, tabs) {
    tabs.item.classList.add(settings.activeClass);
    Array.prototype.forEach.call(getSiblings(tabs.item), function (siblingsItem) {
      siblingsItem.classList.remove(settings.activeClass);
    });

    if (tabs.target != null) {
      tabs.target.classList.add(settings.targetActiveClass);
      Array.prototype.forEach.call(getSiblings(tabs.target), function (siblingsItem) {
        siblingsItem.classList.remove(settings.targetActiveClass);
      });
    }
  };
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {}); // Variables

    var publicAPIs = {};
    var settings;
    publicAPIs.itemEntry = [];
    /**
     * BuiToggle 관련 함수를 적용할 객체 생성
     * 
     * @method options
     * @param {String} object		실제로 바인딩이 될 엘리먼트 객체
     * @param {String} objectAct	액션 종류
     */

    publicAPIs.createProperties = function (item, name, target) {
      this.item = item;
      this.name = name;
      this.target = target;
    };
    /**
     * Setup the DOM with the proper attributes
     */


    publicAPIs.setup = function () {
      // Variables
      var selectItems = document.querySelectorAll(selector);
      if (!selectItems) return;
      Array.prototype.forEach.call(selectItems, function (list, index) {
        var listEntry = [];
        var initial = settings.initial;
        var items = list.querySelectorAll(settings.tabItem);
        Array.prototype.forEach.call(items, function (item, index) {
          var name = item.querySelector(settings.tabName);
          var target = document.querySelector(name.getAttribute('href'));
          listEntry[index] = new publicAPIs.createProperties(item, name, target);
          item.classList.contains(settings.activeClass) ? initial = index : null;
        }); // console.log(listEntry);
        // listEntry[0].target.style.border = "1px solid red";
        // publicAPIs.itemEntry[index].push(listEntry[index]);
        // console.log(publicAPIs.itemEntry);
        // actions

        Array.prototype.forEach.call(listEntry, function (tabs, index) {
          tabs.target != null ? tabs.target.classList.add(settings.targetClass) : null;
          initial === index ? tabToggle(settings, tabs) : null;
          tabs.name.addEventListener('click', function (e) {
            settings.mode != 'null' ? e.preventDefault() : null; // after click

            if (settings.mode === 'scroll') {
              /* [moongori] 변경부분  BEGIN */
              document.querySelector(selector).nextElementSibling.scrollTo({
                top: tabs.target.offsetTop - 48,
                behavior: 'smooth'
              }); //              document.querySelector(settings.container).scrollTo({
              //                top: tabs.target.offsetTop - 48,
              //                behavior: 'smooth'
              //              });

              /* [moongori] 변경부분  END */
            } else {
              tabToggle(settings, tabs);
            }
          }); // after scroll

          if (settings.mode === 'scroll') {
            document.querySelector(settings.container).addEventListener('scroll', function (event) {
              if (this.scrollTop + 48 >= tabs.target.offsetTop && this.scrollTop + 48 < tabs.target.offsetTop + tabs.target.offsetHeight) {
                tabToggle(settings, tabs);
              }
            });
          }
        });
      });
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
/**
 * buiTab 최종버전
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiTab2 = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; // Variables

  var defaults = {
    // general
    mode: 'normal',
    active: false,
    activeClass: 'current',
    initial: 0,
    // tab
    tabItem: '.tab-item',
    tabName: '.tab-name',
    buttonActiveText: null,
    buttonAppendTo: null,
    // target
    target: null,
    targetClass: 'bui-tab-target',
    targetActiveClass: 'active',
    container: '.tab-content'
  };
  /**
   * Merge two or more objects together.
   * @param	{Object}	objects		The objects to merge together
   * @returns	{Object}				Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {}); // Variables

    var publicAPIs = {};
    var settings;
    /**
     * Setup the DOM with the proper attributes
     */

    publicAPIs.setup = function () {
      // Variables
      var selectItems = document.querySelectorAll(selector);
      if (!selectItems) return;

      var toggleTabItem = function toggleTabItem(tabItem, tabTarget) {
        tabItem.classList.add(settings.activeClass);
        tabTarget.classList.add(settings.targetActiveClass);
        var siblingsItems = getSiblings(tabItem);
        Array.prototype.forEach.call(siblingsItems, function (siblingsItem) {
          siblingsItem.classList.remove(settings.activeClass);
          var siblingsTarget = siblingsItem.querySelector(settings.tabName);
          document.querySelector(siblingsTarget.getAttribute('href')).classList.remove(settings.targetActiveClass);
        });
      };

      Array.prototype.forEach.call(selectItems, function (tabList) {
        var tabItems = tabList.querySelectorAll(settings.tabItem);
        Array.prototype.forEach.call(tabItems, function (tabItem, index) {
          var tabName = tabItem.querySelector(settings.tabName);
          var tabTarget = document.querySelector(tabName.getAttribute('href'));
          tabTarget.classList.add(settings.targetClass);
          tabTarget.dataset.buiTabTarget = settings.targetClass;
          tabName.addEventListener('click', function (e) {
            settings.mode != 'null' ? e.preventDefault() : null;
            toggleTabItem(tabItem, tabTarget);

            if (settings.mode === 'scroll') {
              document.querySelector(settings.container).scrollTo({
                top: tabTarget.offsetTop - 48,
                behavior: 'smooth'
              });
            }
          });

          if (settings.mode === 'scroll') {
            document.querySelector(settings.container).addEventListener('scroll', function (event) {
              if (this.scrollTop + 48 >= tabTarget.offsetTop && this.scrollTop + 48 < tabTarget.offsetTop + tabTarget.offsetHeight) {
                toggleTabItem(tabItem, tabTarget);
              }
            });
          }
        });
        var initialItem = tabItems[settings.initial];
        initialItem.classList.add(settings.activeClass);
        document.querySelector(initialItem.querySelector(settings.tabName).getAttribute('href')).classList.add(settings.targetActiveClass);
      });
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
/**
 * buiFold
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiFold = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; // Variables

  var defaults = {
    // general
    active: false,
    activeClass: 'active',
    initial: 0,
    ellipsis: false,
    ellipsisLimit: 2,
    ellipsisField: '',
    ellipsisActiveClass: 'limit',
    // target
    target: null,
    targetClass: 'bui-fold-target',
    targetActiveClass: 'active',
    // close
    button: 'button',
    buttonClass: 'fold',
    buttonActiveClass: 'active',
    buttonText: '열기',
    buttonActiveText: null,
    buttonAppendTo: null,
    // accordion
    accordion: false,

    /* callback */
    onloadCallBack: function onloadCallBack() {
      return false;
    },
    eventCallBack: function eventCallBack() {
      return false;
    },
    activeCallBack: function activeCallBack() {
      return false;
    },
    inactiveCallBack: function inactiveCallBack() {
      return false;
    }
  };
  /**
   * Merge two or more objects together.
   * @param	{Object}	objects		The objects to merge together
   * @returns	{Object}				Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };
  /**
   * Active a tab and its content
   * @param	{Object}	settings		User settings and options
   * @param	{Node}		toggleTarget	The tab content
   */


  var actionActive = function actionActive(settings, toggleTarget, toggleButton) {
    // var toggleButton = toggleTarget.querySelector('button[class="' + settings.buttonClass + '"]');
    toggleTarget.classList.add(settings.activeClass);
    toggleButton.classList.add(settings.buttonActiveClass);
    settings.buttonActiveText != null ? toggleButton.innerHTML = settings.buttonActiveText : null;
  };
  /**
   * Inactive a Item and its content
   * @param	{Object}	settings		User settings and options
   * @param	{Node}		toggleTarget	The tab content
   */


  var actionInactive = function actionInactive(settings, toggleTarget, toggleButton) {
    // var toggleButton = toggleTarget.querySelector('button[class="' + settings.buttonClass + '"]');
    toggleTarget.classList.remove(settings.activeClass);
    toggleButton.classList.remove(settings.buttonActiveClass);
    settings.buttonActiveText != null ? toggleButton.innerHTML = settings.buttonText : null;
  };

  var ellipsis = function ellipsis(settings, toggleTarget) {
    var field = toggleTarget.querySelector(settings.ellipsisField);
    var containerHeight = field.offsetHeight;
    var lineHeight = parseInt(window.getComputedStyle(field).getPropertyValue('line-height'));
    var lines = containerHeight / lineHeight;

    if (lines > settings.ellipsisLimit) {
      toggleTarget.classList.add(settings.ellipsisActiveClass);
    } else {
      toggleTarget.classList.remove(settings.ellipsisActiveClass);
    }
  };
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {}); // Variables

    var publicAPIs = {};
    var settings;
    /**
     * Setup the DOM with the proper attributes
     */

    publicAPIs.setup = function () {
      // Variables
      var selectItems = document.querySelectorAll(selector);
      if (!selectItems) return;
      Array.prototype.forEach.call(selectItems, function (toggleTarget) {
        toggleTarget.classList.add(settings.targetClass); // Setup Toggle Button

        var toggleButton = document.createElement('button');
        toggleButton.setAttribute('type', 'button');
        toggleButton.className = settings.buttonClass;
        toggleButton.innerHTML = settings.buttonText; // settings.buttonAppendTo != null ? toggleTarget.querySelector(settings.buttonAppendTo).appendChild(toggleButton) : toggleTarget.appendChild(toggleButton);

        if (settings.buttonAppendTo != null) {
          if (toggleTarget.querySelector(settings.buttonAppendTo)) {
            toggleTarget.querySelector(settings.buttonAppendTo).appendChild(toggleButton);
          }
        } else {
          toggleTarget.appendChild(toggleButton);
        }

        ;
        toggleButton.addEventListener('click', function (e) {
          if (settings.accordion === true) {
            if (toggleTarget.classList.contains(settings.activeClass)) {
              actionInactive(settings, toggleTarget, toggleButton);
            } else {
              actionActive(settings, toggleTarget, toggleButton);
              var siblings = getSiblings(toggleTarget);
              Array.prototype.forEach.call(siblings, function (siblingItem) {
                if (siblingItem.classList.contains(settings.targetClass)) {
                  actionInactive(settings, siblingItem);
                }
              });
            }
          } else {
            toggleTarget.classList.contains(settings.activeClass) ? actionInactive(settings, toggleTarget, toggleButton) : actionActive(settings, toggleTarget, toggleButton);
          }

          settings.eventCallBack.call(toggleTarget, toggleButton);
        });

        if (settings.accordion === true) {
          actionActive(settings, selectItems[settings.initial]);
        } else {
          toggleTarget.classList.contains(settings.targetActiveClass) ? actionActive(settings, toggleTarget, toggleButton) : null;
        }

        if (settings.ellipsis === true) {
          ellipsis(settings, toggleTarget);
          window.addEventListener('resize', function () {
            ellipsis(settings, toggleTarget);
          }, false);
        }
      });
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
/**
 * buiNavi
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiNavi = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; // Variables

  var defaults = {
    // navigations
    list: '.navi-list',
    item: '.navi-item',
    name: '.navi-name',
    // general
    initial: 0,
    activeClass: 'active',
    currentClass: 'current',

    /* react target */
    reactTarget: 'body',
    reactClass: null,
    reactActiveClass: 'active',

    /* button */
    button: false,
    buttonClass: 'fold',
    // closeButtonText: '',
    buttonTextActive: 'close',
    buttonTextInactive: 'open',
    buttonArea: null,
    // accordion
    accordion: false,

    /* callback */
    onloadCallBack: function onloadCallBack() {
      return false;
    },
    eventCallBack: function eventCallBack() {
      return false;
    },
    activeCallBack: function activeCallBack() {
      return false;
    },
    inactiveCallBack: function inactiveCallBack() {
      return false;
    }
  };
  /**
   * Merge two or more objects together.
   * @param	{Object}	objects		The objects to merge together
   * @returns	{Object}				Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };

  var appendButtons = function appendButtons(settings, naviItem, index) {
    var toggleButton = document.createElement('button');
    var buttonArea = naviItem.querySelector(settings.buttonArea);
    toggleButton.className = settings.buttonClass;
    toggleButton.innerHTML = settings.buttonTextInactive;
    naviItem.insertBefore(toggleButton, buttonArea);

    if (naviItem.classList.contains(settings.activeClass) === true) {
      toggleButton.innerHTML = settings.buttonTextActive;
    } else {
      toggleButton.innerHTML = settings.buttonTextInactive;
    }

    toggleButton.addEventListener('click', function () {
      if (naviItem.classList.contains(settings.activeClass) === true) {
        naviItem.classList.remove(settings.activeClass);
        toggleButton.innerHTML = settings.buttonTextInactive;
      } else {
        naviItem.classList.add(settings.activeClass);
        toggleButton.innerHTML = settings.buttonTextActive;
      }
    });
  };
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {}); // Variables

    var publicAPIs = {};
    var settings;
    /**
     * Setup the DOM with the proper attributes
     */

    publicAPIs.setup = function () {
      // Variables
      var navigations = document.querySelectorAll(selector);
      if (!navigations) return;
      Array.prototype.forEach.call(navigations, function (navigation) {
        // var naviItems = navigation.querySelectorAll(settings.item);
        var naviItems = navigation.children;
        var currentItem = settings.initial;
        Array.prototype.forEach.call(naviItems, function (naviItem, index) {
          naviItem.classList.contains(settings.currentClass) === true ? currentItem = index : null;

          if (settings.button === true) {
            appendButtons(settings, naviItem, index); // console.log(settings.button);
          } // naviItem.querySelector(settings.name).addEventListener('click', function(event) {
          // 	if(naviItem.classList.contains(settings.activeClass) === true) {
          // 		naviItem.classList.remove(settings.activeClass);
          // 	} else {
          // 		naviItem.classList.add(settings.activeClass);
          // 	}
          // var siblingsItems = getSiblings(naviItem);
          // Array.prototype.forEach.call(siblingsItems, function(siblingsItem) {
          // 	siblingsItem.classList.remove(settings.activeClass);
          // 	siblingsItem.classList.remove(settings.currentClass);
          // });
          // });

        });
      });
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});
/**
 * buiFile
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object') {
    module.exports = factory(root);
  } else {
    root.buiFile = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0, function (window) {
  'use strict'; // Variables

  var defaults = {
    // general
    fileItemClass: 'file-item',
    fileFormClass: 'file-form',
    fileName: true,
    fileNameClass: 'file-name',
    fileType: true,
    fileTypeClass: 'file-type',
    fileDelete: true,
    fileDeleteClass: 'file-delete',
    maxlength: 1,
    ellipsis: false,
    ellipsisLimit: 2,
    ellipsisField: '',
    ellipsisActiveClass: 'limit',
    // target
    target: null,
    targetClass: 'bui-fold-target',
    targetActiveClass: 'active',
    // close
    button: 'button',
    buttonClass: 'fold',
    buttonActiveClass: 'active',
    buttonText: '열기',
    buttonActiveText: null,
    buttonAppendTo: null,
    // accordion
    accordion: false,

    /* callback */
    onloadCallBack: function onloadCallBack() {
      return false;
    },
    eventCallBack: function eventCallBack() {
      return false;
    },
    activeCallBack: function activeCallBack() {
      return false;
    },
    inactiveCallBack: function inactiveCallBack() {
      return false;
    }
  };
  /**
   * Merge two or more objects together.
   * @param	{Object}	objects		The objects to merge together
   * @returns	{Object}				Merged values of defaults and options
   */

  var extend = function extend() {
    var merged = {};
    Array.prototype.forEach.call(arguments, function (obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) return;
        merged[key] = obj[key];
      }
    });
    return merged;
  };
  /**
   * Active a tab and its content
   * @param	{Object}	settings		User settings and options
   * @param	{Node}		toggleTarget	The tab content
   */


  var changeFile = function changeFile(settings, fileItem, fileName, fileType, fileForm) {
    if (fileForm.files.length === 0) {
      console.log('파일 삭제');
      fileItem.classList.remove('typed');
      fileName.removeAttribute('data-bui-file-name');
      fileType.removeAttribute('data-bui-file-type');
      fileType.removeAttribute('style');
    } else {
      console.log('파일 첨부');
      fileItem.classList.add('typed');
      fileType.setAttribute('data-bui-file-type', fileForm.files[0].type.split('/')[0]);
      fileName.setAttribute('data-bui-file-name', fileForm.files[0].name);

      if (fileForm.files[0].type.split('/')[0] === 'image') {
        fileType.setAttribute('style', 'background-image: url(' + URL.createObjectURL(fileForm.files[0]) + ')');
      } else {
        fileType.removeAttribute('style');
      }
    }
  };
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {}); // Variables

    var publicAPIs = {};
    var settings;
    publicAPIs.append = function (fileList) {
      var fileItem, fileName, fileType, fileForm, fileDelete;
      fileItem = document.createElement('div');
      fileItem.classList.add(settings.fileItemClass);
      fileForm = document.createElement('input');
      fileForm.type = 'file';
      fileForm.classList.add(settings.fileFormClass);
      fileName = document.createElement('span');
      fileName.classList.add(settings.fileNameClass);
      fileType = document.createElement('span');
      fileType.classList.add(settings.fileTypeClass);
      fileDelete = document.createElement('button');
      fileDelete.type = 'button';
      fileDelete.innerHTML = '삭제';
      fileDelete.className = settings.fileDeleteClass;
      fileItem.append(fileForm);
      settings.fileName = true ? fileItem.append(fileName) : null;
      settings.fileType = true ? fileItem.append(fileType) : null;
      settings.fileDelete = true ? fileItem.append(fileDelete) : null;
      fileList.append(fileItem);
      fileForm.addEventListener('change', function () {
        changeFile(settings, fileItem, fileName, fileType, fileForm);
        var clone = fileItem.cloneNode(true);
        fileItem.after(clone); // var siblings = getSiblings(fileItem);
        // if(siblings.length < settings.maxlength) {
        // }
      }); // fileDelete.addEventListener('click', function() {
      // 	var siblings = getSiblings(fileItem);
      // 	console.log(siblings.length);
      // 	fileForm.value = '';
      // 	changeFile(settings, fileItem, fileName, fileType, fileForm, fileDelete);
      // 	fileItems = fileList.querySelectorAll('.' + settings.fileItemClass);
      // 	if (!fileItems) return;
      // 	if(fileItems.length > 1) {
      // 		fileItem.remove();
      // 	}
      // });
    }, publicAPIs.template = function (fileList) {
      var fileItems = fileList.querySelectorAll('.' + settings.fileItemClass);
      if (!fileItems) return;
      Array.prototype.forEach.call(fileItems, function (fileItem, index) {
        var fileForm = fileItem.querySelector('.' + settings.fileFormClass);
        var fileName = fileItem.querySelector('.' + settings.fileNameClass);
        var fileType = fileItem.querySelector('.' + settings.fileTypeClass);
        var fileDelete = fileItem.querySelector('.' + settings.fileDeleteClass);
      });
    };
    /**
     * Setup the DOM with the proper attributes
     */

    publicAPIs.setup = function () {
      // Variables
      var selectItems = document.querySelectorAll(selector);
      if (!selectItems) return;
      Array.prototype.forEach.call(selectItems, function (fileList) {
        publicAPIs.append(fileList);
      });
    };
    /**
     * Initialize the instance
     */


    var init = function init() {
      // Setup the DOM
      publicAPIs.setup();
    }; // Initialize and return the Public APIs


    init();
    return publicAPIs;
  }; // Return the Constructor


  return Constructor;
});