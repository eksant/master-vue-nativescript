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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("../../profiling");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("../text-base");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("../layouts/layout-base");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("../core/view");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var appModule = __webpack_require__(58);
var MIN_TABLET_PIXELS = 600;
var platformNames;
(function (platformNames) {
    platformNames.android = "Android";
    platformNames.ios = "iOS";
})(platformNames = exports.platformNames || (exports.platformNames = {}));
var Device = (function () {
    function Device() {
    }
    Object.defineProperty(Device.prototype, "os", {
        get: function () {
            return platformNames.android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () {
            if (!this._manufacturer) {
                this._manufacturer = android.os.Build.MANUFACTURER;
            }
            return this._manufacturer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "osVersion", {
        get: function () {
            if (!this._osVersion) {
                this._osVersion = android.os.Build.VERSION.RELEASE;
            }
            return this._osVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () {
            if (!this._model) {
                this._model = android.os.Build.MODEL;
            }
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "sdkVersion", {
        get: function () {
            if (!this._sdkVersion) {
                this._sdkVersion = android.os.Build.VERSION.SDK;
            }
            return this._sdkVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "deviceType", {
        get: function () {
            if (!this._deviceType) {
                var dips = Math.min(screen.mainScreen.widthPixels, screen.mainScreen.heightPixels) / screen.mainScreen.scale;
                if (dips >= MIN_TABLET_PIXELS) {
                    this._deviceType = "Tablet";
                }
                else {
                    this._deviceType = "Phone";
                }
            }
            return this._deviceType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () {
            if (!this._uuid) {
                var nativeApp = appModule.android.nativeApp;
                this._uuid = android.provider.Settings.Secure.getString(nativeApp.getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);
            }
            return this._uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "language", {
        get: function () {
            if (!this._language) {
                this._language = java.util.Locale.getDefault().getLanguage().replace("_", "-");
            }
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "region", {
        get: function () {
            if (!this._region) {
                this._region = java.util.Locale.getDefault().getCountry();
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
    MainScreen.prototype.cssChanged = function (args) {
        if (!this._metrics) {
            this._metrics = new android.util.DisplayMetrics();
        }
        this.initMetrics();
    };
    MainScreen.prototype.initMetrics = function () {
        var nativeApp = appModule.getNativeApplication();
        nativeApp.getSystemService(android.content.Context.WINDOW_SERVICE).getDefaultDisplay().getRealMetrics(this._metrics);
    };
    Object.defineProperty(MainScreen.prototype, "metrics", {
        get: function () {
            if (!this._metrics) {
                appModule.on("cssChanged", this.cssChanged, this);
                this._metrics = new android.util.DisplayMetrics();
                this.initMetrics();
            }
            return this._metrics;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "widthPixels", {
        get: function () {
            return this.metrics.widthPixels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "heightPixels", {
        get: function () {
            return this.metrics.heightPixels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "scale", {
        get: function () {
            return this.metrics.density;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "widthDIPs", {
        get: function () {
            return this.metrics.widthPixels / this.metrics.density;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScreen.prototype, "heightDIPs", {
        get: function () {
            return this.metrics.heightPixels / this.metrics.density;
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
exports.isAndroid = true;
//# sourceMappingURL=platform.android.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var action_bar_common_1 = __webpack_require__(28);
var utils_1 = __webpack_require__(6);
var image_source_1 = __webpack_require__(29);
var application = __webpack_require__(16);
__export(__webpack_require__(28));
var R_ID_HOME = 0x0102002c;
var ACTION_ITEM_ID_OFFSET = 10000;
var DEFAULT_ELEVATION = 4;
var AppCompatTextView;
var actionItemIdGenerator = ACTION_ITEM_ID_OFFSET;
function generateItemId() {
    actionItemIdGenerator++;
    return actionItemIdGenerator;
}
var appResources;
var MenuItemClickListener;
function initializeMenuItemClickListener() {
    if (MenuItemClickListener) {
        return;
    }
    AppCompatTextView = android.support.v7.widget.AppCompatTextView;
    var MenuItemClickListenerImpl = (function (_super) {
        __extends(MenuItemClickListenerImpl, _super);
        function MenuItemClickListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        MenuItemClickListenerImpl.prototype.onMenuItemClick = function (item) {
            var itemId = item.getItemId();
            return this.owner._onAndroidItemSelected(itemId);
        };
        MenuItemClickListenerImpl = __decorate([
            Interfaces([android.support.v7.widget.Toolbar.OnMenuItemClickListener])
        ], MenuItemClickListenerImpl);
        return MenuItemClickListenerImpl;
    }(java.lang.Object));
    MenuItemClickListener = MenuItemClickListenerImpl;
    appResources = application.android.context.getResources();
}
var ActionItem = (function (_super) {
    __extends(ActionItem, _super);
    function ActionItem() {
        var _this = _super.call(this) || this;
        _this._androidPosition = {
            position: "actionBar",
            systemIcon: undefined
        };
        _this._itemId = generateItemId();
        return _this;
    }
    Object.defineProperty(ActionItem.prototype, "android", {
        get: function () {
            return this._androidPosition;
        },
        set: function (value) {
            throw new Error("ActionItem.android is read-only");
        },
        enumerable: true,
        configurable: true
    });
    ActionItem.prototype._getItemId = function () {
        return this._itemId;
    };
    return ActionItem;
}(action_bar_common_1.ActionItemBase));
exports.ActionItem = ActionItem;
var AndroidActionBarSettings = (function () {
    function AndroidActionBarSettings(actionBar) {
        this._iconVisibility = "auto";
        this._actionBar = actionBar;
    }
    Object.defineProperty(AndroidActionBarSettings.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            if (value !== this._icon) {
                this._icon = value;
                this._actionBar._onIconPropertyChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidActionBarSettings.prototype, "iconVisibility", {
        get: function () {
            return this._iconVisibility;
        },
        set: function (value) {
            if (value !== this._iconVisibility) {
                this._iconVisibility = value;
                this._actionBar._onIconPropertyChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    return AndroidActionBarSettings;
}());
exports.AndroidActionBarSettings = AndroidActionBarSettings;
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
        var _this = _super.call(this) || this;
        _this._android = new AndroidActionBarSettings(_this);
        return _this;
    }
    Object.defineProperty(ActionBar.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
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
    ActionBar.prototype.createNativeView = function () {
        initializeMenuItemClickListener();
        var toolbar = new android.support.v7.widget.Toolbar(this._context);
        var menuItemClickListener = new MenuItemClickListener(this);
        toolbar.setOnMenuItemClickListener(menuItemClickListener);
        toolbar.menuItemClickListener = menuItemClickListener;
        return toolbar;
    };
    ActionBar.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this.nativeViewProtected.menuItemClickListener.owner = this;
    };
    ActionBar.prototype.disposeNativeView = function () {
        this.nativeViewProtected.menuItemClickListener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    ActionBar.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this.update();
    };
    ActionBar.prototype.update = function () {
        if (!this.nativeViewProtected) {
            return;
        }
        var page = this.page;
        if (!page.frame || !page.frame._getNavBarVisible(page)) {
            this.nativeViewProtected.setVisibility(android.view.View.GONE);
            return;
        }
        this.nativeViewProtected.setVisibility(android.view.View.VISIBLE);
        this._addActionItems();
        this._updateTitleAndTitleView();
        this._updateIcon();
        this._updateNavigationButton();
    };
    ActionBar.prototype._onAndroidItemSelected = function (itemId) {
        if (this.navigationButton && itemId === R_ID_HOME) {
            this.navigationButton._raiseTap();
            return true;
        }
        var menuItem = undefined;
        var items = this.actionItems.getItems();
        for (var i = 0; i < items.length; i++) {
            if (items[i]._getItemId() === itemId) {
                menuItem = items[i];
                break;
            }
        }
        if (menuItem) {
            menuItem._raiseTap();
            return true;
        }
        return false;
    };
    ActionBar.prototype._updateNavigationButton = function () {
        var navButton = this.navigationButton;
        if (navButton && action_bar_common_1.isVisible(navButton)) {
            var systemIcon = navButton.android.systemIcon;
            if (systemIcon !== undefined) {
                var systemResourceId = getSystemResourceId(systemIcon);
                if (systemResourceId) {
                    this.nativeViewProtected.setNavigationIcon(systemResourceId);
                }
            }
            else if (navButton.icon) {
                var drawableOrId = getDrawableOrResourceId(navButton.icon, appResources);
                this.nativeViewProtected.setNavigationIcon(drawableOrId);
            }
            var navBtn_1 = new WeakRef(navButton);
            this.nativeViewProtected.setNavigationOnClickListener(new android.view.View.OnClickListener({
                onClick: function (v) {
                    var owner = navBtn_1.get();
                    if (owner) {
                        owner._raiseTap();
                    }
                }
            }));
        }
        else {
            this.nativeViewProtected.setNavigationIcon(null);
        }
    };
    ActionBar.prototype._updateIcon = function () {
        var visibility = getIconVisibility(this.android.iconVisibility);
        if (visibility) {
            var icon = this.android.icon;
            if (icon !== undefined) {
                var drawableOrId = getDrawableOrResourceId(icon, appResources);
                if (drawableOrId) {
                    this.nativeViewProtected.setLogo(drawableOrId);
                }
            }
            else {
                var defaultIcon = application.android.nativeApp.getApplicationInfo().icon;
                this.nativeViewProtected.setLogo(defaultIcon);
            }
        }
        else {
            this.nativeViewProtected.setLogo(null);
        }
    };
    ActionBar.prototype._updateTitleAndTitleView = function () {
        if (!this.titleView) {
            var title = this.title;
            if (title !== undefined) {
                this.nativeViewProtected.setTitle(title);
            }
            else {
                var appContext = application.android.context;
                var appInfo = appContext.getApplicationInfo();
                var appLabel = appContext.getPackageManager().getApplicationLabel(appInfo);
                if (appLabel) {
                    this.nativeViewProtected.setTitle(appLabel);
                }
            }
        }
    };
    ActionBar.prototype._addActionItems = function () {
        var menu = this.nativeViewProtected.getMenu();
        var items = this.actionItems.getVisibleItems();
        menu.clear();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var menuItem = menu.add(android.view.Menu.NONE, item._getItemId(), android.view.Menu.NONE, item.text + "");
            if (item.actionView && item.actionView.android) {
                item.android.position = "actionBar";
                menuItem.setActionView(item.actionView.android);
                ActionBar._setOnClickListener(item);
            }
            else if (item.android.systemIcon) {
                var systemResourceId = getSystemResourceId(item.android.systemIcon);
                if (systemResourceId) {
                    menuItem.setIcon(systemResourceId);
                }
            }
            else if (item.icon) {
                var drawableOrId = getDrawableOrResourceId(item.icon, appResources);
                if (drawableOrId) {
                    menuItem.setIcon(drawableOrId);
                }
                else {
                    throw new Error("Error loading icon from " + item.icon);
                }
            }
            var showAsAction = getShowAsAction(item);
            menuItem.setShowAsAction(showAsAction);
        }
    };
    ActionBar._setOnClickListener = function (item) {
        var weakRef = new WeakRef(item);
        item.actionView.android.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function (v) {
                var owner = weakRef.get();
                if (owner) {
                    owner._raiseTap();
                }
            }
        }));
    };
    ActionBar.prototype._onTitlePropertyChanged = function () {
        if (this.nativeViewProtected) {
            this._updateTitleAndTitleView();
        }
    };
    ActionBar.prototype._onIconPropertyChanged = function () {
        if (this.nativeViewProtected) {
            this._updateIcon();
        }
    };
    ActionBar.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        if (atIndex === void 0) { atIndex = Number.MAX_VALUE; }
        _super.prototype._addViewToNativeVisualTree.call(this, child);
        if (this.nativeViewProtected && child.nativeViewProtected) {
            if (atIndex >= this.nativeViewProtected.getChildCount()) {
                this.nativeViewProtected.addView(child.nativeViewProtected);
            }
            else {
                this.nativeViewProtected.addView(child.nativeViewProtected, atIndex);
            }
            return true;
        }
        return false;
    };
    ActionBar.prototype._removeViewFromNativeVisualTree = function (child) {
        _super.prototype._removeViewFromNativeVisualTree.call(this, child);
        if (this.nativeViewProtected && child.nativeViewProtected) {
            this.nativeViewProtected.removeView(child.nativeViewProtected);
        }
    };
    ActionBar.prototype[action_bar_common_1.colorProperty.getDefault] = function () {
        var nativeView = this.nativeViewProtected;
        if (!defaultTitleTextColor) {
            var tv = getAppCompatTextView(nativeView);
            if (!tv) {
                var title = nativeView.getTitle();
                nativeView.setTitle("");
                tv = getAppCompatTextView(nativeView);
                if (title) {
                    nativeView.setTitle(title);
                }
            }
            defaultTitleTextColor = tv ? tv.getTextColors().getDefaultColor() : -570425344;
        }
        return defaultTitleTextColor;
    };
    ActionBar.prototype[action_bar_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof action_bar_common_1.Color ? value.android : value;
        this.nativeViewProtected.setTitleTextColor(color);
    };
    ActionBar.prototype[action_bar_common_1.flatProperty.setNative] = function (value) {
        var compat = android.support.v4.view.ViewCompat;
        if (compat.setElevation) {
            if (value) {
                compat.setElevation(this.nativeViewProtected, 0);
            }
            else {
                var val = DEFAULT_ELEVATION * action_bar_common_1.layout.getDisplayDensity();
                compat.setElevation(this.nativeViewProtected, val);
            }
        }
    };
    return ActionBar;
}(action_bar_common_1.ActionBarBase));
exports.ActionBar = ActionBar;
function getAppCompatTextView(toolbar) {
    for (var i = 0, count = toolbar.getChildCount(); i < count; i++) {
        var child = toolbar.getChildAt(i);
        if (child instanceof AppCompatTextView) {
            return child;
        }
    }
    return null;
}
ActionBar.prototype.recycleNativeView = "auto";
var defaultTitleTextColor;
function getDrawableOrResourceId(icon, resources) {
    if (typeof icon !== "string") {
        return undefined;
    }
    if (icon.indexOf(utils_1.RESOURCE_PREFIX) === 0) {
        var resourceId = resources.getIdentifier(icon.substr(utils_1.RESOURCE_PREFIX.length), 'drawable', application.android.packageName);
        if (resourceId > 0) {
            return resourceId;
        }
    }
    else {
        var drawable = void 0;
        var is = image_source_1.fromFileOrResource(icon);
        if (is) {
            drawable = new android.graphics.drawable.BitmapDrawable(is.android);
        }
        return drawable;
    }
    return undefined;
}
function getShowAsAction(menuItem) {
    switch (menuItem.android.position) {
        case "actionBarIfRoom":
            return android.view.MenuItem.SHOW_AS_ACTION_IF_ROOM;
        case "popup":
            return android.view.MenuItem.SHOW_AS_ACTION_NEVER;
        case "actionBar":
        default:
            return android.view.MenuItem.SHOW_AS_ACTION_ALWAYS;
    }
}
function getIconVisibility(iconVisibility) {
    switch (iconVisibility) {
        case "always":
            return true;
        case "auto":
        case "never":
        default:
            return false;
    }
}
function getSystemResourceId(systemIcon) {
    return android.content.res.Resources.getSystem().getIdentifier(systemIcon, "drawable", "android");
}
//# sourceMappingURL=action-bar.android.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("../../utils/utils");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(3);
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
//# sourceMappingURL=placeholder.android.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var layout_base_1 = __webpack_require__(2);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("../styling/font");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("./layout-base-common");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(3);
__export(__webpack_require__(3));
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("./view-common");

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
var action_bar_1 = __webpack_require__(61);
var grid_layout_1 = __webpack_require__(62);
var constants_1 = __webpack_require__(63);
var platform_1 = __webpack_require__(64);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(15));
var SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 0x00002000;
var STATUS_BAR_LIGHT_BCKG = -657931;
var STATUS_BAR_DARK_BCKG = 1711276032;
var DialogFragment;
function initializeDialogFragment() {
    if (DialogFragment) {
        return;
    }
    var DialogFragmentImpl = (function (_super) {
        __extends(DialogFragmentImpl, _super);
        function DialogFragmentImpl(_owner, _fullscreen, _shownCallback, _dismissCallback) {
            var _this = _super.call(this) || this;
            _this._owner = _owner;
            _this._fullscreen = _fullscreen;
            _this._shownCallback = _shownCallback;
            _this._dismissCallback = _dismissCallback;
            return global.__native(_this);
        }
        DialogFragmentImpl.prototype.onCreateDialog = function (savedInstanceState) {
            var dialog = new android.app.Dialog(this._owner._context);
            dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
            this._owner.horizontalAlignment = this._fullscreen ? "stretch" : "center";
            this._owner.verticalAlignment = this._fullscreen ? "stretch" : "middle";
            this._owner.actionBarHidden = true;
            var nativeView = this._owner.nativeViewProtected;
            var layoutParams = nativeView.getLayoutParams();
            if (!layoutParams) {
                layoutParams = new org.nativescript.widgets.CommonLayoutParams();
                nativeView.setLayoutParams(layoutParams);
            }
            dialog.setContentView(this._owner.nativeViewProtected, layoutParams);
            var window = dialog.getWindow();
            window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            if (this._fullscreen) {
                window.setLayout(android.view.ViewGroup.LayoutParams.FILL_PARENT, android.view.ViewGroup.LayoutParams.FILL_PARENT);
            }
            return dialog;
        };
        DialogFragmentImpl.prototype.onStart = function () {
            _super.prototype.onStart.call(this);
            if (!this._owner.isLoaded) {
                this._owner.onLoaded();
            }
            this._shownCallback();
        };
        DialogFragmentImpl.prototype.onDestroyView = function () {
            _super.prototype.onDestroyView.call(this);
            if (this._owner.isLoaded) {
                this._owner.onUnloaded();
            }
            this._owner._isAddedToNativeVisualTree = false;
            this._owner._tearDownUI(true);
        };
        DialogFragmentImpl.prototype.onDismiss = function (dialog) {
            _super.prototype.onDismiss.call(this, dialog);
            this._dismissCallback();
        };
        return DialogFragmentImpl;
    }(android.app.DialogFragment));
    ;
    DialogFragment = DialogFragmentImpl;
}
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isBackNavigation = false;
        return _this;
    }
    Page.prototype.createNativeView = function () {
        var layout = new org.nativescript.widgets.GridLayout(this._context);
        layout.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.auto));
        layout.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.star));
        return layout;
    };
    Page.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this.nativeViewProtected.setBackgroundColor(-1);
    };
    Page.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        if (this.nativeViewProtected && child.nativeViewProtected) {
            if (child instanceof action_bar_1.ActionBar) {
                grid_layout_1.GridLayout.setRow(child, 0);
                child.horizontalAlignment = "stretch";
                child.verticalAlignment = "top";
            }
            else {
                grid_layout_1.GridLayout.setRow(child, 1);
            }
        }
        return _super.prototype._addViewToNativeVisualTree.call(this, child, atIndex);
    };
    Page.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this.actionBarHidden !== undefined) {
            this.updateActionBar();
        }
    };
    Page.prototype._showNativeModalView = function (parent, context, closeCallback, fullscreen) {
        var _this = this;
        _super.prototype._showNativeModalView.call(this, parent, context, closeCallback, fullscreen);
        if (!this.backgroundColor) {
            this.backgroundColor = new page_common_1.Color("White");
        }
        this._setupUI(parent._context);
        this._isAddedToNativeVisualTree = true;
        initializeDialogFragment();
        this._dialogFragment = new DialogFragment(this, !!fullscreen, function () { return _this._raiseShownModallyEvent(); }, function () { return _this.closeModal(); });
        _super.prototype._raiseShowingModallyEvent.call(this);
        this._dialogFragment.show(parent.frame.android.activity.getFragmentManager(), constants_1.DIALOG_FRAGMENT_TAG);
    };
    Page.prototype._hideNativeModalView = function (parent) {
        this._dialogFragment.dismissAllowingStateLoss();
        this._dialogFragment = null;
        parent._modal = undefined;
        _super.prototype._hideNativeModalView.call(this, parent);
    };
    Page.prototype.updateActionBar = function () {
        this.actionBar.update();
    };
    Page.prototype[page_common_1.actionBarHiddenProperty.getDefault] = function () {
        return undefined;
    };
    Page.prototype[page_common_1.actionBarHiddenProperty.setNative] = function (value) {
        this.updateActionBar();
    };
    Page.prototype[page_common_1.statusBarStyleProperty.getDefault] = function () {
        if (platform_1.device.sdkVersion >= "21") {
            var window_1 = this._context.getWindow();
            var decorView = window_1.getDecorView();
            return {
                color: window_1.getStatusBarColor(),
                systemUiVisibility: decorView.getSystemUiVisibility()
            };
        }
        return null;
    };
    Page.prototype[page_common_1.statusBarStyleProperty.setNative] = function (value) {
        if (platform_1.device.sdkVersion >= "21") {
            var window_2 = this._context.getWindow();
            var decorView = window_2.getDecorView();
            if (value === "light") {
                window_2.setStatusBarColor(STATUS_BAR_LIGHT_BCKG);
                decorView.setSystemUiVisibility(SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
            }
            else if (value === "dark") {
                window_2.setStatusBarColor(STATUS_BAR_DARK_BCKG);
                decorView.setSystemUiVisibility(0);
            }
            else {
                window_2.setStatusBarColor(value.color);
                decorView.setSystemUiVisibility(value.systemUiVisibility);
            }
        }
    };
    Page.prototype[page_common_1.androidStatusBarBackgroundProperty.getDefault] = function () {
        if (platform_1.device.sdkVersion >= "21") {
            var window_3 = this._context.getWindow();
            return window_3.getStatusBarColor();
        }
        return null;
    };
    Page.prototype[page_common_1.androidStatusBarBackgroundProperty.setNative] = function (value) {
        if (platform_1.device.sdkVersion >= "21") {
            var window_4 = this._context.getWindow();
            var color = value instanceof page_common_1.Color ? value.android : value;
            window_4.setStatusBarColor(color);
        }
    };
    __decorate([
        profiling_1.profile
    ], Page.prototype, "onLoaded", null);
    return Page;
}(page_common_1.PageBase));
exports.Page = Page;
//# sourceMappingURL=page.android.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("./page-common");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("../../application");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("./frame-common");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("./absolute-layout-common");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("./activity-indicator-common");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("./button-common");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("./date-picker-common");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("./dock-layout-common");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("./grid-layout-common");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("./html-view-common");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var image_common_1 = __webpack_require__(26);
var file_system_1 = __webpack_require__(79);
__export(__webpack_require__(26));
var FILE_PREFIX = "file:///";
var ASYNC = "async";
var AndroidImageView;
var ImageLoadedListener;
function initializeImageLoadedListener() {
    if (ImageLoadedListener) {
        return;
    }
    var ImageLoadedListenerImpl = (function (_super) {
        __extends(ImageLoadedListenerImpl, _super);
        function ImageLoadedListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ImageLoadedListenerImpl.prototype.onImageLoaded = function (success) {
            var owner = this.owner;
            if (owner) {
                owner.isLoading = false;
            }
        };
        ImageLoadedListenerImpl = __decorate([
            Interfaces([org.nativescript.widgets.image.Worker.OnImageLoadedListener])
        ], ImageLoadedListenerImpl);
        return ImageLoadedListenerImpl;
    }(java.lang.Object));
    ImageLoadedListener = ImageLoadedListenerImpl;
}
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decodeWidth = 0;
        _this.decodeHeight = 0;
        _this.useCache = true;
        return _this;
    }
    Image.prototype.createNativeView = function () {
        if (!AndroidImageView) {
            AndroidImageView = org.nativescript.widgets.ImageView;
        }
        initializeImageLoadedListener();
        var imageView = new AndroidImageView(this._context);
        var listener = new ImageLoadedListener(this);
        imageView.setImageLoadedListener(listener);
        imageView.listener = listener;
        return imageView;
    };
    Image.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this.nativeViewProtected.listener.owner = this;
    };
    Image.prototype.disposeNativeView = function () {
        this.nativeViewProtected.listener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    Image.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        this.nativeViewProtected.setImageMatrix(new android.graphics.Matrix());
    };
    Image.prototype._createImageSourceFromSrc = function (value) {
        var imageView = this.nativeViewProtected;
        if (!imageView) {
            return;
        }
        if (!value) {
            imageView.setUri(null, 0, 0, false, true);
            return;
        }
        var async = this.loadMode === ASYNC;
        if (typeof value === "string" || value instanceof String) {
            value = value.trim();
            this.isLoading = true;
            if (image_common_1.isDataURI(value)) {
                _super.prototype._createImageSourceFromSrc.call(this, value);
            }
            else if (image_common_1.isFileOrResourcePath(value)) {
                if (value.indexOf(image_common_1.RESOURCE_PREFIX) === 0) {
                    imageView.setUri(value, this.decodeWidth, this.decodeHeight, this.useCache, async);
                }
                else {
                    var fileName = value;
                    if (fileName.indexOf("~/") === 0) {
                        fileName = file_system_1.knownFolders.currentApp().path + "/" + fileName.replace("~/", "");
                    }
                    imageView.setUri(FILE_PREFIX + fileName, this.decodeWidth, this.decodeHeight, this.useCache, async);
                }
            }
            else {
                imageView.setUri(value, this.decodeWidth, this.decodeHeight, this.useCache, true);
            }
        }
        else {
            _super.prototype._createImageSourceFromSrc.call(this, value);
        }
    };
    Image.prototype[image_common_1.stretchProperty.getDefault] = function () {
        return "aspectFit";
    };
    Image.prototype[image_common_1.stretchProperty.setNative] = function (value) {
        switch (value) {
            case "aspectFit":
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER);
                break;
            case "aspectFill":
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
                break;
            case "fill":
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
                break;
            case "none":
            default:
                this.nativeViewProtected.setScaleType(android.widget.ImageView.ScaleType.MATRIX);
                break;
        }
    };
    Image.prototype[image_common_1.tintColorProperty.getDefault] = function () {
        return undefined;
    };
    Image.prototype[image_common_1.tintColorProperty.setNative] = function (value) {
        if (value === undefined) {
            this.nativeViewProtected.clearColorFilter();
        }
        else {
            this.nativeViewProtected.setColorFilter(value.android);
        }
    };
    Image.prototype[image_common_1.imageSourceProperty.getDefault] = function () {
        return undefined;
    };
    Image.prototype[image_common_1.imageSourceProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        if (value && value.android) {
            var rotation = value.rotationAngle ? value.rotationAngle : 0;
            nativeView.setRotationAngle(rotation);
            nativeView.setImageBitmap(value.android);
        }
        else {
            nativeView.setRotationAngle(0);
            nativeView.setImageBitmap(null);
        }
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
//# sourceMappingURL=image.android.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("./image-common");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("./list-picker-common");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("./action-bar-common");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("../../image-source");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("./list-view-common");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("../layouts/stack-layout");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("./progress-common");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("./scroll-view-common");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("./search-bar-common");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var font_1 = __webpack_require__(9);
var segmented_bar_common_1 = __webpack_require__(36);
__export(__webpack_require__(36));
var R_ID_TABS = 0x01020013;
var R_ID_TABCONTENT = 0x01020011;
var R_ATTR_STATE_SELECTED = 0x010100a1;
var TITLE_TEXT_VIEW_ID = 16908310;
var apiLevel;
var selectedIndicatorThickness;
var TabHost;
var TabChangeListener;
var TabContentFactory;
function initializeNativeClasses() {
    if (TabChangeListener) {
        return;
    }
    apiLevel = android.os.Build.VERSION.SDK_INT;
    selectedIndicatorThickness = segmented_bar_common_1.layout.toDevicePixels(apiLevel >= 21 ? 2 : 5);
    var TabChangeListenerImpl = (function (_super) {
        __extends(TabChangeListenerImpl, _super);
        function TabChangeListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        TabChangeListenerImpl.prototype.onTabChanged = function (id) {
            var owner = this.owner;
            if (owner.shouldChangeSelectedIndex()) {
                owner.selectedIndex = parseInt(id);
            }
        };
        TabChangeListenerImpl = __decorate([
            Interfaces([android.widget.TabHost.OnTabChangeListener])
        ], TabChangeListenerImpl);
        return TabChangeListenerImpl;
    }(java.lang.Object));
    var TabContentFactoryImpl = (function (_super) {
        __extends(TabContentFactoryImpl, _super);
        function TabContentFactoryImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        TabContentFactoryImpl.prototype.createTabContent = function (tag) {
            var tv = new android.widget.TextView(this.owner._context);
            tv.setVisibility(android.view.View.GONE);
            tv.setMaxLines(1);
            tv.setEllipsize(android.text.TextUtils.TruncateAt.END);
            return tv;
        };
        TabContentFactoryImpl = __decorate([
            Interfaces([android.widget.TabHost.TabContentFactory])
        ], TabContentFactoryImpl);
        return TabContentFactoryImpl;
    }(java.lang.Object));
    var TabHostImpl = (function (_super) {
        __extends(TabHostImpl, _super);
        function TabHostImpl(context, attrs) {
            var _this = _super.call(this, context, attrs) || this;
            return global.__native(_this);
        }
        TabHostImpl.prototype.onAttachedToWindow = function () {
        };
        return TabHostImpl;
    }(android.widget.TabHost));
    TabHost = TabHostImpl;
    TabChangeListener = TabChangeListenerImpl;
    TabContentFactory = TabContentFactoryImpl;
}
var SegmentedBarItem = (function (_super) {
    __extends(SegmentedBarItem, _super);
    function SegmentedBarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentedBarItem.prototype.setupNativeView = function (tabIndex) {
        var titleTextView = this.parent.nativeViewProtected.getTabWidget().getChildAt(tabIndex).findViewById(TITLE_TEXT_VIEW_ID);
        this.setNativeView(titleTextView);
        if (titleTextView) {
            if (this.titleDirty) {
                this._update();
            }
        }
    };
    SegmentedBarItem.prototype._update = function () {
        var tv = this.nativeViewProtected;
        if (tv) {
            var title = this.title;
            title = (title === null || title === undefined) ? "" : title;
            tv.setText(title);
            this.titleDirty = false;
        }
        else {
            this.titleDirty = true;
        }
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.colorProperty.getDefault] = function () {
        return this.nativeViewProtected.getCurrentTextColor();
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.colorProperty.setNative] = function (value) {
        var color = value instanceof segmented_bar_common_1.Color ? value.android : value;
        this.nativeViewProtected.setTextColor(color);
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.fontSizeProperty.getDefault] = function () {
        return { nativeSize: this.nativeViewProtected.getTextSize() };
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.fontSizeProperty.setNative] = function (value) {
        if (typeof value === "number") {
            this.nativeViewProtected.setTextSize(value);
        }
        else {
            this.nativeViewProtected.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, value.nativeSize);
        }
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.fontInternalProperty.getDefault] = function () {
        return this.nativeViewProtected.getTypeface();
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.fontInternalProperty.setNative] = function (value) {
        this.nativeViewProtected.setTypeface(value instanceof font_1.Font ? value.getAndroidTypeface() : value);
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.selectedBackgroundColorProperty.getDefault] = function () {
        var viewGroup = this.nativeViewProtected.getParent();
        return viewGroup.getBackground();
    };
    SegmentedBarItem.prototype[segmented_bar_common_1.selectedBackgroundColorProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var viewGroup = nativeView.getParent();
        if (value instanceof segmented_bar_common_1.Color) {
            var color = value.android;
            var backgroundDrawable = viewGroup.getBackground();
            if (apiLevel > 21 && backgroundDrawable) {
                var newDrawable = tryCloneDrawable(backgroundDrawable, nativeView.getResources());
                newDrawable.setColorFilter(color, android.graphics.PorterDuff.Mode.SRC_IN);
                org.nativescript.widgets.ViewHelper.setBackground(viewGroup, newDrawable);
            }
            else {
                var stateDrawable = new android.graphics.drawable.StateListDrawable();
                var colorDrawable = new org.nativescript.widgets.SegmentedBarColorDrawable(color, selectedIndicatorThickness);
                var arr = Array.create("int", 1);
                arr[0] = R_ATTR_STATE_SELECTED;
                stateDrawable.addState(arr, colorDrawable);
                stateDrawable.setBounds(0, 15, viewGroup.getRight(), viewGroup.getBottom());
                org.nativescript.widgets.ViewHelper.setBackground(viewGroup, stateDrawable);
            }
        }
        else {
            var backgroundDrawable = tryCloneDrawable(value, nativeView.getResources());
            org.nativescript.widgets.ViewHelper.setBackground(viewGroup, backgroundDrawable);
        }
    };
    return SegmentedBarItem;
}(segmented_bar_common_1.SegmentedBarItemBase));
exports.SegmentedBarItem = SegmentedBarItem;
function tryCloneDrawable(value, resources) {
    if (value) {
        var constantState = value.getConstantState();
        if (constantState) {
            return constantState.newDrawable(resources);
        }
    }
    return value;
}
var SegmentedBar = (function (_super) {
    __extends(SegmentedBar, _super);
    function SegmentedBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentedBar.prototype.shouldChangeSelectedIndex = function () {
        return !this._addingTab;
    };
    SegmentedBar.prototype.createNativeView = function () {
        initializeNativeClasses();
        var context = this._context;
        var nativeView = new TabHost(context, null);
        var tabHostLayout = new android.widget.LinearLayout(context);
        tabHostLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
        var tabWidget = new android.widget.TabWidget(context);
        tabWidget.setId(R_ID_TABS);
        tabHostLayout.addView(tabWidget);
        var frame = new android.widget.FrameLayout(context);
        frame.setId(R_ID_TABCONTENT);
        frame.setVisibility(android.view.View.GONE);
        tabHostLayout.addView(frame);
        nativeView.addView(tabHostLayout);
        var listener = new TabChangeListener(this);
        nativeView.setOnTabChangedListener(listener);
        nativeView.listener = listener;
        nativeView.setup();
        return nativeView;
    };
    SegmentedBar.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = this;
        this._tabContentFactory = this._tabContentFactory || new TabContentFactory(this);
    };
    SegmentedBar.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    SegmentedBar.prototype.insertTab = function (tabItem, index) {
        var tabHost = this.nativeViewProtected;
        var tab = tabHost.newTabSpec(index + "");
        tab.setIndicator(tabItem.title + "");
        tab.setContent(this._tabContentFactory);
        this._addingTab = true;
        tabHost.addTab(tab);
        tabItem.setupNativeView(index);
        this._addingTab = false;
    };
    SegmentedBar.prototype[segmented_bar_common_1.selectedIndexProperty.getDefault] = function () {
        return -1;
    };
    SegmentedBar.prototype[segmented_bar_common_1.selectedIndexProperty.setNative] = function (value) {
        this.nativeViewProtected.setCurrentTab(value);
    };
    SegmentedBar.prototype[segmented_bar_common_1.itemsProperty.getDefault] = function () {
        return null;
    };
    SegmentedBar.prototype[segmented_bar_common_1.itemsProperty.setNative] = function (value) {
        var _this = this;
        this.nativeViewProtected.clearAllTabs();
        var newItems = value;
        if (newItems) {
            newItems.forEach(function (item, i, arr) { return _this.insertTab(item, i); });
        }
        segmented_bar_common_1.selectedIndexProperty.coerce(this);
    };
    return SegmentedBar;
}(segmented_bar_common_1.SegmentedBarBase));
exports.SegmentedBar = SegmentedBar;
//# sourceMappingURL=segmented-bar.android.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("./segmented-bar-common");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("./slider-common");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("./stack-layout-common");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("./flexbox-layout-common");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("./switch-common");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var font_1 = __webpack_require__(9);
var tab_view_common_1 = __webpack_require__(42);
var text_base_1 = __webpack_require__(1);
var image_source_1 = __webpack_require__(29);
var utils_1 = __webpack_require__(6);
__export(__webpack_require__(42));
var VIEWS_STATES = "_viewStates";
var ACCENT_COLOR = "colorAccent";
var PRIMARY_COLOR = "colorPrimary";
var DEFAULT_ELEVATION = 4;
var PagerAdapter;
var PageChangedListener;
function initializeNativeClasses() {
    if (PagerAdapter) {
        return;
    }
    var PagerAdapterImpl = (function (_super) {
        __extends(PagerAdapterImpl, _super);
        function PagerAdapterImpl(owner, items) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            _this.items = items;
            return global.__native(_this);
        }
        PagerAdapterImpl.prototype.getCount = function () {
            return this.items ? this.items.length : 0;
        };
        PagerAdapterImpl.prototype.getPageTitle = function (index) {
            if (index < 0 || index >= this.items.length) {
                return "";
            }
            return this.items[index].title;
        };
        PagerAdapterImpl.prototype.instantiateItem = function (container, index) {
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView.PagerAdapter.instantiateItem; container: " + container + "; index: " + index, tab_view_common_1.traceCategory);
            }
            var item = this.items[index];
            if (this[VIEWS_STATES]) {
                if (tab_view_common_1.traceEnabled()) {
                    tab_view_common_1.traceWrite("TabView.PagerAdapter.instantiateItem; restoreHierarchyState: " + item.view, tab_view_common_1.traceCategory);
                }
                item.view.nativeViewProtected.restoreHierarchyState(this[VIEWS_STATES]);
            }
            if (item.view.nativeViewProtected) {
                container.addView(item.view.nativeViewProtected);
            }
            return item.view.nativeViewProtected;
        };
        PagerAdapterImpl.prototype.destroyItem = function (container, index, nativeView) {
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView.PagerAdapter.destroyItem; container: " + container + "; index: " + index + "; nativeView: " + nativeView, tab_view_common_1.traceCategory);
            }
            if (!nativeView) {
                return;
            }
            container.removeView(nativeView);
        };
        PagerAdapterImpl.prototype.isViewFromObject = function (view, _object) {
            return view === _object;
        };
        PagerAdapterImpl.prototype.saveState = function () {
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView.PagerAdapter.saveState", tab_view_common_1.traceCategory);
            }
            var owner = this.owner;
            if (owner._childrenCount === 0) {
                return null;
            }
            if (!this[VIEWS_STATES]) {
                this[VIEWS_STATES] = new android.util.SparseArray();
            }
            var viewStates = this[VIEWS_STATES];
            var childCallback = function (view) {
                var nativeView = view.nativeViewProtected;
                if (nativeView && nativeView.isSaveFromParentEnabled && nativeView.isSaveFromParentEnabled()) {
                    nativeView.saveHierarchyState(viewStates);
                }
                return true;
            };
            owner.eachChildView(childCallback);
            var bundle = new android.os.Bundle();
            bundle.putSparseParcelableArray(VIEWS_STATES, viewStates);
            return bundle;
        };
        PagerAdapterImpl.prototype.restoreState = function (state, loader) {
            if (tab_view_common_1.traceEnabled()) {
                tab_view_common_1.traceWrite("TabView.PagerAdapter.restoreState", tab_view_common_1.traceCategory);
            }
            var bundle = state;
            bundle.setClassLoader(loader);
            this[VIEWS_STATES] = bundle.getSparseParcelableArray(VIEWS_STATES);
        };
        return PagerAdapterImpl;
    }(android.support.v4.view.PagerAdapter));
    ;
    var PageChangedListenerImpl = (function (_super) {
        __extends(PageChangedListenerImpl, _super);
        function PageChangedListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this._owner = owner;
            return global.__native(_this);
        }
        PageChangedListenerImpl.prototype.onPageSelected = function (position) {
            this._owner.selectedIndex = position;
        };
        return PageChangedListenerImpl;
    }(android.support.v4.view.ViewPager.SimpleOnPageChangeListener));
    PagerAdapter = PagerAdapterImpl;
    PageChangedListener = PageChangedListenerImpl;
}
function createTabItemSpec(item) {
    var result = new org.nativescript.widgets.TabItemSpec();
    result.title = item.title;
    if (item.iconSource) {
        if (item.iconSource.indexOf(utils_1.RESOURCE_PREFIX) === 0) {
            result.iconId = utils_1.ad.resources.getDrawableId(item.iconSource.substr(utils_1.RESOURCE_PREFIX.length));
        }
        else {
            var is = image_source_1.fromFileOrResource(item.iconSource);
            if (is) {
                result.iconDrawable = new android.graphics.drawable.BitmapDrawable(is.android);
            }
        }
    }
    return result;
}
var defaultAccentColor = undefined;
function getDefaultAccentColor(context) {
    if (defaultAccentColor === undefined) {
        defaultAccentColor = utils_1.ad.resources.getPaletteColor(ACCENT_COLOR, context) || 0xFF33B5E5;
    }
    return defaultAccentColor;
}
var TabViewItem = (function (_super) {
    __extends(TabViewItem, _super);
    function TabViewItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabViewItem.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this.nativeViewProtected) {
            this._defaultTransformationMethod = this.nativeViewProtected.getTransformationMethod();
        }
    };
    TabViewItem.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        if (this.nativeViewProtected) {
            this.nativeViewProtected.setTransformationMethod(this._defaultTransformationMethod);
        }
    };
    TabViewItem.prototype.createNativeView = function () {
        return this.nativeViewProtected;
    };
    TabViewItem.prototype._update = function () {
        var tv = this.nativeViewProtected;
        var tabView = this.parent;
        if (tv && tabView) {
            this.tabItemSpec = createTabItemSpec(this);
            tabView.updateAndroidItemAt(this.index, this.tabItemSpec);
        }
    };
    TabViewItem.prototype[tab_view_common_1.fontSizeProperty.getDefault] = function () {
        return { nativeSize: this.nativeViewProtected.getTextSize() };
    };
    TabViewItem.prototype[tab_view_common_1.fontSizeProperty.setNative] = function (value) {
        if (typeof value === "number") {
            this.nativeViewProtected.setTextSize(value);
        }
        else {
            this.nativeViewProtected.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, value.nativeSize);
        }
    };
    TabViewItem.prototype[tab_view_common_1.fontInternalProperty.getDefault] = function () {
        return this.nativeViewProtected.getTypeface();
    };
    TabViewItem.prototype[tab_view_common_1.fontInternalProperty.setNative] = function (value) {
        this.nativeViewProtected.setTypeface(value instanceof font_1.Font ? value.getAndroidTypeface() : value);
    };
    TabViewItem.prototype[text_base_1.textTransformProperty.getDefault] = function () {
        return "default";
    };
    TabViewItem.prototype[text_base_1.textTransformProperty.setNative] = function (value) {
        var tv = this.nativeViewProtected;
        if (value === "default") {
            tv.setTransformationMethod(this._defaultTransformationMethod);
            tv.setText(this.title);
        }
        else {
            var result = text_base_1.getTransformedText(this.title, value);
            tv.setText(result);
            tv.setTransformationMethod(null);
        }
    };
    return TabViewItem;
}(tab_view_common_1.TabViewItemBase));
exports.TabViewItem = TabViewItem;
function setElevation(grid, tabLayout) {
    var compat = android.support.v4.view.ViewCompat;
    if (compat.setElevation) {
        var val = DEFAULT_ELEVATION * tab_view_common_1.layout.getDisplayDensity();
        compat.setElevation(grid, val);
        compat.setElevation(tabLayout, val);
    }
}
var TabView = (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidViewId = -1;
        return _this;
    }
    TabView.prototype.onItemsChanged = function (oldItems, newItems) {
        _super.prototype.onItemsChanged.call(this, oldItems, newItems);
        if (oldItems) {
            oldItems.forEach(function (item, i, arr) {
                item.index = 0;
                item.tabItemSpec = null;
                item.setNativeView(null);
            });
        }
    };
    TabView.prototype.createNativeView = function () {
        initializeNativeClasses();
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView._createUI(" + this + ");", tab_view_common_1.traceCategory);
        }
        var context = this._context;
        var nativeView = new org.nativescript.widgets.GridLayout(context);
        nativeView.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.auto));
        nativeView.addRow(new org.nativescript.widgets.ItemSpec(1, org.nativescript.widgets.GridUnitType.star));
        var tabLayout = new org.nativescript.widgets.TabLayout(context);
        nativeView.addView(tabLayout);
        nativeView.tabLayout = tabLayout;
        setElevation(nativeView, tabLayout);
        var accentColor = getDefaultAccentColor(context);
        if (accentColor) {
            tabLayout.setSelectedIndicatorColors([accentColor]);
        }
        var primaryColor = utils_1.ad.resources.getPaletteColor(PRIMARY_COLOR, context);
        if (primaryColor) {
            tabLayout.setBackgroundColor(primaryColor);
        }
        var viewPager = new android.support.v4.view.ViewPager(context);
        var lp = new org.nativescript.widgets.CommonLayoutParams();
        lp.row = 1;
        viewPager.setLayoutParams(lp);
        nativeView.addView(viewPager);
        nativeView.viewPager = viewPager;
        var listener = new PageChangedListener(this);
        viewPager.addOnPageChangeListener(listener);
        viewPager.listener = listener;
        var adapter = new PagerAdapter(this, null);
        viewPager.setAdapter(adapter);
        viewPager.adapter = adapter;
        return nativeView;
    };
    TabView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        var nativeView = this.nativeViewProtected;
        this._tabLayout = nativeView.tabLayout;
        var viewPager = nativeView.viewPager;
        viewPager.setId(this._androidViewId);
        this._viewPager = viewPager;
        viewPager.listener.owner = this;
        this._pagerAdapter = viewPager.adapter;
        this._pagerAdapter.owner = this;
    };
    TabView.prototype.disposeNativeView = function () {
        this._pagerAdapter.notifyDataSetChanged();
        this._pagerAdapter.owner = null;
        this._pagerAdapter = null;
        this._tabLayout = null;
        this._viewPager.listener.owner = null;
        this._viewPager = null;
        _super.prototype.disposeNativeView.call(this);
    };
    TabView.prototype.setAdapterItems = function (items) {
        this._pagerAdapter.items = items;
        var length = items ? items.length : 0;
        if (length === 0) {
            this._tabLayout.setItems(null, null);
            this._pagerAdapter.notifyDataSetChanged();
            return;
        }
        var tabItems = new Array();
        items.forEach(function (item, i, arr) {
            var tabItemSpec = createTabItemSpec(item);
            item.index = i;
            item.tabItemSpec = tabItemSpec;
            tabItems.push(tabItemSpec);
        });
        var tabLayout = this._tabLayout;
        tabLayout.setItems(tabItems, this._viewPager);
        items.forEach(function (item, i, arr) {
            var tv = tabLayout.getTextViewForItemAt(i);
            item.setNativeView(tv);
        });
        this._pagerAdapter.notifyDataSetChanged();
    };
    TabView.prototype.updateAndroidItemAt = function (index, spec) {
        this._tabLayout.updateItemAt(index, spec);
    };
    TabView.prototype[tab_view_common_1.androidOffscreenTabLimitProperty.getDefault] = function () {
        return this._viewPager.getOffscreenPageLimit();
    };
    TabView.prototype[tab_view_common_1.androidOffscreenTabLimitProperty.setNative] = function (value) {
        this._viewPager.setOffscreenPageLimit(value);
    };
    TabView.prototype[tab_view_common_1.selectedIndexProperty.getDefault] = function () {
        return -1;
    };
    TabView.prototype[tab_view_common_1.selectedIndexProperty.setNative] = function (value) {
        if (tab_view_common_1.traceEnabled()) {
            tab_view_common_1.traceWrite("TabView this._viewPager.setCurrentItem(" + value + ", true);", tab_view_common_1.traceCategory);
        }
        this._viewPager.setCurrentItem(value, true);
    };
    TabView.prototype[tab_view_common_1.itemsProperty.getDefault] = function () {
        return null;
    };
    TabView.prototype[tab_view_common_1.itemsProperty.setNative] = function (value) {
        this.setAdapterItems(value);
        tab_view_common_1.selectedIndexProperty.coerce(this);
    };
    TabView.prototype[tab_view_common_1.tabBackgroundColorProperty.getDefault] = function () {
        return this._tabLayout.getBackground();
    };
    TabView.prototype[tab_view_common_1.tabBackgroundColorProperty.setNative] = function (value) {
        if (value instanceof tab_view_common_1.Color) {
            this._tabLayout.setBackgroundColor(value.android);
        }
        else {
            this._tabLayout.setBackground(tryCloneDrawable(value, this.nativeViewProtected.getResources));
        }
    };
    TabView.prototype[tab_view_common_1.tabTextColorProperty.getDefault] = function () {
        return this._tabLayout.getTabTextColor();
    };
    TabView.prototype[tab_view_common_1.tabTextColorProperty.setNative] = function (value) {
        var color = value instanceof tab_view_common_1.Color ? value.android : value;
        this._tabLayout.setTabTextColor(color);
    };
    TabView.prototype[tab_view_common_1.selectedTabTextColorProperty.getDefault] = function () {
        return this._tabLayout.getSelectedTabTextColor();
    };
    TabView.prototype[tab_view_common_1.selectedTabTextColorProperty.setNative] = function (value) {
        var color = value instanceof tab_view_common_1.Color ? value.android : value;
        this._tabLayout.setSelectedTabTextColor(color);
    };
    TabView.prototype[tab_view_common_1.androidSelectedTabHighlightColorProperty.getDefault] = function () {
        return getDefaultAccentColor(this._context);
    };
    TabView.prototype[tab_view_common_1.androidSelectedTabHighlightColorProperty.setNative] = function (value) {
        var tabLayout = this._tabLayout;
        var color = value instanceof tab_view_common_1.Color ? value.android : value;
        tabLayout.setSelectedIndicatorColors([color]);
    };
    return TabView;
}(tab_view_common_1.TabViewBase));
exports.TabView = TabView;
function tryCloneDrawable(value, resources) {
    if (value) {
        var constantState = value.getConstantState();
        if (constantState) {
            return constantState.newDrawable(resources);
        }
    }
    return value;
}
//# sourceMappingURL=tab-view.android.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("./tab-view-common");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("./text-field-common");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("./time-picker-common");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("./web-view-common");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("./wrap-layout-common");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("../ui/core/view");

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ImageGallery__ = __webpack_require__(108);
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
      msg: "android"
    };
  },
  components: {
    ImageGallery: __WEBPACK_IMPORTED_MODULE_0__components_ImageGallery__["a" /* default */]
  }
});

