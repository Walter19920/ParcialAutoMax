import { $i as unwrapSafeValue, Ac as InjectionToken, Bt as computed, Cr as TracingService, Ec as IMAGE_CONFIG_DEFAULTS, Ei as performanceMarkFeature, El as signal, En as ElementRef, Fl as ɵɵinject, Fn as Injectable, Hl as require_cjs, Hs as ɵɵstyleProp, In as Input, Lt as ResourceImpl, Ml as ɵɵdefineInjector, O as booleanAttribute, Pn as Inject, Qn as Optional, Sc as EnvironmentInjector, Tc as IMAGE_CONFIG, Vt as encapsulateResourceError, Wc as PendingTasks, Wi as setClassMetadata, Wt as linkedSignal, Yc as TransferState, Yt as APP_BOOTSTRAP_LISTENER, ao as ɵɵdefineNgModule, dr as Service, fc as require_operators, fl as inject, fn as Console, gc as CSP_NONCE, io as ɵɵdefineDirective, ir as Renderer2, jc as Injector, jl as ɵɵdefineInjectable, jo as ɵɵgetInheritedFactory, kl as truncateMiddle, la as ɵɵNgOnChangesFeature, ol as formatRuntimeError, qc as RuntimeError, qn as NgModule, qt as untracked, r as ChangeDetectorRef, rt as numberAttribute, so as ɵɵdefineService, tl as assertInInjectionContext, tn as ApplicationRef, vc as DOCUMENT, vl as makeEnvironmentProviders, wl as runInInjectionContext, wn as Directive, yc as DestroyRef, yl as makeStateKey, zc as NgZone } from "./core-YAiL6VzY.js";
//#region node_modules/@angular/common/fesm2022/_platform_location-chunk.mjs
var import_cjs = require_cjs();
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var _DOM = null;
function getDOM() {
	return _DOM;
}
function setRootDomAdapter(adapter) {
	_DOM ??= adapter;
}
var DomAdapter = class {};
var PlatformLocation = class PlatformLocation {
	historyGo(relativePosition) {
		throw new Error(ngDevMode ? "Not implemented" : "");
	}
	static ɵfac = function PlatformLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PlatformLocation)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: PlatformLocation,
		factory: () => (() => inject(BrowserPlatformLocation))(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformLocation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => inject(BrowserPlatformLocation)
		}]
	}], null, null);
})();
var LOCATION_INITIALIZED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "Location Initialized" : "");
var BrowserPlatformLocation = class BrowserPlatformLocation extends PlatformLocation {
	_location;
	_history;
	_doc = inject(DOCUMENT);
	constructor() {
		super();
		this._location = window.location;
		this._history = window.history;
	}
	getBaseHrefFromDOM() {
		return getDOM().getBaseHref(this._doc);
	}
	onPopState(fn) {
		const window = getDOM().getGlobalEventTarget(this._doc, "window");
		window.addEventListener("popstate", fn, false);
		return () => window.removeEventListener("popstate", fn);
	}
	onHashChange(fn) {
		const window = getDOM().getGlobalEventTarget(this._doc, "window");
		window.addEventListener("hashchange", fn, false);
		return () => window.removeEventListener("hashchange", fn);
	}
	get href() {
		return this._location.href;
	}
	get protocol() {
		return this._location.protocol;
	}
	get hostname() {
		return this._location.hostname;
	}
	get port() {
		return this._location.port;
	}
	get pathname() {
		return this._location.pathname;
	}
	get search() {
		return this._location.search;
	}
	get hash() {
		return this._location.hash;
	}
	set pathname(newPath) {
		this._location.pathname = newPath;
	}
	pushState(state, title, url) {
		this._history.pushState(state, title, url);
	}
	replaceState(state, title, url) {
		this._history.replaceState(state, title, url);
	}
	forward() {
		this._history.forward();
	}
	back() {
		this._history.back();
	}
	historyGo(relativePosition = 0) {
		this._history.go(relativePosition);
	}
	getState() {
		return this._history.state;
	}
	static ɵfac = function BrowserPlatformLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserPlatformLocation)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BrowserPlatformLocation,
		factory: () => (() => new BrowserPlatformLocation())(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserPlatformLocation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => new BrowserPlatformLocation()
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/_location-chunk.mjs
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function joinWithSlash(start, end) {
	if (!start) return end;
	if (!end) return start;
	if (start.endsWith("/")) return end.startsWith("/") ? start + end.slice(1) : start + end;
	return end.startsWith("/") ? start + end : `${start}/${end}`;
}
function stripTrailingSlash(url) {
	const pathEndIdx = url.search(/#|\?|$/);
	return url[pathEndIdx - 1] === "/" ? url.slice(0, pathEndIdx - 1) + url.slice(pathEndIdx) : url;
}
function normalizeQueryParams(params) {
	return params && params[0] !== "?" ? `?${params}` : params;
}
var LocationStrategy = class LocationStrategy {
	historyGo(relativePosition) {
		throw new Error(ngDevMode ? "Not implemented" : "");
	}
	static ɵfac = function LocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LocationStrategy)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: LocationStrategy,
		factory: () => (() => inject(PathLocationStrategy))(),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationStrategy, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: () => inject(PathLocationStrategy)
		}]
	}], null, null);
})();
var APP_BASE_HREF = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "appBaseHref" : "");
var PathLocationStrategy = class PathLocationStrategy extends LocationStrategy {
	_platformLocation;
	_baseHref;
	_removeListenerFns = [];
	constructor(_platformLocation, href) {
		super();
		this._platformLocation = _platformLocation;
		this._baseHref = href ?? this._platformLocation.getBaseHrefFromDOM() ?? inject(DOCUMENT).location?.origin ?? "";
	}
	ngOnDestroy() {
		while (this._removeListenerFns.length) this._removeListenerFns.pop()();
	}
	onPopState(fn) {
		this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
	}
	getBaseHref() {
		return this._baseHref;
	}
	prepareExternalUrl(internal) {
		return joinWithSlash(this._baseHref, internal);
	}
	path(includeHash = false) {
		const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search);
		const hash = this._platformLocation.hash;
		return hash && includeHash ? `${pathname}${hash}` : pathname;
	}
	pushState(state, title, url, queryParams) {
		const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
		this._platformLocation.pushState(state, title, externalUrl);
	}
	replaceState(state, title, url, queryParams) {
		const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
		this._platformLocation.replaceState(state, title, externalUrl);
	}
	forward() {
		this._platformLocation.forward();
	}
	back() {
		this._platformLocation.back();
	}
	getState() {
		return this._platformLocation.getState();
	}
	historyGo(relativePosition = 0) {
		this._platformLocation.historyGo?.(relativePosition);
	}
	static ɵfac = function PathLocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PathLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: PathLocationStrategy,
		factory: PathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: PlatformLocation }, {
		type: void 0,
		decorators: [{ type: Optional }, {
			type: Inject,
			args: [APP_BASE_HREF]
		}]
	}], null);
})();
var NoTrailingSlashPathLocationStrategy = class NoTrailingSlashPathLocationStrategy extends PathLocationStrategy {
	prepareExternalUrl(internal) {
		const path = extractUrlPath(internal);
		if (path.endsWith("/") && path.length > 1) internal = path.slice(0, -1) + internal.slice(path.length);
		return super.prepareExternalUrl(internal);
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵNoTrailingSlashPathLocationStrategy_BaseFactory = void 0;
		return function NoTrailingSlashPathLocationStrategy_Factory(__ngFactoryType__) {
			return (ɵNoTrailingSlashPathLocationStrategy_BaseFactory || (ɵNoTrailingSlashPathLocationStrategy_BaseFactory = ɵɵgetInheritedFactory(NoTrailingSlashPathLocationStrategy)))(__ngFactoryType__ || NoTrailingSlashPathLocationStrategy);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: NoTrailingSlashPathLocationStrategy,
		factory: NoTrailingSlashPathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoTrailingSlashPathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var TrailingSlashPathLocationStrategy = class TrailingSlashPathLocationStrategy extends PathLocationStrategy {
	prepareExternalUrl(internal) {
		const path = extractUrlPath(internal);
		if (!path.endsWith("/")) internal = path + "/" + internal.slice(path.length);
		return super.prepareExternalUrl(internal);
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵTrailingSlashPathLocationStrategy_BaseFactory = void 0;
		return function TrailingSlashPathLocationStrategy_Factory(__ngFactoryType__) {
			return (ɵTrailingSlashPathLocationStrategy_BaseFactory || (ɵTrailingSlashPathLocationStrategy_BaseFactory = ɵɵgetInheritedFactory(TrailingSlashPathLocationStrategy)))(__ngFactoryType__ || TrailingSlashPathLocationStrategy);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: TrailingSlashPathLocationStrategy,
		factory: TrailingSlashPathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrailingSlashPathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
function extractUrlPath(url) {
	const questionMarkOrHashIndex = url.search(/[?#]/);
	const pathEnd = questionMarkOrHashIndex > -1 ? questionMarkOrHashIndex : url.length;
	return url.slice(0, pathEnd);
}
var Location = class Location {
	_subject = new import_cjs.Subject();
	_basePath;
	_locationStrategy;
	_urlChangeListeners = [];
	_urlChangeSubscription = null;
	constructor(locationStrategy) {
		this._locationStrategy = locationStrategy;
		const baseHref = this._locationStrategy.getBaseHref();
		this._basePath = _stripOrigin(stripTrailingSlash(_stripIndexHtml(baseHref)));
		this._locationStrategy.onPopState((ev) => {
			const popStateEvent = {
				"url": this.path(true),
				"pop": true,
				"state": ev.state,
				"type": ev.type
			};
			if (ev.hasUAVisualTransition) popStateEvent.hasUAVisualTransition = true;
			this._subject.next(popStateEvent);
		});
	}
	ngOnDestroy() {
		this._urlChangeSubscription?.unsubscribe();
		this._urlChangeListeners = [];
	}
	path(includeHash = false) {
		return this.normalize(this._locationStrategy.path(includeHash));
	}
	getState() {
		return this._locationStrategy.getState();
	}
	isCurrentPathEqualTo(path, query = "") {
		return this.path() == this.normalize(path + normalizeQueryParams(query));
	}
	normalize(url) {
		return Location.stripTrailingSlash(_stripBasePath(this._basePath, _stripIndexHtml(url)));
	}
	prepareExternalUrl(url) {
		if (url && url[0] !== "/") url = "/" + url;
		return this._locationStrategy.prepareExternalUrl(url);
	}
	go(path, query = "", state = null) {
		this._locationStrategy.pushState(state, "", path, query);
		this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
	}
	replaceState(path, query = "", state = null) {
		this._locationStrategy.replaceState(state, "", path, query);
		this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
	}
	forward() {
		this._locationStrategy.forward();
	}
	back() {
		this._locationStrategy.back();
	}
	historyGo(relativePosition = 0) {
		this._locationStrategy.historyGo?.(relativePosition);
	}
	onUrlChange(fn) {
		this._urlChangeListeners.push(fn);
		this._urlChangeSubscription ??= this.subscribe((v) => {
			this._notifyUrlChangeListeners(v.url, v.state);
		});
		return () => {
			const fnIndex = this._urlChangeListeners.indexOf(fn);
			this._urlChangeListeners.splice(fnIndex, 1);
			if (this._urlChangeListeners.length === 0) {
				this._urlChangeSubscription?.unsubscribe();
				this._urlChangeSubscription = null;
			}
		};
	}
	_notifyUrlChangeListeners(url = "", state) {
		this._urlChangeListeners.forEach((fn) => fn(url, state));
	}
	subscribe(onNext, onThrow, onReturn) {
		return this._subject.subscribe({
			next: onNext,
			error: onThrow ?? void 0,
			complete: onReturn ?? void 0
		});
	}
	static normalizeQueryParams = normalizeQueryParams;
	static joinWithSlash = joinWithSlash;
	static stripTrailingSlash = stripTrailingSlash;
	static ɵfac = function Location_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Location)(ɵɵinject(LocationStrategy));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: Location,
		factory: () => createLocation(),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Location, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: createLocation
		}]
	}], () => [{ type: LocationStrategy }], null);
})();
function createLocation() {
	return new Location(ɵɵinject(LocationStrategy));
}
function _stripBasePath(basePath, url) {
	if (!basePath || !url.startsWith(basePath)) return url;
	const strippedUrl = url.substring(basePath.length);
	if (strippedUrl === "" || [
		"/",
		";",
		"?",
		"#"
	].includes(strippedUrl[0])) return strippedUrl;
	return url;
}
function _stripIndexHtml(url) {
	return url.replace(/\/index\.html$/, "");
}
function _stripOrigin(baseHref) {
	if ((/* @__PURE__ */ new RegExp("^(https?:)?//")).test(baseHref)) {
		const [, pathname] = baseHref.split(/\/\/[^\/]+/);
		return pathname;
	}
	return baseHref;
}
//#endregion
//#region node_modules/@angular/common/fesm2022/_platform_navigation-chunk.mjs
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var PRECOMMIT_HANDLER_SUPPORTED = new InjectionToken("", { factory: () => {
	return typeof window !== "undefined" && typeof window.NavigationPrecommitController !== "undefined";
} });
var PlatformNavigation = class PlatformNavigation {
	static ɵfac = function PlatformNavigation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PlatformNavigation)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: PlatformNavigation,
		factory: () => (() => window.navigation)(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformNavigation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => window.navigation
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/_xhr-chunk.mjs
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function parseCookieValue(cookieStr, name) {
	name = encodeURIComponent(name);
	for (const cookie of cookieStr.split(";")) {
		const eqIndex = cookie.indexOf("=");
		const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ""] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
		if (cookieName.trim() !== name) continue;
		let value = cookieValue;
		try {
			value = decodeURIComponent(cookieValue);
		} catch {}
		if (value.length > 1 && value[0] === "\"" && value[value.length - 1] === "\"") value = value.slice(1, -1);
		return value;
	}
	return null;
}
var BrowserXhr = class BrowserXhr {
	build() {
		return new XMLHttpRequest();
	}
	static ɵfac = function BrowserXhr_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserXhr)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: BrowserXhr,
		factory: BrowserXhr.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{ type: Service }], null, null);
})();
var XhrFactory = class XhrFactory {
	static ɵfac = function XhrFactory_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || XhrFactory)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: XhrFactory,
		factory: function XhrFactory_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new (__ngFactoryType__ || XhrFactory)();
			else __ngConditionalFactory__ = ɵɵinject(BrowserXhr);
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XhrFactory, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useExisting: BrowserXhr
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/common.mjs
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var NavigationAdapterForLocation = class NavigationAdapterForLocation extends Location {
	navigation = inject(PlatformNavigation);
	destroyRef = inject(DestroyRef);
	constructor() {
		super(inject(LocationStrategy));
		this.registerNavigationListeners();
	}
	registerNavigationListeners() {
		const currentEntryChangeListener = () => {
			this._notifyUrlChangeListeners(this.path(true), this.getState());
		};
		this.navigation.addEventListener("currententrychange", currentEntryChangeListener);
		this.destroyRef.onDestroy(() => {
			this.navigation.removeEventListener("currententrychange", currentEntryChangeListener);
		});
	}
	getState() {
		return this.navigation.currentEntry?.getState();
	}
	replaceState(path, query = "", state = null) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(query));
		this.navigation.navigate(url, {
			state,
			history: "replace"
		});
	}
	go(path, query = "", state = null) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(query));
		this.navigation.navigate(url, {
			state,
			history: "push"
		});
	}
	back() {
		this.navigation.back();
	}
	forward() {
		this.navigation.forward();
	}
	onUrlChange(fn) {
		this._urlChangeListeners.push(fn);
		return () => {
			const fnIndex = this._urlChangeListeners.indexOf(fn);
			this._urlChangeListeners.splice(fnIndex, 1);
		};
	}
	static ɵfac = function NavigationAdapterForLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NavigationAdapterForLocation)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: NavigationAdapterForLocation,
		factory: NavigationAdapterForLocation.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationAdapterForLocation, [{ type: Injectable }], () => [], null);
})();
var PLATFORM_BROWSER_ID = "browser";
var PLATFORM_SERVER_ID = "server";
var ViewportScroller = class ViewportScroller {
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ViewportScroller,
		providedIn: "root",
		factory: () => new NullViewportScroller()
	});
};
var NullViewportScroller = class {
	setOffset(offset) {}
	getScrollPosition() {
		return [0, 0];
	}
	scrollToPosition(position) {}
	scrollToAnchor(anchor, options) {}
	setHistoryScrollRestoration(scrollRestoration) {}
};
function getUrl(src, win) {
	return isAbsoluteUrl(src) ? new URL(src) : new URL(src, win.location.href);
}
function isAbsoluteUrl(src) {
	return /^https?:\/\//.test(src);
}
function extractHostname(url) {
	return isAbsoluteUrl(url) ? new URL(url).hostname : url;
}
function escapeCssUrl(input) {
	return input.replace(/\\/g, "\\\\").replace(/[\n\r\f\0]/g, "").replace(/"/g, "\\\"");
}
var noopImageLoader = (config) => config.src;
var IMAGE_LOADER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ImageLoader" : "", { factory: () => noopImageLoader });
ngDevMode;
var cloudinaryLoaderInfo = {
	name: "Cloudinary",
	testUrl: isCloudinaryUrl
};
var CLOUDINARY_LOADER_REGEX = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
function isCloudinaryUrl(url) {
	return CLOUDINARY_LOADER_REGEX.test(url);
}
ngDevMode;
var imageKitLoaderInfo = {
	name: "ImageKit",
	testUrl: isImageKitUrl
};
var IMAGE_KIT_LOADER_REGEX = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
function isImageKitUrl(url) {
	return IMAGE_KIT_LOADER_REGEX.test(url);
}
ngDevMode;
var imgixLoaderInfo = {
	name: "Imgix",
	testUrl: isImgixUrl
};
var IMGIX_LOADER_REGEX = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
function isImgixUrl(url) {
	return IMGIX_LOADER_REGEX.test(url);
}
ngDevMode;
var netlifyLoaderInfo = {
	name: "Netlify",
	testUrl: isNetlifyUrl
};
var NETLIFY_LOADER_REGEX = /https?\:\/\/[^\/]+\.netlify\.app\/.+/;
function isNetlifyUrl(url) {
	return NETLIFY_LOADER_REGEX.test(url);
}
function imgDirectiveDetails(ngSrc, includeNgSrc = true) {
	return `The NgOptimizedImage directive ${includeNgSrc ? `(activated on an <img> element with the \`ngSrc="${ngSrc}"\`) ` : ""}has detected that`;
}
function assertDevMode(checkName) {
	if (!ngDevMode) throw new RuntimeError(2958, `Unexpected invocation of the ${checkName} in the prod mode. Please make sure that the prod mode is enabled for production builds.`);
}
var LCPImageObserver = class LCPImageObserver {
	images = /* @__PURE__ */ new Map();
	window = inject(DOCUMENT).defaultView;
	observer = null;
	constructor() {
		assertDevMode("LCP checker");
	}
	initPerformanceObserver() {
		const observer = new PerformanceObserver((entryList) => {
			const entries = entryList.getEntries();
			if (entries.length === 0) return;
			const imgSrc = entries[entries.length - 1].element?.src ?? "";
			if (imgSrc.startsWith("data:") || imgSrc.startsWith("blob:")) return;
			const img = this.images.get(imgSrc);
			if (!img) return;
			if (!img.priority && !img.alreadyWarnedPriority) {
				img.alreadyWarnedPriority = true;
				logMissingPriorityError(imgSrc);
			}
			if (img.modified && !img.alreadyWarnedModified) {
				img.alreadyWarnedModified = true;
				logModifiedWarning(imgSrc);
			}
		});
		observer.observe({
			type: "largest-contentful-paint",
			buffered: true
		});
		return observer;
	}
	registerImage(rewrittenSrc, isPriority) {
		if (!this.observer) return;
		const url = getUrl(rewrittenSrc, this.window).href;
		const existingState = this.images.get(url);
		if (existingState) {
			existingState.priority = existingState.priority || isPriority;
			existingState.count++;
		} else {
			const newObservedImageState = {
				priority: isPriority,
				modified: false,
				alreadyWarnedModified: false,
				alreadyWarnedPriority: false,
				count: 1
			};
			this.images.set(url, newObservedImageState);
		}
	}
	unregisterImage(rewrittenSrc) {
		if (!this.observer) return;
		const url = getUrl(rewrittenSrc, this.window).href;
		const existingState = this.images.get(url);
		if (existingState) {
			existingState.count--;
			if (existingState.count <= 0) this.images.delete(url);
		}
	}
	updateImage(originalSrc, newSrc) {
		if (!this.observer) return;
		const originalUrl = getUrl(originalSrc, this.window).href;
		const newUrl = getUrl(newSrc, this.window).href;
		if (originalUrl === newUrl) return;
		const originalState = this.images.get(originalUrl);
		if (!originalState) return;
		originalState.count--;
		if (originalState.count <= 0) this.images.delete(originalUrl);
		const newState = this.images.get(newUrl);
		if (newState) {
			newState.priority = newState.priority || originalState.priority;
			newState.modified = true;
			newState.alreadyWarnedPriority = newState.alreadyWarnedPriority || originalState.alreadyWarnedPriority;
			newState.alreadyWarnedModified = newState.alreadyWarnedModified || originalState.alreadyWarnedModified;
			newState.count++;
		} else this.images.set(newUrl, {
			priority: originalState.priority,
			modified: true,
			alreadyWarnedModified: originalState.alreadyWarnedModified,
			alreadyWarnedPriority: originalState.alreadyWarnedPriority,
			count: 1
		});
	}
	ngOnDestroy() {
		if (!this.observer) return;
		this.observer.disconnect();
		this.images.clear();
	}
	static ɵfac = function LCPImageObserver_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LCPImageObserver)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: LCPImageObserver,
		factory: LCPImageObserver.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LCPImageObserver, [{ type: Service }], () => [], null);
})();
function logMissingPriorityError(ngSrc) {
	const directiveDetails = imgDirectiveDetails(ngSrc);
	console.error(formatRuntimeError(2955, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`));
}
function logModifiedWarning(ngSrc) {
	const directiveDetails = imgDirectiveDetails(ngSrc);
	console.warn(formatRuntimeError(2964, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element and has had its "ngSrc" attribute modified. This can cause slower loading performance. It is recommended not to modify the "ngSrc" property on any image which could be the LCP element.`));
}
var INTERNAL_PRECONNECT_CHECK_BLOCKLIST = /* @__PURE__ */ new Set([
	"localhost",
	"127.0.0.1",
	"0.0.0.0",
	"[::1]"
]);
var PRECONNECT_CHECK_BLOCKLIST = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "PRECONNECT_CHECK_BLOCKLIST" : "");
var PreconnectLinkChecker = class PreconnectLinkChecker {
	document = inject(DOCUMENT);
	preconnectLinks = null;
	alreadySeen = /* @__PURE__ */ new Set();
	window = this.document.defaultView;
	blocklist = new Set(INTERNAL_PRECONNECT_CHECK_BLOCKLIST);
	constructor() {
		assertDevMode("preconnect link checker");
		const blocklist = inject(PRECONNECT_CHECK_BLOCKLIST, { optional: true });
		if (blocklist) this.populateBlocklist(blocklist);
	}
	populateBlocklist(origins) {
		if (Array.isArray(origins)) deepForEach(origins, (origin) => {
			this.blocklist.add(extractHostname(origin));
		});
		else this.blocklist.add(extractHostname(origins));
	}
	assertPreconnect(rewrittenSrc, originalNgSrc) {}
	queryPreconnectLinks() {
		const preconnectUrls = /* @__PURE__ */ new Set();
		const links = this.document.querySelectorAll("link[rel=preconnect]");
		for (const link of links) {
			const url = getUrl(link.href, this.window);
			preconnectUrls.add(url.origin);
		}
		return preconnectUrls;
	}
	ngOnDestroy() {
		this.preconnectLinks?.clear();
		this.alreadySeen.clear();
	}
	static ɵfac = function PreconnectLinkChecker_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PreconnectLinkChecker)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: PreconnectLinkChecker,
		factory: PreconnectLinkChecker.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreconnectLinkChecker, [{ type: Service }], () => [], null);
})();
function deepForEach(input, fn) {
	for (let value of input) Array.isArray(value) ? deepForEach(value, fn) : fn(value);
}
var DEFAULT_PRELOADED_IMAGES_LIMIT = 5;
var PRELOADED_IMAGES = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "NG_OPTIMIZED_PRELOADED_IMAGES" : "", { factory: () => /* @__PURE__ */ new Set() });
var PreloadLinkCreator = class PreloadLinkCreator {
	preloadedImages = inject(PRELOADED_IMAGES);
	document = inject(DOCUMENT);
	errorShown = false;
	createPreloadLinkTag(renderer, src, srcset, sizes, crossOrigin) {
		const preloadKey = `${src}:${getCrossOriginMode(crossOrigin)}`;
		if (ngDevMode && !this.errorShown && this.preloadedImages.size >= DEFAULT_PRELOADED_IMAGES_LIMIT) {
			this.errorShown = true;
			console.warn(formatRuntimeError(2961, `The \`NgOptimizedImage\` directive has detected that more than ${DEFAULT_PRELOADED_IMAGES_LIMIT} images were marked as priority. This might negatively affect an overall performance of the page. To fix this, remove the "priority" attribute from images with less priority.`));
		}
		if (this.preloadedImages.has(preloadKey)) return;
		this.preloadedImages.add(preloadKey);
		const preload = renderer.createElement("link");
		renderer.setAttribute(preload, "as", "image");
		renderer.setAttribute(preload, "href", src);
		renderer.setAttribute(preload, "rel", "preload");
		renderer.setAttribute(preload, "fetchpriority", "high");
		if (crossOrigin != null) renderer.setAttribute(preload, "crossorigin", crossOrigin);
		if (sizes) renderer.setAttribute(preload, "imageSizes", sizes);
		if (srcset) renderer.setAttribute(preload, "imageSrcset", srcset);
		renderer.appendChild(this.document.head, preload);
	}
	static ɵfac = function PreloadLinkCreator_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PreloadLinkCreator)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: PreloadLinkCreator,
		factory: PreloadLinkCreator.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadLinkCreator, [{ type: Service }], null, null);
})();
function getCrossOriginMode(crossOrigin) {
	if (crossOrigin == null) return null;
	return crossOrigin.toLowerCase() === "use-credentials" ? "use-credentials" : "anonymous";
}
var BASE64_IMG_MAX_LENGTH_IN_ERROR = 50;
var VALID_WIDTH_DESCRIPTOR_SRCSET = /^((\s*\d+w\s*(,|$)){1,})$/;
var VALID_DENSITY_DESCRIPTOR_SRCSET = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/;
var ABSOLUTE_SRCSET_DENSITY_CAP = 3;
var RECOMMENDED_SRCSET_DENSITY_CAP = 2;
var DENSITY_SRCSET_MULTIPLIERS = [1, 2];
var VIEWPORT_BREAKPOINT_CUTOFF = 640;
var ASPECT_RATIO_TOLERANCE = .1;
var OVERSIZED_IMAGE_TOLERANCE = 1e3;
var FIXED_SRCSET_WIDTH_LIMIT = 1920;
var FIXED_SRCSET_HEIGHT_LIMIT = 1080;
var DATA_URL_WARN_LIMIT = 4e3;
var DATA_URL_ERROR_LIMIT = 1e4;
var BUILT_IN_LOADERS = [
	imgixLoaderInfo,
	imageKitLoaderInfo,
	cloudinaryLoaderInfo,
	netlifyLoaderInfo
];
var NgOptimizedImage = class NgOptimizedImage {
	imageLoader = inject(IMAGE_LOADER);
	config = processConfig(inject(IMAGE_CONFIG));
	renderer = inject(Renderer2);
	imgElement = inject(ElementRef).nativeElement;
	injector = inject(Injector);
	destroyRef = inject(DestroyRef);
	lcpObserver;
	_renderedSrc = null;
	ngSrc;
	ngSrcset;
	sizes;
	width;
	height;
	decoding;
	loading;
	priority = false;
	loaderParams;
	disableOptimizedSrcset = false;
	fill = false;
	placeholder;
	placeholderConfig;
	src;
	srcset;
	constructor() {
		if (ngDevMode) {
			this.lcpObserver = this.injector.get(LCPImageObserver);
			this.destroyRef.onDestroy(() => {
				if (!this.priority && this._renderedSrc !== null) this.lcpObserver.unregisterImage(this._renderedSrc);
			});
		}
		this.destroyRef.onDestroy(() => {
			this.renderer.removeAttribute(this.imgElement, "loading");
		});
	}
	ngOnInit() {
		performanceMarkFeature("NgOptimizedImage");
		if (ngDevMode) {
			const ngZone = this.injector.get(NgZone);
			assertNonEmptyInput(this, "ngSrc", this.ngSrc);
			assertValidNgSrcset(this, this.ngSrcset);
			assertNoConflictingSrc(this);
			if (this.ngSrcset) assertNoConflictingSrcset(this);
			assertNotBase64Image(this);
			assertNotBlobUrl(this);
			if (this.fill) {
				assertEmptyWidthAndHeight(this);
				ngZone.runOutsideAngular(() => assertNonZeroRenderedHeight(this, this.imgElement, this.renderer, this.destroyRef));
			} else {
				assertNonEmptyWidthAndHeight(this);
				if (this.height !== void 0) assertGreaterThanZero(this, this.height, "height");
				if (this.width !== void 0) assertGreaterThanZero(this, this.width, "width");
				ngZone.runOutsideAngular(() => assertNoImageDistortion(this, this.imgElement, this.renderer, this.destroyRef));
			}
			assertValidLoadingInput(this);
			assertValidDecodingInput(this);
			if (!this.ngSrcset) assertNoComplexSizes(this);
			assertValidPlaceholder(this, this.imageLoader);
			assertNotMissingBuiltInLoader(this.ngSrc, this.imageLoader);
			assertNoNgSrcsetWithoutLoader(this, this.imageLoader);
			assertNoLoaderParamsWithoutLoader(this, this.imageLoader);
			ngZone.runOutsideAngular(() => {
				this.lcpObserver.registerImage(this.getRewrittenSrc(), this.priority);
			});
			if (this.priority) this.injector.get(PreconnectLinkChecker).assertPreconnect(this.getRewrittenSrc(), this.ngSrc);
		}
		if (this.placeholder) this.removePlaceholderOnLoad(this.imgElement);
		this.setHostAttributes();
	}
	setHostAttributes() {
		if (this.fill) this.sizes ||= "100vw";
		else {
			this.setHostAttribute("width", this.width.toString());
			this.setHostAttribute("height", this.height.toString());
		}
		this.setHostAttribute("loading", this.getLoadingBehavior());
		this.setHostAttribute("fetchpriority", this.getFetchPriority());
		this.setHostAttribute("decoding", this.getDecoding());
		this.setHostAttribute("ng-img", "true");
		const rewrittenSrcset = this.updateSrcAndSrcset();
		if (this.sizes) {
			if (this.getLoadingBehavior() === "lazy") this.setHostAttribute("sizes", "auto, " + this.sizes);
			else this.setHostAttribute("sizes", this.sizes);
		} else if (this.ngSrcset && VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset) && this.getLoadingBehavior() === "lazy") this.setHostAttribute("sizes", "auto, 100vw");
		if (this.priority) this.injector.get(PreloadLinkCreator).createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), rewrittenSrcset, this.sizes, this.imgElement.getAttribute("crossorigin"));
	}
	ngOnChanges(changes) {
		if (ngDevMode) assertNoPostInitInputChange(this, changes, [
			"ngSrcset",
			"width",
			"height",
			"priority",
			"fill",
			"loading",
			"sizes",
			"loaderParams",
			"disableOptimizedSrcset"
		]);
		if (changes["ngSrc"] && !changes["ngSrc"].isFirstChange()) {
			const oldSrc = this._renderedSrc;
			this.updateSrcAndSrcset(true);
			if (ngDevMode) {
				const newSrc = this._renderedSrc;
				if (oldSrc && newSrc && oldSrc !== newSrc) this.injector.get(NgZone).runOutsideAngular(() => {
					this.lcpObserver.updateImage(oldSrc, newSrc);
				});
			}
		}
		if (ngDevMode && changes["placeholder"]?.currentValue && false);
	}
	getAspectRatio() {
		if (this.width && this.height && this.height !== 0) return this.width / this.height;
		return null;
	}
	callImageLoader(configWithoutCustomParams) {
		let augmentedConfig = configWithoutCustomParams;
		if (this.loaderParams) augmentedConfig.loaderParams = this.loaderParams;
		const ratio = this.getAspectRatio();
		if (ratio !== null && augmentedConfig.width) augmentedConfig.height = Math.round(augmentedConfig.width / ratio);
		return this.imageLoader(augmentedConfig);
	}
	getLoadingBehavior() {
		if (!this.priority && this.loading !== void 0) return this.loading;
		return this.priority ? "eager" : "lazy";
	}
	getFetchPriority() {
		return this.priority ? "high" : "auto";
	}
	getDecoding() {
		if (this.priority) return "sync";
		return this.decoding ?? "auto";
	}
	getRewrittenSrc() {
		if (!this._renderedSrc) {
			const imgConfig = { src: this.ngSrc };
			this._renderedSrc = this.callImageLoader(imgConfig);
		}
		return this._renderedSrc;
	}
	getRewrittenSrcset() {
		const widthSrcSet = VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset);
		return this.ngSrcset.split(",").filter((src) => src !== "").map((srcStr) => {
			srcStr = srcStr.trim();
			const width = widthSrcSet ? parseFloat(srcStr) : parseFloat(srcStr) * this.width;
			return `${this.callImageLoader({
				src: this.ngSrc,
				width
			})} ${srcStr}`;
		}).join(", ");
	}
	getAutomaticSrcset() {
		if (this.sizes) return this.getResponsiveSrcset();
		else return this.getFixedSrcset();
	}
	getResponsiveSrcset() {
		const { breakpoints } = this.config;
		let filteredBreakpoints = breakpoints;
		if (this.sizes?.trim() === "100vw") filteredBreakpoints = breakpoints.filter((bp) => bp >= VIEWPORT_BREAKPOINT_CUTOFF);
		return filteredBreakpoints.map((bp) => `${this.callImageLoader({
			src: this.ngSrc,
			width: bp
		})} ${bp}w`).join(", ");
	}
	updateSrcAndSrcset(forceSrcRecalc = false) {
		if (forceSrcRecalc) this._renderedSrc = null;
		const rewrittenSrc = this.getRewrittenSrc();
		this.setHostAttribute("src", rewrittenSrc);
		let rewrittenSrcset = void 0;
		if (this.ngSrcset) rewrittenSrcset = this.getRewrittenSrcset();
		else if (this.shouldGenerateAutomaticSrcset()) rewrittenSrcset = this.getAutomaticSrcset();
		if (rewrittenSrcset) this.setHostAttribute("srcset", rewrittenSrcset);
		else if (this.disableOptimizedSrcset && this.srcset) this.setHostAttribute("srcset", this.srcset);
		return rewrittenSrcset;
	}
	getFixedSrcset() {
		return DENSITY_SRCSET_MULTIPLIERS.map((multiplier) => `${this.callImageLoader({
			src: this.ngSrc,
			width: this.width * multiplier
		})} ${multiplier}x`).join(", ");
	}
	shouldGenerateAutomaticSrcset() {
		let oversizedImage = false;
		if (!this.sizes) oversizedImage = this.width > FIXED_SRCSET_WIDTH_LIMIT || this.height > FIXED_SRCSET_HEIGHT_LIMIT;
		return !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== noopImageLoader && !oversizedImage;
	}
	generatePlaceholder(placeholderInput) {
		const { placeholderResolution } = this.config;
		if (placeholderInput === true) return `url("${escapeCssUrl(this.callImageLoader({
			src: this.ngSrc,
			width: placeholderResolution,
			isPlaceholder: true
		}))}")`;
		else if (typeof placeholderInput === "string") return `url("${escapeCssUrl(placeholderInput)}")`;
		return null;
	}
	shouldBlurPlaceholder(placeholderConfig) {
		if (!placeholderConfig || !Object.hasOwn(placeholderConfig, "blur")) return true;
		return Boolean(placeholderConfig.blur);
	}
	removePlaceholderOnLoad(img) {
		const callback = () => {
			const changeDetectorRef = this.injector.get(ChangeDetectorRef);
			removeLoadListenerFn();
			removeErrorListenerFn();
			this.placeholder = false;
			changeDetectorRef.markForCheck();
		};
		const removeLoadListenerFn = this.renderer.listen(img, "load", callback);
		const removeErrorListenerFn = this.renderer.listen(img, "error", callback);
		this.destroyRef.onDestroy(() => {
			removeLoadListenerFn();
			removeErrorListenerFn();
		});
		callOnLoadIfImageIsLoaded(img, callback);
	}
	setHostAttribute(name, value) {
		this.renderer.setAttribute(this.imgElement, name, value);
	}
	static ɵfac = function NgOptimizedImage_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgOptimizedImage)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: NgOptimizedImage,
		selectors: [[
			"img",
			"ngSrc",
			""
		]],
		hostVars: 18,
		hostBindings: function NgOptimizedImage_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵstyleProp("position", ctx.fill ? "absolute" : null)("width", ctx.fill ? "100%" : null)("height", ctx.fill ? "100%" : null)("inset", ctx.fill ? "0" : null)("background-size", ctx.placeholder ? "cover" : null)("background-position", ctx.placeholder ? "50% 50%" : null)("background-repeat", ctx.placeholder ? "no-repeat" : null)("background-image", ctx.placeholder ? ctx.generatePlaceholder(ctx.placeholder) : null)("filter", ctx.placeholder && ctx.shouldBlurPlaceholder(ctx.placeholderConfig) ? "blur(15px)" : null);
		},
		inputs: {
			ngSrc: [
				2,
				"ngSrc",
				"ngSrc",
				unwrapSafeUrl
			],
			ngSrcset: "ngSrcset",
			sizes: "sizes",
			width: [
				2,
				"width",
				"width",
				numberAttribute
			],
			height: [
				2,
				"height",
				"height",
				numberAttribute
			],
			decoding: "decoding",
			loading: "loading",
			priority: [
				2,
				"priority",
				"priority",
				booleanAttribute
			],
			loaderParams: "loaderParams",
			disableOptimizedSrcset: [
				2,
				"disableOptimizedSrcset",
				"disableOptimizedSrcset",
				booleanAttribute
			],
			fill: [
				2,
				"fill",
				"fill",
				booleanAttribute
			],
			placeholder: [
				2,
				"placeholder",
				"placeholder",
				booleanOrUrlAttribute
			],
			placeholderConfig: "placeholderConfig",
			src: "src",
			srcset: "srcset"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptimizedImage, [{
		type: Directive,
		args: [{
			selector: "img[ngSrc]",
			host: {
				"[style.position]": "fill ? \"absolute\" : null",
				"[style.width]": "fill ? \"100%\" : null",
				"[style.height]": "fill ? \"100%\" : null",
				"[style.inset]": "fill ? \"0\" : null",
				"[style.background-size]": "placeholder ? \"cover\" : null",
				"[style.background-position]": "placeholder ? \"50% 50%\" : null",
				"[style.background-repeat]": "placeholder ? \"no-repeat\" : null",
				"[style.background-image]": "placeholder ? generatePlaceholder(placeholder) : null",
				"[style.filter]": "placeholder && shouldBlurPlaceholder(placeholderConfig) ? \"blur(15px)\" : null"
			}
		}]
	}], () => [], {
		ngSrc: [{
			type: Input,
			args: [{
				required: true,
				transform: unwrapSafeUrl
			}]
		}],
		ngSrcset: [{ type: Input }],
		sizes: [{ type: Input }],
		width: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		height: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		decoding: [{ type: Input }],
		loading: [{ type: Input }],
		priority: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		loaderParams: [{ type: Input }],
		disableOptimizedSrcset: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		fill: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		placeholder: [{
			type: Input,
			args: [{ transform: booleanOrUrlAttribute }]
		}],
		placeholderConfig: [{ type: Input }],
		src: [{ type: Input }],
		srcset: [{ type: Input }]
	});
})();
function processConfig(config) {
	let sortedBreakpoints = {};
	if (config.breakpoints) sortedBreakpoints.breakpoints = config.breakpoints.sort((a, b) => a - b);
	return Object.assign({}, IMAGE_CONFIG_DEFAULTS, config, sortedBreakpoints);
}
function assertNoConflictingSrc(dir) {
	if (dir.src) throw new RuntimeError(2950, `${imgDirectiveDetails(dir.ngSrc)} both \`src\` and \`ngSrc\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. To fix this, please remove the \`src\` attribute.`);
}
function assertNoConflictingSrcset(dir) {
	if (dir.srcset) throw new RuntimeError(2951, `${imgDirectiveDetails(dir.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`srcset\` itself based on the value of \`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
}
function assertNotBase64Image(dir) {
	let ngSrc = dir.ngSrc.trim();
	if (ngSrc.startsWith("data:")) {
		if (ngSrc.length > BASE64_IMG_MAX_LENGTH_IN_ERROR) ngSrc = ngSrc.substring(0, BASE64_IMG_MAX_LENGTH_IN_ERROR) + "...";
		throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`ngSrc\` is a Base64-encoded string (${ngSrc}). NgOptimizedImage does not support Base64-encoded strings. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
	}
}
function assertNoComplexSizes(dir) {
	if (dir.sizes?.match(/((\)|,)\s|^)\d+px/)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`sizes\` was set to a string including pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
}
function assertValidPlaceholder(dir, imageLoader) {
	assertNoPlaceholderConfigWithoutPlaceholder(dir);
	assertNoRelativePlaceholderWithoutLoader(dir, imageLoader);
	assertNoOversizedDataUrl(dir);
}
function assertNoPlaceholderConfigWithoutPlaceholder(dir) {
	if (dir.placeholderConfig && !dir.placeholder) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`placeholderConfig\` options were provided for an image that does not use the \`placeholder\` attribute, and will have no effect.`);
}
function assertNoRelativePlaceholderWithoutLoader(dir, imageLoader) {
	if (dir.placeholder === true && imageLoader === noopImageLoader) throw new RuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to true but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for the primary image and its placeholder. To fix this, provide a loader or remove the \`placeholder\` attribute from the image.`);
}
function assertNoOversizedDataUrl(dir) {
	if (dir.placeholder && typeof dir.placeholder === "string" && dir.placeholder.startsWith("data:")) {
		if (dir.placeholder.length > DATA_URL_ERROR_LIMIT) throw new RuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_ERROR_LIMIT} characters. This is strongly discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. To fix this, generate a smaller data URL placeholder.`);
		if (dir.placeholder.length > DATA_URL_WARN_LIMIT) console.warn(formatRuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_WARN_LIMIT} characters. This is discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. For better loading performance, generate a smaller data URL placeholder.`));
	}
}
function assertNotBlobUrl(dir) {
	const ngSrc = dir.ngSrc.trim();
	if (ngSrc.startsWith("blob:")) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrc\` was set to a blob URL (${ngSrc}). Blob URLs are not supported by the NgOptimizedImage directive. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
}
function assertNonEmptyInput(dir, name, value) {
	const isString = typeof value === "string";
	const isEmptyString = isString && value.trim() === "";
	if (!isString || isEmptyString) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${name}\` has an invalid value (\`${value}\`). To fix this, change the value to a non-empty string.`);
}
function assertValidNgSrcset(dir, value) {
	if (value == null) return;
	assertNonEmptyInput(dir, "ngSrcset", value);
	const stringVal = value;
	const isValidWidthDescriptor = VALID_WIDTH_DESCRIPTOR_SRCSET.test(stringVal);
	const isValidDensityDescriptor = VALID_DENSITY_DESCRIPTOR_SRCSET.test(stringVal);
	if (isValidDensityDescriptor) assertUnderDensityCap(dir, stringVal);
	if (!(isValidWidthDescriptor || isValidDensityDescriptor)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrcset\` has an invalid value (\`${value}\`). To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
}
function assertUnderDensityCap(dir, value) {
	if (!value.split(",").every((num) => num === "" || parseFloat(num) <= ABSOLUTE_SRCSET_DENSITY_CAP)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` contains an unsupported image density:\`${value}\`. NgOptimizedImage generally recommends a max image density of ${RECOMMENDED_SRCSET_DENSITY_CAP}x but supports image densities up to ${ABSOLUTE_SRCSET_DENSITY_CAP}x. The human eye cannot distinguish between image densities greater than ${RECOMMENDED_SRCSET_DENSITY_CAP}x - which makes them unnecessary for most use cases. Images that will be pinch-zoomed are typically the primary use case for ${ABSOLUTE_SRCSET_DENSITY_CAP}x images. Please remove the high density descriptor and try again.`);
}
function postInitInputChangeError(dir, inputName) {
	let reason;
	if (inputName === "width" || inputName === "height") reason = `Changing \`${inputName}\` may result in different attribute value applied to the underlying image element and cause layout shifts on a page.`;
	else reason = `Changing the \`${inputName}\` would have no effect on the underlying image element, because the resource loading has already occurred.`;
	return new RuntimeError(2953, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` was updated after initialization. The NgOptimizedImage directive will not react to this input change. ${reason} To fix this, either switch \`${inputName}\` to a static value or wrap the image element in an @if that is gated on the necessary value.`);
}
function assertNoPostInitInputChange(dir, changes, inputs) {
	inputs.forEach((input) => {
		if (Object.hasOwn(changes, input) && !changes[input].isFirstChange()) {
			if (input === "ngSrc") dir = { ngSrc: changes[input].previousValue };
			throw postInitInputChangeError(dir, input);
		}
	});
}
function assertGreaterThanZero(dir, inputValue, inputName) {
	const validNumber = typeof inputValue === "number" && inputValue > 0;
	const validString = typeof inputValue === "string" && /^\d+$/.test(inputValue.trim()) && parseInt(inputValue) > 0;
	if (!validNumber && !validString) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` has an invalid value. To fix this, provide \`${inputName}\` as a number greater than 0.`);
}
function assertNoImageDistortion(dir, img, renderer, destroyRef) {
	const callback = () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
		const computedStyle = window.getComputedStyle(img);
		let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
		let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
		if (computedStyle.getPropertyValue("box-sizing") === "border-box") {
			const paddingTop = computedStyle.getPropertyValue("padding-top");
			const paddingRight = computedStyle.getPropertyValue("padding-right");
			const paddingBottom = computedStyle.getPropertyValue("padding-bottom");
			const paddingLeft = computedStyle.getPropertyValue("padding-left");
			renderedWidth -= parseFloat(paddingRight) + parseFloat(paddingLeft);
			renderedHeight -= parseFloat(paddingTop) + parseFloat(paddingBottom);
		}
		const renderedAspectRatio = renderedWidth / renderedHeight;
		const nonZeroRenderedDimensions = renderedWidth !== 0 && renderedHeight !== 0;
		const intrinsicWidth = img.naturalWidth;
		const intrinsicHeight = img.naturalHeight;
		const intrinsicAspectRatio = intrinsicWidth / intrinsicHeight;
		const suppliedWidth = dir.width;
		const suppliedHeight = dir.height;
		const suppliedAspectRatio = suppliedWidth / suppliedHeight;
		const inaccurateDimensions = Math.abs(suppliedAspectRatio - intrinsicAspectRatio) > ASPECT_RATIO_TOLERANCE;
		const stylingDistortion = nonZeroRenderedDimensions && Math.abs(intrinsicAspectRatio - renderedAspectRatio) > ASPECT_RATIO_TOLERANCE;
		if (inaccurateDimensions) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the image does not match the aspect ratio indicated by the width and height attributes. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). \nSupplied width and height attributes: ${suppliedWidth}w x ${suppliedHeight}h (aspect-ratio: ${round(suppliedAspectRatio)}). \nTo fix this, update the width and height attributes.`));
		else if (stylingDistortion) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the rendered image does not match the image's intrinsic aspect ratio. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). \nRendered image size: ${renderedWidth}w x ${renderedHeight}h (aspect-ratio: ${round(renderedAspectRatio)}). \nThis issue can occur if "width" and "height" attributes are added to an image without updating the corresponding image styling. To fix this, adjust image styling. In most cases, adding "height: auto" or "width: auto" to the image styling will fix this issue.`));
		else if (!dir.ngSrcset && nonZeroRenderedDimensions) {
			const recommendedWidth = RECOMMENDED_SRCSET_DENSITY_CAP * renderedWidth;
			const recommendedHeight = RECOMMENDED_SRCSET_DENSITY_CAP * renderedHeight;
			const oversizedWidth = intrinsicWidth - recommendedWidth >= OVERSIZED_IMAGE_TOLERANCE;
			const oversizedHeight = intrinsicHeight - recommendedHeight >= OVERSIZED_IMAGE_TOLERANCE;
			if (oversizedWidth || oversizedHeight) console.warn(formatRuntimeError(2960, `${imgDirectiveDetails(dir.ngSrc)} the intrinsic image is significantly larger than necessary. \nRendered image size: ${renderedWidth}w x ${renderedHeight}h. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h. \nRecommended intrinsic image size: ${recommendedWidth}w x ${recommendedHeight}h. \nNote: Recommended intrinsic image size is calculated assuming a maximum DPR of ${RECOMMENDED_SRCSET_DENSITY_CAP}. To improve loading time, resize the image or consider using the "ngSrcset" and "sizes" attributes.`));
		}
	};
	const removeLoadListenerFn = renderer.listen(img, "load", callback);
	const removeErrorListenerFn = renderer.listen(img, "error", () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	destroyRef.onDestroy(() => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	callOnLoadIfImageIsLoaded(img, callback);
}
function assertNonEmptyWidthAndHeight(dir) {
	let missingAttributes = [];
	if (dir.width === void 0) missingAttributes.push("width");
	if (dir.height === void 0) missingAttributes.push("height");
	if (missingAttributes.length > 0) throw new RuntimeError(2954, `${imgDirectiveDetails(dir.ngSrc)} these required attributes are missing: ${missingAttributes.map((attr) => `"${attr}"`).join(", ")}. Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the \`fill\` attribute.`);
}
function assertEmptyWidthAndHeight(dir) {
	if (dir.width || dir.height) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the attributes \`height\` and/or \`width\` are present along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing element, the size attributes have no effect and should be removed.`);
}
function assertNonZeroRenderedHeight(dir, img, renderer, destroyRef) {
	const callback = () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
		const renderedHeight = img.clientHeight;
		if (dir.fill && renderedHeight === 0) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the height of the fill-mode image is zero. This is likely because the containing element does not have the CSS 'position' property set to one of the following: "relative", "fixed", or "absolute". To fix this problem, make sure the container element has the CSS 'position' property defined and the height of the element is not zero.`));
	};
	const removeLoadListenerFn = renderer.listen(img, "load", callback);
	const removeErrorListenerFn = renderer.listen(img, "error", () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	destroyRef.onDestroy(() => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	callOnLoadIfImageIsLoaded(img, callback);
}
function assertValidLoadingInput(dir) {
	if (dir.loading && dir.priority) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute was used on an image that was marked "priority". Setting \`loading\` on priority images is not allowed because these images will always be eagerly loaded. To fix this, remove the “loading” attribute from the priority image.`);
	if (typeof dir.loading === "string" && ![
		"auto",
		"eager",
		"lazy"
	].includes(dir.loading)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute has an invalid value (\`${dir.loading}\`). To fix this, provide a valid value ("lazy", "eager", or "auto").`);
}
function assertValidDecodingInput(dir) {
	if (typeof dir.decoding === "string" && ![
		"sync",
		"async",
		"auto"
	].includes(dir.decoding)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`decoding\` attribute has an invalid value (\`${dir.decoding}\`). To fix this, provide a valid value ("sync", "async", or "auto").`);
}
function assertNotMissingBuiltInLoader(ngSrc, imageLoader) {
	if (imageLoader === noopImageLoader) {
		let builtInLoaderName = "";
		for (const loader of BUILT_IN_LOADERS) if (loader.testUrl(ngSrc)) {
			builtInLoaderName = loader.name;
			break;
		}
		if (builtInLoaderName) console.warn(formatRuntimeError(2962, `NgOptimizedImage: It looks like your images may be hosted on the ${builtInLoaderName} CDN, but your app is not using Angular's built-in loader for that CDN. We recommend switching to use the built-in by calling \`provide${builtInLoaderName}Loader()\` in your \`providers\` and passing it your instance's base URL. If you don't want to use the built-in loader, define a custom loader function using IMAGE_LOADER to silence this warning.`));
	}
}
function assertNoNgSrcsetWithoutLoader(dir, imageLoader) {
	if (dir.ngSrcset && imageLoader === noopImageLoader) console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` attribute is present but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for all configured sizes. To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
}
function assertNoLoaderParamsWithoutLoader(dir, imageLoader) {
	if (dir.loaderParams && imageLoader === noopImageLoader) console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`loaderParams\` attribute is present but no image loader is configured (i.e. the default one is being used), which means that the loaderParams data will not be consumed and will not affect the URL. To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
}
function callOnLoadIfImageIsLoaded(img, callback) {
	if (img.complete && img.naturalWidth) callback();
}
function round(input) {
	return Number.isInteger(input) ? input : input.toFixed(2);
}
function unwrapSafeUrl(value) {
	if (typeof value === "string") return value;
	return unwrapSafeValue(value);
}
function booleanOrUrlAttribute(value) {
	if (typeof value === "string" && value !== "true" && value !== "false" && value !== "") return value;
	return booleanAttribute(value);
}
//#endregion
//#region node_modules/@angular/common/fesm2022/_module-chunk.mjs
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var import_operators = require_operators();
var HttpHeaders = class HttpHeaders {
	headers;
	normalizedNames = /* @__PURE__ */ new Map();
	lazyInit;
	lazyUpdate = null;
	constructor(headers) {
		if (!headers) this.headers = /* @__PURE__ */ new Map();
		else if (typeof headers === "string") this.lazyInit = () => {
			this.headers = /* @__PURE__ */ new Map();
			headers.split("\n").forEach((line) => {
				const index = line.indexOf(":");
				if (index > 0) {
					const name = line.slice(0, index);
					const value = line.slice(index + 1).trim();
					this.addHeaderEntry(name, value);
				}
			});
		};
		else if (typeof Headers !== "undefined" && headers instanceof Headers) {
			this.headers = /* @__PURE__ */ new Map();
			headers.forEach((value, name) => {
				this.addHeaderEntry(name, value);
			});
		} else this.lazyInit = () => {
			if (typeof ngDevMode === "undefined" || ngDevMode) assertValidHeaders(headers);
			this.headers = /* @__PURE__ */ new Map();
			Object.entries(headers).forEach(([name, values]) => {
				this.setHeaderEntries(name, values);
			});
		};
	}
	has(name) {
		this.init();
		return this.headers.has(name.toLowerCase());
	}
	get(name) {
		this.init();
		const values = this.headers.get(name.toLowerCase());
		return values && values.length > 0 ? values[0] : null;
	}
	keys() {
		this.init();
		return Array.from(this.normalizedNames.values());
	}
	getAll(name) {
		this.init();
		return this.headers.get(name.toLowerCase()) || null;
	}
	append(name, value) {
		return this.clone({
			name,
			value,
			op: "a"
		});
	}
	set(name, value) {
		return this.clone({
			name,
			value,
			op: "s"
		});
	}
	delete(name, value) {
		return this.clone({
			name,
			value,
			op: "d"
		});
	}
	maybeSetNormalizedName(name, lcName) {
		if (!this.normalizedNames.has(lcName)) this.normalizedNames.set(lcName, name);
	}
	init() {
		if (!!this.lazyInit) {
			if (this.lazyInit instanceof HttpHeaders) this.copyFrom(this.lazyInit);
			else this.lazyInit();
			this.lazyInit = null;
			if (!!this.lazyUpdate) {
				this.lazyUpdate.forEach((update) => this.applyUpdate(update));
				this.lazyUpdate = null;
			}
		}
	}
	copyFrom(other) {
		other.init();
		for (const [key, values] of other.headers.entries()) {
			this.headers.set(key, values);
			this.normalizedNames.set(key, other.normalizedNames.get(key));
		}
	}
	clone(update) {
		const clone = new HttpHeaders();
		clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
		clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
		return clone;
	}
	applyUpdate(update) {
		const key = update.name.toLowerCase();
		switch (update.op) {
			case "a":
			case "s":
				let value = update.value;
				if (typeof value === "string") value = [value];
				if (value.length === 0) return;
				this.maybeSetNormalizedName(update.name, key);
				const base = update.op === "a" ? (this.headers.get(key) || []).slice() : [];
				base.push(...value);
				this.headers.set(key, base);
				break;
			case "d":
				const toDelete = update.value;
				if (toDelete === void 0) {
					this.headers.delete(key);
					this.normalizedNames.delete(key);
				} else {
					const valuesToDelete = Array.isArray(toDelete) ? toDelete : [toDelete];
					let existing = this.headers.get(key);
					if (!existing) return;
					existing = existing.filter((value) => valuesToDelete.indexOf(value) === -1);
					if (existing.length === 0) {
						this.headers.delete(key);
						this.normalizedNames.delete(key);
					} else this.headers.set(key, existing);
				}
		}
	}
	addHeaderEntry(name, value) {
		const key = name.toLowerCase();
		this.maybeSetNormalizedName(name, key);
		if (this.headers.has(key)) this.headers.get(key).push(value);
		else this.headers.set(key, [value]);
	}
	setHeaderEntries(name, values) {
		const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
		const key = name.toLowerCase();
		this.headers.set(key, headerValues);
		this.maybeSetNormalizedName(name, key);
	}
	forEach(fn) {
		this.init();
		Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
	}
};
function assertValidHeaders(headers) {
	for (const [key, value] of Object.entries(headers)) if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
}
var HttpContext = class {
	map = /* @__PURE__ */ new Map();
	set(token, value) {
		this.map.set(token, value);
		return this;
	}
	get(token) {
		if (!this.map.has(token)) this.map.set(token, token.defaultValue());
		return this.map.get(token);
	}
	delete(token) {
		this.map.delete(token);
		return this;
	}
	has(token) {
		return this.map.has(token);
	}
	keys() {
		return this.map.keys();
	}
};
var HttpUrlEncodingCodec = class {
	encodeKey(key) {
		return standardEncoding(key);
	}
	encodeValue(value) {
		return standardEncoding(value);
	}
	decodeKey(key) {
		return decodeURIComponent(key);
	}
	decodeValue(value) {
		return decodeURIComponent(value);
	}
};
function paramParser(rawParams, codec) {
	const map = /* @__PURE__ */ new Map();
	if (rawParams.length > 0) rawParams.replace(/^\?/, "").split("&").forEach((param) => {
		const eqIdx = param.indexOf("=");
		const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
		const list = map.get(key) || [];
		list.push(val);
		map.set(key, list);
	});
	return map;
}
var STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
var STANDARD_ENCODING_REPLACEMENTS = {
	"40": "@",
	"3A": ":",
	"24": "$",
	"2C": ",",
	"3B": ";",
	"3D": "=",
	"3F": "?",
	"2F": "/"
};
function standardEncoding(v) {
	return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
	return `${value}`;
}
var HttpParams = class HttpParams {
	map;
	encoder;
	updates = null;
	cloneFrom = null;
	constructor(options = {}) {
		this.encoder = options.encoder || new HttpUrlEncodingCodec();
		if (options.fromString) {
			if (options.fromObject) throw new RuntimeError(2805, ngDevMode && "Cannot specify both fromString and fromObject.");
			this.map = paramParser(options.fromString, this.encoder);
		} else if (!!options.fromObject) {
			this.map = /* @__PURE__ */ new Map();
			Object.keys(options.fromObject).forEach((key) => {
				const value = options.fromObject[key];
				const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
				this.map.set(key, values);
			});
		} else this.map = null;
	}
	has(param) {
		this.init();
		return this.map.has(param);
	}
	get(param) {
		this.init();
		const res = this.map.get(param);
		return !!res ? res[0] : null;
	}
	getAll(param) {
		this.init();
		return this.map.get(param) || null;
	}
	keys() {
		this.init();
		return Array.from(this.map.keys());
	}
	append(param, value) {
		return this.clone({
			param,
			value,
			op: "a"
		});
	}
	appendAll(params) {
		const updates = [];
		Object.keys(params).forEach((param) => {
			const value = params[param];
			if (Array.isArray(value)) value.forEach((_value) => {
				updates.push({
					param,
					value: _value,
					op: "a"
				});
			});
			else updates.push({
				param,
				value,
				op: "a"
			});
		});
		return this.clone(updates);
	}
	set(param, value) {
		return this.clone({
			param,
			value,
			op: "s"
		});
	}
	delete(param, value) {
		return this.clone({
			param,
			value,
			op: "d"
		});
	}
	toString() {
		this.init();
		return this.keys().map((key) => {
			const eKey = this.encoder.encodeKey(key);
			return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
		}).filter((param) => param !== "").join("&");
	}
	clone(update) {
		const clone = new HttpParams({ encoder: this.encoder });
		clone.cloneFrom = this.cloneFrom || this;
		clone.updates = (this.updates || []).concat(update);
		return clone;
	}
	init() {
		if (this.map === null) this.map = /* @__PURE__ */ new Map();
		if (this.cloneFrom !== null) {
			this.cloneFrom.init();
			for (const [key, values] of this.cloneFrom.map.entries()) this.map.set(key, values);
			this.updates.forEach((update) => {
				switch (update.op) {
					case "a":
					case "s":
						const base = update.op === "a" ? (this.map.get(update.param) || []).slice() : [];
						base.push(valueToString(update.value));
						this.map.set(update.param, base);
						break;
					case "d": if (update.value !== void 0) {
						const base = (this.map.get(update.param) || []).slice();
						const idx = base.indexOf(valueToString(update.value));
						if (idx !== -1) base.splice(idx, 1);
						if (base.length > 0) this.map.set(update.param, base);
						else this.map.delete(update.param);
					} else {
						this.map.delete(update.param);
						break;
					}
				}
			});
			this.cloneFrom = this.updates = null;
		}
	}
};
function mightHaveBody(method) {
	switch (method) {
		case "DELETE":
		case "GET":
		case "HEAD":
		case "OPTIONS":
		case "JSONP": return false;
		default: return true;
	}
}
function isArrayBuffer(value) {
	return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
	return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
	return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
	return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
var CONTENT_TYPE_HEADER = "Content-Type";
var ACCEPT_HEADER = "Accept";
var TEXT_CONTENT_TYPE = "text/plain";
var JSON_CONTENT_TYPE = "application/json";
var ACCEPT_HEADER_VALUE = `${JSON_CONTENT_TYPE}, ${TEXT_CONTENT_TYPE}, */*`;
var HttpRequest = class HttpRequest {
	url;
	body = null;
	headers;
	context;
	reportProgress = false;
	reportUploadProgress = false;
	reportDownloadProgress = false;
	withCredentials = false;
	credentials;
	keepalive = false;
	cache;
	priority;
	mode;
	redirect;
	referrer;
	integrity;
	referrerPolicy;
	responseType = "json";
	method;
	params;
	urlWithParams;
	transferCache;
	timeout;
	constructor(method, url, third, fourth) {
		this.url = url;
		this.method = method.toUpperCase();
		let options;
		if (mightHaveBody(this.method) || !!fourth) {
			this.body = third !== void 0 ? third : null;
			options = fourth;
		} else options = third;
		if (options) {
			this.reportProgress = !!options.reportProgress;
			this.reportUploadProgress = !!options.reportUploadProgress;
			this.reportDownloadProgress = !!options.reportDownloadProgress;
			this.withCredentials = !!options.withCredentials;
			this.keepalive = !!options.keepalive;
			if (!!options.responseType) this.responseType = options.responseType;
			if (options.headers) this.headers = options.headers;
			if (options.context) this.context = options.context;
			if (options.params) this.params = options.params;
			if (options.priority) this.priority = options.priority;
			if (options.cache) this.cache = options.cache;
			if (options.credentials) this.credentials = options.credentials;
			if (typeof options.timeout === "number") {
				if (options.timeout < 1 || !Number.isInteger(options.timeout)) throw new RuntimeError(2822, ngDevMode ? "`timeout` must be a positive integer value" : "");
				this.timeout = options.timeout;
			}
			if (options.mode) this.mode = options.mode;
			if (options.redirect) this.redirect = options.redirect;
			if (options.integrity) this.integrity = options.integrity;
			if (options.referrer !== void 0) this.referrer = options.referrer;
			if (options.referrerPolicy) this.referrerPolicy = options.referrerPolicy;
			this.transferCache = options.transferCache;
		}
		this.headers ??= new HttpHeaders();
		this.context ??= new HttpContext();
		if (!this.params) {
			this.params = new HttpParams();
			this.urlWithParams = url;
		} else {
			const params = this.params.toString();
			if (params.length === 0) this.urlWithParams = url;
			else {
				let urlWithoutFragment = url;
				let fragment = "";
				const hashIdx = url.indexOf("#");
				if (hashIdx !== -1) {
					fragment = url.substring(hashIdx);
					urlWithoutFragment = url.substring(0, hashIdx);
				}
				const qIdx = urlWithoutFragment.indexOf("?");
				const sep = qIdx === -1 ? "?" : qIdx < urlWithoutFragment.length - 1 ? "&" : "";
				this.urlWithParams = urlWithoutFragment + sep + params + fragment;
			}
		}
	}
	serializeBody() {
		if (this.body === null) return null;
		if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) return this.body;
		if (this.body instanceof HttpParams) return this.body.toString();
		if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) return JSON.stringify(this.body);
		return this.body.toString();
	}
	detectContentTypeHeader() {
		if (this.body === null) return null;
		if (isFormData(this.body)) return null;
		if (isBlob(this.body)) return this.body.type || null;
		if (isArrayBuffer(this.body)) return null;
		if (typeof this.body === "string") return TEXT_CONTENT_TYPE;
		if (this.body instanceof HttpParams) return "application/x-www-form-urlencoded;charset=UTF-8";
		if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") return JSON_CONTENT_TYPE;
		return null;
	}
	clone(update = {}) {
		const method = update.method || this.method;
		const url = update.url || this.url;
		const responseType = update.responseType || this.responseType;
		const keepalive = update.keepalive ?? this.keepalive;
		const priority = update.priority || this.priority;
		const cache = update.cache || this.cache;
		const mode = update.mode || this.mode;
		const redirect = update.redirect || this.redirect;
		const credentials = update.credentials || this.credentials;
		const referrer = update.referrer ?? this.referrer;
		const integrity = update.integrity || this.integrity;
		const referrerPolicy = update.referrerPolicy || this.referrerPolicy;
		const transferCache = update.transferCache ?? this.transferCache;
		const timeout = update.timeout ?? this.timeout;
		const body = update.body !== void 0 ? update.body : this.body;
		const withCredentials = update.withCredentials ?? this.withCredentials;
		const reportProgress = update.reportProgress ?? this.reportProgress;
		const reportUploadProgress = update.reportUploadProgress ?? this.reportUploadProgress;
		const reportDownloadProgress = update.reportDownloadProgress ?? this.reportDownloadProgress;
		let headers = update.headers || this.headers;
		let params = update.params || this.params;
		const context = update.context ?? this.context;
		if (update.setHeaders !== void 0) headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
		if (update.setParams) params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
		return new HttpRequest(method, url, body, {
			params,
			headers,
			context,
			reportProgress,
			reportUploadProgress,
			reportDownloadProgress,
			responseType,
			withCredentials,
			transferCache,
			keepalive,
			cache,
			priority,
			timeout,
			mode,
			redirect,
			credentials,
			referrer,
			integrity,
			referrerPolicy
		});
	}
};
var HttpEventType;
(function(HttpEventType) {
	HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
	HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
	HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
	HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
	HttpEventType[HttpEventType["Response"] = 4] = "Response";
	HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
var HttpResponseBase = class {
	headers;
	status;
	statusText;
	url;
	ok;
	type;
	redirected;
	responseType;
	constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
		this.headers = init.headers || new HttpHeaders();
		this.status = init.status !== void 0 ? init.status : defaultStatus;
		this.statusText = init.statusText || defaultStatusText;
		this.url = init.url || null;
		this.redirected = init.redirected;
		this.responseType = init.responseType;
		this.ok = this.status >= 200 && this.status < 300;
	}
};
var HttpHeaderResponse = class HttpHeaderResponse extends HttpResponseBase {
	constructor(init = {}) {
		super(init);
	}
	type = HttpEventType.ResponseHeader;
	clone(update = {}) {
		return new HttpHeaderResponse({
			headers: update.headers || this.headers,
			status: update.status !== void 0 ? update.status : this.status,
			statusText: update.statusText || this.statusText,
			url: update.url || this.url || void 0
		});
	}
};
var HttpResponse = class HttpResponse extends HttpResponseBase {
	body;
	constructor(init = {}) {
		super(init);
		this.body = init.body !== void 0 ? init.body : null;
	}
	type = HttpEventType.Response;
	clone(update = {}) {
		return new HttpResponse({
			body: update.body !== void 0 ? update.body : this.body,
			headers: update.headers || this.headers,
			status: update.status !== void 0 ? update.status : this.status,
			statusText: update.statusText || this.statusText,
			url: update.url || this.url || void 0,
			redirected: update.redirected ?? this.redirected,
			responseType: update.responseType ?? this.responseType
		});
	}
};
var HttpErrorResponse = class extends HttpResponseBase {
	name = "HttpErrorResponse";
	message;
	error;
	ok = false;
	constructor(init) {
		super(init, 0, "Unknown Error");
		if (this.status >= 200 && this.status < 300) this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
		else this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
		this.error = init.error || null;
	}
};
var HTTP_STATUS_CODE_OK = 200;
var HTTP_STATUS_CODE_NO_CONTENT = 204;
var HttpStatusCode;
(function(HttpStatusCode) {
	HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
	HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
	HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
	HttpStatusCode[HttpStatusCode["EarlyHints"] = 103] = "EarlyHints";
	HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
	HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
	HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
	HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
	HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
	HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
	HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
	HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
	HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
	HttpStatusCode[HttpStatusCode["ImUsed"] = 226] = "ImUsed";
	HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
	HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
	HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
	HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
	HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
	HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
	HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
	HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
	HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
	HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
	HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
	HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
	HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
	HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
	HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
	HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
	HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
	HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
	HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
	HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
	HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
	HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
	HttpStatusCode[HttpStatusCode["PayloadTooLarge"] = 413] = "PayloadTooLarge";
	HttpStatusCode[HttpStatusCode["UriTooLong"] = 414] = "UriTooLong";
	HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
	HttpStatusCode[HttpStatusCode["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
	HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
	HttpStatusCode[HttpStatusCode["ImATeapot"] = 418] = "ImATeapot";
	HttpStatusCode[HttpStatusCode["MisdirectedRequest"] = 421] = "MisdirectedRequest";
	HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
	HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
	HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
	HttpStatusCode[HttpStatusCode["TooEarly"] = 425] = "TooEarly";
	HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
	HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
	HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
	HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
	HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
	HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
	HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
	HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
	HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
	HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
	HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
	HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
	HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
	HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
	HttpStatusCode[HttpStatusCode["NotExtended"] = 510] = "NotExtended";
	HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));
var XSSI_PREFIX$1 = /^\)\]\}',?\n/;
var DEFAULT_SSR_MAX_RESPONSE_BODY_SIZE = 1048576;
var HTTP_FETCH_MAX_RESPONSE_SIZE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "HTTP_FETCH_MAX_RESPONSE_SIZE" : "", { factory: () => DEFAULT_SSR_MAX_RESPONSE_BODY_SIZE });
var FetchBackend = class FetchBackend {
	fetchImpl = inject(FetchFactory, { optional: true })?.fetch ?? ((...args) => globalThis.fetch(...args));
	ngZone = inject(NgZone);
	destroyRef = inject(DestroyRef);
	maxResponseSize = inject(HTTP_FETCH_MAX_RESPONSE_SIZE);
	handle(request) {
		return new import_cjs.Observable((observer) => {
			const aborter = new AbortController();
			let done = false;
			const wrappedObserver = {
				next: (val) => {
					if (val.type === HttpEventType.Response) done = true;
					observer.next(val);
				},
				error: (err) => {
					done = true;
					observer.error(err);
				},
				complete: () => {
					done = true;
					observer.complete();
				}
			};
			this.doRequest(request, aborter.signal, wrappedObserver).then(noop, (error) => wrappedObserver.error(new HttpErrorResponse({ error })));
			let timeoutId;
			if (request.timeout) timeoutId = this.ngZone.runOutsideAngular(() => setTimeout(() => {
				if (!aborter.signal.aborted) aborter.abort(new DOMException("signal timed out", "TimeoutError"));
			}, request.timeout));
			return () => {
				if (timeoutId !== void 0) clearTimeout(timeoutId);
				if (!done && !aborter.signal.aborted) aborter.abort();
			};
		});
	}
	async doRequest(request, signal, observer) {
		const init = this.createRequestInit(request);
		let response;
		try {
			const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, {
				signal,
				...init
			}));
			silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
			observer.next({ type: HttpEventType.Sent });
			response = await fetchPromise;
		} catch (error) {
			observer.error(new HttpErrorResponse({
				error,
				status: error.status ?? 0,
				statusText: error.statusText,
				url: request.urlWithParams,
				headers: error.headers
			}));
			return;
		}
		const headers = new HttpHeaders(response.headers);
		const statusText = response.statusText;
		const url = response.url || request.urlWithParams;
		let status = response.status;
		let body = null;
		const reportDownloadProgress = request.reportProgress || request.reportDownloadProgress;
		if (reportDownloadProgress) observer.next(new HttpHeaderResponse({
			headers,
			status,
			statusText,
			url
		}));
		if (response.body) {
			const contentType = response.headers.get(CONTENT_TYPE_HEADER) ?? "";
			const contentLength = response.headers.get("content-length");
			const contentLengthValue = contentLength !== null ? Number(contentLength) : NaN;
			if (this.maxResponseSize !== null && Number.isFinite(contentLengthValue) && contentLengthValue > this.maxResponseSize) {
				await response.body.cancel();
				throwBodyTooLargeError(this.maxResponseSize);
			}
			const chunks = [];
			const reader = response.body.getReader();
			let receivedLength = 0;
			let decoder;
			let partialText;
			const reqZone = typeof Zone !== "undefined" && Zone.current;
			let canceled = false;
			await this.ngZone.runOutsideAngular(async () => {
				while (true) {
					if (this.destroyRef.destroyed) {
						await reader.cancel();
						canceled = true;
						break;
					}
					const { done, value } = await reader.read();
					if (done) break;
					chunks.push(value);
					receivedLength += value.length;
					if (this.maxResponseSize !== null && receivedLength > this.maxResponseSize) {
						await reader.cancel();
						throwBodyTooLargeError(this.maxResponseSize);
					}
					if (reportDownloadProgress) {
						partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= getTextDecoder(contentType)).decode(value, { stream: true }) : void 0;
						const reportProgress = () => observer.next({
							type: HttpEventType.DownloadProgress,
							total: Number.isFinite(contentLengthValue) ? contentLengthValue : void 0,
							loaded: receivedLength,
							partialText
						});
						reqZone ? reqZone.run(reportProgress) : reportProgress();
					}
				}
			});
			if (canceled) {
				observer.complete();
				return;
			}
			const chunksAll = this.concatChunks(chunks, receivedLength);
			try {
				body = this.parseBody(request, chunksAll, contentType, status);
			} catch (error) {
				observer.error(new HttpErrorResponse({
					error,
					headers: new HttpHeaders(response.headers),
					status: response.status,
					statusText: response.statusText,
					url: response.url || request.urlWithParams
				}));
				return;
			}
		}
		if (status === 0) status = body ? HTTP_STATUS_CODE_OK : 0;
		const ok = status >= 200 && status < 300;
		const redirected = response.redirected;
		const responseType = response.type;
		if (ok) {
			observer.next(new HttpResponse({
				body,
				headers,
				status,
				statusText,
				url,
				redirected,
				responseType
			}));
			observer.complete();
		} else observer.error(new HttpErrorResponse({
			error: body,
			headers,
			status,
			statusText,
			url,
			redirected,
			responseType
		}));
	}
	parseBody(request, binContent, contentType, status) {
		switch (request.responseType) {
			case "json":
				const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
				if (text === "") return null;
				try {
					return JSON.parse(text);
				} catch (e) {
					if (status < 200 || status >= 300) return text;
					throw e;
				}
			case "text": return getTextDecoder(contentType).decode(binContent);
			case "blob": return new Blob([binContent], { type: contentType });
			case "arraybuffer": return binContent.buffer;
		}
	}
	createRequestInit(req) {
		if (req.reportUploadProgress) throw new RuntimeError(2824, ngDevMode && "The FetchBackend does not support upload progress reporting. Please use `withXhr()` on your `provideHttpClient()` configuration if you want to report upload progress.");
		const headers = {};
		let credentials;
		credentials = req.credentials;
		if (req.withCredentials) {
			(typeof ngDevMode === "undefined" || ngDevMode) && warningOptionsMessage(req);
			credentials = "include";
		}
		req.headers.forEach((name, values) => headers[name] = values.join(","));
		if (!req.headers.has(ACCEPT_HEADER)) headers[ACCEPT_HEADER] = ACCEPT_HEADER_VALUE;
		if (!req.headers.has(CONTENT_TYPE_HEADER)) {
			const detectedType = req.detectContentTypeHeader();
			if (detectedType !== null) headers[CONTENT_TYPE_HEADER] = detectedType;
		}
		return {
			body: req.serializeBody(),
			method: req.method,
			headers,
			credentials,
			keepalive: req.keepalive,
			cache: req.cache,
			priority: req.priority,
			mode: req.mode,
			redirect: req.redirect,
			referrer: req.referrer,
			integrity: req.integrity,
			referrerPolicy: req.referrerPolicy
		};
	}
	concatChunks(chunks, totalLength) {
		const chunksAll = new Uint8Array(totalLength);
		let position = 0;
		for (const chunk of chunks) {
			chunksAll.set(chunk, position);
			position += chunk.length;
		}
		return chunksAll;
	}
	static ɵfac = function FetchBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FetchBackend)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: FetchBackend,
		factory: FetchBackend.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchBackend, [{ type: Service }], null, null);
})();
var FetchFactory = class {};
function noop() {}
function warningOptionsMessage(req) {
	if (req.credentials && req.withCredentials) console.warn(formatRuntimeError(2819, `Angular detected that a \`HttpClient\` request has both \`withCredentials: true\` and \`credentials: '${req.credentials}'\` options. The \`withCredentials\` option is overriding the explicit \`credentials\` setting to 'include'. Consider removing \`withCredentials\` and using \`credentials: '${req.credentials}'\` directly for clarity.`));
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
	promise.then(noop, noop);
}
function throwBodyTooLargeError(maxResponseSize) {
	throw new RuntimeError(-2825, ngDevMode && `Fetch response body exceeded the configured buffer limit (${maxResponseSize} bytes).`);
}
var CHARSET_REGEX = /charset=\s*["']?([^;"'\s]+)["']?/i;
function getTextDecoder(contentType) {
	const match = contentType.match(CHARSET_REGEX);
	if (match !== null) try {
		return new TextDecoder(match[1]);
	} catch {}
	return new TextDecoder();
}
var XSRF_ENABLED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "XSRF_ENABLED" : "", { factory: () => true });
var XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
var XSRF_COOKIE_NAME = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "XSRF_COOKIE_NAME" : "", { factory: () => XSRF_DEFAULT_COOKIE_NAME });
var XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
var XSRF_HEADER_NAME = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "XSRF_HEADER_NAME" : "", { factory: () => XSRF_DEFAULT_HEADER_NAME });
var HttpXsrfCookieExtractor = class HttpXsrfCookieExtractor {
	cookieName = inject(XSRF_COOKIE_NAME);
	doc = inject(DOCUMENT);
	lastCookieString = "";
	lastToken = null;
	parseCount = 0;
	getToken() {
		return null;
	}
	static ɵfac = function HttpXsrfCookieExtractor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXsrfCookieExtractor)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: HttpXsrfCookieExtractor,
		factory: HttpXsrfCookieExtractor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfCookieExtractor, [{ type: Service }], null, null);
})();
var HttpXsrfTokenExtractor = class HttpXsrfTokenExtractor {
	static ɵfac = function HttpXsrfTokenExtractor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXsrfTokenExtractor)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpXsrfTokenExtractor,
		factory: function HttpXsrfTokenExtractor_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new (__ngFactoryType__ || HttpXsrfTokenExtractor)();
			else __ngConditionalFactory__ = ɵɵinject(HttpXsrfCookieExtractor);
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfTokenExtractor, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useExisting: HttpXsrfCookieExtractor
		}]
	}], null, null);
})();
function xsrfInterceptorFn(req, next) {
	if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD") return next(req);
	try {
		const locationHref = inject(PlatformLocation).href;
		const { origin: locationOrigin } = new URL(locationHref);
		const { origin: requestOrigin } = new URL(req.url, locationOrigin);
		if (locationOrigin !== requestOrigin) return next(req);
	} catch {
		return next(req);
	}
	const token = inject(HttpXsrfTokenExtractor).getToken();
	const headerName = inject(XSRF_HEADER_NAME);
	if (token != null && !req.headers.has(headerName)) req = req.clone({ headers: req.headers.set(headerName, token) });
	return next(req);
}
var HttpXsrfInterceptor = class HttpXsrfInterceptor {
	injector = inject(EnvironmentInjector);
	intercept(initialRequest, next) {
		return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
	}
	static ɵfac = function HttpXsrfInterceptor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXsrfInterceptor)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpXsrfInterceptor,
		factory: HttpXsrfInterceptor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfInterceptor, [{ type: Injectable }], null, null);
})();
function interceptorChainEndFn(req, finalHandlerFn) {
	return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
	return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, { handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn) });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
	return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
var HTTP_INTERCEPTORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "HTTP_INTERCEPTORS" : "");
var HTTP_INTERCEPTOR_FNS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "", { factory: () => [xsrfInterceptorFn] });
var HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
var REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", { factory: () => true });
function legacyInterceptorFnFactory() {
	let chain = null;
	return (req, handler) => {
		if (chain === null) chain = (inject(HTTP_INTERCEPTORS, { optional: true }) ?? []).reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
		const pendingTasks = inject(PendingTasks);
		if (inject(REQUESTS_CONTRIBUTE_TO_STABILITY)) {
			const removeTask = pendingTasks.add();
			return chain(req, handler).pipe((0, import_operators.finalize)(removeTask));
		} else return chain(req, handler);
	};
}
var HttpBackend = class HttpBackend {
	static ɵfac = function HttpBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpBackend)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpBackend,
		factory: function HttpBackend_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new (__ngFactoryType__ || HttpBackend)();
			else __ngConditionalFactory__ = ɵɵinject(FetchBackend);
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpBackend, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useExisting: FetchBackend
		}]
	}], null, null);
})();
var fetchBackendWarningDisplayed = false;
var HttpInterceptorHandler = class HttpInterceptorHandler {
	backend;
	injector;
	chain = null;
	pendingTasks = inject(PendingTasks);
	contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
	constructor(backend, injector) {
		this.backend = backend;
		this.injector = injector;
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
			const isTestingBackend = this.backend.isTestingBackend;
			if (!(this.backend instanceof FetchBackend) && !isTestingBackend) {
				fetchBackendWarningDisplayed = true;
				injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, remove the `withXhr()` feature from the `provideHttpClient()` call"));
			}
		}
	}
	handle(initialRequest) {
		if (this.chain === null) {
			const parentHandler = this.injector.get(HttpHandler, null, { skipSelf: true });
			const isDelegating = parentHandler !== null && this.backend === parentHandler;
			const rootInterceptorFns = this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [], isDelegating ? { self: true } : void 0);
			const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...rootInterceptorFns]));
			this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
		}
		const chain = this.chain;
		if (this.contributeToStability) {
			const removeTask = this.pendingTasks.add();
			return untracked(() => chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest))).pipe((0, import_operators.finalize)(removeTask));
		} else return untracked(() => chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)));
	}
	static ɵfac = function HttpInterceptorHandler_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpInterceptorHandler)(ɵɵinject(HttpBackend), ɵɵinject(EnvironmentInjector));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpInterceptorHandler,
		factory: HttpInterceptorHandler.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpInterceptorHandler, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: HttpBackend }, { type: EnvironmentInjector }], null);
})();
var HttpHandler = class HttpHandler {
	static ɵfac = function HttpHandler_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpHandler)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpHandler,
		factory: function HttpHandler_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new (__ngFactoryType__ || HttpHandler)();
			else __ngConditionalFactory__ = ɵɵinject(HttpInterceptorHandler);
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpHandler, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useExisting: HttpInterceptorHandler
		}]
	}], null, null);
})();
function addBody(options, body) {
	return {
		body,
		...options
	};
}
var HttpClient = class HttpClient {
	handler;
	constructor(handler) {
		this.handler = handler;
	}
	request(first, url, options = {}) {
		let req;
		if (first instanceof HttpRequest) req = first;
		else {
			let headers = void 0;
			if (options.headers instanceof HttpHeaders) headers = options.headers;
			else headers = new HttpHeaders(options.headers);
			let params = void 0;
			if (!!options.params) {
				if (options.params instanceof HttpParams) params = options.params;
				else params = new HttpParams({ fromObject: options.params });
			}
			req = new HttpRequest(first, url, options.body !== void 0 ? options.body : null, {
				headers,
				context: options.context,
				params,
				reportProgress: options.reportProgress,
				reportUploadProgress: options.reportUploadProgress,
				reportDownloadProgress: options.reportDownloadProgress,
				responseType: options.responseType || "json",
				withCredentials: options.withCredentials,
				transferCache: options.transferCache,
				keepalive: options.keepalive,
				priority: options.priority,
				cache: options.cache,
				mode: options.mode,
				redirect: options.redirect,
				credentials: options.credentials,
				referrer: options.referrer,
				referrerPolicy: options.referrerPolicy,
				integrity: options.integrity,
				timeout: options.timeout
			});
		}
		const events$ = (0, import_cjs.of)(req).pipe((0, import_operators.concatMap)((req) => this.handler.handle(req)));
		if (first instanceof HttpRequest || options.observe === "events") return events$;
		const res$ = events$.pipe((0, import_operators.filter)((event) => event instanceof HttpResponse));
		switch (options.observe || "body") {
			case "body": switch (req.responseType) {
				case "arraybuffer": return res$.pipe((0, import_operators.map)((res) => {
					if (res.body !== null && !(res.body instanceof ArrayBuffer)) throw new RuntimeError(2806, ngDevMode && "Response is not an ArrayBuffer.");
					return res.body;
				}));
				case "blob": return res$.pipe((0, import_operators.map)((res) => {
					if (res.body !== null && !(res.body instanceof Blob)) throw new RuntimeError(2807, ngDevMode && "Response is not a Blob.");
					return res.body;
				}));
				case "text": return res$.pipe((0, import_operators.map)((res) => {
					if (res.body !== null && typeof res.body !== "string") throw new RuntimeError(2808, ngDevMode && "Response is not a string.");
					return res.body;
				}));
				default: return res$.pipe((0, import_operators.map)((res) => res.body));
			}
			case "response": return res$;
			default: throw new RuntimeError(2809, ngDevMode && `Unreachable: unhandled observe type ${options.observe}}`);
		}
	}
	delete(url, options = {}) {
		return this.request("DELETE", url, options);
	}
	get(url, options = {}) {
		return this.request("GET", url, options);
	}
	head(url, options = {}) {
		return this.request("HEAD", url, options);
	}
	jsonp(url, callbackParam) {
		return this.request("JSONP", url, {
			params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
			observe: "body",
			responseType: "json"
		});
	}
	options(url, options = {}) {
		return this.request("OPTIONS", url, options);
	}
	patch(url, body, options = {}) {
		return this.request("PATCH", url, addBody(options, body));
	}
	post(url, body, options = {}) {
		return this.request("POST", url, addBody(options, body));
	}
	put(url, body, options = {}) {
		return this.request("PUT", url, addBody(options, body));
	}
	static ɵfac = function HttpClient_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClient)(ɵɵinject(HttpHandler));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpClient,
		factory: HttpClient.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClient, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: HttpHandler }], null);
})();
var nextRequestId = 0;
var foreignDocument;
var JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
var JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
var JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
var JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
var JSONP_ERR_UNSAFE_URL = "JSONP requests only support absolute URLs with HTTP(S) protocols.";
var JsonpCallbackContext = class {};
function jsonpCallbackContext() {
	if (typeof window === "object") return window;
	return {};
}
var JsonpClientBackend = class JsonpClientBackend {
	callbackMap;
	document;
	resolvedPromise = Promise.resolve();
	nonce = inject(CSP_NONCE, { optional: true });
	constructor(callbackMap, document) {
		this.callbackMap = callbackMap;
		this.document = document;
		if (typeof ngDevMode === "undefined" || ngDevMode) console.warn("JSONP support is deprecated as it can cause XSS vulnerabilities, and will be removed in a future version of Angular. Please use standard HTTP requests instead.");
	}
	nextCallback() {
		return `ng_jsonp_callback_${nextRequestId++}`;
	}
	handle(req) {
		if (req.method !== "JSONP") throw new RuntimeError(2810, ngDevMode && JSONP_ERR_WRONG_METHOD);
		else if (req.responseType !== "json") throw new RuntimeError(2811, ngDevMode && JSONP_ERR_WRONG_RESPONSE_TYPE);
		if (req.headers.keys().length > 0) throw new RuntimeError(2812, ngDevMode && JSONP_ERR_HEADERS_NOT_SUPPORTED);
		if (!this.isAllowedJsonpUrl(req.urlWithParams)) throw new RuntimeError(2826, ngDevMode && JSONP_ERR_UNSAFE_URL);
		return new import_cjs.Observable((observer) => {
			const callback = this.nextCallback();
			const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
			const node = this.document.createElement("script");
			node.src = url;
			if (this.nonce) node.setAttribute("nonce", this.nonce);
			let body = null;
			let finished = false;
			this.callbackMap[callback] = (data) => {
				delete this.callbackMap[callback];
				body = data;
				finished = true;
			};
			const cleanup = () => {
				node.removeEventListener("load", onLoad);
				node.removeEventListener("error", onError);
				node.remove();
				delete this.callbackMap[callback];
			};
			const onLoad = () => {
				this.resolvedPromise.then(() => {
					cleanup();
					if (!finished) {
						observer.error(new HttpErrorResponse({
							url,
							status: 0,
							statusText: "JSONP Error",
							error: /* @__PURE__ */ new Error(JSONP_ERR_NO_CALLBACK)
						}));
						return;
					}
					observer.next(new HttpResponse({
						body,
						status: HTTP_STATUS_CODE_OK,
						statusText: "OK",
						url
					}));
					observer.complete();
				});
			};
			const onError = (error) => {
				cleanup();
				observer.error(new HttpErrorResponse({
					error,
					status: 0,
					statusText: "JSONP Error",
					url
				}));
			};
			node.addEventListener("load", onLoad);
			node.addEventListener("error", onError);
			this.document.body.appendChild(node);
			observer.next({ type: HttpEventType.Sent });
			return () => {
				if (!finished) this.removeListeners(node);
				cleanup();
			};
		});
	}
	removeListeners(script) {
		foreignDocument ??= this.document.implementation.createHTMLDocument();
		foreignDocument.adoptNode(script);
	}
	isAllowedJsonpUrl(url) {
		return /^https?:\/\//i.test(url);
	}
	static ɵfac = function JsonpClientBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || JsonpClientBackend)(ɵɵinject(JsonpCallbackContext), ɵɵinject(DOCUMENT));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: JsonpClientBackend,
		factory: JsonpClientBackend.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpClientBackend, [{ type: Injectable }], () => [{ type: JsonpCallbackContext }, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
function jsonpInterceptorFn(req, next) {
	if (req.method === "JSONP") return inject(JsonpClientBackend).handle(req);
	return next(req);
}
var JsonpInterceptor = class JsonpInterceptor {
	injector;
	constructor(injector) {
		this.injector = injector;
	}
	intercept(initialRequest, next) {
		return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
	}
	static ɵfac = function JsonpInterceptor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || JsonpInterceptor)(ɵɵinject(EnvironmentInjector));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: JsonpInterceptor,
		factory: JsonpInterceptor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpInterceptor, [{ type: Injectable }], () => [{ type: EnvironmentInjector }], null);
})();
var XSSI_PREFIX = /^\)\]\}',?\n/;
function validateXhrCompatibility(req) {
	for (const { property, errorCode } of [
		{
			property: "keepalive",
			errorCode: 2813
		},
		{
			property: "cache",
			errorCode: 2814
		},
		{
			property: "priority",
			errorCode: 2815
		},
		{
			property: "mode",
			errorCode: 2816
		},
		{
			property: "redirect",
			errorCode: 2817
		},
		{
			property: "credentials",
			errorCode: 2818
		},
		{
			property: "integrity",
			errorCode: 2820
		},
		{
			property: "referrer",
			errorCode: 2821
		},
		{
			property: "referrerPolicy",
			errorCode: 2823
		}
	]) if (req[property]) console.warn(formatRuntimeError(errorCode, `Angular detected that a \`HttpClient\` request with the \`${property}\` option was sent using XHR, which does not support it. To use the \`${property}\` option, use the Fetch API by removing \`withXhr()\` from the \`provideHttpClient()\` call.`));
}
var HttpXhrBackend = class HttpXhrBackend {
	xhrFactory;
	tracingService = inject(TracingService, { optional: true });
	constructor(xhrFactory) {
		this.xhrFactory = xhrFactory;
	}
	maybePropagateTrace(fn) {
		return this.tracingService?.propagate ? this.tracingService.propagate(fn) : fn;
	}
	handle(req) {
		if (req.method === "JSONP") throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
		ngDevMode && validateXhrCompatibility(req);
		const xhrFactory = this.xhrFactory;
		return (xhrFactory.ɵloadImpl ? (0, import_cjs.from)(xhrFactory.ɵloadImpl()) : (0, import_cjs.of)(null)).pipe((0, import_operators.switchMap)(() => {
			return new import_cjs.Observable((observer) => {
				const xhr = xhrFactory.build();
				xhr.open(req.method, req.urlWithParams);
				if (req.withCredentials) xhr.withCredentials = true;
				req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
				if (!req.headers.has(ACCEPT_HEADER)) xhr.setRequestHeader(ACCEPT_HEADER, ACCEPT_HEADER_VALUE);
				if (!req.headers.has(CONTENT_TYPE_HEADER)) {
					const detectedType = req.detectContentTypeHeader();
					if (detectedType !== null) xhr.setRequestHeader(CONTENT_TYPE_HEADER, detectedType);
				}
				if (req.timeout) xhr.timeout = req.timeout;
				if (req.responseType) {
					const responseType = req.responseType.toLowerCase();
					xhr.responseType = responseType !== "json" ? responseType : "text";
				}
				const reqBody = req.serializeBody();
				let headerResponse = null;
				const partialFromXhr = () => {
					if (headerResponse !== null) return headerResponse;
					const statusText = xhr.statusText || "OK";
					const headers = new HttpHeaders(xhr.getAllResponseHeaders());
					const url = xhr.responseURL || req.url;
					headerResponse = new HttpHeaderResponse({
						headers,
						status: xhr.status,
						statusText,
						url
					});
					return headerResponse;
				};
				const onLoad = this.maybePropagateTrace(() => {
					let { headers, status, statusText, url } = partialFromXhr();
					let body = null;
					if (status !== HTTP_STATUS_CODE_NO_CONTENT) body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
					if (status === 0) status = !!body ? HTTP_STATUS_CODE_OK : 0;
					let ok = status >= 200 && status < 300;
					if (req.responseType === "json" && typeof body === "string") {
						const originalBody = body;
						body = body.replace(XSSI_PREFIX, "");
						try {
							body = body !== "" ? JSON.parse(body) : null;
						} catch (error) {
							body = originalBody;
							if (ok) {
								ok = false;
								body = {
									error,
									text: body
								};
							}
						}
					}
					if (ok) {
						observer.next(new HttpResponse({
							body,
							headers,
							status,
							statusText,
							url: url || void 0
						}));
						observer.complete();
					} else observer.error(new HttpErrorResponse({
						error: body,
						headers,
						status,
						statusText,
						url: url || void 0
					}));
				});
				const onError = this.maybePropagateTrace((error) => {
					const { url } = partialFromXhr();
					const res = new HttpErrorResponse({
						error,
						status: xhr.status || 0,
						statusText: xhr.statusText || "Unknown Error",
						url: url || void 0
					});
					observer.error(res);
				});
				let onTimeout = onError;
				if (req.timeout) onTimeout = this.maybePropagateTrace((_) => {
					const { url } = partialFromXhr();
					const res = new HttpErrorResponse({
						error: new DOMException("Request timed out", "TimeoutError"),
						status: xhr.status || 0,
						statusText: xhr.statusText || "Request timeout",
						url: url || void 0
					});
					observer.error(res);
				});
				let sentHeaders = false;
				const onDownProgress = this.maybePropagateTrace((event) => {
					if (!sentHeaders) {
						observer.next(partialFromXhr());
						sentHeaders = true;
					}
					let progressEvent = {
						type: HttpEventType.DownloadProgress,
						loaded: event.loaded
					};
					if (event.lengthComputable) progressEvent.total = event.total;
					if (req.responseType === "text" && !!xhr.responseText) progressEvent.partialText = xhr.responseText;
					observer.next(progressEvent);
				});
				const onUpProgress = this.maybePropagateTrace((event) => {
					let progress = {
						type: HttpEventType.UploadProgress,
						loaded: event.loaded
					};
					if (event.lengthComputable) progress.total = event.total;
					observer.next(progress);
				});
				xhr.addEventListener("load", onLoad);
				xhr.addEventListener("error", onError);
				xhr.addEventListener("timeout", onTimeout);
				xhr.addEventListener("abort", onError);
				const reportUploadProgress = req.reportProgress || req.reportUploadProgress;
				const reportDownloadProgress = req.reportProgress || req.reportDownloadProgress;
				if (reportDownloadProgress) xhr.addEventListener("progress", onDownProgress);
				if (reportUploadProgress && reqBody !== null && xhr.upload) xhr.upload.addEventListener("progress", onUpProgress);
				xhr.send(reqBody);
				observer.next({ type: HttpEventType.Sent });
				return () => {
					xhr.removeEventListener("error", onError);
					xhr.removeEventListener("abort", onError);
					xhr.removeEventListener("load", onLoad);
					xhr.removeEventListener("timeout", onTimeout);
					if (reportDownloadProgress) xhr.removeEventListener("progress", onDownProgress);
					if (reportUploadProgress && reqBody !== null && xhr.upload) xhr.upload.removeEventListener("progress", onUpProgress);
					if (xhr.readyState !== xhr.DONE) xhr.abort();
				};
			});
		}));
	}
	static ɵfac = function HttpXhrBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXhrBackend)(ɵɵinject(XhrFactory));
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: HttpXhrBackend,
		factory: HttpXhrBackend.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXhrBackend, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: XhrFactory }], null);
})();
var HttpFeatureKind;
(function(HttpFeatureKind) {
	HttpFeatureKind[HttpFeatureKind["Interceptors"] = 0] = "Interceptors";
	HttpFeatureKind[HttpFeatureKind["LegacyInterceptors"] = 1] = "LegacyInterceptors";
	HttpFeatureKind[HttpFeatureKind["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
	HttpFeatureKind[HttpFeatureKind["NoXsrfProtection"] = 3] = "NoXsrfProtection";
	HttpFeatureKind[HttpFeatureKind["JsonpSupport"] = 4] = "JsonpSupport";
	HttpFeatureKind[HttpFeatureKind["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
	HttpFeatureKind[HttpFeatureKind["Fetch"] = 6] = "Fetch";
	HttpFeatureKind[HttpFeatureKind["Xhr"] = 7] = "Xhr";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
	return {
		ɵkind: kind,
		ɵproviders: providers
	};
}
function provideHttpClient(...features) {
	if (ngDevMode) {
		const featureKinds = new Set(features.map((f) => f.ɵkind));
		if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) throw new Error(`Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.`);
		const hasBackendOverride = featureKinds.has(HttpFeatureKind.Fetch) || featureKinds.has(HttpFeatureKind.Xhr);
		if (featureKinds.has(HttpFeatureKind.RequestsMadeViaParent) && hasBackendOverride) throw new Error(`Configuration error: withRequestsMadeViaParent() cannot be combined with withFetch() or withXhr() in the same call to provideHttpClient().`);
	}
	const providers = [
		HttpClient,
		FetchBackend,
		HttpInterceptorHandler,
		{
			provide: HttpHandler,
			useExisting: HttpInterceptorHandler
		},
		{
			provide: HttpBackend,
			useFactory: () => {
				return inject(FetchBackend);
			}
		},
		{
			provide: HTTP_INTERCEPTOR_FNS,
			useValue: xsrfInterceptorFn,
			multi: true
		}
	];
	for (const feature of features) providers.push(...feature.ɵproviders);
	return makeEnvironmentProviders(providers);
}
var LEGACY_INTERCEPTOR_FN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
function withInterceptorsFromDi() {
	return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
		provide: LEGACY_INTERCEPTOR_FN,
		useFactory: legacyInterceptorFnFactory
	}, {
		provide: HTTP_INTERCEPTOR_FNS,
		useExisting: LEGACY_INTERCEPTOR_FN,
		multi: true
	}]);
}
function withXsrfConfiguration({ cookieName, headerName }) {
	const providers = [];
	if (cookieName !== void 0) providers.push({
		provide: XSRF_COOKIE_NAME,
		useValue: cookieName
	});
	if (headerName !== void 0) providers.push({
		provide: XSRF_HEADER_NAME,
		useValue: headerName
	});
	return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
	return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
		provide: XSRF_ENABLED,
		useValue: false
	}]);
}
function withJsonpSupport() {
	return makeHttpFeature(HttpFeatureKind.JsonpSupport, [
		JsonpClientBackend,
		{
			provide: JsonpCallbackContext,
			useFactory: jsonpCallbackContext
		},
		{
			provide: HTTP_INTERCEPTOR_FNS,
			useValue: jsonpInterceptorFn,
			multi: true
		}
	]);
}
function withXhr() {
	return makeHttpFeature(HttpFeatureKind.Xhr, [HttpXhrBackend, {
		provide: HttpBackend,
		useExisting: HttpXhrBackend
	}]);
}
var HttpClientXsrfModule = class HttpClientXsrfModule {
	static disable() {
		return {
			ngModule: HttpClientXsrfModule,
			providers: [withNoXsrfProtection().ɵproviders]
		};
	}
	static withOptions(options = {}) {
		return {
			ngModule: HttpClientXsrfModule,
			providers: withXsrfConfiguration(options).ɵproviders
		};
	}
	static ɵfac = function HttpClientXsrfModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClientXsrfModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: HttpClientXsrfModule });
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ providers: [
		HttpXsrfInterceptor,
		{
			provide: HTTP_INTERCEPTORS,
			useExisting: HttpXsrfInterceptor,
			multi: true
		},
		{
			provide: HttpXsrfTokenExtractor,
			useClass: HttpXsrfCookieExtractor
		},
		withXsrfConfiguration({
			cookieName: XSRF_DEFAULT_COOKIE_NAME,
			headerName: XSRF_DEFAULT_HEADER_NAME
		}).ɵproviders,
		{
			provide: XSRF_ENABLED,
			useValue: true
		}
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientXsrfModule, [{
		type: NgModule,
		args: [{ providers: [
			HttpXsrfInterceptor,
			{
				provide: HTTP_INTERCEPTORS,
				useExisting: HttpXsrfInterceptor,
				multi: true
			},
			{
				provide: HttpXsrfTokenExtractor,
				useClass: HttpXsrfCookieExtractor
			},
			withXsrfConfiguration({
				cookieName: XSRF_DEFAULT_COOKIE_NAME,
				headerName: XSRF_DEFAULT_HEADER_NAME
			}).ɵproviders,
			{
				provide: XSRF_ENABLED,
				useValue: true
			}
		] }]
	}], null, null);
})();
var HttpClientModule = class HttpClientModule {
	static ɵfac = function HttpClientModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClientModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: HttpClientModule });
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ providers: [provideHttpClient(withInterceptorsFromDi(), withXhr())] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientModule, [{
		type: NgModule,
		args: [{ providers: [provideHttpClient(withInterceptorsFromDi(), withXhr())] }]
	}], null, null);
})();
var HttpClientJsonpModule = class HttpClientJsonpModule {
	static ɵfac = function HttpClientJsonpModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClientJsonpModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: HttpClientJsonpModule });
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ providers: [withJsonpSupport().ɵproviders] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientJsonpModule, [{
		type: NgModule,
		args: [{ providers: [withJsonpSupport().ɵproviders] }]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/http.mjs
/**
* @license Angular v22.2.1
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
var BODY = "b";
var HEADERS = "h";
var STATUS = "s";
var STATUS_TEXT = "st";
var REQ_URL = "u";
var RESPONSE_TYPE = "rt";
var CACHE_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
var ALLOWED_METHODS = ["GET", "HEAD"];
function canUseOrCacheRequest(req, options) {
	const { isCacheActive, filter, includePostRequests, includeRequestsWithAuthHeaders, includeRequestsWithCredentials, includeNonCacheableRequests } = options;
	const { transferCache: requestOptions, method: requestMethod } = req;
	if (!isCacheActive || requestOptions === false || requestMethod === "POST" && !includePostRequests && !requestOptions || requestMethod !== "POST" && !ALLOWED_METHODS.includes(requestMethod) || !includeRequestsWithAuthHeaders && hasAuthHeaders(req) || !includeRequestsWithCredentials && hasOutgoingCredentials(req) || !includeNonCacheableRequests && (hasUncacheableCacheControl(req.headers) || isNonCacheableRequest(req.cache)) || filter?.(req) === false) return false;
	return true;
}
function getHeadersToInclude(options, requestOptions) {
	return typeof requestOptions === "object" && requestOptions.includeHeaders ? requestOptions.includeHeaders : options.includeHeaders;
}
function retrieveStateFromCache(req, options, transferState, originMap, storeKey, skipUseCacheChecks = false) {
	if (!skipUseCacheChecks && !canUseOrCacheRequest(req, options)) return null;
	if (!storeKey) storeKey = makeCacheKey(req, originMap ? mapRequestOriginUrl(req.url, originMap) : req.url);
	const response = transferState.get(storeKey, null);
	if (!response) return null;
	const { [BODY]: undecodedBody, [RESPONSE_TYPE]: responseType, [HEADERS]: httpHeaders, [STATUS]: status, [STATUS_TEXT]: statusText, [REQ_URL]: url } = response;
	let body = undecodedBody;
	switch (responseType) {
		case "arraybuffer":
			body = fromBase64(undecodedBody);
			break;
		case "blob": body = new Blob([fromBase64(undecodedBody)]);
	}
	let headers = new HttpHeaders(httpHeaders);
	if (typeof ngDevMode === "undefined" || ngDevMode) {
		const { transferCache: requestOptions } = req;
		const headersToInclude = getHeadersToInclude(options, requestOptions);
		headers = appendMissingHeadersDetection(req.url, headers, headersToInclude ?? []);
	}
	return new HttpResponse({
		body,
		headers,
		status,
		statusText,
		url
	});
}
function transferCacheInterceptorFn(req, next) {
	const options = inject(CACHE_OPTIONS);
	if (!canUseOrCacheRequest(req, options)) return next(req);
	const transferState = inject(TransferState);
	const originMap = inject(HTTP_TRANSFER_CACHE_ORIGIN_MAP, { optional: true });
	const requestUrl = originMap ? mapRequestOriginUrl(req.url, originMap) : req.url;
	const storeKey = makeCacheKey(req, requestUrl);
	const cachedResponse = retrieveStateFromCache(req, options, transferState, null, storeKey, true);
	if (cachedResponse) return (0, import_cjs.of)(cachedResponse);
	return next(req).pipe((0, import_operators.tap)((event) => {
		if (event instanceof HttpResponse) {
			const { headers, body, status, statusText } = event;
			if (!options.includeNonCacheableRequests && (hasUncacheableCacheControl(headers) || hasSetCookieHeader(headers))) return;
			const { transferCache: requestOptions, responseType } = req;
			const headersToInclude = getHeadersToInclude(options, requestOptions);
			transferState.set(storeKey, {
				[BODY]: responseType === "arraybuffer" || responseType === "blob" ? toBase64(body) : body,
				[HEADERS]: getFilteredHeaders(headers, headersToInclude),
				[STATUS]: status,
				[STATUS_TEXT]: statusText,
				[REQ_URL]: requestUrl,
				[RESPONSE_TYPE]: responseType
			});
		}
	}));
}
function hasAuthHeaders(req) {
	const headers = req.headers;
	return headers.has("authorization") || headers.has("proxy-authorization") || headers.has("cookie");
}
var UNCACHEABLE_CACHE_CONTROL_DIRECTIVES = /* @__PURE__ */ new Set([
	"no-store",
	"private",
	"no-cache"
]);
function hasUncacheableCacheControl(headers) {
	const cacheControl = headers.get("cache-control");
	if (!cacheControl) return false;
	return cacheControl.split(",").some((directive) => {
		const directiveName = directive.split("=", 1)[0].trim().toLowerCase();
		return UNCACHEABLE_CACHE_CONTROL_DIRECTIVES.has(directiveName);
	});
}
function hasSetCookieHeader(headers) {
	return headers.has("set-cookie");
}
function isNonCacheableRequest(cache) {
	return cache === "no-cache" || cache === "no-store";
}
function hasOutgoingCredentials(req) {
	const { withCredentials, credentials } = req;
	return withCredentials || credentials === "include" || credentials === "same-origin";
}
function getFilteredHeaders(headers, includeHeaders) {
	if (!includeHeaders) return {};
	const headersMap = {};
	for (const key of includeHeaders) {
		const values = headers.getAll(key);
		if (values !== null) headersMap[key] = values;
	}
	return headersMap;
}
function sortAndConcatParams(params) {
	const searchParams = new URLSearchParams(params instanceof URLSearchParams ? params : params.toString());
	searchParams.sort();
	return searchParams.toString();
}
function makeCacheKey(request, mappedRequestUrl) {
	const { params, method, responseType } = request;
	const encodedParams = sortAndConcatParams(params);
	let serializedBody = request.serializeBody();
	if (serializedBody instanceof URLSearchParams) serializedBody = sortAndConcatParams(serializedBody);
	else if (typeof serializedBody !== "string") serializedBody = "";
	const hash = generateHash([
		method,
		responseType,
		mappedRequestUrl,
		serializedBody,
		encodedParams
	].join("\0"));
	return makeStateKey(hash);
}
function toBase64(buffer) {
	const bytes = new Uint8Array(buffer);
	const CHUNK_SIZE = 32768;
	let binaryString = "";
	for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
		const chunk = bytes.subarray(i, i + CHUNK_SIZE);
		binaryString += String.fromCharCode.apply(null, chunk);
	}
	return btoa(binaryString);
}
function fromBase64(base64) {
	const binary = atob(base64);
	return Uint8Array.from(binary, (c) => c.charCodeAt(0)).buffer;
}
function withHttpTransferCache(cacheOptions) {
	return [
		{
			provide: CACHE_OPTIONS,
			useFactory: () => {
				performanceMarkFeature("NgHttpTransferCache");
				return {
					isCacheActive: true,
					...cacheOptions
				};
			}
		},
		{
			provide: HTTP_ROOT_INTERCEPTOR_FNS,
			useValue: transferCacheInterceptorFn,
			multi: true
		},
		{
			provide: APP_BOOTSTRAP_LISTENER,
			multi: true,
			useFactory: () => {
				const appRef = inject(ApplicationRef);
				const cacheState = inject(CACHE_OPTIONS);
				return () => {
					appRef.whenStable().then(() => {
						cacheState.isCacheActive = false;
					});
				};
			}
		}
	];
}
function appendMissingHeadersDetection(url, headers, headersToInclude) {
	const warningProduced = /* @__PURE__ */ new Set();
	return new Proxy(headers, { get(target, prop) {
		const value = Reflect.get(target, prop);
		if (typeof value !== "function" || !(/* @__PURE__ */ new Set([
			"get",
			"has",
			"getAll"
		])).has(prop)) return value;
		return (headerName) => {
			const key = (prop + ":" + headerName).toLowerCase();
			if (!headersToInclude.includes(headerName) && !warningProduced.has(key)) {
				warningProduced.add(key);
				const truncatedUrl = truncateMiddle(url);
				console.warn(formatRuntimeError(-2802, `Angular detected that the \`${headerName}\` header is accessed, but the value of the header was not transferred from the server to the client by the HttpTransferCache. To include the value of the \`${headerName}\` header for the \`${truncatedUrl}\` request, use the \`includeHeaders\` list. The \`includeHeaders\` can be defined either on a request level by adding the \`transferCache\` parameter, or on an application level by adding the \`httpCacheTransfer.includeHeaders\` argument to the \`provideClientHydration()\` call. `));
			}
			return value.apply(target, [headerName]);
		};
	} });
}
function mapRequestOriginUrl(url, originMap) {
	const origin = new URL(url, "resolve://").origin;
	const mappedOrigin = originMap[origin];
	if (!mappedOrigin) return url;
	if (typeof ngDevMode === "undefined" || ngDevMode) verifyMappedOrigin(mappedOrigin);
	return url.replace(origin, mappedOrigin);
}
function verifyMappedOrigin(url) {
	if (new URL(url, "resolve://").pathname !== "/") throw new RuntimeError(2804, `Angular detected a URL with a path segment in the value provided for the \`HTTP_TRANSFER_CACHE_ORIGIN_MAP\` token: ${url}. The map should only contain origins without any other segments.`);
}
var SHA256_ROUND_CONSTANTS = /* @__PURE__ */ new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var textEncoder;
function generateHash(value) {
	textEncoder ??= new TextEncoder();
	const inputBytes = textEncoder.encode(value);
	let hashState0 = 1779033703;
	let hashState1 = 3144134277;
	let hashState2 = 1013904242;
	let hashState3 = 2773480762;
	let hashState4 = 1359893119;
	let hashState5 = 2600822924;
	let hashState6 = 528734635;
	let hashState7 = 1541459225;
	const messageLengthInBits = inputBytes.length * 8;
	const paddedLengthInBytes = (inputBytes.length + 8 >> 6) + 1 << 6;
	const paddedBytes = new Uint8Array(paddedLengthInBytes);
	paddedBytes.set(inputBytes);
	paddedBytes[inputBytes.length] = 128;
	const paddedBytesView = new DataView(paddedBytes.buffer);
	const lowBits = messageLengthInBits >>> 0;
	const highBits = messageLengthInBits / 4294967296 >>> 0;
	paddedBytesView.setUint32(paddedLengthInBytes - 8, highBits, false);
	paddedBytesView.setUint32(paddedLengthInBytes - 4, lowBits, false);
	const messageSchedule = /* @__PURE__ */ new Uint32Array(64);
	for (let chunkOffset = 0; chunkOffset < paddedLengthInBytes; chunkOffset += 64) {
		for (let i = 0; i < 16; i++) messageSchedule[i] = paddedBytesView.getUint32(chunkOffset + i * 4, false);
		for (let i = 16; i < 64; i++) {
			const prevWord15 = messageSchedule[i - 15];
			const sigma0 = ((prevWord15 >>> 7 | prevWord15 << 25) ^ (prevWord15 >>> 18 | prevWord15 << 14) ^ prevWord15 >>> 3) >>> 0;
			const prevWord2 = messageSchedule[i - 2];
			const sigma1 = ((prevWord2 >>> 17 | prevWord2 << 15) ^ (prevWord2 >>> 19 | prevWord2 << 13) ^ prevWord2 >>> 10) >>> 0;
			messageSchedule[i] = messageSchedule[i - 16] + sigma0 + messageSchedule[i - 7] + sigma1 >>> 0;
		}
		let workingStateA = hashState0;
		let workingStateB = hashState1;
		let workingStateC = hashState2;
		let workingStateD = hashState3;
		let workingStateE = hashState4;
		let workingStateF = hashState5;
		let workingStateG = hashState6;
		let workingStateH = hashState7;
		for (let i = 0; i < 64; i++) {
			const capitalSigma1 = ((workingStateE >>> 6 | workingStateE << 26) ^ (workingStateE >>> 11 | workingStateE << 21) ^ (workingStateE >>> 25 | workingStateE << 7)) >>> 0;
			const chFunction = (workingStateE & workingStateF ^ ~workingStateE & workingStateG) >>> 0;
			const temp1 = workingStateH + capitalSigma1 + chFunction + SHA256_ROUND_CONSTANTS[i] + messageSchedule[i] >>> 0;
			const temp2 = (((workingStateA >>> 2 | workingStateA << 30) ^ (workingStateA >>> 13 | workingStateA << 19) ^ (workingStateA >>> 22 | workingStateA << 10)) >>> 0) + ((workingStateA & workingStateB ^ workingStateA & workingStateC ^ workingStateB & workingStateC) >>> 0) >>> 0;
			workingStateH = workingStateG;
			workingStateG = workingStateF;
			workingStateF = workingStateE;
			workingStateE = workingStateD + temp1 >>> 0;
			workingStateD = workingStateC;
			workingStateC = workingStateB;
			workingStateB = workingStateA;
			workingStateA = temp1 + temp2 >>> 0;
		}
		hashState0 = hashState0 + workingStateA >>> 0;
		hashState1 = hashState1 + workingStateB >>> 0;
		hashState2 = hashState2 + workingStateC >>> 0;
		hashState3 = hashState3 + workingStateD >>> 0;
		hashState4 = hashState4 + workingStateE >>> 0;
		hashState5 = hashState5 + workingStateF >>> 0;
		hashState6 = hashState6 + workingStateG >>> 0;
		hashState7 = hashState7 + workingStateH >>> 0;
	}
	return [
		hashState0,
		hashState1,
		hashState2,
		hashState3,
		hashState4,
		hashState5,
		hashState6,
		hashState7
	].map((x) => x.toString(16).padStart(8, "0")).join("");
}
var httpResource = (() => {
	const jsonFn = makeHttpResourceFn("json");
	jsonFn.arrayBuffer = makeHttpResourceFn("arraybuffer");
	jsonFn.blob = makeHttpResourceFn("blob");
	jsonFn.text = makeHttpResourceFn("text");
	return jsonFn;
})();
function makeHttpResourceFn(responseType) {
	return function httpResource(request, options) {
		if (ngDevMode && !options?.injector) assertInInjectionContext(httpResource);
		const injector = options?.injector ?? inject(Injector);
		const cacheOptions = injector.get(CACHE_OPTIONS, null, { optional: true });
		const transferState = injector.get(TransferState, null, { optional: true });
		const originMap = injector.get(HTTP_TRANSFER_CACHE_ORIGIN_MAP, null, { optional: true });
		const getInitialStream = (req) => {
			if (cacheOptions && transferState && req) {
				const cachedResponse = retrieveStateFromCache(req, cacheOptions, transferState, originMap);
				if (cachedResponse) try {
					const body = cachedResponse.body;
					const parsed = options?.parse ? options.parse(body) : body;
					return signal({ value: parsed });
				} catch (e) {
					if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(`Angular detected an error while parsing the cached response for the httpResource at \`${req.url}\`. The resource will fall back to its default value and try again asynchronously.`, e);
				}
			}
		};
		return new HttpResourceImpl(injector, (ctx) => normalizeRequest(ctx, request, responseType), options?.defaultValue, options?.debugName, options?.parse, options?.equal, getInitialStream);
	};
}
function normalizeRequest(ctx, request, responseType) {
	let unwrappedRequest = typeof request === "function" ? request(ctx) : request;
	if (unwrappedRequest === void 0) return;
	else if (typeof unwrappedRequest === "string") unwrappedRequest = { url: unwrappedRequest };
	const headers = unwrappedRequest.headers instanceof HttpHeaders ? unwrappedRequest.headers : new HttpHeaders(unwrappedRequest.headers);
	const params = unwrappedRequest.params instanceof HttpParams ? unwrappedRequest.params : new HttpParams({ fromObject: unwrappedRequest.params });
	return new HttpRequest(unwrappedRequest.method ?? "GET", unwrappedRequest.url, unwrappedRequest.body ?? null, {
		headers,
		params,
		reportDownloadProgress: unwrappedRequest.reportProgress,
		withCredentials: unwrappedRequest.withCredentials,
		keepalive: unwrappedRequest.keepalive,
		cache: unwrappedRequest.cache,
		priority: unwrappedRequest.priority,
		mode: unwrappedRequest.mode,
		redirect: unwrappedRequest.redirect,
		responseType,
		context: unwrappedRequest.context,
		transferCache: unwrappedRequest.transferCache,
		credentials: unwrappedRequest.credentials,
		referrer: unwrappedRequest.referrer,
		referrerPolicy: unwrappedRequest.referrerPolicy,
		integrity: unwrappedRequest.integrity,
		timeout: unwrappedRequest.timeout
	});
}
var HttpResourceImpl = class extends ResourceImpl {
	client;
	_headers = linkedSignal({
		...ngDevMode ? { debugName: "_headers" } : {},
		source: this.extRequest,
		computation: () => void 0
	});
	_progress = linkedSignal({
		...ngDevMode ? { debugName: "_progress" } : {},
		source: this.extRequest,
		computation: () => void 0
	});
	_statusCode = linkedSignal({
		...ngDevMode ? { debugName: "_statusCode" } : {},
		source: this.extRequest,
		computation: () => void 0
	});
	headers = computed(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0, ...ngDevMode ? [{ debugName: "headers" }] : []);
	progress = this._progress.asReadonly();
	statusCode = this._statusCode.asReadonly();
	constructor(injector, request, defaultValue, debugName, parse, equal, getInitialStream) {
		super(request, ({ params: request, abortSignal }) => {
			let sub;
			let aborted = false;
			const onAbort = () => {
				aborted = true;
				sub?.unsubscribe();
			};
			abortSignal.addEventListener("abort", onAbort, { once: true });
			const stream = signal({ value: void 0 }, ...ngDevMode ? [{ debugName: "stream" }] : []);
			let resolve;
			const promise = new Promise((r) => resolve = r);
			const send = (value) => {
				stream.set(value);
				resolve?.(stream);
				resolve = void 0;
			};
			sub = this.client.request(request).subscribe({
				next: (event) => {
					switch (event.type) {
						case HttpEventType.Response:
							this._headers.set(event.headers);
							this._statusCode.set(event.status);
							try {
								send({ value: parse ? parse(event.body) : event.body });
							} catch (error) {
								send({ error: encapsulateResourceError(error) });
							}
							break;
						case HttpEventType.DownloadProgress: this._progress.set(event);
					}
				},
				error: (error) => {
					if (error instanceof HttpErrorResponse) {
						this._headers.set(error.headers);
						this._statusCode.set(error.status);
					}
					send({ error });
					abortSignal.removeEventListener("abort", onAbort);
				},
				complete: () => {
					if (resolve) send({ error: new RuntimeError(-991, ngDevMode && "Resource completed before producing a value") });
					abortSignal.removeEventListener("abort", onAbort);
				}
			});
			if (aborted) sub.unsubscribe();
			return promise;
		}, defaultValue, equal, debugName, injector, void 0, getInitialStream);
		this.client = injector.get(HttpClient);
	}
	set(value) {
		super.set(value);
		this._headers.set(void 0);
		this._progress.set(void 0);
		this._statusCode.set(void 0);
	}
};
//#endregion
export { getDOM as C, PlatformLocation as S, PathLocationStrategy as _, NavigationAdapterForLocation as a, DomAdapter as b, PLATFORM_SERVER_ID as c, parseCookieValue as d, PRECOMMIT_HANDLER_SUPPORTED as f, LocationStrategy as g, Location as h, HTTP_ROOT_INTERCEPTOR_FNS as i, ViewportScroller as l, APP_BASE_HREF as m, withHttpTransferCache as n, NullViewportScroller as o, PlatformNavigation as p, HTTP_FETCH_MAX_RESPONSE_SIZE as r, PLATFORM_BROWSER_ID as s, httpResource as t, XhrFactory as u, joinWithSlash as v, setRootDomAdapter as w, LOCATION_INITIALIZED as x, normalizeQueryParams as y };
