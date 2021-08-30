"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if (Detectizr.browser.name != 'ie') {
  !function () {
    "use strict";

    function e(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }

    function t(e) {
      return e[e.length - 1];
    }

    function i(e) {
      for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        t[_key - 1] = arguments[_key];
      }

      return t.forEach(function (t) {
        e.includes(t) || e.push(t);
      }), e;
    }

    function s(e, t) {
      return e ? e.split(t) : [];
    }

    function a(e, t, i) {
      return (void 0 === t || e >= t) && (void 0 === i || e <= i);
    }

    function n(e, t, i) {
      return e < t ? t : e > i ? i : e;
    }

    function r(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      a += "<".concat(Object.keys(i).reduce(function (e, t) {
        var a = i[t];
        return "function" == typeof a && (a = a(s)), "".concat(e, " ").concat(t, "=\"").concat(a, "\"");
      }, e), "></").concat(e, ">");
      var n = s + 1;
      return n < t ? r(e, t, i, n, a) : a;
    }

    function d(e) {
      return e.replace(/>\s+/g, ">").replace(/\s+</, "<");
    }

    function o(e) {
      return new Date(e).setHours(0, 0, 0, 0);
    }

    function c() {
      return new Date().setHours(0, 0, 0, 0);
    }

    function l() {
      switch (arguments.length) {
        case 0:
          return c();

        case 1:
          return o(arguments.length <= 0 ? undefined : arguments[0]);
      }

      var t = new Date(0);
      return t.setFullYear.apply(t, arguments), t.setHours(0, 0, 0, 0);
    }

    function h(e, t) {
      var i = new Date(e);
      return i.setDate(i.getDate() + t);
    }

    function u(e, t) {
      var i = new Date(e),
          s = i.getMonth() + t;
      var a = s % 12;
      a < 0 && (a += 12);
      var n = i.setMonth(s);
      return i.getMonth() !== a ? i.setDate(0) : n;
    }

    function f(e, t) {
      var i = new Date(e),
          s = i.getMonth(),
          a = i.setFullYear(i.getFullYear() + t);
      return 1 === s && 2 === i.getMonth() ? i.setDate(0) : a;
    }

    function p(e, t) {
      return (e - t + 7) % 7;
    }

    function g(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var s = new Date(e).getDay();
      return h(e, p(t, i) - p(s, i));
    }

    function m(e, t) {
      var i = new Date(e).getFullYear();
      return Math.floor(i / t) * t;
    }

    var w = /dd?|DD?|mm?|MM?|yy?(?:yy)?/,
        y = /[\s!-/:-@[-`{-~年月日]+/;
    var k = {};
    var D = {
      y: function y(e, t) {
        return new Date(e).setFullYear(parseInt(t, 10));
      },
      m: function m(e, t, i) {
        var s = new Date(e);
        var a = parseInt(t, 10) - 1;

        if (isNaN(a)) {
          if (!t) return NaN;

          var _e = t.toLowerCase(),
              _s = function _s(t) {
            return t.toLowerCase().startsWith(_e);
          };

          if ((a = i.monthsShort.findIndex(_s)) < 0 && (a = i.months.findIndex(_s)), a < 0) return NaN;
        }

        return s.setMonth(a), s.getMonth() !== function e(t) {
          return t > -1 ? t % 12 : e(t + 12);
        }(a) ? s.setDate(0) : s.getTime();
      },
      d: function d(e, t) {
        return new Date(e).setDate(parseInt(t, 10));
      }
    },
        v = {
      d: function d(e) {
        return e.getDate();
      },
      dd: function dd(e) {
        return b(e.getDate(), 2);
      },
      D: function D(e, t) {
        return t.daysShort[e.getDay()];
      },
      DD: function DD(e, t) {
        return t.days[e.getDay()];
      },
      m: function m(e) {
        return e.getMonth() + 1;
      },
      mm: function mm(e) {
        return b(e.getMonth() + 1, 2);
      },
      M: function M(e, t) {
        return t.monthsShort[e.getMonth()];
      },
      MM: function MM(e, t) {
        return t.months[e.getMonth()];
      },
      y: function y(e) {
        return e.getFullYear();
      },
      yy: function yy(e) {
        return b(e.getFullYear(), 2).slice(-2);
      },
      yyyy: function yyyy(e) {
        return b(e.getFullYear(), 4);
      }
    };

    function b(e, t) {
      return e.toString().padStart(t, "0");
    }

    function x(e) {
      if ("string" != typeof e) throw new Error("Invalid date format.");
      if (e in k) return k[e];
      var i = e.split(w),
          s = e.match(new RegExp(w, "g"));
      if (0 === i.length || !s) throw new Error("Invalid date format.");
      var a = s.map(function (e) {
        return v[e];
      }),
          n = Object.keys(D).reduce(function (e, t) {
        return s.find(function (e) {
          return "D" !== e[0] && e[0].toLowerCase() === t;
        }) && e.push(t), e;
      }, []);
      return k[e] = {
        parser: function parser(e, t) {
          var i = e.split(y).reduce(function (e, t, i) {
            if (t.length > 0 && s[i]) {
              var _a = s[i][0];
              "M" === _a ? e.m = t : "D" !== _a && (e[_a] = t);
            }

            return e;
          }, {});
          return n.reduce(function (e, s) {
            var a = D[s](e, i[s], t);
            return isNaN(a) ? e : a;
          }, c());
        },
        formatter: function formatter(e, s) {
          return a.reduce(function (t, a, n) {
            return t + "".concat(i[n]).concat(a(e, s));
          }, "") + t(i);
        }
      };
    }

    function M(e, t, i) {
      if (e instanceof Date || "number" == typeof e) {
        var _t = o(e);

        return isNaN(_t) ? void 0 : _t;
      }

      if (e) {
        if ("today" === e) return c();

        if (t && t.toValue) {
          var _s2 = t.toValue(e, t, i);

          return isNaN(_s2) ? void 0 : o(_s2);
        }

        return x(t).parser(e, i);
      }
    }

    function S(e, t, i) {
      if (isNaN(e) || !e && 0 !== e) return "";
      var s = "number" == typeof e ? new Date(e) : e;
      return t.toDisplay ? t.toDisplay(s, t, i) : x(t).formatter(s, i);
    }

    var O = new WeakMap(),
        _EventTarget$prototyp = EventTarget.prototype,
        C = _EventTarget$prototyp.addEventListener,
        E = _EventTarget$prototyp.removeEventListener;

    function F(e, t) {
      var i = O.get(e);
      i || (i = [], O.set(e, i)), t.forEach(function (e) {
        C.call.apply(C, _toConsumableArray(e)), i.push(e);
      });
    }

    function V(e) {
      var t = O.get(e);
      t && (t.forEach(function (e) {
        E.call.apply(E, _toConsumableArray(e));
      }), O.delete(e));
    }

    if (!Event.prototype.composedPath) {
      var _e2 = function _e2(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var s;
        return i.push(t), t.parentNode ? s = t.parentNode : t.host ? s = t.host : t.defaultView && (s = t.defaultView), s ? _e2(s, i) : i;
      };

      Event.prototype.composedPath = function () {
        return _e2(this.target);
      };
    }

    function N(e, t) {
      var i = "function" == typeof t ? t : function (e) {
        return e.matches(t);
      };
      return function e(t, i, s) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var n = t[a];
        return i(n) ? n : n !== s && n.parentElement ? e(t, i, s, a + 1) : void 0;
      }(e.composedPath(), i, e.currentTarget);
    }

    var L = {
      en: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM y"
      }
    },
        B = {
      autohide: !1,
      beforeShowDay: null,
      beforeShowDecade: null,
      beforeShowMonth: null,
      beforeShowYear: null,
      calendarWeeks: !1,
      clearBtn: !1,
      dateDelimiter: ",",
      datesDisabled: [],
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      defaultViewDate: void 0,
      disableTouchKeyboard: !1,
      format: "mm/dd/yyyy",
      language: "en",
      maxDate: null,
      maxNumberOfDates: 1,
      maxView: 3,
      minDate: null,
      nextArrow: "»",
      orientation: "auto",
      pickLevel: 0,
      prevArrow: "«",
      showDaysOfWeek: !0,
      showOnClick: !0,
      showOnFocus: !0,
      startView: 0,
      title: "",
      todayBtn: !1,
      todayBtnMode: 0,
      todayHighlight: !1,
      updateOnBlur: !0,
      weekStart: 0
    },
        A = document.createRange();

    function Y(e) {
      return A.createContextualFragment(e);
    }

    function W(e) {
      "none" !== e.style.display && (e.style.display && (e.dataset.styleDisplay = e.style.display), e.style.display = "none");
    }

    function K(e) {
      "none" === e.style.display && (e.dataset.styleDisplay ? (e.style.display = e.dataset.styleDisplay, delete e.dataset.styleDisplay) : e.style.display = "");
    }

    function T(e) {
      e.firstChild && (e.removeChild(e.firstChild), T(e));
    }

    var j = B.language,
        H = B.format,
        $ = B.weekStart;

    function _(e, t) {
      return e.length < 6 && t >= 0 && t < 7 ? i(e, t) : e;
    }

    function P(e) {
      return (e + 6) % 7;
    }

    function R(e, t, i, s) {
      var a = M(e, t, i);
      return void 0 !== a ? a : s;
    }

    function I(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
      var s = parseInt(e, 10);
      return s >= 0 && s <= i ? s : t;
    }

    function q(t, s) {
      var a = Object.assign({}, t),
          n = {},
          r = s.constructor.locales;

      var _ref = s.config || {},
          d = _ref.format,
          o = _ref.language,
          c = _ref.locale,
          h = _ref.maxDate,
          u = _ref.maxView,
          f = _ref.minDate,
          p = _ref.pickLevel,
          g = _ref.startView,
          m = _ref.weekStart;

      if (a.language) {
        var _e3;

        if (a.language !== o && (r[a.language] ? _e3 = a.language : void 0 === r[_e3 = a.language.split("-")[0]] && (_e3 = !1)), delete a.language, _e3) {
          o = n.language = _e3;

          var _t2 = c || r[j];

          c = Object.assign({
            format: H,
            weekStart: $
          }, r[j]), o !== j && Object.assign(c, r[o]), n.locale = c, d === _t2.format && (d = n.format = c.format), m === _t2.weekStart && (m = n.weekStart = c.weekStart, n.weekEnd = P(c.weekStart));
        }
      }

      if (a.format) {
        var _e4 = "function" == typeof a.format.toDisplay,
            _t3 = "function" == typeof a.format.toValue,
            _i = w.test(a.format);

        (_e4 && _t3 || _i) && (d = n.format = a.format), delete a.format;
      }

      var y = f,
          k = h;

      if (void 0 !== a.minDate && (y = null === a.minDate ? l(0, 0, 1) : R(a.minDate, d, c, y), delete a.minDate), void 0 !== a.maxDate && (k = null === a.maxDate ? void 0 : R(a.maxDate, d, c, k), delete a.maxDate), k < y ? (f = n.minDate = k, h = n.maxDate = y) : (f !== y && (f = n.minDate = y), h !== k && (h = n.maxDate = k)), a.datesDisabled && (n.datesDisabled = a.datesDisabled.reduce(function (e, t) {
        var s = M(t, d, c);
        return void 0 !== s ? i(e, s) : e;
      }, []), delete a.datesDisabled), void 0 !== a.defaultViewDate) {
        var _e5 = M(a.defaultViewDate, d, c);

        void 0 !== _e5 && (n.defaultViewDate = _e5), delete a.defaultViewDate;
      }

      if (void 0 !== a.weekStart) {
        var _e6 = Number(a.weekStart) % 7;

        isNaN(_e6) || (m = n.weekStart = _e6, n.weekEnd = P(_e6)), delete a.weekStart;
      }

      if (a.daysOfWeekDisabled && (n.daysOfWeekDisabled = a.daysOfWeekDisabled.reduce(_, []), delete a.daysOfWeekDisabled), a.daysOfWeekHighlighted && (n.daysOfWeekHighlighted = a.daysOfWeekHighlighted.reduce(_, []), delete a.daysOfWeekHighlighted), void 0 !== a.maxNumberOfDates) {
        var _e7 = parseInt(a.maxNumberOfDates, 10);

        _e7 >= 0 && (n.maxNumberOfDates = _e7, n.multidate = 1 !== _e7), delete a.maxNumberOfDates;
      }

      a.dateDelimiter && (n.dateDelimiter = String(a.dateDelimiter), delete a.dateDelimiter);
      var D = p;
      void 0 !== a.pickLevel && (D = I(a.pickLevel, 2), delete a.pickLevel), D !== p && (p = n.pickLevel = D);
      var v = u;
      void 0 !== a.maxView && (v = I(a.maxView, u), delete a.maxView), (v = p > v ? p : v) !== u && (u = n.maxView = v);
      var b = g;

      if (void 0 !== a.startView && (b = I(a.startView, b), delete a.startView), b < p ? b = p : b > u && (b = u), b !== g && (n.startView = b), a.prevArrow) {
        var _e8 = Y(a.prevArrow);

        _e8.childNodes.length > 0 && (n.prevArrow = _e8.childNodes), delete a.prevArrow;
      }

      if (a.nextArrow) {
        var _e9 = Y(a.nextArrow);

        _e9.childNodes.length > 0 && (n.nextArrow = _e9.childNodes), delete a.nextArrow;
      }

      if (void 0 !== a.disableTouchKeyboard && (n.disableTouchKeyboard = "ontouchstart" in document && !!a.disableTouchKeyboard, delete a.disableTouchKeyboard), a.orientation) {
        var _e10 = a.orientation.toLowerCase().split(/\s+/g);

        n.orientation = {
          x: _e10.find(function (e) {
            return "left" === e || "right" === e;
          }) || "auto",
          y: _e10.find(function (e) {
            return "top" === e || "bottom" === e;
          }) || "auto"
        }, delete a.orientation;
      }

      if (void 0 !== a.todayBtnMode) {
        switch (a.todayBtnMode) {
          case 0:
          case 1:
            n.todayBtnMode = a.todayBtnMode;
        }

        delete a.todayBtnMode;
      }

      return Object.keys(a).forEach(function (t) {
        void 0 !== a[t] && e(B, t) && (n[t] = a[t]);
      }), n;
    }

    var J = d('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'),
        U = d("<div class=\"days\">\n  <div class=\"days-of-week\">".concat(r("span", 7, {
      class: "dow"
    }), "</div>\n  <div class=\"datepicker-grid\">").concat(r("span", 42), "</div>\n</div>")),
        z = d("<div class=\"calendar-weeks\">\n  <div class=\"days-of-week\"><span class=\"dow\"></span></div>\n  <div class=\"weeks\">".concat(r("span", 6, {
      class: "week"
    }), "</div>\n</div>"));

    var X = /*#__PURE__*/function () {
      function X(e, t) {
        _classCallCheck(this, X);

        Object.assign(this, t, {
          picker: e,
          element: Y('<div class="datepicker-view"></div>').firstChild,
          selected: []
        }), this.init(this.picker.datepicker.config);
      }

      _createClass(X, [{
        key: "init",
        value: function init(e) {
          void 0 !== e.pickLevel && (this.isMinView = this.id === e.pickLevel), this.setOptions(e), this.updateFocus(), this.updateSelection();
        }
      }, {
        key: "performBeforeHook",
        value: function performBeforeHook(e, t, s) {
          var a = this.beforeShow(new Date(s));

          switch (_typeof(a)) {
            case "boolean":
              a = {
                enabled: a
              };
              break;

            case "string":
              a = {
                classes: a
              };
          }

          if (a) {
            if (!1 === a.enabled && (e.classList.add("disabled"), i(this.disabled, t)), a.classes) {
              var _e$classList;

              var _s3 = a.classes.split(/\s+/);

              (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(_s3)), _s3.includes("disabled") && i(this.disabled, t);
            }

            a.content && function (e, t) {
              T(e), t instanceof DocumentFragment ? e.appendChild(t) : "string" == typeof t ? e.appendChild(Y(t)) : "function" == typeof t.forEach && t.forEach(function (t) {
                e.appendChild(t);
              });
            }(e, a.content);
          }
        }
      }]);

      return X;
    }();

    var G = /*#__PURE__*/function (_X) {
      _inherits(G, _X);

      var _super = _createSuper(G);

      function G(e) {
        _classCallCheck(this, G);

        return _super.call(this, e, {
          id: 0,
          name: "days",
          cellClass: "day"
        });
      }

      _createClass(G, [{
        key: "init",
        value: function init(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

          if (t) {
            var _e11 = Y(U).firstChild;
            this.dow = _e11.firstChild, this.grid = _e11.lastChild, this.element.appendChild(_e11);
          }

          _get(_getPrototypeOf(G.prototype), "init", this).call(this, e);
        }
      }, {
        key: "setOptions",
        value: function setOptions(t) {
          var _this = this;

          var i;

          if (e(t, "minDate") && (this.minDate = t.minDate), e(t, "maxDate") && (this.maxDate = t.maxDate), t.datesDisabled && (this.datesDisabled = t.datesDisabled), t.daysOfWeekDisabled && (this.daysOfWeekDisabled = t.daysOfWeekDisabled, i = !0), t.daysOfWeekHighlighted && (this.daysOfWeekHighlighted = t.daysOfWeekHighlighted), void 0 !== t.todayHighlight && (this.todayHighlight = t.todayHighlight), void 0 !== t.weekStart && (this.weekStart = t.weekStart, this.weekEnd = t.weekEnd, i = !0), t.locale) {
            var _e12 = this.locale = t.locale;

            this.dayNames = _e12.daysMin, this.switchLabelFormat = _e12.titleFormat, i = !0;
          }

          if (void 0 !== t.beforeShowDay && (this.beforeShow = "function" == typeof t.beforeShowDay ? t.beforeShowDay : void 0), void 0 !== t.calendarWeeks) if (t.calendarWeeks && !this.calendarWeeks) {
            var _e13 = Y(z).firstChild;
            this.calendarWeeks = {
              element: _e13,
              dow: _e13.firstChild,
              weeks: _e13.lastChild
            }, this.element.insertBefore(_e13, this.element.firstChild);
          } else this.calendarWeeks && !t.calendarWeeks && (this.element.removeChild(this.calendarWeeks.element), this.calendarWeeks = null);
          void 0 !== t.showDaysOfWeek && (t.showDaysOfWeek ? (K(this.dow), this.calendarWeeks && K(this.calendarWeeks.dow)) : (W(this.dow), this.calendarWeeks && W(this.calendarWeeks.dow))), i && Array.from(this.dow.children).forEach(function (e, t) {
            var i = (_this.weekStart + t) % 7;
            e.textContent = _this.dayNames[i], e.className = _this.daysOfWeekDisabled.includes(i) ? "dow disabled" : "dow";
          });
        }
      }, {
        key: "updateFocus",
        value: function updateFocus() {
          var e = new Date(this.picker.viewDate),
              t = e.getFullYear(),
              i = e.getMonth(),
              s = l(t, i, 1),
              a = g(s, this.weekStart, this.weekStart);
          this.first = s, this.last = l(t, i + 1, 0), this.start = a, this.focused = this.picker.viewDate;
        }
      }, {
        key: "updateSelection",
        value: function updateSelection() {
          var _this$picker$datepick = this.picker.datepicker,
              e = _this$picker$datepick.dates,
              t = _this$picker$datepick.rangepicker;
          this.selected = e, t && (this.range = t.dates);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          this.today = this.todayHighlight ? c() : void 0, this.disabled = _toConsumableArray(this.datesDisabled);
          var e = S(this.focused, this.switchLabelFormat, this.locale);

          if (this.picker.setViewSwitchLabel(e), this.picker.setPrevBtnDisabled(this.first <= this.minDate), this.picker.setNextBtnDisabled(this.last >= this.maxDate), this.calendarWeeks) {
            var _e14 = g(this.first, 1, 1);

            Array.from(this.calendarWeeks.weeks.children).forEach(function (t, i) {
              t.textContent = function (e) {
                var t = g(e, 4, 1),
                    i = g(new Date(t).setMonth(0, 4), 4, 1);
                return Math.round((t - i) / 6048e5) + 1;
              }(h(_e14, 7 * i));
            });
          }

          Array.from(this.grid.children).forEach(function (e, t) {
            var s = e.classList,
                a = h(_this2.start, t),
                n = new Date(a),
                r = n.getDay();

            if (e.className = "datepicker-cell ".concat(_this2.cellClass), e.dataset.date = a, e.textContent = n.getDate(), a < _this2.first ? s.add("prev") : a > _this2.last && s.add("next"), _this2.today === a && s.add("today"), (a < _this2.minDate || a > _this2.maxDate || _this2.disabled.includes(a)) && s.add("disabled"), _this2.daysOfWeekDisabled.includes(r) && (s.add("disabled"), i(_this2.disabled, a)), _this2.daysOfWeekHighlighted.includes(r) && s.add("highlighted"), _this2.range) {
              var _this2$range = _slicedToArray(_this2.range, 2),
                  _e15 = _this2$range[0],
                  _t4 = _this2$range[1];

              a > _e15 && a < _t4 && s.add("range"), a === _e15 && s.add("range-start"), a === _t4 && s.add("range-end");
            }

            _this2.selected.includes(a) && s.add("selected"), a === _this2.focused && s.add("focused"), _this2.beforeShow && _this2.performBeforeHook(e, a, a);
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this3 = this;

          var _ref2 = this.range || [],
              _ref3 = _slicedToArray(_ref2, 2),
              e = _ref3[0],
              t = _ref3[1];

          this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function (e) {
            e.classList.remove("range", "range-start", "range-end", "selected", "focused");
          }), Array.from(this.grid.children).forEach(function (i) {
            var s = Number(i.dataset.date),
                a = i.classList;
            s > e && s < t && a.add("range"), s === e && a.add("range-start"), s === t && a.add("range-end"), _this3.selected.includes(s) && a.add("selected"), s === _this3.focused && a.add("focused");
          });
        }
      }, {
        key: "refreshFocus",
        value: function refreshFocus() {
          var e = Math.round((this.focused - this.start) / 864e5);
          this.grid.querySelectorAll(".focused").forEach(function (e) {
            e.classList.remove("focused");
          }), this.grid.children[e].classList.add("focused");
        }
      }]);

      return G;
    }(X);

    function Q(e, t) {
      if (!e || !e[0] || !e[1]) return;

      var _e16 = _slicedToArray(e, 2),
          _e16$ = _slicedToArray(_e16[0], 2),
          i = _e16$[0],
          s = _e16$[1],
          _e16$2 = _slicedToArray(_e16[1], 2),
          a = _e16$2[0],
          n = _e16$2[1];

      return i > t || a < t ? void 0 : [i === t ? s : -1, a === t ? n : 12];
    }

    var Z = /*#__PURE__*/function (_X2) {
      _inherits(Z, _X2);

      var _super2 = _createSuper(Z);

      function Z(e) {
        _classCallCheck(this, Z);

        return _super2.call(this, e, {
          id: 1,
          name: "months",
          cellClass: "month"
        });
      }

      _createClass(Z, [{
        key: "init",
        value: function init(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          t && (this.grid = this.element, this.element.classList.add("months", "datepicker-grid"), this.grid.appendChild(Y(r("span", 12, {
            "data-month": function dataMonth(e) {
              return e;
            }
          })))), _get(_getPrototypeOf(Z.prototype), "init", this).call(this, e);
        }
      }, {
        key: "setOptions",
        value: function setOptions(t) {
          if (t.locale && (this.monthNames = t.locale.monthsShort), e(t, "minDate")) if (void 0 === t.minDate) this.minYear = this.minMonth = this.minDate = void 0;else {
            var _e17 = new Date(t.minDate);

            this.minYear = _e17.getFullYear(), this.minMonth = _e17.getMonth(), this.minDate = _e17.setDate(1);
          }
          if (e(t, "maxDate")) if (void 0 === t.maxDate) this.maxYear = this.maxMonth = this.maxDate = void 0;else {
            var _e18 = new Date(t.maxDate);

            this.maxYear = _e18.getFullYear(), this.maxMonth = _e18.getMonth(), this.maxDate = l(this.maxYear, this.maxMonth + 1, 0);
          }
          void 0 !== t.beforeShowMonth && (this.beforeShow = "function" == typeof t.beforeShowMonth ? t.beforeShowMonth : void 0);
        }
      }, {
        key: "updateFocus",
        value: function updateFocus() {
          var e = new Date(this.picker.viewDate);
          this.year = e.getFullYear(), this.focused = e.getMonth();
        }
      }, {
        key: "updateSelection",
        value: function updateSelection() {
          var _this$picker$datepick2 = this.picker.datepicker,
              e = _this$picker$datepick2.dates,
              t = _this$picker$datepick2.rangepicker;
          this.selected = e.reduce(function (e, t) {
            var s = new Date(t),
                a = s.getFullYear(),
                n = s.getMonth();
            return void 0 === e[a] ? e[a] = [n] : i(e[a], n), e;
          }, {}), t && t.dates && (this.range = t.dates.map(function (e) {
            var t = new Date(e);
            return isNaN(t) ? void 0 : [t.getFullYear(), t.getMonth()];
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;

          this.disabled = [], this.picker.setViewSwitchLabel(this.year), this.picker.setPrevBtnDisabled(this.year <= this.minYear), this.picker.setNextBtnDisabled(this.year >= this.maxYear);
          var e = this.selected[this.year] || [],
              t = this.year < this.minYear || this.year > this.maxYear,
              i = this.year === this.minYear,
              s = this.year === this.maxYear,
              a = Q(this.range, this.year);
          Array.from(this.grid.children).forEach(function (n, r) {
            var d = n.classList,
                o = l(_this4.year, r, 1);

            if (n.className = "datepicker-cell ".concat(_this4.cellClass), _this4.isMinView && (n.dataset.date = o), n.textContent = _this4.monthNames[r], (t || i && r < _this4.minMonth || s && r > _this4.maxMonth) && d.add("disabled"), a) {
              var _a2 = _slicedToArray(a, 2),
                  _e19 = _a2[0],
                  _t5 = _a2[1];

              r > _e19 && r < _t5 && d.add("range"), r === _e19 && d.add("range-start"), r === _t5 && d.add("range-end");
            }

            e.includes(r) && d.add("selected"), r === _this4.focused && d.add("focused"), _this4.beforeShow && _this4.performBeforeHook(n, r, o);
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this5 = this;

          var e = this.selected[this.year] || [],
              _ref4 = Q(this.range, this.year) || [],
              _ref5 = _slicedToArray(_ref4, 2),
              t = _ref5[0],
              i = _ref5[1];

          this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function (e) {
            e.classList.remove("range", "range-start", "range-end", "selected", "focused");
          }), Array.from(this.grid.children).forEach(function (s, a) {
            var n = s.classList;
            a > t && a < i && n.add("range"), a === t && n.add("range-start"), a === i && n.add("range-end"), e.includes(a) && n.add("selected"), a === _this5.focused && n.add("focused");
          });
        }
      }, {
        key: "refreshFocus",
        value: function refreshFocus() {
          this.grid.querySelectorAll(".focused").forEach(function (e) {
            e.classList.remove("focused");
          }), this.grid.children[this.focused].classList.add("focused");
        }
      }]);

      return Z;
    }(X);

    var ee = /*#__PURE__*/function (_X3) {
      _inherits(ee, _X3);

      var _super3 = _createSuper(ee);

      function ee(e, t) {
        _classCallCheck(this, ee);

        return _super3.call(this, e, t);
      }

      _createClass(ee, [{
        key: "init",
        value: function init(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          var i;
          t && (this.navStep = 10 * this.step, this.beforeShowOption = "beforeShow".concat((i = this.cellClass, _toConsumableArray(i).reduce(function (e, t, i) {
            return e += i ? t : t.toUpperCase();
          }, ""))), this.grid = this.element, this.element.classList.add(this.name, "datepicker-grid"), this.grid.appendChild(Y(r("span", 12)))), _get(_getPrototypeOf(ee.prototype), "init", this).call(this, e);
        }
      }, {
        key: "setOptions",
        value: function setOptions(t) {
          if (e(t, "minDate") && (void 0 === t.minDate ? this.minYear = this.minDate = void 0 : (this.minYear = m(t.minDate, this.step), this.minDate = l(this.minYear, 0, 1))), e(t, "maxDate") && (void 0 === t.maxDate ? this.maxYear = this.maxDate = void 0 : (this.maxYear = m(t.maxDate, this.step), this.maxDate = l(this.maxYear, 11, 31))), void 0 !== t[this.beforeShowOption]) {
            var _e20 = t[this.beforeShowOption];
            this.beforeShow = "function" == typeof _e20 ? _e20 : void 0;
          }
        }
      }, {
        key: "updateFocus",
        value: function updateFocus() {
          var e = new Date(this.picker.viewDate),
              t = m(e, this.navStep),
              i = t + 9 * this.step;
          this.first = t, this.last = i, this.start = t - this.step, this.focused = m(e, this.step);
        }
      }, {
        key: "updateSelection",
        value: function updateSelection() {
          var _this6 = this;

          var _this$picker$datepick3 = this.picker.datepicker,
              e = _this$picker$datepick3.dates,
              t = _this$picker$datepick3.rangepicker;
          this.selected = e.reduce(function (e, t) {
            return i(e, m(t, _this6.step));
          }, []), t && t.dates && (this.range = t.dates.map(function (e) {
            if (void 0 !== e) return m(e, _this6.step);
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this7 = this;

          this.disabled = [], this.picker.setViewSwitchLabel("".concat(this.first, "-").concat(this.last)), this.picker.setPrevBtnDisabled(this.first <= this.minYear), this.picker.setNextBtnDisabled(this.last >= this.maxYear), Array.from(this.grid.children).forEach(function (e, t) {
            var i = e.classList,
                s = _this7.start + t * _this7.step,
                a = l(s, 0, 1);

            if (e.className = "datepicker-cell ".concat(_this7.cellClass), _this7.isMinView && (e.dataset.date = a), e.textContent = e.dataset.year = s, 0 === t ? i.add("prev") : 11 === t && i.add("next"), (s < _this7.minYear || s > _this7.maxYear) && i.add("disabled"), _this7.range) {
              var _this7$range = _slicedToArray(_this7.range, 2),
                  _e21 = _this7$range[0],
                  _t6 = _this7$range[1];

              s > _e21 && s < _t6 && i.add("range"), s === _e21 && i.add("range-start"), s === _t6 && i.add("range-end");
            }

            _this7.selected.includes(s) && i.add("selected"), s === _this7.focused && i.add("focused"), _this7.beforeShow && _this7.performBeforeHook(e, s, a);
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this8 = this;

          var _ref6 = this.range || [],
              _ref7 = _slicedToArray(_ref6, 2),
              e = _ref7[0],
              t = _ref7[1];

          this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(function (e) {
            e.classList.remove("range", "range-start", "range-end", "selected", "focused");
          }), Array.from(this.grid.children).forEach(function (i) {
            var s = Number(i.textContent),
                a = i.classList;
            s > e && s < t && a.add("range"), s === e && a.add("range-start"), s === t && a.add("range-end"), _this8.selected.includes(s) && a.add("selected"), s === _this8.focused && a.add("focused");
          });
        }
      }, {
        key: "refreshFocus",
        value: function refreshFocus() {
          var e = Math.round((this.focused - this.start) / this.step);
          this.grid.querySelectorAll(".focused").forEach(function (e) {
            e.classList.remove("focused");
          }), this.grid.children[e].classList.add("focused");
        }
      }]);

      return ee;
    }(X);

    function te(e, t) {
      var i = {
        date: e.getDate(),
        viewDate: new Date(e.picker.viewDate),
        viewId: e.picker.currentView.id,
        datepicker: e
      };
      e.element.dispatchEvent(new CustomEvent(t, {
        detail: i
      }));
    }

    function ie(e, t) {
      var _e$config = e.config,
          i = _e$config.minDate,
          s = _e$config.maxDate,
          _e$picker = e.picker,
          a = _e$picker.currentView,
          r = _e$picker.viewDate;
      var d;

      switch (a.id) {
        case 0:
          d = u(r, t);
          break;

        case 1:
          d = f(r, t);
          break;

        default:
          d = f(r, t * a.navStep);
      }

      d = n(d, i, s), e.picker.changeFocus(d).render();
    }

    function se(e) {
      var t = e.picker.currentView.id;
      t !== e.config.maxView && e.picker.changeView(t + 1).render();
    }

    function ae(e) {
      e.config.updateOnBlur ? e.update({
        autohide: !0
      }) : (e.refresh("input"), e.hide());
    }

    function ne(e, t) {
      var i = e.picker,
          s = new Date(i.viewDate),
          a = i.currentView.id,
          n = 1 === a ? u(s, t - s.getMonth()) : f(s, t - s.getFullYear());
      i.changeFocus(n).changeView(a - 1).render();
    }

    function re(t, i) {
      if (void 0 !== i.title && (i.title ? (t.controls.title.textContent = i.title, K(t.controls.title)) : (t.controls.title.textContent = "", W(t.controls.title))), i.prevArrow) {
        var _e22 = t.controls.prevBtn;
        T(_e22), i.prevArrow.forEach(function (t) {
          _e22.appendChild(t.cloneNode(!0));
        });
      }

      if (i.nextArrow) {
        var _e23 = t.controls.nextBtn;
        T(_e23), i.nextArrow.forEach(function (t) {
          _e23.appendChild(t.cloneNode(!0));
        });
      }

      if (i.locale && (t.controls.todayBtn.textContent = i.locale.today, t.controls.clearBtn.textContent = i.locale.clear), void 0 !== i.todayBtn && (i.todayBtn ? K(t.controls.todayBtn) : W(t.controls.todayBtn)), e(i, "minDate") || e(i, "maxDate")) {
        var _t$datepicker$config = t.datepicker.config,
            _e24 = _t$datepicker$config.minDate,
            _i2 = _t$datepicker$config.maxDate;
        t.controls.todayBtn.disabled = !a(c(), _e24, _i2);
      }

      void 0 !== i.clearBtn && (i.clearBtn ? K(t.controls.clearBtn) : W(t.controls.clearBtn));
    }

    function de(e) {
      var i = e.dates,
          s = e.config;
      return n(i.length > 0 ? t(i) : s.defaultViewDate, s.minDate, s.maxDate);
    }

    function oe(e, t) {
      var i = new Date(e.viewDate),
          s = new Date(t),
          _e$currentView = e.currentView,
          a = _e$currentView.id,
          n = _e$currentView.year,
          r = _e$currentView.first,
          d = _e$currentView.last,
          o = s.getFullYear();

      switch (e.viewDate = t, o !== i.getFullYear() && te(e.datepicker, "changeYear"), s.getMonth() !== i.getMonth() && te(e.datepicker, "changeMonth"), a) {
        case 0:
          return t < r || t > d;

        case 1:
          return o !== n;

        default:
          return o < r || o > d;
      }
    }

    function ce(e) {
      return window.getComputedStyle(e).direction;
    }

    var le = /*#__PURE__*/function () {
      function le(e) {
        _classCallCheck(this, le);

        this.datepicker = e;

        var t = J.replace(/%buttonClass%/g, e.config.buttonClass),
            i = this.element = Y(t).firstChild,
            _i$firstChild$childre = _slicedToArray(i.firstChild.children, 3),
            s = _i$firstChild$childre[0],
            a = _i$firstChild$childre[1],
            n = _i$firstChild$childre[2],
            r = s.firstElementChild,
            _s$lastElementChild$c = _slicedToArray(s.lastElementChild.children, 3),
            d = _s$lastElementChild$c[0],
            o = _s$lastElementChild$c[1],
            l = _s$lastElementChild$c[2],
            _n$firstChild$childre = _slicedToArray(n.firstChild.children, 2),
            h = _n$firstChild$childre[0],
            u = _n$firstChild$childre[1],
            f = {
          title: r,
          prevBtn: d,
          viewSwitch: o,
          nextBtn: l,
          todayBtn: h,
          clearBtn: u
        };

        this.main = a, this.controls = f;
        var p = e.inline ? "inline" : "dropdown";
        i.classList.add("datepicker-".concat(p)), re(this, e.config), this.viewDate = de(e), F(e, [[i, "click", function (e) {
          e.inline || e.config.disableTouchKeyboard || e.inputField.focus();
        }.bind(null, e), {
          capture: !0
        }], [a, "click", function (e, t) {
          var i = N(t, ".datepicker-cell");
          if (!i || i.classList.contains("disabled")) return;
          var _e$picker$currentView = e.picker.currentView,
              s = _e$picker$currentView.id,
              a = _e$picker$currentView.isMinView;
          a ? e.setDate(Number(i.dataset.date)) : ne(e, 1 === s ? Number(i.dataset.month) : Number(i.dataset.year));
        }.bind(null, e)], [f.viewSwitch, "click", function (e) {
          se(e);
        }.bind(null, e)], [f.prevBtn, "click", function (e) {
          ie(e, -1);
        }.bind(null, e)], [f.nextBtn, "click", function (e) {
          ie(e, 1);
        }.bind(null, e)], [f.todayBtn, "click", function (e) {
          var t = e.picker,
              i = c();

          if (1 === e.config.todayBtnMode) {
            if (e.config.autohide) return void e.setDate(i);
            e.setDate(i, {
              render: !1
            }), t.update();
          }

          t.viewDate !== i && t.changeFocus(i), t.changeView(0).render();
        }.bind(null, e)], [f.clearBtn, "click", function (e) {
          e.setDate({
            clear: !0
          });
        }.bind(null, e)]]), this.views = [new G(this), new Z(this), new ee(this, {
          id: 2,
          name: "years",
          cellClass: "year",
          step: 1
        }), new ee(this, {
          id: 3,
          name: "decades",
          cellClass: "decade",
          step: 10
        })], this.currentView = this.views[e.config.startView], this.currentView.render(), this.main.appendChild(this.currentView.element), e.config.container.appendChild(this.element);
      }

      _createClass(le, [{
        key: "setOptions",
        value: function setOptions(e) {
          re(this, e), this.views.forEach(function (t) {
            t.init(e, !1);
          }), this.currentView.render();
        }
      }, {
        key: "detach",
        value: function detach() {
          this.datepicker.config.container.removeChild(this.element);
        }
      }, {
        key: "show",
        value: function show() {
          if (this.active) return;
          this.element.classList.add("active"), this.active = !0;
          var e = this.datepicker;

          if (!e.inline) {
            var _t7 = ce(e.inputField);

            _t7 !== ce(e.config.container) ? this.element.dir = _t7 : this.element.dir && this.element.removeAttribute("dir"), this.place(), e.config.disableTouchKeyboard && e.inputField.blur();
          }

          te(e, "show");
        }
      }, {
        key: "hide",
        value: function hide() {
          this.active && (this.datepicker.exitEditMode(), this.element.classList.remove("active"), this.active = !1, te(this.datepicker, "hide"));
        }
      }, {
        key: "place",
        value: function place() {
          var _this$element = this.element,
              e = _this$element.classList,
              t = _this$element.style,
              _this$datepicker = this.datepicker,
              i = _this$datepicker.config,
              s = _this$datepicker.inputField,
              a = i.container,
              _this$element$getBoun = this.element.getBoundingClientRect(),
              n = _this$element$getBoun.width,
              r = _this$element$getBoun.height,
              _a$getBoundingClientR = a.getBoundingClientRect(),
              d = _a$getBoundingClientR.left,
              o = _a$getBoundingClientR.top,
              c = _a$getBoundingClientR.width,
              _s$getBoundingClientR = s.getBoundingClientRect(),
              l = _s$getBoundingClientR.left,
              h = _s$getBoundingClientR.top,
              u = _s$getBoundingClientR.width,
              f = _s$getBoundingClientR.height;

          var p,
              g,
              m,
              _i$orientation = i.orientation,
              w = _i$orientation.x,
              y = _i$orientation.y;
          a === document.body ? (p = window.scrollY, g = l + window.scrollX, m = h + p) : (g = l - d, m = h - o + (p = a.scrollTop)), "auto" === w && (g < 0 ? (w = "left", g = 10) : w = g + n > c ? "right" : "rtl" === ce(s) ? "right" : "left"), "right" === w && (g -= n - u), "auto" === y && (y = m - r < p ? "bottom" : "top"), "top" === y ? m -= r : m += f, e.remove("datepicker-orient-top", "datepicker-orient-bottom", "datepicker-orient-right", "datepicker-orient-left"), e.add("datepicker-orient-".concat(y), "datepicker-orient-".concat(w)), t.top = m ? "".concat(m, "px") : m, t.left = g ? "".concat(g, "px") : g;
        }
      }, {
        key: "setViewSwitchLabel",
        value: function setViewSwitchLabel(e) {
          this.controls.viewSwitch.textContent = e;
        }
      }, {
        key: "setPrevBtnDisabled",
        value: function setPrevBtnDisabled(e) {
          this.controls.prevBtn.disabled = e;
        }
      }, {
        key: "setNextBtnDisabled",
        value: function setNextBtnDisabled(e) {
          this.controls.nextBtn.disabled = e;
        }
      }, {
        key: "changeView",
        value: function changeView(e) {
          var t = this.currentView,
              i = this.views[e];
          return i.id !== t.id && (this.currentView = i, this._renderMethod = "render", te(this.datepicker, "changeView"), this.main.replaceChild(i.element, t.element)), this;
        }
      }, {
        key: "changeFocus",
        value: function changeFocus(e) {
          return this._renderMethod = oe(this, e) ? "render" : "refreshFocus", this.views.forEach(function (e) {
            e.updateFocus();
          }), this;
        }
      }, {
        key: "update",
        value: function update() {
          var e = de(this.datepicker);
          return this._renderMethod = oe(this, e) ? "render" : "refresh", this.views.forEach(function (e) {
            e.updateFocus(), e.updateSelection();
          }), this;
        }
      }, {
        key: "render",
        value: function render() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          var t = e && this._renderMethod || "render";
          delete this._renderMethod, this.currentView[t]();
        }
      }]);

      return le;
    }();

    function he(e, t, i, s) {
      var n = e.picker,
          r = n.currentView,
          d = r.step || 1;
      var o,
          c,
          l = n.viewDate;

      switch (r.id) {
        case 0:
          l = s ? h(l, 7 * i) : t.ctrlKey || t.metaKey ? f(l, i) : h(l, i), o = h, c = function c(e) {
            return r.disabled.includes(e);
          };
          break;

        case 1:
          l = u(l, s ? 4 * i : i), o = u, c = function c(e) {
            var t = new Date(e),
                i = r.year,
                s = r.disabled;
            return t.getFullYear() === i && s.includes(t.getMonth());
          };
          break;

        default:
          l = f(l, i * (s ? 4 : 1) * d), o = f, c = function c(e) {
            return r.disabled.includes(m(e, d));
          };
      }

      void 0 !== (l = function e(t, i, s, n, r, d) {
        if (a(t, r, d)) return n(t) ? e(i(t, s), i, s, n, r, d) : t;
      }(l, o, i < 0 ? -d : d, c, r.minDate, r.maxDate)) && n.changeFocus(l).render();
    }

    function ue(e, t) {
      return e.map(function (e) {
        return S(e, t.format, t.locale);
      }).join(t.dateDelimiter);
    }

    function fe(e, t) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      var s = e.config,
          n = e.dates,
          r = e.rangepicker;
      if (0 === t.length) return i ? [] : void 0;
      var d = r && e === r.datepickers[1];
      var o = t.reduce(function (e, t) {
        var i = M(t, s.format, s.locale);
        if (void 0 === i) return e;

        if (s.pickLevel > 0) {
          var _e25 = new Date(i);

          i = 1 === s.pickLevel ? d ? _e25.setMonth(_e25.getMonth() + 1, 0) : _e25.setDate(1) : d ? _e25.setFullYear(_e25.getFullYear() + 1, 0, 0) : _e25.setMonth(0, 1);
        }

        return !a(i, s.minDate, s.maxDate) || e.includes(i) || s.datesDisabled.includes(i) || s.daysOfWeekDisabled.includes(new Date(i).getDay()) || e.push(i), e;
      }, []);
      return 0 !== o.length ? (s.multidate && !i && (o = o.reduce(function (e, t) {
        return n.includes(t) || e.push(t), e;
      }, n.filter(function (e) {
        return !o.includes(e);
      }))), s.maxNumberOfDates && o.length > s.maxNumberOfDates ? o.slice(-1 * s.maxNumberOfDates) : o) : void 0;
    }

    function pe(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var s = e.config,
          a = e.picker,
          n = e.inputField;

      if (2 & t) {
        var _e26 = a.active ? s.pickLevel : s.startView;

        a.update().changeView(_e26).render(i);
      }

      1 & t && n && (n.value = ue(e.dates, s));
    }

    function ge(e, t, i) {
      var s = i.clear,
          a = i.render,
          n = i.autohide;
      void 0 === a && (a = !0), a ? void 0 === n && (n = e.config.autohide) : n = !1;
      var r = fe(e, t, s);
      r && (r.toString() !== e.dates.toString() ? (e.dates = r, pe(e, a ? 3 : 1), te(e, "changeDate")) : pe(e, 1), n && e.hide());
    }

    var me = /*#__PURE__*/function () {
      function me(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, me);

        e.datepicker = this, this.element = e;
        var a = this.config = Object.assign({
          buttonClass: t.buttonClass && String(t.buttonClass) || "button",
          container: document.body,
          defaultViewDate: c(),
          maxDate: void 0,
          minDate: void 0
        }, q(B, this));
        this._options = t, Object.assign(a, q(t, this));
        var n = this.inline = "INPUT" !== e.tagName;
        var r, d;
        if (n) a.container = e, d = s(e.dataset.date, a.dateDelimiter), delete e.dataset.date;else {
          var _i3 = t.container ? document.querySelector(t.container) : null;

          _i3 && (a.container = _i3), (r = this.inputField = e).classList.add("datepicker-input"), d = s(r.value, a.dateDelimiter);
        }

        if (i) {
          var _e27 = i.inputs.indexOf(r),
              _t8 = i.datepickers;

          if (_e27 < 0 || _e27 > 1 || !Array.isArray(_t8)) throw Error("Invalid rangepicker object.");
          _t8[_e27] = this, Object.defineProperty(this, "rangepicker", {
            get: function get() {
              return i;
            }
          });
        }

        this.dates = fe(this, d) || [], r && (r.value = ue(this.dates, a));
        var o = this.picker = new le(this);
        if (n) this.show();else {
          var _e28 = function (e, t) {
            var i = e.element;
            if (i !== document.activeElement) return;
            var s = e.picker.element;
            N(t, function (e) {
              return e === i || e === s;
            }) || ae(e);
          }.bind(null, this);

          F(this, [[r, "keydown", function (e, t) {
            if ("Tab" === t.key) return void ae(e);
            var i = e.picker,
                _i$currentView = i.currentView,
                s = _i$currentView.id,
                a = _i$currentView.isMinView;
            if (i.active) {
              if (e.editMode) switch (t.key) {
                case "Escape":
                  i.hide();
                  break;

                case "Enter":
                  e.exitEditMode({
                    update: !0,
                    autohide: e.config.autohide
                  });
                  break;

                default:
                  return;
              } else switch (t.key) {
                case "Escape":
                  i.hide();
                  break;

                case "ArrowLeft":
                  if (t.ctrlKey || t.metaKey) ie(e, -1);else {
                    if (t.shiftKey) return void e.enterEditMode();
                    he(e, t, -1, !1);
                  }
                  break;

                case "ArrowRight":
                  if (t.ctrlKey || t.metaKey) ie(e, 1);else {
                    if (t.shiftKey) return void e.enterEditMode();
                    he(e, t, 1, !1);
                  }
                  break;

                case "ArrowUp":
                  if (t.ctrlKey || t.metaKey) se(e);else {
                    if (t.shiftKey) return void e.enterEditMode();
                    he(e, t, -1, !0);
                  }
                  break;

                case "ArrowDown":
                  if (t.shiftKey && !t.ctrlKey && !t.metaKey) return void e.enterEditMode();
                  he(e, t, 1, !0);
                  break;

                case "Enter":
                  a ? e.setDate(i.viewDate) : i.changeView(s - 1).render();
                  break;

                case "Backspace":
                case "Delete":
                  return void e.enterEditMode();

                default:
                  return void (1 !== t.key.length || t.ctrlKey || t.metaKey || e.enterEditMode());
              }
            } else switch (t.key) {
              case "ArrowDown":
              case "Escape":
                i.show();
                break;

              case "Enter":
                e.update();
                break;

              default:
                return;
            }
            t.preventDefault(), t.stopPropagation();
          }.bind(null, this)], [r, "focus", function (e) {
            e.config.showOnFocus && e.show();
          }.bind(null, this)], [r, "mousedown", function (e, t) {
            var i = t.target;
            (e.picker.active || e.config.showOnClick) && (i._active = i === document.activeElement, i._clicking = setTimeout(function () {
              delete i._active, delete i._clicking;
            }, 2e3));
          }.bind(null, this)], [r, "click", function (e, t) {
            var i = t.target;
            i._clicking && (clearTimeout(i._clicking), delete i._clicking, i._active && e.enterEditMode(), delete i._active, e.config.showOnClick && e.show());
          }.bind(null, this)], [r, "paste", function (e, t) {
            t.clipboardData.types.includes("text/plain") && e.enterEditMode();
          }.bind(null, this)], [document, "mousedown", _e28], [document, "touchstart", _e28], [window, "resize", o.place.bind(o)]]);
        }
      }

      _createClass(me, [{
        key: "active",
        get: function get() {
          return !(!this.picker || !this.picker.active);
        }
      }, {
        key: "pickerElement",
        get: function get() {
          return this.picker ? this.picker.element : void 0;
        }
      }, {
        key: "setOptions",
        value: function setOptions(e) {
          var t = this.picker,
              i = q(e, this);
          Object.assign(this._options, e), Object.assign(this.config, i), t.setOptions(i), pe(this, 3);
        }
      }, {
        key: "show",
        value: function show() {
          this.inputField && this.inputField.disabled || this.picker.show();
        }
      }, {
        key: "hide",
        value: function hide() {
          this.inline || (this.picker.hide(), this.picker.update().changeView(this.config.startView).render());
        }
      }, {
        key: "destroy",
        value: function destroy() {
          return this.hide(), V(this), this.picker.detach(), this.inline || this.inputField.classList.remove("datepicker-input"), delete this.element.datepicker, this;
        }
      }, {
        key: "getDate",
        value: function getDate(e) {
          var _this9 = this;

          var t = e ? function (t) {
            return S(t, e, _this9.config.locale);
          } : function (e) {
            return new Date(e);
          };
          return this.config.multidate ? this.dates.map(t) : this.dates.length > 0 ? t(this.dates[0]) : void 0;
        }
      }, {
        key: "setDate",
        value: function setDate() {
          for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          var i = [].concat(e),
              s = {},
              a = t(e);
          "object" != _typeof(a) || Array.isArray(a) || a instanceof Date || !a || Object.assign(s, i.pop()), ge(this, Array.isArray(i[0]) ? i[0] : i, s);
        }
      }, {
        key: "update",
        value: function update(e) {
          if (this.inline) return;
          var t = {
            clear: !0,
            autohide: !(!e || !e.autohide)
          };
          ge(this, s(this.inputField.value, this.config.dateDelimiter), t);
        }
      }, {
        key: "refresh",
        value: function refresh(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          var i;
          e && "string" != typeof e && (t = e, e = void 0), pe(this, i = "picker" === e ? 2 : "input" === e ? 1 : 3, !t);
        }
      }, {
        key: "enterEditMode",
        value: function enterEditMode() {
          this.inline || !this.picker.active || this.editMode || (this.editMode = !0, this.inputField.classList.add("in-edit"));
        }
      }, {
        key: "exitEditMode",
        value: function exitEditMode(e) {
          if (this.inline || !this.editMode) return;
          var t = Object.assign({
            update: !1
          }, e);
          delete this.editMode, this.inputField.classList.remove("in-edit"), t.update && this.update(t);
        }
      }], [{
        key: "formatDate",
        value: function formatDate(e, t, i) {
          return S(e, t, i && L[i] || L.en);
        }
      }, {
        key: "parseDate",
        value: function parseDate(e, t, i) {
          return M(e, t, i && L[i] || L.en);
        }
      }, {
        key: "locales",
        get: function get() {
          return L;
        }
      }]);

      return me;
    }();

    function we(e) {
      var t = Object.assign({}, e);
      return delete t.inputs, delete t.allowOneSidedRange, delete t.maxNumberOfDates, t;
    }

    function ye(e, t, i, s) {
      F(e, [[i, "changeDate", t]]), new me(i, s, e);
    }

    function ke(e, t) {
      if (e._updating) return;
      e._updating = !0;
      var i = t.target;
      if (void 0 === i.datepicker) return;
      var s = e.datepickers,
          a = {
        render: !1
      },
          n = e.inputs.indexOf(i),
          r = 0 === n ? 1 : 0,
          d = s[n].dates[0],
          o = s[r].dates[0];
      void 0 !== d && void 0 !== o ? 0 === n && d > o ? (s[0].setDate(o, a), s[1].setDate(d, a)) : 1 === n && d < o && (s[0].setDate(d, a), s[1].setDate(o, a)) : e.allowOneSidedRange || void 0 === d && void 0 === o || (a.clear = !0, s[r].setDate(s[n].dates, a)), s[0].picker.update().render(), s[1].picker.update().render(), delete e._updating;
    }

    window.Datepicker = me, window.DateRangePicker = /*#__PURE__*/function () {
      function _class(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, _class);

        var i = Array.isArray(t.inputs) ? t.inputs : Array.from(e.querySelectorAll("input"));
        if (i.length < 2) return;
        e.rangepicker = this, this.element = e, this.inputs = i.slice(0, 2), this.allowOneSidedRange = !!t.allowOneSidedRange;
        var s = ke.bind(null, this),
            a = we(t),
            n = [];
        Object.defineProperty(this, "datepickers", {
          get: function get() {
            return n;
          }
        }), ye(this, s, this.inputs[0], a), ye(this, s, this.inputs[1], a), Object.freeze(n), n[0].dates.length > 0 ? ke(this, {
          target: this.inputs[0]
        }) : n[1].dates.length > 0 && ke(this, {
          target: this.inputs[1]
        });
      }

      _createClass(_class, [{
        key: "dates",
        get: function get() {
          return 2 === this.datepickers.length ? [this.datepickers[0].dates[0], this.datepickers[1].dates[0]] : void 0;
        }
      }, {
        key: "setOptions",
        value: function setOptions(e) {
          this.allowOneSidedRange = !!e.allowOneSidedRange;
          var t = we(e);
          this.datepickers[0].setOptions(t), this.datepickers[1].setOptions(t);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.datepickers[0].destroy(), this.datepickers[1].destroy(), V(this), delete this.element.rangepicker;
        }
      }, {
        key: "getDates",
        value: function getDates(e) {
          var _this10 = this;

          var t = e ? function (t) {
            return S(t, e, _this10.datepickers[0].config.locale);
          } : function (e) {
            return new Date(e);
          };
          return this.dates.map(function (e) {
            return void 0 === e ? e : t(e);
          });
        }
      }, {
        key: "setDates",
        value: function setDates(e, t) {
          var _this$datepickers = _slicedToArray(this.datepickers, 2),
              i = _this$datepickers[0],
              s = _this$datepickers[1],
              a = this.dates;

          this._updating = !0, i.setDate(e), s.setDate(t), delete this._updating, s.dates[0] !== a[1] ? ke(this, {
            target: this.inputs[1]
          }) : i.dates[0] !== a[0] && ke(this, {
            target: this.inputs[0]
          });
        }
      }]);

      return _class;
    }();
  }();
} // Polyfill closest


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
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
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
    toggleTarget.style.top = toggleButton.getBoundingClientRect().top + window.pageYOffset + 'px';
    toggleTarget.style.left = toggleButton.getBoundingClientRect().left + toggleButton.getBoundingClientRect().width / 2 - toggleTarget.getBoundingClientRect().width / 2 + 'px';
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
    });
  }
  /**
   * Create the Constructor object
   */


  var Constructor = function Constructor(selector, options) {
    // Merge user options with defaults
    settings = extend(defaults, options || {});
    var publicAPIs = {};
    var settings;
    var toggleItems;
    publicAPIs.itemEntry = [];
    /**
     * BuiToggle 관련 함수를 적용할 객체 생성
     */

    publicAPIs.createProperties = function (name, target, button) {
      this.name = name;
      this.target = target;
      this.button = button;
    };

    publicAPIs.active = function (toggleName) {
      active(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
    };

    publicAPIs.inactive = function (toggleName) {
      inactive(settings, publicAPIs.itemEntry[toggleName].target, publicAPIs.itemEntry[toggleName].button);
    };

    publicAPIs.toggle = function (toggleName) {
      if (publicAPIs.itemEntry[toggleName].target.classList.contains(settings.activeClass)) {
        publicAPIs.inactive(publicAPIs.itemEntry[toggleName].name);
      } else {
        publicAPIs.active(publicAPIs.itemEntry[toggleName].name);
      }
    };
    /**
     * Setup the DOM with the proper attributes
     */


    publicAPIs.getProperties = function (selector) {
      var name = selector;
      var target = document.getElementById(selector);
      var button = settings.mode === 'tooltip' ? '[data-bui-tooltip-button="' + selector + '"]' : button = '[data-bui-toggle-button="' + selector + '"]';
      publicAPIs.itemEntry[selector] = new publicAPIs.createProperties(name, target, button);
    };

    publicAPIs.appendToggle = function (item) {
      publicAPIs.getProperties(item);
      publicAPIs.actions(item);
    };

    publicAPIs.actions = function (item) {
      var toggleButtons = document.querySelectorAll(publicAPIs.itemEntry[item].button);
      if (!toggleButtons) return;
      Array.prototype.forEach.call(toggleButtons, function (toggleButton) {
        if (settings.event === 'click') {
          toggleButton.addEventListener('click', function (event) {
            event.preventDefault();
            !publicAPIs.itemEntry[item].target.classList.contains('disabled') ? publicAPIs.toggle(publicAPIs.itemEntry[item].name) : null;

            if (settings.mode === 'tooltip') {
              tooltip(settings, publicAPIs.itemEntry[item].target, toggleButton);
            }

            ;
          }, false);
        }

        if (settings.event === 'hover') {
          toggleButton.addEventListener('mouseenter', function (event) {
            publicAPIs.active(publicAPIs.itemEntry[item].name);

            if (settings.mode === 'tooltip') {
              tooltip(settings, publicAPIs.itemEntry[item].target, toggleButton);
            }

            ;
          }, false);
          toggleButton.addEventListener('mouseleave', function () {
            publicAPIs.inactive(publicAPIs.itemEntry[item].name);
          }, false);
        }

        if (settings.event === 'none') {
          document.addEventListener('DOMContentLoaded', function () {
            if (settings.mode === 'tooltip') {
              tooltip(settings, publicAPIs.itemEntry[item].target, toggleButtons[0]);
              console.log(toggleButtons[0]);
            }

            ;
          });
        }
      });
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
      for (var _i4 = 0, _Object$entries = Object.entries(publicAPIs.itemEntry); _i4 < _Object$entries.length; _i4++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        publicAPIs.actions(key);
      }
    };

    ;
    /**
     * Handle click events
     */

    var eventHandler = function eventHandler(event) {};
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
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
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
    container: '.tab-content',

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

  var tabToggle = function tabToggle(settings, tabs) {
    tabs.item.classList.add(settings.activeClass);
    tabs.item.setAttribute('title', '현재 선택된 항목');
    Array.prototype.forEach.call(getSiblings(tabs.item), function (siblingsItem) {
      siblingsItem.classList.remove(settings.activeClass);
      siblingsItem.removeAttribute('title');
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
            settings.eventCallBack.call();
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
 * buiFold
 */


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
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
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
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
    event: 'hover',
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
      Array.prototype.forEach.call(navigations, function (navigation) {// Array.prototype.forEach.call(navigation.querySelectorAll(settings.item), function(naviItem, index) {
        // 	naviItem.addEventListener('mouseenter', function() {
        // 		naviItem.classList.add(settings.activeClass);
        // 		console.log('name');
        // 	});
        // 	naviItem.addEventListener('mouseleave', function() {
        // 		naviItem.classList.remove(settings.activeClass);
        // 	});
        // });
        // Array.prototype.forEach.call(navigation.querySelectorAll('.navi-name:not(:only-child)'), function(naviName) {
        // Array.prototype.forEach.call(navigation.querySelectorAll(settings.name), function(naviName) {
        // 	naviName.addEventListener('focusin', function() {
        // 		naviName.parentElement.classList.add(settings.activeClass);						
        // 		Array.prototype.forEach.call(getSiblings(naviName.parentElement), function(siblingsItem) {
        // 			siblingsItem.classList.remove(settings.activeClass);
        // 		});
        // 	});
        // naviName.addEventListener('focusout', function() {
        // console.log(naviName.closest('.active'));
        // naviName.parentElement.classList.remove(settings.activeClass);
        // });
        // });
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
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
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
        console.log('dd');
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