/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

console.log('entry.native.js')
const Vue = __webpack_require__(52)
const App = __webpack_require__(107).default

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * NativeScript-Vue v1.3.0
 * (Using Vue v2.5.13)
 * (c) 2017-2018 rigor789
 * Released under the MIT license.
 */



function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var layoutBase = __webpack_require__(53);
var contentView = __webpack_require__(11);
var view = __webpack_require__(54);
var platform = __webpack_require__(4);
var application = __webpack_require__(59);
var application__default = _interopDefault(application);
var page = __webpack_require__(14);
var frame = __webpack_require__(65);

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
  function () { return __webpack_require__(69).AbsoluteLayout; }
);
registerElement(
  'ActivityIndicator',
  function () { return __webpack_require__(70).ActivityIndicator; }
);
registerElement('Border', function () { return __webpack_require__(71).Border; });
registerElement('Button', function () { return __webpack_require__(73).Button; });
registerElement(
  'ContentView',
  function () { return __webpack_require__(11).ContentView; }
);
registerElement(
  'DatePicker',
  function () { return __webpack_require__(75).DatePicker; },
  {
    model: {
      prop: 'date',
      event: 'dateChange'
    }
  }
);
registerElement(
  'DockLayout',
  function () { return __webpack_require__(76).DockLayout; }
);
registerElement(
  'GridLayout',
  function () { return __webpack_require__(77).GridLayout; }
);
registerElement(
  'HtmlView',
  function () { return __webpack_require__(78).HtmlView; }
);
registerElement('Image', function () { return __webpack_require__(25).Image; });
registerElement('img', function () { return __webpack_require__(25).Image; });
registerElement('Label', function () { return __webpack_require__(80).Label; });
registerElement(
  'ListPicker',
  function () { return __webpack_require__(81).ListPicker; },
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
  function () { return __webpack_require__(82).ListView; }
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
  function () { return __webpack_require__(7).Placeholder; }
);
registerElement(
  'Progress',
  function () { return __webpack_require__(84).Progress; }
);
registerElement(
  'ProxyViewContainer',
  function () { return __webpack_require__(8).ProxyViewContainer; }
);
registerElement(
  'Repeater',
  function () { return __webpack_require__(85).Repeater; }
);
registerElement(
  'ScrollView',
  function () { return __webpack_require__(90).ScrollView; }
);
registerElement(
  'SearchBar',
  function () { return __webpack_require__(91).SearchBar; },
  {
    model: {
      prop: 'text',
      event: 'textChange'
    }
  }
);
registerElement(
  'SegmentedBar',
  function () { return __webpack_require__(35).SegmentedBar; },
  {
    model: {
      prop: 'selectedIndex',
      event: 'selectedIndexChange'
    }
  }
);
registerElement(
  'SegmentedBarItem',
  function () { return __webpack_require__(35).SegmentedBarItem; }
);
registerElement('Slider', function () { return __webpack_require__(92).Slider; }, {
  model: {
    prop: 'value',
    event: 'valueChange'
  }
});
registerElement(
  'StackLayout',
  function () { return __webpack_require__(93).StackLayout; }
);
registerElement(
  'FlexboxLayout',
  function () { return __webpack_require__(94).FlexboxLayout; }
);
registerElement('Switch', function () { return __webpack_require__(95).Switch; }, {
  model: {
    prop: 'checked',
    event: 'checkedChange'
  }
});

