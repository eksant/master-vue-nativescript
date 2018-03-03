/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("../../profiling");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("../../utils/utils");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("../core/view");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var utils = __webpack_require__(12);
var platformNames;
(function (platformNames) {
    platformNames.android = "Android";
    platformNames.ios = "iOS";
})(platformNames = exports.platformNames || (exports.platformNames = {}));
var Device = (function () {
    function Device() {
    }
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () {
            return "Apple";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "os", {
        get: function () {
            return platformNames.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "osVersion", {
        get: function () {
            if (!this._osVersion) {
                this._osVersion = utils.ios.getter(UIDevice, UIDevice.currentDevice).systemVersion;
            }
            return this._osVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () {
            if (!this._model) {
                this._model = utils.ios.getter(UIDevice, UIDevice.currentDevice).model;
            }
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "sdkVersion", {
        get: function () {
            if (!this._sdkVersion) {
                this._sdkVersion = utils.ios.getter(UIDevice, UIDevice.currentDevice).systemVersion;
            }
            return this._sdkVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "deviceType", {
        get: function () {
            if (!this._deviceType) {
                if (utils.ios.getter(UIDevice, UIDevice.currentDevice).userInterfaceIdiom === 0) {
                    this._deviceType = "Phone";
                }
                else {
                    this._deviceType = "Tablet";
                }
            }
            return this._deviceType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () {
            var userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
            var uuid_key = "TNSUUID";
            var app_uuid = userDefaults.stringForKey(uuid_key);
            if (!app_uuid) {
                app_uuid = NSUUID.UUID().UUIDString;
                userDefaults.setObjectForKey(app_uuid, uuid_key);
                userDefaults.synchronize();
            }
            return app_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "language", {
        get: function () {
            if (!this._language) {
                var languages = utils.ios.getter(NSLocale, NSLocale.preferredLanguages);
                this._language = languages[0];
            }
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "region", {
        get: function () {
            if (!this._region) {
                this._region = utils.ios.getter(NSLocale, NSLocale.currentLocale).objectForKey(NSLocaleCountryCode);
            }
            return this._region;
        },
        enumerable: true,
        configurable: true
    });
    return Device;
}());
var MainScreen = (function () {
    function MainScreen() {
    }
    Object.defineProperty(MainScreen.prototype, "screen", {
        get: function () {
            if (!this._screen) {
                this._screen = utils.ios.getter(UIScreen, UIScreen.mainScreen);
            }
            return this._screen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "widthPixels", {
        get: function () {
            return this.widthDIPs * this.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "heightPixels", {
        get: function () {
            return this.heightDIPs * this.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "scale", {
        get: function () {
            return this.screen.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "widthDIPs", {
        get: function () {
            return this.screen.bounds.size.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "heightDIPs", {
        get: function () {
            return this.screen.bounds.size.height;
        },
        enumerable: true,
        configurable: true
    });
    return MainScreen;
}());
exports.device = new Device();
var screen;
(function (screen) {
    screen.mainScreen = new MainScreen();
})(screen = exports.screen || (exports.screen = {}));
exports.isIOS = true;
//# sourceMappingURL=platform.ios.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("../text-base");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var action_bar_common_1 = __webpack_require__(30);
var image_source_1 = __webpack_require__(31);
__export(__webpack_require__(30));
var TapBarItemHandlerImpl = (function (_super) {
    __extends(TapBarItemHandlerImpl, _super);
    function TapBarItemHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapBarItemHandlerImpl.initWithOwner = function (owner) {
        var handler = TapBarItemHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    TapBarItemHandlerImpl.prototype.tap = function (args) {
        var owner = this._owner.get();
        if (owner) {
            owner._raiseTap();
        }
    };
    TapBarItemHandlerImpl.ObjCExposedMethods = {
        "tap": { returns: interop.types.void, params: [interop.types.id] }
    };
    return TapBarItemHandlerImpl;
}(NSObject));
var ActionItem = (function (_super) {
    __extends(ActionItem, _super);
    function ActionItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ios = {
            position: "left",
            systemIcon: undefined
        };
        return _this;
    }
    Object.defineProperty(ActionItem.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            throw new Error("ActionItem.ios is read-only");
        },
        enumerable: true,
        configurable: true
    });
    return ActionItem;
}(action_bar_common_1.ActionItemBase));
exports.ActionItem = ActionItem;
var NavigationButton = (function (_super) {
    __extends(NavigationButton, _super);
    function NavigationButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NavigationButton;
}(ActionItem));
exports.NavigationButton = NavigationButton;
var ActionBar = (function (_super) {
    __extends(ActionBar, _super);
    function ActionBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._navigationBarHeight = 0;
        return _this;
    }
    Object.defineProperty(ActionBar.prototype, "ios", {
        get: function () {
            var page = this.page;
            if (!page || !page.parent) {
                return;
            }
            var viewController = page.ios;
            if (viewController.navigationController !== null) {
                return viewController.navigationController.navigationBar;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ActionBar.prototype.createNativeView = function () {
        return this.ios;
    };
    ActionBar.prototype._addChildFromBuilder = function (name, value) {
        if (value instanceof NavigationButton) {
            this.navigationButton = value;
        }
        else if (value instanceof ActionItem) {
            this.actionItems.addItem(value);
        }
        else if (value instanceof action_bar_common_1.View) {
            this.titleView = value;
        }
    };
    ActionBar.prototype.update = function () {
        var page = this.page;
        if (!page || !page.parent) {
            return;
        }
        var viewController = page.ios;
        var navigationItem = viewController.navigationItem;
        var navController = page.frame.ios.controller;
        var navigationBar = navController ? navController.navigationBar : null;
        var previousController;
        navigationItem.title = this.title;
        if (this.titleView && this.titleView.ios) {
            navigationItem.titleView = this.titleView.ios;
        }
        else {
            navigationItem.titleView = null;
        }
        var indexOfViewController = navController.viewControllers.indexOfObject(viewController);
        if (indexOfViewController < navController.viewControllers.count && indexOfViewController > 0) {
            previousController = navController.viewControllers[indexOfViewController - 1];
        }
        if (previousController) {
            if (this.navigationButton) {
                var tapHandler = TapBarItemHandlerImpl.initWithOwner(new WeakRef(this.navigationButton));
                var barButtonItem = UIBarButtonItem.alloc().initWithTitleStyleTargetAction(this.navigationButton.text + "", 0, tapHandler, "tap");
                previousController.navigationItem.backBarButtonItem = barButtonItem;
            }
            else {
                previousController.navigationItem.backBarButtonItem = null;
            }
        }
        var img;
        if (this.navigationButton && action_bar_common_1.isVisible(this.navigationButton) && this.navigationButton.icon) {
            img = image_source_1.fromFileOrResource(this.navigationButton.icon);
        }
        if (img && img.ios) {
            var image = img.ios.imageWithRenderingMode(1);
            navigationBar.backIndicatorImage = image;
            navigationBar.backIndicatorTransitionMaskImage = image;
        }
        else {
            navigationBar.backIndicatorImage = null;
            navigationBar.backIndicatorTransitionMaskImage = null;
        }
        if (this.navigationButton) {
            navigationItem.setHidesBackButtonAnimated(!action_bar_common_1.isVisible(this.navigationButton), true);
        }
        this.populateMenuItems(navigationItem);
        this.updateColors(navigationBar);
        this.updateFlatness(navigationBar);
    };
    ActionBar.prototype.populateMenuItems = function (navigationItem) {
        var items = this.actionItems.getVisibleItems();
        var leftBarItems = [];
        var rightBarItems = [];
        for (var i = 0; i < items.length; i++) {
            var barButtonItem = this.createBarButtonItem(items[i]);
            if (items[i].ios.position === "left") {
                leftBarItems.push(barButtonItem);
            }
            else {
                rightBarItems.splice(0, 0, barButtonItem);
            }
        }
        navigationItem.setLeftBarButtonItemsAnimated(leftBarItems, false);
        navigationItem.setRightBarButtonItemsAnimated(rightBarItems, false);
        if (leftBarItems.length > 0) {
            navigationItem.leftItemsSupplementBackButton = true;
        }
    };
    ActionBar.prototype.createBarButtonItem = function (item) {
        var tapHandler = TapBarItemHandlerImpl.initWithOwner(new WeakRef(item));
        item.handler = tapHandler;
        var barButtonItem;
        if (item.actionView && item.actionView.ios) {
            var recognizer = UITapGestureRecognizer.alloc().initWithTargetAction(tapHandler, "tap");
            item.actionView.ios.addGestureRecognizer(recognizer);
            barButtonItem = UIBarButtonItem.alloc().initWithCustomView(item.actionView.ios);
        }
        else if (item.ios.systemIcon !== undefined) {
            var id = item.ios.systemIcon;
            if (typeof id === "string") {
                id = parseInt(id);
            }
            barButtonItem = UIBarButtonItem.alloc().initWithBarButtonSystemItemTargetAction(id, tapHandler, "tap");
        }
        else if (item.icon) {
            var img = image_source_1.fromFileOrResource(item.icon);
            if (img && img.ios) {
                barButtonItem = UIBarButtonItem.alloc().initWithImageStyleTargetAction(img.ios, 0, tapHandler, "tap");
            }
            else {
                throw new Error("Error loading icon from " + item.icon);
            }
        }
        else {
            barButtonItem = UIBarButtonItem.alloc().initWithTitleStyleTargetAction(item.text + "", 0, tapHandler, "tap");
        }
        if (item.text) {
            barButtonItem.isAccessibilityElement = true;
            barButtonItem.accessibilityLabel = item.text;
            barButtonItem.accessibilityTraits = UIAccessibilityTraitButton;
        }
        return barButtonItem;
    };
    ActionBar.prototype.updateColors = function (navBar) {
        var color = this.color;
        if (color) {
            navBar.titleTextAttributes = (_a = {}, _a[NSForegroundColorAttributeName] = color.ios, _a);
            navBar.tintColor = color.ios;
        }
        else {
            navBar.titleTextAttributes = null;
            navBar.tintColor = null;
        }
        var bgColor = this.backgroundColor;
        navBar.barTintColor = bgColor ? bgColor.ios : null;
        var _a;
    };
    ActionBar.prototype._onTitlePropertyChanged = function () {
        var page = this.page;
        if (!page) {
            return;
        }
        if (page.frame) {
            page.frame._updateActionBar();
        }
        var navigationItem = page.ios.navigationItem;
        navigationItem.title = this.title;
    };
    ActionBar.prototype.updateFlatness = function (navBar) {
        if (this.flat) {
            navBar.setBackgroundImageForBarMetrics(UIImage.new(), 0);
            navBar.shadowImage = UIImage.new();
            navBar.translucent = false;
        }
        else {
            navBar.setBackgroundImageForBarMetrics(null, null);
            navBar.shadowImage = null;
            navBar.translucent = true;
        }
    };
    ActionBar.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        var width = action_bar_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = action_bar_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = action_bar_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = action_bar_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var navBarWidth = 0;
        var navBarHeight = 0;
        var frame = this.page.frame;
        if (frame) {
            var navBar = frame.ios.controller.navigationBar;
            if (!navBar.hidden) {
                var desiredSize = action_bar_common_1.layout.measureNativeView(navBar, width, widthMode, height, heightMode);
                navBarWidth = desiredSize.width;
                navBarHeight = desiredSize.height;
            }
        }
        this._navigationBarHeight = navBarHeight;
        if (this.titleView) {
            action_bar_common_1.View.measureChild(this, this.titleView, action_bar_common_1.layout.makeMeasureSpec(width, action_bar_common_1.layout.AT_MOST), action_bar_common_1.layout.makeMeasureSpec(navBarHeight, action_bar_common_1.layout.AT_MOST));
        }
        this.actionItems.getItems().forEach(function (actionItem) {
            if (actionItem.actionView) {
                action_bar_common_1.View.measureChild(_this, actionItem.actionView, action_bar_common_1.layout.makeMeasureSpec(width, action_bar_common_1.layout.AT_MOST), action_bar_common_1.layout.makeMeasureSpec(navBarHeight, action_bar_common_1.layout.AT_MOST));
            }
        });
        this.setMeasuredDimension(navBarWidth, navBarHeight);
    };
    ActionBar.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        action_bar_common_1.View.layoutChild(this, this.titleView, 0, 0, right - left, this._navigationBarHeight);
        this.actionItems.getItems().forEach(function (actionItem) {
            if (actionItem.actionView && actionItem.actionView.ios) {
                var measuredWidth = actionItem.actionView.getMeasuredWidth();
                var measuredHeight = actionItem.actionView.getMeasuredHeight();
                action_bar_common_1.View.layoutChild(_this, actionItem.actionView, 0, 0, measuredWidth, measuredHeight);
            }
        });
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var navigationBar = this.ios;
        if (navigationBar) {
            navigationBar.setNeedsLayout();
        }
    };
    ActionBar.prototype.layoutNativeView = function (left, top, right, bottom) {
        return;
    };
    Object.defineProperty(ActionBar.prototype, "navBar", {
        get: function () {
            var page = this.page;
            if (!page || !page.frame) {
                return undefined;
            }
            return page.frame.ios.controller.navigationBar;
        },
        enumerable: true,
        configurable: true
    });
    ActionBar.prototype[action_bar_common_1.colorProperty.getDefault] = function () {
        return null;
    };
    ActionBar.prototype[action_bar_common_1.colorProperty.setNative] = function (color) {
        var navBar = this.navBar;
        if (color) {
            navBar.tintColor = color.ios;
            navBar.titleTextAttributes = (_a = {}, _a[NSForegroundColorAttributeName] = color.ios, _a);
        }
        else {
            navBar.tintColor = null;
            navBar.titleTextAttributes = null;
        }
        var _a;
    };
    ActionBar.prototype[action_bar_common_1.backgroundColorProperty.getDefault] = function () {
        return null;
    };
    ActionBar.prototype[action_bar_common_1.backgroundColorProperty.setNative] = function (value) {
        var navBar = this.navBar;
        if (navBar) {
            var color = value instanceof action_bar_common_1.Color ? value.ios : value;
            navBar.barTintColor = color;
        }
    };
    ActionBar.prototype[action_bar_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    ActionBar.prototype[action_bar_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    ActionBar.prototype[action_bar_common_1.flatProperty.setNative] = function (value) {
        var navBar = this.navBar;
        if (navBar) {
            this.updateFlatness(navBar);
        }
    };
    return ActionBar;
}(action_bar_common_1.ActionBarBase));
exports.ActionBar = ActionBar;
//# sourceMappingURL=action-bar.ios.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(2);
var Placeholder = (function (_super) {
    __extends(Placeholder, _super);
    function Placeholder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Placeholder.prototype.createNativeView = function () {
        var args = { eventName: Placeholder.creatingViewEvent, object: this, view: undefined, context: this._context };
        this.notify(args);
        return args.view;
    };
    Placeholder.creatingViewEvent = "creatingView";
    return Placeholder;
}(view_1.View));
exports.Placeholder = Placeholder;
//# sourceMappingURL=placeholder.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var layout_base_1 = __webpack_require__(8);
var ProxyViewContainer = (function (_super) {
    __extends(ProxyViewContainer, _super);
    function ProxyViewContainer() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = undefined;
        return _this;
    }
    Object.defineProperty(ProxyViewContainer.prototype, "ios", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyViewContainer.prototype, "android", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProxyViewContainer.prototype, "isLayoutRequested", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ProxyViewContainer.prototype.createNativeView = function () {
        return undefined;
    };
    ProxyViewContainer.prototype._getNativeViewsCount = function () {
        var result = 0;
        this.eachChildView(function (cv) {
            result += cv._getNativeViewsCount();
            return true;
        });
        return result;
    };
    ProxyViewContainer.prototype._eachLayoutView = function (callback) {
        this.eachChildView(function (cv) {
            if (!cv.isCollapsed) {
                cv._eachLayoutView(callback);
            }
            return true;
        });
    };
    ProxyViewContainer.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        if (layout_base_1.traceEnabled()) {
            layout_base_1.traceWrite("ViewContainer._addViewToNativeVisualTree for a child " + child + " ViewContainer.parent: " + this.parent, layout_base_1.traceCategories.ViewHierarchy);
        }
        _super.prototype._addViewToNativeVisualTree.call(this, child);
        var parent = this.parent;
        if (parent instanceof layout_base_1.View) {
            var baseIndex = 0;
            var insideIndex = 0;
            if (parent instanceof layout_base_1.LayoutBase) {
                baseIndex = parent._childIndexToNativeChildIndex(parent.getChildIndex(this));
            }
            if (atIndex !== undefined) {
                insideIndex = this._childIndexToNativeChildIndex(atIndex);
            }
            else {
                insideIndex = this._getNativeViewsCount();
            }
            if (layout_base_1.traceEnabled()) {
                layout_base_1.traceWrite("ProxyViewContainer._addViewToNativeVisualTree at: " + atIndex + " base: " + baseIndex + " additional: " + insideIndex, layout_base_1.traceCategories.ViewHierarchy);
            }
            return parent._addViewToNativeVisualTree(child, baseIndex + insideIndex);
        }
        return false;
    };
    ProxyViewContainer.prototype._removeViewFromNativeVisualTree = function (child) {
        if (layout_base_1.traceEnabled()) {
            layout_base_1.traceWrite("ProxyViewContainer._removeViewFromNativeVisualTree for a child " + child + " ViewContainer.parent: " + this.parent, layout_base_1.traceCategories.ViewHierarchy);
        }
        _super.prototype._removeViewFromNativeVisualTree.call(this, child);
        var parent = this.parent;
        if (parent instanceof layout_base_1.View) {
            return parent._removeViewFromNativeVisualTree(child);
        }
    };
    ProxyViewContainer.prototype._registerLayoutChild = function (child) {
        var parent = this.parent;
        if (parent instanceof layout_base_1.LayoutBase) {
            parent._registerLayoutChild(child);
        }
    };
    ProxyViewContainer.prototype._unregisterLayoutChild = function (child) {
        var parent = this.parent;
        if (parent instanceof layout_base_1.LayoutBase) {
            parent._unregisterLayoutChild(child);
        }
    };
    ProxyViewContainer.prototype._parentChanged = function (oldParent) {
        _super.prototype._parentChanged.call(this, oldParent);
        var addingToParent = this.parent && !oldParent;
        var newLayout = this.parent;
        var oldLayout = oldParent;
        if (addingToParent && newLayout instanceof layout_base_1.LayoutBase) {
            this.eachChildView(function (child) {
                newLayout._registerLayoutChild(child);
                return true;
            });
        }
        else if (oldLayout instanceof layout_base_1.LayoutBase) {
            this.eachChildView(function (child) {
                oldLayout._unregisterLayoutChild(child);
                return true;
            });
        }
    };
    return ProxyViewContainer;
}(layout_base_1.LayoutBase));
exports.ProxyViewContainer = ProxyViewContainer;
//# sourceMappingURL=proxy-view-container.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("../layouts/layout-base");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("./layout-base-common");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(2);
__export(__webpack_require__(2));
var ContentView = (function (_super) {
    __extends(ContentView, _super);
    function ContentView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ContentView.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            var oldView = this._content;
            if (this._content) {
                this._removeView(this._content);
            }
            this._content = value;
            if (this._content) {
                this._addView(this._content);
            }
            this._onContentChanged(oldView, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentView.prototype, "layoutView", {
        get: function () {
            var result;
            if (this._content) {
                var first_1 = true;
                this._content._eachLayoutView(function (child) {
                    if (first_1) {
                        first_1 = false;
                        result = child;
                    }
                    else {
                        throw new Error("More than one layout child inside a ContentView");
                    }
                });
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentView.prototype, "_childrenCount", {
        get: function () {
            if (this._content) {
                return 1;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    ContentView.prototype._onContentChanged = function (oldView, newView) {
    };
    ContentView.prototype._addChildFromBuilder = function (name, value) {
        if (value instanceof view_1.View) {
            this.content = value;
        }
    };
    ContentView.prototype.eachChildView = function (callback) {
        var content = this._content;
        if (content) {
            callback(content);
        }
    };
    ContentView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var result = view_1.View.measureChild(this, this.layoutView, widthMeasureSpec, heightMeasureSpec);
        var width = view_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = view_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = view_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = view_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var measureWidth = Math.max(result.measuredWidth, this.effectiveMinWidth);
        var measureHeight = Math.max(result.measuredHeight, this.effectiveMinHeight);
        var widthAndState = view_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = view_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    ContentView.prototype.onLayout = function (left, top, right, bottom) {
        view_1.View.layoutChild(this, this.layoutView, 0, 0, right - left, bottom - top);
    };
    return ContentView;
}(view_1.CustomLayoutView));
exports.ContentView = ContentView;
ContentView.prototype.recycleNativeView = "auto";
//# sourceMappingURL=content-view.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("./view-common");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("../utils/utils");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("./application-common");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var page_common_1 = __webpack_require__(15);
var application_1 = __webpack_require__(65);
var platform_1 = __webpack_require__(16);
var uiUtils = __webpack_require__(17);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(15));
var utils_1 = __webpack_require__(1);
var getter = utils_1.ios.getter;
var ENTRY = "_entry";
var DELEGATE = "_delegate";
function isBackNavigationTo(page, entry) {
    var frame = page.frame;
    if (!frame) {
        return false;
    }
    if (frame.navigationQueueIsEmpty()) {
        return true;
    }
    else {
        var navigationQueue = frame._navigationQueue;
        for (var i = 0; i < navigationQueue.length; i++) {
            if (navigationQueue[i].entry === entry) {
                return navigationQueue[i].isBackNavigation;
            }
        }
    }
    return false;
}
function isBackNavigationFrom(controller, page) {
    if (!page.frame) {
        return false;
    }
    if (controller.isBackstackCleared || controller.isBackstackSkipped) {
        return false;
    }
    if (controller.navigationController && controller.navigationController.viewControllers.containsObject(controller)) {
        return false;
    }
    return true;
}
var UIViewControllerImpl = (function (_super) {
    __extends(UIViewControllerImpl, _super);
    function UIViewControllerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIViewControllerImpl.initWithOwner = function (owner) {
        var controller = UIViewControllerImpl.new();
        controller._owner = owner;
        controller.automaticallyAdjustsScrollViewInsets = false;
        controller.shown = false;
        return controller;
    };
    UIViewControllerImpl.prototype.viewDidLayoutSubviews = function () {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        if (page_common_1.traceEnabled()) {
            page_common_1.traceWrite(owner + " viewDidLayoutSubviews, isLoaded = " + owner.isLoaded, page_common_1.traceCategories.ViewHierarchy);
        }
        if (!owner.isLoaded) {
            return;
        }
        var modalParent = owner._modalParent;
        if (modalParent) {
            var isFullScreen = !owner._UIModalPresentationFormSheet ||
                (modalParent.nativeViewProtected.traitCollection.horizontalSizeClass === 1);
            var frame = isFullScreen ? getter(UIScreen, UIScreen.mainScreen).bounds : this.view.frame;
            var size = frame.size;
            var width = page_common_1.layout.toDevicePixels(size.width);
            var height = page_common_1.layout.toDevicePixels(size.height);
            var mode = page_common_1.layout.EXACTLY;
            var superViewRotationRadians = void 0;
            if (this.view.superview) {
                var transform = this.view.superview.transform;
                superViewRotationRadians = atan2f(transform.b, transform.a);
            }
            var bottom = height;
            var statusBarHeight = uiUtils.ios.getStatusBarHeight();
            var statusBarVisible = !getter(UIApplication, UIApplication.sharedApplication).statusBarHidden;
            var backgroundSpanUnderStatusBar = owner.backgroundSpanUnderStatusBar;
            if (statusBarVisible && !backgroundSpanUnderStatusBar) {
                height -= statusBarHeight;
            }
            var widthSpec = page_common_1.layout.makeMeasureSpec(width, mode);
            var heightSpec = page_common_1.layout.makeMeasureSpec(height, mode);
            page_common_1.View.measureChild(modalParent, owner, widthSpec, heightSpec);
            var top_1 = ((backgroundSpanUnderStatusBar && isFullScreen) || !isFullScreen) ? 0 : statusBarHeight;
            page_common_1.View.layoutChild(modalParent, owner, 0, top_1, width, bottom);
            if (page_common_1.traceEnabled()) {
                page_common_1.traceWrite(owner + ", native frame = " + NSStringFromCGRect(this.view.frame), page_common_1.traceCategories.Layout);
            }
        }
        else {
            if (!application_1.ios.window) {
                uiUtils.ios._layoutRootView(owner, getter(UIScreen, UIScreen.mainScreen).bounds);
            }
            owner._updateLayout();
        }
    };
    UIViewControllerImpl.prototype.viewWillAppear = function (animated) {
        _super.prototype.viewWillAppear.call(this, animated);
        this.shown = false;
        var page = this._owner.get();
        if (page_common_1.traceEnabled) {
            page_common_1.traceWrite(page + " viewWillAppear", page_common_1.traceCategories.Navigation);
        }
        if (!page) {
            return;
        }
        var frame = this.navigationController ? this.navigationController.owner : null;
        var newEntry = this[ENTRY];
        var modalParent = page._modalParent;
        if (!page._presentedViewController && newEntry && (!frame || frame.currentPage !== page)) {
            var isBack = isBackNavigationTo(page, newEntry);
            page.onNavigatingTo(newEntry.entry.context, isBack, newEntry.entry.bindingContext);
        }
        page._enableLoadedEvents = true;
        if (modalParent) {
            modalParent.frame._addView(page);
        }
        if (frame) {
            if (!page.parent) {
                frame._addView(page);
            }
            else if (page.parent !== frame) {
                throw new Error("Page is already shown on another frame.");
            }
            frame.measurePage(page);
            frame.layoutPage(page);
            page.actionBar.update();
        }
        page._viewWillDisappear = false;
        if (!page.isLoaded) {
            page.onLoaded();
        }
        page._enableLoadedEvents = false;
    };
    UIViewControllerImpl.prototype.viewDidAppear = function (animated) {
        _super.prototype.viewDidAppear.call(this, animated);
        this.shown = true;
        var page = this._owner.get();
        if (page_common_1.traceEnabled()) {
            page_common_1.traceWrite(page + " viewDidAppear", page_common_1.traceCategories.Navigation);
        }
        if (!page) {
            return;
        }
        page._viewWillDisappear = false;
        var navigationController = this.navigationController;
        var frame = navigationController ? navigationController.owner : null;
        if (!page._presentedViewController && frame) {
            var newEntry = this[ENTRY];
            var isBack = isBackNavigationTo(page, newEntry);
            if (frame.currentPage === page && frame._navigationQueue.length === 0) {
                isBack = false;
            }
            frame._updateBackstack(newEntry, isBack);
            frame.setCurrent(newEntry, isBack);
            frame.remeasureFrame();
            frame._updateActionBar(page);
            frame.ios.controller.delegate = this[DELEGATE];
            frame._processNavigationQueue(page);
            if (frame.canGoBack()) {
                navigationController.interactivePopGestureRecognizer.delegate = navigationController;
                navigationController.interactivePopGestureRecognizer.enabled = page.enableSwipeBackNavigation;
            }
            else {
                navigationController.interactivePopGestureRecognizer.enabled = false;
            }
        }
        if (!this.presentedViewController) {
            page._presentedViewController = null;
        }
    };
    UIViewControllerImpl.prototype.viewWillDisappear = function (animated) {
        _super.prototype.viewWillDisappear.call(this, animated);
        var page = this._owner.get();
        if (page_common_1.traceEnabled()) {
            page_common_1.traceWrite(page + " viewWillDisappear", page_common_1.traceCategories.Navigation);
        }
        if (!page) {
            return;
        }
        if (!page._presentedViewController) {
            page._presentedViewController = this.presentedViewController;
        }
        var frame = page.frame;
        if (!page._presentedViewController && frame && frame.currentPage === page) {
            var isBack = isBackNavigationFrom(this, page);
            page.onNavigatingFrom(isBack);
        }
        page._viewWillDisappear = true;
    };
    UIViewControllerImpl.prototype.viewDidDisappear = function (animated) {
        _super.prototype.viewDidDisappear.call(this, animated);
        var page = this._owner.get();
        if (page_common_1.traceEnabled()) {
            page_common_1.traceWrite(page + " viewDidDisappear", page_common_1.traceCategories.Navigation);
        }
        if (!page || page.modal || page._presentedViewController) {
            return;
        }
        var modalParent = page._modalParent;
        page._modalParent = undefined;
        page._UIModalPresentationFormSheet = false;
        if (modalParent) {
            modalParent.frame._removeView(page);
            modalParent._modal = undefined;
        }
        page._enableLoadedEvents = true;
        if (page.isLoaded) {
            page.onUnloaded();
        }
    };
    __decorate([
        profiling_1.profile
    ], UIViewControllerImpl.prototype, "viewDidLayoutSubviews", null);
    __decorate([
        profiling_1.profile
    ], UIViewControllerImpl.prototype, "viewWillAppear", null);
    __decorate([
        profiling_1.profile
    ], UIViewControllerImpl.prototype, "viewDidAppear", null);
    __decorate([
        profiling_1.profile
    ], UIViewControllerImpl.prototype, "viewWillDisappear", null);
    __decorate([
        profiling_1.profile
    ], UIViewControllerImpl.prototype, "viewDidDisappear", null);
    return UIViewControllerImpl;
}(UIViewController));
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super.call(this) || this;
        _this._ios = UIViewControllerImpl.initWithOwner(new WeakRef(_this));
        _this.nativeViewProtected = _this._ios.view;
        _this.nativeViewProtected.backgroundColor = new page_common_1.Color("white").ios;
        return _this;
    }
    Page.prototype.requestLayout = function () {
        _super.prototype.requestLayout.call(this);
        if ((!this.parent || this._modalParent) && this.ios && this.nativeViewProtected) {
            this.nativeViewProtected.setNeedsLayout();
        }
    };
    Page.prototype._onContentChanged = function (oldView, newView) {
        _super.prototype._onContentChanged.call(this, oldView, newView);
        this._removeNativeView(oldView);
        this._addNativeView(newView);
    };
    Page.prototype.onLoaded = function () {
        if (this._enableLoadedEvents) {
            _super.prototype.onLoaded.call(this);
        }
        this.updateActionBar();
    };
    Page.prototype.onUnloaded = function () {
        if (this._enableLoadedEvents) {
            _super.prototype.onUnloaded.call(this);
        }
    };
    Page.prototype._addNativeView = function (view) {
        if (view) {
            if (page_common_1.traceEnabled()) {
                page_common_1.traceWrite("Native: Adding " + view + " to " + this, page_common_1.traceCategories.ViewHierarchy);
            }
            if (view.ios instanceof UIView) {
                this._ios.view.addSubview(view.ios);
            }
            else if (view.ios instanceof UIViewController) {
                this._ios.addChildViewController(view.ios);
                this._ios.view.addSubview(view.ios.view);
            }
        }
    };
    Page.prototype._removeNativeView = function (view) {
        if (view) {
            if (page_common_1.traceEnabled()) {
                page_common_1.traceWrite("Native: Removing " + view + " from " + this, page_common_1.traceCategories.ViewHierarchy);
            }
            if (view.ios instanceof UIView) {
                view.ios.removeFromSuperview();
            }
            else if (view.ios instanceof UIViewController) {
                view.ios.removeFromParentViewController();
                view.ios.view.removeFromSuperview();
            }
        }
    };
    Object.defineProperty(Page.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype._showNativeModalView = function (parent, context, closeCallback, fullscreen) {
        var _this = this;
        _super.prototype._showNativeModalView.call(this, parent, context, closeCallback, fullscreen);
        this._modalParent = parent;
        if (!parent.ios.view.window) {
            throw new Error("Parent page is not part of the window hierarchy. Close the current modal page before showing another one!");
        }
        if (fullscreen) {
            this._ios.modalPresentationStyle = 0;
        }
        else {
            this._ios.modalPresentationStyle = 2;
            this._UIModalPresentationFormSheet = true;
        }
        _super.prototype._raiseShowingModallyEvent.call(this);
        parent.ios.presentViewControllerAnimatedCompletion(this._ios, true, null);
        var transitionCoordinator = getter(parent.ios, parent.ios.transitionCoordinator);
        if (transitionCoordinator) {
            UIViewControllerTransitionCoordinator.prototype.animateAlongsideTransitionCompletion.call(transitionCoordinator, null, function () { return _this._raiseShownModallyEvent(); });
        }
        else {
            this._raiseShownModallyEvent();
        }
    };
    Page.prototype._hideNativeModalView = function (parent) {
        parent.requestLayout();
        parent._ios.dismissModalViewControllerAnimated(true);
        _super.prototype._hideNativeModalView.call(this, parent);
    };
    Page.prototype.updateActionBar = function (disableNavBarAnimation) {
        if (disableNavBarAnimation === void 0) { disableNavBarAnimation = false; }
        var frame = this.frame;
        if (frame) {
            frame._updateActionBar(this, disableNavBarAnimation);
        }
    };
    Page.prototype.updateStatusBar = function () {
        this._updateStatusBarStyle(this.statusBarStyle);
    };
    Page.prototype._updateStatusBarStyle = function (value) {
        var frame = this.frame;
        if (this.frame && value) {
            var navigationController = frame.ios.controller;
            var navigationBar = navigationController.navigationBar;
            navigationBar.barStyle = value === "dark" ? 1 : 0;
        }
    };
    Page.prototype._updateEnableSwipeBackNavigation = function (enabled) {
        var navController = this._ios.navigationController;
        if (this.frame && navController && navController.interactivePopGestureRecognizer) {
            enabled = enabled && this.frame.canGoBack();
            navController.interactivePopGestureRecognizer.enabled = enabled;
        }
    };
    Page.prototype._updateEffectiveLayoutValues = function (parent) {
        _super.prototype._updateEffectiveLayoutValues.call(this, parent);
        if (!this.backgroundSpanUnderStatusBar) {
            var style = this.style;
            var parentHeightMeasureSpec = parent._currentHeightMeasureSpec;
            var parentHeightMeasureSize = page_common_1.layout.getMeasureSpecSize(parentHeightMeasureSpec) - uiUtils.ios.getStatusBarHeight();
            var parentHeightMeasureMode = page_common_1.layout.getMeasureSpecMode(parentHeightMeasureSpec);
            var parentAvailableHeight = parentHeightMeasureMode === page_common_1.layout.UNSPECIFIED ? -1 : parentHeightMeasureSize;
            this.effectiveMarginTop = page_common_1.PercentLength.toDevicePixels(style.marginTop, 0, parentAvailableHeight);
            this.effectiveMarginBottom = page_common_1.PercentLength.toDevicePixels(style.marginBottom, 0, parentAvailableHeight);
        }
    };
    Page.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = page_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = page_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = page_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = page_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var actionBarWidth = 0;
        var actionBarHeight = 0;
        var statusBarHeight = this.backgroundSpanUnderStatusBar ? uiUtils.ios.getStatusBarHeight() : 0;
        if (this.frame && this.frame.parent) {
            statusBarHeight = 0;
        }
        if (this._modalParent && this._UIModalPresentationFormSheet && platform_1.device.deviceType === "Tablet") {
            statusBarHeight = 0;
        }
        if (!this._modalParent && this.frame && this.frame._getNavBarVisible(this)) {
            var actionBarSize = page_common_1.View.measureChild(this, this.actionBar, widthMeasureSpec, page_common_1.layout.makeMeasureSpec(height, page_common_1.layout.AT_MOST));
            actionBarWidth = actionBarSize.measuredWidth;
            actionBarHeight = actionBarSize.measuredHeight;
        }
        var heightSpec = page_common_1.layout.makeMeasureSpec(height - actionBarHeight - statusBarHeight, heightMode);
        var result = page_common_1.View.measureChild(this, this.layoutView, widthMeasureSpec, heightSpec);
        var measureWidth = Math.max(actionBarWidth, result.measuredWidth, this.effectiveMinWidth);
        var measureHeight = Math.max(result.measuredHeight + actionBarHeight, this.effectiveMinHeight);
        var widthAndState = page_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = page_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Page.prototype.onLayout = function (left, top, right, bottom) {
        page_common_1.View.layoutChild(this, this.actionBar, 0, 0, right - left, bottom - top);
        var navigationBarHeight = 0;
        if (this.frame && this.frame._getNavBarVisible(this)) {
            navigationBarHeight = this.actionBar.getMeasuredHeight();
        }
        if (this.frame && this.frame.ios &&
            this.frame.ios.controller.navigationBar &&
            !this.frame.ios.controller.navigationBar.translucent &&
            !this._ios.shown) {
            navigationBarHeight = 0;
        }
        var statusBarHeight = this.backgroundSpanUnderStatusBar ? uiUtils.ios.getStatusBarHeight() : 0;
        if (this.frame && this.frame.parent) {
            statusBarHeight = 0;
        }
        if (this._modalParent && this._UIModalPresentationFormSheet && platform_1.device.deviceType === "Tablet") {
            statusBarHeight = 0;
        }
        page_common_1.View.layoutChild(this, this.layoutView, 0, navigationBarHeight + statusBarHeight, right - left, bottom - top);
    };
    Page.prototype._addViewToNativeVisualTree = function (view) {
        if (view === this.actionBar) {
            return true;
        }
        return _super.prototype._addViewToNativeVisualTree.call(this, view);
    };
    Page.prototype._removeViewFromNativeVisualTree = function (view) {
        if (view === this.actionBar) {
            return;
        }
        _super.prototype._removeViewFromNativeVisualTree.call(this, view);
    };
    Page.prototype[page_common_1.actionBarHiddenProperty.setNative] = function (value) {
        this._updateEnableSwipeBackNavigation(value);
        if (this.isLoaded) {
            this.updateActionBar(true);
        }
    };
    Page.prototype[page_common_1.statusBarStyleProperty.getDefault] = function () {
        return 0;
    };
    Page.prototype[page_common_1.statusBarStyleProperty.setNative] = function (value) {
        var frame = this.frame;
        if (frame) {
            var navigationBar = frame.ios.controller.navigationBar;
            if (typeof value === "string") {
                navigationBar.barStyle = value === "dark" ? 1 : 0;
            }
            else {
                navigationBar.barStyle = value;
            }
        }
    };
    __decorate([
        profiling_1.profile
    ], Page.prototype, "onLoaded", null);
    return Page;
}(page_common_1.PageBase));
exports.Page = Page;
//# sourceMappingURL=page.ios.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("./page-common");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("../../platform");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("../../ui/utils");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("./frame-common");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("./absolute-layout-common");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("./activity-indicator-common");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("./button-common");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("./date-picker-common");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("./dock-layout-common");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("./grid-layout-common");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("./html-view-common");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var image_common_1 = __webpack_require__(27);
__export(__webpack_require__(27));
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super.call(this) || this;
        _this._imageSourceAffectsLayout = true;
        _this.nativeViewProtected = _this._ios = UIImageView.new();
        _this._ios.contentMode = 1;
        _this._ios.userInteractionEnabled = true;
        _this._setNativeClipToBounds();
        return _this;
    }
    Object.defineProperty(Image.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.setTintColor = function (value) {
        if (value && this._ios.image && !this._templateImageWasCreated) {
            this._ios.image = this._ios.image.imageWithRenderingMode(2);
            this._templateImageWasCreated = true;
        }
        else if (this._ios.image && this._templateImageWasCreated) {
            this._templateImageWasCreated = false;
            this._ios.image = this._ios.image.imageWithRenderingMode(0);
        }
        this._ios.tintColor = value ? value.ios : null;
    };
    Image.prototype._setNativeImage = function (nativeImage) {
        this.ios.image = nativeImage;
        this._templateImageWasCreated = false;
        this.setTintColor(this.style.tintColor);
        if (this._imageSourceAffectsLayout) {
            this.requestLayout();
        }
    };
    Image.prototype._setNativeClipToBounds = function () {
        this._ios.clipsToBounds = true;
    };
    Image.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = image_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = image_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = image_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = image_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var nativeWidth = this.imageSource ? image_common_1.layout.toDevicePixels(this.imageSource.width) : 0;
        var nativeHeight = this.imageSource ? image_common_1.layout.toDevicePixels(this.imageSource.height) : 0;
        var measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
        var measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);
        var finiteWidth = widthMode !== image_common_1.layout.UNSPECIFIED;
        var finiteHeight = heightMode !== image_common_1.layout.UNSPECIFIED;
        this._imageSourceAffectsLayout = widthMode !== image_common_1.layout.EXACTLY || heightMode !== image_common_1.layout.EXACTLY;
        if (nativeWidth !== 0 && nativeHeight !== 0 && (finiteWidth || finiteHeight)) {
            var scale = Image.computeScaleFactor(width, height, finiteWidth, finiteHeight, nativeWidth, nativeHeight, this.stretch);
            var resultW = Math.round(nativeWidth * scale.width);
            var resultH = Math.round(nativeHeight * scale.height);
            measureWidth = finiteWidth ? Math.min(resultW, width) : resultW;
            measureHeight = finiteHeight ? Math.min(resultH, height) : resultH;
            if (image_common_1.traceEnabled()) {
                image_common_1.traceWrite("Image stretch: " + this.stretch +
                    ", nativeWidth: " + nativeWidth +
                    ", nativeHeight: " + nativeHeight, image_common_1.traceCategories.Layout);
            }
        }
        var widthAndState = Image.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = Image.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Image.computeScaleFactor = function (measureWidth, measureHeight, widthIsFinite, heightIsFinite, nativeWidth, nativeHeight, imageStretch) {
        var scaleW = 1;
        var scaleH = 1;
        if ((imageStretch === "aspectFill" || imageStretch === "aspectFit" || imageStretch === "fill") &&
            (widthIsFinite || heightIsFinite)) {
            scaleW = (nativeWidth > 0) ? measureWidth / nativeWidth : 0;
            scaleH = (nativeHeight > 0) ? measureHeight / nativeHeight : 0;
            if (!widthIsFinite) {
                scaleW = scaleH;
            }
            else if (!heightIsFinite) {
                scaleH = scaleW;
            }
            else {
                switch (imageStretch) {
                    case "aspectFit":
                        scaleH = scaleW < scaleH ? scaleW : scaleH;
                        scaleW = scaleH;
                        break;
                    case "aspectFill":
                        scaleH = scaleW > scaleH ? scaleW : scaleH;
                        scaleW = scaleH;
                        break;
                }
            }
        }
        return { width: scaleW, height: scaleH };
    };
    Image.prototype[image_common_1.stretchProperty.getDefault] = function () {
        return "aspectFit";
    };
    Image.prototype[image_common_1.stretchProperty.setNative] = function (value) {
        switch (value) {
            case "aspectFit":
                this._ios.contentMode = 1;
                break;
            case "aspectFill":
                this._ios.contentMode = 2;
                break;
            case "fill":
                this._ios.contentMode = 0;
                break;
            case "none":
            default:
                this._ios.contentMode = 9;
                break;
        }
    };
    Image.prototype[image_common_1.tintColorProperty.getDefault] = function () {
        return undefined;
    };
    Image.prototype[image_common_1.tintColorProperty.setNative] = function (value) {
        this.setTintColor(value);
    };
    Image.prototype[image_common_1.imageSourceProperty.getDefault] = function () {
        return undefined;
    };
    Image.prototype[image_common_1.imageSourceProperty.setNative] = function (value) {
        this._setNativeImage(value ? value.ios : null);
    };
    Image.prototype[image_common_1.srcProperty.getDefault] = function () {
        return undefined;
    };
    Image.prototype[image_common_1.srcProperty.setNative] = function (value) {
        this._createImageSourceFromSrc(value);
    };
    return Image;
}(image_common_1.ImageBase));
exports.Image = Image;
//# sourceMappingURL=image.ios.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("./image-common");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("../styling/background");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("./list-picker-common");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("./action-bar-common");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("../../image-source");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("./list-view-common");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("../layouts/stack-layout");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("./progress-common");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("./scroll-view-common");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("./search-bar-common");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var segmented_bar_common_1 = __webpack_require__(38);
var utils_1 = __webpack_require__(1);
__export(__webpack_require__(38));
var SegmentedBarItem = (function (_super) {
    __extends(SegmentedBarItem, _super);
    function SegmentedBarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentedBarItem.prototype._update = function () {
        var parent = this.parent;
        if (parent) {
            var tabIndex = parent.items.indexOf(this);
            var title = this.title;
            title = (title === null || title === undefined) ? "" : title;
            parent.ios.setTitleForSegmentAtIndex(title, tabIndex);
        }
    };
    return SegmentedBarItem;
}(segmented_bar_common_1.SegmentedBarItemBase));
exports.SegmentedBarItem = SegmentedBarItem;
var SegmentedBar = (function (_super) {
    __extends(SegmentedBar, _super);
    function SegmentedBar() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = _this._ios = UISegmentedControl.new();
        _this._selectionHandler = SelectionHandlerImpl.initWithOwner(new WeakRef(_this));
        _this._ios.addTargetActionForControlEvents(_this._selectionHandler, "selected", 4096);
        return _this;
    }
    Object.defineProperty(SegmentedBar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    SegmentedBar.prototype[segmented_bar_common_1.selectedIndexProperty.getDefault] = function () {
        return -1;
    };
    SegmentedBar.prototype[segmented_bar_common_1.selectedIndexProperty.setNative] = function (value) {
        this._ios.selectedSegmentIndex = value;
    };
    SegmentedBar.prototype[segmented_bar_common_1.itemsProperty.getDefault] = function () {
        return null;
    };
    SegmentedBar.prototype[segmented_bar_common_1.itemsProperty.setNative] = function (value) {
        var segmentedControl = this._ios;
        segmentedControl.removeAllSegments();
        var newItems = value;
        if (newItems && newItems.length) {
            newItems.forEach(function (item, index, arr) {
                var title = item.title;
                title = (title === null || title === undefined) ? "" : title;
                segmentedControl.insertSegmentWithTitleAtIndexAnimated(title, index, false);
            });
        }
        segmented_bar_common_1.selectedIndexProperty.coerce(this);
    };
    SegmentedBar.prototype[segmented_bar_common_1.selectedBackgroundColorProperty.getDefault] = function () {
        return this._ios.tintColor;
    };
    SegmentedBar.prototype[segmented_bar_common_1.selectedBackgroundColorProperty.setNative] = function (value) {
        var color = value instanceof segmented_bar_common_1.Color ? value.ios : value;
        this._ios.tintColor = color;
    };
    SegmentedBar.prototype[segmented_bar_common_1.colorProperty.getDefault] = function () {
        return null;
    };
    SegmentedBar.prototype[segmented_bar_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof segmented_bar_common_1.Color ? value.ios : value;
        var bar = this._ios;
        var currentAttrs = bar.titleTextAttributesForState(0);
        var attrs = currentAttrs ? currentAttrs.mutableCopy() : NSMutableDictionary.new();
        attrs.setValueForKey(color, NSForegroundColorAttributeName);
        bar.setTitleTextAttributesForState(attrs, 0);
    };
    SegmentedBar.prototype[segmented_bar_common_1.fontInternalProperty.getDefault] = function () {
        return null;
    };
    SegmentedBar.prototype[segmented_bar_common_1.fontInternalProperty.setNative] = function (value) {
        var font = value ? value.getUIFont(UIFont.systemFontOfSize(utils_1.ios.getter(UIFont, UIFont.labelFontSize))) : null;
        var bar = this._ios;
        var currentAttrs = bar.titleTextAttributesForState(0);
        var attrs = currentAttrs ? currentAttrs.mutableCopy() : NSMutableDictionary.new();
        attrs.setValueForKey(font, NSFontAttributeName);
        bar.setTitleTextAttributesForState(attrs, 0);
    };
    return SegmentedBar;
}(segmented_bar_common_1.SegmentedBarBase));
exports.SegmentedBar = SegmentedBar;
var SelectionHandlerImpl = (function (_super) {
    __extends(SelectionHandlerImpl, _super);
    function SelectionHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionHandlerImpl.initWithOwner = function (owner) {
        var handler = SelectionHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    SelectionHandlerImpl.prototype.selected = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            owner.selectedIndex = sender.selectedSegmentIndex;
        }
    };
    SelectionHandlerImpl.ObjCExposedMethods = {
        "selected": { returns: interop.types.void, params: [UISegmentedControl] }
    };
    return SelectionHandlerImpl;
}(NSObject));
//# sourceMappingURL=segmented-bar.ios.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("./segmented-bar-common");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("./slider-common");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("./stack-layout-common");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("./flexbox-layout-common");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("./switch-common");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var tab_view_common_1 = __webpack_require__(44);
var text_base_1 = __webpack_require__(4);
var image_source_1 = __webpack_require__(31);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(44));
var UITabBarControllerImpl = (function (_super) {
    __extends(UITabBarControllerImpl, _super);
    function UITabBarControllerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITabBarControllerImpl.initWithOwner = function (owner) {
        var handler = UITabBarControllerImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITabBarControllerImpl.prototype.viewDidLayoutSubviews = function () {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView.UITabBarControllerClass.viewDidLayoutSubviews();", tab_view_common_1.traceCategories.Debug);
        }
        _super.prototype.viewDidLayoutSubviews.call(this);
        var owner = this._owner.get();
        if (owner && owner.isLoaded) {
            owner._updateLayout();
        }
    };
    return UITabBarControllerImpl;
}(UITabBarController));
var UITabBarControllerDelegateImpl = (function (_super) {
    __extends(UITabBarControllerDelegateImpl, _super);
    function UITabBarControllerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITabBarControllerDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITabBarControllerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITabBarControllerDelegateImpl.prototype.tabBarControllerShouldSelectViewController = function (tabBarController, viewController) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView.delegate.SHOULD_select(" + tabBarController + ", " + viewController + ");", tab_view_common_1.traceCategories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            var backToMoreWillBeVisible = false;
            owner._handleTwoNavigationBars(backToMoreWillBeVisible);
        }
        return true;
    };
    UITabBarControllerDelegateImpl.prototype.tabBarControllerDidSelectViewController = function (tabBarController, viewController) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView.delegate.DID_select(" + tabBarController + ", " + viewController + ");", tab_view_common_1.traceCategories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            owner._onViewControllerShown(viewController);
        }
    };
    UITabBarControllerDelegateImpl.ObjCProtocols = [UITabBarControllerDelegate];
    return UITabBarControllerDelegateImpl;
}(NSObject));
var UINavigationControllerDelegateImpl = (function (_super) {
    __extends(UINavigationControllerDelegateImpl, _super);
    function UINavigationControllerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UINavigationControllerDelegateImpl.initWithOwner = function (owner) {
        var delegate = UINavigationControllerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UINavigationControllerDelegateImpl.prototype.navigationControllerWillShowViewControllerAnimated = function (navigationController, viewController, animated) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView.moreNavigationController.WILL_show(" + navigationController + ", " + viewController + ", " + animated + ");", tab_view_common_1.traceCategories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            var backToMoreWillBeVisible = owner._ios.viewControllers.containsObject(viewController);
            owner._handleTwoNavigationBars(backToMoreWillBeVisible);
        }
    };
    UINavigationControllerDelegateImpl.prototype.navigationControllerDidShowViewControllerAnimated = function (navigationController, viewController, animated) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView.moreNavigationController.DID_show(" + navigationController + ", " + viewController + ", " + animated + ");", tab_view_common_1.traceCategories.Debug);
        }
        navigationController.navigationBar.topItem.rightBarButtonItem = null;
        var owner = this._owner.get();
        if (owner) {
            owner._onViewControllerShown(viewController);
        }
    };
    UINavigationControllerDelegateImpl.ObjCProtocols = [UINavigationControllerDelegate];
    return UINavigationControllerDelegateImpl;
}(NSObject));
function updateItemTitlePosition(tabBarItem) {
    if (typeof tabBarItem.setTitlePositionAdjustment === "function") {
        tabBarItem.setTitlePositionAdjustment({ horizontal: 0, vertical: -20 });
    }
    else {
        tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -20 };
    }
}
function updateItemIconPosition(tabBarItem) {
    tabBarItem.imageInsets = new UIEdgeInsets({ top: 6, left: 0, bottom: -6, right: 0 });
}
var TabViewItem = (function (_super) {
    __extends(TabViewItem, _super);
    function TabViewItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabViewItem.prototype.setViewController = function (controller) {
        this._iosViewController = controller;
        this.setNativeView(this._nativeView = controller.view);
    };
    TabViewItem.prototype.disposeNativeView = function () {
        this._iosViewController = undefined;
        this.setNativeView(undefined);
    };
    TabViewItem.prototype._update = function () {
        var parent = this.parent;
        var controller = this._iosViewController;
        if (parent && controller) {
            var icon = parent._getIcon(this.iconSource);
            var index_1 = parent.items.indexOf(this);
            var title = text_base_1.getTransformedText(this.title, this.style.textTransform);
            var tabBarItem = UITabBarItem.alloc().initWithTitleImageTag(title, icon, index_1);
            if (!icon) {
                updateItemTitlePosition(tabBarItem);
            }
            else if (!title) {
                updateItemIconPosition(tabBarItem);
            }
            var states = getTitleAttributesForStates(parent);
            applyStatesToItem(tabBarItem, states);
            controller.tabBarItem = tabBarItem;
        }
    };
    TabViewItem.prototype[text_base_1.textTransformProperty.setNative] = function (value) {
        this._update();
    };
    return TabViewItem;
}(tab_view_common_1.TabViewItemBase));
exports.TabViewItem = TabViewItem;
var TabView = (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        var _this = _super.call(this) || this;
        _this._tabBarHeight = 0;
        _this._navBarHeight = 0;
        _this._iconsCache = {};
        _this._ios = UITabBarControllerImpl.initWithOwner(new WeakRef(_this));
        _this.nativeViewProtected = _this._ios.view;
        _this._delegate = UITabBarControllerDelegateImpl.initWithOwner(new WeakRef(_this));
        _this._moreNavigationControllerDelegate = UINavigationControllerDelegateImpl.initWithOwner(new WeakRef(_this));
        return _this;
    }
    TabView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    TabView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        this._ios.moreNavigationController.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(TabView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TabView.prototype._onViewControllerShown = function (viewController) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView._onViewControllerShown(" + viewController + ");", tab_view_common_1.traceCategories.Debug);
        }
        if (this._ios.viewControllers && this._ios.viewControllers.containsObject(viewController)) {
            this.selectedIndex = this._ios.viewControllers.indexOfObject(viewController);
        }
        else {
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView._onViewControllerShown: viewController is not one of our viewControllers", tab_view_common_1.traceCategories.Debug);
            }
        }
    };
    TabView.prototype._handleTwoNavigationBars = function (backToMoreWillBeVisible) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView._handleTwoNavigationBars(backToMoreWillBeVisible: " + backToMoreWillBeVisible + ")", tab_view_common_1.traceCategories.Debug);
        }
        var page = this.page;
        var actionBarVisible = page.frame._getNavBarVisible(page);
        if (backToMoreWillBeVisible && actionBarVisible) {
            page.frame.ios._disableNavBarAnimation = true;
            page.actionBarHidden = true;
            page.frame.ios._disableNavBarAnimation = false;
            this._actionBarHiddenByTabView = true;
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView hid action bar", tab_view_common_1.traceCategories.Debug);
            }
            return;
        }
        if (!backToMoreWillBeVisible && this._actionBarHiddenByTabView) {
            page.frame.ios._disableNavBarAnimation = true;
            page.actionBarHidden = false;
            page.frame.ios._disableNavBarAnimation = false;
            this._actionBarHiddenByTabView = undefined;
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView restored action bar", tab_view_common_1.traceCategories.Debug);
            }
            return;
        }
    };
    TabView.prototype.setViewControllers = function (items) {
        var length = items ? items.length : 0;
        if (length === 0) {
            this._ios.viewControllers = null;
            return;
        }
        var controllers = NSMutableArray.alloc().initWithCapacity(length);
        var states = getTitleAttributesForStates(this);
        for (var i = 0; i < length; i++) {
            var item = items[i];
            var newController = void 0;
            if (item.view.ios instanceof UIViewController) {
                newController = item.view.ios;
            }
            else {
                newController = UIViewController.new();
                newController.view.addSubview(item.view.ios);
            }
            item.setViewController(newController);
            var icon = this._getIcon(item.iconSource);
            var tabBarItem = UITabBarItem.alloc().initWithTitleImageTag((item.title || ""), icon, i);
            if (!icon) {
                updateItemTitlePosition(tabBarItem);
            }
            else if (!item.title) {
                updateItemIconPosition(tabBarItem);
            }
            applyStatesToItem(tabBarItem, states);
            newController.tabBarItem = tabBarItem;
            controllers.addObject(newController);
        }
        this._ios.viewControllers = controllers;
        this._ios.customizableViewControllers = null;
        this._ios.moreNavigationController.delegate = this._moreNavigationControllerDelegate;
    };
    TabView.prototype._getIconRenderingMode = function () {
        switch (this.iosIconRenderingMode) {
            case "alwaysOriginal":
                return 1;
            case "alwaysTemplate":
                return 2;
            case "automatic":
            default:
                return 0;
        }
    };
    TabView.prototype._getIcon = function (iconSource) {
        if (!iconSource) {
            return null;
        }
        var image = this._iconsCache[iconSource];
        if (!image) {
            var is = image_source_1.fromFileOrResource(iconSource);
            if (is && is.ios) {
                var originalRenderedImage = is.ios.imageWithRenderingMode(this._getIconRenderingMode());
                this._iconsCache[iconSource] = originalRenderedImage;
                image = originalRenderedImage;
            }
        }
        return image;
    };
    TabView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            var width = tab_view_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
            var widthMode = tab_view_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
            var height = tab_view_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
            var heightMode = tab_view_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
            this._tabBarHeight = tab_view_common_1.layout.measureNativeView(this._ios.tabBar, width, widthMode, height, heightMode).height;
            var moreNavBarVisible = !!this._ios.moreNavigationController.navigationBar.window;
            this._navBarHeight = moreNavBarVisible ? tab_view_common_1.layout.measureNativeView(this._ios.moreNavigationController.navigationBar, width, widthMode, height, heightMode).height : 0;
            var density = tab_view_common_1.layout.getDisplayDensity();
            var measureWidth = 0;
            var measureHeight = 0;
            var child = this._selectedView;
            if (child) {
                var childHeightMeasureSpec = tab_view_common_1.layout.makeMeasureSpec(height - this._navBarHeight - this._tabBarHeight, heightMode);
                var childSize = tab_view_common_1.View.measureChild(this, child, widthMeasureSpec, childHeightMeasureSpec);
                measureHeight = childSize.measuredHeight;
                measureWidth = childSize.measuredWidth;
            }
            measureWidth = Math.max(measureWidth, this.effectiveMinWidth * density);
            measureHeight = Math.max(measureHeight, this.effectiveMinHeight * density);
            var widthAndState = tab_view_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
            var heightAndState = tab_view_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
            this.setMeasuredDimension(widthAndState, heightAndState);
        }
    };
    TabView.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var child = this._selectedView;
        if (child) {
            tab_view_common_1.View.layoutChild(this, child, 0, this._navBarHeight, right, (bottom - this._navBarHeight - this._tabBarHeight));
        }
    };
    TabView.prototype._updateIOSTabBarColorsAndFonts = function () {
        if (!this.items) {
            return;
        }
        var tabBar = this.ios.tabBar;
        var states = getTitleAttributesForStates(this);
        for (var i = 0; i < tabBar.items.count; i++) {
            applyStatesToItem(tabBar.items[i], states);
        }
    };
    TabView.prototype[tab_view_common_1.selectedIndexProperty.getDefault] = function () {
        return -1;
    };
    TabView.prototype[tab_view_common_1.selectedIndexProperty.setNative] = function (value) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView._onSelectedIndexPropertyChangedSetNativeValue(" + value + ")", tab_view_common_1.traceCategories.Debug);
        }
        if (value > -1) {
            this._ios.selectedIndex = value;
        }
    };
    TabView.prototype[tab_view_common_1.itemsProperty.getDefault] = function () {
        return null;
    };
    TabView.prototype[tab_view_common_1.itemsProperty.setNative] = function (value) {
        this.setViewControllers(value);
        tab_view_common_1.selectedIndexProperty.coerce(this);
    };
    TabView.prototype[tab_view_common_1.tabTextColorProperty.getDefault] = function () {
        return null;
    };
    TabView.prototype[tab_view_common_1.tabTextColorProperty.setNative] = function (value) {
        this._updateIOSTabBarColorsAndFonts();
    };
    TabView.prototype[tab_view_common_1.tabBackgroundColorProperty.getDefault] = function () {
        return this._ios.tabBar.barTintColor;
    };
    TabView.prototype[tab_view_common_1.tabBackgroundColorProperty.setNative] = function (value) {
        this._ios.tabBar.barTintColor = value instanceof tab_view_common_1.Color ? value.ios : value;
    };
    TabView.prototype[tab_view_common_1.selectedTabTextColorProperty.getDefault] = function () {
        return this._ios.tabBar.tintColor;
    };
    TabView.prototype[tab_view_common_1.selectedTabTextColorProperty.setNative] = function (value) {
        this._ios.tabBar.tintColor = value instanceof tab_view_common_1.Color ? value.ios : value;
        this._updateIOSTabBarColorsAndFonts();
    };
    TabView.prototype[tab_view_common_1.fontInternalProperty.getDefault] = function () {
        return null;
    };
    TabView.prototype[tab_view_common_1.fontInternalProperty.setNative] = function (value) {
        this._updateIOSTabBarColorsAndFonts();
    };
    TabView.prototype[tab_view_common_1.iosIconRenderingModeProperty.getDefault] = function () {
        return "automatic";
    };
    TabView.prototype[tab_view_common_1.iosIconRenderingModeProperty.setNative] = function (value) {
        this._iconsCache = {};
        var items = this.items;
        if (items && items.length) {
            for (var i = 0, length_1 = items.length; i < length_1; i++) {
                var item = items[i];
                if (item.iconSource) {
                    item._update();
                }
            }
        }
    };
    __decorate([
        profiling_1.profile
    ], TabView.prototype, "onLoaded", null);
    return TabView;
}(tab_view_common_1.TabViewBase));
exports.TabView = TabView;
function getTitleAttributesForStates(tabView) {
    var result = {};
    var font = tabView.style.fontInternal.getUIFont(UIFont.systemFontOfSize(10));
    var tabItemTextColor = tabView.style.tabTextColor;
    var textColor = tabItemTextColor instanceof tab_view_common_1.Color ? tabItemTextColor.ios : null;
    result.normalState = (_a = {}, _a[NSFontAttributeName] = font, _a);
    if (textColor) {
        result.normalState[UITextAttributeTextColor] = textColor;
    }
    var tabSelectedItemTextColor = tabView.style.selectedTabTextColor;
    var selectedTextColor = tabItemTextColor instanceof tab_view_common_1.Color ? tabSelectedItemTextColor.ios : null;
    result.selectedState = (_b = {}, _b[NSFontAttributeName] = font, _b);
    if (selectedTextColor) {
        result.selectedState[UITextAttributeTextColor] = selectedTextColor;
    }
    return result;
    var _a, _b;
}
function applyStatesToItem(item, states) {
    item.setTitleTextAttributesForState(states.normalState, 0);
    item.setTitleTextAttributesForState(states.selectedState, 4);
}
//# sourceMappingURL=tab-view.ios.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("./tab-view-common");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("./text-field-common");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("../editable-text-base");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("./time-picker-common");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("./web-view-common");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("./wrap-layout-common");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("../ui/core/view");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ImageGallery__ = __webpack_require__(106);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      msg: "ios"
    };
  },
  components: {
    ImageGallery: __WEBPACK_IMPORTED_MODULE_0__components_ImageGallery__["a" /* default */]
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      images: [{ src: 'https://art.nativescript-vue.org/NativeScript-Vue.png', alt: 'img1' }, { src: 'https://art.nativescript-vue.org/NativeScript-Vue-Inverted.png', alt: 'img2' }, { src: 'https://art.nativescript-vue.org/NativeScript-Vue-Black.png', alt: 'img3' }]
    };
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

console.log('entry.native.js')
const Vue = __webpack_require__(55)
const App = __webpack_require__(105).default

new Vue({
  template: `
    <Page>
        <StackLayout>
            <Label text="Hello World"/>
            <App/>
        </StackLayout>
    </Page>
  `,

  components: {
    App
  }
}).$start();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * NativeScript-Vue v1.3.0
 * (Using Vue v2.5.13)
 * (c) 2017-2018 rigor789
 * Released under the MIT license.
 */



function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var layoutBase = __webpack_require__(56);
var contentView = __webpack_require__(10);
var view = __webpack_require__(57);
var platform = __webpack_require__(3);
var application = __webpack_require__(61);
var application__default = _interopDefault(application);
var page = __webpack_require__(14);
var frame = __webpack_require__(66);

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;


if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer = false;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: 'development' !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: 'development' !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ('development' !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    'development' !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    'development' !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      'development' !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    'development' !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && 'development' !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ('development' !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ('development' !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */


function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ('development' !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      'development' !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      'development' !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      'development' !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ('development' !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */



var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);









var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ('development' !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ('development' !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ('development' !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

function updateAttrs(oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      elm.setAttribute(key, cur);
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      elm.setAttribute(key);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');


var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    !data.staticClass &&
    !data.class &&
    (!oldData || (!oldData.staticClass && !oldData.class))
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var class_ = {
  create: updateClass,
  update: updateClass
}

var target$1;

function add$1(event, handler, once, capture) {
  if (capture) {
    console.log('bubble phase not supported');
    return
  }
  if (once) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function(ev) {
      var res =
        arguments.length === 1
          ? oldHandler(ev)
          : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, null, null, _target);
      }
    };
  }
  target$1.addEventListener(event, handler);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event);
}

function updateDOMListeners(oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

var normalize = cached(camelize);

function createStyle(oldVnode, vnode) {
  // console.log(`\t\t ===> createStyle(${oldVnode}, ${vnode})`)
  if (!vnode.data.staticStyle) {
    updateStyle(oldVnode, vnode);
    return
  }
  var elm = vnode.elm;
  var staticStyle = vnode.data.staticStyle;
  for (var name in staticStyle) {
    if (staticStyle[name]) {
      elm.setStyle(normalize(name), staticStyle[name]);
    }
  }
  updateStyle(oldVnode, vnode);
}

function updateStyle(oldVnode, vnode) {
  if (!oldVnode.data.style && !vnode.data.style) {
    return
  }
  var cur, name;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style || {};
  var style = vnode.data.style || {};

  var needClone = style.__ob__;

  // handle array syntax
  if (Array.isArray(style)) {
    style = vnode.data.style = toObject$1(style);
  }

  // clone the style for future updates,
  // in case the user mutates the style object in-place.
  if (needClone) {
    style = vnode.data.style = extend({}, style);
  }

  for (name in oldStyle) {
    if (!style[name]) {
      elm.setStyle(normalize(name), '');
    }
  }
  for (name in style) {
    cur = style[name];
    elm.setStyle(normalize(name), cur);
  }
}

function toObject$1(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

var style = {
  create: createStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
// Transition property/event sniffing




if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass =
    isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear
    ? typeof appear === 'function' ? appear : enter
    : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear
    ? appearCancelled || enterCancelled
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration) ? duration.enter : duration
  );

  if ('development' !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = (el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  }));

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode =
        parent && parent._pending && parent._pending[vnode.key];
      if (
        pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            //whenTransitionEnds(el, type, cb)
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration) ? duration.leave : duration
  );

  if ('development' !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = (el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  }));

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[
        vnode.key
      ] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              //whenTransitionEnds(el, type, cb)
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns) ? invokerFns[0] : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
}

var platformModules = [attrs, class_, events, style, transition]

var elementMap = new Map();

var defaultViewMeta = {
  skipAddToDom: false,
  isUnaryTag: false,
  tagNamespace: '',
  canBeLeftOpen: false,
  model: {
    prop: 'text',
    event: 'textChange'
  }
};

function normalizeElementName(elementName) {
  return elementName.replace(/-/g, '').toLowerCase()
}

function registerElement(elementName, resolver, meta) {
  elementName = normalizeElementName(elementName);

  meta = Object.assign({}, defaultViewMeta, meta);

  if (elementMap.has(elementName)) {
    throw new Error(("Element for " + elementName + " already registered."))
  }

  var entry = { resolver: resolver, meta: meta };
  elementMap.set(elementName.toLowerCase(), entry);
}

function getViewClass(elementName) {
  elementName = normalizeElementName(elementName);
  var entry = elementMap.get(elementName.toLowerCase());

  if (!entry) {
    throw new TypeError(("No known component for element " + elementName + "."))
  }

  try {
    return entry.resolver()
  } catch (e) {
    throw new TypeError(("Could not load view for: " + elementName + ". " + e))
  }
}

function getViewMeta(nodeName) {
  nodeName = normalizeElementName(nodeName);

  var meta = defaultViewMeta;
  var entry = elementMap.get(nodeName.toLowerCase());

  if (entry && entry.meta) {
    meta = entry.meta;
  }

  return meta
}

function isKnownView(elementName) {
  elementName = normalizeElementName(elementName);

  return elementMap.has(elementName.toLowerCase())
}

registerElement(
  'AbsoluteLayout',
  function () { return __webpack_require__(68).AbsoluteLayout; }
);
registerElement(
  'ActivityIndicator',
  function () { return __webpack_require__(69).ActivityIndicator; }
);
registerElement('Border', function () { return __webpack_require__(70).Border; });
registerElement('Button', function () { return __webpack_require__(72).Button; });
registerElement(
  'ContentView',
  function () { return __webpack_require__(10).ContentView; }
);
registerElement(
  'DatePicker',
  function () { return __webpack_require__(74).DatePicker; },
  {
    model: {
      prop: 'date',
      event: 'dateChange'
    }
  }
);
registerElement(
  'DockLayout',
  function () { return __webpack_require__(75).DockLayout; }
);
registerElement(
  'GridLayout',
  function () { return __webpack_require__(76).GridLayout; }
);
registerElement(
  'HtmlView',
  function () { return __webpack_require__(77).HtmlView; }
);
registerElement('Image', function () { return __webpack_require__(26).Image; });
registerElement('img', function () { return __webpack_require__(26).Image; });
registerElement('Label', function () { return __webpack_require__(78).Label; });
registerElement(
  'ListPicker',
  function () { return __webpack_require__(79).ListPicker; },
  {
    model: {
      prop: 'selectedIndex',
      event: 'selectedIndexChange'
    }
  }
);
registerElement(
  'NativeActionBar',
  function () { return __webpack_require__(5).ActionBar; }
);
registerElement(
  'NativeActionItem',
  function () { return __webpack_require__(5).ActionItem; }
);
registerElement(
  'NativeListView',
  function () { return __webpack_require__(80).ListView; }
);
registerElement(
  'NativeNavigationButton',
  function () { return __webpack_require__(5).NavigationButton; }
);
registerElement('Page', function () { return __webpack_require__(14).Page; }, {
  skipAddToDom: true
});
registerElement(
  'Placeholder',
  function () { return __webpack_require__(6).Placeholder; }
);
registerElement(
  'Progress',
  function () { return __webpack_require__(82).Progress; }
);
registerElement(
  'ProxyViewContainer',
  function () { return __webpack_require__(7).ProxyViewContainer; }
);
registerElement(
  'Repeater',
  function () { return __webpack_require__(83).Repeater; }
);
registerElement(
  'ScrollView',
  function () { return __webpack_require__(88).ScrollView; }
);
registerElement(
  'SearchBar',
  function () { return __webpack_require__(89).SearchBar; },
  {
    model: {
      prop: 'text',
      event: 'textChange'
    }
  }
);
registerElement(
  'SegmentedBar',
  function () { return __webpack_require__(37).SegmentedBar; },
  {
    model: {
      prop: 'selectedIndex',
      event: 'selectedIndexChange'
    }
  }
);
registerElement(
  'SegmentedBarItem',
  function () { return __webpack_require__(37).SegmentedBarItem; }
);
registerElement('Slider', function () { return __webpack_require__(91).Slider; }, {
  model: {
    prop: 'value',
    event: 'valueChange'
  }
});
registerElement(
  'StackLayout',
  function () { return __webpack_require__(92).StackLayout; }
);
registerElement(
  'FlexboxLayout',
  function () { return __webpack_require__(93).FlexboxLayout; }
);
registerElement('Switch', function () { return __webpack_require__(94).Switch; }, {
  model: {
    prop: 'checked',
    event: 'checkedChange'
  }
});

registerElement(
  'NativeTabView',
  function () { return __webpack_require__(43).TabView; },
  {
    model: {
      prop: 'selectedIndex',
      event: 'selectedIndexChange'
    }
  }
);
registerElement(
  'NativeTabViewItem',
  function () { return __webpack_require__(43).TabViewItem; },
  {
    skipAddToDom: true
  }
);

registerElement(
  'TextField',
  function () { return __webpack_require__(95).TextField; }
);
registerElement(
  'TextView',
  function () { return __webpack_require__(96).TextView; }
);
registerElement(
  'TimePicker',
  function () { return __webpack_require__(97).TimePicker; },
  {
    model: {
      prop: 'time',
      event: 'timeChange'
    }
  }
);
registerElement(
  'WebView',
  function () { return __webpack_require__(98).WebView; }
);
registerElement(
  'WrapLayout',
  function () { return __webpack_require__(99).WrapLayout; }
);
registerElement(
  'FormattedString',
  function () { return __webpack_require__(100).FormattedString; }
);
registerElement('Span', function () { return __webpack_require__(104).Span; });

registerElement(
  'DetachedContainer',
  function () { return __webpack_require__(7).ProxyViewContainer; },
  {
    skipAddToDom: true
  }
);
registerElement(
  'DetachedText',
  function () { return __webpack_require__(6).Placeholder; },
  {
    skipAddToDom: true
  }
);
registerElement(
  'Comment',
  function () { return __webpack_require__(6).Placeholder; }
);
registerElement(
  'Document',
  function () { return __webpack_require__(7).ProxyViewContainer; },
  {
    skipAddToDom: true
  }
);

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var isobject = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isObjectObject(o) {
  return isobject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

var isPlainObject$1 = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) { return false; }

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') { return false; }

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) { return false; }

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

var isExtendable = function isExtendable(val) {
  return isPlainObject$1(val) || typeof val === 'function' || Array.isArray(val);
};

/*!
 * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var assignSymbols = function(receiver, objects) {
  var arguments$1 = arguments;

  if (receiver === null || typeof receiver === 'undefined') {
    throw new TypeError('expected first argument to be an object.');
  }

  if (typeof objects === 'undefined' || typeof Symbol === 'undefined') {
    return receiver;
  }

  if (typeof Object.getOwnPropertySymbols !== 'function') {
    return receiver;
  }

  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var target = Object(receiver);
  var len = arguments.length, i = 0;

  while (++i < len) {
    var provider = Object(arguments$1[i]);
    var names = Object.getOwnPropertySymbols(provider);

    for (var j = 0; j < names.length; j++) {
      var key = names[j];

      if (isEnumerable.call(provider, key)) {
        target[key] = provider[key];
      }
    }
  }
  return target;
};

var extendShallow = Object.assign || function(obj/* objects*/) {
  var arguments$1 = arguments;

  if (obj === null || typeof obj === 'undefined') {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  if (!isObject$2(obj)) {
    obj = {};
  }
  for (var i = 1; i < arguments.length; i++) {
    var val = arguments$1[i];
    if (isString(val)) {
      val = toObject$2(val);
    }
    if (isObject$2(val)) {
      assign(obj, val);
      assignSymbols(obj, val);
    }
  }
  return obj;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn$1(b, key)) {
      a[key] = b[key];
    }
  }
}

function isString(val) {
  return (val && typeof val === 'string');
}

function toObject$2(str) {
  var obj = {};
  for (var i in str) {
    obj[i] = str[i];
  }
  return obj;
}

function isObject$2(val) {
  return (val && typeof val === 'object') || isExtendable(val);
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn$1(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

var splitString = function(str, options, fn) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (typeof options === 'function') {
    fn = options;
    options = null;
  }

  // allow separator to be defined as a string
  if (typeof options === 'string') {
    options = { sep: options };
  }

  var opts = extendShallow({sep: '.'}, options);
  var quotes = opts.quotes || ['"', "'", '`'];
  var brackets;

  if (opts.brackets === true) {
    brackets = {
      '<': '>',
      '(': ')',
      '[': ']',
      '{': '}'
    };
  } else if (opts.brackets) {
    brackets = opts.brackets;
  }

  var tokens = [];
  var stack = [];
  var arr = [''];
  var sep = opts.sep;
  var len = str.length;
  var idx = -1;
  var closeIdx;

  function expected() {
    if (brackets && stack.length) {
      return brackets[stack[stack.length - 1]];
    }
  }

  while (++idx < len) {
    var ch = str[idx];
    var next = str[idx + 1];
    var tok = { val: ch, idx: idx, arr: arr, str: str };
    tokens.push(tok);

    if (ch === '\\') {
      tok.val = keepEscaping(opts, str, idx) === true ? (ch + next) : next;
      tok.escaped = true;
      if (typeof fn === 'function') {
        fn(tok);
      }
      arr[arr.length - 1] += tok.val;
      idx++;
      continue;
    }

    if (brackets && brackets[ch]) {
      stack.push(ch);
      var e = expected();
      var i = idx + 1;

      if (str.indexOf(e, i + 1) !== -1) {
        while (stack.length && i < len) {
          var s = str[++i];
          if (s === '\\') {
            s++;
            continue;
          }

          if (quotes.indexOf(s) !== -1) {
            i = getClosingQuote(str, s, i + 1);
            continue;
          }

          e = expected();
          if (stack.length && str.indexOf(e, i + 1) === -1) {
            break;
          }

          if (brackets[s]) {
            stack.push(s);
            continue;
          }

          if (e === s) {
            stack.pop();
          }
        }
      }

      closeIdx = i;
      if (closeIdx === -1) {
        arr[arr.length - 1] += ch;
        continue;
      }

      ch = str.slice(idx, closeIdx + 1);
      tok.val = ch;
      tok.idx = idx = closeIdx;
    }

    if (quotes.indexOf(ch) !== -1) {
      closeIdx = getClosingQuote(str, ch, idx + 1);
      if (closeIdx === -1) {
        arr[arr.length - 1] += ch;
        continue;
      }

      if (keepQuotes(ch, opts) === true) {
        ch = str.slice(idx, closeIdx + 1);
      } else {
        ch = str.slice(idx + 1, closeIdx);
      }

      tok.val = ch;
      tok.idx = idx = closeIdx;
    }

    if (typeof fn === 'function') {
      fn(tok, tokens);
      ch = tok.val;
      idx = tok.idx;
    }

    if (tok.val === sep && tok.split !== false) {
      arr.push('');
      continue;
    }

    arr[arr.length - 1] += tok.val;
  }

  return arr;
};

function getClosingQuote(str, ch, i, brackets) {
  var idx = str.indexOf(ch, i);
  if (str.charAt(idx - 1) === '\\') {
    return getClosingQuote(str, ch, idx + 1);
  }
  return idx;
}

function keepQuotes(ch, opts) {
  if (opts.keepDoubleQuotes === true && ch === '"') { return true; }
  if (opts.keepSingleQuotes === true && ch === "'") { return true; }
  return opts.keepQuotes;
}

function keepEscaping(opts, str, idx) {
  if (typeof opts.keepEscaping === 'function') {
    return opts.keepEscaping(str, idx);
  }
  return opts.keepEscaping === true || str[idx + 1] === '\\';
}

/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var isExtendable$3 = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};

var extendShallow$2 = function extend(o/* objects*/) {
  var arguments$1 = arguments;

  if (!isExtendable$3(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments$1[i];

    if (isExtendable$3(obj)) {
      assign$1(o, obj);
    }
  }
  return o;
};

function assign$1(a, b) {
  for (var key in b) {
    if (hasOwn$2(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn$2(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

var setValue = function(obj, prop, val) {
  if (!isExtendable$3(obj)) {
    return obj;
  }

  if (Array.isArray(prop)) {
    prop = [].concat.apply([], prop).join('.');
  }

  if (typeof prop !== 'string') {
    return obj;
  }

  var keys = splitString(prop, {sep: '.', brackets: true});
  var len = keys.length;
  var idx = -1;
  var current = obj;

  while (++idx < len) {
    var key = keys[idx];
    if (idx !== len - 1) {
      if (!isExtendable$3(current[key])) {
        current[key] = {};
      }
      current = current[key];
      continue;
    }

    if (isPlainObject$1(current[key]) && isPlainObject$1(val)) {
      current[key] = extendShallow$2({}, current[key], val);
    } else {
      current[key] = val;
    }
  }

  return obj;
};

function isView(view$$1) {
  return view$$1 instanceof view.View
}

function isLayout(view$$1) {
  return view$$1 instanceof layoutBase.LayoutBase
}

function isContentView(view$$1) {
  return view$$1 instanceof contentView.ContentView
}

function insertChild(parentNode, childNode, atIndex) {
  if ( atIndex === void 0 ) atIndex = -1;

  if (!parentNode || childNode.meta.skipAddToDom) {
    return
  }

  var parentView = parentNode.nativeView;
  var childView = childNode.nativeView;

  if (isLayout(parentView)) {
    if (childView.parent === parentView) {
      var index = parentView.getChildIndex(childView);
      if (index !== -1) {
        parentView.removeChild(childView);
      }
    }
    if (atIndex !== -1) {
      parentView.insertChild(childView, atIndex);
    } else {
      parentView.addChild(childView);
    }
  } else if (isContentView(parentView)) {
    if (childNode.nodeType === 8) {
      parentView._addView(childView, atIndex);
    } else {
      parentView.content = childView;
    }
  } else if (parentView && parentView._addChildFromBuilder) {
    parentView._addChildFromBuilder(
      childNode._nativeView.constructor.name,
      childView
    );
  } else {
    // throw new Error("Parent can"t contain children: " + parent.nodeName + ", " + parent);
  }
}

function removeChild(parentNode, childNode) {
  if (!parentNode || childNode.meta.skipAddToDom) {
    return
  }

  var parentView = parentNode.nativeView;
  var childView = childNode.nativeView;

  if (isLayout(parentView)) {
    parentView.removeChild(childView);
  } else if (isContentView(parentView)) {
    if (parentView.content === childView) {
      parentView.content = null;
    }

    if (childNode.nodeType === 8) {
      parentView._removeView(childView);
    }
  } else if (isView(parentView)) {
    parentView._removeView(childView);
  } else {
    // throw new Error("Unknown parent type: " + parent);
  }
}

var XML_ATTRIBUTES = Object.freeze([
  'style',
  'rows',
  'columns',
  'fontAttributes'
]);

var ViewNode = function ViewNode() {
  this.nodeType = null;
  this._tagName = null;
  this.parentNode = null;
  this.childNodes = [];
  this.prevSibling = null;
  this.nextSibling = null;

  this._ownerDocument = null;
  this._nativeView = null;
  this._meta = null;

  /* istanbul ignore next
       * make vue happy :)
       */
  this.hasAttribute = this.removeAttribute = function () { return false; };
};

var prototypeAccessors$1 = { tagName: { configurable: true },firstChild: { configurable: true },lastChild: { configurable: true },nativeView: { configurable: true },meta: { configurable: true },ownerDocument: { configurable: true } };

/* istanbul ignore next */
ViewNode.prototype.toString = function toString () {
  return ((this.constructor.name) + "(" + (this.tagName) + ")")
};

prototypeAccessors$1.tagName.set = function (name) {
  this._tagName = normalizeElementName(name);
};

prototypeAccessors$1.tagName.get = function () {
  return this._tagName
};

prototypeAccessors$1.firstChild.get = function () {
  return this.childNodes.length ? this.childNodes[0] : null
};

prototypeAccessors$1.lastChild.get = function () {
  return this.childNodes.length
    ? this.childNodes[this.childNodes.length - 1]
    : null
};

prototypeAccessors$1.nativeView.get = function () {
  return this._nativeView
};

prototypeAccessors$1.nativeView.set = function (view$$1) {
  if (this._nativeView) {
    throw new Error("Can't override native view.")
  }

  this._nativeView = view$$1;
};

prototypeAccessors$1.meta.get = function () {
  if (this._meta) {
    return this._meta
  }

  return (this._meta = getViewMeta(this.tagName))
};

/* istanbul ignore next */
prototypeAccessors$1.ownerDocument.get = function () {
  if (this._ownerDocument) {
    return this._ownerDocument
  }

  var el = this;
  while ((el = el.parentNode).nodeType !== 9) {
    // do nothing
  }

  return (this._ownerDocument = el)
};

ViewNode.prototype.getAttribute = function getAttribute (key) {
  return this.nativeView[key]
};

/* istanbul ignore next */
ViewNode.prototype.setAttribute = function setAttribute (key, value) {
  try {
    if (XML_ATTRIBUTES.indexOf(key) !== -1) {
      this.nativeView._applyXmlAttribute(key, value);
    } else if (platform.isAndroid && key.startsWith('android:')) {
      setValue(this.nativeView, key.replace('android:', ''), value);
    } else if (platform.isIOS && key.startsWith('ios:')) {
      setValue(this.nativeView, key.replace('ios:', ''), value);
    } else {
      setValue(this.nativeView, key, value);
    }
  } catch (e) {
    // ignore
  }
};

/* istanbul ignore next */
ViewNode.prototype.setStyle = function setStyle (property, value) {
  if (!(value = value.trim()).length) {
    return
  }

  if (property.endsWith('Align')) {
    // NativeScript uses Alignment instead of Align, this ensures that text-align works
    property += 'ment';
  }
  this.nativeView.style[property] = value;
};

/* istanbul ignore next */
ViewNode.prototype.setText = function setText (text) {
  if (this.nodeType === 3) {
    this.parentNode.setText(text);
  } else {
    this.setAttribute('text', text);
  }
};

/* istanbul ignore next */
ViewNode.prototype.addEventListener = function addEventListener (event, handler) {
  this.nativeView.on(event, handler);
};

/* istanbul ignore next */
ViewNode.prototype.removeEventListener = function removeEventListener (event) {
  this.nativeView.off(event);
};

ViewNode.prototype.insertBefore = function insertBefore (childNode, referenceNode) {
  if (!childNode) {
    throw new Error("Can't insert child.")
  }

  if (referenceNode && referenceNode.parentNode !== this) {
    throw new Error(
      "Can't insert child, because the reference node has a different parent."
    )
  }

  if (childNode.parentNode && childNode.parentNode !== this) {
    throw new Error(
      "Can't insert child, because it already has a different parent."
    )
  }

  if (childNode.parentNode === this) {
    throw new Error("Can't insert child, because it is already a child.")
  }

  var index = this.childNodes.indexOf(referenceNode);

  childNode.parentNode = this;
  childNode.nextSibling = referenceNode;
  childNode.prevSibling = this.childNodes[index - 1];

  referenceNode.prevSibling = childNode;
  this.childNodes.splice(index, 0, childNode);

  insertChild(this, childNode, index);
};

ViewNode.prototype.appendChild = function appendChild (childNode) {
  if (!childNode) {
    throw new Error("Can't append child.")
  }

  if (childNode.parentNode && childNode.parentNode !== this) {
    throw new Error(
      "Can't append child, because it already has a different parent."
    )
  }

  if (childNode.parentNode === this) {
    throw new Error("Can't append child, because it is already a child.")
  }

  childNode.parentNode = this;

  if (this.lastChild) {
    childNode.prevSibling = this.lastChild;
    this.lastChild.nextSibling = childNode;
  }

  this.childNodes.push(childNode);

  insertChild(this, childNode, this.childNodes.length - 1);
};

ViewNode.prototype.removeChild = function removeChild$$1 (childNode) {
  if (!childNode) {
    throw new Error("Can't remove child.")
  }

  if (!childNode.parentNode) {
    throw new Error("Can't remove child, because it has no parent.")
  }

  if (childNode.parentNode !== this) {
    throw new Error("Can't remove child, because it has a different parent.")
  }

  childNode.parentNode = null;

  if (childNode.prevSibling) {
    childNode.prevSibling.nextSibling = childNode.nextSibling;
  }

  if (childNode.nextSibling) {
    childNode.nextSibling.prevSibling = childNode.prevSibling;
  }

  this.childNodes = this.childNodes.filter(function (node) { return node !== childNode; });

  removeChild(this, childNode);
};

Object.defineProperties( ViewNode.prototype, prototypeAccessors$1 );

var VUE_ELEMENT_REF = '__vue_element_ref__';

var ElementNode = (function (ViewNode$$1) {
  function ElementNode(tagName) {
    ViewNode$$1.call(this);

    this.nodeType = 1;
    this.tagName = tagName;

    var viewClass = getViewClass(tagName);
    this._nativeView = new viewClass();
    this._nativeView[VUE_ELEMENT_REF] = this;
  }

  if ( ViewNode$$1 ) ElementNode.__proto__ = ViewNode$$1;
  ElementNode.prototype = Object.create( ViewNode$$1 && ViewNode$$1.prototype );
  ElementNode.prototype.constructor = ElementNode;

  ElementNode.prototype.appendChild = function appendChild (childNode) {
    ViewNode$$1.prototype.appendChild.call(this, childNode);

    if (childNode.nodeType === 3) {
      this.setText(childNode.text);
    }
  };

  ElementNode.prototype.insertBefore = function insertBefore (childNode, referenceNode) {
    ViewNode$$1.prototype.insertBefore.call(this, childNode, referenceNode);

    if (childNode.nodeType === 3) {
      this.setText(childNode.text);
    }
  };

  ElementNode.prototype.removeChild = function removeChild (childNode) {
    ViewNode$$1.prototype.removeChild.call(this, childNode);

    if (childNode.nodeType === 3) {
      this.setText('');
    }
  };

  return ElementNode;
}(ViewNode));

var TextNode = (function (ElementNode$$1) {
  function TextNode(text) {
    ElementNode$$1.call(this, 'comment');

    this.nodeType = 8;
    this.text = text;
  }

  if ( ElementNode$$1 ) TextNode.__proto__ = ElementNode$$1;
  TextNode.prototype = Object.create( ElementNode$$1 && ElementNode$$1.prototype );
  TextNode.prototype.constructor = TextNode;

  return TextNode;
}(ElementNode));

var TextNode$1 = (function (ViewNode$$1) {
  function TextNode(text) {
    ViewNode$$1.call(this);

    this.nodeType = 3;
    this.text = text;

    this._meta = {
      skipAddToDom: true
    };
  }

  if ( ViewNode$$1 ) TextNode.__proto__ = ViewNode$$1;
  TextNode.prototype = Object.create( ViewNode$$1 && ViewNode$$1.prototype );
  TextNode.prototype.constructor = TextNode;

  TextNode.prototype.setText = function setText (text) {
    this.text = text;
    this.parentNode.setText(text);
  };

  return TextNode;
}(ViewNode));

var DocumentNode = (function (ViewNode$$1) {
  function DocumentNode() {
    ViewNode$$1.call(this);

    this.nodeType = 9;
    this.documentElement = new ElementNode('document');

    // make static methods accessible via this
    this.createComment = this.constructor.createComment;
    this.createElement = this.constructor.createElement;
    this.createElementNS = this.constructor.createElementNS;
    this.createTextNode = this.constructor.createTextNode;
  }

  if ( ViewNode$$1 ) DocumentNode.__proto__ = ViewNode$$1;
  DocumentNode.prototype = Object.create( ViewNode$$1 && ViewNode$$1.prototype );
  DocumentNode.prototype.constructor = DocumentNode;

  DocumentNode.createComment = function createComment (text) {
    return new TextNode(text)
  };

  DocumentNode.createElement = function createElement (tagName) {
    return new ElementNode(tagName)
  };

  DocumentNode.createElementNS = function createElementNS (namespace, tagName) {
    return new ElementNode(namespace + ':' + tagName)
  };

  DocumentNode.createTextNode = function createTextNode (text) {
    return new TextNode$1(text)
  };

  return DocumentNode;
}(ViewNode));

var isReservedTag$1 = makeMap('template', true);

var _Vue;

function setVue(Vue) {
  _Vue = Vue;
}

var canBeLeftOpenTag = function(el) {
  return getViewMeta(el).canBeLeftOpenTag
};

var isUnaryTag = function(el) {
  return getViewMeta(el).isUnaryTag
};

function mustUseProp$1() {
  // console.log('mustUseProp')
}

function getTagNamespace$1(el) {
  return getViewMeta(el).tagNamespace
}

function isUnknownElement$1(el) {
  return !isKnownView(el)
}

function isPage(el) {
  return el && el.tagName === 'page'
}



var VUE_VERSION = '2.5.13';
var NS_VUE_VERSION = '1.3.0';

var infoTrace = once(function () {
  console.log(
    "NativeScript-Vue has \"Vue.config.silent\" set to true, to see output logs set it to false."
  );
});

function trace(message) {
  if (_Vue && _Vue.config.silent) {
    return infoTrace()
  }

  console.log(
    ("{NSVue (Vue: " + VUE_VERSION + " | NSVue: " + NS_VUE_VERSION + ")} -> " + message)
  );
}

function before(original, thisArg, wrap) {
  var __slice = Array.prototype.slice;
  return function() {
    var args = __slice.call(arguments);
    wrap.apply(null, args);
    original.apply(thisArg, args);
  }
}

function after(original, thisArg, wrap) {
  var __slice = Array.prototype.slice;
  return function() {
    var args = __slice.call(arguments);
    wrap.apply(null, args);
    original.apply(thisArg, args);
  }
}

function deepProxy(object, depth) {
  if ( depth === void 0 ) depth = 0;

  return new Proxy(object, {
    get: function get(target, key) {
      if (key === 'toString' || key === 'valueOf') {
        return function () { return ''; }
      }

      if (key === Symbol.toPrimitive) {
        return function (hint) { return hint; }
      }

      if (depth > 10) {
        throw new Error('deepProxy over 10 deep.')
      }
      return deepProxy({}, depth + 1)
    }
  })
}

var namespaceMap$1 = {};

function createElement(tagName, vnode) {
  trace(("CreateElement(" + tagName + ")"));
  return DocumentNode.createElement(tagName)
}

function createElementNS(namespace, tagName) {
  trace(("CreateElementNS(" + namespace + "#" + tagName + ")"));
  return DocumentNode.createElementNS(namespace, tagName)
}

function createTextNode(text) {
  trace(("CreateTextNode(" + text + ")"));
  return DocumentNode.createTextNode(text)
}

function createComment(text) {
  trace(("CreateComment(" + text + ")"));

  return DocumentNode.createComment(text)
}

function insertBefore(parentNode, newNode, referenceNode) {
  trace(("InsertBefore(" + parentNode + ", " + newNode + ", " + referenceNode + ")"));
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild$1(node, child) {
  trace(("RemoveChild(" + node + ", " + child + ")"));
  node.removeChild(child);
}

function appendChild(node, child) {
  trace(("AppendChild(" + node + ", " + child + ")"));

  node.appendChild(child);
}

function parentNode(node) {
  trace(("ParentNode(" + node + ")"));

  return node.parentNode
}

function nextSibling(node) {
  trace(("NextSibling(" + node + ")"));

  return node.nextSibling
}

function tagName(elementNode) {
  trace(("TagName(" + elementNode + ")"));

  return elementNode.tagName
}

function setTextContent(node, text) {
  trace(("SetTextContent(" + node + ", " + text + ")"));

  node.setText(text);
}

function setAttribute(node, key, val) {
  trace(("SetAttribute(" + node + ", " + key + ", " + val + ")"));

  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	namespaceMap: namespaceMap$1,
	createElement: createElement,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild$1,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});

var he = {
  decode: decode
}

function decode(html) {
  // todo?
  return html
}

/*  */

var isUnaryTag$1 = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag$1 = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag = options.isUnaryTag || no;
  var canBeLeftOpenTag = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ('development' !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ('development' !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    'development' !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$1;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$1 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$1(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$1,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        'development' !== 'production' && warn$1(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ('development' !== 'production' && el.tag === 'template') {
      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$1(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}

function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$1(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ('development' !== 'production' && children[i].text !== ' ') {
        warn$1(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ('development' !== 'production' && el.key) {
      warn$1(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ('development' !== 'production' && slotScope) {
        warn$1(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ('development' !== 'production' && el.attrsMap['v-for']) {
        warn$1(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$1);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ('development' !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$1(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      'development' !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$1('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ('development' !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      'development' !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ('development' !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ('development' !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ('development' !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1(el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var class_$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
}

var normalize$1 = cached(camelize);

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  var ref = parseStaticStyle(staticStyle, options);
  var dynamic = ref.dynamic;
  var styleResult = ref.styleResult;
  if ('development' !== 'production' && dynamic) {
    warn(
      "style=\"" + (String(staticStyle)) + "\": " +
        'Interpolation inside attributes has been deprecated. ' +
        'Use v-bind or the colon shorthand instead.'
    );
  }
  if (!dynamic && styleResult) {
    el.staticStyle = styleResult;
  }
  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  } else if (dynamic) {
    el.styleBinding = styleResult;
  }
}

function genData$2(el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:" + (el.styleBinding) + ",";
  }
  return data
}

function parseStaticStyle(staticStyle, options) {
  // "width: 200px; height: 200px;" -> {width: 200, height: 200}
  // "width: 200px; height: {{y}}" -> {width: 200, height: y}
  var dynamic = false;
  var styleResult = '';
  if (staticStyle) {
    var styleList = staticStyle
      .trim()
      .split(';')
      .map(function (style) {
        var result = style.trim().split(':');
        if (result.length !== 2) {
          return
        }
        var key = normalize$1(result[0].trim());
        var value = result[1].trim();
        var dynamicValue = parseText(value, options.delimiters);
        if (dynamicValue) {
          dynamic = true;
          return key + ':' + dynamicValue
        }
        return key + ':' + JSON.stringify(value)
      })
      .filter(function (result) { return result; });
    if (styleList.length) {
      styleResult = '{' + styleList.join(',') + '}';
    }
  }
  return { dynamic: dynamic, styleResult: styleResult }
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
}

function preTransformNode(el) {
  if (normalizeElementName(el.tag) !== 'listview') {
    return
  }

  var vfor = getAndRemoveAttr(el, 'v-for');
  delete el.attrsMap['v-for'];
  if ('development' !== 'production' && vfor) {
    warn(
      "The v-for directive is not supported on a " + (el.tag) + ", " +
        'Use the "for" attribute instead. For example, instead of ' +
        "<" + (el.tag) + " v-for=\"" + vfor + "\"> use <" + (el.tag) + " for=\"" + vfor + "\">."
    );
  }

  var exp = getAndRemoveAttr(el, 'for') || vfor;
  if (!exp) { return }

  var res = parseFor(exp);
  if (!res) {
    {
      warn(("Invalid for expression: " + exp));
    }
    return
  }

  addRawAttr(el, ':items', res.for);
  addRawAttr(el, '+alias', res.alias);

  if (res.iterator1) {
    addRawAttr(el, '+index', res.iterator1);
  }
}

var listView = {
  preTransformNode: preTransformNode
}

function preTransformNode$1(el) {
  if (el.parent && el.parent.tag === 'v-template') {
    var alias = el.parent.parent.attrsMap['+alias'] || 'item';
    var index = el.parent.parent.attrsMap['+index'] || '$index';
    el.slotScope = buildScopeString(alias, index);
  }
}

var vTemplate = {
  preTransformNode: preTransformNode$1
}

function buildScopeString(alias, index) {
  return ("{ " + alias + ", " + index + ", $even, $odd }")
}

// transforms ~test -> v-view:test
function transformNode$2(el) {
  var attr = Object.keys(el.attrsMap).find(function (attr) { return attr.startsWith('~'); });

  if (attr) {
    var attrName = attr.substr(1);
    var ref = attrName.split('.');
    var arg = ref[0];
    var modifiers = ref.slice(1);
    modifiers = modifiers.reduce(function (mods, mod) {
      mods[mod] = true;
      return mods
    }, {});
    getAndRemoveAttr(el, attr);
    addDirective(el, 'view', ("v-view:" + attrName), '', arg, modifiers);
  }
}

var view$1 = {
  transformNode: transformNode$2
}

var modules$1 = [class_$1, style$1, vTemplate, listView, view$1]

function model(el, dir) {
  if (el.type === 1 && isKnownView(el.tag)) {
    genDefaultModel(el, dir.value, dir.modifiers);
  } else {
    genComponentModel(el, dir.value, dir.modifiers);
  }
}

function genDefaultModel(el, value, modifiers) {
  var ref = modifiers || {};
  var trim = ref.trim;
  var number = ref.number;
  var ref$1 = getViewMeta(el.tag).model;
  var prop = ref$1.prop;
  var event = ref$1.event;

  var valueExpression = "$event.value" + (trim ? '.trim()' : '');

  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);

  addAttr(el, prop, ("(" + value + ")"));
  addHandler(el, event, code, null, true);
}

var directives$1 = {
  model: model
}

var baseOptions = {
  modules: modules$1,
  directives: directives$1,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp$1,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag$1,
  getTagNamespace: getTagNamespace$1,
  preserveWhitespace: false,
  staticKeys: genStaticKeys(modules$1)
};

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    'development' !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      'development' !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ('development' !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ('development' !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ('development' !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ('development' !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      'development' !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic$1(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic$1(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic$1 (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      'development' !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement$1(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement$1(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement$1 (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    'development' !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ('development' !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement$1(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ('development' !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$2 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$2++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ('development' !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ('development' !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ('development' !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ('development' !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ('development' !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue.version = '2.5.13';

var ActionBar = {
  template: "\n    <native-action-bar ~actionBar v-bind=\"$attrs\" v-on=\"$listeners\">\n      <slot></slot>\n    </native-action-bar>\n  "
}

var ActionItem = {
  template: "\n    <native-action-item ref=\"actionItem\" v-bind=\"$attrs\" v-on=\"$listeners\">\n      <slot></slot>\n    </native-action-item>\n  "
}

var ref$2 = __webpack_require__(3);
var isAndroid$1 = ref$2.isAndroid;

var android = {
  name: 'android',
  functional: true,
  render: function render(h, ref) {
    var children = ref.children;

    if (isAndroid$1) {
      return children[0]
    }
  }
}

var ref$3 = __webpack_require__(3);
var isIOS$1 = ref$3.isIOS;

var ios = {
  name: 'ios',
  functional: true,
  render: function render(h, ref) {
    var children = ref.children;

    if (isIOS$1) {
      return children[0]
    }
  }
}

var VUE_VIEW = '__vueVNodeRef__';

var tid = 0;
var VTemplate = {
  name: 'v-template',

  props: {
    name: {
      type: String
    },
    if: {
      type: String
    }
  },

  mounted: function mounted() {
    if (!this.$scopedSlots.default) {
      return
    }

    this.$templates = this.$el.parentNode.$templates = this.$parent.$templates =
      this.$parent.$templates || new TemplateBag();
    this.$templates.registerTemplate(
      this.$props.name || (this.$props.if ? ("v-template-" + (tid++)) : 'default'),
      this.$props.if,
      this.$scopedSlots.default
    );
  },

  render: function render(h) {}
}

var TemplateBag = function TemplateBag() {
  this._templateMap = new Map();
};

var prototypeAccessors$2 = { selectorFn: { configurable: true } };

TemplateBag.prototype.registerTemplate = function registerTemplate (name, condition, scopedFn) {
  this._templateMap.set(name, {
    scopedFn: scopedFn,
    conditionFn: this.getConditionFn(condition),
    keyedTemplate: new VueKeyedTemplate(name, scopedFn)
  });
};

prototypeAccessors$2.selectorFn.get = function () {
  var self = this;
  return function templateSelectorFn(item) {
    var iterator = self._templateMap.entries();
    var curr;
    while ((curr = iterator.next().value)) {
      var name = curr[0];
        var conditionFn = curr[1].conditionFn;
      try {
        if (conditionFn(item)) {
          return name
        }
      } catch (err) {}
    }
    return 'default'
  }
};

TemplateBag.prototype.getConditionFn = function getConditionFn (condition) {
  return new Function('ctx', ("with(ctx) { return !!(" + condition + ") }"))
};

TemplateBag.prototype.getKeyedTemplate = function getKeyedTemplate (name) {
  return this._templateMap.get(name).keyedTemplate
};

TemplateBag.prototype.patchTemplate = function patchTemplate (name, context, oldVnode) {
  var vnode = this._templateMap.get(name).scopedFn(context);
  var nativeView = patch(oldVnode, vnode).nativeView;
  nativeView[VUE_VIEW] = vnode;

  return nativeView
};

TemplateBag.prototype.getAvailable = function getAvailable () {
  return Array.from(this._templateMap.keys())
};

TemplateBag.prototype.getKeyedTemplates = function getKeyedTemplates () {
  return Array.from(this._templateMap.values()).map(
    function (ref) {
        var keyedTemplate = ref.keyedTemplate;

        return keyedTemplate;
    }
  )
};

Object.defineProperties( TemplateBag.prototype, prototypeAccessors$2 );

var VueKeyedTemplate = function VueKeyedTemplate(key, scopedFn) {
  this._key = key;
  this._scopedFn = scopedFn;
};

var prototypeAccessors$1$1 = { key: { configurable: true } };

prototypeAccessors$1$1.key.get = function () {
  return this._key
};

VueKeyedTemplate.prototype.createView = function createView () {
  var vnode = this._scopedFn(deepProxy({}));
  var nativeView = patch(null, vnode).nativeView;
  nativeView[VUE_VIEW] = vnode;
  return nativeView
};

Object.defineProperties( VueKeyedTemplate.prototype, prototypeAccessors$1$1 );

var ListView = {
  name: 'list-view',
  props: {
    items: {
      type: Array,
      required: true
    },
    '+alias': {
      type: String,
      default: 'item'
    },
    '+index': {
      type: String
    }
  },

  template: "\n    <native-list-view\n      ref=\"listView\" \n      :items=\"items\"\n      v-bind=\"$attrs\"\n      v-on=\"listeners\" \n      @itemTap=\"onItemTap\"\n      @itemLoading=\"onItemLoading\"\n    >\n      <slot />\n    </native-list-view>\n  ",

  watch: {
    items: {
      handler: function handler(newVal) {
        this.$refs.listView.setAttribute('items', newVal);
        this.$refs.listView.nativeView.refresh();
      },
      deep: true
    }
  },

  created: function created() {
    // we need to remove the itemTap handler from a clone of the $listeners
    // object because we are emitting the event ourselves with added data.
    var listeners = Object.assign({}, this.$listeners);
    delete listeners.itemTap;
    this.listeners = listeners;
  },

  mounted: function mounted() {
    var this$1 = this;

    this.getItemContext = function (item, index) { return getItemContext(item, index, this$1.$props['+alias'], this$1.$props['+index']); };

    this.$refs.listView.setAttribute('items', this.items);
    this.$refs.listView.setAttribute(
      '_itemTemplatesInternal',
      this.$templates.getKeyedTemplates()
    );
    this.$refs.listView.setAttribute('_itemTemplateSelector', function (item, index) {
      return this$1.$templates.selectorFn(this$1.getItemContext(item, index))
    });
  },

  methods: {
    onItemTap: function onItemTap(args) {
      this.$emit(
        'itemTap',
        Object.assign({ item: this.items[args.index] }, args)
      );
    },
    onItemLoading: function onItemLoading(args) {
      var index = args.index;
      var items = args.object.items;

      var currentItem =
        typeof items.getItem === 'function'
          ? items.getItem(index)
          : items[index];

      var name = args.object._itemTemplateSelector(currentItem, index, items);
      var context = this.getItemContext(currentItem, index);
      var oldVnode = args.view && args.view[VUE_VIEW];

      args.view = this.$templates.patchTemplate(name, context, oldVnode);
    }
  }
}

function getItemContext(item, index, alias, index_alias) {
  var obj;

  return ( obj = {}, obj[alias] = item, obj[index_alias || '$index'] = index, obj.$even = index % 2 === 0, obj.$odd = index % 2 !== 0, obj)
}

var NavigationButton = {
  template: "<native-navigation-button v-bind=\"$attrs\" v-on=\"$listeners\" />"
}

var TabView = {
  name: 'tab-view',

  model: {
    prop: 'tab',
    event: 'tabChange'
  },

  props: {
    tab: {
      type: Number,
      default: 0
    }
  },

  render: function render(h) {
    var this$1 = this;

    return h(
      'native-tab-view',
      {
        ref: 'tabView',
        on: {
          selectedIndexChange: function (ref) {
            var value = ref.value;

            return this$1.$emit('tabChange', value);
    }
        },
        attrs: {
          selectedIndex: this.$props.tab
        }
      },
      this.$slots.default
    )
  },

  methods: {
    registerTab: function registerTab(tabView) {
      var items = this.$refs.tabView.nativeView.items || [];

      this.$refs.tabView.setAttribute('items', items.concat([tabView]));
    }
  }
}

var TabViewItem = {
  name: 'tab-view-item',

  template: "<native-tab-view-item ref=\"tabViewItem\"><slot></slot></native-tab-view-item>",

  mounted: function mounted() {
    if (this.$el.childNodes.length > 1) {
      warn('TabViewItem should contain only 1 root element', this);
    }

    var _nativeView = this.$refs.tabViewItem.nativeView;
    _nativeView.view = this.$el.childNodes[0].nativeView;
    this.$parent.registerTab(_nativeView);
  }
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ('development' !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ('development' !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

var platformComponents = {
  ActionBar: ActionBar,
  ActionItem: ActionItem,
  android: android,
  ios: ios,
  ListView: ListView,
  NavigationButton: NavigationButton,
  TabView: TabView,
  TabViewItem: TabViewItem,
  transition: Transition,
  VTemplate: VTemplate
}

function show(el, show) {
  el.setAttribute('visibility', show ? 'visible' : 'collapsed');
}

var show$1 = {
  inserted: function inserted(el, ref) {
    var value = ref.value;

    show(el, value);
  },
  update: function update(el, ref) {
    var value = ref.value;

    show(el, value);
  }
}

var view$2 = {
  inserted: function inserted(el, ref) {
    var arg = ref.arg;
    var modifiers = ref.modifiers;

    var parent = el.parentNode.nativeView;

    if (parent) {
      if (modifiers.array) {
        parent[arg] = (parent[arg] || []).push(el.nativeView);
      } else {
        parent[arg] = el.nativeView;
      }
    }
  }
}

var platformDirectives = {
  show: show$1,
  view: view$2
}

var VUE_VM_REF = '__vue_vm_ref__';

Vue.config.mustUseProp = mustUseProp$1;
Vue.config.isReservedTag = isReservedTag$1;
Vue.config.isUnknownElement = isUnknownElement$1;

Vue.$document = Vue.prototype.$document = new DocumentNode();

Vue.registerElement = registerElement;

Vue.options.directives = platformDirectives;
Vue.options.components = platformComponents;

Vue.prototype.__patch__ = patch;

Vue.prototype.$start = function() {
  this.__is_root__ = true;

  var placeholder = this.$document.createComment('placeholder');

  this.$mount(placeholder);
};

var mount = function(el, hydrating) {
  if (this.__is_root__ && !this.__started__) {
    var self = this;
    application.start({
      create: function create() {
        // Call mountComponent in the create callback when the IOS app loop has started
        // https://github.com/rigor789/nativescript-vue/issues/24
        mountComponent(self, el, hydrating);
        self.__started__ = true;

        var page$$1 = isPage(self.$el) ? self.$el.nativeView : new page.Page();

        if (!isPage(self.$el)) {
          page$$1.content = self.$el.nativeView;
        }

        page$$1[VUE_VM_REF] = self;

        return page$$1
      }
    });
  } else {
    mountComponent(this, el, hydrating);
  }
};

Vue.prototype.$mount = function(el, hydrating) {
  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template && typeof template !== 'string') {
      warn('invalid template option: ' + template, this);
      return this
    }

    if (template) {
      var ref = compileToFunctions(
        template,
        {
          delimiters: options.delimiters
        },
        this
      );
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;
    }
  }
  return mount.call(this, el, hydrating)
};

Vue.compile = compileToFunctions;
Vue.prototype.$renderTemplate = function(template, context, oldVnode) {
  var slot = template;
  if (typeof template !== 'function') {
    slot = this.$scopedSlots[template]
      ? this.$scopedSlots[template]
      : this.$scopedSlots.default;
  }

  var vnode = slot(context)[0];
  this.__patch__(oldVnode, vnode);

  return vnode
};

var arrayMap = function (xs, f) {
    if (xs.map) { return xs.map(f); }
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = xs[i];
        if (hasOwn$3.call(xs, i)) { res.push(f(x, i, xs)); }
    }
    return res;
};

var hasOwn$3 = Object.prototype.hasOwnProperty;

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) { return arr.indexOf(obj); }
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) { return i; }
  }
  return -1;
};

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var hasOwn$4 = Object.prototype.hasOwnProperty;
var toString$1 = Object.prototype.toString;

var foreach = function forEach (obj, fn, ctx) {
    if (toString$1.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn$4.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};

var hasOwn$5 = Object.prototype.hasOwnProperty;

var arrayReduce = function (xs, f, acc) {
    var hasAcc = arguments.length >= 3;
    if (hasAcc && xs.reduce) { return xs.reduce(f, acc); }
    if (xs.reduce) { return xs.reduce(f); }
    
    for (var i = 0; i < xs.length; i++) {
        if (!hasOwn$5.call(xs, i)) { continue; }
        if (!hasAcc) {
            acc = xs[i];
            hasAcc = true;
            continue;
        }
        acc = f(acc, xs[i], i);
    }
    return acc;
};

var hasOwn$6 = Object.prototype.hasOwnProperty;
var toString$2 = Object.prototype.toString;

var isFunction = function (fn) {
	return (typeof fn === 'function' && !(fn instanceof RegExp)) || toString$2.call(fn) === '[object Function]';
};

var foreach$2 = function forEach(obj, fn) {
	if (!isFunction(fn)) {
		throw new TypeError('iterator must be a function');
	}
	var i, k,
		isString = typeof obj === 'string',
		l = obj.length,
		context = arguments.length > 2 ? arguments[2] : null;
	if (l === +l) {
		for (i = 0; i < l; i++) {
			if (context === null) {
				fn(isString ? obj.charAt(i) : obj[i], i, obj);
			} else {
				fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
			}
		}
	} else {
		for (k in obj) {
			if (hasOwn$6.call(obj, k)) {
				if (context === null) {
					fn(obj[k], k, obj);
				} else {
					fn.call(context, obj[k], k, obj);
				}
			}
		}
	}
};

var toString$3 = Object.prototype.toString;

var isArguments = function isArguments(value) {
	var str = toString$3.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString$3.call(value.callee) === '[object Function]';
	}
	return isArguments;
};

// modified from https://github.com/es-shims/es5-shim
var has$1 = Object.prototype.hasOwnProperty;
var toString$4 = Object.prototype.toString;
var hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString');
var hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype');
var dontEnums = [
		"toString",
		"toLocaleString",
		"valueOf",
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"constructor"
	];

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object',
		isFunction = toString$4.call(object) === '[object Function]',
		isArguments$$1 = isArguments(object),
		theKeys = [];

	if (!isObject && !isFunction && !isArguments$$1) {
		throw new TypeError("Object.keys called on a non-object");
	}

	if (isArguments$$1) {
		foreach$2(object, function (value, index) {
			theKeys.push(index);
		});
	} else {
		var name,
			skipProto = hasProtoEnumBug && isFunction;

		for (name in object) {
			if (!(skipProto && name === 'prototype') && has$1.call(object, name)) {
				theKeys.push(name);
			}
		}
	}

	if (hasDontEnumBug) {
		var ctor = object.constructor,
			skipConstructor = ctor && ctor.prototype === object;

		foreach$2(dontEnums, function (dontEnum) {
			if (!(skipConstructor && dontEnum === 'constructor') && has$1.call(object, dontEnum)) {
				theKeys.push(dontEnum);
			}
		});
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (!Object.keys) {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

var objectKeys = keysShim;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var json3 = createCommonjsModule(function (module, exports) {
/*! JSON v3.3.0 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function (root) {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof undefined === "function" && undefined.amd;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context.
  // Rhino exports a `global` function instead.
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the objectgs prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: A set of primitive types used by `isHostType`.
      var PrimitiveTypes = {
        "boolean": 1,
        "number": 1,
        "string": 1,
        "undefined": 1
      };

      // Internal: Determines if the given object `property` value is a
      // non-primitive.
      var isHostType = function (object, property) {
        var type = typeof object[property];
        return type == "object" ? !!object[property] : !PrimitiveTypes[type];
      };

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && isHostType(object, "hasOwnProperty") ? object.hasOwnProperty : isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)){  }
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++){  }
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++){  }
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (typeof filter == "function" || typeof filter == "object" && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1)){  }
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " "){  }
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++){  }
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++){  }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++){  }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if ('object' == "object" && exports && !exports.nodeType && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, exports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON;
    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        root.JSON = nativeJSON;
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    undefined(function () {
      return JSON3;
    });
  }
}(commonjsGlobal));
});

/**
 * Module dependencies.
 */









/**
 * Make sure `Object.keys` work for `undefined`
 * values that are still there, like `document.all`.
 * http://lists.w3.org/Archives/Public/public-html/2009Jun/0546.html
 *
 * @api private
 */

function objectKeys$2(val){
  if (Object.keys) { return Object.keys(val); }
  return objectKeys(val);
}

/**
 * Module exports.
 */

var utilInspect = inspect;

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 * @license MIT (© Joyent)
 */
/* legacy: obj, showHidden, depth, colors*/

function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) { ctx.depth = arguments[2]; }
  if (arguments.length >= 4) { ctx.colors = arguments[3]; }
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) { ctx.showHidden = false; }
  if (isUndefined(ctx.depth)) { ctx.depth = 2; }
  if (isUndefined(ctx.colors)) { ctx.colors = false; }
  if (isUndefined(ctx.customInspect)) { ctx.customInspect = true; }
  if (ctx.colors) { ctx.stylize = stylizeWithColor; }
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeNoColor(str, styleType) {
  return str;
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isUndefined(arg) {
  return arg === void 0;
}

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function isFunction$1(arg) {
  return typeof arg === 'function';
}

function isString$1(arg) {
  return typeof arg === 'string';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isNull(arg) {
  return arg === null;
}

function hasOwn$7(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function isRegExp$1(re) {
  return isObject$4(re) && objectToString(re) === '[object RegExp]';
}

function isObject$4(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isError(e) {
  return isObject$4(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isDate(d) {
  return isObject$4(d) && objectToString(d) === '[object Date]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function arrayToHash(array) {
  var hash = {};

  foreach(array, function(val, idx) {
    hash[val] = true;
  });

  return hash;
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwn$7(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  foreach(keys, function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction$1(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString$1(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = objectKeys$2(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden && Object.getOwnPropertyNames) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (indexof(keys, 'message') >= 0 || indexof(keys, 'description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction$1(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp$1(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isarray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction$1(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp$1(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp$1(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = arrayMap(keys, function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = { value: value[key] };
  if (Object.getOwnPropertyDescriptor) {
    desc = Object.getOwnPropertyDescriptor(value, key) || desc;
  }
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwn$7(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (indexof(ctx.seen, desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = arrayMap(str.split('\n'), function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + arrayMap(str.split('\n'), function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = json3.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    { return ctx.stylize('undefined', 'undefined'); }
  if (isString$1(value)) {
    var simple = '\'' + json3.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    { return ctx.stylize('' + value, 'number'); }
  if (isBoolean(value))
    { return ctx.stylize('' + value, 'boolean'); }
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    { return ctx.stylize('null', 'null'); }
}

function reduceToSingleString(output, base, braces) {
  var length = arrayReduce(output, function(prev, cur) {
    if (cur.indexOf('\n') >= 0) {  }
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject$4(add)) { return origin; }

  var keys = objectKeys$2(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}

var ModalPlugin = {
  install: function install(Vue) {
    Vue.prototype.$showModal = function(
      component,
      options
    ) {
      var this$1 = this;
      if ( options === void 0 ) options = { context: null, fullscreen: false };

      return new Promise(function (resolve) {
        var placeholder = this$1.$document.createComment('placeholder');

        var contentComponent = Vue.extend(component);
        var vm = new contentComponent(options.context);

        contentComponent.prototype.$modal = {
          close: function close(data) {
            resolve(data);
            modalPage.closeModal();
            setTimeout(function () {
              vm.$destroy();
            });
          }
        };

        vm.$mount(placeholder);
        var modalPage = isPage(vm.$el) ? vm.$el.nativeView : new page.Page();

        if (!isPage(vm.$el)) {
          modalPage.content = vm.$el.nativeView;
        }

        this$1.$root.$el.nativeView.showModal(
          modalPage,
          null,
          resolve,
          options.fullscreen
        );
      })
    };
  }
}

var NavigatorPlugin = {
  install: function install(Vue$$1) {
    Vue$$1.navigateBack = Vue$$1.prototype.$navigateBack = function() {
      return frame.topmost().goBack()
    };

    Vue$$1.navigateTo = Vue$$1.prototype.$navigateTo = function(
      component,
      options,
      pageCb
    ) {
      if ( options === void 0 ) options = {};
      if ( pageCb === void 0 ) pageCb = function () {};

      return new Promise(function (resolve) {
        var frame$$1 = frame.topmost();
        var navigate = frame$$1 ? frame$$1.navigate : application.start;

        if (isPage(component)) {
          return navigate(
            Object.assign(options, {
              create: function create() {
                return component
              }
            })
          )
        }

        var placeholder = Vue$$1.$document.createComment('placeholder');

        var vm = component;
        if (!component.__is_root__) {
          var contentComponent = Vue$$1.extend(component);
          vm = new contentComponent(options.context);
          vm.$mount(placeholder);
        }

        var toPage = isPage(vm.$el) ? vm.$el.nativeView : new page.Page();

        if (!isPage(vm.$el)) {
          toPage.content = vm.$el.nativeView;
        }

        toPage[VUE_VM_REF] = vm;

        navigate.call(
          frame$$1,
          Object.assign(
            {
              create: function () {
                if (frame$$1) {
                  toPage.disposeNativeView = after(
                    toPage.disposeNativeView,
                    toPage,
                    function () {
                      vm.$destroy();
                    }
                  );
                }

                pageCb(toPage);
                resolve(toPage);
                return toPage
              }
            },
            options
          )
        );
      })
    };
  }
}

function patchRouter(router, Vue) {
  if (router.__patched_for_page_routing__) {
    return
  }
  router.__patched_for_page_routing__ = true;

  // The problem: When using router.replace() to set the initial route
  // the history index stays -1, which then causes an issue when visiting a route,
  // going back, and then trying to visit again (the active route is not changed on nav back)
  // This fixes it, since it allows the router.go logic to run
  router.history.index = 0;

  // initial navigation states
  router.isBackNavigation = false;
  router.shouldNavigate = true;
  router.pageStack = [];
  router.pageTransition = null;

  router.setPageTransition = function (transition, duration, curve) {
    if (typeof transition === 'string') {
      return (router.pageTransition = {
        name: transition,
        duration: duration,
        curve: curve
      })
    }

    router.pageTransition = transition;
  };

  router._beginBackNavigation = function (shouldNavigate) {
    if ( shouldNavigate === void 0 ) shouldNavigate = true;

    if (router.isBackNavigation) {
      throw new Error(
        'router._beginBackNavigation was called while already navigating back.'
      )
    }

    router.isBackNavigation = true;
    router.shouldNavigate = shouldNavigate;
  };

  router._finishBackNavigation = function () {
    if (!router.isBackNavigation) {
      throw new Error(
        'router._finishBackNavigation was called while there was no back navigation.'
      )
    }

    router.isBackNavigation = false;
  };

  router.go = before(router.go, router, function (n) {
    if (n === -1 && !router.isBackNavigation) {
      router._beginBackNavigation();
    }
  });

  router.afterEach(function () {
    if (router.isBackNavigation) {
      if (router.shouldNavigate) {
        Vue.navigateBack();
      }
      router.pageStack.pop();
      var page$$1 = router.pageStack[router.pageStack.length - 1];

      var callback = function (ref) {
        var isBackNavigation = ref.isBackNavigation;

        if (isBackNavigation) {
          router._finishBackNavigation();
        }
        page$$1.off(page.Page.navigatedToEvent, callback);
      };

      page$$1.on(page.Page.navigatedToEvent, callback);

      return
    }

    var component = router.getMatchedComponents()[0];

    Vue.navigateTo(component, {
      context: { router: router },
      transition: router.pageTransition
      // Todo: add transitionAndroid and transitionIOS
    }).then(function (page$$1) {
      router.pageStack.push(page$$1);

      page$$1.on(page.Page.navigatedFromEvent, function (ref) {
        var isBackNavigation = ref.isBackNavigation;

        if (isBackNavigation && !router.isBackNavigation) {
          router._beginBackNavigation(false);
          router.back();
        }
      });
    });
  });
}

var RouterPlugin = {
  install: function install(Vue) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        var this$1 = this;

        if (!this.$options.router) {
          // If there is no router, we don't care
          return
        }

        var router = this.$options.router;
        var isPageRouting = router.options.pageRouting;
        var self = this;

        if (!isPageRouting) {
          // if not in page mode, we don't care
          return
        }

        patchRouter(router, Vue);

        // Overwrite the default $start function
        this.$start = function () {
          this$1.__is_root__ = true;
          this$1.__started__ = true; // skips the default start procedure
          this$1.$options.render = function () {}; // removes warning for no render / template

          // Mount the root component
          var placeholder = Vue.$document.createComment('placeholder');
          self.$mount(placeholder);

          var initial = router.getMatchedComponents()[0];

          this$1.$navigateTo(
            initial,
            {
              context: { router: router },
              clearHistory: true
            },
            function (page$$1) {
              router.pageStack.push(page$$1);
            }
          );
        };
      }
    });
  }
}

// This is required because some of the third party plugins rely on this
// and cause errors since there is no process variable in {N}.
global.process = global.process || {};
global.process.env = global.process.env || {};

Vue.config.silent = true;

setVue(Vue);

Vue.use(ModalPlugin);
Vue.use(NavigatorPlugin);
Vue.use(RouterPlugin);

console.log = (function(log, inspect, Vue$$1) {
  return function() {
    return log.apply(
      this,
      Array.prototype.map.call(arguments, function(arg) {
        return inspect(arg, {
          depth: 2,
          colors: Vue$$1.config.debug,
          showHidden: true
        }).replace(/\\n/g, '\n')
      })
    )
  }
})(console.log, utilInspect, Vue);

console.keys = function(object) {
  console.log(Object.keys(object));
};

// this fixes the issue of resuming the application
// however this might not be the desired functionality
// Todo: figure out if there is a better way to fix application resume.
application__default.on(application__default.exitEvent, function () {
  var frame$$1 = frame.topmost();
  if (frame$$1) {
    frame$$1.eachChildView(function (child) {
      var vm = child[VUE_VM_REF];

      if (vm) {
        vm.$destroy();
      }
      frame$$1._removeView(child);
    });
  }
});

global.__onLiveSyncCore = function () {
  var frame$$1 = frame.topmost();
  if (frame$$1) {
    if (frame$$1.currentPage && frame$$1.currentPage.modal) {
      frame$$1.currentPage.modal.closeModal();
    }

    if (frame$$1.currentPage) {
      frame$$1.currentPage.addCssFile(application__default.getCssFileName());
    }
  }
};

module.exports = Vue;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var layout_base_common_1 = __webpack_require__(9);
__export(__webpack_require__(9));
var LayoutBase = (function (_super) {
    __extends(LayoutBase, _super);
    function LayoutBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutBase.prototype[layout_base_common_1.clipToBoundsProperty.getDefault] = function () {
        return false;
    };
    LayoutBase.prototype[layout_base_common_1.clipToBoundsProperty.setNative] = function (value) {
        this._setNativeClipToBounds();
    };
    LayoutBase.prototype._setNativeClipToBounds = function () {
        if (this.clipToBounds) {
            this.nativeViewProtected.clipsToBounds = true;
        }
        else {
            _super.prototype._setNativeClipToBounds.call(this);
        }
    };
    return LayoutBase;
}(layout_base_common_1.LayoutBaseCommon));
exports.LayoutBase = LayoutBase;
//# sourceMappingURL=layout-base.ios.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var view_common_1 = __webpack_require__(11);
var background_1 = __webpack_require__(58);
var style_properties_1 = __webpack_require__(59);
var profiling_1 = __webpack_require__(60);
__export(__webpack_require__(11));
var PFLAG_FORCE_LAYOUT = 1;
var PFLAG_MEASURED_DIMENSION_SET = 1 << 1;
var PFLAG_LAYOUT_REQUIRED = 1 << 2;
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hasTransfrom = false;
        _this._privateFlags = PFLAG_LAYOUT_REQUIRED | PFLAG_FORCE_LAYOUT;
        _this._suspendCATransaction = false;
        return _this;
    }
    View.prototype._addViewCore = function (view, atIndex) {
        _super.prototype._addViewCore.call(this, view, atIndex);
        this.requestLayout();
    };
    View.prototype._removeViewCore = function (view) {
        _super.prototype._removeViewCore.call(this, view);
        this.requestLayout();
    };
    Object.defineProperty(View.prototype, "isLayoutRequired", {
        get: function () {
            return (this._privateFlags & PFLAG_LAYOUT_REQUIRED) === PFLAG_LAYOUT_REQUIRED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isLayoutRequested", {
        get: function () {
            return (this._privateFlags & PFLAG_FORCE_LAYOUT) === PFLAG_FORCE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.requestLayout = function () {
        _super.prototype.requestLayout.call(this);
        this._privateFlags |= PFLAG_FORCE_LAYOUT;
        var parent = this.parent;
        if (parent && !parent.isLayoutRequested) {
            parent.requestLayout();
        }
    };
    View.prototype.measure = function (widthMeasureSpec, heightMeasureSpec) {
        var measureSpecsChanged = this._setCurrentMeasureSpecs(widthMeasureSpec, heightMeasureSpec);
        var forceLayout = (this._privateFlags & PFLAG_FORCE_LAYOUT) === PFLAG_FORCE_LAYOUT;
        if (forceLayout || measureSpecsChanged) {
            this._privateFlags &= ~PFLAG_MEASURED_DIMENSION_SET;
            this.onMeasure(widthMeasureSpec, heightMeasureSpec);
            this._privateFlags |= PFLAG_LAYOUT_REQUIRED;
            if ((this._privateFlags & PFLAG_MEASURED_DIMENSION_SET) !== PFLAG_MEASURED_DIMENSION_SET) {
                throw new Error("onMeasure() did not set the measured dimension by calling setMeasuredDimension() " + this);
            }
        }
    };
    View.prototype.layout = function (left, top, right, bottom) {
        var _a = this._setCurrentLayoutBounds(left, top, right, bottom), boundsChanged = _a.boundsChanged, sizeChanged = _a.sizeChanged;
        this.layoutNativeView(left, top, right, bottom);
        if (boundsChanged || (this._privateFlags & PFLAG_LAYOUT_REQUIRED) === PFLAG_LAYOUT_REQUIRED) {
            this.onLayout(left, top, right, bottom);
            this._privateFlags &= ~PFLAG_LAYOUT_REQUIRED;
        }
        if (sizeChanged) {
            this._onSizeChanged();
        }
        else if (this._nativeBackgroundState === "invalid") {
            var background = this.style.backgroundInternal;
            this._redrawNativeBackground(background);
        }
        this._privateFlags &= ~PFLAG_FORCE_LAYOUT;
    };
    View.prototype.setMeasuredDimension = function (measuredWidth, measuredHeight) {
        _super.prototype.setMeasuredDimension.call(this, measuredWidth, measuredHeight);
        this._privateFlags |= PFLAG_MEASURED_DIMENSION_SET;
    };
    View.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var view = this.nativeViewProtected;
        var width = view_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = view_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = view_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = view_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var nativeWidth = 0;
        var nativeHeight = 0;
        if (view) {
            var nativeSize = view_common_1.layout.measureNativeView(view, width, widthMode, height, heightMode);
            nativeWidth = nativeSize.width;
            nativeHeight = nativeSize.height;
        }
        var measureWidth = Math.max(nativeWidth, this.effectiveMinWidth);
        var measureHeight = Math.max(nativeHeight, this.effectiveMinHeight);
        var widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    View.prototype.onLayout = function (left, top, right, bottom) {
    };
    View.prototype._setNativeViewFrame = function (nativeView, frame) {
        if (!CGRectEqualToRect(nativeView.frame, frame)) {
            if (view_common_1.traceEnabled()) {
                view_common_1.traceWrite(this + ", Native setFrame: = " + NSStringFromCGRect(frame), view_common_1.traceCategories.Layout);
            }
            this._cachedFrame = frame;
            if (this._hasTransfrom) {
                var transform = nativeView.transform;
                nativeView.transform = CGAffineTransformIdentity;
                nativeView.frame = frame;
                nativeView.transform = transform;
            }
            else {
                nativeView.frame = frame;
            }
            var boundsOrigin = nativeView.bounds.origin;
            nativeView.bounds = CGRectMake(boundsOrigin.x, boundsOrigin.y, frame.size.width, frame.size.height);
        }
    };
    View.prototype.layoutNativeView = function (left, top, right, bottom) {
        if (!this.nativeViewProtected) {
            return;
        }
        var nativeView = this.nativeViewProtected;
        var frame = CGRectMake(view_common_1.layout.toDeviceIndependentPixels(left), view_common_1.layout.toDeviceIndependentPixels(top), view_common_1.layout.toDeviceIndependentPixels(right - left), view_common_1.layout.toDeviceIndependentPixels(bottom - top));
        this._setNativeViewFrame(nativeView, frame);
    };
    View.prototype._updateLayout = function () {
        var oldBounds = this._getCurrentLayoutBounds();
        this.layoutNativeView(oldBounds.left, oldBounds.top, oldBounds.right, oldBounds.bottom);
    };
    View.prototype.focus = function () {
        if (this.ios) {
            return this.ios.becomeFirstResponder();
        }
        return false;
    };
    View.prototype.getLocationInWindow = function () {
        if (!this.nativeViewProtected || !this.nativeViewProtected.window) {
            return undefined;
        }
        var pointInWindow = this.nativeViewProtected.convertPointToView(this.nativeViewProtected.bounds.origin, null);
        return {
            x: pointInWindow.x,
            y: pointInWindow.y
        };
    };
    View.prototype.getLocationOnScreen = function () {
        if (!this.nativeViewProtected || !this.nativeViewProtected.window) {
            return undefined;
        }
        var pointInWindow = this.nativeViewProtected.convertPointToView(this.nativeViewProtected.bounds.origin, null);
        var pointOnScreen = this.nativeViewProtected.window.convertPointToWindow(pointInWindow, null);
        return {
            x: pointOnScreen.x,
            y: pointOnScreen.y
        };
    };
    View.prototype.getLocationRelativeTo = function (otherView) {
        if (!this.nativeViewProtected || !this.nativeViewProtected.window ||
            !otherView.nativeViewProtected || !otherView.nativeViewProtected.window ||
            this.nativeViewProtected.window !== otherView.nativeViewProtected.window) {
            return undefined;
        }
        var myPointInWindow = this.nativeViewProtected.convertPointToView(this.nativeViewProtected.bounds.origin, null);
        var otherPointInWindow = otherView.nativeViewProtected.convertPointToView(otherView.nativeViewProtected.bounds.origin, null);
        return {
            x: myPointInWindow.x - otherPointInWindow.x,
            y: myPointInWindow.y - otherPointInWindow.y
        };
    };
    View.prototype._onSizeChanged = function () {
        var nativeView = this.nativeViewProtected;
        if (!nativeView) {
            return;
        }
        var background = this.style.backgroundInternal;
        var backgroundDependsOnSize = background.image
            || !background.hasUniformBorder()
            || background.hasBorderRadius();
        if (this._nativeBackgroundState === "invalid" || (this._nativeBackgroundState === "drawn" && backgroundDependsOnSize)) {
            this._redrawNativeBackground(background);
        }
        var clipPath = this.style.clipPath;
        if (clipPath !== "" && this[style_properties_1.clipPathProperty.setNative]) {
            this[style_properties_1.clipPathProperty.setNative](clipPath);
        }
    };
    View.prototype.updateNativeTransform = function () {
        var scaleX = this.scaleX || 1e-6;
        var scaleY = this.scaleY || 1e-6;
        var rotate = this.rotate || 0;
        var newTransform = CGAffineTransformIdentity;
        newTransform = CGAffineTransformTranslate(newTransform, this.translateX, this.translateY);
        newTransform = CGAffineTransformRotate(newTransform, rotate * Math.PI / 180);
        newTransform = CGAffineTransformScale(newTransform, scaleX, scaleY);
        if (!CGAffineTransformEqualToTransform(this.nativeViewProtected.transform, newTransform)) {
            var updateSuspended = this._isPresentationLayerUpdateSuspeneded();
            if (!updateSuspended) {
                CATransaction.begin();
            }
            this.nativeViewProtected.transform = newTransform;
            this._hasTransfrom = this.nativeViewProtected && !CGAffineTransformEqualToTransform(this.nativeViewProtected.transform, CGAffineTransformIdentity);
            if (!updateSuspended) {
                CATransaction.commit();
            }
        }
    };
    View.prototype.updateOriginPoint = function (originX, originY) {
        var newPoint = CGPointMake(originX, originY);
        this.nativeViewProtected.layer.anchorPoint = newPoint;
        if (this._cachedFrame) {
            this._setNativeViewFrame(this.nativeViewProtected, this._cachedFrame);
        }
    };
    View.prototype._suspendPresentationLayerUpdates = function () {
        this._suspendCATransaction = true;
    };
    View.prototype._resumePresentationLayerUpdates = function () {
        this._suspendCATransaction = false;
    };
    View.prototype._isPresentationLayerUpdateSuspeneded = function () {
        return this._suspendCATransaction || this._suspendNativeUpdatesCount;
    };
    View.prototype[view_common_1.isEnabledProperty.getDefault] = function () {
        var nativeView = this.nativeViewProtected;
        return nativeView instanceof UIControl ? nativeView.enabled : true;
    };
    View.prototype[view_common_1.isEnabledProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        if (nativeView instanceof UIControl) {
            nativeView.enabled = value;
        }
    };
    View.prototype[view_common_1.originXProperty.getDefault] = function () {
        return this.nativeViewProtected.layer.anchorPoint.x;
    };
    View.prototype[view_common_1.originXProperty.setNative] = function (value) {
        this.updateOriginPoint(value, this.originY);
    };
    View.prototype[view_common_1.originYProperty.getDefault] = function () {
        return this.nativeViewProtected.layer.anchorPoint.y;
    };
    View.prototype[view_common_1.originYProperty.setNative] = function (value) {
        this.updateOriginPoint(this.originX, value);
    };
    View.prototype[view_common_1.automationTextProperty.getDefault] = function () {
        return this.nativeViewProtected.accessibilityLabel;
    };
    View.prototype[view_common_1.automationTextProperty.setNative] = function (value) {
        this.nativeViewProtected.accessibilityIdentifier = value;
        this.nativeViewProtected.accessibilityLabel = value;
    };
    View.prototype[view_common_1.isUserInteractionEnabledProperty.getDefault] = function () {
        return this.nativeViewProtected.userInteractionEnabled;
    };
    View.prototype[view_common_1.isUserInteractionEnabledProperty.setNative] = function (value) {
        this.nativeViewProtected.userInteractionEnabled = value;
    };
    View.prototype[style_properties_1.visibilityProperty.getDefault] = function () {
        return this.nativeViewProtected.hidden ? style_properties_1.Visibility.COLLAPSE : style_properties_1.Visibility.VISIBLE;
    };
    View.prototype[style_properties_1.visibilityProperty.setNative] = function (value) {
        switch (value) {
            case style_properties_1.Visibility.VISIBLE:
                this.nativeViewProtected.hidden = false;
                break;
            case style_properties_1.Visibility.HIDDEN:
            case style_properties_1.Visibility.COLLAPSE:
                this.nativeViewProtected.hidden = true;
                break;
            default:
                throw new Error("Invalid visibility value: " + value + ". Valid values are: \"" + style_properties_1.Visibility.VISIBLE + "\", \"" + style_properties_1.Visibility.HIDDEN + "\", \"" + style_properties_1.Visibility.COLLAPSE + "\".");
        }
    };
    View.prototype[style_properties_1.opacityProperty.getDefault] = function () {
        return this.nativeViewProtected.alpha;
    };
    View.prototype[style_properties_1.opacityProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var updateSuspended = this._isPresentationLayerUpdateSuspeneded();
        if (!updateSuspended) {
            CATransaction.begin();
        }
        nativeView.alpha = value;
        if (!updateSuspended) {
            CATransaction.commit();
        }
    };
    View.prototype[style_properties_1.rotateProperty.getDefault] = function () {
        return 0;
    };
    View.prototype[style_properties_1.rotateProperty.setNative] = function (value) {
        this.updateNativeTransform();
    };
    View.prototype[style_properties_1.scaleXProperty.getDefault] = function () {
        return 1;
    };
    View.prototype[style_properties_1.scaleXProperty.setNative] = function (value) {
        this.updateNativeTransform();
    };
    View.prototype[style_properties_1.scaleYProperty.getDefault] = function () {
        return 1;
    };
    View.prototype[style_properties_1.scaleYProperty.setNative] = function (value) {
        this.updateNativeTransform();
    };
    View.prototype[style_properties_1.translateXProperty.getDefault] = function () {
        return 0;
    };
    View.prototype[style_properties_1.translateXProperty.setNative] = function (value) {
        this.updateNativeTransform();
    };
    View.prototype[style_properties_1.translateYProperty.getDefault] = function () {
        return 0;
    };
    View.prototype[style_properties_1.translateYProperty.setNative] = function (value) {
        this.updateNativeTransform();
    };
    View.prototype[style_properties_1.zIndexProperty.getDefault] = function () {
        return 0;
    };
    View.prototype[style_properties_1.zIndexProperty.setNative] = function (value) {
        this.nativeViewProtected.layer.zPosition = value;
    };
    View.prototype[style_properties_1.backgroundInternalProperty.getDefault] = function () {
        return this.nativeViewProtected.backgroundColor;
    };
    View.prototype[style_properties_1.backgroundInternalProperty.setNative] = function (value) {
        this._nativeBackgroundState = "invalid";
        if (this.isLayoutValid) {
            this._redrawNativeBackground(value);
        }
    };
    View.prototype._redrawNativeBackground = function (value) {
        var _this = this;
        var updateSuspended = this._isPresentationLayerUpdateSuspeneded();
        if (!updateSuspended) {
            CATransaction.begin();
        }
        if (value instanceof UIColor) {
            this.nativeViewProtected.backgroundColor = value;
        }
        else {
            background_1.ios.createBackgroundUIColor(this, function (color) {
                _this.nativeViewProtected.backgroundColor = color;
            });
            this._setNativeClipToBounds();
        }
        if (!updateSuspended) {
            CATransaction.commit();
        }
        this._nativeBackgroundState = "drawn";
    };
    View.prototype._setNativeClipToBounds = function () {
        var backgroundInternal = this.style.backgroundInternal;
        this.nativeViewProtected.clipsToBounds =
            this.nativeViewProtected instanceof UIScrollView ||
                backgroundInternal.hasBorderWidth() ||
                backgroundInternal.hasBorderRadius();
    };
    __decorate([
        profiling_1.profile
    ], View.prototype, "layout", null);
    __decorate([
        profiling_1.profile
    ], View.prototype, "onMeasure", null);
    return View;
}(view_common_1.ViewCommon));
exports.View = View;
View.prototype._nativeBackgroundState = "unset";
var CustomLayoutView = (function (_super) {
    __extends(CustomLayoutView, _super);
    function CustomLayoutView() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = UIView.new();
        return _this;
    }
    Object.defineProperty(CustomLayoutView.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    CustomLayoutView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
    };
    CustomLayoutView.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        _super.prototype._addViewToNativeVisualTree.call(this, child, atIndex);
        var parentNativeView = this.nativeViewProtected;
        var childNativeView = child.nativeViewProtected;
        if (parentNativeView && childNativeView) {
            if (typeof atIndex !== "number" || atIndex >= parentNativeView.subviews.count) {
                parentNativeView.addSubview(childNativeView);
            }
            else {
                parentNativeView.insertSubviewAtIndex(childNativeView, atIndex);
            }
            return true;
        }
        return false;
    };
    CustomLayoutView.prototype._removeViewFromNativeVisualTree = function (child) {
        _super.prototype._removeViewFromNativeVisualTree.call(this, child);
        if (child.nativeViewProtected) {
            child.nativeViewProtected.removeFromSuperview();
        }
    };
    return CustomLayoutView;
}(View));
exports.CustomLayoutView = CustomLayoutView;
//# sourceMappingURL=view.ios.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("../../styling/background");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("../../styling/style-properties");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("../../../profiling");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var application_common_1 = __webpack_require__(13);
__export(__webpack_require__(13));
var frame_1 = __webpack_require__(62);
var utils_1 = __webpack_require__(63);
var utils = __webpack_require__(12);
var profiling_1 = __webpack_require__(64);
var Responder = (function (_super) {
    __extends(Responder, _super);
    function Responder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Responder;
}(UIResponder));
var Window = (function (_super) {
    __extends(Window, _super);
    function Window() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Window.prototype.initWithFrame = function (frame) {
        var window = _super.prototype.initWithFrame.call(this, frame);
        if (window) {
            window.autoresizingMask = 0;
        }
        return window;
    };
    Window.prototype.layoutSubviews = function () {
        if (utils.ios.MajorVersion < 9) {
            utils_1.ios._layoutRootView(this.content, utils.ios.getter(UIScreen, UIScreen.mainScreen).bounds);
        }
        else {
            utils_1.ios._layoutRootView(this.content, this.frame);
        }
    };
    __decorate([
        profiling_1.profile
    ], Window.prototype, "layoutSubviews", null);
    return Window;
}(UIWindow));
var NotificationObserver = (function (_super) {
    __extends(NotificationObserver, _super);
    function NotificationObserver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationObserver.initWithCallback = function (onReceiveCallback) {
        var observer = _super.new.call(this);
        observer._onReceiveCallback = onReceiveCallback;
        return observer;
    };
    NotificationObserver.prototype.onReceive = function (notification) {
        this._onReceiveCallback(notification);
    };
    NotificationObserver.ObjCExposedMethods = {
        "onReceive": { returns: interop.types.void, params: [NSNotification] }
    };
    return NotificationObserver;
}(NSObject));
var displayedOnce = false;
var displayedLinkTarget;
var displayedLink;
var CADisplayLinkTarget = (function (_super) {
    __extends(CADisplayLinkTarget, _super);
    function CADisplayLinkTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CADisplayLinkTarget.prototype.onDisplayed = function (link) {
        link.invalidate();
        var ios = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
        var object = iosApp;
        displayedOnce = true;
        application_common_1.notify({ eventName: application_common_1.displayedEvent, object: object, ios: ios });
        displayedLinkTarget = null;
        displayedLink = null;
    };
    CADisplayLinkTarget.ObjCExposedMethods = {
        "onDisplayed": { returns: interop.types.void, params: [CADisplayLink] }
    };
    return CADisplayLinkTarget;
}(NSObject));
var IOSApplication = (function () {
    function IOSApplication() {
        this._currentOrientation = utils.ios.getter(UIDevice, UIDevice.currentDevice).orientation;
        this._observers = new Array();
        this.addNotificationObserver(UIApplicationDidFinishLaunchingNotification, this.didFinishLaunchingWithOptions.bind(this));
        this.addNotificationObserver(UIApplicationDidBecomeActiveNotification, this.didBecomeActive.bind(this));
        this.addNotificationObserver(UIApplicationDidEnterBackgroundNotification, this.didEnterBackground.bind(this));
        this.addNotificationObserver(UIApplicationWillTerminateNotification, this.willTerminate.bind(this));
        this.addNotificationObserver(UIApplicationDidReceiveMemoryWarningNotification, this.didReceiveMemoryWarning.bind(this));
        this.addNotificationObserver(UIDeviceOrientationDidChangeNotification, this.orientationDidChange.bind(this));
    }
    Object.defineProperty(IOSApplication.prototype, "nativeApp", {
        get: function () {
            return utils.ios.getter(UIApplication, UIApplication.sharedApplication);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IOSApplication.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IOSApplication.prototype, "delegate", {
        get: function () {
            return this._delegate;
        },
        set: function (value) {
            if (this._delegate !== value) {
                this._delegate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    IOSApplication.prototype.addNotificationObserver = function (notificationName, onReceiveCallback) {
        var observer = NotificationObserver.initWithCallback(onReceiveCallback);
        utils.ios.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter).addObserverSelectorNameObject(observer, "onReceive", notificationName, null);
        this._observers.push(observer);
        return observer;
    };
    IOSApplication.prototype.removeNotificationObserver = function (observer, notificationName) {
        var index = this._observers.indexOf(observer);
        if (index >= 0) {
            this._observers.splice(index, 1);
            utils.ios.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter).removeObserverNameObject(observer, notificationName, null);
        }
    };
    IOSApplication.prototype.didFinishLaunchingWithOptions = function (notification) {
        if (!displayedOnce && profiling_1.level() >= profiling_1.Level.lifecycle) {
            displayedLinkTarget = CADisplayLinkTarget.new();
            displayedLink = CADisplayLink.displayLinkWithTargetSelector(displayedLinkTarget, "onDisplayed");
            displayedLink.addToRunLoopForMode(NSRunLoop.mainRunLoop, NSDefaultRunLoopMode);
            displayedLink.addToRunLoopForMode(NSRunLoop.mainRunLoop, UITrackingRunLoopMode);
        }
        this._window = Window.alloc().initWithFrame(utils.ios.getter(UIScreen, UIScreen.mainScreen).bounds);
        this._window.backgroundColor = utils.ios.getter(UIColor, UIColor.whiteColor);
        var args = {
            eventName: application_common_1.launchEvent,
            object: this,
            ios: notification.userInfo && notification.userInfo.objectForKey("UIApplicationLaunchOptionsLocalNotificationKey") || null
        };
        application_common_1.notify(args);
        application_common_1.notify({ eventName: "loadAppCss", object: this, cssFile: application_common_1.getCssFileName() });
        var rootView = createRootView(args.root);
        this._window.content = rootView;
        if (rootView instanceof frame_1.Frame) {
            this.rootController = this._window.rootViewController = rootView.ios.controller;
        }
        else if (rootView.ios instanceof UIViewController) {
            this.rootController = this._window.rootViewController = rootView.ios;
        }
        else if (rootView.ios instanceof UIView) {
            var newController = UIViewController.new();
            newController.view.addSubview(rootView.ios);
            this.rootController = newController;
        }
        else {
            throw new Error("Root should be either UIViewController or UIView");
        }
        this._window.makeKeyAndVisible();
    };
    IOSApplication.prototype.didBecomeActive = function (notification) {
        var ios = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
        var object = this;
        application_common_1.notify({ eventName: application_common_1.resumeEvent, object: object, ios: ios });
        var content = this._window.content;
        if (content && !content.isLoaded) {
            content.onLoaded();
        }
    };
    IOSApplication.prototype.didEnterBackground = function (notification) {
        var content = this._window.content;
        if (content && content.isLoaded) {
            content.onUnloaded();
        }
        application_common_1.notify({ eventName: application_common_1.suspendEvent, object: this, ios: utils.ios.getter(UIApplication, UIApplication.sharedApplication) });
    };
    IOSApplication.prototype.willTerminate = function (notification) {
        var content = this._window.content;
        if (content && content.isLoaded) {
            content.onUnloaded();
        }
        application_common_1.notify({ eventName: application_common_1.exitEvent, object: this, ios: utils.ios.getter(UIApplication, UIApplication.sharedApplication) });
    };
    IOSApplication.prototype.didReceiveMemoryWarning = function (notification) {
        application_common_1.notify({ eventName: application_common_1.lowMemoryEvent, object: this, ios: utils.ios.getter(UIApplication, UIApplication.sharedApplication) });
    };
    IOSApplication.prototype.orientationDidChange = function (notification) {
        var orientation = utils.ios.getter(UIDevice, UIDevice.currentDevice).orientation;
        if (this._currentOrientation !== orientation) {
            this._currentOrientation = orientation;
            var newValue = void 0;
            switch (orientation) {
                case 4:
                case 3:
                    newValue = "landscape";
                    break;
                case 1:
                case 2:
                    newValue = "portrait";
                    break;
                default:
                    newValue = "unknown";
                    break;
            }
            application_common_1.notify({
                eventName: application_common_1.orientationChangedEvent,
                ios: this,
                newValue: newValue,
                object: this
            });
        }
    };
    __decorate([
        profiling_1.profile
    ], IOSApplication.prototype, "didFinishLaunchingWithOptions", null);
    __decorate([
        profiling_1.profile
    ], IOSApplication.prototype, "didBecomeActive", null);
    return IOSApplication;
}());
var iosApp = new IOSApplication();
exports.ios = iosApp;
application_common_1.setApplication(iosApp);
var mainEntry;
function createRootView(v) {
    var rootView = v;
    var frame;
    var main;
    if (!rootView) {
        main = mainEntry;
        if (main) {
            frame = new frame_1.Frame();
            frame.navigate(main);
        }
        else {
            throw new Error("A Frame must be used to navigate to a Page.");
        }
        rootView = frame;
    }
    rootView._setupAsRootView({});
    return rootView;
}
function getMainEntry() {
    return mainEntry;
}
exports.getMainEntry = getMainEntry;
var started = false;
function start(entry) {
    mainEntry = typeof entry === "string" ? { moduleName: entry } : entry;
    started = true;
    if (!iosApp.nativeApp) {
        UIApplicationMain(0, null, null, iosApp && iosApp.delegate ? NSStringFromClass(iosApp.delegate) : NSStringFromClass(Responder));
    }
    else {
        var rootView = createRootView();
        if (rootView) {
            var window = iosApp.nativeApp.keyWindow || (iosApp.nativeApp.windows.count > 0 && iosApp.nativeApp.windows[0]);
            if (window) {
                var rootController = window.rootViewController;
                if (rootController) {
                    rootController.presentViewControllerAnimatedCompletion(rootView.ios.controller, true, null);
                    utils_1.ios._layoutRootView(rootView, utils.ios.getter(UIScreen, UIScreen.mainScreen).bounds);
                }
            }
        }
    }
}
exports.start = start;
function getNativeApplication() {
    return iosApp.nativeApp;
}
exports.getNativeApplication = getNativeApplication;
global.__onLiveSync = function () {
    if (!started) {
        return;
    }
    application_common_1.livesync();
};
//# sourceMappingURL=application.ios.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("../ui/frame");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("../ui/utils");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("../profiling");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("../../application");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var profiling_1 = __webpack_require__(0);
var frame_common_1 = __webpack_require__(18);
var fragment_transitions_1 = __webpack_require__(67);
var uiUtils = __webpack_require__(17);
var utils = __webpack_require__(1);
__export(__webpack_require__(18));
var ENTRY = "_entry";
var NAV_DEPTH = "_navDepth";
var TRANSITION = "_transition";
var DELEGATE = "_delegate";
var navDepth = -1;
var NotificationObserver2 = (function (_super) {
    __extends(NotificationObserver2, _super);
    function NotificationObserver2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationObserver2.initWithCallback = function (onReceiveCallback) {
        var observer = _super.new.call(this);
        observer._onReceiveCallback = onReceiveCallback;
        return observer;
    };
    NotificationObserver2.prototype.onReceive = function (notification) {
        this._onReceiveCallback(notification);
    };
    NotificationObserver2.ObjCExposedMethods = {
        "onReceive": { returns: interop.types.void, params: [NSNotification] }
    };
    return NotificationObserver2;
}(NSObject));
exports.__observer = NotificationObserver2.initWithCallback(handleNotification);
var notificationCenter = utils.ios.getter(NSNotificationCenter, NSNotificationCenter.defaultCenter);
notificationCenter.addObserverSelectorNameObject(exports.__observer, "onReceive", UIApplicationDidChangeStatusBarFrameNotification, null);
function handleNotification(notification) {
    var frame = frame_common_1.topmost();
    if (frame) {
        frame._handleHigherInCallStatusBarIfNeeded();
        if (frame.currentPage) {
            frame.currentPage.requestLayout();
        }
    }
}
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        var _this = _super.call(this) || this;
        _this._animatedDelegate = UINavigationControllerAnimatedDelegate.new();
        _this._shouldSkipNativePop = false;
        _this._isInitialNavigation = true;
        _this._ios = new iOSFrame(_this);
        _this.viewController = _this._ios.controller;
        _this.nativeViewProtected = _this._ios.controller.view;
        return _this;
    }
    Object.defineProperty(Frame.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype._navigateCore = function (backstackEntry) {
        _super.prototype._navigateCore.call(this, backstackEntry);
        var viewController = backstackEntry.resolvedPage.ios;
        if (!viewController) {
            throw new Error("Required page does not have a viewController created.");
        }
        var clearHistory = backstackEntry.entry.clearHistory;
        if (clearHistory) {
            navDepth = -1;
        }
        navDepth++;
        var navigationTransition;
        var animated = this.currentPage ? this._getIsAnimatedNavigation(backstackEntry.entry) : false;
        if (animated) {
            navigationTransition = this._getNavigationTransition(backstackEntry.entry);
            if (navigationTransition) {
                viewController[TRANSITION] = navigationTransition;
            }
        }
        else {
            viewController[TRANSITION] = { name: "non-animated" };
        }
        var nativeTransition = _getNativeTransition(navigationTransition, true);
        if (!nativeTransition && navigationTransition) {
            this._ios.controller.delegate = this._animatedDelegate;
            viewController[DELEGATE] = this._animatedDelegate;
        }
        else {
            viewController[DELEGATE] = null;
            this._ios.controller.delegate = null;
        }
        backstackEntry[NAV_DEPTH] = navDepth;
        viewController[ENTRY] = backstackEntry;
        if (!this._currentEntry) {
            this._updateActionBar(backstackEntry.resolvedPage, true);
            this._ios.controller.pushViewControllerAnimated(viewController, animated);
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite(this + ".pushViewControllerAnimated(" + viewController + ", " + animated + "); depth = " + navDepth, frame_common_1.traceCategories.Navigation);
            }
            return;
        }
        if (clearHistory) {
            viewController.navigationItem.hidesBackButton = true;
            var newControllers = NSMutableArray.alloc().initWithCapacity(1);
            newControllers.addObject(viewController);
            var oldControllers = this._ios.controller.viewControllers;
            for (var i = 0; i < oldControllers.count; i++) {
                oldControllers.objectAtIndex(i).isBackstackCleared = true;
            }
            this._ios.controller.setViewControllersAnimated(newControllers, animated);
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite(this + ".setViewControllersAnimated([" + viewController + "], " + animated + "); depth = " + navDepth, frame_common_1.traceCategories.Navigation);
            }
            return;
        }
        if (!Frame._isEntryBackstackVisible(this._currentEntry)) {
            var newControllers = NSMutableArray.alloc().initWithArray(this._ios.controller.viewControllers);
            if (newControllers.count === 0) {
                throw new Error("Wrong controllers count.");
            }
            viewController.navigationItem.hidesBackButton = this.backStack.length === 0;
            var skippedNavController = newControllers.lastObject;
            skippedNavController.isBackstackSkipped = true;
            newControllers.removeLastObject();
            newControllers.addObject(viewController);
            this._ios.controller.setViewControllersAnimated(newControllers, animated);
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite(this + ".setViewControllersAnimated([originalControllers - lastController + " + viewController + "], " + animated + "); depth = " + navDepth, frame_common_1.traceCategories.Navigation);
            }
            return;
        }
        this._ios.controller.pushViewControllerAnimated(viewController, animated);
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(this + ".pushViewControllerAnimated(" + viewController + ", " + animated + "); depth = " + navDepth, frame_common_1.traceCategories.Navigation);
        }
    };
    Frame.prototype._goBackCore = function (backstackEntry) {
        _super.prototype._goBackCore.call(this, backstackEntry);
        navDepth = backstackEntry[NAV_DEPTH];
        if (!this._shouldSkipNativePop) {
            var controller = backstackEntry.resolvedPage.ios;
            var animated = this._currentEntry ? this._getIsAnimatedNavigation(this._currentEntry.entry) : false;
            this._updateActionBar(backstackEntry.resolvedPage);
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite(this + ".popToViewControllerAnimated(" + controller + ", " + animated + "); depth = " + navDepth, frame_common_1.traceCategories.Navigation);
            }
            this._ios.controller.popToViewControllerAnimated(controller, animated);
        }
    };
    Frame.prototype._updateActionBar = function (page, disableNavBarAnimation) {
        if (disableNavBarAnimation === void 0) { disableNavBarAnimation = false; }
        _super.prototype._updateActionBar.call(this, page);
        if (page && this.currentPage && this.currentPage.modal === page) {
            return;
        }
        page = page || this.currentPage;
        var newValue = this._getNavBarVisible(page);
        var disableNavBarAnimationCache = this._ios._disableNavBarAnimation;
        if (disableNavBarAnimation) {
            this._ios._disableNavBarAnimation = true;
        }
        this._ios.showNavigationBar = newValue;
        if (disableNavBarAnimation) {
            this._ios._disableNavBarAnimation = disableNavBarAnimationCache;
        }
        if (this._ios.controller.navigationBar) {
            this._ios.controller.navigationBar.userInteractionEnabled = this.navigationQueueIsEmpty();
        }
    };
    Frame.prototype._getNavBarVisible = function (page) {
        switch (this._ios.navBarVisibility) {
            case "always":
                return true;
            case "never":
                return false;
            case "auto":
                var newValue = void 0;
                if (page && page.actionBarHidden !== undefined) {
                    newValue = !page.actionBarHidden;
                }
                else {
                    newValue = this.ios.controller.viewControllers.count > 1 || (page && page.actionBar && !page.actionBar._isEmpty());
                }
                newValue = !!newValue;
                return newValue;
        }
    };
    Object.defineProperty(Frame, "defaultAnimatedNavigation", {
        get: function () {
            return frame_common_1.FrameBase.defaultAnimatedNavigation;
        },
        set: function (value) {
            frame_common_1.FrameBase.defaultAnimatedNavigation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame, "defaultTransition", {
        get: function () {
            return frame_common_1.FrameBase.defaultTransition;
        },
        set: function (value) {
            frame_common_1.FrameBase.defaultTransition = value;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype.requestLayout = function () {
        _super.prototype.requestLayout.call(this);
        var window = this.nativeViewProtected.window;
        if (window) {
            window.setNeedsLayout();
        }
    };
    Frame.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = frame_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = frame_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = frame_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = frame_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        this._widthMeasureSpec = widthMeasureSpec;
        this._heightMeasureSpec = heightMeasureSpec;
        var result = this.measurePage(this.currentPage);
        var widthAndState = frame_common_1.View.resolveSizeAndState(result.measuredWidth, width, widthMode, 0);
        var heightAndState = frame_common_1.View.resolveSizeAndState(result.measuredHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Frame.prototype.measurePage = function (page) {
        var heightSpec = this._heightMeasureSpec;
        if (page && !page.backgroundSpanUnderStatusBar && !this.parent) {
            var height = frame_common_1.layout.getMeasureSpecSize(this._heightMeasureSpec);
            var heightMode = frame_common_1.layout.getMeasureSpecMode(this._heightMeasureSpec);
            var statusBarHeight = uiUtils.ios.getStatusBarHeight();
            heightSpec = frame_common_1.layout.makeMeasureSpec(height - statusBarHeight, heightMode);
        }
        return frame_common_1.View.measureChild(this, page, this._widthMeasureSpec, heightSpec);
    };
    Frame.prototype.onLayout = function (left, top, right, bottom) {
        this._right = right;
        this._bottom = bottom;
        this._handleHigherInCallStatusBarIfNeeded();
        this.layoutPage(this.currentPage);
    };
    Frame.prototype.layoutPage = function (page) {
        if (page && page._viewWillDisappear) {
            return;
        }
        var statusBarHeight = (page && !page.backgroundSpanUnderStatusBar && !this.parent) ? uiUtils.ios.getStatusBarHeight() : 0;
        if (this._ios.showNavigationBar &&
            !this._ios.controller.navigationBar.translucent &&
            page && page._ios && !page._ios.shown) {
            statusBarHeight = 0;
        }
        frame_common_1.View.layoutChild(this, page, 0, statusBarHeight, this._right, this._bottom);
    };
    Object.defineProperty(Frame.prototype, "navigationBarHeight", {
        get: function () {
            var navigationBar = this._ios.controller.navigationBar;
            return (navigationBar && !this._ios.controller.navigationBarHidden) ? navigationBar.frame.size.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype._setNativeViewFrame = function (nativeView, frame) {
        if (nativeView.frame.size.width === frame.size.width && nativeView.frame.size.height === frame.size.height) {
            return;
        }
        _super.prototype._setNativeViewFrame.call(this, nativeView, frame);
    };
    Frame.prototype.remeasureFrame = function () {
        this.requestLayout();
        var window = this.nativeViewProtected.window;
        if (window) {
            window.layoutIfNeeded();
        }
    };
    Frame.prototype._onNavigatingTo = function (backstackEntry, isBack) {
    };
    Frame.prototype._handleHigherInCallStatusBarIfNeeded = function () {
        var statusBarHeight = uiUtils.ios.getStatusBarHeight();
        if (!this._ios ||
            !this._ios.controller ||
            !this._ios.controller.navigationBar ||
            this._ios.controller.navigationBar.hidden ||
            utils.layout.toDevicePixels(this._ios.controller.navigationBar.frame.origin.y) === statusBarHeight) {
            return;
        }
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("Forcing navigationBar.frame.origin.y to " + statusBarHeight + " due to a higher in-call status-bar", frame_common_1.traceCategories.Layout);
        }
        this._ios.controller.navigationBar.autoresizingMask = 0;
        this._ios.controller.navigationBar.removeConstraints(this._ios.controller.navigationBar.constraints);
        this._ios.controller.navigationBar.frame = CGRectMake(this._ios.controller.navigationBar.frame.origin.x, utils.layout.toDeviceIndependentPixels(statusBarHeight), this._ios.controller.navigationBar.frame.size.width, this._ios.controller.navigationBar.frame.size.height);
    };
    __decorate([
        profiling_1.profile
    ], Frame.prototype, "_navigateCore", null);
    return Frame;
}(frame_common_1.FrameBase));
exports.Frame = Frame;
var transitionDelegates = new Array();
var TransitionDelegate = (function (_super) {
    __extends(TransitionDelegate, _super);
    function TransitionDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransitionDelegate.initWithOwnerId = function (id) {
        var delegate = TransitionDelegate.new();
        delegate._id = id;
        transitionDelegates.push(delegate);
        return delegate;
    };
    TransitionDelegate.prototype.animationWillStart = function (animationID, context) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("START " + this._id, frame_common_1.traceCategories.Transition);
        }
    };
    TransitionDelegate.prototype.animationDidStop = function (animationID, finished, context) {
        if (finished) {
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite("END " + this._id, frame_common_1.traceCategories.Transition);
            }
        }
        else {
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite("CANCEL " + this._id, frame_common_1.traceCategories.Transition);
            }
        }
        var index = transitionDelegates.indexOf(this);
        if (index > -1) {
            transitionDelegates.splice(index, 1);
        }
    };
    TransitionDelegate.ObjCExposedMethods = {
        "animationWillStart": { returns: interop.types.void, params: [NSString, NSObject] },
        "animationDidStop": { returns: interop.types.void, params: [NSString, NSNumber, NSObject] }
    };
    return TransitionDelegate;
}(NSObject));
var _defaultTransitionDuration = 0.35;
var UINavigationControllerAnimatedDelegate = (function (_super) {
    __extends(UINavigationControllerAnimatedDelegate, _super);
    function UINavigationControllerAnimatedDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UINavigationControllerAnimatedDelegate.prototype.navigationControllerAnimationControllerForOperationFromViewControllerToViewController = function (navigationController, operation, fromVC, toVC) {
        var viewController;
        switch (operation) {
            case 1:
                viewController = toVC;
                break;
            case 2:
                viewController = fromVC;
                break;
        }
        if (!viewController) {
            return null;
        }
        var navigationTransition = viewController[TRANSITION];
        if (!navigationTransition) {
            return null;
        }
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("UINavigationControllerImpl.navigationControllerAnimationControllerForOperationFromViewControllerToViewController(" + operation + ", " + fromVC + ", " + toVC + "), transition: " + JSON.stringify(navigationTransition), frame_common_1.traceCategories.NativeLifecycle);
        }
        var curve = _getNativeCurve(navigationTransition);
        var animationController = fragment_transitions_1._createIOSAnimatedTransitioning(navigationTransition, curve, operation, fromVC, toVC);
        return animationController;
    };
    UINavigationControllerAnimatedDelegate.ObjCProtocols = [UINavigationControllerDelegate];
    return UINavigationControllerAnimatedDelegate;
}(NSObject));
var UINavigationControllerImpl = (function (_super) {
    __extends(UINavigationControllerImpl, _super);
    function UINavigationControllerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UINavigationControllerImpl.initWithOwner = function (owner) {
        var controller = UINavigationControllerImpl.new();
        controller._owner = owner;
        return controller;
    };
    Object.defineProperty(UINavigationControllerImpl.prototype, "owner", {
        get: function () {
            return this._owner.get();
        },
        enumerable: true,
        configurable: true
    });
    UINavigationControllerImpl.prototype.viewWillAppear = function (animated) {
        _super.prototype.viewWillAppear.call(this, animated);
        var owner = this._owner.get();
        if (owner && !owner.isLoaded && !owner.parent) {
            owner.onLoaded();
        }
    };
    UINavigationControllerImpl.prototype.viewDidDisappear = function (animated) {
        _super.prototype.viewDidDisappear.call(this, animated);
        var owner = this._owner.get();
        if (owner && owner.isLoaded && !owner.parent) {
            owner.onUnloaded();
        }
    };
    UINavigationControllerImpl.prototype.viewDidLayoutSubviews = function () {
        var owner = this._owner.get();
        if (owner) {
            if (frame_common_1.traceEnabled()) {
                frame_common_1.traceWrite(this._owner + " viewDidLayoutSubviews, isLoaded = " + owner.isLoaded, frame_common_1.traceCategories.ViewHierarchy);
            }
            owner._updateLayout();
        }
    };
    UINavigationControllerImpl.prototype.animateWithDuration = function (navigationTransition, nativeTransition, transitionType, baseCallback) {
        var _this = this;
        var duration = navigationTransition.duration ? navigationTransition.duration / 1000 : _defaultTransitionDuration;
        var curve = _getNativeCurve(navigationTransition);
        var transitionTraced = frame_common_1.isCategorySet(frame_common_1.traceCategories.Transition);
        var transitionDelegate;
        if (transitionTraced) {
            var id = _getTransitionId(nativeTransition, transitionType);
            transitionDelegate = TransitionDelegate.initWithOwnerId(id);
        }
        UIView.animateWithDurationAnimations(duration, function () {
            if (transitionTraced) {
                UIView.setAnimationDelegate(transitionDelegate);
            }
            UIView.setAnimationWillStartSelector("animationWillStart");
            UIView.setAnimationDidStopSelector("animationDidStop");
            UIView.setAnimationCurve(curve);
            baseCallback();
            UIView.setAnimationTransitionForViewCache(nativeTransition, _this.view, true);
        });
    };
    UINavigationControllerImpl.prototype.pushViewControllerAnimated = function (viewController, animated) {
        var _this = this;
        var navigationTransition = viewController[TRANSITION];
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("UINavigationControllerImpl.pushViewControllerAnimated(" + viewController + ", " + animated + "); transition: " + JSON.stringify(navigationTransition), frame_common_1.traceCategories.NativeLifecycle);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, true);
        if (!animated || !navigationTransition || !nativeTransition) {
            _super.prototype.pushViewControllerAnimated.call(this, viewController, animated);
            return;
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "push", function () {
            _super.prototype.pushViewControllerAnimated.call(_this, viewController, false);
        });
    };
    UINavigationControllerImpl.prototype.setViewControllersAnimated = function (viewControllers, animated) {
        var _this = this;
        var viewController = viewControllers.lastObject;
        var navigationTransition = viewController[TRANSITION];
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("UINavigationControllerImpl.setViewControllersAnimated(" + viewControllers + ", " + animated + "); transition: " + JSON.stringify(navigationTransition), frame_common_1.traceCategories.NativeLifecycle);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, true);
        if (!animated || !navigationTransition || !nativeTransition) {
            _super.prototype.setViewControllersAnimated.call(this, viewControllers, animated);
            return;
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "set", function () {
            _super.prototype.setViewControllersAnimated.call(_this, viewControllers, false);
        });
    };
    UINavigationControllerImpl.prototype.popViewControllerAnimated = function (animated) {
        var _this = this;
        var lastViewController = this.viewControllers.lastObject;
        var navigationTransition = lastViewController[TRANSITION];
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("UINavigationControllerImpl.popViewControllerAnimated(" + animated + "); transition: " + JSON.stringify(navigationTransition), frame_common_1.traceCategories.NativeLifecycle);
        }
        if (navigationTransition && navigationTransition.name === "non-animated") {
            return _super.prototype.popViewControllerAnimated.call(this, false);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, false);
        if (!animated || !navigationTransition || !nativeTransition) {
            return _super.prototype.popViewControllerAnimated.call(this, animated);
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "pop", function () {
            _super.prototype.popViewControllerAnimated.call(_this, false);
        });
        return null;
    };
    UINavigationControllerImpl.prototype.popToViewControllerAnimated = function (viewController, animated) {
        var _this = this;
        var lastViewController = this.viewControllers.lastObject;
        var navigationTransition = lastViewController[TRANSITION];
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("UINavigationControllerImpl.popToViewControllerAnimated(" + viewController + ", " + animated + "); transition: " + JSON.stringify(navigationTransition), frame_common_1.traceCategories.NativeLifecycle);
        }
        if (navigationTransition && navigationTransition.name === "non-animated") {
            return _super.prototype.popToViewControllerAnimated.call(this, viewController, false);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, false);
        if (!animated || !navigationTransition || !nativeTransition) {
            return _super.prototype.popToViewControllerAnimated.call(this, viewController, animated);
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "popTo", function () {
            _super.prototype.popToViewControllerAnimated.call(_this, viewController, false);
        });
        return null;
    };
    __decorate([
        profiling_1.profile
    ], UINavigationControllerImpl.prototype, "viewWillAppear", null);
    __decorate([
        profiling_1.profile
    ], UINavigationControllerImpl.prototype, "viewDidDisappear", null);
    __decorate([
        profiling_1.profile
    ], UINavigationControllerImpl.prototype, "viewDidLayoutSubviews", null);
    __decorate([
        profiling_1.profile
    ], UINavigationControllerImpl.prototype, "pushViewControllerAnimated", null);
    __decorate([
        profiling_1.profile
    ], UINavigationControllerImpl.prototype, "setViewControllersAnimated", null);
    return UINavigationControllerImpl;
}(UINavigationController));
function _getTransitionId(nativeTransition, transitionType) {
    var name;
    switch (nativeTransition) {
        case 4:
            name = "CurlDown";
            break;
        case 3:
            name = "CurlUp";
            break;
        case 1:
            name = "FlipFromLeft";
            break;
        case 2:
            name = "FlipFromRight";
            break;
        case 0:
            name = "None";
            break;
    }
    return name + " " + transitionType;
}
function _getNativeTransition(navigationTransition, push) {
    if (navigationTransition && navigationTransition.name) {
        switch (navigationTransition.name.toLowerCase()) {
            case "flip":
            case "flipright":
                return push ? 2 : 1;
            case "flipleft":
                return push ? 1 : 2;
            case "curl":
            case "curlup":
                return push ? 3 : 4;
            case "curldown":
                return push ? 4 : 3;
        }
    }
    return null;
}
function _getNativeCurve(transition) {
    if (transition.curve) {
        switch (transition.curve) {
            case "easeIn":
                if (frame_common_1.traceEnabled()) {
                    frame_common_1.traceWrite("Transition curve resolved to UIViewAnimationCurve.EaseIn.", frame_common_1.traceCategories.Transition);
                }
                return 1;
            case "easeOut":
                if (frame_common_1.traceEnabled()) {
                    frame_common_1.traceWrite("Transition curve resolved to UIViewAnimationCurve.EaseOut.", frame_common_1.traceCategories.Transition);
                }
                return 2;
            case "easeInOut":
                if (frame_common_1.traceEnabled()) {
                    frame_common_1.traceWrite("Transition curve resolved to UIViewAnimationCurve.EaseInOut.", frame_common_1.traceCategories.Transition);
                }
                return 0;
            case "linear":
                if (frame_common_1.traceEnabled()) {
                    frame_common_1.traceWrite("Transition curve resolved to UIViewAnimationCurve.Linear.", frame_common_1.traceCategories.Transition);
                }
                return 3;
            default:
                if (frame_common_1.traceEnabled()) {
                    frame_common_1.traceWrite("Transition curve resolved to original: " + transition.curve, frame_common_1.traceCategories.Transition);
                }
                return transition.curve;
        }
    }
    return 0;
}
exports._getNativeCurve = _getNativeCurve;
var iOSFrame = (function () {
    function iOSFrame(frame) {
        this._navBarVisibility = "auto";
        this._frame = frame;
        this._controller = UINavigationControllerImpl.initWithOwner(new WeakRef(frame));
        this._controller.automaticallyAdjustsScrollViewInsets = false;
    }
    Object.defineProperty(iOSFrame.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(iOSFrame.prototype, "showNavigationBar", {
        get: function () {
            return this._showNavigationBar;
        },
        set: function (value) {
            var change = this._showNavigationBar !== value;
            this._showNavigationBar = value;
            var animated = !this._frame._isInitialNavigation && !this._disableNavBarAnimation;
            this._controller.setNavigationBarHiddenAnimated(!value, animated);
            var currentPage = this._controller.owner.currentPage;
            if (currentPage && change) {
                currentPage.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(iOSFrame.prototype, "navBarVisibility", {
        get: function () {
            return this._navBarVisibility;
        },
        set: function (value) {
            this._navBarVisibility = value;
        },
        enumerable: true,
        configurable: true
    });
    return iOSFrame;
}());
//# sourceMappingURL=frame.ios.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("./fragment.transitions");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var absolute_layout_common_1 = __webpack_require__(19);
__export(__webpack_require__(19));
var AbsoluteLayout = (function (_super) {
    __extends(AbsoluteLayout, _super);
    function AbsoluteLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbsoluteLayout.prototype.onLeftChanged = function (view, oldValue, newValue) {
        this.requestLayout();
    };
    AbsoluteLayout.prototype.onTopChanged = function (view, oldValue, newValue) {
        this.requestLayout();
    };
    AbsoluteLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = absolute_layout_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = absolute_layout_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = absolute_layout_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = absolute_layout_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var childMeasureSpec = absolute_layout_common_1.layout.makeMeasureSpec(0, absolute_layout_common_1.layout.UNSPECIFIED);
        this.eachLayoutChild(function (child, last) {
            var childSize = absolute_layout_common_1.View.measureChild(_this, child, childMeasureSpec, childMeasureSpec);
            measureWidth = Math.max(measureWidth, child.effectiveLeft + childSize.measuredWidth);
            measureHeight = Math.max(measureHeight, child.effectiveTop + childSize.measuredHeight);
        });
        measureWidth += this.effectiveBorderLeftWidth + this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderRightWidth;
        measureHeight += this.effectiveBorderTopWidth + this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderBottomWidth;
        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);
        var widthAndState = absolute_layout_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = absolute_layout_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    AbsoluteLayout.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        this.eachLayoutChild(function (child, last) {
            var childWidth = child.getMeasuredWidth();
            var childHeight = child.getMeasuredHeight();
            var childLeft = _this.effectiveBorderLeftWidth + _this.effectivePaddingLeft + child.effectiveLeft;
            var childTop = _this.effectiveBorderTopWidth + _this.effectivePaddingTop + child.effectiveTop;
            var childRight = childLeft + childWidth + child.effectiveMarginLeft + child.effectiveMarginRight;
            var childBottom = childTop + childHeight + child.effectiveMarginTop + child.effectiveMarginBottom;
            absolute_layout_common_1.View.layoutChild(_this, child, childLeft, childTop, childRight, childBottom);
        });
    };
    return AbsoluteLayout;
}(absolute_layout_common_1.AbsoluteLayoutBase));
exports.AbsoluteLayout = AbsoluteLayout;
//# sourceMappingURL=absolute-layout.ios.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var activity_indicator_common_1 = __webpack_require__(20);
__export(__webpack_require__(20));
var ActivityIndicator = (function (_super) {
    __extends(ActivityIndicator, _super);
    function ActivityIndicator() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(2);
        _this.nativeViewProtected.hidesWhenStopped = true;
        return _this;
    }
    Object.defineProperty(ActivityIndicator.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    ActivityIndicator.prototype[activity_indicator_common_1.busyProperty.getDefault] = function () {
        if (this.nativeViewProtected.isAnimating) {
            return this.nativeViewProtected.isAnimating();
        }
        else {
            return this.nativeViewProtected.animating;
        }
    };
    ActivityIndicator.prototype[activity_indicator_common_1.busyProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        if (value) {
            nativeView.startAnimating();
        }
        else {
            nativeView.stopAnimating();
        }
        if (nativeView.hidesWhenStopped) {
            this.requestLayout();
        }
    };
    ActivityIndicator.prototype[activity_indicator_common_1.colorProperty.getDefault] = function () {
        return this.nativeViewProtected.color;
    };
    ActivityIndicator.prototype[activity_indicator_common_1.colorProperty.setNative] = function (value) {
        this.nativeViewProtected.color = value instanceof activity_indicator_common_1.Color ? value.ios : value;
    };
    return ActivityIndicator;
}(activity_indicator_common_1.ActivityIndicatorBase));
exports.ActivityIndicator = ActivityIndicator;
//# sourceMappingURL=activity-indicator.ios.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = __webpack_require__(71);
var Border = (function (_super) {
    __extends(Border, _super);
    function Border() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Border.prototype, "cornerRadius", {
        get: function () {
            if (typeof this.borderRadius === "number") {
                return this.borderRadius;
            }
            return 0;
        },
        set: function (value) {
            this.borderRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Border.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = content_view_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = content_view_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = content_view_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = content_view_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var horizontalBorderLength = this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalBorderLength = this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var result = content_view_1.View.measureChild(this, this.layoutView, content_view_1.layout.makeMeasureSpec(width - horizontalBorderLength, widthMode), content_view_1.layout.makeMeasureSpec(height - verticalBorderLength, heightMode));
        var widthAndState = content_view_1.View.resolveSizeAndState(result.measuredWidth + horizontalBorderLength, width, widthMode, 0);
        var heightAndState = content_view_1.View.resolveSizeAndState(result.measuredHeight + verticalBorderLength, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Border.prototype.onLayout = function (left, top, right, bottom) {
        var horizontalBorderLength = this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalBorderLength = this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        content_view_1.View.layoutChild(this, this.layoutView, this.effectiveBorderLeftWidth, this.effectiveBorderTopWidth, right - left - horizontalBorderLength, bottom - top - verticalBorderLength);
    };
    Border = __decorate([
        Deprecated
    ], Border);
    return Border;
}(content_view_1.ContentView));
exports.Border = Border;
Border.prototype.recycleNativeView = "auto";
//# sourceMappingURL=border.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("../content-view");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var control_state_change_1 = __webpack_require__(73);
var button_common_1 = __webpack_require__(21);
__export(__webpack_require__(21));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = UIButton.buttonWithType(1);
        _this._tapHandler = TapHandlerImpl.initWithOwner(new WeakRef(_this));
        _this.nativeViewProtected.addTargetActionForControlEvents(_this._tapHandler, "tap", 64);
        return _this;
    }
    Object.defineProperty(Button.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.onUnloaded = function () {
        _super.prototype.onUnloaded.call(this);
        if (this._stateChangedHandler) {
            this._stateChangedHandler.stop();
        }
    };
    Button.prototype._updateHandler = function (subscribe) {
        var _this = this;
        if (subscribe) {
            if (!this._stateChangedHandler) {
                this._stateChangedHandler = new control_state_change_1.ControlStateChangeListener(this.nativeViewProtected, function (s) {
                    _this._goToVisualState(s);
                });
            }
            this._stateChangedHandler.start();
        }
        else {
            this._stateChangedHandler.stop();
        }
    };
    Button.prototype[button_common_1.borderTopWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.top,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.borderTopWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var top = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingTop + this.effectiveBorderTopWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: top, left: inset.left, bottom: inset.bottom, right: inset.right };
    };
    Button.prototype[button_common_1.borderRightWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.right,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.borderRightWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var right = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingRight + this.effectiveBorderRightWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: inset.top, left: inset.left, bottom: inset.bottom, right: right };
    };
    Button.prototype[button_common_1.borderBottomWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.bottom,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.borderBottomWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var bottom = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingBottom + this.effectiveBorderBottomWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: inset.top, left: inset.left, bottom: bottom, right: inset.right };
    };
    Button.prototype[button_common_1.borderLeftWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.left,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.borderLeftWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var left = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingLeft + this.effectiveBorderLeftWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: inset.top, left: left, bottom: inset.bottom, right: inset.right };
    };
    Button.prototype[button_common_1.paddingTopProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.top,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.paddingTopProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var top = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingTop + this.effectiveBorderTopWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: top, left: inset.left, bottom: inset.bottom, right: inset.right };
    };
    Button.prototype[button_common_1.paddingRightProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.right,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.paddingRightProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var right = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingRight + this.effectiveBorderRightWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: inset.top, left: inset.left, bottom: inset.bottom, right: right };
    };
    Button.prototype[button_common_1.paddingBottomProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.bottom,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.paddingBottomProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var bottom = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingBottom + this.effectiveBorderBottomWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: inset.top, left: inset.left, bottom: bottom, right: inset.right };
    };
    Button.prototype[button_common_1.paddingLeftProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.contentEdgeInsets.left,
            unit: "px"
        };
    };
    Button.prototype[button_common_1.paddingLeftProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.contentEdgeInsets;
        var left = button_common_1.layout.toDeviceIndependentPixels(this.effectivePaddingLeft + this.effectiveBorderLeftWidth);
        this.nativeViewProtected.contentEdgeInsets = { top: inset.top, left: left, bottom: inset.bottom, right: inset.right };
    };
    Button.prototype[button_common_1.textAlignmentProperty.setNative] = function (value) {
        switch (value) {
            case "left":
                this.nativeViewProtected.titleLabel.textAlignment = 0;
                this.nativeViewProtected.contentHorizontalAlignment = 1;
                break;
            case "initial":
            case "center":
                this.nativeViewProtected.titleLabel.textAlignment = 1;
                this.nativeViewProtected.contentHorizontalAlignment = 0;
                break;
            case "right":
                this.nativeViewProtected.titleLabel.textAlignment = 2;
                this.nativeViewProtected.contentHorizontalAlignment = 2;
                break;
        }
    };
    Button.prototype[button_common_1.whiteSpaceProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected.titleLabel;
        switch (value) {
            case "normal":
                nativeView.lineBreakMode = 0;
                nativeView.numberOfLines = 0;
                break;
            case "nowrap":
            case "initial":
                nativeView.lineBreakMode = 5;
                nativeView.numberOfLines = 1;
                break;
        }
    };
    Button.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        if (!this.textWrap) {
            return _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        }
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            var width = button_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
            var widthMode = button_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
            var height = button_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
            var heightMode = button_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
            var horizontalPadding = this.effectivePaddingLeft + this.effectiveBorderLeftWidth + this.effectivePaddingRight + this.effectiveBorderRightWidth;
            var verticalPadding = this.effectivePaddingTop + this.effectiveBorderTopWidth + this.effectivePaddingBottom + this.effectiveBorderBottomWidth;
            if (verticalPadding === 0) {
                verticalPadding = button_common_1.layout.toDevicePixels(12);
            }
            var desiredSize = button_common_1.layout.measureNativeView(nativeView.titleLabel, width - horizontalPadding, widthMode, height - verticalPadding, heightMode);
            desiredSize.width = desiredSize.width + horizontalPadding;
            desiredSize.height = desiredSize.height + verticalPadding;
            var measureWidth = Math.max(desiredSize.width, this.effectiveMinWidth);
            var measureHeight = Math.max(desiredSize.height, this.effectiveMinHeight);
            var widthAndState = button_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
            var heightAndState = button_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
            this.setMeasuredDimension(widthAndState, heightAndState);
        }
    };
    __decorate([
        button_common_1.PseudoClassHandler("normal", "highlighted", "pressed", "active")
    ], Button.prototype, "_updateHandler", null);
    return Button;
}(button_common_1.ButtonBase));
exports.Button = Button;
var TapHandlerImpl = (function (_super) {
    __extends(TapHandlerImpl, _super);
    function TapHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapHandlerImpl.initWithOwner = function (owner) {
        var handler = TapHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    TapHandlerImpl.prototype.tap = function (args) {
        var owner = this._owner.get();
        if (owner) {
            owner._emit(button_common_1.ButtonBase.tapEvent);
        }
    };
    TapHandlerImpl.ObjCExposedMethods = {
        "tap": { returns: interop.types.void, params: [interop.types.id] }
    };
    return TapHandlerImpl;
}(NSObject));
//# sourceMappingURL=button.ios.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("../core/control-state-change");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var date_picker_common_1 = __webpack_require__(22);
var utils_1 = __webpack_require__(1);
__export(__webpack_require__(22));
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = UIDatePicker.new();
        _this.nativeViewProtected.datePickerMode = 1;
        _this._changeHandler = UIDatePickerChangeHandlerImpl.initWithOwner(new WeakRef(_this));
        _this.nativeViewProtected.addTargetActionForControlEvents(_this._changeHandler, "valueChanged", 4096);
        return _this;
    }
    Object.defineProperty(DatePicker.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    DatePicker.prototype[date_picker_common_1.yearProperty.setNative] = function (value) {
        this.date = new Date(value, this.month - 1, this.day);
    };
    DatePicker.prototype[date_picker_common_1.monthProperty.setNative] = function (value) {
        this.date = new Date(this.year, value - 1, this.day);
    };
    DatePicker.prototype[date_picker_common_1.dayProperty.setNative] = function (value) {
        this.date = new Date(this.year, this.month - 1, value);
    };
    DatePicker.prototype[date_picker_common_1.dateProperty.setNative] = function (value) {
        var picker = this.nativeViewProtected;
        var comps = utils_1.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(4 | 8 | 16, picker.date);
        comps.year = value.getFullYear();
        comps.month = value.getMonth() + 1;
        comps.day = value.getDate();
        picker.setDateAnimated(utils_1.ios.getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(comps), false);
    };
    DatePicker.prototype[date_picker_common_1.maxDateProperty.getDefault] = function () {
        return this.nativeViewProtected.maximumDate;
    };
    DatePicker.prototype[date_picker_common_1.maxDateProperty.setNative] = function (value) {
        var picker = this.nativeViewProtected;
        var nsDate = NSDate.dateWithTimeIntervalSince1970(value.getTime() / 1000);
        picker.maximumDate = nsDate;
    };
    DatePicker.prototype[date_picker_common_1.minDateProperty.getDefault] = function () {
        return this.nativeViewProtected.minimumDate;
    };
    DatePicker.prototype[date_picker_common_1.minDateProperty.setNative] = function (value) {
        var picker = this.nativeViewProtected;
        var nsDate = NSDate.dateWithTimeIntervalSince1970(value.getTime() / 1000);
        picker.minimumDate = nsDate;
    };
    DatePicker.prototype[date_picker_common_1.colorProperty.getDefault] = function () {
        return this.nativeViewProtected.valueForKey("textColor");
    };
    DatePicker.prototype[date_picker_common_1.colorProperty.setNative] = function (value) {
        var picker = this.nativeViewProtected;
        picker.setValueForKey(value instanceof date_picker_common_1.Color ? value.ios : value, "textColor");
    };
    return DatePicker;
}(date_picker_common_1.DatePickerBase));
exports.DatePicker = DatePicker;
var UIDatePickerChangeHandlerImpl = (function (_super) {
    __extends(UIDatePickerChangeHandlerImpl, _super);
    function UIDatePickerChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIDatePickerChangeHandlerImpl.initWithOwner = function (owner) {
        var impl = UIDatePickerChangeHandlerImpl.new();
        impl._owner = owner;
        return impl;
    };
    UIDatePickerChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var comps = utils_1.ios.getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(4 | 8 | 16, sender.date);
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        var dateChanged = false;
        if (comps.year !== owner.year) {
            date_picker_common_1.yearProperty.nativeValueChange(owner, comps.year);
            dateChanged = true;
        }
        if (comps.month !== owner.month) {
            date_picker_common_1.monthProperty.nativeValueChange(owner, comps.month);
            dateChanged = true;
        }
        if (comps.day !== owner.day) {
            date_picker_common_1.dayProperty.nativeValueChange(owner, comps.day);
            dateChanged = true;
        }
        if (dateChanged) {
            date_picker_common_1.dateProperty.nativeValueChange(owner, new Date(comps.year, comps.month - 1, comps.day));
        }
    };
    UIDatePickerChangeHandlerImpl.ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UIDatePicker] }
    };
    return UIDatePickerChangeHandlerImpl;
}(NSObject));
//# sourceMappingURL=date-picker.ios.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var dock_layout_common_1 = __webpack_require__(23);
__export(__webpack_require__(23));
var DockLayout = (function (_super) {
    __extends(DockLayout, _super);
    function DockLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DockLayout.prototype.onDockChanged = function (view, oldValue, newValue) {
        this.requestLayout();
    };
    DockLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = dock_layout_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = dock_layout_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = dock_layout_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = dock_layout_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var horizontalPaddingsAndMargins = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalPaddingsAndMargins = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var remainingWidth = widthMode === dock_layout_common_1.layout.UNSPECIFIED ? Number.MAX_VALUE : width - horizontalPaddingsAndMargins;
        var remainingHeight = heightMode === dock_layout_common_1.layout.UNSPECIFIED ? Number.MAX_VALUE : height - verticalPaddingsAndMargins;
        var tempHeight = 0;
        var tempWidth = 0;
        var childWidthMeasureSpec;
        var childHeightMeasureSpec;
        this.eachLayoutChild(function (child, last) {
            if (_this.stretchLastChild && last) {
                childWidthMeasureSpec = dock_layout_common_1.layout.makeMeasureSpec(remainingWidth, widthMode);
                childHeightMeasureSpec = dock_layout_common_1.layout.makeMeasureSpec(remainingHeight, heightMode);
            }
            else {
                childWidthMeasureSpec = dock_layout_common_1.layout.makeMeasureSpec(remainingWidth, widthMode === dock_layout_common_1.layout.EXACTLY ? dock_layout_common_1.layout.AT_MOST : widthMode);
                childHeightMeasureSpec = dock_layout_common_1.layout.makeMeasureSpec(remainingHeight, heightMode === dock_layout_common_1.layout.EXACTLY ? dock_layout_common_1.layout.AT_MOST : heightMode);
            }
            var childSize = dock_layout_common_1.View.measureChild(_this, child, childWidthMeasureSpec, childHeightMeasureSpec);
            switch (child.dock) {
                case "top":
                case "bottom":
                    remainingHeight = Math.max(0, remainingHeight - childSize.measuredHeight);
                    tempHeight += childSize.measuredHeight;
                    measureWidth = Math.max(measureWidth, tempWidth + childSize.measuredWidth);
                    measureHeight = Math.max(measureHeight, tempHeight);
                    break;
                case "left":
                case "right":
                default:
                    remainingWidth = Math.max(0, remainingWidth - childSize.measuredWidth);
                    tempWidth += childSize.measuredWidth;
                    measureWidth = Math.max(measureWidth, tempWidth);
                    measureHeight = Math.max(measureHeight, tempHeight + childSize.measuredHeight);
                    break;
            }
        });
        measureWidth += horizontalPaddingsAndMargins;
        measureHeight += verticalPaddingsAndMargins;
        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);
        var widthAndState = dock_layout_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = dock_layout_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    DockLayout.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var horizontalPaddingsAndMargins = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalPaddingsAndMargins = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var childLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft;
        var childTop = this.effectiveBorderTopWidth + this.effectivePaddingTop;
        var x = childLeft;
        var y = childTop;
        var remainingWidth = Math.max(0, right - left - horizontalPaddingsAndMargins);
        var remainingHeight = Math.max(0, bottom - top - verticalPaddingsAndMargins);
        this.eachLayoutChild(function (child, last) {
            var childWidth = child.getMeasuredWidth() + child.effectiveMarginLeft + child.effectiveMarginRight;
            var childHeight = child.getMeasuredHeight() + child.effectiveMarginTop + child.effectiveMarginBottom;
            if (last && _this.stretchLastChild) {
                dock_layout_common_1.View.layoutChild(_this, child, x, y, x + remainingWidth, y + remainingHeight);
                return;
            }
            var dock = DockLayout.getDock(child);
            switch (dock) {
                case "top":
                    childLeft = x;
                    childTop = y;
                    childWidth = remainingWidth;
                    y += childHeight;
                    remainingHeight = Math.max(0, remainingHeight - childHeight);
                    break;
                case "bottom":
                    childLeft = x;
                    childTop = y + remainingHeight - childHeight;
                    childWidth = remainingWidth;
                    remainingHeight = Math.max(0, remainingHeight - childHeight);
                    break;
                case "right":
                    childLeft = x + remainingWidth - childWidth;
                    childTop = y;
                    childHeight = remainingHeight;
                    remainingWidth = Math.max(0, remainingWidth - childWidth);
                    break;
                case "left":
                default:
                    childLeft = x;
                    childTop = y;
                    childHeight = remainingHeight;
                    x += childWidth;
                    remainingWidth = Math.max(0, remainingWidth - childWidth);
                    break;
            }
            dock_layout_common_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childTop + childHeight);
        });
    };
    return DockLayout;
}(dock_layout_common_1.DockLayoutBase));
exports.DockLayout = DockLayout;
//# sourceMappingURL=dock-layout.ios.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var grid_layout_common_1 = __webpack_require__(24);
__export(__webpack_require__(24));
var GridLayout = (function (_super) {
    __extends(GridLayout, _super);
    function GridLayout() {
        var _this = _super.call(this) || this;
        _this.columnOffsets = new Array();
        _this.rowOffsets = new Array();
        _this.map = new Map();
        _this.helper = new MeasureHelper(_this);
        return _this;
    }
    GridLayout.prototype._onRowAdded = function (itemSpec) {
        this.helper.rows.push(new ItemGroup(itemSpec));
    };
    GridLayout.prototype._onColumnAdded = function (itemSpec) {
        this.helper.columns.push(new ItemGroup(itemSpec));
    };
    GridLayout.prototype._onRowRemoved = function (itemSpec, index) {
        this.helper.rows[index].children.length = 0;
        this.helper.rows.splice(index, 1);
    };
    GridLayout.prototype._onColumnRemoved = function (itemSpec, index) {
        this.helper.columns[index].children.length = 0;
        this.helper.columns.splice(index, 1);
    };
    GridLayout.prototype._registerLayoutChild = function (child) {
        this.addToMap(child);
    };
    GridLayout.prototype._unregisterLayoutChild = function (child) {
        this.removeFromMap(child);
    };
    GridLayout.prototype.getColumnIndex = function (view) {
        return Math.max(0, Math.min(GridLayout.getColumn(view), this.columnsInternal.length - 1));
    };
    GridLayout.prototype.getRowIndex = function (view) {
        return Math.max(0, Math.min(GridLayout.getRow(view), this.rowsInternal.length - 1));
    };
    GridLayout.prototype.getColumnSpan = function (view, columnIndex) {
        return Math.max(1, Math.min(GridLayout.getColumnSpan(view), this.columnsInternal.length - columnIndex));
    };
    GridLayout.prototype.getRowSpan = function (view, rowIndex) {
        return Math.max(1, Math.min(GridLayout.getRowSpan(view), this.rowsInternal.length - rowIndex));
    };
    GridLayout.prototype.getColumnSpec = function (view) {
        return this.columnsInternal[this.getColumnIndex(view)] || this.helper.singleColumn;
    };
    GridLayout.prototype.getRowSpec = function (view) {
        return this.rowsInternal[this.getRowIndex(view)] || this.helper.singleRow;
    };
    GridLayout.prototype.updateMeasureSpecs = function (child, measureSpec) {
        var column = this.getColumnSpec(child);
        var columnIndex = this.getColumnIndex(child);
        var columnSpan = this.getColumnSpan(child, columnIndex);
        var row = this.getRowSpec(child);
        var rowIndex = this.getRowIndex(child);
        var rowSpan = this.getRowSpan(child, rowIndex);
        measureSpec.setColumn(column);
        measureSpec.setColumnIndex(columnIndex);
        measureSpec.setColumnSpan(columnSpan);
        measureSpec.setRow(row);
        measureSpec.setRowIndex(rowIndex);
        measureSpec.setRowSpan(rowSpan);
        measureSpec.autoColumnsCount = 0;
        measureSpec.autoRowsCount = 0;
        measureSpec.measured = false;
        measureSpec.pixelHeight = 0;
        measureSpec.pixelWidth = 0;
        measureSpec.starColumnsCount = 0;
        measureSpec.starRowsCount = 0;
    };
    GridLayout.prototype.addToMap = function (child) {
        this.map.set(child, new MeasureSpecs(child));
    };
    GridLayout.prototype.removeFromMap = function (child) {
        this.map.delete(child);
    };
    GridLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = grid_layout_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = grid_layout_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = grid_layout_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = grid_layout_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var horizontalPaddingsAndMargins = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalPaddingsAndMargins = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var infinityWidth = widthMode === grid_layout_common_1.layout.UNSPECIFIED;
        var infinityHeight = heightMode === grid_layout_common_1.layout.UNSPECIFIED;
        this.helper.width = Math.max(0, width - horizontalPaddingsAndMargins);
        this.helper.height = Math.max(0, height - verticalPaddingsAndMargins);
        this.helper.stretchedHorizontally = widthMode === grid_layout_common_1.layout.EXACTLY || (this.horizontalAlignment === "stretch" && !infinityWidth);
        this.helper.stretchedVertically = heightMode === grid_layout_common_1.layout.EXACTLY || (this.verticalAlignment === "stretch" && !infinityHeight);
        this.helper.setInfinityWidth(infinityWidth);
        this.helper.setInfinityHeight(infinityHeight);
        this.helper.clearMeasureSpecs();
        this.helper.init();
        this.eachLayoutChild(function (child, last) {
            var measureSpecs = _this.map.get(child);
            _this.updateMeasureSpecs(child, measureSpecs);
            _this.helper.addMeasureSpec(measureSpecs);
        });
        this.helper.measure();
        measureWidth = this.helper.measuredWidth + horizontalPaddingsAndMargins;
        measureHeight = this.helper.measuredHeight + verticalPaddingsAndMargins;
        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);
        var widthSizeAndState = grid_layout_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightSizeAndState = grid_layout_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthSizeAndState, heightSizeAndState);
    };
    GridLayout.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var paddingLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft;
        var paddingTop = this.effectiveBorderTopWidth + this.effectivePaddingTop;
        this.columnOffsets.length = 0;
        this.rowOffsets.length = 0;
        this.columnOffsets.push(paddingLeft);
        this.rowOffsets.push(paddingTop);
        var offset = this.columnOffsets[0];
        var roundedOffset = paddingLeft;
        var roundedLength = 0;
        var actualLength = 0;
        for (var i = 0, size = this.helper.columns.length; i < size; i++) {
            var columnGroup = this.helper.columns[i];
            offset += columnGroup.length;
            actualLength = offset - roundedOffset;
            roundedLength = Math.round(actualLength);
            columnGroup.rowOrColumn._actualLength = grid_layout_common_1.layout.round(grid_layout_common_1.layout.toDeviceIndependentPixels(roundedLength));
            roundedOffset += roundedLength;
            this.columnOffsets.push(roundedOffset);
        }
        offset = this.rowOffsets[0];
        roundedOffset = paddingTop;
        roundedLength = 0;
        actualLength = 0;
        for (var i = 0, size = this.helper.rows.length; i < size; i++) {
            var rowGroup = this.helper.rows[i];
            offset += rowGroup.length;
            actualLength = offset - roundedOffset;
            roundedLength = Math.round(actualLength);
            rowGroup.rowOrColumn._actualLength = grid_layout_common_1.layout.round(grid_layout_common_1.layout.toDeviceIndependentPixels(roundedLength));
            roundedOffset += roundedLength;
            this.rowOffsets.push(roundedOffset);
        }
        for (var i = 0, columns = this.helper.columns.length; i < columns; i++) {
            var columnGroup = this.helper.columns[i];
            for (var j = 0, children = columnGroup.children.length; j < children; j++) {
                var measureSpec = columnGroup.children[j];
                var childLeft = this.columnOffsets[measureSpec.getColumnIndex()];
                var childRight = this.columnOffsets[measureSpec.getColumnIndex() + measureSpec.getColumnSpan()];
                var childTop = this.rowOffsets[measureSpec.getRowIndex()];
                var childBottom = this.rowOffsets[measureSpec.getRowIndex() + measureSpec.getRowSpan()];
                grid_layout_common_1.View.layoutChild(this, measureSpec.child, childLeft, childTop, childRight, childBottom);
            }
        }
    };
    return GridLayout;
}(grid_layout_common_1.GridLayoutBase));
exports.GridLayout = GridLayout;
var MeasureSpecs = (function () {
    function MeasureSpecs(child) {
        this._columnSpan = 1;
        this._rowSpan = 1;
        this.pixelWidth = 0;
        this.pixelHeight = 0;
        this.starColumnsCount = 0;
        this.starRowsCount = 0;
        this.autoColumnsCount = 0;
        this.autoRowsCount = 0;
        this.measured = false;
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.child = child;
    }
    MeasureSpecs.prototype.getSpanned = function () {
        return this._columnSpan > 1 || this._rowSpan > 1;
    };
    MeasureSpecs.prototype.getIsStar = function () {
        return this.starRowsCount > 0 || this.starColumnsCount > 0;
    };
    MeasureSpecs.prototype.getColumnSpan = function () {
        return this._columnSpan;
    };
    MeasureSpecs.prototype.getRowSpan = function () {
        return this._rowSpan;
    };
    MeasureSpecs.prototype.setRowSpan = function (value) {
        this._rowSpan = Math.max(1, value);
    };
    MeasureSpecs.prototype.setColumnSpan = function (value) {
        this._columnSpan = Math.max(1, value);
    };
    MeasureSpecs.prototype.getRowIndex = function () {
        return this.rowIndex;
    };
    MeasureSpecs.prototype.getColumnIndex = function () {
        return this.columnIndex;
    };
    MeasureSpecs.prototype.setRowIndex = function (value) {
        this.rowIndex = value;
    };
    MeasureSpecs.prototype.setColumnIndex = function (value) {
        this.columnIndex = value;
    };
    MeasureSpecs.prototype.getRow = function () {
        return this.row;
    };
    MeasureSpecs.prototype.getColumn = function () {
        return this.column;
    };
    MeasureSpecs.prototype.setRow = function (value) {
        this.row = value;
    };
    MeasureSpecs.prototype.setColumn = function (value) {
        this.column = value;
    };
    return MeasureSpecs;
}());
var ItemGroup = (function () {
    function ItemGroup(spec) {
        this.length = 0;
        this.measuredCount = 0;
        this.children = new Array();
        this.measureToFix = 0;
        this.currentMeasureToFixCount = 0;
        this.infinityLength = false;
        this.rowOrColumn = spec;
    }
    ItemGroup.prototype.setIsLengthInfinity = function (infinityLength) {
        this.infinityLength = infinityLength;
    };
    ItemGroup.prototype.init = function (density) {
        this.measuredCount = 0;
        this.currentMeasureToFixCount = 0;
        this.length = this.rowOrColumn.isAbsolute ? this.rowOrColumn.value * density : 0;
    };
    ItemGroup.prototype.getAllMeasured = function () {
        return this.measuredCount === this.children.length;
    };
    ItemGroup.prototype.getCanBeFixed = function () {
        return this.currentMeasureToFixCount === this.measureToFix;
    };
    ItemGroup.prototype.getIsAuto = function () {
        return this.rowOrColumn.isAuto || (this.rowOrColumn.isStar && this.infinityLength);
    };
    ItemGroup.prototype.getIsStar = function () {
        return this.rowOrColumn.isStar && !this.infinityLength;
    };
    ItemGroup.prototype.getIsAbsolute = function () {
        return this.rowOrColumn.isAbsolute;
    };
    return ItemGroup;
}());
var MeasureHelper = (function () {
    function MeasureHelper(grid) {
        this.infinity = grid_layout_common_1.layout.makeMeasureSpec(0, grid_layout_common_1.layout.UNSPECIFIED);
        this.rows = new Array();
        this.columns = new Array();
        this.width = 0;
        this.height = 0;
        this.stretchedHorizontally = false;
        this.stretchedVertically = false;
        this.infinityWidth = false;
        this.infinityHeight = false;
        this.minColumnStarValue = 0;
        this.maxColumnStarValue = 0;
        this.minRowStarValue = 0;
        this.maxRowStarValue = 0;
        this.measuredWidth = 0;
        this.measuredHeight = 0;
        this.fakeRowAdded = false;
        this.fakeColumnAdded = false;
        this.grid = grid;
        this.singleRow = new grid_layout_common_1.ItemSpec();
        this.singleColumn = new grid_layout_common_1.ItemSpec();
        this.singleRowGroup = new ItemGroup(this.singleRow);
        this.singleColumnGroup = new ItemGroup(this.singleColumn);
    }
    MeasureHelper.prototype.setInfinityWidth = function (value) {
        if (this.infinityWidth !== value) {
            this.infinityWidth = value;
            for (var i = 0, size = this.columns.length; i < size; i++) {
                var columnGroup = this.columns[i];
                columnGroup.setIsLengthInfinity(value);
            }
        }
    };
    MeasureHelper.prototype.setInfinityHeight = function (value) {
        if (this.infinityHeight !== value) {
            this.infinityHeight = value;
            for (var i = 0, size = this.rows.length; i < size; i++) {
                var rowGroup = this.rows[i];
                rowGroup.setIsLengthInfinity(value);
            }
        }
    };
    MeasureHelper.prototype.addMeasureSpec = function (measureSpec) {
        var size = measureSpec.getColumnIndex() + measureSpec.getColumnSpan();
        for (var i = measureSpec.getColumnIndex(); i < size; i++) {
            var columnGroup = this.columns[i];
            if (columnGroup.getIsAuto()) {
                measureSpec.autoColumnsCount++;
            }
            else if (columnGroup.getIsStar()) {
                measureSpec.starColumnsCount += columnGroup.rowOrColumn.value;
            }
            else if (columnGroup.getIsAbsolute()) {
                measureSpec.pixelWidth += grid_layout_common_1.layout.toDevicePixels(columnGroup.rowOrColumn.value);
            }
        }
        if (measureSpec.autoColumnsCount > 0 && measureSpec.starColumnsCount === 0) {
            for (var i = measureSpec.getColumnIndex(); i < size; i++) {
                var columnGroup = this.columns[i];
                if (columnGroup.getIsAuto()) {
                    columnGroup.measureToFix++;
                }
            }
        }
        size = measureSpec.getRowIndex() + measureSpec.getRowSpan();
        for (var i = measureSpec.getRowIndex(); i < size; i++) {
            var rowGroup = this.rows[i];
            if (rowGroup.getIsAuto()) {
                measureSpec.autoRowsCount++;
            }
            else if (rowGroup.getIsStar()) {
                measureSpec.starRowsCount += rowGroup.rowOrColumn.value;
            }
            else if (rowGroup.getIsAbsolute()) {
                measureSpec.pixelHeight += grid_layout_common_1.layout.toDevicePixels(rowGroup.rowOrColumn.value);
            }
        }
        if (measureSpec.autoRowsCount > 0 && measureSpec.starRowsCount === 0) {
            for (var i = measureSpec.getRowIndex(); i < size; i++) {
                var rowGroup = this.rows[i];
                if (rowGroup.getIsAuto()) {
                    rowGroup.measureToFix++;
                }
            }
        }
        this.columns[measureSpec.getColumnIndex()].children.push(measureSpec);
        this.rows[measureSpec.getRowIndex()].children.push(measureSpec);
    };
    MeasureHelper.prototype.clearMeasureSpecs = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            this.columns[i].children.length = 0;
        }
        for (var i = 0, size = this.rows.length; i < size; i++) {
            this.rows[i].children.length = 0;
        }
    };
    MeasureHelper.initList = function (list) {
        var density = grid_layout_common_1.layout.getDisplayDensity();
        for (var i = 0, size = list.length; i < size; i++) {
            var item = list[i];
            item.init(density);
        }
    };
    MeasureHelper.prototype.init = function () {
        var rows = this.rows.length;
        if (rows === 0) {
            this.singleRowGroup.setIsLengthInfinity(this.infinityHeight);
            this.rows.push(this.singleRowGroup);
            this.fakeRowAdded = true;
        }
        else if (rows > 1 && this.fakeRowAdded) {
            this.rows.splice(0, 1);
            this.fakeRowAdded = false;
        }
        var cols = this.columns.length;
        if (cols === 0) {
            this.fakeColumnAdded = true;
            this.singleColumnGroup.setIsLengthInfinity(this.infinityWidth);
            this.columns.push(this.singleColumnGroup);
        }
        else if (cols > 1 && this.fakeColumnAdded) {
            this.columns.splice(0, 1);
            this.fakeColumnAdded = false;
        }
        MeasureHelper.initList(this.rows);
        MeasureHelper.initList(this.columns);
        this.minColumnStarValue = -1;
        this.minRowStarValue = -1;
        this.maxColumnStarValue = -1;
        this.maxRowStarValue = -1;
    };
    MeasureHelper.prototype.itemMeasured = function (measureSpec, isFakeMeasure) {
        if (!isFakeMeasure) {
            this.columns[measureSpec.getColumnIndex()].measuredCount++;
            this.rows[measureSpec.getRowIndex()].measuredCount++;
            measureSpec.measured = true;
        }
        if (measureSpec.autoColumnsCount > 0 && measureSpec.starColumnsCount === 0) {
            var size = measureSpec.getColumnIndex() + measureSpec.getColumnSpan();
            for (var i = measureSpec.getColumnIndex(); i < size; i++) {
                var columnGroup = this.columns[i];
                if (columnGroup.getIsAuto()) {
                    columnGroup.currentMeasureToFixCount++;
                }
            }
        }
        if (measureSpec.autoRowsCount > 0 && measureSpec.starRowsCount === 0) {
            var size = measureSpec.getRowIndex() + measureSpec.getRowSpan();
            for (var i = measureSpec.getRowIndex(); i < size; i++) {
                var rowGroup = this.rows[i];
                if (rowGroup.getIsAuto()) {
                    rowGroup.currentMeasureToFixCount++;
                }
            }
        }
    };
    MeasureHelper.prototype.fixColumns = function () {
        var currentColumnWidth = 0;
        var columnStarCount = 0;
        var columnCount = this.columns.length;
        for (var i = 0; i < columnCount; i++) {
            var item = this.columns[i];
            if (item.rowOrColumn.isStar) {
                columnStarCount += item.rowOrColumn.value;
            }
            else {
                currentColumnWidth += item.length;
            }
        }
        var widthForStarColumns = Math.max(0, this.width - currentColumnWidth);
        this.maxColumnStarValue = columnStarCount > 0 ? widthForStarColumns / columnStarCount : 0;
        MeasureHelper.updateStarLength(this.columns, this.maxColumnStarValue);
    };
    MeasureHelper.prototype.fixRows = function () {
        var currentRowHeight = 0;
        var rowStarCount = 0;
        var rowCount = this.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var item = this.rows[i];
            if (item.rowOrColumn.isStar) {
                rowStarCount += item.rowOrColumn.value;
            }
            else {
                currentRowHeight += item.length;
            }
        }
        var heightForStarRows = Math.max(0, this.height - currentRowHeight);
        this.maxRowStarValue = rowStarCount > 0 ? heightForStarRows / rowStarCount : 0;
        MeasureHelper.updateStarLength(this.rows, this.maxRowStarValue);
    };
    MeasureHelper.updateStarLength = function (list, starValue) {
        var offset = 0;
        var roundedOffset = 0;
        for (var i = 0, rowCount = list.length; i < rowCount; i++) {
            var item = list[i];
            if (item.getIsStar()) {
                offset += item.rowOrColumn.value * starValue;
                var actualLength = offset - roundedOffset;
                var roundedLength = Math.round(actualLength);
                item.length = roundedLength;
                roundedOffset += roundedLength;
            }
        }
    };
    MeasureHelper.prototype.fakeMeasure = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            var columnGroup = this.columns[i];
            if (columnGroup.getAllMeasured()) {
                continue;
            }
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.starRowsCount > 0 && measureSpec.autoColumnsCount > 0 && measureSpec.starColumnsCount === 0) {
                    this.measureChild(measureSpec, true);
                }
            }
        }
    };
    MeasureHelper.prototype.measureFixedColumnsNoStarRows = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.starColumnsCount > 0 && measureSpec.starRowsCount === 0) {
                    this.measureChildFixedColumns(measureSpec);
                }
            }
        }
    };
    MeasureHelper.prototype.measureNoStarColumnsFixedRows = function () {
        for (var i = 0, size = this.columns.length; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.starRowsCount > 0 && measureSpec.starColumnsCount === 0) {
                    this.measureChildFixedRows(measureSpec);
                }
            }
        }
    };
    MeasureHelper.canFix = function (list) {
        for (var i = 0, size = list.length; i < size; i++) {
            var item = list[i];
            if (!item.getCanBeFixed()) {
                return false;
            }
        }
        return true;
    };
    MeasureHelper.getMeasureLength = function (list) {
        var result = 0;
        for (var i = 0, size = list.length; i < size; i++) {
            var item = list[i];
            result += item.length;
        }
        return result;
    };
    MeasureHelper.prototype.measure = function () {
        var size = this.columns.length;
        for (var i = 0; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.getIsStar() || measureSpec.getSpanned()) {
                    continue;
                }
                this.measureChild(measureSpec, false);
            }
        }
        for (var i = 0; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childrenCount = columnGroup.children.length; j < childrenCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (measureSpec.getIsStar() || !measureSpec.getSpanned()) {
                    continue;
                }
                this.measureChild(measureSpec, false);
            }
        }
        var fixColumns = MeasureHelper.canFix(this.columns);
        var fixRows = MeasureHelper.canFix(this.rows);
        if (fixColumns) {
            this.fixColumns();
        }
        if (fixRows) {
            this.fixRows();
        }
        if (!fixColumns && !fixRows) {
            this.fakeMeasure();
            this.fixColumns();
            this.measureFixedColumnsNoStarRows();
            this.fixRows();
        }
        else if (fixColumns && !fixRows) {
            this.measureFixedColumnsNoStarRows();
            this.fixRows();
        }
        else if (!fixColumns && fixRows) {
            this.measureNoStarColumnsFixedRows();
            this.fixColumns();
        }
        size = this.columns.length;
        for (var i = 0; i < size; i++) {
            var columnGroup = this.columns[i];
            for (var j = 0, childCount = columnGroup.children.length; j < childCount; j++) {
                var measureSpec = columnGroup.children[j];
                if (!measureSpec.measured) {
                    this.measureChildFixedColumnsAndRows(measureSpec);
                }
            }
        }
        if (!this.stretchedHorizontally && this.minColumnStarValue !== -1 && this.minColumnStarValue < this.maxColumnStarValue) {
            MeasureHelper.updateStarLength(this.columns, this.minColumnStarValue);
        }
        if (!this.stretchedVertically && this.minRowStarValue !== -1 && this.minRowStarValue < this.maxRowStarValue) {
            MeasureHelper.updateStarLength(this.rows, this.minRowStarValue);
        }
        this.measuredWidth = MeasureHelper.getMeasureLength(this.columns);
        this.measuredHeight = MeasureHelper.getMeasureLength(this.rows);
    };
    MeasureHelper.prototype.measureChild = function (measureSpec, isFakeMeasure) {
        var widthMeasureSpec = (measureSpec.autoColumnsCount > 0) ? this.infinity : grid_layout_common_1.layout.makeMeasureSpec(measureSpec.pixelWidth, grid_layout_common_1.layout.EXACTLY);
        var heightMeasureSpec = (isFakeMeasure || measureSpec.autoRowsCount > 0) ? this.infinity : grid_layout_common_1.layout.makeMeasureSpec(measureSpec.pixelHeight, grid_layout_common_1.layout.EXACTLY);
        var childSize = grid_layout_common_1.View.measureChild(this.grid, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        var columnSpanEnd = measureSpec.getColumnIndex() + measureSpec.getColumnSpan();
        var rowSpanEnd = measureSpec.getRowIndex() + measureSpec.getRowSpan();
        if (measureSpec.autoColumnsCount > 0) {
            var remainingSpace = childMeasuredWidth;
            for (var i = measureSpec.getColumnIndex(); i < columnSpanEnd; i++) {
                var columnGroup = this.columns[i];
                remainingSpace -= columnGroup.length;
            }
            if (remainingSpace > 0) {
                var growSize = remainingSpace / measureSpec.autoColumnsCount;
                for (var i = measureSpec.getColumnIndex(); i < columnSpanEnd; i++) {
                    var columnGroup = this.columns[i];
                    if (columnGroup.getIsAuto()) {
                        columnGroup.length += growSize;
                    }
                }
            }
        }
        if (!isFakeMeasure && measureSpec.autoRowsCount > 0) {
            var remainingSpace = childMeasuredHeight;
            for (var i = measureSpec.getRowIndex(); i < rowSpanEnd; i++) {
                var rowGroup = this.rows[i];
                remainingSpace -= rowGroup.length;
            }
            if (remainingSpace > 0) {
                var growSize = remainingSpace / measureSpec.autoRowsCount;
                for (var i = measureSpec.getRowIndex(); i < rowSpanEnd; i++) {
                    var rowGroup = this.rows[i];
                    if (rowGroup.getIsAuto()) {
                        rowGroup.length += growSize;
                    }
                }
            }
        }
        this.itemMeasured(measureSpec, isFakeMeasure);
    };
    MeasureHelper.prototype.measureChildFixedColumns = function (measureSpec) {
        var columnIndex = measureSpec.getColumnIndex();
        var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
        var rowIndex = measureSpec.getRowIndex();
        var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
        var measureWidth = 0;
        var growSize = 0;
        for (var i = columnIndex; i < columnSpanEnd; i++) {
            var columnGroup = this.columns[i];
            measureWidth += columnGroup.length;
        }
        var widthMeasureSpec = grid_layout_common_1.layout.makeMeasureSpec(measureWidth, this.stretchedHorizontally ? grid_layout_common_1.layout.EXACTLY : grid_layout_common_1.layout.AT_MOST);
        var heightMeasureSpec = (measureSpec.autoRowsCount > 0) ? this.infinity : grid_layout_common_1.layout.makeMeasureSpec(measureSpec.pixelHeight, grid_layout_common_1.layout.EXACTLY);
        var childSize = grid_layout_common_1.View.measureChild(this.grid, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        this.updateMinColumnStarValueIfNeeded(measureSpec, childMeasuredWidth);
        if (measureSpec.autoRowsCount > 0) {
            var remainingSpace = childMeasuredHeight;
            for (var i = rowIndex; i < rowSpanEnd; i++) {
                var rowGroup = this.rows[i];
                remainingSpace -= rowGroup.length;
            }
            if (remainingSpace > 0) {
                growSize = remainingSpace / measureSpec.autoRowsCount;
                for (var i = rowIndex; i < rowSpanEnd; i++) {
                    var rowGroup = this.rows[i];
                    if (rowGroup.getIsAuto()) {
                        rowGroup.length += growSize;
                    }
                }
            }
        }
        this.itemMeasured(measureSpec, false);
    };
    MeasureHelper.prototype.measureChildFixedRows = function (measureSpec) {
        var columnIndex = measureSpec.getColumnIndex();
        var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
        var rowIndex = measureSpec.getRowIndex();
        var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
        var measureHeight = 0;
        for (var i = rowIndex; i < rowSpanEnd; i++) {
            var rowGroup = this.rows[i];
            measureHeight += rowGroup.length;
        }
        var widthMeasureSpec = (measureSpec.autoColumnsCount > 0) ? this.infinity : grid_layout_common_1.layout.makeMeasureSpec(measureSpec.pixelWidth, grid_layout_common_1.layout.EXACTLY);
        var heightMeasureSpec = grid_layout_common_1.layout.makeMeasureSpec(measureHeight, this.stretchedVertically ? grid_layout_common_1.layout.EXACTLY : grid_layout_common_1.layout.AT_MOST);
        var childSize = grid_layout_common_1.View.measureChild(this.grid, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        var remainingSpace = 0;
        var growSize = 0;
        if (measureSpec.autoColumnsCount > 0) {
            remainingSpace = childMeasuredWidth;
            for (var i = columnIndex; i < columnSpanEnd; i++) {
                var columnGroup = this.columns[i];
                remainingSpace -= columnGroup.length;
            }
            if (remainingSpace > 0) {
                growSize = remainingSpace / measureSpec.autoColumnsCount;
                for (var i = columnIndex; i < columnSpanEnd; i++) {
                    var columnGroup = this.columns[i];
                    if (columnGroup.getIsAuto()) {
                        columnGroup.length += growSize;
                    }
                }
            }
        }
        this.updateMinRowStarValueIfNeeded(measureSpec, childMeasuredHeight);
        this.itemMeasured(measureSpec, false);
    };
    MeasureHelper.prototype.measureChildFixedColumnsAndRows = function (measureSpec) {
        var columnIndex = measureSpec.getColumnIndex();
        var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
        var rowIndex = measureSpec.getRowIndex();
        var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
        var measureWidth = 0;
        for (var i = columnIndex; i < columnSpanEnd; i++) {
            var columnGroup = this.columns[i];
            measureWidth += columnGroup.length;
        }
        var measureHeight = 0;
        for (var i = rowIndex; i < rowSpanEnd; i++) {
            var rowGroup = this.rows[i];
            measureHeight += rowGroup.length;
        }
        var widthMeasureSpec = grid_layout_common_1.layout.makeMeasureSpec(measureWidth, (measureSpec.starColumnsCount > 0 && !this.stretchedHorizontally) ? grid_layout_common_1.layout.AT_MOST : grid_layout_common_1.layout.EXACTLY);
        var heightMeasureSpec = grid_layout_common_1.layout.makeMeasureSpec(measureHeight, (measureSpec.starRowsCount > 0 && !this.stretchedVertically) ? grid_layout_common_1.layout.AT_MOST : grid_layout_common_1.layout.EXACTLY);
        var childSize = grid_layout_common_1.View.measureChild(this.grid, measureSpec.child, widthMeasureSpec, heightMeasureSpec);
        var childMeasuredWidth = childSize.measuredWidth;
        var childMeasuredHeight = childSize.measuredHeight;
        this.updateMinColumnStarValueIfNeeded(measureSpec, childMeasuredWidth);
        this.updateMinRowStarValueIfNeeded(measureSpec, childMeasuredHeight);
        this.itemMeasured(measureSpec, false);
    };
    MeasureHelper.prototype.updateMinRowStarValueIfNeeded = function (measureSpec, childMeasuredHeight) {
        if (!this.stretchedVertically && measureSpec.starRowsCount > 0) {
            var remainingSpace = childMeasuredHeight;
            var rowIndex = measureSpec.getRowIndex();
            var rowSpanEnd = rowIndex + measureSpec.getRowSpan();
            for (var i = rowIndex; i < rowSpanEnd; i++) {
                var rowGroup = this.rows[i];
                if (!rowGroup.getIsStar()) {
                    remainingSpace -= rowGroup.length;
                }
            }
            if (remainingSpace > 0) {
                this.minRowStarValue = Math.max(remainingSpace / measureSpec.starRowsCount, this.minRowStarValue);
            }
        }
    };
    MeasureHelper.prototype.updateMinColumnStarValueIfNeeded = function (measureSpec, childMeasuredWidth) {
        if (!this.stretchedHorizontally && measureSpec.starColumnsCount > 0) {
            var remainingSpace = childMeasuredWidth;
            var columnIndex = measureSpec.getColumnIndex();
            var columnSpanEnd = columnIndex + measureSpec.getColumnSpan();
            for (var i = columnIndex; i < columnSpanEnd; i++) {
                var columnGroup = this.columns[i];
                if (!columnGroup.getIsStar()) {
                    remainingSpace -= columnGroup.length;
                }
            }
            if (remainingSpace > 0) {
                this.minColumnStarValue = Math.max(remainingSpace / measureSpec.starColumnsCount, this.minColumnStarValue);
            }
        }
    };
    return MeasureHelper;
}());
//# sourceMappingURL=grid-layout.ios.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var html_view_common_1 = __webpack_require__(25);
__export(__webpack_require__(25));
var HtmlView = (function (_super) {
    __extends(HtmlView, _super);
    function HtmlView() {
        var _this = _super.call(this) || this;
        var nativeView = UITextView.new();
        nativeView.scrollEnabled = false;
        nativeView.editable = false;
        nativeView.selectable = true;
        nativeView.userInteractionEnabled = true;
        nativeView.dataDetectorTypes = 4294967295;
        _this.nativeViewProtected = nativeView;
        return _this;
    }
    Object.defineProperty(HtmlView.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    HtmlView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            var width = html_view_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
            var widthMode = html_view_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
            var height = html_view_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
            var heightMode = html_view_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
            var desiredSize = html_view_common_1.layout.measureNativeView(nativeView, width, widthMode, height, heightMode);
            var labelWidth = widthMode === html_view_common_1.layout.AT_MOST ? Math.min(desiredSize.width, width) : desiredSize.width;
            var measureWidth = Math.max(labelWidth, this.effectiveMinWidth);
            var measureHeight = Math.max(desiredSize.height, this.effectiveMinHeight);
            var widthAndState = html_view_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
            var heightAndState = html_view_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
            this.setMeasuredDimension(widthAndState, heightAndState);
        }
    };
    HtmlView.prototype[html_view_common_1.htmlProperty.getDefault] = function () {
        return "";
    };
    HtmlView.prototype[html_view_common_1.htmlProperty.setNative] = function (value) {
        var htmlString = NSString.stringWithString(value + "");
        var nsData = htmlString.dataUsingEncoding(NSUnicodeStringEncoding);
        this.nativeViewProtected.attributedText = NSAttributedString.alloc().initWithDataOptionsDocumentAttributesError(nsData, (_a = {}, _a[NSDocumentTypeDocumentAttribute] = NSHTMLTextDocumentType, _a), null);
        var _a;
    };
    return HtmlView;
}(html_view_common_1.HtmlViewBase));
exports.HtmlView = HtmlView;
//# sourceMappingURL=html-view.ios.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var background_1 = __webpack_require__(28);
var text_base_1 = __webpack_require__(4);
var background_2 = __webpack_require__(28);
__export(__webpack_require__(4));
var FixedSize;
(function (FixedSize) {
    FixedSize[FixedSize["NONE"] = 0] = "NONE";
    FixedSize[FixedSize["WIDTH"] = 1] = "WIDTH";
    FixedSize[FixedSize["HEIGHT"] = 2] = "HEIGHT";
    FixedSize[FixedSize["BOTH"] = 3] = "BOTH";
})(FixedSize || (FixedSize = {}));
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = TNSLabel.new();
        _this.nativeViewProtected.userInteractionEnabled = true;
        return _this;
    }
    Object.defineProperty(Label.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "textWrap", {
        get: function () {
            return this.style.whiteSpace === "normal";
        },
        set: function (value) {
            if (typeof value === "string") {
                value = text_base_1.booleanConverter(value);
            }
            this.style.whiteSpace = value ? "normal" : "nowrap";
        },
        enumerable: true,
        configurable: true
    });
    Label.prototype._requestLayoutOnTextChanged = function () {
        if (this._fixedSize === FixedSize.BOTH) {
            return;
        }
        if (this._fixedSize === FixedSize.WIDTH && !this.textWrap && this.getMeasuredHeight() > 0) {
            return;
        }
        _super.prototype._requestLayoutOnTextChanged.call(this);
    };
    Label.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            var width = text_base_1.layout.getMeasureSpecSize(widthMeasureSpec);
            var widthMode = text_base_1.layout.getMeasureSpecMode(widthMeasureSpec);
            var height = text_base_1.layout.getMeasureSpecSize(heightMeasureSpec);
            var heightMode = text_base_1.layout.getMeasureSpecMode(heightMeasureSpec);
            this._fixedSize = (widthMode === text_base_1.layout.EXACTLY ? FixedSize.WIDTH : FixedSize.NONE)
                | (heightMode === text_base_1.layout.EXACTLY ? FixedSize.HEIGHT : FixedSize.NONE);
            var nativeSize = text_base_1.layout.measureNativeView(nativeView, width, widthMode, height, heightMode);
            var labelWidth = nativeSize.width;
            if (this.textWrap && widthMode === text_base_1.layout.AT_MOST) {
                labelWidth = Math.min(labelWidth, width);
            }
            var measureWidth = Math.max(labelWidth, this.effectiveMinWidth);
            var measureHeight = Math.max(nativeSize.height, this.effectiveMinHeight);
            var widthAndState = text_base_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
            var heightAndState = text_base_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
            this.setMeasuredDimension(widthAndState, heightAndState);
        }
    };
    Label.prototype[text_base_1.whiteSpaceProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        switch (value) {
            case "normal":
                nativeView.lineBreakMode = 0;
                nativeView.numberOfLines = 0;
                break;
            case "nowrap":
            case "initial":
                nativeView.lineBreakMode = 4;
                nativeView.numberOfLines = 1;
                break;
        }
    };
    Label.prototype._redrawNativeBackground = function (value) {
        var _this = this;
        if (value instanceof background_1.Background) {
            background_2.ios.createBackgroundUIColor(this, function (color) {
                var cgColor = color ? color.CGColor : null;
                _this.nativeViewProtected.layer.backgroundColor = cgColor;
            }, true);
        }
        this._setNativeClipToBounds();
    };
    Label.prototype[text_base_1.borderTopWidthProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var border = nativeView.borderThickness;
        nativeView.borderThickness = {
            top: text_base_1.layout.toDeviceIndependentPixels(this.effectiveBorderTopWidth),
            right: border.right,
            bottom: border.bottom,
            left: border.left
        };
    };
    Label.prototype[text_base_1.borderRightWidthProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var border = nativeView.borderThickness;
        nativeView.borderThickness = {
            top: border.top,
            right: text_base_1.layout.toDeviceIndependentPixels(this.effectiveBorderRightWidth),
            bottom: border.bottom,
            left: border.left
        };
    };
    Label.prototype[text_base_1.borderBottomWidthProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var border = nativeView.borderThickness;
        nativeView.borderThickness = {
            top: border.top,
            right: border.right,
            bottom: text_base_1.layout.toDeviceIndependentPixels(this.effectiveBorderBottomWidth),
            left: border.left
        };
    };
    Label.prototype[text_base_1.borderLeftWidthProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var border = nativeView.borderThickness;
        nativeView.borderThickness = {
            top: border.top,
            right: border.right,
            bottom: border.bottom,
            left: text_base_1.layout.toDeviceIndependentPixels(this.effectiveBorderLeftWidth)
        };
    };
    Label.prototype[text_base_1.paddingTopProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var padding = nativeView.padding;
        nativeView.padding = {
            top: text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingTop),
            right: padding.right,
            bottom: padding.bottom,
            left: padding.left
        };
    };
    Label.prototype[text_base_1.paddingRightProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var padding = nativeView.padding;
        nativeView.padding = {
            top: padding.top,
            right: text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingRight),
            bottom: padding.bottom,
            left: padding.left
        };
    };
    Label.prototype[text_base_1.paddingBottomProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var padding = nativeView.padding;
        nativeView.padding = {
            top: padding.top,
            right: padding.right,
            bottom: text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingBottom),
            left: padding.left
        };
    };
    Label.prototype[text_base_1.paddingLeftProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var padding = nativeView.padding;
        nativeView.padding = {
            top: padding.top,
            right: padding.right,
            bottom: padding.bottom,
            left: text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingLeft)
        };
    };
    return Label;
}(text_base_1.TextBase));
exports.Label = Label;
Label.prototype.recycleNativeView = "auto";
//# sourceMappingURL=label.ios.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var list_picker_common_1 = __webpack_require__(29);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(29));
var ListPicker = (function (_super) {
    __extends(ListPicker, _super);
    function ListPicker() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = _this._ios = UIPickerView.new();
        _this._ios.dataSource = _this._dataSource = ListPickerDataSource.initWithOwner(new WeakRef(_this));
        _this._delegate = ListPickerDelegateImpl.initWithOwner(new WeakRef(_this));
        return _this;
    }
    ListPicker.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    ListPicker.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(ListPicker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    ListPicker.prototype[list_picker_common_1.selectedIndexProperty.getDefault] = function () {
        return -1;
    };
    ListPicker.prototype[list_picker_common_1.selectedIndexProperty.setNative] = function (value) {
        if (value >= 0) {
            this.ios.selectRowInComponentAnimated(value, 0, false);
        }
    };
    ListPicker.prototype[list_picker_common_1.itemsProperty.getDefault] = function () {
        return null;
    };
    ListPicker.prototype[list_picker_common_1.itemsProperty.setNative] = function (value) {
        this.ios.reloadAllComponents();
        list_picker_common_1.selectedIndexProperty.coerce(this);
    };
    ListPicker.prototype[list_picker_common_1.backgroundColorProperty.getDefault] = function () {
        return this._ios.backgroundColor;
    };
    ListPicker.prototype[list_picker_common_1.backgroundColorProperty.setNative] = function (value) {
        this._ios.backgroundColor = value instanceof list_picker_common_1.Color ? value.ios : value;
    };
    ListPicker.prototype[list_picker_common_1.colorProperty.getDefault] = function () {
        return this._ios.tintColor;
    };
    ListPicker.prototype[list_picker_common_1.colorProperty.setNative] = function (value) {
        this._ios.tintColor = value instanceof list_picker_common_1.Color ? value.ios : value;
    };
    __decorate([
        profiling_1.profile
    ], ListPicker.prototype, "onLoaded", null);
    return ListPicker;
}(list_picker_common_1.ListPickerBase));
exports.ListPicker = ListPicker;
var ListPickerDataSource = (function (_super) {
    __extends(ListPickerDataSource, _super);
    function ListPickerDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPickerDataSource.initWithOwner = function (owner) {
        var dataSource = ListPickerDataSource.new();
        dataSource._owner = owner;
        return dataSource;
    };
    ListPickerDataSource.prototype.numberOfComponentsInPickerView = function (pickerView) {
        return 1;
    };
    ListPickerDataSource.prototype.pickerViewNumberOfRowsInComponent = function (pickerView, component) {
        var owner = this._owner.get();
        return (owner && owner.items) ? owner.items.length : 0;
    };
    ListPickerDataSource.ObjCProtocols = [UIPickerViewDataSource];
    return ListPickerDataSource;
}(NSObject));
var ListPickerDelegateImpl = (function (_super) {
    __extends(ListPickerDelegateImpl, _super);
    function ListPickerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPickerDelegateImpl.initWithOwner = function (owner) {
        var delegate = ListPickerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    ListPickerDelegateImpl.prototype.pickerViewAttributedTitleForRowForComponent = function (pickerView, row, component) {
        var owner = this._owner.get();
        if (owner) {
            var title = NSAttributedString.alloc().initWithStringAttributes(owner._getItemAsString(row), (_a = {}, _a[NSForegroundColorAttributeName] = pickerView.tintColor, _a));
            return title;
        }
        return NSAttributedString.alloc().initWithStringAttributes(row.toString(), (_b = {}, _b[NSForegroundColorAttributeName] = pickerView.tintColor, _b));
        var _a, _b;
    };
    ListPickerDelegateImpl.prototype.pickerViewDidSelectRowInComponent = function (pickerView, row, component) {
        var owner = this._owner.get();
        if (owner) {
            list_picker_common_1.selectedIndexProperty.nativeValueChange(owner, row);
        }
    };
    ListPickerDelegateImpl.ObjCProtocols = [UIPickerViewDelegate];
    return ListPickerDelegateImpl;
}(NSObject));
//# sourceMappingURL=list-picker.ios.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var list_view_common_1 = __webpack_require__(32);
var stack_layout_1 = __webpack_require__(33);
var proxy_view_container_1 = __webpack_require__(81);
var utils_1 = __webpack_require__(1);
var profiling_1 = __webpack_require__(0);
var platform_1 = __webpack_require__(16);
__export(__webpack_require__(32));
var ITEMLOADING = list_view_common_1.ListViewBase.itemLoadingEvent;
var LOADMOREITEMS = list_view_common_1.ListViewBase.loadMoreItemsEvent;
var ITEMTAP = list_view_common_1.ListViewBase.itemTapEvent;
var DEFAULT_HEIGHT = 44;
var infinity = list_view_common_1.layout.makeMeasureSpec(0, list_view_common_1.layout.UNSPECIFIED);
var ListViewCell = (function (_super) {
    __extends(ListViewCell, _super);
    function ListViewCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListViewCell.initWithEmptyBackground = function () {
        var cell = ListViewCell.new();
        cell.backgroundColor = null;
        return cell;
    };
    ListViewCell.prototype.initWithStyleReuseIdentifier = function (style, reuseIdentifier) {
        var cell = _super.prototype.initWithStyleReuseIdentifier.call(this, style, reuseIdentifier);
        cell.backgroundColor = null;
        return cell;
    };
    ListViewCell.prototype.willMoveToSuperview = function (newSuperview) {
        var parent = (this.view ? this.view.parent : null);
        if (parent && !newSuperview) {
            parent._removeContainer(this);
        }
    };
    Object.defineProperty(ListViewCell.prototype, "view", {
        get: function () {
            return this.owner ? this.owner.get() : null;
        },
        enumerable: true,
        configurable: true
    });
    return ListViewCell;
}(UITableViewCell));
function notifyForItemAtIndex(listView, cell, view, eventName, indexPath) {
    var args = { eventName: eventName, object: listView, index: indexPath.row, view: view, ios: cell, android: undefined };
    listView.notify(args);
    return args;
}
var DataSource = (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataSource.initWithOwner = function (owner) {
        var dataSource = DataSource.new();
        dataSource._owner = owner;
        return dataSource;
    };
    DataSource.prototype.tableViewNumberOfRowsInSection = function (tableView, section) {
        var owner = this._owner.get();
        return (owner && owner.items) ? owner.items.length : 0;
    };
    DataSource.prototype.tableViewCellForRowAtIndexPath = function (tableView, indexPath) {
        var owner = this._owner.get();
        var cell;
        if (owner) {
            var template = owner._getItemTemplate(indexPath.row);
            cell = (tableView.dequeueReusableCellWithIdentifier(template.key) || ListViewCell.initWithEmptyBackground());
            owner._prepareCell(cell, indexPath);
            var cellView = cell.view;
            if (cellView && cellView.isLayoutRequired) {
                var width = list_view_common_1.layout.getMeasureSpecSize(owner.widthMeasureSpec);
                var rowHeight = owner._effectiveRowHeight;
                var cellHeight = rowHeight > 0 ? rowHeight : owner.getHeight(indexPath.row);
                list_view_common_1.View.layoutChild(owner, cellView, 0, 0, width, cellHeight);
            }
        }
        else {
            cell = ListViewCell.initWithEmptyBackground();
        }
        return cell;
    };
    DataSource.ObjCProtocols = [UITableViewDataSource];
    return DataSource;
}(NSObject));
var UITableViewDelegateImpl = (function (_super) {
    __extends(UITableViewDelegateImpl, _super);
    function UITableViewDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITableViewDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITableViewDelegateImpl.new();
        delegate._owner = owner;
        delegate._measureCellMap = new Map();
        return delegate;
    };
    UITableViewDelegateImpl.prototype.tableViewWillDisplayCellForRowAtIndexPath = function (tableView, cell, indexPath) {
        var owner = this._owner.get();
        if (owner && (indexPath.row === owner.items.length - 1)) {
            owner.notify({ eventName: LOADMOREITEMS, object: owner });
        }
    };
    UITableViewDelegateImpl.prototype.tableViewWillSelectRowAtIndexPath = function (tableView, indexPath) {
        var cell = tableView.cellForRowAtIndexPath(indexPath);
        var owner = this._owner.get();
        if (owner) {
            notifyForItemAtIndex(owner, cell, cell.view, ITEMTAP, indexPath);
        }
        return indexPath;
    };
    UITableViewDelegateImpl.prototype.tableViewDidSelectRowAtIndexPath = function (tableView, indexPath) {
        tableView.deselectRowAtIndexPathAnimated(indexPath, true);
        return indexPath;
    };
    UITableViewDelegateImpl.prototype.tableViewHeightForRowAtIndexPath = function (tableView, indexPath) {
        var owner = this._owner.get();
        if (!owner) {
            return DEFAULT_HEIGHT;
        }
        var height;
        if (utils_1.ios.MajorVersion >= 8) {
            height = owner.getHeight(indexPath.row);
        }
        if (utils_1.ios.MajorVersion < 8 || height === undefined) {
            var template = owner._getItemTemplate(indexPath.row);
            var cell = this._measureCellMap.get(template.key);
            if (!cell) {
                cell = tableView.dequeueReusableCellWithIdentifier(template.key) || ListViewCell.initWithEmptyBackground();
                this._measureCellMap.set(template.key, cell);
            }
            height = owner._prepareCell(cell, indexPath);
        }
        return list_view_common_1.layout.toDeviceIndependentPixels(height);
    };
    UITableViewDelegateImpl.ObjCProtocols = [UITableViewDelegate];
    return UITableViewDelegateImpl;
}(NSObject));
var UITableViewRowHeightDelegateImpl = (function (_super) {
    __extends(UITableViewRowHeightDelegateImpl, _super);
    function UITableViewRowHeightDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITableViewRowHeightDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITableViewRowHeightDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewWillDisplayCellForRowAtIndexPath = function (tableView, cell, indexPath) {
        var owner = this._owner.get();
        if (owner && (indexPath.row === owner.items.length - 1)) {
            owner.notify({ eventName: LOADMOREITEMS, object: owner });
        }
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewWillSelectRowAtIndexPath = function (tableView, indexPath) {
        var cell = tableView.cellForRowAtIndexPath(indexPath);
        var owner = this._owner.get();
        if (owner) {
            notifyForItemAtIndex(owner, cell, cell.view, ITEMTAP, indexPath);
        }
        return indexPath;
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewDidSelectRowAtIndexPath = function (tableView, indexPath) {
        tableView.deselectRowAtIndexPathAnimated(indexPath, true);
        return indexPath;
    };
    UITableViewRowHeightDelegateImpl.prototype.tableViewHeightForRowAtIndexPath = function (tableView, indexPath) {
        var owner = this._owner.get();
        if (!owner) {
            return DEFAULT_HEIGHT;
        }
        return owner._effectiveRowHeight;
    };
    UITableViewRowHeightDelegateImpl.ObjCProtocols = [UITableViewDelegate];
    return UITableViewRowHeightDelegateImpl;
}(NSObject));
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super.call(this) || this;
        _this.widthMeasureSpec = 0;
        _this.nativeViewProtected = _this._ios = UITableView.new();
        _this._ios.registerClassForCellReuseIdentifier(ListViewCell.class(), _this._defaultTemplate.key);
        _this._ios.autoresizingMask = 0;
        _this._ios.estimatedRowHeight = DEFAULT_HEIGHT;
        _this._ios.rowHeight = UITableViewAutomaticDimension;
        _this._ios.dataSource = _this._dataSource = DataSource.initWithOwner(new WeakRef(_this));
        if (parseInt(platform_1.device.sdkVersion) >= 11) {
            _this._ios.contentInsetAdjustmentBehavior = 2;
        }
        _this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(_this));
        _this._heights = new Array();
        _this._map = new Map();
        _this._setNativeClipToBounds();
        return _this;
    }
    ListView.prototype._setNativeClipToBounds = function () {
        this._ios.clipsToBounds = true;
    };
    ListView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this._isDataDirty) {
            this.refresh();
        }
        this._ios.delegate = this._delegate;
    };
    ListView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(ListView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListView.prototype, "_childrenCount", {
        get: function () {
            return this._map.size;
        },
        enumerable: true,
        configurable: true
    });
    ListView.prototype.eachChildView = function (callback) {
        this._map.forEach(function (view, key) {
            callback(view);
        });
    };
    ListView.prototype.scrollToIndex = function (index) {
        if (this._ios) {
            this._ios.scrollToRowAtIndexPathAtScrollPositionAnimated(NSIndexPath.indexPathForItemInSection(index, 0), 1, false);
        }
    };
    ListView.prototype.refresh = function () {
        this._map.forEach(function (view, nativeView, map) {
            if (!(view.bindingContext instanceof list_view_common_1.Observable)) {
                view.bindingContext = null;
            }
        });
        if (this.isLoaded) {
            this._ios.reloadData();
            this.requestLayout();
            this._isDataDirty = false;
        }
        else {
            this._isDataDirty = true;
        }
    };
    ListView.prototype.getHeight = function (index) {
        return this._heights[index];
    };
    ListView.prototype.setHeight = function (index, value) {
        this._heights[index] = value;
    };
    ListView.prototype._onRowHeightPropertyChanged = function (oldValue, newValue) {
        var value = this._effectiveRowHeight;
        var nativeView = this._ios;
        if (value < 0) {
            nativeView.rowHeight = UITableViewAutomaticDimension;
            nativeView.estimatedRowHeight = DEFAULT_HEIGHT;
            this._delegate = UITableViewDelegateImpl.initWithOwner(new WeakRef(this));
        }
        else {
            nativeView.rowHeight = value;
            nativeView.estimatedRowHeight = value;
            this._delegate = UITableViewRowHeightDelegateImpl.initWithOwner(new WeakRef(this));
        }
        if (this.isLoaded) {
            nativeView.delegate = this._delegate;
        }
        _super.prototype._onRowHeightPropertyChanged.call(this, oldValue, newValue);
    };
    ListView.prototype.requestLayout = function () {
        if (!this._preparingCell) {
            _super.prototype.requestLayout.call(this);
        }
    };
    ListView.prototype.measure = function (widthMeasureSpec, heightMeasureSpec) {
        this.widthMeasureSpec = widthMeasureSpec;
        var changed = this._setCurrentMeasureSpecs(widthMeasureSpec, heightMeasureSpec);
        _super.prototype.measure.call(this, widthMeasureSpec, heightMeasureSpec);
        if (changed) {
            this._ios.reloadData();
        }
    };
    ListView.prototype._layoutCell = function (cellView, indexPath) {
        if (cellView) {
            var rowHeight = this._effectiveRowHeight;
            var heightMeasureSpec = rowHeight >= 0 ? list_view_common_1.layout.makeMeasureSpec(rowHeight, list_view_common_1.layout.EXACTLY) : infinity;
            var measuredSize = list_view_common_1.View.measureChild(this, cellView, this.widthMeasureSpec, heightMeasureSpec);
            var height = measuredSize.measuredHeight;
            this.setHeight(indexPath.row, height);
            return height;
        }
        return DEFAULT_HEIGHT;
    };
    ListView.prototype._prepareCell = function (cell, indexPath) {
        var cellHeight;
        try {
            this._preparingCell = true;
            var view = cell.view;
            if (!view) {
                view = this._getItemTemplate(indexPath.row).createView();
            }
            var args = notifyForItemAtIndex(this, cell, view, ITEMLOADING, indexPath);
            view = args.view || this._getDefaultItemContent(indexPath.row);
            if (view instanceof proxy_view_container_1.ProxyViewContainer) {
                var sp = new stack_layout_1.StackLayout();
                sp.addChild(view);
                view = sp;
            }
            if (!cell.view) {
                cell.owner = new WeakRef(view);
            }
            else if (cell.view !== view) {
                this._removeContainer(cell);
                cell.view.nativeViewProtected.removeFromSuperview();
                cell.owner = new WeakRef(view);
            }
            this._prepareItem(view, indexPath.row);
            this._map.set(cell, view);
            if (view && !view.parent && view.nativeViewProtected) {
                cell.contentView.addSubview(view.nativeViewProtected);
                this._addView(view);
            }
            cellHeight = this._layoutCell(view, indexPath);
        }
        finally {
            this._preparingCell = false;
        }
        return cellHeight;
    };
    ListView.prototype._removeContainer = function (cell) {
        var view = cell.view;
        if (!(view.parent instanceof ListView)) {
            this._removeView(view.parent);
        }
        view.parent._removeView(view);
        this._map.delete(cell);
    };
    ListView.prototype[list_view_common_1.separatorColorProperty.getDefault] = function () {
        return this._ios.separatorColor;
    };
    ListView.prototype[list_view_common_1.separatorColorProperty.setNative] = function (value) {
        this._ios.separatorColor = value instanceof list_view_common_1.Color ? value.ios : value;
    };
    ListView.prototype[list_view_common_1.itemTemplatesProperty.getDefault] = function () {
        return null;
    };
    ListView.prototype[list_view_common_1.itemTemplatesProperty.setNative] = function (value) {
        this._itemTemplatesInternal = new Array(this._defaultTemplate);
        if (value) {
            for (var i = 0, length_1 = value.length; i < length_1; i++) {
                this._ios.registerClassForCellReuseIdentifier(ListViewCell.class(), value[i].key);
            }
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }
        this.refresh();
    };
    __decorate([
        profiling_1.profile
    ], ListView.prototype, "onLoaded", null);
    return ListView;
}(list_view_common_1.ListViewBase));
exports.ListView = ListView;
//# sourceMappingURL=list-view.ios.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("../proxy-view-container");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var progress_common_1 = __webpack_require__(34);
__export(__webpack_require__(34));
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = _this._ios = UIProgressView.new();
        return _this;
    }
    Object.defineProperty(Progress.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Progress.prototype[progress_common_1.valueProperty.getDefault] = function () {
        return 0;
    };
    Progress.prototype[progress_common_1.valueProperty.setNative] = function (value) {
        this._ios.progress = value / this.maxValue;
    };
    Progress.prototype[progress_common_1.maxValueProperty.getDefault] = function () {
        return 100;
    };
    Progress.prototype[progress_common_1.maxValueProperty.setNative] = function (value) {
        this._ios.progress = this.value / value;
    };
    Progress.prototype[progress_common_1.colorProperty.getDefault] = function () {
        return this._ios.progressTintColor;
    };
    Progress.prototype[progress_common_1.colorProperty.setNative] = function (value) {
        this._ios.progressTintColor = value instanceof progress_common_1.Color ? value.ios : value;
    };
    Progress.prototype[progress_common_1.backgroundColorProperty.getDefault] = function () {
        return this._ios.trackTintColor;
    };
    Progress.prototype[progress_common_1.backgroundColorProperty.setNative] = function (value) {
        var color = value instanceof progress_common_1.Color ? value.ios : value;
        this._ios.trackTintColor = color;
    };
    Progress.prototype[progress_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    Progress.prototype[progress_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return Progress;
}(progress_common_1.ProgressBase));
exports.Progress = Progress;
//# sourceMappingURL=progress.ios.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = __webpack_require__(84);
var layout_base_1 = __webpack_require__(8);
var stack_layout_1 = __webpack_require__(33);
var observable_array_1 = __webpack_require__(85);
var weak_event_listener_1 = __webpack_require__(86);
var builder_1 = __webpack_require__(87);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(8));
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.itemTemplate = "itemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var Repeater = (function (_super) {
    __extends(Repeater, _super);
    function Repeater() {
        var _this = _super.call(this) || this;
        _this._isDirty = false;
        _this.itemsLayout = new stack_layout_1.StackLayout();
        return _this;
    }
    Repeater.prototype.onLoaded = function () {
        if (this._isDirty) {
            this.refresh();
        }
        _super.prototype.onLoaded.call(this);
    };
    Repeater.prototype._requestRefresh = function () {
        this._isDirty = true;
        if (this.isLoaded) {
            this.refresh();
        }
    };
    Repeater.prototype.refresh = function () {
        if (this.itemsLayout) {
            this.itemsLayout.removeChildren();
        }
        if (!this.items) {
            return;
        }
        var length = this.items.length;
        for (var i = 0; i < length; i++) {
            var viewToAdd = this.itemTemplate ? builder_1.parse(this.itemTemplate, this) : this._getDefaultItemContent(i);
            var dataItem = this._getDataItem(i);
            viewToAdd.bindingContext = dataItem;
            this.itemsLayout.addChild(viewToAdd);
        }
        this._isDirty = false;
    };
    Repeater.prototype._onItemsChanged = function (data) {
        this._requestRefresh();
    };
    Repeater.prototype._getDefaultItemContent = function (index) {
        var lbl = new label_1.Label();
        lbl.bind({
            targetProperty: "text",
            sourceProperty: "$value"
        });
        return lbl;
    };
    Repeater.prototype._getDataItem = function (index) {
        var items = this.items;
        return items.getItem ? items.getItem(index) : this.items[index];
    };
    Object.defineProperty(Repeater.prototype, "_childrenCount", {
        get: function () {
            var count = 0;
            if (this.itemsLayout) {
                count++;
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Repeater.prototype.eachChildView = function (callback) {
        if (this.itemsLayout) {
            callback(this.itemsLayout);
        }
    };
    Repeater.prototype.onLayout = function (left, top, right, bottom) {
        layout_base_1.View.layoutChild(this, this.itemsLayout, 0, 0, right - left, bottom - top);
    };
    Repeater.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var result = layout_base_1.View.measureChild(this, this.itemsLayout, widthMeasureSpec, heightMeasureSpec);
        var width = layout_base_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = layout_base_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = layout_base_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = layout_base_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var widthAndState = layout_base_1.View.resolveSizeAndState(result.measuredWidth, width, widthMode, 0);
        var heightAndState = layout_base_1.View.resolveSizeAndState(result.measuredHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    __decorate([
        profiling_1.profile
    ], Repeater.prototype, "onLoaded", null);
    return Repeater;
}(layout_base_1.CustomLayoutView));
exports.Repeater = Repeater;
Repeater.prototype.recycleNativeView = "auto";
exports.itemTemplateProperty = new layout_base_1.Property({
    name: "itemTemplate", affectsLayout: true, valueChanged: function (target) {
        target._requestRefresh();
    }
});
exports.itemTemplateProperty.register(Repeater);
exports.itemsProperty = new layout_base_1.Property({
    name: "items", affectsLayout: true, valueChanged: function (target, oldValue, newValue) {
        if (oldValue instanceof observable_array_1.ObservableArray) {
            weak_event_listener_1.removeWeakEventListener(oldValue, observable_array_1.ObservableArray.changeEvent, target._onItemsChanged, target);
        }
        if (newValue instanceof observable_array_1.ObservableArray) {
            weak_event_listener_1.addWeakEventListener(newValue, observable_array_1.ObservableArray.changeEvent, target._onItemsChanged, target);
        }
        target._requestRefresh();
    }
});
exports.itemsProperty.register(Repeater);
exports.itemsLayoutProperty = new layout_base_1.Property({
    name: "itemsLayout", affectsLayout: true, valueChanged: function (target, oldValue, newValue) {
        if (oldValue) {
            target._removeView(oldValue);
            oldValue.removeChildren();
        }
        if (newValue) {
            target._addView(newValue);
        }
        target._requestRefresh();
    }
});
exports.itemsLayoutProperty.register(Repeater);
//# sourceMappingURL=repeater.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("../label");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("../../data/observable-array");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("../core/weak-event-listener");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("../builder");

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var scroll_view_common_1 = __webpack_require__(35);
__export(__webpack_require__(35));
var UIScrollViewDelegateImpl = (function (_super) {
    __extends(UIScrollViewDelegateImpl, _super);
    function UIScrollViewDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIScrollViewDelegateImpl.initWithOwner = function (owner) {
        var impl = UIScrollViewDelegateImpl.new();
        impl._owner = owner;
        return impl;
    };
    UIScrollViewDelegateImpl.prototype.scrollViewDidScroll = function (sv) {
        var owner = this._owner.get();
        if (owner) {
            owner.notify({
                object: owner,
                eventName: "scroll",
                scrollX: owner.horizontalOffset,
                scrollY: owner.verticalOffset
            });
        }
    };
    UIScrollViewDelegateImpl.ObjCProtocols = [UIScrollViewDelegate];
    return UIScrollViewDelegateImpl;
}(NSObject));
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView() {
        var _this = _super.call(this) || this;
        _this._contentMeasuredWidth = 0;
        _this._contentMeasuredHeight = 0;
        _this.nativeViewProtected = UIScrollView.new();
        _this._setNativeClipToBounds();
        return _this;
    }
    ScrollView.prototype._setNativeClipToBounds = function () {
        this.nativeViewProtected.clipsToBounds = true;
    };
    ScrollView.prototype.attachNative = function () {
        this._delegate = UIScrollViewDelegateImpl.initWithOwner(new WeakRef(this));
        this.nativeViewProtected.delegate = this._delegate;
    };
    ScrollView.prototype.dettachNative = function () {
        this.nativeViewProtected.delegate = null;
    };
    ScrollView.prototype.updateScrollBarVisibility = function (value) {
        if (this.orientation === "horizontal") {
            this.nativeViewProtected.showsHorizontalScrollIndicator = value;
        }
        else {
            this.nativeViewProtected.showsVerticalScrollIndicator = value;
        }
    };
    Object.defineProperty(ScrollView.prototype, "horizontalOffset", {
        get: function () {
            return this.nativeViewProtected.contentOffset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "verticalOffset", {
        get: function () {
            return this.nativeViewProtected.contentOffset.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollableWidth", {
        get: function () {
            if (this.orientation !== "horizontal") {
                return 0;
            }
            return Math.max(0, this.nativeViewProtected.contentSize.width - this.nativeViewProtected.bounds.size.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollableHeight", {
        get: function () {
            if (this.orientation !== "vertical") {
                return 0;
            }
            return Math.max(0, this.nativeViewProtected.contentSize.height - this.nativeViewProtected.bounds.size.height);
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype[scroll_view_common_1.scrollBarIndicatorVisibleProperty.getDefault] = function () {
        return true;
    };
    ScrollView.prototype[scroll_view_common_1.scrollBarIndicatorVisibleProperty.setNative] = function (value) {
        this.updateScrollBarVisibility(value);
    };
    Object.defineProperty(ScrollView.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype.scrollToVerticalOffset = function (value, animated) {
        if (this.orientation === "vertical") {
            var bounds = this.nativeViewProtected.bounds.size;
            this.nativeViewProtected.scrollRectToVisibleAnimated(CGRectMake(0, value, bounds.width, bounds.height), animated);
        }
    };
    ScrollView.prototype.scrollToHorizontalOffset = function (value, animated) {
        if (this.orientation === "horizontal") {
            var bounds = this.nativeViewProtected.bounds.size;
            this.nativeViewProtected.scrollRectToVisibleAnimated(CGRectMake(value, 0, bounds.width, bounds.height), animated);
        }
    };
    ScrollView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = scroll_view_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = scroll_view_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = scroll_view_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = scroll_view_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var density = scroll_view_common_1.layout.getDisplayDensity();
        var child = this.layoutView;
        if (!child) {
            this._contentMeasuredWidth = this.effectiveMinWidth * density;
            this._contentMeasuredHeight = this.effectiveMinHeight * density;
        }
        else {
            var childSize = void 0;
            if (this.orientation === "vertical") {
                childSize = scroll_view_common_1.View.measureChild(this, child, widthMeasureSpec, scroll_view_common_1.layout.makeMeasureSpec(0, scroll_view_common_1.layout.UNSPECIFIED));
            }
            else {
                childSize = scroll_view_common_1.View.measureChild(this, child, scroll_view_common_1.layout.makeMeasureSpec(0, scroll_view_common_1.layout.UNSPECIFIED), heightMeasureSpec);
            }
            var w = scroll_view_common_1.layout.toDeviceIndependentPixels(childSize.measuredWidth);
            var h = scroll_view_common_1.layout.toDeviceIndependentPixels(childSize.measuredHeight);
            this.nativeViewProtected.contentSize = CGSizeMake(w, h);
            this._contentMeasuredWidth = Math.max(childSize.measuredWidth, this.effectiveMinWidth * density);
            this._contentMeasuredHeight = Math.max(childSize.measuredHeight, this.effectiveMinHeight * density);
        }
        var widthAndState = scroll_view_common_1.View.resolveSizeAndState(this._contentMeasuredWidth, width, widthMode, 0);
        var heightAndState = scroll_view_common_1.View.resolveSizeAndState(this._contentMeasuredHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    ScrollView.prototype.onLayout = function (left, top, right, bottom) {
        var width = (right - left);
        var height = (bottom - top);
        if (this.orientation === "horizontal") {
            scroll_view_common_1.View.layoutChild(this, this.layoutView, 0, 0, Math.max(this._contentMeasuredWidth, width), height);
        }
        else {
            scroll_view_common_1.View.layoutChild(this, this.layoutView, 0, 0, width, Math.max(this._contentMeasuredHeight, height));
        }
    };
    ScrollView.prototype._onOrientationChanged = function () {
        this.updateScrollBarVisibility(this.scrollBarIndicatorVisible);
    };
    return ScrollView;
}(scroll_view_common_1.ScrollViewBase));
exports.ScrollView = ScrollView;
ScrollView.prototype.recycleNativeView = "auto";
//# sourceMappingURL=scroll-view.ios.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var font_1 = __webpack_require__(90);
var search_bar_common_1 = __webpack_require__(36);
__export(__webpack_require__(36));
var UISearchBarDelegateImpl = (function (_super) {
    __extends(UISearchBarDelegateImpl, _super);
    function UISearchBarDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UISearchBarDelegateImpl.initWithOwner = function (owner) {
        var delegate = UISearchBarDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UISearchBarDelegateImpl.prototype.searchBarTextDidChange = function (searchBar, searchText) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        search_bar_common_1.textProperty.nativeValueChange(owner, searchText);
        if (searchText === "") {
            owner._emit(search_bar_common_1.SearchBarBase.clearEvent);
        }
    };
    UISearchBarDelegateImpl.prototype.searchBarCancelButtonClicked = function (searchBar) {
        searchBar.resignFirstResponder();
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        owner._emit(search_bar_common_1.SearchBarBase.clearEvent);
    };
    UISearchBarDelegateImpl.prototype.searchBarSearchButtonClicked = function (searchBar) {
        searchBar.resignFirstResponder();
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        owner._emit(search_bar_common_1.SearchBarBase.submitEvent);
    };
    UISearchBarDelegateImpl.ObjCProtocols = [UISearchBarDelegate];
    return UISearchBarDelegateImpl;
}(NSObject));
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = _this._ios = UISearchBar.new();
        _this._delegate = UISearchBarDelegateImpl.initWithOwner(new WeakRef(_this));
        return _this;
    }
    SearchBar.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    SearchBar.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    SearchBar.prototype.dismissSoftInput = function () {
        this.ios.resignFirstResponder();
    };
    Object.defineProperty(SearchBar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBar.prototype, "_textField", {
        get: function () {
            if (!this.__textField) {
                this.__textField = this.ios.valueForKey("searchField");
            }
            return this.__textField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBar.prototype, "_placeholderLabel", {
        get: function () {
            if (!this.__placeholderLabel) {
                if (this._textField) {
                    this.__placeholderLabel = this._textField.valueForKey("placeholderLabel");
                }
            }
            return this.__placeholderLabel;
        },
        enumerable: true,
        configurable: true
    });
    SearchBar.prototype[search_bar_common_1.backgroundColorProperty.getDefault] = function () {
        return this._ios.barTintColor;
    };
    SearchBar.prototype[search_bar_common_1.backgroundColorProperty.setNative] = function (value) {
        var color = value instanceof search_bar_common_1.Color ? value.ios : value;
        this._ios.barTintColor = color;
    };
    SearchBar.prototype[search_bar_common_1.colorProperty.getDefault] = function () {
        var sf = this._textField;
        if (sf) {
            return sf.textColor;
        }
        return null;
    };
    SearchBar.prototype[search_bar_common_1.colorProperty.setNative] = function (value) {
        var sf = this._textField;
        var color = value instanceof search_bar_common_1.Color ? value.ios : value;
        if (sf) {
            sf.textColor = color;
            sf.tintColor = color;
        }
    };
    SearchBar.prototype[search_bar_common_1.fontInternalProperty.getDefault] = function () {
        var sf = this._textField;
        return sf ? sf.font : null;
    };
    SearchBar.prototype[search_bar_common_1.fontInternalProperty.setNative] = function (value) {
        var sf = this._textField;
        if (sf) {
            sf.font = value instanceof font_1.Font ? value.getUIFont(sf.font) : value;
        }
    };
    SearchBar.prototype[search_bar_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    SearchBar.prototype[search_bar_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    SearchBar.prototype[search_bar_common_1.textProperty.getDefault] = function () {
        return '';
    };
    SearchBar.prototype[search_bar_common_1.textProperty.setNative] = function (value) {
        var text = (value === null || value === undefined) ? '' : value.toString();
        this._ios.text = text;
    };
    SearchBar.prototype[search_bar_common_1.hintProperty.getDefault] = function () {
        return '';
    };
    SearchBar.prototype[search_bar_common_1.hintProperty.setNative] = function (value) {
        var text = (value === null || value === undefined) ? '' : value.toString();
        this._ios.placeholder = text;
    };
    SearchBar.prototype[search_bar_common_1.textFieldBackgroundColorProperty.getDefault] = function () {
        var textField = this._textField;
        if (textField) {
            return textField.backgroundColor;
        }
        return null;
    };
    SearchBar.prototype[search_bar_common_1.textFieldBackgroundColorProperty.setNative] = function (value) {
        var color = value instanceof search_bar_common_1.Color ? value.ios : value;
        var textField = this._textField;
        if (textField) {
            textField.backgroundColor = color;
        }
    };
    SearchBar.prototype[search_bar_common_1.textFieldHintColorProperty.getDefault] = function () {
        var placeholderLabel = this._placeholderLabel;
        if (placeholderLabel) {
            return placeholderLabel.textColor;
        }
        return null;
    };
    SearchBar.prototype[search_bar_common_1.textFieldHintColorProperty.setNative] = function (value) {
        var color = value instanceof search_bar_common_1.Color ? value.ios : value;
        var placeholderLabel = this._placeholderLabel;
        if (placeholderLabel) {
            placeholderLabel.textColor = color;
        }
    };
    return SearchBar;
}(search_bar_common_1.SearchBarBase));
exports.SearchBar = SearchBar;
//# sourceMappingURL=search-bar.ios.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("../styling/font");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var slider_common_1 = __webpack_require__(39);
__export(__webpack_require__(39));
var SliderChangeHandlerImpl = (function (_super) {
    __extends(SliderChangeHandlerImpl, _super);
    function SliderChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = SliderChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    SliderChangeHandlerImpl.prototype.sliderValueChanged = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            slider_common_1.valueProperty.nativeValueChange(owner, sender.value);
        }
    };
    SliderChangeHandlerImpl.ObjCExposedMethods = {
        'sliderValueChanged': { returns: interop.types.void, params: [UISlider] }
    };
    return SliderChangeHandlerImpl;
}(NSObject));
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = _this._ios = UISlider.new();
        _this._ios.minimumValue = 0;
        _this._ios.maximumValue = _this.maxValue;
        _this._changeHandler = SliderChangeHandlerImpl.initWithOwner(new WeakRef(_this));
        _this._ios.addTargetActionForControlEvents(_this._changeHandler, "sliderValueChanged", 4096);
        return _this;
    }
    Object.defineProperty(Slider.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype[slider_common_1.valueProperty.getDefault] = function () {
        return 0;
    };
    Slider.prototype[slider_common_1.valueProperty.setNative] = function (value) {
        this._ios.value = value;
    };
    Slider.prototype[slider_common_1.minValueProperty.getDefault] = function () {
        return 0;
    };
    Slider.prototype[slider_common_1.minValueProperty.setNative] = function (value) {
        this._ios.minimumValue = value;
    };
    Slider.prototype[slider_common_1.maxValueProperty.getDefault] = function () {
        return 100;
    };
    Slider.prototype[slider_common_1.maxValueProperty.setNative] = function (value) {
        this._ios.maximumValue = value;
    };
    Slider.prototype[slider_common_1.colorProperty.getDefault] = function () {
        return this._ios.thumbTintColor;
    };
    Slider.prototype[slider_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof slider_common_1.Color ? value.ios : value;
        this._ios.thumbTintColor = color;
    };
    Slider.prototype[slider_common_1.backgroundColorProperty.getDefault] = function () {
        return this._ios.minimumTrackTintColor;
    };
    Slider.prototype[slider_common_1.backgroundColorProperty.setNative] = function (value) {
        var color = value instanceof slider_common_1.Color ? value.ios : value;
        this._ios.minimumTrackTintColor = color;
    };
    Slider.prototype[slider_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    Slider.prototype[slider_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return Slider;
}(slider_common_1.SliderBase));
exports.Slider = Slider;
//# sourceMappingURL=slider.ios.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var stack_layout_common_1 = __webpack_require__(40);
__export(__webpack_require__(40));
var StackLayout = (function (_super) {
    __extends(StackLayout, _super);
    function StackLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._totalLength = 0;
        return _this;
    }
    StackLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = stack_layout_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = stack_layout_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = stack_layout_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = stack_layout_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var isVertical = this.orientation === "vertical";
        var horizontalPaddingsAndMargins = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalPaddingsAndMargins = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var measureSpec;
        var mode = isVertical ? heightMode : widthMode;
        var remainingLength;
        if (mode === stack_layout_common_1.layout.UNSPECIFIED) {
            measureSpec = stack_layout_common_1.layout.UNSPECIFIED;
            remainingLength = 0;
        }
        else {
            measureSpec = stack_layout_common_1.layout.AT_MOST;
            remainingLength = isVertical ? height - verticalPaddingsAndMargins : width - horizontalPaddingsAndMargins;
        }
        var childMeasureSpec;
        if (isVertical) {
            var childWidth = (widthMode === stack_layout_common_1.layout.UNSPECIFIED) ? 0 : width - horizontalPaddingsAndMargins;
            childWidth = Math.max(0, childWidth);
            childMeasureSpec = stack_layout_common_1.layout.makeMeasureSpec(childWidth, widthMode);
        }
        else {
            var childHeight = (heightMode === stack_layout_common_1.layout.UNSPECIFIED) ? 0 : height - verticalPaddingsAndMargins;
            childHeight = Math.max(0, childHeight);
            childMeasureSpec = stack_layout_common_1.layout.makeMeasureSpec(childHeight, heightMode);
        }
        var childSize;
        this.eachLayoutChild(function (child, last) {
            if (isVertical) {
                childSize = stack_layout_common_1.View.measureChild(_this, child, childMeasureSpec, stack_layout_common_1.layout.makeMeasureSpec(remainingLength, measureSpec));
                measureWidth = Math.max(measureWidth, childSize.measuredWidth);
                var viewHeight = childSize.measuredHeight;
                measureHeight += viewHeight;
                remainingLength = Math.max(0, remainingLength - viewHeight);
            }
            else {
                childSize = stack_layout_common_1.View.measureChild(_this, child, stack_layout_common_1.layout.makeMeasureSpec(remainingLength, measureSpec), childMeasureSpec);
                measureHeight = Math.max(measureHeight, childSize.measuredHeight);
                var viewWidth = childSize.measuredWidth;
                measureWidth += viewWidth;
                remainingLength = Math.max(0, remainingLength - viewWidth);
            }
        });
        measureWidth += horizontalPaddingsAndMargins;
        measureHeight += verticalPaddingsAndMargins;
        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);
        this._totalLength = isVertical ? measureHeight : measureWidth;
        var widthAndState = stack_layout_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = stack_layout_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    StackLayout.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        if (this.orientation === "vertical") {
            this.layoutVertical(left, top, right, bottom);
        }
        else {
            this.layoutHorizontal(left, top, right, bottom);
        }
    };
    StackLayout.prototype.layoutVertical = function (left, top, right, bottom) {
        var _this = this;
        var paddingLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft;
        var paddingTop = this.effectiveBorderTopWidth + this.effectivePaddingTop;
        var paddingRight = this.effectiveBorderRightWidth + this.effectivePaddingRight;
        var paddingBottom = this.effectiveBorderBottomWidth + this.effectivePaddingBottom;
        var childTop;
        var childLeft = paddingLeft;
        var childRight = right - left - paddingRight;
        switch (this.verticalAlignment) {
            case stack_layout_common_1.VerticalAlignment.MIDDLE:
                childTop = (bottom - top - this._totalLength) / 2 + paddingTop - paddingBottom;
                break;
            case stack_layout_common_1.VerticalAlignment.BOTTOM:
                childTop = bottom - top - this._totalLength + paddingTop - paddingBottom;
                break;
            case stack_layout_common_1.VerticalAlignment.TOP:
            case stack_layout_common_1.VerticalAlignment.STRETCH:
            default:
                childTop = paddingTop;
                break;
        }
        this.eachLayoutChild(function (child, last) {
            var childHeight = child.getMeasuredHeight() + child.effectiveMarginTop + child.effectiveMarginBottom;
            stack_layout_common_1.View.layoutChild(_this, child, childLeft, childTop, childRight, childTop + childHeight);
            childTop += childHeight;
        });
    };
    StackLayout.prototype.layoutHorizontal = function (left, top, right, bottom) {
        var _this = this;
        var paddingLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft;
        var paddingTop = this.effectiveBorderTopWidth + this.effectivePaddingTop;
        var paddingRight = this.effectiveBorderRightWidth + this.effectivePaddingRight;
        var paddingBottom = this.effectiveBorderBottomWidth + this.effectivePaddingBottom;
        var childTop = paddingTop;
        var childLeft;
        var childBottom = bottom - top - paddingBottom;
        switch (this.horizontalAlignment) {
            case stack_layout_common_1.HorizontalAlignment.CENTER:
                childLeft = (right - left - this._totalLength) / 2 + paddingLeft - paddingRight;
                break;
            case stack_layout_common_1.HorizontalAlignment.RIGHT:
                childLeft = right - left - this._totalLength + paddingLeft - paddingRight;
                break;
            case stack_layout_common_1.HorizontalAlignment.LEFT:
            case stack_layout_common_1.HorizontalAlignment.STRETCH:
            default:
                childLeft = paddingLeft;
                break;
        }
        this.eachLayoutChild(function (child, last) {
            var childWidth = child.getMeasuredWidth() + child.effectiveMarginLeft + child.effectiveMarginRight;
            stack_layout_common_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childBottom);
            childLeft += childWidth;
        });
    };
    return StackLayout;
}(stack_layout_common_1.StackLayoutBase));
exports.StackLayout = StackLayout;
//# sourceMappingURL=stack-layout.ios.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var flexbox_layout_common_1 = __webpack_require__(41);
__export(__webpack_require__(41));
var EXACTLY = flexbox_layout_common_1.layout.EXACTLY;
var AT_MOST = flexbox_layout_common_1.layout.AT_MOST;
var UNSPECIFIED = flexbox_layout_common_1.layout.UNSPECIFIED;
var MEASURED_SIZE_MASK = flexbox_layout_common_1.layout.MEASURED_SIZE_MASK;
var MEASURED_STATE_TOO_SMALL = flexbox_layout_common_1.layout.MEASURED_STATE_TOO_SMALL;
function requestFlexboxLayout(value) {
    var flexbox = this.parent;
    if (flexbox instanceof flexbox_layout_common_1.FlexboxLayoutBase) {
        flexbox.requestLayout();
    }
}
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.orderProperty.setNative] = requestFlexboxLayout;
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.flexGrowProperty.setNative] = requestFlexboxLayout;
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.flexShrinkProperty.setNative] = requestFlexboxLayout;
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.flexWrapBeforeProperty.setNative] = requestFlexboxLayout;
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.alignSelfProperty.setNative] = requestFlexboxLayout;
var MATCH_PARENT = -1;
var WRAP_CONTENT = -2;
var View_sUseZeroUnspecifiedMeasureSpec = true;
var MAX_SIZE = 0x00FFFFFF & MEASURED_SIZE_MASK;
var makeMeasureSpec = flexbox_layout_common_1.layout.makeMeasureSpec;
var getMeasureSpecMode = flexbox_layout_common_1.layout.getMeasureSpecMode;
var getMeasureSpecSize = flexbox_layout_common_1.layout.getMeasureSpecSize;
var MeasureContext = (function () {
    function MeasureContext(owner) {
        var _this = this;
        this.owner = owner;
        this.children = [];
        this.owner.eachLayoutChild(function (child) {
            _this.children.push(child);
        });
    }
    Object.defineProperty(MeasureContext.prototype, "childrenCount", {
        get: function () {
            return this.children.length;
        },
        enumerable: true,
        configurable: true
    });
    MeasureContext.prototype.childAt = function (index) {
        return this.children[index];
    };
    return MeasureContext;
}());
var FlexLine = (function () {
    function FlexLine() {
        this._left = Number.MAX_VALUE;
        this._top = Number.MAX_VALUE;
        this._right = Number.MAX_VALUE;
        this._bottom = Number.MAX_VALUE;
        this._mainSize = 0;
        this._dividerLengthInMainSize = 0;
        this._crossSize = 0;
        this._itemCount = 0;
        this._totalFlexGrow = 0;
        this._totalFlexShrink = 0;
        this._maxBaseline = 0;
        this._indicesAlignSelfStretch = [];
    }
    Object.defineProperty(FlexLine.prototype, "left", {
        get: function () { return this._left; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "top", {
        get: function () { return this._top; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "right", {
        get: function () { return this._right; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "bottom", {
        get: function () { return this._bottom; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "mainSize", {
        get: function () { return this._mainSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "crossSize", {
        get: function () { return this._crossSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "itemCount", {
        get: function () { return this._itemCount; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "totalFlexGrow", {
        get: function () { return this._totalFlexGrow; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexLine.prototype, "totalFlexShrink", {
        get: function () { return this._totalFlexShrink; },
        enumerable: true,
        configurable: true
    });
    return FlexLine;
}());
var Order = (function () {
    function Order() {
    }
    Order.prototype.compareTo = function (another) {
        if (this.order !== another.order) {
            return this.order - another.order;
        }
        return this.index - another.index;
    };
    return Order;
}());
var FlexboxLayout = (function (_super) {
    __extends(FlexboxLayout, _super);
    function FlexboxLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._flexLines = [];
        return _this;
    }
    FlexboxLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        this.measureContext = new MeasureContext(this);
        if (this._isOrderChangedFromLastMeasurement) {
            this._reorderedIndices = this._createReorderedIndices();
        }
        if (!this._childrenFrozen || this._childrenFrozen.length < this.measureContext.childrenCount) {
            this._childrenFrozen = new Array(this.measureContext.childrenCount);
        }
        switch (this.flexDirection) {
            case flexbox_layout_common_1.FlexDirection.ROW:
            case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                this._measureHorizontal(widthMeasureSpec, heightMeasureSpec);
                break;
            case flexbox_layout_common_1.FlexDirection.COLUMN:
            case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                this._measureVertical(widthMeasureSpec, heightMeasureSpec);
                break;
            default:
                throw new Error("Invalid value for the flex direction is set: " + this.flexDirection);
        }
        this._childrenFrozen.length = 0;
    };
    FlexboxLayout.prototype._getReorderedChildAt = function (index) {
        var child;
        if (index < 0 || index >= this._reorderedIndices.length) {
            child = null;
        }
        else {
            var reorderedIndex = this._reorderedIndices[index];
            child = this.measureContext.childAt(reorderedIndex);
        }
        return child;
    };
    FlexboxLayout.prototype._createReorderedIndices = function () {
        var childCount = this.measureContext.childrenCount;
        var orders = this._createOrders(childCount);
        return this._sortOrdersIntoReorderedIndices(childCount, orders);
    };
    FlexboxLayout.prototype._sortOrdersIntoReorderedIndices = function (childCount, orders) {
        var _this = this;
        orders.sort(function (a, b) { return a.compareTo(b); });
        if (!this._orderCache) {
            this._orderCache = [];
        }
        this._orderCache.length = 0;
        var reorderedIndices = [];
        orders.forEach(function (order, i) {
            reorderedIndices[i] = order.index;
            _this._orderCache[i] = order.order;
        });
        return reorderedIndices;
    };
    FlexboxLayout.prototype._createOrders = function (childCount) {
        var orders = [];
        for (var i = 0; i < childCount; i++) {
            var child = this.measureContext.childAt(i);
            var order = new Order();
            order.order = FlexboxLayout.getOrder(child);
            order.index = i;
            orders.push(order);
        }
        return orders;
    };
    Object.defineProperty(FlexboxLayout.prototype, "_isOrderChangedFromLastMeasurement", {
        get: function () {
            var childCount = this.measureContext.childrenCount;
            if (!this._orderCache) {
                this._orderCache = [];
            }
            if (this._orderCache.length !== childCount) {
                return true;
            }
            for (var i = 0; i < childCount; i++) {
                var view = this.measureContext.childAt(i);
                if (view === null) {
                    continue;
                }
                if (FlexboxLayout.getOrder(view) !== this._orderCache[i]) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FlexboxLayout.prototype._measureHorizontal = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        var widthMode = getMeasureSpecMode(widthMeasureSpec);
        var widthSize = getMeasureSpecSize(widthMeasureSpec);
        var childState = 0;
        this._flexLines.length = 0;
        (function () {
            var childCount = _this.measureContext.childrenCount;
            var paddingStart = FlexboxLayout.getPaddingStart(_this);
            var paddingEnd = FlexboxLayout.getPaddingEnd(_this);
            var largestHeightInRow = Number.MIN_VALUE;
            var flexLine = new FlexLine();
            var indexInFlexLine = 0;
            flexLine._mainSize = paddingStart + paddingEnd;
            for (var i = 0; i < childCount; i++) {
                var child = _this._getReorderedChildAt(i);
                if (child === null) {
                    _this._addFlexLineIfLastFlexItem(i, childCount, flexLine);
                    continue;
                }
                else if (child.isCollapsed) {
                    flexLine._itemCount++;
                    _this._addFlexLineIfLastFlexItem(i, childCount, flexLine);
                    continue;
                }
                child._updateEffectiveLayoutValues(_this);
                var lp = child;
                if (FlexboxLayout.getAlignSelf(child) === "stretch") {
                    flexLine._indicesAlignSelfStretch.push(i);
                }
                var childWidth = lp.effectiveWidth;
                if (flexbox_layout_common_1.FlexBasisPercent.DEFAULT !== flexbox_layout_common_1.FlexBasisPercent.DEFAULT && widthMode === EXACTLY) {
                    childWidth = Math.round(widthSize * flexbox_layout_common_1.FlexBasisPercent.DEFAULT);
                }
                var childWidthMeasureSpec = FlexboxLayout.getChildMeasureSpec(widthMeasureSpec, lp.effectivePaddingLeft + lp.effectivePaddingRight + lp.effectiveMarginLeft
                    + lp.effectiveMarginRight, childWidth < 0 ? WRAP_CONTENT : childWidth);
                var childHeightMeasureSpec = FlexboxLayout.getChildMeasureSpec(heightMeasureSpec, lp.effectivePaddingTop + lp.effectivePaddingBottom + lp.effectiveMarginTop
                    + lp.effectiveMarginBottom, lp.effectiveHeight < 0 ? WRAP_CONTENT : lp.effectiveHeight);
                child.measure(childWidthMeasureSpec, childHeightMeasureSpec);
                _this._checkSizeConstraints(child);
                childState = flexbox_layout_common_1.View.combineMeasuredStates(childState, child.getMeasuredState());
                largestHeightInRow = Math.max(largestHeightInRow, child.getMeasuredHeight() + lp.effectiveMarginTop + lp.effectiveMarginBottom);
                if (_this._isWrapRequired(child, widthMode, widthSize, flexLine._mainSize, child.getMeasuredWidth() + lp.effectiveMarginLeft + lp.effectiveMarginRight, i, indexInFlexLine)) {
                    if (flexLine.itemCount > 0) {
                        _this._addFlexLine(flexLine);
                    }
                    flexLine = new FlexLine();
                    flexLine._itemCount = 1;
                    flexLine._mainSize = paddingStart + paddingEnd;
                    largestHeightInRow = child.getMeasuredHeight() + lp.effectiveMarginTop + lp.effectiveMarginBottom;
                    indexInFlexLine = 0;
                }
                else {
                    flexLine._itemCount++;
                    indexInFlexLine++;
                }
                flexLine._mainSize += child.getMeasuredWidth() + lp.effectiveMarginLeft + lp.effectiveMarginRight;
                flexLine._totalFlexGrow += FlexboxLayout.getFlexGrow(child);
                flexLine._totalFlexShrink += FlexboxLayout.getFlexShrink(child);
                flexLine._crossSize = Math.max(flexLine._crossSize, largestHeightInRow);
                if (_this.flexWrap !== flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    flexLine._maxBaseline = Math.max(flexLine._maxBaseline, FlexboxLayout.getBaseline(child) + lp.effectiveMarginTop);
                }
                else {
                    flexLine._maxBaseline = Math.max(flexLine._maxBaseline, child.getMeasuredHeight() - FlexboxLayout.getBaseline(child) + lp.effectiveMarginBottom);
                }
                _this._addFlexLineIfLastFlexItem(i, childCount, flexLine);
            }
        })();
        this._determineMainSize(this.flexDirection, widthMeasureSpec, heightMeasureSpec);
        if (this.alignItems === flexbox_layout_common_1.AlignItems.BASELINE) {
            var viewIndex_1 = 0;
            this._flexLines.forEach(function (flexLine) {
                var largestHeightInLine = Number.MIN_VALUE;
                for (var i = viewIndex_1; i < viewIndex_1 + flexLine._itemCount; i++) {
                    var child = _this._getReorderedChildAt(i);
                    var lp = child;
                    if (_this.flexWrap !== flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                        var marginTop = flexLine._maxBaseline - FlexboxLayout.getBaseline(child);
                        marginTop = Math.max(marginTop, lp.effectiveMarginTop);
                        largestHeightInLine = Math.max(largestHeightInLine, child.getActualSize().height + marginTop + lp.effectiveMarginBottom);
                    }
                    else {
                        var marginBottom = flexLine._maxBaseline - child.getMeasuredHeight() + FlexboxLayout.getBaseline(child);
                        marginBottom = Math.max(marginBottom, lp.effectiveMarginBottom);
                        largestHeightInLine = Math.max(largestHeightInLine, child.getActualSize().height + lp.effectiveMarginTop + marginBottom);
                    }
                }
                flexLine._crossSize = largestHeightInLine;
                viewIndex_1 += flexLine.itemCount;
            });
        }
        this._determineCrossSize(this.flexDirection, widthMeasureSpec, heightMeasureSpec, this.effectivePaddingTop + this.effectivePaddingBottom);
        this._stretchViews(this.flexDirection, this.alignItems);
        this._setMeasuredDimensionForFlex(this.flexDirection, widthMeasureSpec, heightMeasureSpec, childState);
    };
    FlexboxLayout.prototype._measureVertical = function (widthMeasureSpec, heightMeasureSpec) {
        var heightMode = getMeasureSpecMode(heightMeasureSpec);
        var heightSize = getMeasureSpecSize(heightMeasureSpec);
        var childState = 0;
        this._flexLines.length = 0;
        var childCount = this.measureContext.childrenCount;
        var paddingTop = this.effectivePaddingTop;
        var paddingBottom = this.effectivePaddingBottom;
        var largestWidthInColumn = Number.MIN_VALUE;
        var flexLine = new FlexLine();
        flexLine._mainSize = paddingTop + paddingBottom;
        var indexInFlexLine = 0;
        for (var i = 0; i < childCount; i++) {
            var child = this._getReorderedChildAt(i);
            if (child === null) {
                this._addFlexLineIfLastFlexItem(i, childCount, flexLine);
                continue;
            }
            else if (child.isCollapsed) {
                flexLine._itemCount++;
                this._addFlexLineIfLastFlexItem(i, childCount, flexLine);
                continue;
            }
            child._updateEffectiveLayoutValues(this);
            var lp = child;
            if (FlexboxLayout.getAlignSelf(child) === "stretch") {
                flexLine._indicesAlignSelfStretch.push(i);
            }
            var childHeight = lp.effectiveHeight;
            if (flexbox_layout_common_1.FlexBasisPercent.DEFAULT !== flexbox_layout_common_1.FlexBasisPercent.DEFAULT && heightMode === EXACTLY) {
                childHeight = Math.round(heightSize * flexbox_layout_common_1.FlexBasisPercent.DEFAULT);
            }
            var childWidthMeasureSpec = FlexboxLayout.getChildMeasureSpec(widthMeasureSpec, this.effectivePaddingLeft + this.effectivePaddingRight + lp.effectiveMarginLeft
                + lp.effectiveMarginRight, lp.effectiveWidth < 0 ? WRAP_CONTENT : lp.effectiveWidth);
            var childHeightMeasureSpec = FlexboxLayout.getChildMeasureSpec(heightMeasureSpec, this.effectivePaddingTop + this.effectivePaddingBottom + lp.effectiveMarginTop
                + lp.effectiveMarginBottom, childHeight < 0 ? WRAP_CONTENT : childHeight);
            child.measure(childWidthMeasureSpec, childHeightMeasureSpec);
            this._checkSizeConstraints(child);
            childState = flexbox_layout_common_1.View.combineMeasuredStates(childState, child.getMeasuredState());
            largestWidthInColumn = Math.max(largestWidthInColumn, child.getMeasuredWidth() + lp.effectiveMarginLeft + lp.effectiveMarginRight);
            if (this._isWrapRequired(child, heightMode, heightSize, flexLine.mainSize, child.getMeasuredHeight() + lp.effectiveMarginTop + lp.effectiveMarginBottom, i, indexInFlexLine)) {
                if (flexLine._itemCount > 0) {
                    this._addFlexLine(flexLine);
                }
                flexLine = new FlexLine();
                flexLine._itemCount = 1;
                flexLine._mainSize = paddingTop + paddingBottom;
                largestWidthInColumn = child.getMeasuredWidth() + lp.effectiveMarginLeft + lp.effectiveMarginRight;
                indexInFlexLine = 0;
            }
            else {
                flexLine._itemCount++;
                indexInFlexLine++;
            }
            flexLine._mainSize += child.getMeasuredHeight() + lp.effectiveMarginTop + lp.effectiveMarginBottom;
            flexLine._totalFlexGrow += FlexboxLayout.getFlexGrow(child);
            flexLine._totalFlexShrink += FlexboxLayout.getFlexShrink(child);
            flexLine._crossSize = Math.max(flexLine._crossSize, largestWidthInColumn);
            this._addFlexLineIfLastFlexItem(i, childCount, flexLine);
        }
        this._determineMainSize(this.flexDirection, widthMeasureSpec, heightMeasureSpec);
        this._determineCrossSize(this.flexDirection, widthMeasureSpec, heightMeasureSpec, this.effectivePaddingLeft + this.effectivePaddingRight);
        this._stretchViews(this.flexDirection, this.alignItems);
        this._setMeasuredDimensionForFlex(this.flexDirection, widthMeasureSpec, heightMeasureSpec, childState);
    };
    FlexboxLayout.prototype._checkSizeConstraints = function (view) {
        var needsMeasure = false;
        var childWidth = view.getMeasuredWidth();
        var childHeight = view.getMeasuredHeight();
        var minWidth = view.effectiveMinWidth;
        view.effectiveMinWidth = 0;
        if (view.getMeasuredWidth() < minWidth) {
            needsMeasure = true;
            childWidth = minWidth;
        }
        else if (view.getMeasuredWidth() > MAX_SIZE) {
            needsMeasure = true;
            childWidth = MAX_SIZE;
        }
        var minHeight = view.effectiveMinHeight;
        view.effectiveMinHeight = 0;
        if (childHeight < minHeight) {
            needsMeasure = true;
            childHeight = minHeight;
        }
        else if (childHeight > MAX_SIZE) {
            needsMeasure = true;
            childHeight = MAX_SIZE;
        }
        if (needsMeasure) {
            view.measure(makeMeasureSpec(childWidth, EXACTLY), makeMeasureSpec(childHeight, EXACTLY));
        }
        view.effectiveMinWidth = minWidth;
        view.effectiveMinHeight = minHeight;
    };
    FlexboxLayout.prototype._addFlexLineIfLastFlexItem = function (childIndex, childCount, flexLine) {
        if (childIndex === childCount - 1 && flexLine.itemCount !== 0) {
            this._addFlexLine(flexLine);
        }
    };
    FlexboxLayout.prototype._addFlexLine = function (flexLine) {
        this._flexLines.push(flexLine);
    };
    FlexboxLayout.prototype._determineMainSize = function (flexDirection, widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        var mainSize;
        var paddingAlongMainAxis;
        switch (flexDirection) {
            case flexbox_layout_common_1.FlexDirection.ROW:
            case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                var widthMode = getMeasureSpecMode(widthMeasureSpec);
                var widthSize = getMeasureSpecSize(widthMeasureSpec);
                if (widthMode === EXACTLY) {
                    mainSize = widthSize;
                }
                else {
                    mainSize = this._getLargestMainSize();
                }
                paddingAlongMainAxis = this.effectivePaddingLeft + this.effectivePaddingRight;
                break;
            case flexbox_layout_common_1.FlexDirection.COLUMN:
            case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                var heightMode = getMeasureSpecMode(heightMeasureSpec);
                var heightSize = getMeasureSpecSize(heightMeasureSpec);
                if (heightMode === EXACTLY) {
                    mainSize = heightSize;
                }
                else {
                    mainSize = this._getLargestMainSize();
                }
                paddingAlongMainAxis = this.effectivePaddingTop + this.effectivePaddingBottom;
                break;
            default:
                throw new Error("Invalid flex direction: " + flexDirection);
        }
        var childIndex = 0;
        this._flexLines.forEach(function (flexLine) {
            if (flexLine.mainSize < mainSize) {
                childIndex = _this._expandFlexItems(flexLine, flexDirection, mainSize, paddingAlongMainAxis, childIndex);
            }
            else {
                childIndex = _this._shrinkFlexItems(flexLine, flexDirection, mainSize, paddingAlongMainAxis, childIndex);
            }
        });
    };
    FlexboxLayout.prototype._expandFlexItems = function (flexLine, flexDirection, maxMainSize, paddingAlongMainAxis, startIndex) {
        var childIndex = startIndex;
        if (flexLine._totalFlexGrow <= 0 || maxMainSize < flexLine._mainSize) {
            childIndex += flexLine._itemCount;
            return childIndex;
        }
        var sizeBeforeExpand = flexLine._mainSize;
        var needsReexpand = false;
        var pendingSpace = maxMainSize - flexLine._mainSize;
        var unitSpace = pendingSpace / flexLine._totalFlexGrow;
        flexLine._mainSize = paddingAlongMainAxis + flexLine._dividerLengthInMainSize;
        var accumulatedRoundError = 0;
        for (var i = 0; i < flexLine.itemCount; i++) {
            var child = this._getReorderedChildAt(childIndex);
            if (child === null) {
                continue;
            }
            else if (child.isCollapsed) {
                childIndex++;
                continue;
            }
            var lp = child;
            if (this._isMainAxisDirectionHorizontal(flexDirection)) {
                if (!this._childrenFrozen[childIndex]) {
                    var flexGrow = FlexboxLayout.getFlexGrow(child);
                    var rawCalculatedWidth = child.getMeasuredWidth() + unitSpace * flexGrow + accumulatedRoundError;
                    var roundedCalculatedWidth = Math.round(rawCalculatedWidth);
                    if (roundedCalculatedWidth > MAX_SIZE) {
                        needsReexpand = true;
                        roundedCalculatedWidth = MAX_SIZE;
                        this._childrenFrozen[childIndex] = true;
                        flexLine._totalFlexGrow -= flexGrow;
                    }
                    else {
                        accumulatedRoundError = rawCalculatedWidth - roundedCalculatedWidth;
                    }
                    child.measure(makeMeasureSpec(roundedCalculatedWidth, EXACTLY), makeMeasureSpec(child.getMeasuredHeight(), EXACTLY));
                }
                flexLine._mainSize += child.getMeasuredWidth() + lp.effectiveMarginLeft + lp.effectiveMarginRight;
            }
            else {
                if (!this._childrenFrozen[childIndex]) {
                    var flexGrow = FlexboxLayout.getFlexGrow(child);
                    var rawCalculatedHeight = child.getMeasuredHeight() + unitSpace * flexGrow + accumulatedRoundError;
                    var roundedCalculatedHeight = Math.round(rawCalculatedHeight);
                    if (roundedCalculatedHeight > MAX_SIZE) {
                        needsReexpand = true;
                        roundedCalculatedHeight = MAX_SIZE;
                        this._childrenFrozen[childIndex] = true;
                        flexLine._totalFlexGrow -= flexGrow;
                    }
                    else {
                        accumulatedRoundError = rawCalculatedHeight - roundedCalculatedHeight;
                    }
                    child.measure(makeMeasureSpec(child.getMeasuredWidth(), EXACTLY), makeMeasureSpec(roundedCalculatedHeight, EXACTLY));
                }
                flexLine._mainSize += child.getMeasuredHeight() + lp.effectiveMarginTop + lp.effectiveMarginBottom;
            }
            childIndex++;
        }
        if (needsReexpand && sizeBeforeExpand !== flexLine._mainSize) {
            this._expandFlexItems(flexLine, flexDirection, maxMainSize, paddingAlongMainAxis, startIndex);
        }
        return childIndex;
    };
    FlexboxLayout.prototype._shrinkFlexItems = function (flexLine, flexDirection, maxMainSize, paddingAlongMainAxis, startIndex) {
        var childIndex = startIndex;
        var sizeBeforeShrink = flexLine._mainSize;
        if (flexLine._totalFlexShrink <= 0 || maxMainSize > flexLine._mainSize) {
            childIndex += flexLine.itemCount;
            return childIndex;
        }
        var needsReshrink = false;
        var unitShrink = (flexLine._mainSize - maxMainSize) / flexLine._totalFlexShrink;
        var accumulatedRoundError = 0;
        flexLine._mainSize = paddingAlongMainAxis + flexLine._dividerLengthInMainSize;
        for (var i = 0; i < flexLine.itemCount; i++) {
            var child = this._getReorderedChildAt(childIndex);
            if (child === null) {
                continue;
            }
            else if (child.isCollapsed) {
                childIndex++;
                continue;
            }
            var lp = child;
            if (this._isMainAxisDirectionHorizontal(flexDirection)) {
                if (!this._childrenFrozen[childIndex]) {
                    var flexShrink = FlexboxLayout.getFlexShrink(child);
                    var rawCalculatedWidth = child.getMeasuredWidth() - unitShrink * flexShrink + accumulatedRoundError;
                    var roundedCalculatedWidth = Math.round(rawCalculatedWidth);
                    var minWidth = child.effectiveMinWidth;
                    child.effectiveMinWidth = 0;
                    if (roundedCalculatedWidth < minWidth) {
                        needsReshrink = true;
                        roundedCalculatedWidth = minWidth;
                        this._childrenFrozen[childIndex] = true;
                        flexLine._totalFlexShrink -= flexShrink;
                    }
                    else {
                        accumulatedRoundError = rawCalculatedWidth - roundedCalculatedWidth;
                    }
                    child.measure(makeMeasureSpec(roundedCalculatedWidth, EXACTLY), makeMeasureSpec(child.getMeasuredHeight(), EXACTLY));
                    child.effectiveMinWidth = minWidth;
                }
                flexLine._mainSize += child.getMeasuredWidth() + lp.effectiveMarginLeft + lp.effectiveMarginRight;
            }
            else {
                if (!this._childrenFrozen[childIndex]) {
                    var flexShrink = FlexboxLayout.getFlexShrink(child);
                    var rawCalculatedHeight = child.getMeasuredHeight() - unitShrink * flexShrink + accumulatedRoundError;
                    var roundedCalculatedHeight = Math.round(rawCalculatedHeight);
                    var minHeight = child.effectiveMinHeight;
                    child.effectiveMinHeight = 0;
                    if (roundedCalculatedHeight < minHeight) {
                        needsReshrink = true;
                        roundedCalculatedHeight = minHeight;
                        this._childrenFrozen[childIndex] = true;
                        flexLine._totalFlexShrink -= flexShrink;
                    }
                    else {
                        accumulatedRoundError = rawCalculatedHeight - roundedCalculatedHeight;
                    }
                    child.measure(makeMeasureSpec(child.getMeasuredWidth(), EXACTLY), makeMeasureSpec(roundedCalculatedHeight, EXACTLY));
                    child.effectiveMinHeight = minHeight;
                }
                flexLine._mainSize += child.getMeasuredHeight() + lp.effectiveMarginTop + lp.effectiveMarginBottom;
            }
            childIndex++;
        }
        if (needsReshrink && sizeBeforeShrink !== flexLine._mainSize) {
            this._shrinkFlexItems(flexLine, flexDirection, maxMainSize, paddingAlongMainAxis, startIndex);
        }
        return childIndex;
    };
    FlexboxLayout.prototype._determineCrossSize = function (flexDirection, widthMeasureSpec, heightMeasureSpec, paddingAlongCrossAxis) {
        var _this = this;
        var mode;
        var size;
        switch (flexDirection) {
            case flexbox_layout_common_1.FlexDirection.ROW:
            case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                mode = getMeasureSpecMode(heightMeasureSpec);
                size = getMeasureSpecSize(heightMeasureSpec);
                break;
            case flexbox_layout_common_1.FlexDirection.COLUMN:
            case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                mode = getMeasureSpecMode(widthMeasureSpec);
                size = getMeasureSpecSize(widthMeasureSpec);
                break;
            default:
                throw new Error("Invalid flex direction: " + flexDirection);
        }
        if (mode === EXACTLY) {
            var totalCrossSize_1 = this._getSumOfCrossSize() + paddingAlongCrossAxis;
            if (this._flexLines.length === 1) {
                this._flexLines[0]._crossSize = size - paddingAlongCrossAxis;
            }
            else if (this._flexLines.length >= 2 && totalCrossSize_1 < size) {
                switch (this.alignContent) {
                    case flexbox_layout_common_1.AlignContent.STRETCH:
                        (function () {
                            var freeSpaceUnit = (size - totalCrossSize_1) / _this._flexLines.length;
                            var accumulatedError = 0;
                            for (var i = 0, flexLinesSize = _this._flexLines.length; i < flexLinesSize; i++) {
                                var flexLine = _this._flexLines[i];
                                var newCrossSizeAsFloat = flexLine._crossSize + freeSpaceUnit;
                                if (i === _this._flexLines.length - 1) {
                                    newCrossSizeAsFloat += accumulatedError;
                                    accumulatedError = 0;
                                }
                                var newCrossSize = Math.round(newCrossSizeAsFloat);
                                accumulatedError += (newCrossSizeAsFloat - newCrossSize);
                                if (accumulatedError > 1) {
                                    newCrossSize += 1;
                                    accumulatedError -= 1;
                                }
                                else if (accumulatedError < -1) {
                                    newCrossSize -= 1;
                                    accumulatedError += 1;
                                }
                                flexLine._crossSize = newCrossSize;
                            }
                        })();
                        break;
                    case flexbox_layout_common_1.AlignContent.SPACE_AROUND:
                        (function () {
                            var spaceTopAndBottom = size - totalCrossSize_1;
                            var numberOfSpaces = _this._flexLines.length * 2;
                            spaceTopAndBottom = spaceTopAndBottom / numberOfSpaces;
                            var newFlexLines = [];
                            var dummySpaceFlexLine = new FlexLine();
                            dummySpaceFlexLine._crossSize = spaceTopAndBottom;
                            _this._flexLines.forEach(function (flexLine) {
                                newFlexLines.push(dummySpaceFlexLine);
                                newFlexLines.push(flexLine);
                                newFlexLines.push(dummySpaceFlexLine);
                            });
                            _this._flexLines = newFlexLines;
                        })();
                        break;
                    case flexbox_layout_common_1.AlignContent.SPACE_BETWEEN:
                        (function () {
                            var spaceBetweenFlexLine = size - totalCrossSize_1;
                            var numberOfSpaces = _this._flexLines.length - 1;
                            spaceBetweenFlexLine = spaceBetweenFlexLine / numberOfSpaces;
                            var accumulatedError = 0;
                            var newFlexLines = [];
                            for (var i = 0, flexLineSize = _this._flexLines.length; i < flexLineSize; i++) {
                                var flexLine = _this._flexLines[i];
                                newFlexLines.push(flexLine);
                                if (i !== _this._flexLines.length - 1) {
                                    var dummySpaceFlexLine = new FlexLine();
                                    if (i === _this._flexLines.length - 2) {
                                        dummySpaceFlexLine._crossSize = Math.round(spaceBetweenFlexLine + accumulatedError);
                                        accumulatedError = 0;
                                    }
                                    else {
                                        dummySpaceFlexLine._crossSize = Math.round(spaceBetweenFlexLine);
                                    }
                                    accumulatedError += (spaceBetweenFlexLine - dummySpaceFlexLine._crossSize);
                                    if (accumulatedError > 1) {
                                        dummySpaceFlexLine._crossSize += 1;
                                        accumulatedError -= 1;
                                    }
                                    else if (accumulatedError < -1) {
                                        dummySpaceFlexLine._crossSize -= 1;
                                        accumulatedError += 1;
                                    }
                                    newFlexLines.push(dummySpaceFlexLine);
                                }
                            }
                            _this._flexLines = newFlexLines;
                        })();
                        break;
                    case flexbox_layout_common_1.AlignContent.CENTER: {
                        var spaceAboveAndBottom = size - totalCrossSize_1;
                        spaceAboveAndBottom = spaceAboveAndBottom / 2;
                        var newFlexLines = [];
                        var dummySpaceFlexLine = new FlexLine();
                        dummySpaceFlexLine._crossSize = spaceAboveAndBottom;
                        for (var i = 0, flexLineSize = this._flexLines.length; i < flexLineSize; i++) {
                            if (i === 0) {
                                newFlexLines.push(dummySpaceFlexLine);
                            }
                            var flexLine = this._flexLines[i];
                            newFlexLines.push(flexLine);
                            if (i === this._flexLines.length - 1) {
                                newFlexLines.push(dummySpaceFlexLine);
                            }
                        }
                        this._flexLines = newFlexLines;
                        break;
                    }
                    case flexbox_layout_common_1.AlignContent.FLEX_END: {
                        var spaceTop = size - totalCrossSize_1;
                        var dummySpaceFlexLine = new FlexLine();
                        dummySpaceFlexLine._crossSize = spaceTop;
                        this._flexLines.unshift(dummySpaceFlexLine);
                        break;
                    }
                }
            }
        }
    };
    FlexboxLayout.prototype._stretchViews = function (flexDirection, alignItems) {
        var _this = this;
        if (alignItems === flexbox_layout_common_1.AlignItems.STRETCH) {
            var viewIndex_2 = 0;
            this._flexLines.forEach(function (flexLine) {
                for (var i = 0; i < flexLine.itemCount; i++, viewIndex_2++) {
                    var view = _this._getReorderedChildAt(viewIndex_2);
                    var alignSelf = FlexboxLayout.getAlignSelf(view);
                    if (alignSelf !== "auto" && alignSelf !== "stretch") {
                        continue;
                    }
                    switch (flexDirection) {
                        case flexbox_layout_common_1.FlexDirection.ROW:
                        case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                            _this._stretchViewVertically(view, flexLine._crossSize);
                            break;
                        case flexbox_layout_common_1.FlexDirection.COLUMN:
                        case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                            _this._stretchViewHorizontally(view, flexLine._crossSize);
                            break;
                        default:
                            throw new Error("Invalid flex direction: " + flexDirection);
                    }
                }
            });
        }
        else {
            this._flexLines.forEach(function (flexLine) {
                flexLine._indicesAlignSelfStretch.forEach(function (index) {
                    var view = _this._getReorderedChildAt(index);
                    switch (flexDirection) {
                        case flexbox_layout_common_1.FlexDirection.ROW:
                        case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                            _this._stretchViewVertically(view, flexLine._crossSize);
                            break;
                        case flexbox_layout_common_1.FlexDirection.COLUMN:
                        case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                            _this._stretchViewHorizontally(view, flexLine._crossSize);
                            break;
                        default:
                            throw new Error("Invalid flex direction: " + flexDirection);
                    }
                });
            });
        }
    };
    FlexboxLayout.prototype._stretchViewVertically = function (view, crossSize) {
        var newHeight = crossSize - view.effectiveMarginTop - view.effectiveMarginBottom;
        newHeight = Math.max(newHeight, 0);
        view.measure(makeMeasureSpec(view.getMeasuredWidth(), EXACTLY), makeMeasureSpec(newHeight, EXACTLY));
    };
    FlexboxLayout.prototype._stretchViewHorizontally = function (view, crossSize) {
        var newWidth = crossSize - view.effectiveMarginLeft - view.effectiveMarginRight;
        newWidth = Math.max(newWidth, 0);
        view.measure(makeMeasureSpec(newWidth, EXACTLY), makeMeasureSpec(view.getMeasuredHeight(), EXACTLY));
    };
    FlexboxLayout.prototype._setMeasuredDimensionForFlex = function (flexDirection, widthMeasureSpec, heightMeasureSpec, childState) {
        var widthMode = getMeasureSpecMode(widthMeasureSpec);
        var widthSize = getMeasureSpecSize(widthMeasureSpec);
        var heightMode = getMeasureSpecMode(heightMeasureSpec);
        var heightSize = getMeasureSpecSize(heightMeasureSpec);
        var calculatedMaxHeight;
        var calculatedMaxWidth;
        switch (flexDirection) {
            case flexbox_layout_common_1.FlexDirection.ROW:
            case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                calculatedMaxHeight = this._getSumOfCrossSize() + this.effectivePaddingTop + this.effectivePaddingBottom;
                calculatedMaxWidth = this._getLargestMainSize();
                break;
            case flexbox_layout_common_1.FlexDirection.COLUMN:
            case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                calculatedMaxHeight = this._getLargestMainSize();
                calculatedMaxWidth = this._getSumOfCrossSize() + this.effectivePaddingLeft + this.effectivePaddingRight;
                break;
            default:
                throw new Error("Invalid flex direction: " + flexDirection);
        }
        var widthSizeAndState;
        switch (widthMode) {
            case EXACTLY:
                if (widthSize < calculatedMaxWidth) {
                    childState = flexbox_layout_common_1.View.combineMeasuredStates(childState, MEASURED_STATE_TOO_SMALL);
                }
                widthSizeAndState = flexbox_layout_common_1.View.resolveSizeAndState(widthSize, widthSize, widthMode, childState);
                break;
            case AT_MOST: {
                if (widthSize < calculatedMaxWidth) {
                    childState = flexbox_layout_common_1.View.combineMeasuredStates(childState, MEASURED_STATE_TOO_SMALL);
                }
                else {
                    widthSize = calculatedMaxWidth;
                }
                widthSizeAndState = flexbox_layout_common_1.View.resolveSizeAndState(widthSize, widthSize, widthMode, childState);
                break;
            }
            case UNSPECIFIED: {
                widthSizeAndState = flexbox_layout_common_1.View.resolveSizeAndState(calculatedMaxWidth, widthSize, widthMode, childState);
                break;
            }
            default:
                throw new Error("Unknown width mode is set: " + widthMode);
        }
        var heightSizeAndState;
        switch (heightMode) {
            case EXACTLY:
                if (heightSize < calculatedMaxHeight) {
                    childState = flexbox_layout_common_1.View.combineMeasuredStates(childState, MEASURED_STATE_TOO_SMALL >> flexbox_layout_common_1.layout.MEASURED_HEIGHT_STATE_SHIFT);
                }
                heightSizeAndState = flexbox_layout_common_1.View.resolveSizeAndState(heightSize, heightSize, heightMode, childState);
                break;
            case AT_MOST: {
                if (heightSize < calculatedMaxHeight) {
                    childState = flexbox_layout_common_1.View.combineMeasuredStates(childState, MEASURED_STATE_TOO_SMALL >> flexbox_layout_common_1.layout.MEASURED_HEIGHT_STATE_SHIFT);
                }
                else {
                    heightSize = calculatedMaxHeight;
                }
                heightSizeAndState = flexbox_layout_common_1.View.resolveSizeAndState(heightSize, heightSize, heightMode, childState);
                break;
            }
            case UNSPECIFIED: {
                heightSizeAndState = flexbox_layout_common_1.View.resolveSizeAndState(calculatedMaxHeight, heightSize, heightMode, childState);
                break;
            }
            default:
                throw new Error("Unknown height mode is set: " + heightMode);
        }
        this.setMeasuredDimension(widthSizeAndState, heightSizeAndState);
    };
    FlexboxLayout.prototype._isWrapRequired = function (child, mode, maxSize, currentLength, childLength, childAbsoluteIndex, childRelativeIndexInFlexLine) {
        if (this.flexWrap === flexbox_layout_common_1.FlexWrap.NOWRAP) {
            return false;
        }
        if (FlexboxLayout.getFlexWrapBefore(child)) {
            return true;
        }
        if (mode === UNSPECIFIED) {
            return false;
        }
        return maxSize < currentLength + childLength;
    };
    FlexboxLayout.prototype._getLargestMainSize = function () {
        return this._flexLines.reduce(function (max, flexLine) { return Math.max(max, flexLine.mainSize); }, Number.MIN_VALUE);
    };
    FlexboxLayout.prototype._getSumOfCrossSize = function () {
        return this._flexLines.reduce(function (sum, flexLine) { return sum + flexLine._crossSize; }, 0);
    };
    FlexboxLayout.prototype._isMainAxisDirectionHorizontal = function (flexDirection) {
        return flexDirection === flexbox_layout_common_1.FlexDirection.ROW || flexDirection === flexbox_layout_common_1.FlexDirection.ROW_REVERSE;
    };
    FlexboxLayout.prototype.onLayout = function (left, top, right, bottom) {
        var isRtl;
        switch (this.flexDirection) {
            case flexbox_layout_common_1.FlexDirection.ROW:
                isRtl = false;
                this._layoutHorizontal(isRtl, left, top, right, bottom);
                break;
            case flexbox_layout_common_1.FlexDirection.ROW_REVERSE:
                isRtl = true;
                this._layoutHorizontal(isRtl, left, top, right, bottom);
                break;
            case flexbox_layout_common_1.FlexDirection.COLUMN:
                isRtl = false;
                if (this.flexWrap === flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    isRtl = !isRtl;
                }
                this._layoutVertical(isRtl, false, left, top, right, bottom);
                break;
            case flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE:
                isRtl = false;
                if (this.flexWrap === flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    isRtl = !isRtl;
                }
                this._layoutVertical(isRtl, true, left, top, right, bottom);
                break;
            default:
                throw new Error("Invalid flex direction is set: " + this.flexDirection);
        }
    };
    FlexboxLayout.prototype._layoutHorizontal = function (isRtl, left, top, right, bottom) {
        var _this = this;
        var paddingLeft = this.effectivePaddingLeft;
        var paddingRight = this.effectivePaddingRight;
        var childLeft;
        var currentViewIndex = 0;
        var height = bottom - top;
        var width = right - left;
        var childBottom = height - this.effectivePaddingBottom;
        var childTop = this.effectivePaddingTop;
        var childRight;
        this._flexLines.forEach(function (flexLine, i) {
            var spaceBetweenItem = 0.0;
            switch (_this.justifyContent) {
                case flexbox_layout_common_1.JustifyContent.FLEX_START:
                    childLeft = paddingLeft;
                    childRight = width - paddingRight;
                    break;
                case flexbox_layout_common_1.JustifyContent.FLEX_END:
                    childLeft = width - flexLine._mainSize + paddingRight;
                    childRight = flexLine._mainSize - paddingLeft;
                    break;
                case flexbox_layout_common_1.JustifyContent.CENTER:
                    childLeft = paddingLeft + (width - flexLine._mainSize) / 2.0;
                    childRight = width - paddingRight - (width - flexLine._mainSize) / 2.0;
                    break;
                case flexbox_layout_common_1.JustifyContent.SPACE_AROUND:
                    if (flexLine._itemCount !== 0) {
                        spaceBetweenItem = (width - flexLine.mainSize) / flexLine._itemCount;
                    }
                    childLeft = paddingLeft + spaceBetweenItem / 2.0;
                    childRight = width - paddingRight - spaceBetweenItem / 2.0;
                    break;
                case flexbox_layout_common_1.JustifyContent.SPACE_BETWEEN:
                    childLeft = paddingLeft;
                    var denominator = flexLine.itemCount !== 1 ? flexLine.itemCount - 1 : 1.0;
                    spaceBetweenItem = (width - flexLine.mainSize) / denominator;
                    childRight = width - paddingRight;
                    break;
                default:
                    throw new Error("Invalid justifyContent is set: " + _this.justifyContent);
            }
            spaceBetweenItem = Math.max(spaceBetweenItem, 0);
            for (var j = 0; j < flexLine.itemCount; j++) {
                var child = _this._getReorderedChildAt(currentViewIndex);
                if (child === null) {
                    continue;
                }
                else if (child.isCollapsed) {
                    currentViewIndex++;
                    continue;
                }
                var lp = child;
                childLeft += lp.effectiveMarginLeft;
                childRight -= lp.effectiveMarginRight;
                if (_this.flexWrap === flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    if (isRtl) {
                        _this._layoutSingleChildHorizontal(child, flexLine, _this.flexWrap, _this.alignItems, Math.round(childRight) - child.getMeasuredWidth(), childBottom - child.getMeasuredHeight(), Math.round(childRight), childBottom);
                    }
                    else {
                        _this._layoutSingleChildHorizontal(child, flexLine, _this.flexWrap, _this.alignItems, Math.round(childLeft), childBottom - child.getMeasuredHeight(), Math.round(childLeft) + child.getMeasuredWidth(), childBottom);
                    }
                }
                else {
                    if (isRtl) {
                        _this._layoutSingleChildHorizontal(child, flexLine, _this.flexWrap, _this.alignItems, Math.round(childRight) - child.getMeasuredWidth(), childTop, Math.round(childRight), childTop + child.getMeasuredHeight());
                    }
                    else {
                        _this._layoutSingleChildHorizontal(child, flexLine, _this.flexWrap, _this.alignItems, Math.round(childLeft), childTop, Math.round(childLeft) + child.getMeasuredWidth(), childTop + child.getMeasuredHeight());
                    }
                }
                childLeft += child.getMeasuredWidth() + spaceBetweenItem + lp.effectiveMarginRight;
                childRight -= child.getMeasuredWidth() + spaceBetweenItem + lp.effectiveMarginLeft;
                currentViewIndex++;
                var bounds = child._getCurrentLayoutBounds();
                flexLine._left = Math.min(flexLine._left, bounds.left - lp.effectiveMarginLeft);
                flexLine._top = Math.min(flexLine._top, bounds.top - lp.effectiveMarginTop);
                flexLine._right = Math.max(flexLine._right, bounds.right + lp.effectiveMarginRight);
                flexLine._bottom = Math.max(flexLine._bottom, bounds.bottom + lp.effectiveMarginBottom);
            }
            childTop += flexLine._crossSize;
            childBottom -= flexLine._crossSize;
        });
    };
    FlexboxLayout.prototype._layoutSingleChildHorizontal = function (view, flexLine, flexWrap, alignItems, left, top, right, bottom) {
        var lp = view;
        var alignSelf = FlexboxLayout.getAlignSelf(view);
        if (alignSelf !== "auto") {
            alignItems = alignSelf;
        }
        var crossSize = flexLine._crossSize;
        switch (alignItems) {
            case flexbox_layout_common_1.AlignItems.FLEX_START:
            case flexbox_layout_common_1.AlignItems.STRETCH:
                if (flexWrap !== flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    view.layout(left, top + lp.effectiveMarginTop, right, bottom + lp.effectiveMarginTop);
                }
                else {
                    view.layout(left, top - lp.effectiveMarginBottom, right, bottom - lp.effectiveMarginBottom);
                }
                break;
            case flexbox_layout_common_1.AlignItems.BASELINE:
                if (flexWrap !== flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    var marginTop = flexLine._maxBaseline - FlexboxLayout.getBaseline(view);
                    marginTop = Math.max(marginTop, lp.effectiveMarginTop);
                    view.layout(left, top + marginTop, right, bottom + marginTop);
                }
                else {
                    var marginBottom = flexLine._maxBaseline - view.getMeasuredHeight() + FlexboxLayout.getBaseline(view);
                    marginBottom = Math.max(marginBottom, lp.effectiveMarginBottom);
                    view.layout(left, top - marginBottom, right, bottom - marginBottom);
                }
                break;
            case flexbox_layout_common_1.AlignItems.FLEX_END:
                if (flexWrap !== flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    view.layout(left, top + crossSize - view.getMeasuredHeight() - lp.effectiveMarginBottom, right, top + crossSize - lp.effectiveMarginBottom);
                }
                else {
                    view.layout(left, top - crossSize + view.getMeasuredHeight() + lp.effectiveMarginTop, right, bottom - crossSize + view.getMeasuredHeight() + lp.effectiveMarginTop);
                }
                break;
            case flexbox_layout_common_1.AlignItems.CENTER:
                var topFromCrossAxis = (crossSize - view.getMeasuredHeight()) / 2;
                if (flexWrap !== flexbox_layout_common_1.FlexWrap.WRAP_REVERSE) {
                    view.layout(left, top + topFromCrossAxis + lp.effectiveMarginTop - lp.effectiveMarginBottom, right, top + topFromCrossAxis + view.getMeasuredHeight() + lp.effectiveMarginTop
                        - lp.effectiveMarginBottom);
                }
                else {
                    view.layout(left, top - topFromCrossAxis + lp.effectiveMarginTop - lp.effectiveMarginBottom, right, top - topFromCrossAxis + view.getMeasuredHeight() + lp.effectiveMarginTop
                        - lp.effectiveMarginBottom);
                }
                break;
        }
    };
    FlexboxLayout.prototype._layoutVertical = function (isRtl, fromBottomToTop, left, top, right, bottom) {
        var _this = this;
        var paddingTop = this.effectivePaddingTop;
        var paddingBottom = this.effectivePaddingBottom;
        var paddingRight = this.effectivePaddingRight;
        var childLeft = this.effectivePaddingLeft;
        var currentViewIndex = 0;
        var width = right - left;
        var height = bottom - top;
        var childRight = width - paddingRight;
        var childTop;
        var childBottom;
        this._flexLines.forEach(function (flexLine) {
            var spaceBetweenItem = 0.0;
            switch (_this.justifyContent) {
                case flexbox_layout_common_1.JustifyContent.FLEX_START:
                    childTop = paddingTop;
                    childBottom = height - paddingBottom;
                    break;
                case flexbox_layout_common_1.JustifyContent.FLEX_END:
                    childTop = height - flexLine._mainSize + paddingBottom;
                    childBottom = flexLine._mainSize - paddingTop;
                    break;
                case flexbox_layout_common_1.JustifyContent.CENTER:
                    childTop = paddingTop + (height - flexLine._mainSize) / 2.0;
                    childBottom = height - paddingBottom - (height - flexLine._mainSize) / 2.0;
                    break;
                case flexbox_layout_common_1.JustifyContent.SPACE_AROUND:
                    if (flexLine._itemCount !== 0) {
                        spaceBetweenItem = (height - flexLine._mainSize) / flexLine.itemCount;
                    }
                    childTop = paddingTop + spaceBetweenItem / 2.0;
                    childBottom = height - paddingBottom - spaceBetweenItem / 2.0;
                    break;
                case flexbox_layout_common_1.JustifyContent.SPACE_BETWEEN:
                    childTop = paddingTop;
                    var denominator = flexLine.itemCount !== 1 ? flexLine.itemCount - 1 : 1.0;
                    spaceBetweenItem = (height - flexLine.mainSize) / denominator;
                    childBottom = height - paddingBottom;
                    break;
                default:
                    throw new Error("Invalid justifyContent is set: " + _this.justifyContent);
            }
            spaceBetweenItem = Math.max(spaceBetweenItem, 0);
            for (var j = 0; j < flexLine.itemCount; j++) {
                var child = _this._getReorderedChildAt(currentViewIndex);
                if (child === null) {
                    continue;
                }
                else if (child.isCollapsed) {
                    currentViewIndex++;
                    continue;
                }
                var lp = child;
                childTop += lp.effectiveMarginTop;
                childBottom -= lp.effectiveMarginBottom;
                if (isRtl) {
                    if (fromBottomToTop) {
                        _this._layoutSingleChildVertical(child, flexLine, true, _this.alignItems, childRight - child.getMeasuredWidth(), Math.round(childBottom) - child.getMeasuredHeight(), childRight, Math.round(childBottom));
                    }
                    else {
                        _this._layoutSingleChildVertical(child, flexLine, true, _this.alignItems, childRight - child.getMeasuredWidth(), Math.round(childTop), childRight, Math.round(childTop) + child.getMeasuredHeight());
                    }
                }
                else {
                    if (fromBottomToTop) {
                        _this._layoutSingleChildVertical(child, flexLine, false, _this.alignItems, childLeft, Math.round(childBottom) - child.getMeasuredHeight(), childLeft + child.getMeasuredWidth(), Math.round(childBottom));
                    }
                    else {
                        _this._layoutSingleChildVertical(child, flexLine, false, _this.alignItems, childLeft, Math.round(childTop), childLeft + child.getMeasuredWidth(), Math.round(childTop) + child.getMeasuredHeight());
                    }
                }
                childTop += child.getMeasuredHeight() + spaceBetweenItem + lp.effectiveMarginBottom;
                childBottom -= child.getMeasuredHeight() + spaceBetweenItem + lp.effectiveMarginTop;
                currentViewIndex++;
                var bounds = child._getCurrentLayoutBounds();
                flexLine._left = Math.min(flexLine._left, bounds.left - lp.effectiveMarginLeft);
                flexLine._top = Math.min(flexLine._top, bounds.top - lp.effectiveMarginTop);
                flexLine._right = Math.max(flexLine._right, bounds.right + lp.effectiveMarginRight);
                flexLine._bottom = Math.max(flexLine._bottom, bounds.bottom + lp.effectiveMarginBottom);
            }
            childLeft += flexLine.crossSize;
            childRight -= flexLine.crossSize;
        });
    };
    FlexboxLayout.prototype._layoutSingleChildVertical = function (view, flexLine, isRtl, alignItems, left, top, right, bottom) {
        var lp = view;
        var alignSelf = FlexboxLayout.getAlignSelf(view);
        if (alignSelf !== "auto") {
            alignItems = alignSelf;
        }
        var crossSize = flexLine.crossSize;
        switch (alignItems) {
            case flexbox_layout_common_1.AlignItems.FLEX_START:
            case flexbox_layout_common_1.AlignItems.STRETCH:
            case flexbox_layout_common_1.AlignItems.BASELINE:
                if (!isRtl) {
                    view.layout(left + lp.effectiveMarginLeft, top, right + lp.effectiveMarginLeft, bottom);
                }
                else {
                    view.layout(left - lp.effectiveMarginRight, top, right - lp.effectiveMarginRight, bottom);
                }
                break;
            case flexbox_layout_common_1.AlignItems.FLEX_END:
                if (!isRtl) {
                    view.layout(left + crossSize - view.getMeasuredWidth() - lp.effectiveMarginRight, top, right + crossSize - view.getMeasuredWidth() - lp.effectiveMarginRight, bottom);
                }
                else {
                    view.layout(left - crossSize + view.getMeasuredWidth() + lp.effectiveMarginLeft, top, right - crossSize + view.getMeasuredWidth() + lp.effectiveMarginLeft, bottom);
                }
                break;
            case flexbox_layout_common_1.AlignItems.CENTER:
                var leftFromCrossAxis = (crossSize - view.getMeasuredWidth()) / 2;
                if (!isRtl) {
                    view.layout(left + leftFromCrossAxis + lp.effectiveMarginLeft - lp.effectiveMarginRight, top, right + leftFromCrossAxis + lp.effectiveMarginLeft - lp.effectiveMarginRight, bottom);
                }
                else {
                    view.layout(left - leftFromCrossAxis + lp.effectiveMarginLeft - lp.effectiveMarginRight, top, right - leftFromCrossAxis + lp.effectiveMarginLeft - lp.effectiveMarginRight, bottom);
                }
                break;
        }
    };
    FlexboxLayout.getChildMeasureSpec = function (spec, padding, childDimension) {
        var specMode = flexbox_layout_common_1.layout.getMeasureSpecMode(spec);
        var specSize = flexbox_layout_common_1.layout.getMeasureSpecSize(spec);
        var size = Math.max(0, specSize - padding);
        var resultSize = 0;
        var resultMode = 0;
        switch (specMode) {
            case EXACTLY:
                if (childDimension >= 0) {
                    resultSize = childDimension;
                    resultMode = EXACTLY;
                }
                else if (childDimension === MATCH_PARENT) {
                    resultSize = size;
                    resultMode = EXACTLY;
                }
                else if (childDimension === WRAP_CONTENT) {
                    resultSize = size;
                    resultMode = AT_MOST;
                }
                break;
            case AT_MOST:
                if (childDimension >= 0) {
                    resultSize = childDimension;
                    resultMode = EXACTLY;
                }
                else if (childDimension === MATCH_PARENT) {
                    resultSize = size;
                    resultMode = AT_MOST;
                }
                else if (childDimension === WRAP_CONTENT) {
                    resultSize = size;
                    resultMode = AT_MOST;
                }
                break;
            case UNSPECIFIED:
                if (childDimension >= 0) {
                    resultSize = childDimension;
                    resultMode = EXACTLY;
                }
                else if (childDimension === MATCH_PARENT) {
                    resultSize = View_sUseZeroUnspecifiedMeasureSpec ? 0 : size;
                    resultMode = UNSPECIFIED;
                }
                else if (childDimension === WRAP_CONTENT) {
                    resultSize = View_sUseZeroUnspecifiedMeasureSpec ? 0 : size;
                    resultMode = UNSPECIFIED;
                }
                break;
        }
        return flexbox_layout_common_1.layout.makeMeasureSpec(resultSize, resultMode);
    };
    return FlexboxLayout;
}(flexbox_layout_common_1.FlexboxLayoutBase));
exports.FlexboxLayout = FlexboxLayout;
(function (FlexboxLayout) {
    function getBaseline(child) {
        return 0;
    }
    FlexboxLayout.getBaseline = getBaseline;
    function getPaddingStart(child) {
        return child.effectivePaddingLeft;
    }
    FlexboxLayout.getPaddingStart = getPaddingStart;
    function getPaddingEnd(child) {
        return child.effectivePaddingRight;
    }
    FlexboxLayout.getPaddingEnd = getPaddingEnd;
})(FlexboxLayout = exports.FlexboxLayout || (exports.FlexboxLayout = {}));
exports.FlexboxLayout = FlexboxLayout;
//# sourceMappingURL=flexbox-layout.ios.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var switch_common_1 = __webpack_require__(42);
__export(__webpack_require__(42));
var SwitchChangeHandlerImpl = (function (_super) {
    __extends(SwitchChangeHandlerImpl, _super);
    function SwitchChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitchChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = SwitchChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    SwitchChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            switch_common_1.checkedProperty.nativeValueChange(owner, sender.on);
        }
    };
    SwitchChangeHandlerImpl.ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UISwitch] }
    };
    return SwitchChangeHandlerImpl;
}(NSObject));
var zeroSize = { width: 0, height: 0 };
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super.call(this) || this;
        var nativeView = UISwitch.new();
        _this._handler = SwitchChangeHandlerImpl.initWithOwner(new WeakRef(_this));
        nativeView.addTargetActionForControlEvents(_this._handler, "valueChanged", 4096);
        _this.nativeViewProtected = nativeView;
        _this.width = 51;
        _this.height = 31;
        return _this;
    }
    Object.defineProperty(Switch.prototype, "ios", {
        get: function () {
            return this.nativeViewProtected;
        },
        enumerable: true,
        configurable: true
    });
    Switch.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeSize = this.nativeViewProtected.sizeThatFits(zeroSize);
        this.width = nativeSize.width;
        this.height = nativeSize.height;
        var widthAndState = Switch.resolveSizeAndState(switch_common_1.layout.toDevicePixels(nativeSize.width), switch_common_1.layout.toDevicePixels(51), switch_common_1.layout.EXACTLY, 0);
        var heightAndState = Switch.resolveSizeAndState(switch_common_1.layout.toDevicePixels(nativeSize.height), switch_common_1.layout.toDevicePixels(31), switch_common_1.layout.EXACTLY, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Switch.prototype[switch_common_1.checkedProperty.getDefault] = function () {
        return false;
    };
    Switch.prototype[switch_common_1.checkedProperty.setNative] = function (value) {
        this.nativeViewProtected.on = value;
    };
    Switch.prototype[switch_common_1.colorProperty.getDefault] = function () {
        return this.nativeViewProtected.thumbTintColor;
    };
    Switch.prototype[switch_common_1.colorProperty.setNative] = function (value) {
        this.nativeViewProtected.thumbTintColor = value instanceof switch_common_1.Color ? value.ios : value;
    };
    Switch.prototype[switch_common_1.backgroundColorProperty.getDefault] = function () {
        return this.nativeViewProtected.onTintColor;
    };
    Switch.prototype[switch_common_1.backgroundColorProperty.setNative] = function (value) {
        this.nativeViewProtected.onTintColor = value instanceof switch_common_1.Color ? value.ios : value;
    };
    Switch.prototype[switch_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    Switch.prototype[switch_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return Switch;
}(switch_common_1.SwitchBase));
exports.Switch = Switch;
//# sourceMappingURL=switch.ios.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var text_field_common_1 = __webpack_require__(45);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(45));
var zeroLength = {
    value: 0,
    unit: "px"
};
var UITextFieldDelegateImpl = (function (_super) {
    __extends(UITextFieldDelegateImpl, _super);
    function UITextFieldDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITextFieldDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITextFieldDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldBeginEditing = function (textField) {
        this.firstEdit = true;
        var owner = this._owner.get();
        if (owner) {
            return owner.editable;
        }
        return true;
    };
    UITextFieldDelegateImpl.prototype.textFieldDidBeginEditing = function (textField) {
        var owner = this._owner.get();
        if (owner) {
            owner.notify({ eventName: TextField.focusEvent, object: owner });
        }
    };
    UITextFieldDelegateImpl.prototype.textFieldDidEndEditing = function (textField) {
        var owner = this._owner.get();
        if (owner) {
            if (owner.updateTextTrigger === "focusLost") {
                text_field_common_1.textProperty.nativeValueChange(owner, textField.text);
            }
            owner.dismissSoftInput();
        }
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldClear = function (textField) {
        this.firstEdit = false;
        var owner = this._owner.get();
        if (owner) {
            text_field_common_1.textProperty.nativeValueChange(owner, '');
        }
        return true;
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldReturn = function (textField) {
        var owner = this._owner.get();
        if (owner) {
            owner.dismissSoftInput();
            owner.notify({ eventName: TextField.returnPressEvent, object: owner });
        }
        return true;
    };
    UITextFieldDelegateImpl.prototype.textFieldShouldChangeCharactersInRangeReplacementString = function (textField, range, replacementString) {
        var owner = this._owner.get();
        if (owner) {
            var delta = replacementString.length - range.length;
            if (delta > 0) {
                if (textField.text.length + delta > owner.maxLength) {
                    return false;
                }
            }
            if (owner.updateTextTrigger === "textChanged") {
                if (textField.secureTextEntry && this.firstEdit) {
                    text_field_common_1.textProperty.nativeValueChange(owner, replacementString);
                }
                else {
                    if (range.location <= textField.text.length) {
                        var newText = NSString.stringWithString(textField.text).stringByReplacingCharactersInRangeWithString(range, replacementString);
                        text_field_common_1.textProperty.nativeValueChange(owner, newText);
                    }
                }
            }
            if (owner.formattedText) {
                text_field_common_1._updateCharactersInRangeReplacementString(owner.formattedText, range.location, range.length, replacementString);
            }
        }
        this.firstEdit = false;
        return true;
    };
    UITextFieldDelegateImpl.ObjCProtocols = [UITextFieldDelegate];
    return UITextFieldDelegateImpl;
}(NSObject));
var UITextFieldImpl = (function (_super) {
    __extends(UITextFieldImpl, _super);
    function UITextFieldImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITextFieldImpl.initWithOwner = function (owner) {
        var handler = UITextFieldImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITextFieldImpl.prototype._getTextRectForBounds = function (bounds) {
        var owner = this._owner ? this._owner.get() : null;
        if (!owner) {
            return bounds;
        }
        var size = bounds.size;
        var x = text_field_common_1.layout.toDeviceIndependentPixels(owner.effectiveBorderLeftWidth + owner.effectivePaddingLeft);
        var y = text_field_common_1.layout.toDeviceIndependentPixels(owner.effectiveBorderTopWidth + owner.effectivePaddingTop);
        var width = text_field_common_1.layout.toDeviceIndependentPixels(text_field_common_1.layout.toDevicePixels(size.width) - (owner.effectiveBorderLeftWidth + owner.effectivePaddingLeft + owner.effectivePaddingRight + owner.effectiveBorderRightWidth));
        var height = text_field_common_1.layout.toDeviceIndependentPixels(text_field_common_1.layout.toDevicePixels(size.height) - (owner.effectiveBorderTopWidth + owner.effectivePaddingTop + owner.effectivePaddingBottom + owner.effectiveBorderBottomWidth));
        return CGRectMake(x, y, width, height);
    };
    UITextFieldImpl.prototype.textRectForBounds = function (bounds) {
        return this._getTextRectForBounds(bounds);
    };
    UITextFieldImpl.prototype.editingRectForBounds = function (bounds) {
        return this._getTextRectForBounds(bounds);
    };
    return UITextFieldImpl;
}(UITextField));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        var _this = _super.call(this) || this;
        var weakRef = new WeakRef(_this);
        _this._ios = UITextFieldImpl.initWithOwner(weakRef);
        _this._delegate = UITextFieldDelegateImpl.initWithOwner(weakRef);
        _this.nativeViewProtected = _this._ios;
        return _this;
    }
    TextField.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    TextField.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(TextField.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype[text_field_common_1.hintProperty.getDefault] = function () {
        return this.nativeViewProtected.placeholder;
    };
    TextField.prototype[text_field_common_1.hintProperty.setNative] = function (value) {
        this._updateAttributedPlaceholder();
    };
    TextField.prototype[text_field_common_1.secureProperty.getDefault] = function () {
        return this.nativeViewProtected.secureTextEntry;
    };
    TextField.prototype[text_field_common_1.secureProperty.setNative] = function (value) {
        this.nativeViewProtected.secureTextEntry = value;
    };
    TextField.prototype[text_field_common_1.colorProperty.getDefault] = function () {
        return {
            textColor: this.nativeViewProtected.textColor,
            tintColor: this.nativeViewProtected.tintColor
        };
    };
    TextField.prototype[text_field_common_1.colorProperty.setNative] = function (value) {
        if (value instanceof text_field_common_1.Color) {
            var color = value instanceof text_field_common_1.Color ? value.ios : value;
            this.nativeViewProtected.textColor = color;
            this.nativeViewProtected.tintColor = color;
        }
        else {
            this.nativeViewProtected.textColor = value.textColor;
            this.nativeViewProtected.tintColor = value.tintColor;
        }
    };
    TextField.prototype[text_field_common_1.placeholderColorProperty.getDefault] = function () {
        return null;
    };
    TextField.prototype[text_field_common_1.placeholderColorProperty.setNative] = function (value) {
        this._updateAttributedPlaceholder();
    };
    TextField.prototype._updateAttributedPlaceholder = function () {
        var stringValue = this.hint;
        if (stringValue === null || stringValue === void 0) {
            stringValue = "";
        }
        else {
            stringValue = stringValue + "";
        }
        if (stringValue === "") {
            stringValue = " ";
        }
        var attributes = {};
        if (this.style.placeholderColor) {
            attributes[NSForegroundColorAttributeName] = this.style.placeholderColor.ios;
        }
        var attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(stringValue, attributes);
        this.nativeViewProtected.attributedPlaceholder = attributedPlaceholder;
    };
    TextField.prototype[text_field_common_1.paddingTopProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingTopProperty.setNative] = function (value) {
    };
    TextField.prototype[text_field_common_1.paddingRightProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingRightProperty.setNative] = function (value) {
    };
    TextField.prototype[text_field_common_1.paddingBottomProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingBottomProperty.setNative] = function (value) {
    };
    TextField.prototype[text_field_common_1.paddingLeftProperty.getDefault] = function () {
        return zeroLength;
    };
    TextField.prototype[text_field_common_1.paddingLeftProperty.setNative] = function (value) {
    };
    __decorate([
        profiling_1.profile
    ], TextField.prototype, "onLoaded", null);
    return TextField;
}(text_field_common_1.TextFieldBase));
exports.TextField = TextField;
//# sourceMappingURL=text-field.ios.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var editable_text_base_1 = __webpack_require__(46);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(46));
var UITextViewDelegateImpl = (function (_super) {
    __extends(UITextViewDelegateImpl, _super);
    function UITextViewDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITextViewDelegateImpl.initWithOwner = function (owner) {
        var impl = UITextViewDelegateImpl.new();
        impl._owner = owner;
        return impl;
    };
    UITextViewDelegateImpl.prototype.textViewShouldBeginEditing = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            owner.showText();
        }
        return true;
    };
    UITextViewDelegateImpl.prototype.textViewDidBeginEditing = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            owner._isEditing = true;
            owner.notify({ eventName: TextView.focusEvent, object: owner });
        }
    };
    UITextViewDelegateImpl.prototype.textViewDidEndEditing = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            if (owner.updateTextTrigger === "focusLost") {
                editable_text_base_1.textProperty.nativeValueChange(owner, textView.text);
            }
            owner._isEditing = false;
            owner.dismissSoftInput();
            owner._refreshHintState(owner.hint, textView.text);
        }
    };
    UITextViewDelegateImpl.prototype.textViewDidChange = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            if (owner.updateTextTrigger === "textChanged") {
                editable_text_base_1.textProperty.nativeValueChange(owner, textView.text);
            }
        }
    };
    UITextViewDelegateImpl.prototype.textViewShouldChangeTextInRangeReplacementText = function (textView, range, replacementString) {
        var owner = this._owner.get();
        if (owner) {
            var delta = replacementString.length - range.length;
            if (delta > 0) {
                if (textView.text.length + delta > owner.maxLength) {
                    return false;
                }
            }
            if (owner.formattedText) {
                editable_text_base_1._updateCharactersInRangeReplacementString(owner.formattedText, range.location, range.length, replacementString);
            }
        }
        return true;
    };
    UITextViewDelegateImpl.prototype.scrollViewDidScroll = function (sv) {
        var owner = this._owner.get();
        if (owner) {
            var contentOffset = owner.nativeViewProtected.contentOffset;
            owner.notify({
                object: owner,
                eventName: "scroll",
                scrollX: contentOffset.x,
                scrollY: contentOffset.y
            });
        }
    };
    UITextViewDelegateImpl.ObjCProtocols = [UITextViewDelegate, UIScrollViewDelegate];
    return UITextViewDelegateImpl;
}(NSObject));
var TextView = (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        var _this = _super.call(this) || this;
        _this.nativeViewProtected = _this._ios = UITextView.new();
        if (!_this._ios.font) {
            _this._ios.font = UIFont.systemFontOfSize(12);
        }
        _this._delegate = UITextViewDelegateImpl.initWithOwner(new WeakRef(_this));
        return _this;
    }
    TextView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    TextView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(TextView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TextView.prototype._refreshHintState = function (hint, text) {
        if (this.formattedText) {
            return;
        }
        if (text !== null && text !== undefined && text !== '') {
            this.showText();
        }
        else if (!this._isEditing && hint !== null && hint !== undefined && hint !== '') {
            this.showHint(hint);
        }
        else {
            this._isShowingHint = false;
            this.nativeViewProtected.text = '';
        }
    };
    TextView.prototype._refreshColor = function () {
        if (this._isShowingHint) {
            var placeholderColor = this.style.placeholderColor;
            var color = this.style.color;
            if (placeholderColor) {
                this.nativeViewProtected.textColor = placeholderColor.ios;
            }
            else if (color) {
                this.nativeViewProtected.textColor = color.ios.colorWithAlphaComponent(0.22);
            }
            else {
                this.nativeViewProtected.textColor = UIColor.blackColor.colorWithAlphaComponent(0.22);
            }
        }
        else {
            var color = this.style.color;
            if (color) {
                this.nativeViewProtected.textColor = color.ios;
                this.nativeViewProtected.tintColor = color.ios;
            }
            else {
                this.nativeViewProtected.textColor = null;
                this.nativeViewProtected.tintColor = null;
            }
        }
    };
    TextView.prototype.showHint = function (hint) {
        var nativeView = this.nativeViewProtected;
        this._isShowingHint = true;
        this._refreshColor();
        var hintAsString = (hint === null || hint === undefined) ? '' : hint.toString();
        nativeView.text = hintAsString;
    };
    TextView.prototype.showText = function () {
        this._isShowingHint = false;
        this._refreshColor();
        this._setNativeText();
    };
    TextView.prototype[editable_text_base_1.textProperty.getDefault] = function () {
        return "";
    };
    TextView.prototype[editable_text_base_1.textProperty.setNative] = function (value) {
        this._refreshHintState(this.hint, value);
    };
    TextView.prototype[editable_text_base_1.hintProperty.getDefault] = function () {
        return "";
    };
    TextView.prototype[editable_text_base_1.hintProperty.setNative] = function (value) {
        this._refreshHintState(value, this.text);
    };
    TextView.prototype[editable_text_base_1.editableProperty.getDefault] = function () {
        return this.nativeViewProtected.editable;
    };
    TextView.prototype[editable_text_base_1.editableProperty.setNative] = function (value) {
        this.nativeViewProtected.editable = value;
    };
    TextView.prototype[editable_text_base_1.colorProperty.setNative] = function (color) {
        this._refreshColor();
    };
    TextView.prototype[editable_text_base_1.placeholderColorProperty.setNative] = function (value) {
        this._refreshColor();
    };
    TextView.prototype[editable_text_base_1.borderTopWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.top,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.borderTopWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var top = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingTop + this.effectiveBorderTopWidth);
        this.nativeViewProtected.textContainerInset = { top: top, left: inset.left, bottom: inset.bottom, right: inset.right };
    };
    TextView.prototype[editable_text_base_1.borderRightWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.right,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.borderRightWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var right = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingRight + this.effectiveBorderRightWidth);
        this.nativeViewProtected.textContainerInset = { top: inset.top, left: inset.left, bottom: inset.bottom, right: right };
    };
    TextView.prototype[editable_text_base_1.borderBottomWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.bottom,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.borderBottomWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var bottom = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingBottom + this.effectiveBorderBottomWidth);
        this.nativeViewProtected.textContainerInset = { top: inset.top, left: inset.left, bottom: bottom, right: inset.right };
    };
    TextView.prototype[editable_text_base_1.borderLeftWidthProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.left,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.borderLeftWidthProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var left = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingLeft + this.effectiveBorderLeftWidth);
        this.nativeViewProtected.textContainerInset = { top: inset.top, left: left, bottom: inset.bottom, right: inset.right };
    };
    TextView.prototype[editable_text_base_1.paddingTopProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.top,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.paddingTopProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var top = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingTop + this.effectiveBorderTopWidth);
        this.nativeViewProtected.textContainerInset = { top: top, left: inset.left, bottom: inset.bottom, right: inset.right };
    };
    TextView.prototype[editable_text_base_1.paddingRightProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.right,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.paddingRightProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var right = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingRight + this.effectiveBorderRightWidth);
        this.nativeViewProtected.textContainerInset = { top: inset.top, left: inset.left, bottom: inset.bottom, right: right };
    };
    TextView.prototype[editable_text_base_1.paddingBottomProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.bottom,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.paddingBottomProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var bottom = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingBottom + this.effectiveBorderBottomWidth);
        this.nativeViewProtected.textContainerInset = { top: inset.top, left: inset.left, bottom: bottom, right: inset.right };
    };
    TextView.prototype[editable_text_base_1.paddingLeftProperty.getDefault] = function () {
        return {
            value: this.nativeViewProtected.textContainerInset.left,
            unit: "px"
        };
    };
    TextView.prototype[editable_text_base_1.paddingLeftProperty.setNative] = function (value) {
        var inset = this.nativeViewProtected.textContainerInset;
        var left = editable_text_base_1.layout.toDeviceIndependentPixels(this.effectivePaddingLeft + this.effectiveBorderLeftWidth);
        this.nativeViewProtected.textContainerInset = { top: inset.top, left: left, bottom: inset.bottom, right: inset.right };
    };
    __decorate([
        profiling_1.profile
    ], TextView.prototype, "onLoaded", null);
    return TextView;
}(editable_text_base_1.EditableTextBase));
exports.TextView = TextView;
TextView.prototype.recycleNativeView = "auto";
//# sourceMappingURL=text-view.ios.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var time_picker_common_1 = __webpack_require__(47);
var utils_1 = __webpack_require__(1);
var getter = utils_1.ios.getter;
__export(__webpack_require__(47));
function getDate(hour, minute) {
    var components = NSDateComponents.alloc().init();
    components.hour = hour;
    components.minute = minute;
    return getter(NSCalendar, NSCalendar.currentCalendar).dateFromComponents(components);
}
function getComponents(date) {
    return getter(NSCalendar, NSCalendar.currentCalendar).componentsFromDate(32 | 64, date);
}
var TimePicker = (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        var _this = _super.call(this) || this;
        _this._ios = UIDatePicker.new();
        _this._ios.datePickerMode = 0;
        _this._changeHandler = UITimePickerChangeHandlerImpl.initWithOwner(new WeakRef(_this));
        _this._ios.addTargetActionForControlEvents(_this._changeHandler, "valueChanged", 4096);
        var components = getComponents(NSDate.date());
        _this.hour = components.hour;
        _this.minute = components.minute;
        _this.nativeViewProtected = _this._ios;
        return _this;
    }
    Object.defineProperty(TimePicker.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TimePicker.prototype[time_picker_common_1.timeProperty.getDefault] = function () {
        return this.nativeViewProtected.date;
    };
    TimePicker.prototype[time_picker_common_1.timeProperty.setNative] = function (value) {
        this.nativeViewProtected.date = getDate(this.hour, this.minute);
    };
    TimePicker.prototype[time_picker_common_1.minuteProperty.getDefault] = function () {
        return this.nativeViewProtected.date.getMinutes();
    };
    TimePicker.prototype[time_picker_common_1.minuteProperty.setNative] = function (value) {
        this.nativeViewProtected.date = getDate(this.hour, value);
    };
    TimePicker.prototype[time_picker_common_1.hourProperty.getDefault] = function () {
        return this.nativeViewProtected.date.getHours();
    };
    TimePicker.prototype[time_picker_common_1.hourProperty.setNative] = function (value) {
        this.nativeViewProtected.date = getDate(value, this.minute);
    };
    TimePicker.prototype[time_picker_common_1.minHourProperty.getDefault] = function () {
        return this.nativeViewProtected.minimumDate ? this.nativeViewProtected.minimumDate.getHours() : 0;
    };
    TimePicker.prototype[time_picker_common_1.minHourProperty.setNative] = function (value) {
        this.nativeViewProtected.minimumDate = getDate(value, this.minute);
    };
    TimePicker.prototype[time_picker_common_1.maxHourProperty.getDefault] = function () {
        return this.nativeViewProtected.maximumDate ? this.nativeViewProtected.maximumDate.getHours() : 24;
    };
    TimePicker.prototype[time_picker_common_1.maxHourProperty.setNative] = function (value) {
        this.nativeViewProtected.maximumDate = getDate(value, this.minute);
    };
    TimePicker.prototype[time_picker_common_1.minMinuteProperty.getDefault] = function () {
        return this.nativeViewProtected.minimumDate ? this.nativeViewProtected.minimumDate.getMinutes() : 0;
    };
    TimePicker.prototype[time_picker_common_1.minMinuteProperty.setNative] = function (value) {
        this.nativeViewProtected.minimumDate = getDate(this.hour, value);
    };
    TimePicker.prototype[time_picker_common_1.maxMinuteProperty.getDefault] = function () {
        return this.nativeViewProtected.maximumDate ? this.nativeViewProtected.maximumDate.getMinutes() : 60;
    };
    TimePicker.prototype[time_picker_common_1.maxMinuteProperty.setNative] = function (value) {
        this.nativeViewProtected.maximumDate = getDate(this.hour, value);
    };
    TimePicker.prototype[time_picker_common_1.timeProperty.getDefault] = function () {
        return this.nativeViewProtected.minuteInterval;
    };
    TimePicker.prototype[time_picker_common_1.timeProperty.setNative] = function (value) {
        this.nativeViewProtected.minuteInterval = value;
    };
    TimePicker.prototype[time_picker_common_1.colorProperty.getDefault] = function () {
        return this.nativeViewProtected.valueForKey("textColor");
    };
    TimePicker.prototype[time_picker_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof time_picker_common_1.Color ? value.ios : value;
        this.nativeViewProtected.setValueForKey(color, "textColor");
    };
    return TimePicker;
}(time_picker_common_1.TimePickerBase));
exports.TimePicker = TimePicker;
var UITimePickerChangeHandlerImpl = (function (_super) {
    __extends(UITimePickerChangeHandlerImpl, _super);
    function UITimePickerChangeHandlerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITimePickerChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = UITimePickerChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITimePickerChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (!owner) {
            return;
        }
        var components = getComponents(sender.date);
        var timeChanged = false;
        if (components.hour !== owner.hour) {
            time_picker_common_1.hourProperty.nativeValueChange(owner, components.hour);
            timeChanged = true;
        }
        if (components.minute !== owner.minute) {
            time_picker_common_1.minuteProperty.nativeValueChange(owner, components.minute);
            timeChanged = true;
        }
        if (timeChanged) {
            time_picker_common_1.timeProperty.nativeValueChange(owner, new Date(0, 0, 0, components.hour, components.minute));
        }
    };
    UITimePickerChangeHandlerImpl.ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UIDatePicker] }
    };
    return UITimePickerChangeHandlerImpl;
}(NSObject));
//# sourceMappingURL=time-picker.ios.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var web_view_common_1 = __webpack_require__(48);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(48));
var WKNavigationDelegateImpl = (function (_super) {
    __extends(WKNavigationDelegateImpl, _super);
    function WKNavigationDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WKNavigationDelegateImpl.initWithOwner = function (owner) {
        var handler = WKNavigationDelegateImpl.new();
        handler._owner = owner;
        return handler;
    };
    WKNavigationDelegateImpl.prototype.webViewDecidePolicyForNavigationActionDecisionHandler = function (webView, navigationAction, decisionHandler) {
        var owner = this._owner.get();
        if (owner && navigationAction.request.URL) {
            var navType = "other";
            switch (navigationAction.navigationType) {
                case 0:
                    navType = "linkClicked";
                    break;
                case 1:
                    navType = "formSubmitted";
                    break;
                case 2:
                    navType = "backForward";
                    break;
                case 3:
                    navType = "reload";
                    break;
                case 4:
                    navType = "formResubmitted";
                    break;
            }
            decisionHandler(1);
            if (web_view_common_1.traceEnabled()) {
                web_view_common_1.traceWrite("WKNavigationDelegateClass.webViewDecidePolicyForNavigationActionDecisionHandler(" + navigationAction.request.URL.absoluteString + ", " + navigationAction.navigationType + ")", web_view_common_1.traceCategories.Debug);
            }
            owner._onLoadStarted(navigationAction.request.URL.absoluteString, navType);
        }
    };
    WKNavigationDelegateImpl.prototype.webViewDidStartProvisionalNavigation = function (webView, navigation) {
        if (web_view_common_1.traceEnabled()) {
            web_view_common_1.traceWrite("WKNavigationDelegateClass.webViewDidStartProvisionalNavigation(" + webView.URL + ")", web_view_common_1.traceCategories.Debug);
        }
    };
    ;
    WKNavigationDelegateImpl.prototype.webViewDidFinishNavigation = function (webView, navigation) {
        if (web_view_common_1.traceEnabled()) {
            web_view_common_1.traceWrite("WKNavigationDelegateClass.webViewDidFinishNavigation(" + webView.URL + ")", web_view_common_1.traceCategories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            webView.evaluateJavaScriptCompletionHandler("document.body.height", function (val, err) {
                console.log(val);
            });
            var src = owner.src;
            if (webView.URL) {
                src = webView.URL.absoluteString;
            }
            owner._onLoadFinished(src);
        }
    };
    WKNavigationDelegateImpl.prototype.webViewDidFailNavigationWithError = function (webView, navigation, error) {
        var owner = this._owner.get();
        if (owner) {
            var src = owner.src;
            if (webView.URL) {
                src = webView.URL.absoluteString;
            }
            if (web_view_common_1.traceEnabled()) {
                web_view_common_1.traceWrite("WKNavigationDelegateClass.webViewDidFailNavigationWithError(" + error.localizedDescription + ")", web_view_common_1.traceCategories.Debug);
            }
            owner._onLoadFinished(src, error.localizedDescription);
        }
    };
    WKNavigationDelegateImpl.ObjCProtocols = [WKNavigationDelegate];
    return WKNavigationDelegateImpl;
}(NSObject));
var WebView = (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        var _this = _super.call(this) || this;
        var configuration = WKWebViewConfiguration.new();
        _this._delegate = WKNavigationDelegateImpl.initWithOwner(new WeakRef(_this));
        var jScript = "var meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'initial-scale=1.0'); document.getElementsByTagName('head')[0].appendChild(meta);";
        var wkUScript = WKUserScript.alloc().initWithSourceInjectionTimeForMainFrameOnly(jScript, 1, true);
        var wkUController = WKUserContentController.new();
        wkUController.addUserScript(wkUScript);
        configuration.userContentController = wkUController;
        configuration.preferences.setValueForKey(true, 'allowFileAccessFromFileURLs');
        _this.nativeViewProtected = _this._ios = new WKWebView({
            frame: CGRectZero,
            configuration: configuration
        });
        return _this;
    }
    WebView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.navigationDelegate = this._delegate;
    };
    WebView.prototype.onUnloaded = function () {
        this._ios.navigationDelegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(WebView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    WebView.prototype.stopLoading = function () {
        this._ios.stopLoading();
    };
    WebView.prototype._loadUrl = function (src) {
        if (src.startsWith('file:///')) {
            this._ios.loadFileURLAllowingReadAccessToURL(NSURL.URLWithString(src), NSURL.URLWithString(src));
        }
        else {
            this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(src)));
        }
    };
    WebView.prototype._loadData = function (content) {
        this._ios.loadHTMLStringBaseURL(content, NSURL.alloc().initWithString("file:///" + web_view_common_1.knownFolders.currentApp().path + "/"));
    };
    Object.defineProperty(WebView.prototype, "canGoBack", {
        get: function () {
            return this._ios.canGoBack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebView.prototype, "canGoForward", {
        get: function () {
            return this._ios.canGoForward;
        },
        enumerable: true,
        configurable: true
    });
    WebView.prototype.goBack = function () {
        this._ios.goBack();
    };
    WebView.prototype.goForward = function () {
        this._ios.goForward();
    };
    WebView.prototype.reload = function () {
        this._ios.reload();
    };
    __decorate([
        profiling_1.profile
    ], WebView.prototype, "onLoaded", null);
    return WebView;
}(web_view_common_1.WebViewBase));
exports.WebView = WebView;
//# sourceMappingURL=web-view.ios.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var wrap_layout_common_1 = __webpack_require__(49);
__export(__webpack_require__(49));
var WrapLayout = (function (_super) {
    __extends(WrapLayout, _super);
    function WrapLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lengths = new Array();
        return _this;
    }
    WrapLayout.getChildMeasureSpec = function (parentMode, parentLength, itemLength) {
        if (itemLength > 0) {
            return wrap_layout_common_1.layout.makeMeasureSpec(itemLength, wrap_layout_common_1.layout.EXACTLY);
        }
        else if (parentMode === wrap_layout_common_1.layout.UNSPECIFIED) {
            return wrap_layout_common_1.layout.makeMeasureSpec(0, wrap_layout_common_1.layout.UNSPECIFIED);
        }
        else {
            return wrap_layout_common_1.layout.makeMeasureSpec(parentLength, wrap_layout_common_1.layout.AT_MOST);
        }
    };
    WrapLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = wrap_layout_common_1.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = wrap_layout_common_1.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = wrap_layout_common_1.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = wrap_layout_common_1.layout.getMeasureSpecMode(heightMeasureSpec);
        var horizontalPaddingsAndMargins = this.effectivePaddingLeft + this.effectivePaddingRight + this.effectiveBorderLeftWidth + this.effectiveBorderRightWidth;
        var verticalPaddingsAndMargins = this.effectivePaddingTop + this.effectivePaddingBottom + this.effectiveBorderTopWidth + this.effectiveBorderBottomWidth;
        var availableWidth = widthMode === wrap_layout_common_1.layout.UNSPECIFIED ? Number.MAX_VALUE : width - horizontalPaddingsAndMargins;
        var availableHeight = heightMode === wrap_layout_common_1.layout.UNSPECIFIED ? Number.MAX_VALUE : height - verticalPaddingsAndMargins;
        var childWidthMeasureSpec = WrapLayout.getChildMeasureSpec(widthMode, availableWidth, this.effectiveItemWidth);
        var childHeightMeasureSpec = WrapLayout.getChildMeasureSpec(heightMode, availableHeight, this.effectiveItemHeight);
        var remainingWidth = availableWidth;
        var remainingHeight = availableHeight;
        this._lengths.length = 0;
        var rowOrColumn = 0;
        var maxLength = 0;
        var isVertical = this.orientation === "vertical";
        var useItemWidth = this.effectiveItemWidth > 0;
        var useItemHeight = this.effectiveItemHeight > 0;
        var itemWidth = this.effectiveItemWidth;
        var itemHeight = this.effectiveItemHeight;
        this.eachLayoutChild(function (child, last) {
            var desiredSize = wrap_layout_common_1.View.measureChild(_this, child, childWidthMeasureSpec, childHeightMeasureSpec);
            var childMeasuredWidth = useItemWidth ? itemWidth : desiredSize.measuredWidth;
            var childMeasuredHeight = useItemHeight ? itemHeight : desiredSize.measuredHeight;
            var isFirst = _this._lengths.length <= rowOrColumn;
            if (isVertical) {
                if (childMeasuredHeight > remainingHeight) {
                    rowOrColumn++;
                    maxLength = Math.max(maxLength, measureHeight);
                    measureHeight = childMeasuredHeight;
                    remainingHeight = availableHeight - childMeasuredHeight;
                    _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn] = childMeasuredWidth;
                }
                else {
                    remainingHeight -= childMeasuredHeight;
                    measureHeight += childMeasuredHeight;
                }
            }
            else {
                if (childMeasuredWidth > remainingWidth) {
                    rowOrColumn++;
                    maxLength = Math.max(maxLength, measureWidth);
                    measureWidth = childMeasuredWidth;
                    remainingWidth = availableWidth - childMeasuredWidth;
                    _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn] = childMeasuredHeight;
                }
                else {
                    remainingWidth -= childMeasuredWidth;
                    measureWidth += childMeasuredWidth;
                }
            }
            if (isFirst) {
                _this._lengths[rowOrColumn] = isVertical ? childMeasuredWidth : childMeasuredHeight;
            }
            else {
                _this._lengths[rowOrColumn] = Math.max(_this._lengths[rowOrColumn], isVertical ? childMeasuredWidth : childMeasuredHeight);
            }
        });
        if (isVertical) {
            measureHeight = Math.max(maxLength, measureHeight);
            this._lengths.forEach(function (value, index, array) {
                measureWidth += value;
            });
        }
        else {
            measureWidth = Math.max(maxLength, measureWidth);
            this._lengths.forEach(function (value, index, array) {
                measureHeight += value;
            });
        }
        measureWidth += horizontalPaddingsAndMargins;
        measureHeight += verticalPaddingsAndMargins;
        measureWidth = Math.max(measureWidth, this.effectiveMinWidth);
        measureHeight = Math.max(measureHeight, this.effectiveMinHeight);
        var widthAndState = wrap_layout_common_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = wrap_layout_common_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    WrapLayout.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var isVertical = this.orientation === "vertical";
        var paddingLeft = this.effectiveBorderLeftWidth + this.effectivePaddingLeft;
        var paddingTop = this.effectiveBorderTopWidth + this.effectivePaddingTop;
        var paddingRight = this.effectiveBorderRightWidth + this.effectivePaddingRight;
        var paddingBottom = this.effectiveBorderBottomWidth + this.effectivePaddingBottom;
        var childLeft = paddingLeft;
        var childTop = paddingTop;
        var childrenLength;
        if (isVertical) {
            childrenLength = bottom - top - paddingBottom;
        }
        else {
            childrenLength = right - left - paddingRight;
        }
        var rowOrColumn = 0;
        this.eachLayoutChild(function (child, last) {
            var childHeight = child.getMeasuredHeight() + child.effectiveMarginTop + child.effectiveMarginBottom;
            var childWidth = child.getMeasuredWidth() + child.effectiveMarginLeft + child.effectiveMarginRight;
            var length = _this._lengths[rowOrColumn];
            if (isVertical) {
                childWidth = length;
                childHeight = _this.effectiveItemHeight > 0 ? _this.effectiveItemHeight : childHeight;
                var isFirst = childTop === paddingTop;
                if (childTop + childHeight > childrenLength) {
                    childTop = paddingTop;
                    if (!isFirst) {
                        childLeft += length;
                    }
                    rowOrColumn++;
                    childWidth = _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn];
                }
            }
            else {
                childWidth = _this.effectiveItemWidth > 0 ? _this.effectiveItemWidth : childWidth;
                childHeight = length;
                var isFirst = childLeft === paddingLeft;
                if (childLeft + childWidth > childrenLength) {
                    childLeft = paddingLeft;
                    if (!isFirst) {
                        childTop += length;
                    }
                    rowOrColumn++;
                    childHeight = _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn];
                }
            }
            wrap_layout_common_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childTop + childHeight);
            if (isVertical) {
                childTop += childHeight;
            }
            else {
                childLeft += childWidth;
            }
        });
    };
    return WrapLayout;
}(wrap_layout_common_1.WrapLayoutBase));
exports.WrapLayout = WrapLayout;
//# sourceMappingURL=wrap-layout.ios.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(101);
exports.Span = span_1.Span;
var observable_1 = __webpack_require__(102);
var observable_array_1 = __webpack_require__(103);
var view_1 = __webpack_require__(50);
var knownCollections;
(function (knownCollections) {
    knownCollections.spans = "spans";
})(knownCollections = exports.knownCollections || (exports.knownCollections = {}));
var CHILD_SPAN = "Span";
var FormattedString = (function (_super) {
    __extends(FormattedString, _super);
    function FormattedString() {
        var _this = _super.call(this) || this;
        _this._spans = new observable_array_1.ObservableArray();
        _this._spans.addEventListener(observable_array_1.ObservableArray.changeEvent, _this.onSpansCollectionChanged, _this);
        return _this;
    }
    Object.defineProperty(FormattedString.prototype, "fontFamily", {
        get: function () {
            return this.style.fontFamily;
        },
        set: function (value) {
            this.style.fontFamily = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "fontSize", {
        get: function () {
            return this.style.fontSize;
        },
        set: function (value) {
            this.style.fontSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "fontStyle", {
        get: function () {
            return this.style.fontStyle;
        },
        set: function (value) {
            this.style.fontStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "fontWeight", {
        get: function () {
            return this.style.fontWeight;
        },
        set: function (value) {
            this.style.fontWeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "textDecoration", {
        get: function () {
            return this.style.textDecoration;
        },
        set: function (value) {
            this.style.textDecoration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "color", {
        get: function () {
            return this.style.color;
        },
        set: function (value) {
            this.style.color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "backgroundColor", {
        get: function () {
            return this.style.backgroundColor;
        },
        set: function (value) {
            this.style.backgroundColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormattedString.prototype, "spans", {
        get: function () {
            if (!this._spans) {
                this._spans = new observable_array_1.ObservableArray();
            }
            return this._spans;
        },
        enumerable: true,
        configurable: true
    });
    FormattedString.prototype.toString = function () {
        var result = "";
        for (var i = 0, length_1 = this._spans.length; i < length_1; i++) {
            result += this._spans.getItem(i).text;
        }
        return result;
    };
    FormattedString.prototype._addArrayFromBuilder = function (name, value) {
        if (name === knownCollections.spans) {
            this.spans.push(value);
        }
    };
    FormattedString.prototype._addChildFromBuilder = function (name, value) {
        if (name === CHILD_SPAN) {
            this.spans.push(value);
        }
    };
    FormattedString.prototype.onSpansCollectionChanged = function (eventData) {
        if (eventData.addedCount > 0) {
            for (var i = 0; i < eventData.addedCount; i++) {
                var span = eventData.object.getItem(eventData.index + i);
                this._addView(span);
                this.addPropertyChangeHandler(span);
            }
        }
        if (eventData.removed && eventData.removed.length > 0) {
            for (var p = 0; p < eventData.removed.length; p++) {
                var span = eventData.removed[p];
                this.removePropertyChangeHandler(span);
                this._removeView(span);
            }
        }
        this.notifyPropertyChange('.', this);
    };
    FormattedString.prototype.addPropertyChangeHandler = function (span) {
        var style = span.style;
        span.on(observable_1.Observable.propertyChangeEvent, this.onPropertyChange, this);
        style.on("fontFamilyChange", this.onPropertyChange, this);
        style.on("fontSizeChange", this.onPropertyChange, this);
        style.on("fontStyleChange", this.onPropertyChange, this);
        style.on("fontWeightChange", this.onPropertyChange, this);
        style.on("textDecorationChange", this.onPropertyChange, this);
        style.on("colorChange", this.onPropertyChange, this);
        style.on("backgroundColorChange", this.onPropertyChange, this);
    };
    FormattedString.prototype.removePropertyChangeHandler = function (span) {
        var style = span.style;
        span.off(observable_1.Observable.propertyChangeEvent, this.onPropertyChange, this);
        style.off("fontFamilyChange", this.onPropertyChange, this);
        style.off("fontSizeChange", this.onPropertyChange, this);
        style.off("fontStyleChange", this.onPropertyChange, this);
        style.off("fontWeightChange", this.onPropertyChange, this);
        style.off("textDecorationChange", this.onPropertyChange, this);
        style.off("colorChange", this.onPropertyChange, this);
        style.off("backgroundColorChange", this.onPropertyChange, this);
    };
    FormattedString.prototype.onPropertyChange = function (data) {
        this.notifyPropertyChange(data.propertyName, this);
    };
    FormattedString.prototype.eachChild = function (callback) {
        this.spans.forEach(function (v, i, arr) { return callback(v); });
    };
    return FormattedString;
}(view_1.ViewBase));
exports.FormattedString = FormattedString;
//# sourceMappingURL=formatted-string.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("./span");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("../data/observable");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("../data/observable-array");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(50);
var Span = (function (_super) {
    __extends(Span, _super);
    function Span() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Span.prototype, "fontFamily", {
        get: function () {
            return this.style.fontFamily;
        },
        set: function (value) {
            this.style.fontFamily = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "fontSize", {
        get: function () {
            return this.style.fontSize;
        },
        set: function (value) {
            this.style.fontSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "fontStyle", {
        get: function () {
            return this.style.fontStyle;
        },
        set: function (value) {
            this.style.fontStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "fontWeight", {
        get: function () {
            return this.style.fontWeight;
        },
        set: function (value) {
            this.style.fontWeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "textDecoration", {
        get: function () {
            return this.style.textDecoration;
        },
        set: function (value) {
            this.style.textDecoration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "color", {
        get: function () {
            return this.style.color;
        },
        set: function (value) {
            this.style.color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "backgroundColor", {
        get: function () {
            return this.style.backgroundColor;
        },
        set: function (value) {
            this.style.backgroundColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            if (this._text !== value) {
                this._text = value;
                this.notifyPropertyChange("text", value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Span.prototype._setTextInternal = function (value) {
        this._text = value;
    };
    return Span;
}(view_1.ViewBase));
exports.Span = Span;
//# sourceMappingURL=span.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_nativescript_vue_loader_lib_selector_type_script_index_0_native_true_bustCache_App_vue__ = __webpack_require__(52);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_nativescript_vue_loader_lib_template_compiler_index_id_data_v_c1862d7c_hasScoped_false_buble_transforms_node_modules_nativescript_vue_loader_lib_selector_type_template_index_0_native_true_bustCache_App_vue__ = __webpack_require__(108);
var disposed = false
var normalizeComponent = __webpack_require__(51)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_nativescript_vue_loader_lib_selector_type_script_index_0_native_true_bustCache_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_nativescript_vue_loader_lib_template_compiler_index_id_data_v_c1862d7c_hasScoped_false_buble_transforms_node_modules_nativescript_vue_loader_lib_selector_type_template_index_0_native_true_bustCache_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1862d7c", Component.options)
  } else {
    hotAPI.reload("data-v-c1862d7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_nativescript_vue_loader_lib_selector_type_script_index_0_native_true_bustCache_ImageGallery_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_nativescript_vue_loader_lib_template_compiler_index_id_data_v_692b54d2_hasScoped_false_buble_transforms_node_modules_nativescript_vue_loader_lib_selector_type_template_index_0_native_true_bustCache_ImageGallery_vue__ = __webpack_require__(107);
var disposed = false
var normalizeComponent = __webpack_require__(51)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_nativescript_vue_loader_lib_selector_type_script_index_0_native_true_bustCache_ImageGallery_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_nativescript_vue_loader_lib_template_compiler_index_id_data_v_692b54d2_hasScoped_false_buble_transforms_node_modules_nativescript_vue_loader_lib_selector_type_template_index_0_native_true_bustCache_ImageGallery_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/ImageGallery.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-692b54d2", Component.options)
  } else {
    hotAPI.reload("data-v-692b54d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c(
        "ListView",
        { attrs: { items: _vm.images } },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "StackLayout",
                    { attrs: { orientation: "horizontal" } },
                    [
                      _c("Image", {
                        staticStyle: { height: "64" },
                        attrs: { src: item.src }
                      }),
                      _vm._v(" "),
                      _c("Label", {
                        staticStyle: { verticalAlign: "center" },
                        attrs: { text: item.alt }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-692b54d2", esExports)
  }
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c("Label", {
        staticStyle: { fontSize: "48" },
        attrs: { text: "Hello mobile App" }
      }),
      _vm._v(" "),
      _c("Label", {
        staticStyle: { fontSize: "48" },
        attrs: { text: _vm.msg }
      }),
      _vm._v(" "),
      _c("ImageGallery")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c1862d7c", esExports)
  }
}

/***/ })
/******/ ]);