registerElement(
  'NativeTabView',
  function () { return __webpack_require__(41).TabView; },
  {
    model: {
      prop: 'selectedIndex',
      event: 'selectedIndexChange'
    }
  }
);
registerElement(
  'NativeTabViewItem',
  function () { return __webpack_require__(41).TabViewItem; },
  {
    skipAddToDom: true
  }
);

registerElement(
  'TextField',
  function () { return __webpack_require__(96).TextField; }
);
registerElement(
  'TextView',
  function () { return __webpack_require__(97).TextView; }
);
registerElement(
  'TimePicker',
  function () { return __webpack_require__(99).TimePicker; },
  {
    model: {
      prop: 'time',
      event: 'timeChange'
    }
  }
);
registerElement(
  'WebView',
  function () { return __webpack_require__(100).WebView; }
);
registerElement(
  'WrapLayout',
  function () { return __webpack_require__(101).WrapLayout; }
);
registerElement(
  'FormattedString',
  function () { return __webpack_require__(102).FormattedString; }
);
registerElement('Span', function () { return __webpack_require__(106).Span; });

registerElement(
  'DetachedContainer',
  function () { return __webpack_require__(8).ProxyViewContainer; },
  {
    skipAddToDom: true
  }
);
registerElement(
  'DetachedText',
  function () { return __webpack_require__(7).Placeholder; },
  {
    skipAddToDom: true
  }
);
registerElement(
  'Comment',
  function () { return __webpack_require__(7).Placeholder; }
);
registerElement(
  'Document',
  function () { return __webpack_require__(8).ProxyViewContainer; },
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

var ref$2 = __webpack_require__(4);
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

var ref$3 = __webpack_require__(4);
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var layout_base_common_1 = __webpack_require__(10);
__export(__webpack_require__(10));
var LayoutBase = (function (_super) {
    __extends(LayoutBase, _super);
    function LayoutBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutBase.prototype[layout_base_common_1.clipToBoundsProperty.getDefault] = function () {
        return true;
    };
    LayoutBase.prototype[layout_base_common_1.clipToBoundsProperty.setNative] = function (value) {
        console.warn("clipToBounds with value false is not supported on Android. You can use this.android.getParent().setClipChildren(false) as an alternative");
    };
    LayoutBase.prototype[layout_base_common_1.paddingTopProperty.getDefault] = function () {
        return { value: this._defaultPaddingTop, unit: "px" };
    };
    LayoutBase.prototype[layout_base_common_1.paddingTopProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingTop(this.nativeViewProtected, layout_base_common_1.Length.toDevicePixels(value, 0) + layout_base_common_1.Length.toDevicePixels(this.style.borderTopWidth, 0));
    };
    LayoutBase.prototype[layout_base_common_1.paddingRightProperty.getDefault] = function () {
        return { value: this._defaultPaddingRight, unit: "px" };
    };
    LayoutBase.prototype[layout_base_common_1.paddingRightProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingRight(this.nativeViewProtected, layout_base_common_1.Length.toDevicePixels(value, 0) + layout_base_common_1.Length.toDevicePixels(this.style.borderRightWidth, 0));
    };
    LayoutBase.prototype[layout_base_common_1.paddingBottomProperty.getDefault] = function () {
        return { value: this._defaultPaddingBottom, unit: "px" };
    };
    LayoutBase.prototype[layout_base_common_1.paddingBottomProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingBottom(this.nativeViewProtected, layout_base_common_1.Length.toDevicePixels(value, 0) + layout_base_common_1.Length.toDevicePixels(this.style.borderBottomWidth, 0));
    };
    LayoutBase.prototype[layout_base_common_1.paddingLeftProperty.getDefault] = function () {
        return { value: this._defaultPaddingLeft, unit: "px" };
    };
    LayoutBase.prototype[layout_base_common_1.paddingLeftProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingLeft(this.nativeViewProtected, layout_base_common_1.Length.toDevicePixels(value, 0) + layout_base_common_1.Length.toDevicePixels(this.style.borderLeftWidth, 0));
    };
    return LayoutBase;
}(layout_base_common_1.LayoutBaseCommon));
exports.LayoutBase = LayoutBase;
//# sourceMappingURL=layout-base.android.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var background_1 = __webpack_require__(55);
var view_common_1 = __webpack_require__(12);
var style_properties_1 = __webpack_require__(56);
var profiling_1 = __webpack_require__(57);
__export(__webpack_require__(12));
var TouchListener;
var disableUserInteractionListener;
function initializeDisabledListener() {
    if (disableUserInteractionListener) {
        return;
    }
    disableUserInteractionListener = new org.nativescript.widgets.DisableUserInteractionListener();
}
function initializeTouchListener() {
    if (TouchListener) {
        return;
    }
    var TouchListenerImpl = (function (_super) {
        __extends(TouchListenerImpl, _super);
        function TouchListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        TouchListenerImpl.prototype.onTouch = function (view, event) {
            var owner = this.owner;
            for (var type in owner._gestureObservers) {
                var list = owner._gestureObservers[type];
                list.forEach(function (element) {
                    element.androidOnTouchEvent(event);
                });
            }
            var nativeView = owner.nativeViewProtected;
            if (!nativeView || !nativeView.onTouchEvent) {
                return false;
            }
            return nativeView.onTouchEvent(event);
        };
        TouchListenerImpl = __decorate([
            Interfaces([android.view.View.OnTouchListener])
        ], TouchListenerImpl);
        return TouchListenerImpl;
    }(java.lang.Object));
    TouchListener = TouchListenerImpl;
}
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    View.prototype.observe = function (type, callback, thisArg) {
        _super.prototype.observe.call(this, type, callback, thisArg);
        if (this.isLoaded && !this.touchListenerIsSet) {
            this.setOnTouchListener();
        }
    };
    View.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this.setOnTouchListener();
    };
    View.prototype.onUnloaded = function () {
        if (this.touchListenerIsSet) {
            this.nativeViewProtected.setOnTouchListener(null);
            this.touchListenerIsSet = false;
            this.nativeViewProtected.setClickable(this._isClickable);
        }
        _super.prototype.onUnloaded.call(this);
    };
    View.prototype.hasGestureObservers = function () {
        return this._gestureObservers && Object.keys(this._gestureObservers).length > 0;
    };
    View.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this._isClickable = this.nativeViewProtected.isClickable();
    };
    View.prototype.setOnTouchListener = function () {
        if (this.nativeViewProtected && this.hasGestureObservers()) {
            this.touchListenerIsSet = true;
            if (this.nativeViewProtected.setClickable) {
                this.nativeViewProtected.setClickable(true);
            }
            initializeTouchListener();
            this.touchListener = this.touchListener || new TouchListener(this);
            this.nativeViewProtected.setOnTouchListener(this.touchListener);
        }
    };
    Object.defineProperty(View.prototype, "isLayoutRequired", {
        get: function () {
            return !this.isLayoutValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isLayoutValid", {
        get: function () {
            if (this.nativeViewProtected) {
                return !this.nativeViewProtected.isLayoutRequested();
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.layoutNativeView = function (left, top, right, bottom) {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.layout(left, top, right, bottom);
        }
    };
    View.prototype.requestLayout = function () {
        _super.prototype.requestLayout.call(this);
        if (this.nativeViewProtected) {
            return this.nativeViewProtected.requestLayout();
        }
    };
    View.prototype.measure = function (widthMeasureSpec, heightMeasureSpec) {
        _super.prototype.measure.call(this, widthMeasureSpec, heightMeasureSpec);
        this.onMeasure(widthMeasureSpec, heightMeasureSpec);
    };
    View.prototype.layout = function (left, top, right, bottom) {
        _super.prototype.layout.call(this, left, top, right, bottom);
        this.onLayout(left, top, right, bottom);
    };
    View.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var view = this.nativeViewProtected;
        if (view) {
            view.measure(widthMeasureSpec, heightMeasureSpec);
            this.setMeasuredDimension(view.getMeasuredWidth(), view.getMeasuredHeight());
        }
    };
    View.prototype.onLayout = function (left, top, right, bottom) {
        var view = this.nativeViewProtected;
        if (view) {
            this.layoutNativeView(left, top, right, bottom);
        }
    };
    View.prototype._getCurrentLayoutBounds = function () {
        if (this.nativeViewProtected && !this.isCollapsed) {
            return {
                left: this.nativeViewProtected.getLeft(),
                top: this.nativeViewProtected.getTop(),
                right: this.nativeViewProtected.getRight(),
                bottom: this.nativeViewProtected.getBottom()
            };
        }
        else {
            return { left: 0, top: 0, right: 0, bottom: 0 };
        }
    };
    View.prototype.getMeasuredWidth = function () {
        if (this.nativeViewProtected) {
            return this.nativeViewProtected.getMeasuredWidth();
        }
        return _super.prototype.getMeasuredWidth.call(this);
    };
    View.prototype.getMeasuredHeight = function () {
        if (this.nativeViewProtected) {
            return this.nativeViewProtected.getMeasuredHeight();
        }
        return _super.prototype.getMeasuredHeight.call(this);
    };
    View.prototype.focus = function () {
        if (this.nativeViewProtected) {
            return this.nativeViewProtected.requestFocus();
        }
        return false;
    };
    View.prototype.getLocationInWindow = function () {
        if (!this.nativeViewProtected || !this.nativeViewProtected.getWindowToken()) {
            return undefined;
        }
        var nativeArray = Array.create("int", 2);
        this.nativeViewProtected.getLocationInWindow(nativeArray);
        return {
            x: view_common_1.layout.toDeviceIndependentPixels(nativeArray[0]),
            y: view_common_1.layout.toDeviceIndependentPixels(nativeArray[1]),
        };
    };
    View.prototype.getLocationOnScreen = function () {
        if (!this.nativeViewProtected || !this.nativeViewProtected.getWindowToken()) {
            return undefined;
        }
        var nativeArray = Array.create("int", 2);
        this.nativeViewProtected.getLocationOnScreen(nativeArray);
        return {
            x: view_common_1.layout.toDeviceIndependentPixels(nativeArray[0]),
            y: view_common_1.layout.toDeviceIndependentPixels(nativeArray[1]),
        };
    };
    View.prototype.getLocationRelativeTo = function (otherView) {
        if (!this.nativeViewProtected || !this.nativeViewProtected.getWindowToken() ||
            !otherView.nativeViewProtected || !otherView.nativeViewProtected.getWindowToken() ||
            this.nativeViewProtected.getWindowToken() !== otherView.nativeViewProtected.getWindowToken()) {
            return undefined;
        }
        var myArray = Array.create("int", 2);
        this.nativeViewProtected.getLocationOnScreen(myArray);
        var otherArray = Array.create("int", 2);
        otherView.nativeViewProtected.getLocationOnScreen(otherArray);
        return {
            x: view_common_1.layout.toDeviceIndependentPixels(myArray[0] - otherArray[0]),
            y: view_common_1.layout.toDeviceIndependentPixels(myArray[1] - otherArray[1]),
        };
    };
    View.resolveSizeAndState = function (size, specSize, specMode, childMeasuredState) {
        var result = size;
        switch (specMode) {
            case view_common_1.layout.UNSPECIFIED:
                result = size;
                break;
            case view_common_1.layout.AT_MOST:
                if (specSize < size) {
                    result = specSize | view_common_1.layout.MEASURED_STATE_TOO_SMALL;
                }
                break;
            case view_common_1.layout.EXACTLY:
                result = specSize;
                break;
        }
        return result | (childMeasuredState & view_common_1.layout.MEASURED_STATE_MASK);
    };
    View.prototype[view_common_1.isEnabledProperty.setNative] = function (value) {
        this.nativeViewProtected.setEnabled(value);
    };
    View.prototype[view_common_1.originXProperty.getDefault] = function () {
        return this.nativeViewProtected.getPivotX();
    };
    View.prototype[view_common_1.originXProperty.setNative] = function (value) {
        org.nativescript.widgets.OriginPoint.setX(this.nativeViewProtected, value);
    };
    View.prototype[view_common_1.originYProperty.getDefault] = function () {
        return this.nativeViewProtected.getPivotY();
    };
    View.prototype[view_common_1.originYProperty.setNative] = function (value) {
        org.nativescript.widgets.OriginPoint.setY(this.nativeViewProtected, value);
    };
    View.prototype[view_common_1.automationTextProperty.getDefault] = function () {
        return this.nativeViewProtected.getContentDescription();
    };
    View.prototype[view_common_1.automationTextProperty.setNative] = function (value) {
        this.nativeViewProtected.setContentDescription(value);
    };
    View.prototype[view_common_1.isUserInteractionEnabledProperty.setNative] = function (value) {
        if (!value) {
            initializeDisabledListener();
            this.nativeViewProtected.setOnTouchListener(disableUserInteractionListener);
        }
        else {
            this.setOnTouchListener();
            if (!this.touchListenerIsSet) {
                this.nativeViewProtected.setOnTouchListener(null);
            }
        }
    };
    View.prototype[style_properties_1.visibilityProperty.getDefault] = function () {
        var nativeVisibility = this.nativeViewProtected.getVisibility();
        switch (nativeVisibility) {
            case android.view.View.VISIBLE:
                return "visible";
            case android.view.View.INVISIBLE:
                return "hidden";
            case android.view.View.GONE:
                return "collapse";
            default:
                throw new Error("Unsupported android.view.View visibility: " + nativeVisibility + ". Currently supported values are android.view.View.VISIBLE, android.view.View.INVISIBLE, android.view.View.GONE.");
        }
    };
    View.prototype[style_properties_1.visibilityProperty.setNative] = function (value) {
        switch (value) {
            case "visible":
                this.nativeViewProtected.setVisibility(android.view.View.VISIBLE);
                break;
            case "hidden":
                this.nativeViewProtected.setVisibility(android.view.View.INVISIBLE);
                break;
            case "collapse":
                this.nativeViewProtected.setVisibility(android.view.View.GONE);
                break;
            default:
                throw new Error("Invalid visibility value: " + value + ". Valid values are: visible, hidden, collapse.");
        }
    };
    View.prototype[style_properties_1.opacityProperty.getDefault] = function () {
        return this.nativeViewProtected.getAlpha();
    };
    View.prototype[style_properties_1.opacityProperty.setNative] = function (value) {
        this.nativeViewProtected.setAlpha(float(value));
    };
    View.prototype[style_properties_1.horizontalAlignmentProperty.getDefault] = function () {
        return org.nativescript.widgets.ViewHelper.getHorizontalAlignment(this.nativeViewProtected);
    };
    View.prototype[style_properties_1.horizontalAlignmentProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var lp = nativeView.getLayoutParams() || new org.nativescript.widgets.CommonLayoutParams();
        if (lp.gravity !== undefined) {
            switch (value) {
                case "left":
                    lp.gravity = android.view.Gravity.LEFT | (lp.gravity & android.view.Gravity.VERTICAL_GRAVITY_MASK);
                    if (lp.weight < 0) {
                        lp.weight = -2;
                    }
                    break;
                case "center":
                    lp.gravity = android.view.Gravity.CENTER_HORIZONTAL | (lp.gravity & android.view.Gravity.VERTICAL_GRAVITY_MASK);
                    if (lp.weight < 0) {
                        lp.weight = -2;
                    }
                    break;
                case "right":
                    lp.gravity = android.view.Gravity.RIGHT | (lp.gravity & android.view.Gravity.VERTICAL_GRAVITY_MASK);
                    if (lp.weight < 0) {
                        lp.weight = -2;
                    }
                    break;
                case "stretch":
                    lp.gravity = android.view.Gravity.FILL_HORIZONTAL | (lp.gravity & android.view.Gravity.VERTICAL_GRAVITY_MASK);
                    if (lp.weight < 0) {
                        lp.weight = -1;
                    }
                    break;
            }
            nativeView.setLayoutParams(lp);
        }
    };
    View.prototype[style_properties_1.verticalAlignmentProperty.getDefault] = function () {
        return org.nativescript.widgets.ViewHelper.getVerticalAlignment(this.nativeViewProtected);
    };
    View.prototype[style_properties_1.verticalAlignmentProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        var lp = nativeView.getLayoutParams() || new org.nativescript.widgets.CommonLayoutParams();
        if (lp.gravity !== undefined) {
            switch (value) {
                case "top":
                    lp.gravity = android.view.Gravity.TOP | (lp.gravity & android.view.Gravity.HORIZONTAL_GRAVITY_MASK);
                    if (lp.height < 0) {
                        lp.height = -2;
                    }
                    break;
                case "middle":
                    lp.gravity = android.view.Gravity.CENTER_VERTICAL | (lp.gravity & android.view.Gravity.HORIZONTAL_GRAVITY_MASK);
                    if (lp.height < 0) {
                        lp.height = -2;
                    }
                    break;
                case "bottom":
                    lp.gravity = android.view.Gravity.BOTTOM | (lp.gravity & android.view.Gravity.HORIZONTAL_GRAVITY_MASK);
                    if (lp.height < 0) {
                        lp.height = -2;
                    }
                    break;
                case "stretch":
                    lp.gravity = android.view.Gravity.FILL_VERTICAL | (lp.gravity & android.view.Gravity.HORIZONTAL_GRAVITY_MASK);
                    if (lp.height < 0) {
                        lp.height = -1;
                    }
                    break;
            }
            nativeView.setLayoutParams(lp);
        }
    };
    View.prototype[style_properties_1.rotateProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setRotate(this.nativeViewProtected, float(value));
    };
    View.prototype[style_properties_1.scaleXProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setScaleX(this.nativeViewProtected, float(value));
    };
    View.prototype[style_properties_1.scaleYProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setScaleY(this.nativeViewProtected, float(value));
    };
    View.prototype[style_properties_1.translateXProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setTranslateX(this.nativeViewProtected, view_common_1.layout.toDevicePixels(value));
    };
    View.prototype[style_properties_1.translateYProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setTranslateY(this.nativeViewProtected, view_common_1.layout.toDevicePixels(value));
    };
    View.prototype[style_properties_1.zIndexProperty.getDefault] = function () {
        return 0;
    };
    View.prototype[style_properties_1.zIndexProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setZIndex(this.nativeViewProtected, value);
    };
    View.prototype[style_properties_1.backgroundInternalProperty.getDefault] = function () {
        var nativeView = this.nativeViewProtected;
        var drawable = nativeView.getBackground();
        if (drawable) {
            var constantState = drawable.getConstantState();
            if (constantState) {
                try {
                    return constantState.newDrawable(nativeView.getResources());
                }
                catch (e) {
                    return drawable;
                }
            }
            else {
                return drawable;
            }
        }
        return null;
    };
    View.prototype[style_properties_1.backgroundInternalProperty.setNative] = function (value) {
        this._redrawNativeBackground(value);
    };
    View.prototype[style_properties_1.minWidthProperty.setNative] = function (value) {
        if (this.parent instanceof CustomLayoutView && this.parent.nativeViewProtected) {
            this.parent._setChildMinWidthNative(this);
        }
        else {
            this._setMinWidthNative(this.minWidth);
        }
    };
    View.prototype[style_properties_1.minHeightProperty.setNative] = function (value) {
        if (this.parent instanceof CustomLayoutView && this.parent.nativeViewProtected) {
            this.parent._setChildMinHeightNative(this);
        }
        else {
            this._setMinHeightNative(this.minHeight);
        }
    };
    View.prototype._redrawNativeBackground = function (value) {
        if (value instanceof background_1.Background) {
            background_1.ad.onBackgroundOrBorderPropertyChanged(this);
        }
        else {
            var nativeView = this.nativeViewProtected;
            org.nativescript.widgets.ViewHelper.setBackground(nativeView, value);
            var style = this.style;
            var paddingTop = view_common_1.paddingTopProperty.isSet(style) ? this.effectivePaddingTop : this._defaultPaddingTop;
            var paddingRight = view_common_1.paddingRightProperty.isSet(style) ? this.effectivePaddingRight : this._defaultPaddingRight;
            var paddingBottom = view_common_1.paddingBottomProperty.isSet(style) ? this.effectivePaddingBottom : this._defaultPaddingBottom;
            var paddingLeft = view_common_1.paddingLeftProperty.isSet(style) ? this.effectivePaddingLeft : this._defaultPaddingLeft;
            if (this._isPaddingRelative) {
                nativeView.setPaddingRelative(paddingLeft, paddingTop, paddingRight, paddingBottom);
            }
            else {
                nativeView.setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
            }
            nativeView.background = undefined;
        }
    };
    __decorate([
        profiling_1.profile
    ], View.prototype, "onLoaded", null);
    __decorate([
        profiling_1.profile
    ], View.prototype, "onUnloaded", null);
    __decorate([
        profiling_1.profile
    ], View.prototype, "requestLayout", null);
    return View;
}(view_common_1.ViewCommon));
exports.View = View;
var CustomLayoutView = (function (_super) {
    __extends(CustomLayoutView, _super);
    function CustomLayoutView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomLayoutView.prototype.createNativeView = function () {
        return new org.nativescript.widgets.ContentLayout(this._context);
    };
    CustomLayoutView.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        if (atIndex === void 0) { atIndex = -1; }
        _super.prototype._addViewToNativeVisualTree.call(this, child);
        if (this.nativeViewProtected && child.nativeViewProtected) {
            if (view_common_1.traceEnabled()) {
                view_common_1.traceWrite(this + ".nativeView.addView(" + child + ".nativeView, " + atIndex + ")", view_common_1.traceCategories.VisualTreeEvents);
            }
            this.nativeViewProtected.addView(child.nativeViewProtected, atIndex);
            if (child instanceof View) {
                this._updateNativeLayoutParams(child);
            }
            return true;
        }
        return false;
    };
    CustomLayoutView.prototype._updateNativeLayoutParams = function (child) {
        this._setChildMinWidthNative(child);
        this._setChildMinHeightNative(child);
    };
    CustomLayoutView.prototype._setChildMinWidthNative = function (child) {
        child._setMinWidthNative(child.minWidth);
    };
    CustomLayoutView.prototype._setChildMinHeightNative = function (child) {
        child._setMinHeightNative(child.minHeight);
    };
    CustomLayoutView.prototype._removeViewFromNativeVisualTree = function (child) {
        _super.prototype._removeViewFromNativeVisualTree.call(this, child);
        var nativeView = this.nativeViewProtected;
        var childView = child.nativeViewProtected;
        if (nativeView && childView) {
            nativeView.removeView(childView);
            if (view_common_1.traceEnabled()) {
                view_common_1.traceWrite(nativeView + ".removeView(" + childView + ")", view_common_1.traceCategories.VisualTreeEvents);
                view_common_1.traceNotifyEvent(child, "childInLayoutRemovedFromNativeVisualTree");
            }
        }
    };
    return CustomLayoutView;
}(View));
exports.CustomLayoutView = CustomLayoutView;
var percentNotSupported = function (view, value) { throw new Error("PercentLength is not supported."); };
function createNativePercentLengthProperty(options) {
    var getter = options.getter, setter = options.setter, _a = options.auto, auto = _a === void 0 ? 0 : _a;
    var setPixels, getPixels, setPercent;
    if (getter) {
        View.prototype[getter] = function () {
            if (options) {
                setPixels = options.setPixels;
                getPixels = options.getPixels;
                setPercent = options.setPercent || percentNotSupported;
                options = null;
            }
            var value = getPixels(this.nativeViewProtected);
            if (value == auto) {
                return "auto";
            }
            else {
                return { value: value, unit: "px" };
            }
        };
    }
    if (setter) {
        View.prototype[setter] = function (length) {
            if (options) {
                setPixels = options.setPixels;
                getPixels = options.getPixels;
                setPercent = options.setPercent || percentNotSupported;
                options = null;
            }
            if (length == "auto") {
                setPixels(this.nativeViewProtected, auto);
            }
            else if (typeof length === "number") {
                setPixels(this.nativeViewProtected, view_common_1.layout.round(view_common_1.layout.toDevicePixels(length)));
            }
            else if (length.unit == "dip") {
                setPixels(this.nativeViewProtected, view_common_1.layout.round(view_common_1.layout.toDevicePixels(length.value)));
            }
            else if (length.unit == "px") {
                setPixels(this.nativeViewProtected, view_common_1.layout.round(length.value));
            }
            else if (length.unit == "%") {
                setPercent(this.nativeViewProtected, length.value);
            }
            else {
                throw new Error("Unsupported PercentLength " + length);
            }
        };
    }
}
createNativePercentLengthProperty({
    setter: style_properties_1.marginTopProperty.setNative,
    get setPixels() { return org.nativescript.widgets.ViewHelper.setMarginTop; },
    get setPercent() { return org.nativescript.widgets.ViewHelper.setMarginTopPercent; }
});
createNativePercentLengthProperty({
    setter: style_properties_1.marginRightProperty.setNative,
    get setPixels() { return org.nativescript.widgets.ViewHelper.setMarginRight; },
    get setPercent() { return org.nativescript.widgets.ViewHelper.setMarginRightPercent; }
});
createNativePercentLengthProperty({
    setter: style_properties_1.marginBottomProperty.setNative,
    get setPixels() { return org.nativescript.widgets.ViewHelper.setMarginBottom; },
    get setPercent() { return org.nativescript.widgets.ViewHelper.setMarginBottomPercent; }
});
createNativePercentLengthProperty({
    setter: style_properties_1.marginLeftProperty.setNative,
    get setPixels() { return org.nativescript.widgets.ViewHelper.setMarginLeft; },
    get setPercent() { return org.nativescript.widgets.ViewHelper.setMarginLeftPercent; }
});
createNativePercentLengthProperty({
    setter: style_properties_1.widthProperty.setNative,
    auto: -1,
    get setPixels() { return org.nativescript.widgets.ViewHelper.setWidth; },
    get setPercent() { return org.nativescript.widgets.ViewHelper.setWidthPercent; }
});
createNativePercentLengthProperty({
    setter: style_properties_1.heightProperty.setNative,
    auto: -1,
    get setPixels() { return org.nativescript.widgets.ViewHelper.setHeight; },
    get setPercent() { return org.nativescript.widgets.ViewHelper.setHeightPercent; }
});
createNativePercentLengthProperty({
    setter: "_setMinWidthNative",
    get setPixels() { return org.nativescript.widgets.ViewHelper.setMinWidth; }
});
createNativePercentLengthProperty({
    setter: "_setMinHeightNative",
    get setPixels() { return org.nativescript.widgets.ViewHelper.setMinHeight; }
});
//# sourceMappingURL=view.android.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("../../styling/background");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("../../styling/style-properties");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("../../../profiling");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("../application");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var application_common_1 = __webpack_require__(13);
var profiling_1 = __webpack_require__(60);
__export(__webpack_require__(13));
var ActivityCreated = "activityCreated";
var ActivityDestroyed = "activityDestroyed";
var ActivityStarted = "activityStarted";
var ActivityPaused = "activityPaused";
var ActivityResumed = "activityResumed";
var ActivityStopped = "activityStopped";
var SaveActivityState = "saveActivityState";
var ActivityResult = "activityResult";
var ActivityBackPressed = "activityBackPressed";
var ActivityRequestPermissions = "activityRequestPermissions";
var AndroidApplication = (function (_super) {
    __extends(AndroidApplication, _super);
    function AndroidApplication() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._registeredReceivers = {};
        _this._pendingReceiverRegistrations = new Array();
        return _this;
    }
    Object.defineProperty(AndroidApplication.prototype, "currentContext", {
        get: function () {
            return this.foregroundActivity;
        },
        enumerable: true,
        configurable: true
    });
    AndroidApplication.prototype.init = function (nativeApp) {
        if (this.nativeApp === nativeApp) {
            return;
        }
        if (this.nativeApp) {
            throw new Error("application.android already initialized.");
        }
        this.nativeApp = nativeApp;
        this.packageName = nativeApp.getPackageName();
        this.context = nativeApp.getApplicationContext();
        var lifecycleCallbacks = initLifecycleCallbacks();
        var componentCallbacks = initComponentCallbacks();
        this.nativeApp.registerActivityLifecycleCallbacks(lifecycleCallbacks);
        this.nativeApp.registerComponentCallbacks(componentCallbacks);
        this._registerPendingReceivers();
    };
    AndroidApplication.prototype._registerPendingReceivers = function () {
        var _this = this;
        this._pendingReceiverRegistrations.forEach(function (func) { return func(_this.context); });
        this._pendingReceiverRegistrations.length = 0;
    };
    AndroidApplication.prototype.registerBroadcastReceiver = function (intentFilter, onReceiveCallback) {
        ensureBroadCastReceiverClass();
        var that = this;
        var registerFunc = function (context) {
            var receiver = new BroadcastReceiverClass(onReceiveCallback);
            context.registerReceiver(receiver, new android.content.IntentFilter(intentFilter));
            that._registeredReceivers[intentFilter] = receiver;
        };
        if (this.context) {
            registerFunc(this.context);
        }
        else {
            this._pendingReceiverRegistrations.push(registerFunc);
        }
    };
    AndroidApplication.prototype.unregisterBroadcastReceiver = function (intentFilter) {
        var receiver = this._registeredReceivers[intentFilter];
        if (receiver) {
            this.context.unregisterReceiver(receiver);
            this._registeredReceivers[intentFilter] = undefined;
            delete this._registeredReceivers[intentFilter];
        }
    };
    AndroidApplication.activityCreatedEvent = ActivityCreated;
    AndroidApplication.activityDestroyedEvent = ActivityDestroyed;
    AndroidApplication.activityStartedEvent = ActivityStarted;
    AndroidApplication.activityPausedEvent = ActivityPaused;
    AndroidApplication.activityResumedEvent = ActivityResumed;
    AndroidApplication.activityStoppedEvent = ActivityStopped;
    AndroidApplication.saveActivityStateEvent = SaveActivityState;
    AndroidApplication.activityResultEvent = ActivityResult;
    AndroidApplication.activityBackPressedEvent = ActivityBackPressed;
    AndroidApplication.activityRequestPermissionsEvent = ActivityRequestPermissions;
    return AndroidApplication;
}(application_common_1.Observable));
exports.AndroidApplication = AndroidApplication;
var androidApp = new AndroidApplication();
exports.android = androidApp;
application_common_1.setApplication(androidApp);
var mainEntry;
var started = false;
function start(entry) {
    if (started) {
        throw new Error("Application is already started.");
    }
    started = true;
    mainEntry = typeof entry === "string" ? { moduleName: entry } : entry;
    if (!androidApp.nativeApp) {
        var nativeApp = getNativeApplication();
        androidApp.init(nativeApp);
    }
}
exports.start = start;
function getMainEntry() {
    return mainEntry;
}
exports.getMainEntry = getMainEntry;
function getNativeApplication() {
    var nativeApp = androidApp.nativeApp;
    if (!nativeApp) {
        if (!nativeApp && com.tns.NativeScriptApplication) {
            nativeApp = com.tns.NativeScriptApplication.getInstance();
        }
        if (!nativeApp) {
            var clazz = java.lang.Class.forName("android.app.ActivityThread");
            if (clazz) {
                var method = clazz.getMethod("currentApplication", null);
                if (method) {
                    nativeApp = method.invoke(null, null);
                }
            }
        }
        if (!nativeApp) {
            throw new Error("Failed to retrieve native Android Application object. If you have a custom android.app.Application type implemented make sure that you've called the '<application-module>.android.init' method.");
        }
    }
    return nativeApp;
}
exports.getNativeApplication = getNativeApplication;
global.__onLiveSync = function () {
    if (androidApp && androidApp.paused) {
        return;
    }
    application_common_1.livesync();
};
function initLifecycleCallbacks() {
    var setThemeOnLaunch = profiling_1.profile("setThemeOnLaunch", function (activity) {
        var activityInfo = activity.getPackageManager().getActivityInfo(activity.getComponentName(), android.content.pm.PackageManager.GET_META_DATA);
        if (activityInfo.metaData) {
            var setThemeOnLaunch_1 = activityInfo.metaData.getInt("SET_THEME_ON_LAUNCH", -1);
            if (setThemeOnLaunch_1 !== -1) {
                activity.setTheme(setThemeOnLaunch_1);
            }
        }
    });
    var notifyActivityCreated = profiling_1.profile("notifyActivityCreated", function (activity, savedInstanceState) {
        androidApp.notify({ eventName: ActivityCreated, object: androidApp, activity: activity, bundle: savedInstanceState });
    });
    var subscribeForGlobalLayout = profiling_1.profile("subscribeForGlobalLayout", function (activity) {
        var rootView = activity.getWindow().getDecorView().getRootView();
        var onGlobalLayoutListener = new android.view.ViewTreeObserver.OnGlobalLayoutListener({
            onGlobalLayout: function () {
                application_common_1.notify({ eventName: application_common_1.displayedEvent, object: androidApp, activity: activity });
                var viewTreeObserver = rootView.getViewTreeObserver();
                viewTreeObserver.removeOnGlobalLayoutListener(onGlobalLayoutListener);
            }
        });
        rootView.getViewTreeObserver().addOnGlobalLayoutListener(onGlobalLayoutListener);
    });
    var lifecycleCallbacks = new android.app.Application.ActivityLifecycleCallbacks({
        onActivityCreated: profiling_1.profile("onActivityCreated", function (activity, savedInstanceState) {
            setThemeOnLaunch(activity);
            if (!androidApp.startActivity) {
                androidApp.startActivity = activity;
            }
            notifyActivityCreated(activity, savedInstanceState);
            if (application_common_1.hasListeners(application_common_1.displayedEvent)) {
                subscribeForGlobalLayout(activity);
            }
        }),
        onActivityDestroyed: profiling_1.profile("onActivityDestroyed", function (activity) {
            if (activity === androidApp.foregroundActivity) {
                androidApp.foregroundActivity = undefined;
            }
            if (activity === androidApp.startActivity) {
                androidApp.startActivity = undefined;
            }
            androidApp.notify({ eventName: ActivityDestroyed, object: androidApp, activity: activity });
            gc();
        }),
        onActivityPaused: profiling_1.profile("onActivityPaused", function (activity) {
            if (activity.isNativeScriptActivity) {
                androidApp.paused = true;
                application_common_1.notify({ eventName: application_common_1.suspendEvent, object: androidApp, android: activity });
            }
            androidApp.notify({ eventName: ActivityPaused, object: androidApp, activity: activity });
        }),
        onActivityResumed: profiling_1.profile("onActivityResumed", function (activity) {
            androidApp.foregroundActivity = activity;
            if (activity.isNativeScriptActivity) {
                application_common_1.notify({ eventName: application_common_1.resumeEvent, object: androidApp, android: activity });
                androidApp.paused = false;
            }
            androidApp.notify({ eventName: ActivityResumed, object: androidApp, activity: activity });
        }),
        onActivitySaveInstanceState: profiling_1.profile("onActivityResumed", function (activity, outState) {
            androidApp.notify({ eventName: SaveActivityState, object: androidApp, activity: activity, bundle: outState });
        }),
        onActivityStarted: profiling_1.profile("onActivityStarted", function (activity) {
            androidApp.notify({ eventName: ActivityStarted, object: androidApp, activity: activity });
        }),
        onActivityStopped: profiling_1.profile("onActivityStopped", function (activity) {
            androidApp.notify({ eventName: ActivityStopped, object: androidApp, activity: activity });
        })
    });
    return lifecycleCallbacks;
}
var currentOrientation;
function initComponentCallbacks() {
    var componentCallbacks = new android.content.ComponentCallbacks2({
        onLowMemory: profiling_1.profile("onLowMemory", function () {
            gc();
            java.lang.System.gc();
            application_common_1.notify({ eventName: application_common_1.lowMemoryEvent, object: this, android: this });
        }),
        onTrimMemory: profiling_1.profile("onTrimMemory", function (level) {
        }),
        onConfigurationChanged: profiling_1.profile("onConfigurationChanged", function (newConfig) {
            var newOrientation = newConfig.orientation;
            if (newOrientation === currentOrientation) {
                return;
            }
            currentOrientation = newOrientation;
            var newValue;
            switch (newOrientation) {
                case android.content.res.Configuration.ORIENTATION_LANDSCAPE:
                    newValue = "landscape";
                    break;
                case android.content.res.Configuration.ORIENTATION_PORTRAIT:
                    newValue = "portrait";
                    break;
                default:
                    newValue = "unknown";
                    break;
            }
            application_common_1.notify({
                eventName: application_common_1.orientationChangedEvent,
                android: androidApp.nativeApp,
                newValue: newValue,
                object: androidApp
            });
        })
    });
    return componentCallbacks;
}
var BroadcastReceiverClass;
function ensureBroadCastReceiverClass() {
    if (BroadcastReceiverClass) {
        return;
    }
    var BroadcastReceiver = (function (_super) {
        __extends(BroadcastReceiver, _super);
        function BroadcastReceiver(onReceiveCallback) {
            var _this = _super.call(this) || this;
            _this._onReceiveCallback = onReceiveCallback;
            return global.__native(_this);
        }
        BroadcastReceiver.prototype.onReceive = function (context, intent) {
            if (this._onReceiveCallback) {
                this._onReceiveCallback(context, intent);
            }
        };
        return BroadcastReceiver;
    }(android.content.BroadcastReceiver));
    BroadcastReceiverClass = BroadcastReceiver;
}
//# sourceMappingURL=application.android.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("../profiling");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("../action-bar");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("../layouts/grid-layout");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("./constants");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("../../platform");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var application = __webpack_require__(16);
var frame_common_1 = __webpack_require__(17);
var fragment_transitions_1 = __webpack_require__(66);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(17));
var INTENT_EXTRA = "com.tns.activity";
var FRAMEID = "_frameId";
var CALLBACKS = "_callbacks";
var navDepth = -1;
var fragmentId = -1;
if (global && global.__inspector) {
    var devtools = __webpack_require__(67);
    devtools.attachDOMInspectorEventCallbacks(global.__inspector);
    devtools.attachDOMInspectorCommandCallbacks(global.__inspector);
}
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        var _this = _super.call(this) || this;
        _this._containerViewId = -1;
        _this._tearDownPending = false;
        _this._isBack = true;
        _this._android = new AndroidFrame(_this);
        return _this;
    }
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
    Object.defineProperty(Frame.prototype, "containerViewId", {
        get: function () {
            return this._containerViewId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype._getFragmentManager = function () {
        var activity = this._android.activity;
        return activity && activity.getFragmentManager();
    };
    Frame.prototype._processNextNavigationEntry = function () {
        if (!this.isLoaded) {
            return;
        }
        var animatedEntries = fragment_transitions_1._getAnimatedEntries(this._android.frameId);
        if (animatedEntries) {
            if (animatedEntries.size > 0) {
                return;
            }
        }
        var manager = this._getFragmentManager();
        var entry = this._currentEntry;
        if (entry && manager && !manager.findFragmentByTag(entry.fragmentTag)) {
            this._currentEntry = null;
            this._navigateCore(entry);
            this._currentEntry = entry;
        }
        else {
            _super.prototype._processNextNavigationEntry.call(this);
        }
    };
    Frame.prototype.createFragment = function (backstackEntry, fragmentTag) {
        ensureFragmentClass();
        var newFragment = new fragmentClass();
        var args = new android.os.Bundle();
        args.putInt(FRAMEID, this._android.frameId);
        newFragment.setArguments(args);
        setFragmentCallbacks(newFragment);
        var callbacks = newFragment[CALLBACKS];
        callbacks.frame = this;
        callbacks.entry = backstackEntry;
        backstackEntry.fragment = newFragment;
        backstackEntry.fragmentTag = fragmentTag;
        backstackEntry.navDepth = navDepth;
        return newFragment;
    };
    Frame.prototype.setCurrent = function (entry, isBack) {
        var current = this._currentEntry;
        var currentEntryChanged = current !== entry;
        if (currentEntryChanged) {
            this._updateBackstack(entry, isBack);
        }
        if (currentEntryChanged) {
            if (this._tearDownPending) {
                this._tearDownPending = false;
                if (!entry.recreated) {
                    clearEntry(entry);
                }
                if (current && !current.recreated) {
                    clearEntry(current);
                }
                var context_1 = this._context;
                if (context_1 && !entry.recreated) {
                    entry.fragment = this.createFragment(entry, entry.fragmentTag);
                    entry.resolvedPage._setupUI(context_1);
                }
                entry.recreated = false;
                current.recreated = false;
            }
            _super.prototype.setCurrent.call(this, entry, isBack);
            this._processNavigationQueue(entry.resolvedPage);
        }
        else {
            this._processNextNavigationEntry();
        }
    };
    Frame.prototype._onBackPressed = function () {
        if (this.canGoBack()) {
            this.goBack();
            return true;
        }
        else if (!this.navigationQueueIsEmpty()) {
            var manager = this._getFragmentManager();
            if (manager) {
                manager.executePendingTransactions();
                return true;
            }
        }
        return false;
    };
    Frame.prototype._navigateCore = function (newEntry) {
        _super.prototype._navigateCore.call(this, newEntry);
        this._isBack = false;
        newEntry.frameId = this._android.frameId;
        var activity = this._android.activity;
        if (!activity) {
            var currentActivity = this._android.currentActivity;
            if (currentActivity) {
                startActivity(currentActivity, this._android.frameId);
            }
            this._delayedNavigationEntry = newEntry;
            return;
        }
        var manager = this._getFragmentManager();
        var clearHistory = newEntry.entry.clearHistory;
        var currentEntry = this._currentEntry;
        if (clearHistory) {
            navDepth = -1;
        }
        navDepth++;
        fragmentId++;
        var newFragmentTag = "fragment" + fragmentId + "[" + navDepth + "]";
        var newFragment = this.createFragment(newEntry, newFragmentTag);
        var transaction = manager.beginTransaction();
        var animated = this._getIsAnimatedNavigation(newEntry.entry);
        var navigationTransition = this._currentEntry ? this._getNavigationTransition(newEntry.entry) : null;
        fragment_transitions_1._setAndroidFragmentTransitions(animated, navigationTransition, currentEntry, newEntry, transaction, manager, this._android.frameId);
        if (currentEntry && animated && !navigationTransition) {
            transaction.setTransition(android.app.FragmentTransaction.TRANSIT_FRAGMENT_OPEN);
        }
        transaction.replace(this.containerViewId, newFragment, newFragmentTag);
        transaction.commit();
    };
    Frame.prototype._goBackCore = function (backstackEntry) {
        this._isBack = true;
        _super.prototype._goBackCore.call(this, backstackEntry);
        navDepth = backstackEntry.navDepth;
        var manager = this._getFragmentManager();
        var transaction = manager.beginTransaction();
        if (!backstackEntry.fragment) {
            backstackEntry.fragment = this.createFragment(backstackEntry, backstackEntry.fragmentTag);
            fragment_transitions_1._updateTransitions(backstackEntry);
        }
        var transitionReversed = fragment_transitions_1._reverseTransitions(backstackEntry, this._currentEntry);
        if (!transitionReversed) {
            transaction.setCustomAnimations(-30, -40, -10, -20);
        }
        transaction.replace(this.containerViewId, backstackEntry.fragment, backstackEntry.fragmentTag);
        transaction.commit();
    };
    Frame.prototype._removeEntry = function (removed) {
        _super.prototype._removeEntry.call(this, removed);
        if (removed.fragment) {
            fragment_transitions_1._clearEntry(removed);
        }
        removed.fragment = null;
        removed.viewSavedState = null;
    };
    Frame.prototype.createNativeView = function () {
        return new org.nativescript.widgets.ContentLayout(this._context);
    };
    Frame.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this._android.rootViewGroup = this.nativeViewProtected;
        if (this._containerViewId < 0) {
            this._containerViewId = android.view.View.generateViewId();
        }
        this._android.rootViewGroup.setId(this._containerViewId);
    };
    Frame.prototype.disposeNativeView = function () {
        var _this = this;
        this._tearDownPending = !!this._executingEntry;
        var current = this._currentEntry;
        this.backStack.forEach(function (entry) {
            if (entry !== _this._executingEntry) {
                clearEntry(entry);
            }
        });
        if (current && !this._executingEntry) {
            clearEntry(current);
        }
        this._android.rootViewGroup = null;
        _super.prototype.disposeNativeView.call(this);
    };
    Frame.prototype._popFromFrameStack = function () {
        if (!this._isInFrameStack) {
            return;
        }
        _super.prototype._popFromFrameStack.call(this);
        if (this._android.hasOwnActivity) {
            this._android.activity.finish();
        }
    };
    Frame.prototype._getNavBarVisible = function (page) {
        if (page.actionBarHidden !== undefined) {
            return !page.actionBarHidden;
        }
        if (this._android && this._android.showActionBar !== undefined) {
            return this._android.showActionBar;
        }
        return true;
    };
    Frame.prototype._saveFragmentsState = function () {
        this.backStack.forEach(function (entry) {
            var view = entry.resolvedPage.nativeViewProtected;
            if (!entry.viewSavedState && view) {
                var viewState = new android.util.SparseArray();
                view.saveHierarchyState(viewState);
                entry.viewSavedState = viewState;
            }
        });
    };
    __decorate([
        profiling_1.profile
    ], Frame.prototype, "_navigateCore", null);
    return Frame;
}(frame_common_1.FrameBase));
exports.Frame = Frame;
function clearEntry(entry) {
    if (entry.fragment) {
        fragment_transitions_1._clearFragment(entry);
    }
    entry.recreated = false;
    entry.fragment = null;
    var page = entry.resolvedPage;
    if (page._context) {
        entry.resolvedPage._tearDownUI(true);
    }
}
var framesCounter = 0;
var framesCache = new Array();
var AndroidFrame = (function (_super) {
    __extends(AndroidFrame, _super);
    function AndroidFrame(owner) {
        var _this = _super.call(this) || this;
        _this.hasOwnActivity = false;
        _this._showActionBar = true;
        _this.cachePagesOnNavigate = true;
        _this._owner = owner;
        _this.frameId = framesCounter++;
        framesCache.push(new WeakRef(_this));
        return _this;
    }
    Object.defineProperty(AndroidFrame.prototype, "showActionBar", {
        get: function () {
            return this._showActionBar;
        },
        set: function (value) {
            if (this._showActionBar !== value) {
                this._showActionBar = value;
                if (this.owner.currentPage) {
                    this.owner.currentPage.actionBar.update();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "activity", {
        get: function () {
            var activity = this.owner._context;
            if (activity) {
                return activity;
            }
            var currView = this._owner.parent;
            while (currView) {
                if (currView instanceof Frame) {
                    return currView.android.activity;
                }
                currView = currView.parent;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "actionBar", {
        get: function () {
            var activity = this.currentActivity;
            if (!activity) {
                return undefined;
            }
            var bar = activity.getActionBar();
            if (!bar) {
                return undefined;
            }
            return bar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "currentActivity", {
        get: function () {
            var activity = this.activity;
            if (activity) {
                return activity;
            }
            var frames = frame_common_1.stack();
            for (var length_1 = frames.length, i = length_1 - 1; i >= 0; i--) {
                activity = frames[i].android.activity;
                if (activity) {
                    return activity;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AndroidFrame.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: true,
        configurable: true
    });
    AndroidFrame.prototype.canGoBack = function () {
        if (!this.activity) {
            return false;
        }
        return this.activity.getIntent().getAction() !== android.content.Intent.ACTION_MAIN;
    };
    AndroidFrame.prototype.fragmentForPage = function (entry) {
        var tag = entry && entry.fragmentTag;
        if (tag) {
            return this.owner._getFragmentManager().findFragmentByTag(tag);
        }
        return undefined;
    };
    return AndroidFrame;
}(frame_common_1.Observable));
function findPageForFragment(fragment, frame) {
    var fragmentTag = fragment.getTag();
    if (frame_common_1.traceEnabled()) {
        frame_common_1.traceWrite("Finding page for " + fragmentTag + ".", frame_common_1.traceCategories.NativeLifecycle);
    }
    var entry;
    var current = frame._currentEntry;
    var navigating = frame._executingEntry;
    if (current && current.fragmentTag === fragmentTag) {
        entry = current;
    }
    else if (navigating && navigating.fragmentTag === fragmentTag) {
        entry = navigating;
    }
    var page;
    if (entry) {
        entry.recreated = true;
        page = entry.resolvedPage;
    }
    if (page) {
        var callbacks = fragment[CALLBACKS];
        callbacks.frame = frame;
        callbacks.entry = entry;
        entry.fragment = fragment;
        fragment_transitions_1._updateTransitions(entry);
    }
    else {
        throw new Error("Could not find a page for " + fragmentTag + ".");
    }
}
function startActivity(activity, frameId) {
    var intent = new android.content.Intent(activity, activity.getClass());
    intent.setAction(android.content.Intent.ACTION_DEFAULT);
    intent.putExtra(INTENT_EXTRA, frameId);
    activity.startActivity(intent);
}
function getFrameById(frameId) {
    for (var i = 0; i < framesCache.length; i++) {
        var aliveFrame = framesCache[i].get();
        if (aliveFrame && aliveFrame.frameId === frameId) {
            return aliveFrame.owner;
        }
    }
    return null;
}
function ensureFragmentClass() {
    if (fragmentClass) {
        return;
    }
    __webpack_require__(68);
    if (!fragmentClass) {
        throw new Error("Failed to initialize the extended android.app.Fragment class");
    }
}
var fragmentClass;
function setFragmentClass(clazz) {
    if (fragmentClass) {
        throw new Error("Fragment class already initialized");
    }
    fragmentClass = clazz;
}
exports.setFragmentClass = setFragmentClass;
var FragmentCallbacksImplementation = (function () {
    function FragmentCallbacksImplementation() {
    }
    FragmentCallbacksImplementation.prototype.onHiddenChanged = function (fragment, hidden, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onHiddenChanged(" + hidden + ")", frame_common_1.traceCategories.NativeLifecycle);
        }
        superFunc.call(fragment, hidden);
    };
    FragmentCallbacksImplementation.prototype.onCreateAnimator = function (fragment, transit, enter, nextAnim, superFunc) {
        var nextAnimString;
        switch (nextAnim) {
            case -10:
                nextAnimString = "enter";
                break;
            case -20:
                nextAnimString = "exit";
                break;
            case -30:
                nextAnimString = "popEnter";
                break;
            case -40:
                nextAnimString = "popExit";
                break;
        }
        var animator = fragment_transitions_1._onFragmentCreateAnimator(this.entry, fragment, nextAnim, enter);
        if (!animator) {
            animator = superFunc.call(fragment, transit, enter, nextAnim);
        }
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onCreateAnimator(" + transit + ", " + (enter ? "enter" : "exit") + ", " + nextAnimString + "): " + (animator ? 'animator' : 'no animator'), frame_common_1.traceCategories.NativeLifecycle);
        }
        return animator;
    };
    FragmentCallbacksImplementation.prototype.onCreate = function (fragment, savedInstanceState, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onCreate(" + savedInstanceState + ")", frame_common_1.traceCategories.NativeLifecycle);
        }
        superFunc.call(fragment, savedInstanceState);
        if (!this.entry) {
            var args = fragment.getArguments();
            var frameId = args.getInt(FRAMEID);
            var frame = getFrameById(frameId);
            if (!frame) {
                throw new Error("Cannot find Frame for " + fragment);
            }
            findPageForFragment(fragment, frame);
        }
    };
    FragmentCallbacksImplementation.prototype.onCreateView = function (fragment, inflater, container, savedInstanceState, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onCreateView(inflater, container, " + savedInstanceState + ")", frame_common_1.traceCategories.NativeLifecycle);
        }
        var entry = this.entry;
        var page = entry.resolvedPage;
        var frame = this.frame;
        if (page.parent === frame) {
            if (!page._context) {
                var context_2 = container && container.getContext() || inflater && inflater.getContext();
                page._setupUI(context_2);
            }
        }
        else {
            this.frame._addView(page);
        }
        if (!page.isLoaded) {
            page.onLoaded();
        }
        var savedState = entry.viewSavedState;
        if (savedState) {
            page.nativeViewProtected.restoreHierarchyState(savedState);
            entry.viewSavedState = null;
        }
        return page.nativeViewProtected;
    };
    FragmentCallbacksImplementation.prototype.onSaveInstanceState = function (fragment, outState, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onSaveInstanceState(" + outState + ")", frame_common_1.traceCategories.NativeLifecycle);
        }
        superFunc.call(fragment, outState);
    };
    FragmentCallbacksImplementation.prototype.onDestroyView = function (fragment, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onDestroyView()", frame_common_1.traceCategories.NativeLifecycle);
        }
        superFunc.call(fragment);
    };
    FragmentCallbacksImplementation.prototype.onDestroy = function (fragment, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite(fragment + ".onDestroy()", frame_common_1.traceCategories.NativeLifecycle);
        }
        superFunc.call(fragment);
    };
    FragmentCallbacksImplementation.prototype.onStop = function (fragment, superFunc) {
        superFunc.call(fragment);
        this.entry.resolvedPage.onUnloaded();
    };
    FragmentCallbacksImplementation.prototype.toStringOverride = function (fragment, superFunc) {
        var entry = this.entry;
        if (entry) {
            return entry.fragmentTag + "<" + entry.resolvedPage + ">";
        }
        else {
            return "NO ENTRY, " + superFunc.call(fragment);
        }
    };
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onHiddenChanged", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onCreateAnimator", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onCreate", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onCreateView", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onSaveInstanceState", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onDestroyView", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onDestroy", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "onStop", null);
    __decorate([
        profiling_1.profile
    ], FragmentCallbacksImplementation.prototype, "toStringOverride", null);
    return FragmentCallbacksImplementation;
}());
var ActivityCallbacksImplementation = (function () {
    function ActivityCallbacksImplementation() {
    }
    ActivityCallbacksImplementation.prototype.onCreate = function (activity, savedInstanceState, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("Activity.onCreate(" + savedInstanceState + ")", frame_common_1.traceCategories.NativeLifecycle);
        }
        var app = application.android;
        var intent = activity.getIntent();
        var rootView = this.notifyLaunch(intent, savedInstanceState);
        var frameId = -1;
        var extras = intent.getExtras();
        if (extras) {
            frameId = extras.getInt(INTENT_EXTRA, -1);
        }
        if (savedInstanceState && frameId < 0) {
            frameId = savedInstanceState.getInt(INTENT_EXTRA, -1);
        }
        var frame;
        var navParam;
        if (frameId >= 0) {
            rootView = getFrameById(frameId);
        }
        if (!rootView) {
            navParam = application.getMainEntry();
            if (navParam) {
                frame = new Frame();
            }
            else {
                throw new Error("A Frame must be used to navigate to a Page.");
            }
            rootView = frame;
        }
        var isRestart = !!savedInstanceState && exports.moduleLoaded;
        superFunc.call(activity, isRestart ? savedInstanceState : null);
        this._rootView = rootView;
        rootView._setupAsRootView(activity);
        activity.setContentView(rootView.nativeViewProtected, new org.nativescript.widgets.CommonLayoutParams());
        if (frame) {
            frame.navigate(navParam);
        }
        exports.moduleLoaded = true;
    };
    ActivityCallbacksImplementation.prototype.notifyLaunch = function (intent, savedInstanceState) {
        var launchArgs = { eventName: application.launchEvent, object: application.android, android: intent, savedInstanceState: savedInstanceState };
        application.notify(launchArgs);
        application.notify({ eventName: "loadAppCss", object: this, cssFile: application.getCssFileName() });
        return launchArgs.root;
    };
    ActivityCallbacksImplementation.prototype.onSaveInstanceState = function (activity, outState, superFunc) {
        superFunc.call(activity, outState);
        var frame = this._rootView;
        if (frame instanceof Frame) {
            outState.putInt(INTENT_EXTRA, frame.android.frameId);
            frame._saveFragmentsState();
        }
    };
    ActivityCallbacksImplementation.prototype.onStart = function (activity, superFunc) {
        superFunc.call(activity);
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("NativeScriptActivity.onStart();", frame_common_1.traceCategories.NativeLifecycle);
        }
        var rootView = this._rootView;
        if (rootView && !rootView.isLoaded) {
            rootView.onLoaded();
        }
    };
    ActivityCallbacksImplementation.prototype.onStop = function (activity, superFunc) {
        superFunc.call(activity);
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("NativeScriptActivity.onStop();", frame_common_1.traceCategories.NativeLifecycle);
        }
        var rootView = this._rootView;
        if (rootView && rootView.isLoaded) {
            rootView.onUnloaded();
        }
    };
    ActivityCallbacksImplementation.prototype.onDestroy = function (activity, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("NativeScriptActivity.onDestroy();", frame_common_1.traceCategories.NativeLifecycle);
        }
        var rootView = this._rootView;
        if (rootView) {
            rootView._tearDownUI(true);
        }
        var exitArgs = { eventName: application.exitEvent, object: application.android, android: activity };
        application.notify(exitArgs);
        superFunc.call(activity);
    };
    ActivityCallbacksImplementation.prototype.onBackPressed = function (activity, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("NativeScriptActivity.onBackPressed;", frame_common_1.traceCategories.NativeLifecycle);
        }
        var args = {
            eventName: "activityBackPressed",
            object: application.android,
            activity: activity,
            cancel: false,
        };
        application.android.notify(args);
        if (args.cancel) {
            return;
        }
        var view = this._rootView;
        var callSuper = false;
        if (view instanceof Frame) {
            callSuper = !view._onBackPressed();
        }
        else {
            var viewArgs = {
                eventName: "activityBackPressed",
                object: view,
                activity: activity,
                cancel: false,
            };
            view.notify(viewArgs);
            if (!viewArgs.cancel) {
                callSuper = true;
            }
        }
        if (callSuper) {
            superFunc.call(activity);
        }
    };
    ActivityCallbacksImplementation.prototype.onRequestPermissionsResult = function (activity, requestCode, permissions, grantResults, superFunc) {
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("NativeScriptActivity.onRequestPermissionsResult;", frame_common_1.traceCategories.NativeLifecycle);
        }
        application.android.notify({
            eventName: "activityRequestPermissions",
            object: application.android,
            activity: activity,
            requestCode: requestCode,
            permissions: permissions,
            grantResults: grantResults
        });
    };
    ActivityCallbacksImplementation.prototype.onActivityResult = function (activity, requestCode, resultCode, data, superFunc) {
        superFunc.call(activity, requestCode, resultCode, data);
        if (frame_common_1.traceEnabled()) {
            frame_common_1.traceWrite("NativeScriptActivity.onActivityResult(" + requestCode + ", " + resultCode + ", " + data + ")", frame_common_1.traceCategories.NativeLifecycle);
        }
        application.android.notify({
            eventName: "activityResult",
            object: application.android,
            activity: activity,
            requestCode: requestCode,
            resultCode: resultCode,
            intent: data
        });
    };
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onCreate", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "notifyLaunch", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onSaveInstanceState", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onStart", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onStop", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onDestroy", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onBackPressed", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onRequestPermissionsResult", null);
    __decorate([
        profiling_1.profile
    ], ActivityCallbacksImplementation.prototype, "onActivityResult", null);
    return ActivityCallbacksImplementation;
}());
function setActivityCallbacks(activity) {
    activity[CALLBACKS] = new ActivityCallbacksImplementation();
}
exports.setActivityCallbacks = setActivityCallbacks;
function setFragmentCallbacks(fragment) {
    fragment[CALLBACKS] = new FragmentCallbacksImplementation();
}
exports.setFragmentCallbacks = setFragmentCallbacks;
//# sourceMappingURL=frame.android.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("./fragment.transitions");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/debugger/devtools-elements");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("ui/frame/fragment");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var absolute_layout_common_1 = __webpack_require__(18);
__export(__webpack_require__(18));
function makeNativeSetter(setter) {
    return function (value) {
        var nativeView = this.nativeViewProtected;
        var lp = nativeView.getLayoutParams() || new org.nativescript.widgets.CommonLayoutParams();
        if (lp instanceof org.nativescript.widgets.CommonLayoutParams) {
            setter.call(this, lp, value);
            nativeView.setLayoutParams(lp);
        }
    };
}
absolute_layout_common_1.View.prototype[absolute_layout_common_1.topProperty.setNative] = makeNativeSetter(function (lp, value) { lp.top = absolute_layout_common_1.Length.toDevicePixels(value, 0); });
absolute_layout_common_1.View.prototype[absolute_layout_common_1.leftProperty.setNative] = makeNativeSetter(function (lp, value) { lp.left = absolute_layout_common_1.Length.toDevicePixels(value, 0); });
var AbsoluteLayout = (function (_super) {
    __extends(AbsoluteLayout, _super);
    function AbsoluteLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbsoluteLayout.prototype.createNativeView = function () {
        return new org.nativescript.widgets.AbsoluteLayout(this._context);
    };
    return AbsoluteLayout;
}(absolute_layout_common_1.AbsoluteLayoutBase));
exports.AbsoluteLayout = AbsoluteLayout;
//# sourceMappingURL=absolute-layout.android.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var activity_indicator_common_1 = __webpack_require__(19);
__export(__webpack_require__(19));
var ActivityIndicator = (function (_super) {
    __extends(ActivityIndicator, _super);
    function ActivityIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityIndicator.prototype.createNativeView = function () {
        var progressBar = new android.widget.ProgressBar(this._context);
        progressBar.setVisibility(android.view.View.INVISIBLE);
        progressBar.setIndeterminate(true);
        return progressBar;
    };
    ActivityIndicator.prototype[activity_indicator_common_1.busyProperty.getDefault] = function () {
        return false;
    };
    ActivityIndicator.prototype[activity_indicator_common_1.busyProperty.setNative] = function (value) {
        if (this.visibility === activity_indicator_common_1.Visibility.VISIBLE) {
            this.nativeViewProtected.setVisibility(value ? android.view.View.VISIBLE : android.view.View.INVISIBLE);
        }
    };
    ActivityIndicator.prototype[activity_indicator_common_1.visibilityProperty.getDefault] = function () {
        return activity_indicator_common_1.Visibility.HIDDEN;
    };
    ActivityIndicator.prototype[activity_indicator_common_1.visibilityProperty.setNative] = function (value) {
        switch (value) {
            case activity_indicator_common_1.Visibility.VISIBLE:
                this.nativeViewProtected.setVisibility(this.busy ? android.view.View.VISIBLE : android.view.View.INVISIBLE);
                break;
            case activity_indicator_common_1.Visibility.HIDDEN:
                this.nativeViewProtected.setVisibility(android.view.View.INVISIBLE);
                break;
            case activity_indicator_common_1.Visibility.COLLAPSE:
                this.nativeViewProtected.setVisibility(android.view.View.GONE);
                break;
            default:
                throw new Error("Invalid visibility value: " + value + ". Valid values are: \"" + activity_indicator_common_1.Visibility.VISIBLE + "\", \"" + activity_indicator_common_1.Visibility.HIDDEN + "\", \"" + activity_indicator_common_1.Visibility.COLLAPSE + "\".");
        }
    };
    ActivityIndicator.prototype[activity_indicator_common_1.colorProperty.getDefault] = function () {
        return -1;
    };
    ActivityIndicator.prototype[activity_indicator_common_1.colorProperty.setNative] = function (value) {
        if (value instanceof activity_indicator_common_1.Color) {
            this.nativeViewProtected.getIndeterminateDrawable().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        }
        else {
            this.nativeViewProtected.getIndeterminateDrawable().clearColorFilter();
        }
    };
    return ActivityIndicator;
}(activity_indicator_common_1.ActivityIndicatorBase));
exports.ActivityIndicator = ActivityIndicator;
//# sourceMappingURL=activity-indicator.android.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = __webpack_require__(72);
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
/* 72 */
/***/ (function(module, exports) {

module.exports = require("../content-view");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var button_common_1 = __webpack_require__(20);
var profiling_1 = __webpack_require__(0);
var gestures_1 = __webpack_require__(74);
__export(__webpack_require__(20));
var ClickListener;
var APILEVEL;
var AndroidButton;
function initializeClickListener() {
    if (ClickListener) {
        return;
    }
    var ClickListenerImpl = (function (_super) {
        __extends(ClickListenerImpl, _super);
        function ClickListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ClickListenerImpl.prototype.onClick = function (v) {
            var owner = this.owner;
            if (owner) {
                owner._emit(button_common_1.ButtonBase.tapEvent);
            }
        };
        ClickListenerImpl = __decorate([
            Interfaces([android.view.View.OnClickListener])
        ], ClickListenerImpl);
        return ClickListenerImpl;
    }(java.lang.Object));
    ClickListener = ClickListenerImpl;
    APILEVEL = android.os.Build.VERSION.SDK_INT;
    AndroidButton = android.widget.Button;
}
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.createNativeView = function () {
        initializeClickListener();
        var button = new AndroidButton(this._context);
        var clickListener = new ClickListener(this);
        button.setOnClickListener(clickListener);
        button.clickListener = clickListener;
        return button;
    };
    Button.prototype.initNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.clickListener.owner = this;
        _super.prototype.initNativeView.call(this);
    };
    Button.prototype.disposeNativeView = function () {
        this.nativeViewProtected.clickListener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    Button.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        if (this._stateListAnimator && APILEVEL >= 21) {
            this.nativeViewProtected.setStateListAnimator(this._stateListAnimator);
            this._stateListAnimator = undefined;
        }
    };
    Button.prototype._updateHandler = function (subscribe) {
        var _this = this;
        if (subscribe) {
            this._highlightedHandler = this._highlightedHandler || (function (args) {
                switch (args.action) {
                    case gestures_1.TouchAction.up:
                        _this._goToVisualState("normal");
                        break;
                    case gestures_1.TouchAction.down:
                        _this._goToVisualState("highlighted");
                        break;
                }
            });
            this.on(gestures_1.GestureTypes.touch, this._highlightedHandler);
        }
        else {
            this.off(gestures_1.GestureTypes.touch, this._highlightedHandler);
        }
    };
    Button.prototype[button_common_1.paddingTopProperty.getDefault] = function () {
        return { value: this._defaultPaddingTop, unit: "px" };
    };
    Button.prototype[button_common_1.paddingTopProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingTop(this.nativeViewProtected, button_common_1.Length.toDevicePixels(value, 0) + button_common_1.Length.toDevicePixels(this.style.borderTopWidth, 0));
    };
    Button.prototype[button_common_1.paddingRightProperty.getDefault] = function () {
        return { value: this._defaultPaddingRight, unit: "px" };
    };
    Button.prototype[button_common_1.paddingRightProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingRight(this.nativeViewProtected, button_common_1.Length.toDevicePixels(value, 0) + button_common_1.Length.toDevicePixels(this.style.borderRightWidth, 0));
    };
    Button.prototype[button_common_1.paddingBottomProperty.getDefault] = function () {
        return { value: this._defaultPaddingBottom, unit: "px" };
    };
    Button.prototype[button_common_1.paddingBottomProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingBottom(this.nativeViewProtected, button_common_1.Length.toDevicePixels(value, 0) + button_common_1.Length.toDevicePixels(this.style.borderBottomWidth, 0));
    };
    Button.prototype[button_common_1.paddingLeftProperty.getDefault] = function () {
        return { value: this._defaultPaddingLeft, unit: "px" };
    };
    Button.prototype[button_common_1.paddingLeftProperty.setNative] = function (value) {
        org.nativescript.widgets.ViewHelper.setPaddingLeft(this.nativeViewProtected, button_common_1.Length.toDevicePixels(value, 0) + button_common_1.Length.toDevicePixels(this.style.borderLeftWidth, 0));
    };
    Button.prototype[button_common_1.zIndexProperty.setNative] = function (value) {
        if (APILEVEL >= 21) {
            var nativeView = this.nativeViewProtected;
            if (!this._stateListAnimator) {
                this._stateListAnimator = nativeView.getStateListAnimator();
            }
            nativeView.setStateListAnimator(null);
        }
        org.nativescript.widgets.ViewHelper.setZIndex(this.nativeViewProtected, value);
    };
    Button.prototype[button_common_1.textAlignmentProperty.setNative] = function (value) {
        var newValue = value === "initial" ? "center" : value;
        _super.prototype[button_common_1.textAlignmentProperty.setNative].call(this, newValue);
    };
    __decorate([
        profiling_1.profile
    ], Button.prototype, "createNativeView", null);
    __decorate([
        button_common_1.PseudoClassHandler("normal", "highlighted", "pressed", "active")
    ], Button.prototype, "_updateHandler", null);
    return Button;
}(button_common_1.ButtonBase));
exports.Button = Button;
//# sourceMappingURL=button.android.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("../gestures");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var date_picker_common_1 = __webpack_require__(21);
__export(__webpack_require__(21));
var DateChangedListener;
function initializeDateChangedListener() {
    if (DateChangedListener) {
        return;
    }
    var DateChangedListenerImpl = (function (_super) {
        __extends(DateChangedListenerImpl, _super);
        function DateChangedListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        DateChangedListenerImpl.prototype.onDateChanged = function (picker, year, month, day) {
            var owner = this.owner;
            var dateChanged = false;
            if (year !== owner.year) {
                date_picker_common_1.yearProperty.nativeValueChange(owner, year);
                dateChanged = true;
            }
            if (month !== (owner.month - 1)) {
                date_picker_common_1.monthProperty.nativeValueChange(owner, month + 1);
                dateChanged = true;
            }
            if (day !== owner.day) {
                date_picker_common_1.dayProperty.nativeValueChange(owner, day);
                dateChanged = true;
            }
            if (dateChanged) {
                date_picker_common_1.dateProperty.nativeValueChange(owner, new Date(year, month, day));
            }
        };
        DateChangedListenerImpl = __decorate([
            Interfaces([android.widget.DatePicker.OnDateChangedListener])
        ], DateChangedListenerImpl);
        return DateChangedListenerImpl;
    }(java.lang.Object));
    DateChangedListener = DateChangedListenerImpl;
}
var DatePicker = (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePicker.prototype.createNativeView = function () {
        initializeDateChangedListener();
        var picker = new android.widget.DatePicker(this._context);
        picker.setCalendarViewShown(false);
        var listener = new DateChangedListener(this);
        picker.init(this.year, this.month - 1, this.day, listener);
        picker.listener = listener;
        return picker;
    };
    DatePicker.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this.nativeViewProtected.listener.owner = this;
    };
    DatePicker.prototype.disposeNativeView = function () {
        this.nativeViewProtected.listener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    DatePicker.prototype.updateNativeDate = function () {
        var nativeView = this.nativeViewProtected;
        var year = typeof this.year === "number" ? this.year : nativeView.getYear();
        var month = typeof this.month === "number" ? this.month - 1 : nativeView.getMonth();
        var day = typeof this.day === "number" ? this.day : nativeView.getDayOfMonth();
        this.date = new Date(year, month, day);
    };
    DatePicker.prototype[date_picker_common_1.yearProperty.setNative] = function (value) {
        if (this.nativeViewProtected.getYear() !== value) {
            this.updateNativeDate();
        }
    };
    DatePicker.prototype[date_picker_common_1.monthProperty.setNative] = function (value) {
        if (this.nativeViewProtected.getMonth() !== (value - 1)) {
            this.updateNativeDate();
        }
    };
    DatePicker.prototype[date_picker_common_1.dayProperty.setNative] = function (value) {
        if (this.nativeViewProtected.getDayOfMonth() !== value) {
            this.updateNativeDate();
        }
    };
    DatePicker.prototype[date_picker_common_1.dateProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        if (nativeView.getDayOfMonth() !== value.getDate()
            || nativeView.getMonth() !== value.getMonth()
            || nativeView.getYear() !== value.getFullYear()) {
            nativeView.updateDate(value.getFullYear(), value.getMonth(), value.getDate());
        }
    };
    DatePicker.prototype[date_picker_common_1.maxDateProperty.getDefault] = function () {
        return this.nativeViewProtected.getMaxDate();
    };
    DatePicker.prototype[date_picker_common_1.maxDateProperty.setNative] = function (value) {
        var newValue = value instanceof Date ? value.getTime() : value;
        this.nativeViewProtected.setMaxDate(newValue);
    };
    DatePicker.prototype[date_picker_common_1.minDateProperty.getDefault] = function () {
        return this.nativeViewProtected.getMinDate();
    };
    DatePicker.prototype[date_picker_common_1.minDateProperty.setNative] = function (value) {
        var newValue = value instanceof Date ? value.getTime() : value;
        this.nativeViewProtected.setMinDate(newValue);
    };
    return DatePicker;
}(date_picker_common_1.DatePickerBase));
exports.DatePicker = DatePicker;
//# sourceMappingURL=date-picker.android.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var dock_layout_common_1 = __webpack_require__(22);
__export(__webpack_require__(22));
dock_layout_common_1.View.prototype[dock_layout_common_1.dockProperty.setNative] = function (value) {
    var nativeView = this.nativeViewProtected;
    var lp = nativeView.getLayoutParams() || new org.nativescript.widgets.CommonLayoutParams();
    if (lp instanceof org.nativescript.widgets.CommonLayoutParams) {
        switch (value) {
            case "left":
                lp.dock = org.nativescript.widgets.Dock.left;
                break;
            case "top":
                lp.dock = org.nativescript.widgets.Dock.top;
                break;
            case "right":
                lp.dock = org.nativescript.widgets.Dock.right;
                break;
            case "bottom":
                lp.dock = org.nativescript.widgets.Dock.bottom;
                break;
            default:
                throw new Error("Invalid value for dock property: " + value);
        }
        nativeView.setLayoutParams(lp);
    }
};
var DockLayout = (function (_super) {
    __extends(DockLayout, _super);
    function DockLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DockLayout.prototype.createNativeView = function () {
        return new org.nativescript.widgets.DockLayout(this._context);
    };
    DockLayout.prototype[dock_layout_common_1.stretchLastChildProperty.getDefault] = function () {
        return true;
    };
    DockLayout.prototype[dock_layout_common_1.stretchLastChildProperty.setNative] = function (value) {
        this.nativeViewProtected.setStretchLastChild(value);
    };
    return DockLayout;
}(dock_layout_common_1.DockLayoutBase));
exports.DockLayout = DockLayout;
//# sourceMappingURL=dock-layout.android.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var grid_layout_common_1 = __webpack_require__(23);
__export(__webpack_require__(23));
function makeNativeSetter(setter) {
    return function (value) {
        var nativeView = this.nativeViewProtected;
        var lp = nativeView.getLayoutParams() || new org.nativescript.widgets.CommonLayoutParams();
        if (lp instanceof org.nativescript.widgets.CommonLayoutParams) {
            setter(lp, value);
            nativeView.setLayoutParams(lp);
        }
    };
}
grid_layout_common_1.View.prototype[grid_layout_common_1.rowProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.row = value; });
grid_layout_common_1.View.prototype[grid_layout_common_1.columnProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.column = value; });
grid_layout_common_1.View.prototype[grid_layout_common_1.rowSpanProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.rowSpan = value; });
grid_layout_common_1.View.prototype[grid_layout_common_1.columnSpanProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.columnSpan = value; });
function createNativeSpec(itemSpec) {
    switch (itemSpec.gridUnitType) {
        case grid_layout_common_1.GridUnitType.AUTO:
            return new org.nativescript.widgets.ItemSpec(itemSpec.value, org.nativescript.widgets.GridUnitType.auto);
        case grid_layout_common_1.GridUnitType.STAR:
            return new org.nativescript.widgets.ItemSpec(itemSpec.value, org.nativescript.widgets.GridUnitType.star);
        case grid_layout_common_1.GridUnitType.PIXEL:
            return new org.nativescript.widgets.ItemSpec(itemSpec.value * grid_layout_common_1.layout.getDisplayDensity(), org.nativescript.widgets.GridUnitType.pixel);
        default:
            throw new Error("Invalid gridUnitType: " + itemSpec.gridUnitType);
    }
}
var ItemSpec = (function (_super) {
    __extends(ItemSpec, _super);
    function ItemSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ItemSpec.prototype, "actualLength", {
        get: function () {
            if (this.nativeSpec) {
                return Math.round(this.nativeSpec.getActualLength() / grid_layout_common_1.layout.getDisplayDensity());
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return ItemSpec;
}(grid_layout_common_1.ItemSpec));
exports.ItemSpec = ItemSpec;
var GridLayout = (function (_super) {
    __extends(GridLayout, _super);
    function GridLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridLayout.prototype.createNativeView = function () {
        return new org.nativescript.widgets.GridLayout(this._context);
    };
    GridLayout.prototype.initNativeView = function () {
        var _this = this;
        _super.prototype.initNativeView.call(this);
        this.rowsInternal.forEach(function (itemSpec, index, rows) { _this._onRowAdded(itemSpec); }, this);
        this.columnsInternal.forEach(function (itemSpec, index, rows) { _this._onColumnAdded(itemSpec); }, this);
    };
    GridLayout.prototype.resetNativeView = function () {
        for (var i = this.rowsInternal.length; i--; i >= 0) {
            var itemSpec = this.rowsInternal[i];
            this._onRowRemoved(itemSpec, i);
        }
        for (var i = this.columnsInternal.length; i--; i >= 0) {
            var itemSpec = this.columnsInternal[i];
            this._onColumnRemoved(itemSpec, i);
        }
        _super.prototype.resetNativeView.call(this);
    };
    GridLayout.prototype._onRowAdded = function (itemSpec) {
        if (this.nativeViewProtected) {
            var nativeSpec = createNativeSpec(itemSpec);
            itemSpec.nativeSpec = nativeSpec;
            this.nativeViewProtected.addRow(nativeSpec);
        }
    };
    GridLayout.prototype._onColumnAdded = function (itemSpec) {
        if (this.nativeViewProtected) {
            var nativeSpec = createNativeSpec(itemSpec);
            itemSpec.nativeSpec = nativeSpec;
            this.nativeViewProtected.addColumn(nativeSpec);
        }
    };
    GridLayout.prototype._onRowRemoved = function (itemSpec, index) {
        itemSpec.nativeSpec = null;
        if (this.nativeViewProtected) {
            this.nativeViewProtected.removeRowAt(index);
        }
    };
    GridLayout.prototype._onColumnRemoved = function (itemSpec, index) {
        itemSpec.nativeSpec = null;
        if (this.nativeViewProtected) {
            this.nativeViewProtected.removeColumnAt(index);
        }
    };
    GridLayout.prototype.invalidate = function () {
    };
    return GridLayout;
}(grid_layout_common_1.GridLayoutBase));
exports.GridLayout = GridLayout;
//# sourceMappingURL=grid-layout.android.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var html_view_common_1 = __webpack_require__(24);
__export(__webpack_require__(24));
var HtmlView = (function (_super) {
    __extends(HtmlView, _super);
    function HtmlView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HtmlView.prototype.createNativeView = function () {
        return new android.widget.TextView(this._context);
    };
    HtmlView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.setLinksClickable(true);
        nativeView.setMovementMethod(android.text.method.LinkMovementMethod.getInstance());
    };
    HtmlView.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        this.nativeViewProtected.setAutoLinkMask(0);
    };
    HtmlView.prototype[html_view_common_1.htmlProperty.getDefault] = function () {
        return "";
    };
    HtmlView.prototype[html_view_common_1.htmlProperty.setNative] = function (value) {
        var mask = 15;
        if (value.search(/<a\s/i) >= 0) {
            mask = 0;
        }
        this.nativeViewProtected.setAutoLinkMask(mask);
        this.nativeViewProtected.setText(android.text.Html.fromHtml(value));
    };
    return HtmlView;
}(html_view_common_1.HtmlViewBase));
exports.HtmlView = HtmlView;
//# sourceMappingURL=html-view.android.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("../../file-system");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var text_base_1 = __webpack_require__(1);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(1));
var TextView;
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    Label.prototype.createNativeView = function () {
        if (!TextView) {
            TextView = android.widget.TextView;
        }
        return new TextView(this._context);
    };
    Label.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var textView = this.nativeViewProtected;
        textView.setSingleLine(true);
        textView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    };
    Label.prototype[text_base_1.whiteSpaceProperty.setNative] = function (value) {
        var newValue = value === "initial" ? "nowrap" : value;
        _super.prototype[text_base_1.whiteSpaceProperty.setNative].call(this, newValue);
    };
    __decorate([
        profiling_1.profile
    ], Label.prototype, "createNativeView", null);
    return Label;
}(text_base_1.TextBase));
exports.Label = Label;
Label.prototype._isSingleLine = true;
Label.prototype.recycleNativeView = "auto";
//# sourceMappingURL=label.android.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var list_picker_common_1 = __webpack_require__(27);
__export(__webpack_require__(27));
var Formatter;
var ValueChangeListener;
function initializeNativeClasses() {
    if (Formatter) {
        return;
    }
    var FormatterImpl = (function (_super) {
        __extends(FormatterImpl, _super);
        function FormatterImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        FormatterImpl.prototype.format = function (index) {
            return this.owner._getItemAsString(index);
        };
        FormatterImpl = __decorate([
            Interfaces([android.widget.NumberPicker.Formatter])
        ], FormatterImpl);
        return FormatterImpl;
    }(java.lang.Object));
    var ValueChangeListenerImpl = (function (_super) {
        __extends(ValueChangeListenerImpl, _super);
        function ValueChangeListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ValueChangeListenerImpl.prototype.onValueChange = function (picker, oldValue, newValue) {
            list_picker_common_1.selectedIndexProperty.nativeValueChange(this.owner, newValue);
        };
        ValueChangeListenerImpl = __decorate([
            Interfaces([android.widget.NumberPicker.OnValueChangeListener])
        ], ValueChangeListenerImpl);
        return ValueChangeListenerImpl;
    }(java.lang.Object));
    Formatter = FormatterImpl;
    ValueChangeListener = ValueChangeListenerImpl;
}
function getEditText(picker) {
    for (var i = 0, count = picker.getChildCount(); i < count; i++) {
        var child = picker.getChildAt(i);
        if (child instanceof android.widget.EditText) {
            return child;
        }
    }
    return null;
}
var selectorWheelPaintField;
function getSelectorWheelPaint(picker) {
    if (!selectorWheelPaintField) {
        selectorWheelPaintField = picker.getClass().getDeclaredField("mSelectorWheelPaint");
        selectorWheelPaintField.setAccessible(true);
    }
    return selectorWheelPaintField.get(picker);
}
var ListPicker = (function (_super) {
    __extends(ListPicker, _super);
    function ListPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPicker.prototype.createNativeView = function () {
        initializeNativeClasses();
        var picker = new android.widget.NumberPicker(this._context);
        picker.setDescendantFocusability(android.widget.NumberPicker.FOCUS_BLOCK_DESCENDANTS);
        picker.setMinValue(0);
        picker.setMaxValue(0);
        picker.setValue(0);
        var formatter = new Formatter(this);
        picker.setFormatter(formatter);
        picker.formatter = formatter;
        var valueChangedListener = new ValueChangeListener(this);
        picker.setOnValueChangedListener(valueChangedListener);
        picker.valueChangedListener = valueChangedListener;
        var editText = getEditText(picker);
        if (editText) {
            picker.editText = editText;
        }
        picker.setWrapSelectorWheel(false);
        return picker;
    };
    ListPicker.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        this._selectorWheelPaint = getSelectorWheelPaint(nativeView);
        nativeView.formatter.owner = this;
        nativeView.valueChangedListener.owner = this;
        var editText = nativeView.editText;
        if (editText) {
            editText.setFilters([]);
            editText.setText(" ", android.widget.TextView.BufferType.NORMAL);
        }
    };
    ListPicker.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.formatter.owner = null;
        nativeView.valueChangedListener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    ListPicker.prototype._fixNumberPickerRendering = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.setFormatter(null);
        nativeView.setFormatter(nativeView.formatter);
        var editText = nativeView.editText;
        if (editText) {
            editText.setFilters([]);
            editText.invalidate();
        }
        nativeView.invalidate();
    };
    ListPicker.prototype[list_picker_common_1.selectedIndexProperty.getDefault] = function () {
        return -1;
    };
    ListPicker.prototype[list_picker_common_1.selectedIndexProperty.setNative] = function (value) {
        if (value >= 0) {
            this.nativeViewProtected.setValue(value);
        }
    };
    ListPicker.prototype[list_picker_common_1.itemsProperty.getDefault] = function () {
        return null;
    };
    ListPicker.prototype[list_picker_common_1.itemsProperty.setNative] = function (value) {
        var maxValue = value && value.length > 0 ? value.length - 1 : 0;
        this.nativeViewProtected.setMaxValue(maxValue);
        this._fixNumberPickerRendering();
        list_picker_common_1.selectedIndexProperty.coerce(this);
    };
    ListPicker.prototype[list_picker_common_1.colorProperty.getDefault] = function () {
        var editText = this.nativeViewProtected.editText;
        return {
            wheelColor: this._selectorWheelPaint.getColor(),
            textColor: editText ? editText.getTextColors().getDefaultColor() : -1
        };
    };
    ListPicker.prototype[list_picker_common_1.colorProperty.setNative] = function (value) {
        var color;
        var wheelColor;
        if (value instanceof list_picker_common_1.Color) {
            color = wheelColor = value.android;
        }
        else {
            color = value.textColor;
            wheelColor = value.wheelColor;
        }
        this._selectorWheelPaint.setColor(wheelColor);
        var editText = this.nativeViewProtected.editText;
        if (editText) {
            editText.setTextColor(color);
        }
    };
    return ListPicker;
}(list_picker_common_1.ListPickerBase));
exports.ListPicker = ListPicker;
//# sourceMappingURL=list-picker.android.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var list_view_common_1 = __webpack_require__(30);
var stack_layout_1 = __webpack_require__(31);
var proxy_view_container_1 = __webpack_require__(83);
var layout_base_1 = __webpack_require__(2);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(30));
var ITEMLOADING = list_view_common_1.ListViewBase.itemLoadingEvent;
var LOADMOREITEMS = list_view_common_1.ListViewBase.loadMoreItemsEvent;
var ITEMTAP = list_view_common_1.ListViewBase.itemTapEvent;
var ItemClickListener;
function initializeItemClickListener() {
    if (ItemClickListener) {
        return;
    }
    var ItemClickListenerImpl = (function (_super) {
        __extends(ItemClickListenerImpl, _super);
        function ItemClickListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ItemClickListenerImpl.prototype.onItemClick = function (parent, convertView, index, id) {
            var owner = this.owner;
            var view = owner._realizedTemplates.get(owner._getItemTemplate(index).key).get(convertView);
            owner.notify({ eventName: ITEMTAP, object: owner, index: index, view: view });
        };
        ItemClickListenerImpl = __decorate([
            Interfaces([android.widget.AdapterView.OnItemClickListener])
        ], ItemClickListenerImpl);
        return ItemClickListenerImpl;
    }(java.lang.Object));
    ItemClickListener = ItemClickListenerImpl;
}
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidViewId = -1;
        _this._realizedItems = new Map();
        _this._realizedTemplates = new Map();
        return _this;
    }
    ListView.prototype.createNativeView = function () {
        initializeItemClickListener();
        var listView = new android.widget.ListView(this._context);
        listView.setDescendantFocusability(android.view.ViewGroup.FOCUS_AFTER_DESCENDANTS);
        this.updateEffectiveRowHeight();
        listView.setCacheColorHint(android.graphics.Color.TRANSPARENT);
        ensureListViewAdapterClass();
        var adapter = new ListViewAdapterClass(this);
        listView.setAdapter(adapter);
        listView.adapter = adapter;
        var itemClickListener = new ItemClickListener(this);
        listView.setOnItemClickListener(itemClickListener);
        listView.itemClickListener = itemClickListener;
        return listView;
    };
    ListView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.itemClickListener.owner = this;
        var adapter = nativeView.adapter;
        adapter.owner = this;
        nativeView.setAdapter(adapter);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        nativeView.setId(this._androidViewId);
    };
    ListView.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.setAdapter(null);
        nativeView.itemClickListener.owner = null;
        nativeView.adapter.owner = null;
        this.clearRealizedCells();
        _super.prototype.disposeNativeView.call(this);
    };
    ListView.prototype.refresh = function () {
        var nativeView = this.nativeViewProtected;
        if (!nativeView || !nativeView.getAdapter()) {
            return;
        }
        this._realizedItems.forEach(function (view, nativeView) {
            if (!(view.bindingContext instanceof list_view_common_1.Observable)) {
                view.bindingContext = null;
            }
        });
        nativeView.getAdapter().notifyDataSetChanged();
    };
    ListView.prototype.scrollToIndex = function (index) {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.setSelection(index);
        }
    };
    Object.defineProperty(ListView.prototype, "_childrenCount", {
        get: function () {
            return this._realizedItems.size;
        },
        enumerable: true,
        configurable: true
    });
    ListView.prototype.eachChildView = function (callback) {
        this._realizedItems.forEach(function (view, nativeView) {
            if (view.parent instanceof ListView) {
                callback(view);
            }
            else {
                if (view.parent) {
                    callback(view.parent);
                }
            }
        });
    };
    ListView.prototype._dumpRealizedTemplates = function () {
        console.log("Realized Templates:");
        this._realizedTemplates.forEach(function (value, index) {
            console.log("\t" + index + ":");
            value.forEach(function (value, index) {
                console.log("\t\t" + index.hashCode() + ": " + value);
            });
        });
        console.log("Realized Items Size: " + this._realizedItems.size);
    };
    ListView.prototype.clearRealizedCells = function () {
        var _this = this;
        this._realizedItems.forEach(function (view, nativeView) {
            if (view.parent) {
                if (!(view.parent instanceof ListView)) {
                    _this._removeView(view.parent);
                }
                view.parent._removeView(view);
            }
        });
        this._realizedItems.clear();
        this._realizedTemplates.clear();
    };
    ListView.prototype[list_view_common_1.separatorColorProperty.getDefault] = function () {
        var nativeView = this.nativeViewProtected;
        return {
            dividerHeight: nativeView.getDividerHeight(),
            divider: nativeView.getDivider()
        };
    };
    ListView.prototype[list_view_common_1.separatorColorProperty.setNative] = function (value) {
        var nativeView = this.nativeViewProtected;
        if (value instanceof list_view_common_1.Color) {
            nativeView.setDivider(new android.graphics.drawable.ColorDrawable(value.android));
            nativeView.setDividerHeight(1);
        }
        else {
            nativeView.setDivider(value.divider);
            nativeView.setDividerHeight(value.dividerHeight);
        }
    };
    ListView.prototype[list_view_common_1.itemTemplatesProperty.getDefault] = function () {
        return null;
    };
    ListView.prototype[list_view_common_1.itemTemplatesProperty.setNative] = function (value) {
        this._itemTemplatesInternal = new Array(this._defaultTemplate);
        if (value) {
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }
        this.nativeViewProtected.setAdapter(new ListViewAdapterClass(this));
        this.refresh();
    };
    __decorate([
        profiling_1.profile
    ], ListView.prototype, "createNativeView", null);
    return ListView;
}(list_view_common_1.ListViewBase));
exports.ListView = ListView;
var ListViewAdapterClass;
function ensureListViewAdapterClass() {
    if (ListViewAdapterClass) {
        return;
    }
    var ListViewAdapter = (function (_super) {
        __extends(ListViewAdapter, _super);
        function ListViewAdapter(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ListViewAdapter.prototype.getCount = function () {
            return this.owner && this.owner.items && this.owner.items.length ? this.owner.items.length : 0;
        };
        ListViewAdapter.prototype.getItem = function (i) {
            if (this.owner && this.owner.items && i < this.owner.items.length) {
                var getItem = this.owner.items.getItem;
                return getItem ? getItem.call(this.owner.items, i) : this.owner.items[i];
            }
            return null;
        };
        ListViewAdapter.prototype.getItemId = function (i) {
            var item = this.getItem(i);
            var id = i;
            if (this.owner && item && this.owner.items) {
                id = this.owner.itemIdGenerator(item, i, this.owner.items);
            }
            return long(id);
        };
        ListViewAdapter.prototype.hasStableIds = function () {
            return true;
        };
        ListViewAdapter.prototype.getViewTypeCount = function () {
            return this.owner._itemTemplatesInternal.length;
        };
        ListViewAdapter.prototype.getItemViewType = function (index) {
            var template = this.owner._getItemTemplate(index);
            var itemViewType = this.owner._itemTemplatesInternal.indexOf(template);
            return itemViewType;
        };
        ListViewAdapter.prototype.getView = function (index, convertView, parent) {
            if (!this.owner) {
                return null;
            }
            var totalItemCount = this.owner.items ? this.owner.items.length : 0;
            if (index === (totalItemCount - 1)) {
                this.owner.notify({ eventName: LOADMOREITEMS, object: this.owner });
            }
            var template = this.owner._getItemTemplate(index);
            var view;
            if (convertView) {
                view = this.owner._realizedTemplates.get(template.key).get(convertView);
                if (!view) {
                    throw new Error("There is no entry with key '" + convertView + "' in the realized views cache for template with key'" + template.key + "'.");
                }
            }
            else {
                view = template.createView();
            }
            var args = {
                eventName: ITEMLOADING, object: this.owner, index: index, view: view,
                android: parent,
                ios: undefined
            };
            this.owner.notify(args);
            if (!args.view) {
                args.view = this.owner._getDefaultItemContent(index);
            }
            if (args.view) {
                if (this.owner._effectiveRowHeight > -1) {
                    args.view.height = this.owner.rowHeight;
                }
                else {
                    args.view.height = list_view_common_1.unsetValue;
                }
                this.owner._prepareItem(args.view, index);
                if (!args.view.parent) {
                    if (args.view instanceof layout_base_1.LayoutBase &&
                        !(args.view instanceof proxy_view_container_1.ProxyViewContainer)) {
                        this.owner._addView(args.view);
                        convertView = args.view.nativeViewProtected;
                    }
                    else {
                        var sp = new stack_layout_1.StackLayout();
                        sp.addChild(args.view);
                        this.owner._addView(sp);
                        convertView = sp.nativeViewProtected;
                    }
                }
                var realizedItemsForTemplateKey = this.owner._realizedTemplates.get(template.key);
                if (!realizedItemsForTemplateKey) {
                    realizedItemsForTemplateKey = new Map();
                    this.owner._realizedTemplates.set(template.key, realizedItemsForTemplateKey);
                }
                realizedItemsForTemplateKey.set(convertView, args.view);
                this.owner._realizedItems.set(convertView, args.view);
            }
            return convertView;
        };
        __decorate([
            profiling_1.profile
        ], ListViewAdapter.prototype, "getView", null);
        return ListViewAdapter;
    }(android.widget.BaseAdapter));
    ListViewAdapterClass = ListViewAdapter;
}
//# sourceMappingURL=list-view.android.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("../proxy-view-container");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var progress_common_1 = __webpack_require__(32);
__export(__webpack_require__(32));
var R_ATTR_PROGRESS_BAR_STYLE_HORIZONTAL = 0x01010078;
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.createNativeView = function () {
        return new android.widget.ProgressBar(this._context, null, R_ATTR_PROGRESS_BAR_STYLE_HORIZONTAL);
    };
    Progress.prototype[progress_common_1.valueProperty.getDefault] = function () {
        return 0;
    };
    Progress.prototype[progress_common_1.valueProperty.setNative] = function (value) {
        this.nativeViewProtected.setProgress(value);
    };
    Progress.prototype[progress_common_1.maxValueProperty.getDefault] = function () {
        return 100;
    };
    Progress.prototype[progress_common_1.maxValueProperty.setNative] = function (value) {
        this.nativeViewProtected.setMax(value);
    };
    Progress.prototype[progress_common_1.colorProperty.getDefault] = function () {
        return null;
    };
    Progress.prototype[progress_common_1.colorProperty.setNative] = function (value) {
        var progressDrawable = this.nativeViewProtected.getProgressDrawable();
        if (!progressDrawable) {
            return;
        }
        if (value instanceof progress_common_1.Color) {
            progressDrawable.setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        }
        else {
            progressDrawable.clearColorFilter();
        }
    };
    Progress.prototype[progress_common_1.backgroundColorProperty.getDefault] = function () {
        return null;
    };
    Progress.prototype[progress_common_1.backgroundColorProperty.setNative] = function (value) {
        var progressDrawable = this.nativeViewProtected.getProgressDrawable();
        if (!progressDrawable) {
            return;
        }
        if (progressDrawable instanceof android.graphics.drawable.LayerDrawable && progressDrawable.getNumberOfLayers() > 0) {
            var backgroundDrawable = progressDrawable.getDrawable(0);
            if (backgroundDrawable) {
                if (value instanceof progress_common_1.Color) {
                    backgroundDrawable.setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
                }
                else {
                    backgroundDrawable.clearColorFilter();
                }
            }
        }
    };
    Progress.prototype[progress_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    Progress.prototype[progress_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return Progress;
}(progress_common_1.ProgressBase));
exports.Progress = Progress;
//# sourceMappingURL=progress.android.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var label_1 = __webpack_require__(86);
var layout_base_1 = __webpack_require__(2);
var stack_layout_1 = __webpack_require__(31);
var observable_array_1 = __webpack_require__(87);
var weak_event_listener_1 = __webpack_require__(88);
var builder_1 = __webpack_require__(89);
var profiling_1 = __webpack_require__(0);
__export(__webpack_require__(2));
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
/* 86 */
/***/ (function(module, exports) {

module.exports = require("../label");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("../../data/observable-array");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("../core/weak-event-listener");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("../builder");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var scroll_view_common_1 = __webpack_require__(33);
__export(__webpack_require__(33));
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidViewId = -1;
        _this._lastScrollX = -1;
        _this._lastScrollY = -1;
        return _this;
    }
    Object.defineProperty(ScrollView.prototype, "horizontalOffset", {
        get: function () {
            var nativeView = this.nativeViewProtected;
            if (!nativeView) {
                return 0;
            }
            return nativeView.getScrollX() / scroll_view_common_1.layout.getDisplayDensity();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "verticalOffset", {
        get: function () {
            var nativeView = this.nativeViewProtected;
            if (!nativeView) {
                return 0;
            }
            return nativeView.getScrollY() / scroll_view_common_1.layout.getDisplayDensity();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollableWidth", {
        get: function () {
            var nativeView = this.nativeViewProtected;
            if (!nativeView || this.orientation !== "horizontal") {
                return 0;
            }
            return nativeView.getScrollableLength() / scroll_view_common_1.layout.getDisplayDensity();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollView.prototype, "scrollableHeight", {
        get: function () {
            var nativeView = this.nativeViewProtected;
            if (!nativeView || this.orientation !== "vertical") {
                return 0;
            }
            return nativeView.getScrollableLength() / scroll_view_common_1.layout.getDisplayDensity();
        },
        enumerable: true,
        configurable: true
    });
    ScrollView.prototype[scroll_view_common_1.scrollBarIndicatorVisibleProperty.getDefault] = function () {
        return true;
    };
    ScrollView.prototype[scroll_view_common_1.scrollBarIndicatorVisibleProperty.setNative] = function (value) {
        if (this.orientation === "horizontal") {
            this.nativeViewProtected.setHorizontalScrollBarEnabled(value);
        }
        else {
            this.nativeViewProtected.setVerticalScrollBarEnabled(value);
        }
    };
    ScrollView.prototype.scrollToVerticalOffset = function (value, animated) {
        var nativeView = this.nativeViewProtected;
        if (nativeView && this.orientation === "vertical") {
            value *= scroll_view_common_1.layout.getDisplayDensity();
            if (animated) {
                nativeView.smoothScrollTo(0, value);
            }
            else {
                nativeView.scrollTo(0, value);
            }
        }
    };
    ScrollView.prototype.scrollToHorizontalOffset = function (value, animated) {
        var nativeView = this.nativeViewProtected;
        if (nativeView && this.orientation === "horizontal") {
            value *= scroll_view_common_1.layout.getDisplayDensity();
            if (animated) {
                nativeView.smoothScrollTo(value, 0);
            }
            else {
                nativeView.scrollTo(value, 0);
            }
        }
    };
    ScrollView.prototype.createNativeView = function () {
        var nativeView = this.orientation === "horizontal" ? new org.nativescript.widgets.HorizontalScrollView(this._context) : new org.nativescript.widgets.VerticalScrollView(this._context);
        if (this._androidViewId < 0) {
            this._androidViewId = android.view.View.generateViewId();
        }
        nativeView.setId(this._androidViewId);
        return nativeView;
    };
    ScrollView.prototype._onOrientationChanged = function () {
        if (this.nativeViewProtected) {
            var parent_1 = this.parent;
            if (parent_1) {
                parent_1._removeView(this);
                parent_1._addView(this);
            }
        }
    };
    ScrollView.prototype.attachNative = function () {
        var that = new WeakRef(this);
        this.handler = new android.view.ViewTreeObserver.OnScrollChangedListener({
            onScrollChanged: function () {
                var owner = that.get();
                if (owner) {
                    owner._onScrollChanged();
                }
            }
        });
        this.nativeViewProtected.getViewTreeObserver().addOnScrollChangedListener(this.handler);
    };
    ScrollView.prototype._onScrollChanged = function () {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            var newScrollX = nativeView.getScrollX();
            var newScrollY = nativeView.getScrollY();
            if (newScrollX !== this._lastScrollX || newScrollY !== this._lastScrollY) {
                this.notify({
                    object: this,
                    eventName: ScrollView.scrollEvent,
                    scrollX: newScrollX / scroll_view_common_1.layout.getDisplayDensity(),
                    scrollY: newScrollY / scroll_view_common_1.layout.getDisplayDensity()
                });
                this._lastScrollX = newScrollX;
                this._lastScrollY = newScrollY;
            }
        }
    };
    ScrollView.prototype.dettachNative = function () {
        this.nativeViewProtected.getViewTreeObserver().removeOnScrollChangedListener(this.handler);
        this.handler = null;
    };
    return ScrollView;
}(scroll_view_common_1.ScrollViewBase));
exports.ScrollView = ScrollView;
ScrollView.prototype.recycleNativeView = "never";
//# sourceMappingURL=scroll-view.android.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var font_1 = __webpack_require__(9);
var search_bar_common_1 = __webpack_require__(34);
var utils_1 = __webpack_require__(6);
__export(__webpack_require__(34));
var SEARCHTEXT = Symbol("searchText");
var QUERY = Symbol("query");
var QueryTextListener;
var CloseListener;
function initializeNativeClasses() {
    if (QueryTextListener) {
        return;
    }
    var CompatQueryTextListenerImpl = (function (_super) {
        __extends(CompatQueryTextListenerImpl, _super);
        function CompatQueryTextListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        CompatQueryTextListenerImpl.prototype.onQueryTextChange = function (newText) {
            var owner = this.owner;
            search_bar_common_1.textProperty.nativeValueChange(owner, newText);
            if (newText === "" && this[SEARCHTEXT] !== newText) {
                owner._emit(search_bar_common_1.SearchBarBase.clearEvent);
            }
            this[SEARCHTEXT] = newText;
            this[QUERY] = undefined;
            return true;
        };
        CompatQueryTextListenerImpl.prototype.onQueryTextSubmit = function (query) {
            var owner = this.owner;
            if (query !== "" && this[QUERY] !== query) {
                owner._emit(search_bar_common_1.SearchBarBase.submitEvent);
            }
            this[QUERY] = query;
            return true;
        };
        CompatQueryTextListenerImpl = __decorate([
            Interfaces([android.support.v7.widget.SearchView.OnQueryTextListener])
        ], CompatQueryTextListenerImpl);
        return CompatQueryTextListenerImpl;
    }(java.lang.Object));
    var CompatCloseListenerImpl = (function (_super) {
        __extends(CompatCloseListenerImpl, _super);
        function CompatCloseListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        CompatCloseListenerImpl.prototype.onClose = function () {
            this.owner._emit(search_bar_common_1.SearchBarBase.clearEvent);
            return true;
        };
        CompatCloseListenerImpl = __decorate([
            Interfaces([android.support.v7.widget.SearchView.OnCloseListener])
        ], CompatCloseListenerImpl);
        return CompatCloseListenerImpl;
    }(java.lang.Object));
    QueryTextListener = CompatQueryTextListenerImpl;
    CloseListener = CompatCloseListenerImpl;
}
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBar.prototype.dismissSoftInput = function () {
        utils_1.ad.dismissSoftInput(this.nativeViewProtected);
    };
    SearchBar.prototype.focus = function () {
        var result = _super.prototype.focus.call(this);
        if (result) {
            utils_1.ad.showSoftInput(this.nativeViewProtected);
        }
        return result;
    };
    SearchBar.prototype.createNativeView = function () {
        initializeNativeClasses();
        var nativeView = new android.support.v7.widget.SearchView(this._context);
        nativeView.setIconified(false);
        var queryTextListener = new QueryTextListener(this);
        nativeView.setOnQueryTextListener(queryTextListener);
        nativeView.queryTextListener = queryTextListener;
        var closeListener = new CloseListener(this);
        nativeView.setOnCloseListener(closeListener);
        nativeView.closeListener = closeListener;
        return nativeView;
    };
    SearchBar.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.closeListener.owner = this;
        nativeView.queryTextListener.owner = this;
    };
    SearchBar.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.closeListener.owner = null;
        nativeView.queryTextListener.owner = null;
        this._searchPlate = null;
        this._searchTextView = null;
        _super.prototype.disposeNativeView.call(this);
    };
    SearchBar.prototype[search_bar_common_1.backgroundColorProperty.getDefault] = function () {
        var result = this.nativeViewProtected.getDrawingCacheBackgroundColor();
        return result;
    };
    SearchBar.prototype[search_bar_common_1.backgroundColorProperty.setNative] = function (value) {
        var color;
        if (typeof value === "number") {
            color = value;
        }
        else {
            color = value.android;
        }
        this.nativeViewProtected.setBackgroundColor(color);
        var searchPlate = this._getSearchPlate();
        searchPlate.setBackgroundColor(color);
    };
    SearchBar.prototype[search_bar_common_1.colorProperty.getDefault] = function () {
        var textView = this._getTextView();
        return textView.getCurrentTextColor();
    };
    SearchBar.prototype[search_bar_common_1.colorProperty.setNative] = function (value) {
        var color = (typeof value === "number") ? value : value.android;
        var textView = this._getTextView();
        textView.setTextColor(color);
    };
    SearchBar.prototype[search_bar_common_1.fontSizeProperty.getDefault] = function () {
        return { nativeSize: this._getTextView().getTextSize() };
    };
    SearchBar.prototype[search_bar_common_1.fontSizeProperty.setNative] = function (value) {
        if (typeof value === "number") {
            this._getTextView().setTextSize(value);
        }
        else {
            this._getTextView().setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, value.nativeSize);
        }
    };
    SearchBar.prototype[search_bar_common_1.fontInternalProperty.getDefault] = function () {
        return this._getTextView().getTypeface();
    };
    SearchBar.prototype[search_bar_common_1.fontInternalProperty.setNative] = function (value) {
        this._getTextView().setTypeface(value instanceof font_1.Font ? value.getAndroidTypeface() : value);
    };
    SearchBar.prototype[search_bar_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    SearchBar.prototype[search_bar_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    SearchBar.prototype[search_bar_common_1.textProperty.getDefault] = function () {
        return "";
    };
    SearchBar.prototype[search_bar_common_1.textProperty.setNative] = function (value) {
        var text = (value === null || value === undefined) ? '' : value.toString();
        this.nativeViewProtected.setQuery(text, false);
    };
    SearchBar.prototype[search_bar_common_1.hintProperty.getDefault] = function () {
        return null;
    };
    SearchBar.prototype[search_bar_common_1.hintProperty.setNative] = function (value) {
        if (value === null || value === undefined) {
            this.nativeViewProtected.setQueryHint(null);
        }
        else {
            this.nativeViewProtected.setQueryHint(value.toString());
        }
    };
    SearchBar.prototype[search_bar_common_1.textFieldBackgroundColorProperty.getDefault] = function () {
        var textView = this._getTextView();
        return textView.getBackground();
    };
    SearchBar.prototype[search_bar_common_1.textFieldBackgroundColorProperty.setNative] = function (value) {
        var textView = this._getTextView();
        if (value instanceof search_bar_common_1.Color) {
            textView.setBackgroundColor(value.android);
        }
        else {
            org.nativescript.widgets.ViewHelper.setBackground(textView, value);
        }
    };
    SearchBar.prototype[search_bar_common_1.textFieldHintColorProperty.getDefault] = function () {
        var textView = this._getTextView();
        return textView.getCurrentTextColor();
    };
    SearchBar.prototype[search_bar_common_1.textFieldHintColorProperty.setNative] = function (value) {
        var textView = this._getTextView();
        var color = value instanceof search_bar_common_1.Color ? value.android : value;
        textView.setHintTextColor(color);
    };
    SearchBar.prototype._getTextView = function () {
        if (!this._searchTextView) {
            var pkgName = this.nativeViewProtected.getContext().getPackageName();
            var id = this.nativeViewProtected.getContext().getResources().getIdentifier("search_src_text", "id", pkgName);
            this._searchTextView = this.nativeViewProtected.findViewById(id);
        }
        return this._searchTextView;
    };
    SearchBar.prototype._getSearchPlate = function () {
        if (!this._searchPlate) {
            var pkgName = this.nativeViewProtected.getContext().getPackageName();
            var id = this.nativeViewProtected.getContext().getResources().getIdentifier("search_plate", "id", pkgName);
            this._searchPlate = this.nativeViewProtected.findViewById(id);
        }
        return this._searchPlate;
    };
    return SearchBar;
}(search_bar_common_1.SearchBarBase));
exports.SearchBar = SearchBar;
//# sourceMappingURL=search-bar.android.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var slider_common_1 = __webpack_require__(37);
__export(__webpack_require__(37));
var SeekBar;
var SeekBarChangeListener;
function initializeModule() {
    if (!SeekBar) {
        SeekBar = android.widget.SeekBar;
    }
    if (!SeekBarChangeListener) {
        var SeekBarChangeListenerImpl = (function (_super) {
            __extends(SeekBarChangeListenerImpl, _super);
            function SeekBarChangeListenerImpl() {
                var _this = _super.call(this) || this;
                return global.__native(_this);
            }
            SeekBarChangeListenerImpl.prototype.onProgressChanged = function (seekBar, progress, fromUser) {
                var owner = seekBar.owner;
                if (!owner._supressNativeValue) {
                    var newValue = progress + owner.minValue;
                    slider_common_1.valueProperty.nativeValueChange(owner, newValue);
                }
            };
            SeekBarChangeListenerImpl.prototype.onStartTrackingTouch = function (seekBar) {
            };
            SeekBarChangeListenerImpl.prototype.onStopTrackingTouch = function (seekBar) {
            };
            SeekBarChangeListenerImpl = __decorate([
                Interfaces([android.widget.SeekBar.OnSeekBarChangeListener])
            ], SeekBarChangeListenerImpl);
            return SeekBarChangeListenerImpl;
        }(java.lang.Object));
        SeekBarChangeListener = new SeekBarChangeListenerImpl();
    }
}
function getListener() {
    return SeekBarChangeListener;
}
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.prototype.createNativeView = function () {
        initializeModule();
        var nativeView = new SeekBar(this._context);
        var listener = getListener();
        nativeView.setOnSeekBarChangeListener(listener);
        return nativeView;
    };
    Slider.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this.nativeViewProtected.owner = this;
    };
    Slider.prototype.disposeNativeView = function () {
        this.nativeViewProtected.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    Slider.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.setMax(100);
        nativeView.setProgress(0);
        nativeView.setKeyProgressIncrement(1);
    };
    Slider.prototype.setNativeValuesSilently = function () {
        this._supressNativeValue = true;
        var nativeView = this.nativeViewProtected;
        try {
            nativeView.setMax(this.maxValue - this.minValue);
            nativeView.setProgress(this.value - this.minValue);
        }
        finally {
            this._supressNativeValue = false;
        }
    };
    Slider.prototype[slider_common_1.valueProperty.setNative] = function (value) {
        this.setNativeValuesSilently();
    };
    Slider.prototype[slider_common_1.minValueProperty.setNative] = function (value) {
        this.setNativeValuesSilently();
    };
    Slider.prototype[slider_common_1.maxValueProperty.getDefault] = function () {
        return 100;
    };
    Slider.prototype[slider_common_1.maxValueProperty.setNative] = function (value) {
        this.setNativeValuesSilently();
    };
    Slider.prototype[slider_common_1.colorProperty.getDefault] = function () {
        return -1;
    };
    Slider.prototype[slider_common_1.colorProperty.setNative] = function (value) {
        if (value instanceof slider_common_1.Color) {
            this.nativeViewProtected.getThumb().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        }
        else {
            this.nativeViewProtected.getThumb().clearColorFilter();
        }
    };
    Slider.prototype[slider_common_1.backgroundColorProperty.getDefault] = function () {
        return -1;
    };
    Slider.prototype[slider_common_1.backgroundColorProperty.setNative] = function (value) {
        if (value instanceof slider_common_1.Color) {
            this.nativeViewProtected.getProgressDrawable().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        }
        else {
            this.nativeViewProtected.getProgressDrawable().clearColorFilter();
        }
    };
    Slider.prototype[slider_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    Slider.prototype[slider_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return Slider;
}(slider_common_1.SliderBase));
exports.Slider = Slider;
//# sourceMappingURL=slider.android.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var stack_layout_common_1 = __webpack_require__(38);
__export(__webpack_require__(38));
var StackLayout = (function (_super) {
    __extends(StackLayout, _super);
    function StackLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackLayout.prototype.createNativeView = function () {
        return new org.nativescript.widgets.StackLayout(this._context);
    };
    StackLayout.prototype[stack_layout_common_1.orientationProperty.setNative] = function (value) {
        this.nativeViewProtected.setOrientation(value === "vertical" ? org.nativescript.widgets.Orientation.vertical : org.nativescript.widgets.Orientation.horizontal);
    };
    return StackLayout;
}(stack_layout_common_1.StackLayoutBase));
exports.StackLayout = StackLayout;
//# sourceMappingURL=stack-layout.android.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var flexbox_layout_common_1 = __webpack_require__(39);
__export(__webpack_require__(39));
var widgetFlexboxLayout;
var widgetLayoutParams;
function makeNativeSetter(setter) {
    return function (value) {
        var nativeView = this.nativeViewProtected;
        var lp = nativeView.getLayoutParams() || new widgetLayoutParams();
        if (lp instanceof widgetLayoutParams) {
            setter(lp, value);
            nativeView.setLayoutParams(lp);
        }
    };
}
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.orderProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.order = value; });
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.flexGrowProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.flexGrow = value; });
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.flexShrinkProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.flexShrink = value; });
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.flexWrapBeforeProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.wrapBefore = value; });
flexbox_layout_common_1.View.prototype[flexbox_layout_common_1.alignSelfProperty.setNative] = makeNativeSetter(function (lp, value) { return lp.alignSelf = alignSelfMap[value]; });
var flexDirectionMap = (_a = {},
    _a[flexbox_layout_common_1.FlexDirection.ROW] = 0,
    _a[flexbox_layout_common_1.FlexDirection.ROW_REVERSE] = 1,
    _a[flexbox_layout_common_1.FlexDirection.COLUMN] = 2,
    _a[flexbox_layout_common_1.FlexDirection.COLUMN_REVERSE] = 3,
    _a);
var flexWrapMap = (_b = {},
    _b[flexbox_layout_common_1.FlexWrap.NOWRAP] = 0,
    _b[flexbox_layout_common_1.FlexWrap.WRAP] = 1,
    _b[flexbox_layout_common_1.FlexWrap.WRAP_REVERSE] = 2,
    _b);
var justifyContentMap = (_c = {},
    _c[flexbox_layout_common_1.JustifyContent.FLEX_START] = 0,
    _c[flexbox_layout_common_1.JustifyContent.FLEX_END] = 1,
    _c[flexbox_layout_common_1.JustifyContent.CENTER] = 2,
    _c[flexbox_layout_common_1.JustifyContent.SPACE_BETWEEN] = 3,
    _c[flexbox_layout_common_1.JustifyContent.SPACE_AROUND] = 4,
    _c);
var alignItemsMap = (_d = {},
    _d[flexbox_layout_common_1.AlignItems.FLEX_START] = 0,
    _d[flexbox_layout_common_1.AlignItems.FLEX_END] = 1,
    _d[flexbox_layout_common_1.AlignItems.CENTER] = 2,
    _d[flexbox_layout_common_1.AlignItems.BASELINE] = 3,
    _d[flexbox_layout_common_1.AlignItems.STRETCH] = 4,
    _d);
var alignContentMap = (_e = {},
    _e[flexbox_layout_common_1.AlignContent.FLEX_START] = 0,
    _e[flexbox_layout_common_1.AlignContent.FLEX_END] = 1,
    _e[flexbox_layout_common_1.AlignContent.CENTER] = 2,
    _e[flexbox_layout_common_1.AlignContent.SPACE_BETWEEN] = 3,
    _e[flexbox_layout_common_1.AlignContent.SPACE_AROUND] = 4,
    _e[flexbox_layout_common_1.AlignContent.STRETCH] = 5,
    _e);
var alignSelfMap = (_f = {},
    _f[flexbox_layout_common_1.AlignSelf.AUTO] = -1,
    _f[flexbox_layout_common_1.AlignSelf.FLEX_START] = 0,
    _f[flexbox_layout_common_1.AlignSelf.FLEX_END] = 1,
    _f[flexbox_layout_common_1.AlignSelf.CENTER] = 2,
    _f[flexbox_layout_common_1.AlignSelf.BASELINE] = 3,
    _f[flexbox_layout_common_1.AlignSelf.STRETCH] = 4,
    _f);
var FlexboxLayout = (function (_super) {
    __extends(FlexboxLayout, _super);
    function FlexboxLayout() {
        var _this = _super.call(this) || this;
        if (!widgetFlexboxLayout) {
            widgetFlexboxLayout = org.nativescript.widgets.FlexboxLayout;
            widgetLayoutParams = widgetFlexboxLayout.LayoutParams;
        }
        return _this;
    }
    FlexboxLayout.prototype.createNativeView = function () {
        return new widgetFlexboxLayout(this._context);
    };
    FlexboxLayout.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        this.nativeViewProtected.invalidateOrdersCache();
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.flexDirectionProperty.getDefault] = function () {
        return flexbox_layout_common_1.flexDirectionProperty.defaultValue;
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.flexDirectionProperty.setNative] = function (flexDirection) {
        this.nativeViewProtected.setFlexDirection(flexDirectionMap[flexDirection]);
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.flexWrapProperty.getDefault] = function () {
        return flexbox_layout_common_1.flexWrapProperty.defaultValue;
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.flexWrapProperty.setNative] = function (flexWrap) {
        this.nativeViewProtected.setFlexWrap(flexWrapMap[flexWrap]);
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.justifyContentProperty.getDefault] = function () {
        return flexbox_layout_common_1.justifyContentProperty.defaultValue;
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.justifyContentProperty.setNative] = function (justifyContent) {
        this.nativeViewProtected.setJustifyContent(justifyContentMap[justifyContent]);
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.alignItemsProperty.getDefault] = function () {
        return flexbox_layout_common_1.alignItemsProperty.defaultValue;
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.alignItemsProperty.setNative] = function (alignItems) {
        this.nativeViewProtected.setAlignItems(alignItemsMap[alignItems]);
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.alignContentProperty.getDefault] = function () {
        return flexbox_layout_common_1.alignContentProperty.defaultValue;
    };
    FlexboxLayout.prototype[flexbox_layout_common_1.alignContentProperty.setNative] = function (alignContent) {
        this.nativeViewProtected.setAlignContent(alignContentMap[alignContent]);
    };
    FlexboxLayout.prototype._updateNativeLayoutParams = function (child) {
        _super.prototype._updateNativeLayoutParams.call(this, child);
        var lp = child.nativeViewProtected.getLayoutParams();
        var style = child.style;
        lp.order = style.order;
        lp.flexGrow = style.flexGrow;
        lp.flexShrink = style.flexShrink;
        lp.wrapBefore = style.flexWrapBefore;
        lp.alignSelf = alignSelfMap[style.alignSelf];
        child.nativeViewProtected.setLayoutParams(lp);
    };
    FlexboxLayout.prototype._setChildMinWidthNative = function (child) {
        child._setMinWidthNative(0);
        var nativeView = child.nativeViewProtected;
        var lp = nativeView.getLayoutParams();
        if (lp instanceof widgetLayoutParams) {
            lp.minWidth = flexbox_layout_common_1.Length.toDevicePixels(child.style.minWidth, 0);
            nativeView.setLayoutParams(lp);
        }
    };
    FlexboxLayout.prototype._setChildMinHeightNative = function (child) {
        child._setMinHeightNative(0);
        var nativeView = child.nativeViewProtected;
        var lp = nativeView.getLayoutParams();
        if (lp instanceof widgetLayoutParams) {
            lp.minHeight = flexbox_layout_common_1.Length.toDevicePixels(child.style.minHeight, 0);
            nativeView.setLayoutParams(lp);
        }
    };
    return FlexboxLayout;
}(flexbox_layout_common_1.FlexboxLayoutBase));
exports.FlexboxLayout = FlexboxLayout;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=flexbox-layout.android.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var switch_common_1 = __webpack_require__(40);
__export(__webpack_require__(40));
var CheckedChangeListener;
function initializeCheckedChangeListener() {
    if (CheckedChangeListener) {
        return;
    }
    var CheckedChangeListenerImpl = (function (_super) {
        __extends(CheckedChangeListenerImpl, _super);
        function CheckedChangeListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        CheckedChangeListenerImpl.prototype.onCheckedChanged = function (buttonView, isChecked) {
            var owner = this.owner;
            switch_common_1.checkedProperty.nativeValueChange(owner, isChecked);
        };
        CheckedChangeListenerImpl = __decorate([
            Interfaces([android.widget.CompoundButton.OnCheckedChangeListener])
        ], CheckedChangeListenerImpl);
        return CheckedChangeListenerImpl;
    }(java.lang.Object));
    CheckedChangeListener = CheckedChangeListenerImpl;
}
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.createNativeView = function () {
        initializeCheckedChangeListener();
        var nativeView = new android.widget.Switch(this._context);
        var listener = new CheckedChangeListener(this);
        nativeView.setOnCheckedChangeListener(listener);
        nativeView.listener = listener;
        return nativeView;
    };
    Switch.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = this;
    };
    Switch.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    Switch.prototype[switch_common_1.checkedProperty.getDefault] = function () {
        return false;
    };
    Switch.prototype[switch_common_1.checkedProperty.setNative] = function (value) {
        this.nativeViewProtected.setChecked(value);
    };
    Switch.prototype[switch_common_1.colorProperty.getDefault] = function () {
        return -1;
    };
    Switch.prototype[switch_common_1.colorProperty.setNative] = function (value) {
        if (value instanceof switch_common_1.Color) {
            this.nativeViewProtected.getThumbDrawable().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        }
        else {
            this.nativeViewProtected.getThumbDrawable().clearColorFilter();
        }
    };
    Switch.prototype[switch_common_1.backgroundColorProperty.getDefault] = function () {
        return -1;
    };
    Switch.prototype[switch_common_1.backgroundColorProperty.setNative] = function (value) {
        if (value instanceof switch_common_1.Color) {
            this.nativeViewProtected.getTrackDrawable().setColorFilter(value.android, android.graphics.PorterDuff.Mode.SRC_IN);
        }
        else {
            this.nativeViewProtected.getTrackDrawable().clearColorFilter();
        }
    };
    Switch.prototype[switch_common_1.backgroundInternalProperty.getDefault] = function () {
        return null;
    };
    Switch.prototype[switch_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return Switch;
}(switch_common_1.SwitchBase));
exports.Switch = Switch;
//# sourceMappingURL=switch.android.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var text_field_common_1 = __webpack_require__(43);
__export(__webpack_require__(43));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextField.prototype._configureEditText = function (editText) {
        editText.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_NORMAL | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES | android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
        editText.setLines(1);
        editText.setMaxLines(1);
        editText.setHorizontallyScrolling(true);
    };
    TextField.prototype._onReturnPress = function () {
        this.notify({ eventName: TextField.returnPressEvent, object: this });
    };
    TextField.prototype[text_field_common_1.secureProperty.setNative] = function () {
        this.setSecureAndKeyboardType();
    };
    TextField.prototype[text_field_common_1.keyboardTypeProperty.setNative] = function () {
        this.setSecureAndKeyboardType();
    };
    TextField.prototype.setSecureAndKeyboardType = function () {
        var inputType;
        if (this.secure) {
            if (this.keyboardType === "number") {
                inputType = android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_VARIATION_PASSWORD;
            }
            else {
                inputType = android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD;
            }
        }
        else {
            inputType = android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_NORMAL;
            if (this.autocorrect) {
                inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_AUTO_COMPLETE;
                inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_AUTO_CORRECT;
                inputType = inputType & ~android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS;
            }
            switch (this.autocapitalizationType) {
                case "words":
                    inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_CAP_WORDS;
                    break;
                case "sentences":
                    inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES;
                    break;
                case "allcharacters":
                    inputType = inputType | android.text.InputType.TYPE_TEXT_FLAG_CAP_CHARACTERS;
                    break;
                default:
                    break;
            }
            switch (this.keyboardType) {
                case "datetime":
                    inputType = android.text.InputType.TYPE_CLASS_DATETIME | android.text.InputType.TYPE_DATETIME_VARIATION_NORMAL;
                    break;
                case "phone":
                    inputType = android.text.InputType.TYPE_CLASS_PHONE;
                    break;
                case "number":
                    inputType = android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_VARIATION_NORMAL | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED | android.text.InputType.TYPE_NUMBER_FLAG_DECIMAL;
                    break;
                case "url":
                    inputType = android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_URI;
                    break;
                case "email":
                    inputType = android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS;
                    break;
                default:
                    break;
            }
        }
        this._setInputType(inputType);
    };
    TextField.prototype[text_field_common_1.whiteSpaceProperty.getDefault] = function () {
        return "nowrap";
    };
    TextField.prototype[text_field_common_1.whiteSpaceProperty.setNative] = function (value) {
    };
    return TextField;
}(text_field_common_1.TextFieldBase));
exports.TextField = TextField;
TextField.prototype._isSingleLine = true;
//# sourceMappingURL=text-field.android.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var editable_text_base_1 = __webpack_require__(98);
__export(__webpack_require__(1));
var TextView = (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextView.prototype._configureEditText = function (editText) {
        editText.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_NORMAL | android.text.InputType.TYPE_TEXT_FLAG_CAP_SENTENCES | android.text.InputType.TYPE_TEXT_FLAG_MULTI_LINE | android.text.InputType.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
        editText.setGravity(android.view.Gravity.TOP | android.view.Gravity.START);
    };
    TextView.prototype.resetNativeView = function () {
        _super.prototype.resetNativeView.call(this);
        this.nativeViewProtected.setGravity(android.view.Gravity.TOP | android.view.Gravity.START);
    };
    return TextView;
}(editable_text_base_1.EditableTextBase));
exports.TextView = TextView;
TextView.prototype.recycleNativeView = "auto";
//# sourceMappingURL=text-view.android.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("../editable-text-base");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var time_picker_common_1 = __webpack_require__(44);
__export(__webpack_require__(44));
var TimeChangedListener;
function initializeTimeChangedListener() {
    if (TimeChangedListener) {
        return;
    }
    apiLevel = android.os.Build.VERSION.SDK_INT;
    var TimeChangedListenerImpl = (function (_super) {
        __extends(TimeChangedListenerImpl, _super);
        function TimeChangedListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        TimeChangedListenerImpl.prototype.onTimeChanged = function (picker, hour, minute) {
            var timePicker = this.owner;
            if (timePicker.updatingNativeValue) {
                return;
            }
            var validTime = time_picker_common_1.getValidTime(timePicker, hour, minute);
            time_picker_common_1.timeProperty.nativeValueChange(timePicker, new Date(0, 0, 0, validTime.hour, validTime.minute));
        };
        TimeChangedListenerImpl = __decorate([
            Interfaces([android.widget.TimePicker.OnTimeChangedListener])
        ], TimeChangedListenerImpl);
        return TimeChangedListenerImpl;
    }(java.lang.Object));
    TimeChangedListener = TimeChangedListenerImpl;
}
var apiLevel;
var TimePicker = (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePicker.prototype.createNativeView = function () {
        initializeTimeChangedListener();
        var nativeView = new android.widget.TimePicker(this._context);
        var listener = new TimeChangedListener(this);
        nativeView.setOnTimeChangedListener(listener);
        nativeView.listener = listener;
        nativeView.calendar = java.util.Calendar.getInstance();
        return nativeView;
    };
    TimePicker.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = this;
        var calendar = nativeView.calendar;
        var hour = time_picker_common_1.hourProperty.isSet(this) ? this.hour : calendar.get(java.util.Calendar.HOUR_OF_DAY);
        var minute = time_picker_common_1.minuteProperty.isSet(this) ? this.minute : calendar.get(java.util.Calendar.MINUTE);
        var validTime = time_picker_common_1.getValidTime(this, hour, minute);
        if (!time_picker_common_1.timeProperty.isSet(this)) {
            this.time = new Date(0, 0, 0, validTime.hour, validTime.minute);
        }
    };
    TimePicker.prototype[time_picker_common_1.minuteProperty.setNative] = function (value) {
        this.updatingNativeValue = true;
        try {
            if (apiLevel >= 23) {
                this.nativeViewProtected.setMinute(value);
            }
            else {
                this.nativeViewProtected.setCurrentMinute(new java.lang.Integer(value));
            }
        }
        finally {
            this.updatingNativeValue = false;
        }
    };
    TimePicker.prototype[time_picker_common_1.hourProperty.setNative] = function (value) {
        this.updatingNativeValue = true;
        try {
            if (apiLevel >= 23) {
                this.nativeViewProtected.setHour(value);
            }
            else {
                this.nativeViewProtected.setCurrentHour(new java.lang.Integer(value));
            }
        }
        finally {
            this.updatingNativeValue = false;
        }
    };
    return TimePicker;
}(time_picker_common_1.TimePickerBase));
exports.TimePicker = TimePicker;
//# sourceMappingURL=time-picker.android.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var web_view_common_1 = __webpack_require__(45);
__export(__webpack_require__(45));
var WebViewClient;
function initializeWebViewClient() {
    if (WebViewClient) {
        return;
    }
    var WebViewClientImpl = (function (_super) {
        __extends(WebViewClientImpl, _super);
        function WebViewClientImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        WebViewClientImpl.prototype.shouldOverrideUrlLoading = function (view, url) {
            if (web_view_common_1.traceEnabled()) {
                web_view_common_1.traceWrite("WebViewClientClass.shouldOverrideUrlLoading(" + url + ")", web_view_common_1.traceCategories.Debug);
            }
            return false;
        };
        WebViewClientImpl.prototype.onPageStarted = function (view, url, favicon) {
            _super.prototype.onPageStarted.call(this, view, url, favicon);
            var owner = this.owner;
            if (owner) {
                if (web_view_common_1.traceEnabled()) {
                    web_view_common_1.traceWrite("WebViewClientClass.onPageStarted(" + url + ", " + favicon + ")", web_view_common_1.traceCategories.Debug);
                }
                owner._onLoadStarted(url, undefined);
            }
        };
        WebViewClientImpl.prototype.onPageFinished = function (view, url) {
            _super.prototype.onPageFinished.call(this, view, url);
            var owner = this.owner;
            if (owner) {
                if (web_view_common_1.traceEnabled()) {
                    web_view_common_1.traceWrite("WebViewClientClass.onPageFinished(" + url + ")", web_view_common_1.traceCategories.Debug);
                }
                owner._onLoadFinished(url, undefined);
            }
        };
        WebViewClientImpl.prototype.onReceivedError = function () {
            var view = arguments[0];
            if (arguments.length === 4) {
                var errorCode = arguments[1];
                var description = arguments[2];
                var failingUrl = arguments[3];
                _super.prototype.onReceivedError.call(this, view, errorCode, description, failingUrl);
                var owner = this.owner;
                if (owner) {
                    if (web_view_common_1.traceEnabled()) {
                        web_view_common_1.traceWrite("WebViewClientClass.onReceivedError(" + errorCode + ", " + description + ", " + failingUrl + ")", web_view_common_1.traceCategories.Debug);
                    }
                    owner._onLoadFinished(failingUrl, description + "(" + errorCode + ")");
                }
            }
            else {
                var request = arguments[1];
                var error = arguments[2];
                _super.prototype.onReceivedError.call(this, view, request, error);
                var owner = this.owner;
                if (owner) {
                    if (web_view_common_1.traceEnabled()) {
                        web_view_common_1.traceWrite("WebViewClientClass.onReceivedError(" + error.getErrorCode() + ", " + error.getDescription() + ", " + (error.getUrl && error.getUrl()) + ")", web_view_common_1.traceCategories.Debug);
                    }
                    owner._onLoadFinished(error.getUrl && error.getUrl(), error.getDescription() + "(" + error.getErrorCode() + ")");
                }
            }
        };
        return WebViewClientImpl;
    }(android.webkit.WebViewClient));
    ;
    WebViewClient = WebViewClientImpl;
}
var WebView = (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebView.prototype.createNativeView = function () {
        initializeWebViewClient();
        var nativeView = new android.webkit.WebView(this._context);
        nativeView.getSettings().setJavaScriptEnabled(true);
        nativeView.getSettings().setBuiltInZoomControls(true);
        var client = new WebViewClient(this);
        nativeView.setWebViewClient(client);
        nativeView.client = client;
        return nativeView;
    };
    WebView.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        this.nativeViewProtected.client.owner = this;
    };
    WebView.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.destroy();
        }
        nativeView.client.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    WebView.prototype._loadUrl = function (src) {
        var nativeView = this.nativeViewProtected;
        if (!nativeView) {
            return;
        }
        nativeView.loadUrl(src);
    };
    WebView.prototype._loadData = function (src) {
        var nativeView = this.nativeViewProtected;
        if (!nativeView) {
            return;
        }
        var baseUrl = "file:///" + web_view_common_1.knownFolders.currentApp().path + "/";
        nativeView.loadDataWithBaseURL(baseUrl, src, "text/html", "utf-8", null);
    };
    Object.defineProperty(WebView.prototype, "canGoBack", {
        get: function () {
            return this.nativeViewProtected.canGoBack();
        },
        enumerable: true,
        configurable: true
    });
    WebView.prototype.stopLoading = function () {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            nativeView.stopLoading();
        }
    };
    Object.defineProperty(WebView.prototype, "canGoForward", {
        get: function () {
            var nativeView = this.nativeViewProtected;
            if (nativeView) {
                return nativeView.canGoForward();
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    WebView.prototype.goBack = function () {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.goBack();
        }
    };
    WebView.prototype.goForward = function () {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.goForward();
        }
    };
    WebView.prototype.reload = function () {
        var nativeView = this.nativeViewProtected;
        if (nativeView) {
            return nativeView.reload();
        }
    };
    return WebView;
}(web_view_common_1.WebViewBase));
exports.WebView = WebView;
//# sourceMappingURL=web-view.android.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var wrap_layout_common_1 = __webpack_require__(46);
__export(__webpack_require__(46));
var WrapLayout = (function (_super) {
    __extends(WrapLayout, _super);
    function WrapLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WrapLayout.prototype.createNativeView = function () {
        return new org.nativescript.widgets.WrapLayout(this._context);
    };
    WrapLayout.prototype[wrap_layout_common_1.orientationProperty.setNative] = function (value) {
        this.nativeViewProtected.setOrientation(value === "vertical" ? org.nativescript.widgets.Orientation.vertical : org.nativescript.widgets.Orientation.horizontal);
    };
    WrapLayout.prototype[wrap_layout_common_1.itemWidthProperty.setNative] = function (value) {
        this.nativeViewProtected.setItemWidth(wrap_layout_common_1.Length.toDevicePixels(value, -1));
    };
    WrapLayout.prototype[wrap_layout_common_1.itemHeightProperty.setNative] = function (value) {
        this.nativeViewProtected.setItemHeight(wrap_layout_common_1.Length.toDevicePixels(value, -1));
    };
    return WrapLayout;
}(wrap_layout_common_1.WrapLayoutBase));
exports.WrapLayout = WrapLayout;
//# sourceMappingURL=wrap-layout.android.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(103);
exports.Span = span_1.Span;
var observable_1 = __webpack_require__(104);
var observable_array_1 = __webpack_require__(105);
var view_1 = __webpack_require__(47);
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
/* 103 */
/***/ (function(module, exports) {

module.exports = require("./span");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("../data/observable");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("../data/observable-array");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(47);
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
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_nativescript_vue_loader_lib_selector_type_script_index_0_native_true_bustCache_App_vue__ = __webpack_require__(49);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_nativescript_vue_loader_lib_template_compiler_index_id_data_v_c1862d7c_hasScoped_false_buble_transforms_node_modules_nativescript_vue_loader_lib_selector_type_template_index_0_native_true_bustCache_App_vue__ = __webpack_require__(110);
var disposed = false
var normalizeComponent = __webpack_require__(48)
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
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_nativescript_vue_loader_lib_selector_type_script_index_0_native_true_bustCache_ImageGallery_vue__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_nativescript_vue_loader_lib_template_compiler_index_id_data_v_692b54d2_hasScoped_false_buble_transforms_node_modules_nativescript_vue_loader_lib_selector_type_template_index_0_native_true_bustCache_ImageGallery_vue__ = __webpack_require__(109);
var disposed = false
var normalizeComponent = __webpack_require__(48)
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
/* 109 */
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
/* 110 */
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