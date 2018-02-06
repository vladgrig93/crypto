webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginreg_loginreg_component__ = __webpack_require__("../../../../../src/app/loginreg/loginreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reg_reg_component__ = __webpack_require__("../../../../../src/app/reg/reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dash_dash_component__ = __webpack_require__("../../../../../src/app/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mydash_mydash_component__ = __webpack_require__("../../../../../src/app/mydash/mydash.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_8__dash_dash_component__["a" /* DashComponent */],
        children: [
            { path: 'loginreg', component: __WEBPACK_IMPORTED_MODULE_2__loginreg_loginreg_component__["a" /* LoginregComponent */] },
            { path: 'reg', component: __WEBPACK_IMPORTED_MODULE_3__reg_reg_component__["a" /* RegComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
            { path: 'convert', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */] },
        ]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */],
        children: [
            { path: 'mydash', component: __WEBPACK_IMPORTED_MODULE_9__mydash_mydash_component__["a" /* MydashComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
            { path: 'convert', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__keys_pipe__ = __webpack_require__("../../../../../src/app/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loginreg_loginreg_component__ = __webpack_require__("../../../../../src/app/loginreg/loginreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reg_reg_component__ = __webpack_require__("../../../../../src/app/reg/reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dash_dash_component__ = __webpack_require__("../../../../../src/app/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mydash_mydash_component__ = __webpack_require__("../../../../../src/app/mydash/mydash.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_13__loginreg_loginreg_component__["a" /* LoginregComponent */],
                __WEBPACK_IMPORTED_MODULE_14__reg_reg_component__["a" /* RegComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dash_dash_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_20__mydash_mydash_component__["a" /* MydashComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = " <!DOCTYPE html>\n <html lang=\"en\">\n <head>\n   <meta charset=\"UTF-8\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n   <title>Document</title>\n </head>\n <body style='padding-bottom:500px'>\n   <div class=\"container\">\n     <div *ngIf='!contactSent'>\n      <h6 class='flow-text' style='color:white;text-align:center;margin-bottom:43px'>Have suggestions for improvement, or inquiries? We'd love to hear your feedback, so please shoot us a message</h6>\t\t\t\t\t\t\n      <div style='text-align:center;'>\n        <div  style='display:inline-block'>      \n            <form style='margin-bottom:150px;'id='contactform' (submit)='onContactSend()'>\n              <div class=\"input-field col s5\">\n                <input style='color:#b7ffea'id='memail' *ngIf='!message'name=\"email\"type=\"email\" class='validate' [(ngModel)]=\"newContact.email\">\n                <label  *ngIf='!message' style='color:aquamarine'for='memail' data-error='Please enter a valid email'>E-mail</label>\n              </div>\n              <div style='margin-bottom:20px;' class=\"input-field col s5\">\n                <textarea id='mmessage' name=\"message\" style=\"width:300px;height:80px;color:#b7ffea\" [(ngModel)]=\"newContact.message\"></textarea>\n                <label style='color:aquamarine' for='mmessage'>Message</label>\n              </div>\n                <button style='background-color:aquamarine;border-radius:10px' type='submit' form=\"contactform\" class=\"btn waves-effect waves-light\" value='send'>\n                  <i class=\"material-icons right\">send</i>\n                </button>\n            </form>\n        </div>\n      </div>\n    </div>\n    <div *ngIf='contactSent' style='color:#b7ffea;padding-top:50px;padding-bottom:300px'><h6 style='padding-left:100px;'class='flow-text'>Thank you, your message has been sent and one of our representatives will get back to you shortly</h6></div>\n  </div>\n </body>\n </html> \n\n\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
        this.newContact = { email: '', message: '' };
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DataService.currentMessage.subscribe(function (message) { return _this.message = message; });
        // this.newMessage();
        console.log('message in child contact', this.message);
    };
    // newMessage() {
    //     this._DataService.changeMessage(true)
    //   }
    ContactComponent.prototype.onContactSend = function () {
        var _this = this;
        this._DataService.addMessage(this.newContact)
            .subscribe(function (data) {
            console.log("got response from server:", data);
            if (data._body == 1) {
                console.log("something went wrong");
                _this.errors = data;
            }
            else {
                _this.contactSent = true;
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dash/dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}*/\n\n\na{\n    padding:5px;\n    color:white;\n}\n\n\nhtml,body{\n    /*margin:0 auto;*/\nbackground: #4B79A1;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to top, #4B79A1,#283E51); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n}\n\n@font-face {\n    font-family: 'subzero';\n    src:url(" + escape(__webpack_require__("../../../../../src/assets/fonts/earthorbiter.ttf")) + ");\n    font-weight: normal;\n    font-style: normal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <link href=\"http://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>CryptoTrack</title>\n</head>\n\n<body>\n    <nav style='margin-bottom:30px;'>\n        <div class=\"nav-wrapper\" style='background: #06beb6;  /* fallback for old browsers */\nbackground: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to left, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n'>\n          <div class=\"brand-logo\">\n            <h3 class=\"flow-text\" style=\"color:white;display:inline-block;border:solid-white 2px;border-radius:5px;padding-left:20px;font-family:subzero\">transCRYPTER</h3>\n          </div>\n          <ul class=\"right hide-on-med-and-down\" style='padding-right:20px'>\n            <li style='padding-right:15px;'><a [routerLink]=\"['/home']\" (click)='onHomeClick()'>Home</a></li>\n            <li style='padding-left:15px;padding-right:15px;'><a [routerLink]=\"['/convert']\" (click)='otherClick()'>Convert</a></li>  \n            <li style='padding-left:15px;padding-right:15px;'><a [routerLink]=\"['/reg']\"(click)='otherClick()' >SignUp</a></li>\n            <li style='padding-left:15px;padding-right:15px;'> <a [routerLink]=\"['/loginreg']\"(click)='otherClick()'>SignIn</a></li>\n            <li> <a [routerLink]=\"['/contact']\"(click)='otherClick()'>ContactUs</a></li>\n          </ul>\n        </div>\n    </nav>\n   \n  <div *ngIf=\" !homeClicked && !otherClicked ; else routeit\">\n    <app-main></app-main>\n  </div>\n\n  <div style=\"margin-bottom:0px;\"> \n    <ng-template #routeit>\n      <router-outlet></router-outlet>\n    </ng-template>\n  </div>\n</body>\n\n</html>\n\n"

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashComponent = (function () {
    function DashComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
    }
    DashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeClicked = false;
        this.otherClicked = false;
        this.newMessage();
        this._DataService.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log('message in parent dash logged out', this.message);
    };
    DashComponent.prototype.newMessage = function () {
        this._DataService.changeMessage(false);
    };
    DashComponent.prototype.onHomeClick = function () {
        if (this.homeClicked == false) {
            this.homeClicked = true;
        }
    };
    DashComponent.prototype.otherClick = function () {
        if (this.otherClicked == false) {
            this.otherClicked = true;
        }
    };
    DashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dash',
            template: __webpack_require__("../../../../../src/app/dash/dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService.prototype.getAllCoins = function () {
        var _this = this;
        return this._http.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.getScrollData = function () {
        var _this = this;
        return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,XRP,ADA,XLM,MIOTA,XRB,NEO,XMR,TRX,ZEC,SC,EOS,DASH&tsyms=USD,EUR')
            .map(function (scrollresult) { return _this.scrollresult = scrollresult.json(); });
    };
    DataService.prototype.getData = function (name, time) {
        var _this = this;
        console.log('name is', name);
        console.log('time is', time);
        return this._http.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + name + '&tsyms=USD,EUR&ts=' + time)
            .map(function (result2) { return _this.result2 = result2.json(); });
    };
    DataService.prototype.getCurrent = function (name) {
        var _this = this;
        return this._http.get('https://min-api.cryptocompare.com/data/price?fsym=' + name + '&tsyms=BTC,USD,EUR')
            .map(function (price) { return _this.price = price.json(); });
    };
    DataService.prototype.getCurrentforPort = function (names) {
        var _this = this;
        console.log('getting current prices for portfolio', names);
        var link = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + names + '&tsyms=USD';
        console.log('link in data service is', link);
        return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + names + '&tsyms=USD')
            .map(function (portprices) { return _this.portprices = portprices.json(); });
    };
    DataService.prototype.convertCoin = function (coin) {
        return this._http.post('/addCoin', coin);
    };
    DataService.prototype.addCryptoPort = function (tradeObj) {
        return this._http.post('/addTrade', tradeObj);
    };
    DataService.prototype.getUserPort = function () {
        return this._http.get('/myport');
    };
    DataService.prototype.deleteTrade = function (id) {
        return this._http.get('/delete/' + id, id);
    };
    //USER FUNCTIONS
    DataService.prototype.addUser = function (userObj) {
        return this._http.post('/users', userObj);
    };
    DataService.prototype.loginUser = function (userObj) {
        return this._http.post('/login', userObj);
    };
    DataService.prototype.logOut = function () {
        return this._http.get('/logout');
    };
    DataService.prototype.getUser = function () {
        return this._http.get('/currentuser');
    };
    //MESSAGE functions
    DataService.prototype.addMessage = function (messageObj) {
        return this._http.post('/messages', messageObj);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    color:white;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <link href=\"http://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title></title>\n</head>\n<body style='padding-bottom:400px;'>\n\n  <h6 style=\"color:white;padding-left:10px;display:block;margin:10px;margin-bottom:40px;text-align:center;font-size:20px\">Enter in trades made to track crypto-performance and coin-stats</h6>\n\n  <div style=\"width:300px;margin:20px;display:inline-block;border:solid#0ED7A9 2px;border-radius:10px;padding:20px\">\n      <form id='form2' (submit)='convert()' #Form='ngForm' class=\"col s5\">\n          \n          <div style='color:#b7ffea;padding:10px' class=\"input-field col s5\">\n            <select id='cname' name='name' [(ngModel)]=\"newCoin.name\" materialize=\"material_select\">\n              <option  *ngFor='let coin of coins'>{{coin}}</option>\n            </select>\n            <label for='cname'style='color:white;font-size:16px;'>Crypto-Currency:</label>\n          </div>\n          \n          <div class=\"input-field col s5\">\n            <p style='color:white;'>Date of Trade:</p>\n            <input id='cdate' type=\"date\" name='date' style='color:#b7ffea' [(ngModel)]=\"newCoin.date\">\n          </div>\n          \n          <div class=\"input-field col s5\">\n            <p style='color:white;'>Time of Trade:(UTC)</p>\n            <input id='ctime' type=\"time\" name='time' style='color:#b7ffea' [(ngModel)]=\"newCoin.time\">\n          </div>\n          \n          <div class=\"input-field col s5\">\n            <input id='camount' type=\"number\" style='color:#b7ffea' name='amount'[(ngModel)]=\"newCoin.amount\">\n            <label style='color:white;' for=\"camount\">Amount Received</label>\n          </div>  \n      </form>  \n      \n      <div style=\"padding-left:105px;padding-top:20px\">\n        <button style='background-color:#06beb6' (click)='animate()' type=\"submit\" form=\"form2\" value=\"Convert\" class=\"btn btn-floating pulse\">\n                <i class=\"material-icons\">arrow_forward</i>\n        </button>\n      </div>\n  \n  </div>\n\n  \n \n\n<div style='display:inline-block;vertical-align:top;margin-left:170px'>\n    \n    <div *ngIf='error1'>\n      <div id='coinstatsstagger' class=\"flow-text\" style='color:#ff0c55;font-size:18px;'>\n        <p>Sorry, price data for {{newCoin.name}} does not exist for the specified date-time.</p>\n        <p>Please try a more recent date</p>\n      </div>\n    </div>\n\n    <div *ngIf='success && !portclicked'>\n        <ul id='coinstatsstagger'>\n          <li style='color:white;font-size:30px;margin-left:20px'>Crypto Performance</li>\n          <li style='font-size:18px;list-style-type: circle;margin:30px;color:whitesmoke;' class=\"flow-text\">A single <b>{{newCoin.name}}</b> was worth <b>{{singlevalue | currency:'$' : 4}}</b> at the time of the trade</li>\n          <li style='font-size:18px;list-style-type: circle;margin:30px;color:whitesmoke;' class=\"flow-text\">Total worth of <b>{{newCoin.name}}</b> from the trade was <b>{{totalvalue | currency:'USD'}}</b> </li>\n          \n          <li style='font-size:18px;list-style-type: circle;margin:30px;color:whitesmoke;' class=\"flow-text\" *ngIf='singlenet'>As of now <b>{{newCoin.name}}</b> is up <span style='color:#0ED7A9'>{{coindelta | percent:'1.2-2'}} ({{singledifference | currency:'USD':'1.5-5'}})</span> at <b>{{currentprice | currency:'USD':'1.2-2'}}</b></li>\n          <li style='font-size:18px;list-style-type: circle;margin:30px;color:whitesmoke;' class=\"flow-text\" *ngIf='!singlenet'>As of now <b>{{newCoin.name}}</b> is down <span style='color:#F47454'>{{coindelta | percent:'1.2-2'}} ({{singledifference | currency:'USD':'1.5-5'}})</span> at <b>{{currentprice | currency:'USD':'1.2-2'}}</b></li>\n\n          <li style='font-size:18px;list-style-type: circle;margin:30px;color:whitesmoke;' class=\"flow-text\" *ngIf='net'>Trade resulted in a net <b>profit</b> of <span style='color:#0ED7A9'>{{difference | currency:'USD':'1.2-2'}}</span></li>\n          <li style='font-size:18px;list-style-type: circle;margin:30px;color:whitesmoke;' class=\"flow-text\" *ngIf='!net'>Trade resulted in a net <b>loss</b> of <span style='color:#F47454'>{{difference | currency:'USD':'1.2-2'}}</span></li>\n        </ul>\n    </div>\n\n    <div *ngIf='message && success && !portclicked'>\n      <form (submit)='addtoPort()' #Form='ngForm' id='addPort'>\n      </form>\n      <button style='margin-left:250px;margin-top:10px;border-radius:8px' type=\"submit\" class='btn waves-effect waves-light' form='addPort'>Add to Portfolio</button>\n    </div>\n\n    <div *ngIf='portclicked && success'>\n      <ul>\n        <li style='color:#b7ffea;font-size:24px'>Trade Added to Portfolio!</li>\n      </ul>\n    </div>\n\n</div>\n\n\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HomeComponent = (function () {
    function HomeComponent(_DataService, _Router, _elementRef) {
        this._DataService = _DataService;
        this._Router = _Router;
        this._elementRef = _elementRef;
        this.objectKeys = Object.keys; //doing this because API is composed of objects, not arrays
        this.coins = [];
        this.newCoin = { name: "", date: "", time: "", amount: "", pricethen: "", totalthen: "" };
        this.tradeObject = { coinid: "", singlevalue: "", totalvalue: "" };
        this.elementRef = _elementRef;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portclicked = false;
        this._DataService.getAllCoins().subscribe(function (data) {
            _this.fullres = data;
            for (var value in data.Data) {
                _this.coins.push(value);
            }
        });
        this._DataService.currentMessage.subscribe(function (message) { return _this.message = message; });
        // this.newMessage();
        // console.log('message in child convert', this.message)
        jQuery(this.elementRef.nativeElement).find('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });
        jQuery(this.elementRef.nativeElement).find('.timepicker').pickatime({
            default: 'now',
            fromnow: 0,
            twelvehour: false,
            donetext: 'OK',
            cleartext: 'Clear',
            canceltext: 'Cancel',
            autoclose: false,
            ampmclickable: true,
            aftershow: function () { } //Function for after opening timepicker
        });
    };
    HomeComponent.prototype.addtoPort = function () {
        var _this = this;
        this._DataService.addCryptoPort(this.tradeObject).subscribe(function (data) {
            console.log('got back trade data to the component', _this.tradedata);
        });
        this.portclicked = true;
    };
    HomeComponent.prototype.convert = function () {
        var _this = this;
        this._DataService.convertCoin(this.newCoin).subscribe(function (data) {
            _this.tradedata = JSON.parse(data['_body']);
            console.log('DATA BODY is', _this.tradedata);
            console.log('CRYPTO ID IS', _this.tradedata._id);
            console.log('date is', _this.newCoin.date);
            console.log('time is', _this.newCoin.time);
            var datetime = String(_this.newCoin.date) + " " + String(_this.newCoin.time) + ":00.000";
            console.log('datetime', datetime);
            var unixTimestamp = Math.round(new Date(datetime).getTime() / 1000);
            _this._DataService.getData(_this.newCoin.name, unixTimestamp).subscribe(function (data) {
                _this.senddata = data;
                console.log('got back data', _this.senddata);
                if (data[_this.newCoin.name].USD == 0) {
                    console.log('Sorry, price data does not exist at that time for this coin');
                    _this.error1 = true;
                    _this.success = false;
                }
                else if (data[_this.newCoin.name].USD > 0) {
                    _this.success = true;
                    _this.error1 = false;
                    _this.singlevalue = data[_this.newCoin.name].USD;
                    _this.totalvalue = data[_this.newCoin.name].USD * _this.newCoin.amount;
                    //combining single/total into one object to pass it when adding to portfolio
                    _this.tradeObject.singlevalue = _this.singlevalue;
                    _this.tradeObject.totalvalue = _this.totalvalue;
                    _this.tradeObject.coinid = _this.tradedata._id;
                    //
                    _this._DataService.getCurrent(_this.newCoin.name).subscribe(function (data) {
                        console.log('current price is:', data.USD);
                        _this.currentprice = data.USD;
                        _this.currenttotal = data.USD * _this.newCoin.amount;
                        console.log('currenttotal is:', _this.currenttotal);
                        _this.difference = _this.currenttotal - _this.totalvalue;
                        console.log('total difference:', _this.difference);
                        if (_this.difference >= 0) {
                            _this.net = true;
                        }
                        else {
                            _this.net = false;
                        }
                        _this.singledifference = (_this.currentprice) - (_this.singlevalue);
                        console.log('singledifference:', _this.singledifference);
                        _this.coindelta = (_this.singledifference / _this.singlevalue);
                        console.log('coindelta%:', _this.coindelta);
                        if (_this.singledifference >= 0) {
                            _this.singlenet = true;
                        }
                        else {
                            _this.singlenet = false;
                        }
                    });
                }
            });
        });
        this.portclicked = false;
    };
    HomeComponent.prototype.animate = function () {
        Materialize.fadeInImage('#coinstatsstagger');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value); //.map(key => value[key]);
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'keys', pure: false })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../../../../../src/app/loginreg/loginreg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginreg/loginreg.component.html":
/***/ (function(module, exports) {

module.exports = "<body style='padding-bottom:400px;'>\n<div class=\"container\"style='padding-top:70px'>\n  <div class='row'>\n    <div class='col s12'>\n            <div style='text-align:center'>\n              <h3 class='flow-text' style='color:lightcyan'>Sign In to add trades and track portfolio performance</h3>\n            </div>\n      </div>\n  </div>\n  <div class='row'>\n    <div class='col s12'>\n      <div style='text-align:center'>\n      <div style=\"display:inline-block;\">\n          <form id='login' (submit)=\"login()\" style='margin-bottom:240px;'>\n            <div class=\"row\">\n              <div class=\"input-field\">\n                <input id='cemail' style='text-align:center;width:300px;color:#b7ffea' type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\">\n                <label style='color:aquamarine'for='cemail'>E-mail</label>\n              </div>\n            </div>\n            <div class='row'>\n              <div class=\"input-field\">\n                <input id='cpass' style='text-align:center;width:300px;color:#b7ffea' type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\">\n                <label style='color:aquamarine'for='cpass'>Password</label>\n              </div>\n            </div>\n            <div *ngIf='errors' style='color:#ff4965;font-size:14px;margin-bottom:10px'>Email or password is incorrect, please try again</div>\n            <button type='submit' value='SignIn' form='login' class=\"btn waves-effect waves-light\" style='border-radius:7px;'>Sign-In</button>\n          </form>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/loginreg/loginreg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginregComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginregComponent = (function () {
    function LoginregComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
        this.user = { email: "", password: "" };
    }
    LoginregComponent.prototype.ngOnInit = function () {
    };
    LoginregComponent.prototype.login = function () {
        var _this = this;
        this._DataService.loginUser(this.user)
            .subscribe(function (data) {
            console.log("got response from server FOR LOGIN:", data);
            if (data._body == 1) {
                console.log("validation errors");
                _this.errors = data;
            }
            else if (data._body == 0) {
                console.log('sorry user doesnt exist');
                _this.errors = data;
            }
            else {
                console.log("logged in user, redirecting");
                _this._Router.navigate(['/profile']);
            }
        });
    };
    LoginregComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loginreg',
            template: __webpack_require__("../../../../../src/app/loginreg/loginreg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loginreg/loginreg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginregComponent);
    return LoginregComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\n\nhtml,body{\n\nheight:100%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <link href=\"http://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n\n<body>\n<marquee behavior=\"scroll\" direction=\"left\" style=\"color:#99ccff;font-size:20px\">{{scrollSentence}}</marquee>\n<div style='display:block;text-align:center'>\n  <h1 class=\"flow-text\" style=\"color:white;margin-top:70px;\"> BROWSE, TRACK, CONVERT, AND MANAGE CRYPTO TRADES</h1>\n  <h4 class=\"flow-text\" style=\"color:#b7ffea; ;margin-top:50px\">Join today and begin tracking profits on your crypto trading journey</h4>\n  <div style='display:inline-block;margin-top:70px'>\n    <a [routerLink]=\"['/reg']\" style='background-color:#06beb6'class=\"btn btn-floating pulse\"><i class=\"material-icons\" style='font-size: 25px'>arrow_drop_down</i></a>\n  </div>\n</div>\n<div style=\"padding-left:200px;padding-top:50px\">\n  <router-outlet></router-outlet>\n</div>\n\n<footer class=\"page-footer\" style='background: #06beb6;  /* fallback for old browsers */\nbackground: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to left, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n;'>\n  <div style=\"display:block;text-align:center;margin-top:430px;padding:15px;padding-bottom:50px\">\n      <a style='color:white' href=\"https://www.linkedin.com/in/vladimirgrigoryan/\"><i class=\"fa fa-linkedin-square fa-4\" aria-hidden=\"true\" style='font-size: 20px;padding:5px'></i></a>\n      <a style='color:white;' href=\"https://github.com/vladgrig93\"><i class=\"fa fa-github fa-4\" aria-hidden=\"true\" style='font-size: 20px;padding:5px'></i></a>\n    <p class=\"flow-text\" style='font-size:14px;color:white'>&copy; 2018 Transcrypter: All rights reserved</p>\n  </div>\n</footer>\n\n</body>\n</html>\n\n\n\t\t\t\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
        this.scrollArray = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DataService.getScrollData().subscribe(function (data) {
            _this.scrollData = data;
            console.log('scrolldata is', _this.scrollData);
            for (var object in data) {
                _this.scrollArray.push("   " + object + ": $" + data[object].USD);
            }
            _this.scrollSentence = _this.scrollArray.join('  | ');
        });
    };
    MainComponent.prototype.takeToReg = function () {
        console.log('button clicked');
        this._Router.navigate(['/reg']);
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mydash/mydash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\n\nhtml,body{\n\nheight:100%\n}\n\nli{\n  opacity:0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mydash/mydash.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n  <script src=\"node_modules/chart.js/src/chart.js\"></script>\n</head>\n<body style='padding-bottom:400px;'>    \n\n<div style=\"padding:10px;padding-left:20px\">\n  <h4 style='color:#a5f3ff; margin-bottom:20px;border-bottom:#48b1bf solid 0.1px'>Crypto Portfolio</h4>\n\n  <table class=\"responsive-table\" style='margin-bottom:30px;'>\n  <table class=\"highlight\">\n    <tr style=\"color:lightcyan;\">\n      <th style=\"text-align:right\">Crypto</th>\n      <th style=\"text-align:right\">Date Traded</th> \n      <th style=\"text-align:right\">Time Traded</th>\n      <th style=\"text-align:right\">Amount Received</th>\n      <th style=\"text-align:right\">Trade Price per Crypto</th>\n      <th style=\"text-align:right\">Current Price per Crypto</th>\n      <th style=\"text-align:right\">Total Trade Amount</th>\n      <th style=\"text-align:right\">Net Gain/Loss</th>\n      <th style=\"text-align:right\">Trade Performance</th>\n    </tr>\n    <tr *ngFor='let stat of afterArray' style=\"color:#6ad7ff;\">\n      <td style=\"text-align:center\">{{stat.name}}</td>\n      <td style=\"text-align:center\">{{stat.date | date:mediumDate}} </td> \n      <td style=\"text-align:center\">{{stat.time}}</td>\n      <td style=\"text-align:right\">{{stat.amount}}</td>\n      <td style=\"text-align:right\">{{stat.pricethen | currency:'$' : 4}}</td>\n      <td style=\"text-align:right\">{{stat.currentprice | currency:'$' : 4}}</td>\n      <td style=\"text-align:right\">{{stat.totalthen | currency:'$' : 4}}</td>\n      <td *ngIf='stat.pos_neg' style='color:aquamarine;text-align:right'>+ {{stat.difference | currency:'$' : 4}}</td>\n      <td *ngIf='!stat.pos_neg' style='color:#ff0c55;text-align:right'> {{stat.difference | currency:'$' : 4}}</td>\n      <td *ngIf='stat.pos_neg' style='color:aquamarine;text-align:right'>+ {{stat.change | percent:'1.2-2'}}</td>\n      <td *ngIf='!stat.pos_neg' style='color:#ff0c55;text-align:right'>{{stat.change | percent:'1.2-2'}}</td>\n      <td><a href='javascript:void(0)' (click)='onDelete(stat.id)'><i class=\"material-icons\">delete_forever</i>\n</a></td>\n    </tr>\n  </table>\n  </table>\n</div>\n<div style=\"padding:10px;padding-left:20px\">\n    <h5 style='color:#a5f3ff;margin-bottom:20px;border-bottom:#06beb6 solid 0.1px'>Portfolio Metrics</h5>\n</div>\n<div class=\"row\">\n    <div class='col s6' style=\"display:inline-block;padding-left:20px;vertical-align:top\">\n      <ul id='animateme' style='margin-bottom:50px'>\n        <li style=\"color:lightcyan;padding-left:15px;font-size:18px\">Total Invested | <span style='color:#6ad7ff;text-align:right'>{{totalinvested | currency:'$' : 4}}</span></li>\n        <li style=\"color:lightcyan;padding-left:15px;;font-size:18px\">Net Gain |\n          <span *ngIf='sodl' style='color:aquamarine'> + {{netgain | currency:'$' : 4}}</span>\n          <span *ngIf='!sodl' style='color:#ff7777'>  {{netgain | currency:'$' : 4}}</span>\n        </li>\n        <li style=\"color:lightcyan;padding-left:15px;;font-size:18px\">Portfolio Change |\n          <span *ngIf='sodl' style='color:aquamarine'> + {{portdelta | percent:'1.2-2'}}</span>\n          <span *ngIf='!sodl' style='color:#ff7777'>  {{portdelta | percent:'1.2-2'}}</span>\n        </li>\n        <li style=\"color:lightcyan;padding-left:15px;;font-size:18px\">Portfolio Value | <span style='color:#6ad7ff;text-align:right'>{{totalPortfolioValue | currency:'$' : 4}}</span></li>\n\n      </ul>\n    </div>\n    <div class='col s5 push-s1' style=\"display:inline-block;margin-bottom:40px;\">\n      <p style=\"color:lightcyan;padding-bottom:20px;font-size:18px;text-align:center\">Portfolio Allocation</p>\n      <canvas id='canvas'>{{myChart}}</canvas>\n    </div>\n    <div class='col s12' style=\"display:inline-block;margin-bottom:20px;\">\n      <p style=\"color:lightcyan;padding-bottom:20px;font-size:25px;text-align:center\">Trade/Market Performance</p>\n      <canvas id='canvas2'>{{myBarChart}}</canvas>\n    </div>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/mydash/mydash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MydashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MydashComponent = (function () {
    function MydashComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
        this.cryptoArray = [];
        this.nameAmount = [];
        this.beforeArray = [];
        this.afterArray = [];
        this.totalinvested = 0;
        this.netgain = 0;
        this.totalPortfolioValue = 0;
        this.pieArray = [];
        this.pieChartData = [];
        this.pieChartLabels = [];
        this.barArray = [];
        this.barDate = [];
        this.barCoin = [];
        this.barTotalThen = [];
        this.barTotalNow = [];
    }
    MydashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._DataService.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log('message in child dash', this.message);
        this.getPort();
        Materialize.showStaggeredList('#animateme');
    };
    MydashComponent.prototype.getPort = function () {
        var _this = this;
        this._DataService.getUserPort().subscribe(function (data) {
            _this.cryptoList = JSON.parse(data["_body"]);
            for (var i = 0; i < _this.cryptoList.length; i++) {
                _this.cryptoArray.push(_this.cryptoList[i]['name']);
                _this.nameAmount.push({ id: _this.cryptoList[i]['_id'], name: _this.cryptoList[i]['name'], date: _this.cryptoList[i]['date'], time: _this.cryptoList[i]['time'], amount: _this.cryptoList[i]['amount'], pricethen: _this.cryptoList[i]['pricethen'], totalthen: _this.cryptoList[i]['totalthen'], pricenow: null });
            }
            _this.arraystring = _this.cryptoArray.join();
            //fine until here
            _this._DataService.getCurrentforPort(_this.arraystring).subscribe(function (data) {
                _this.receivedData = data;
                //data is a nested object, converting to an array of objects
                for (var x in _this.receivedData) {
                    _this.beforeArray.push({ crypto: x, price: _this.receivedData[x]['USD'] });
                }
                //testing new push
                for (var z = 0; z < _this.nameAmount.length; z++) {
                    for (var k = 0; k < _this.beforeArray.length; k++) {
                        if (_this.beforeArray[k].crypto == _this.nameAmount[z].name) {
                            _this.nameAmount[z].pricenow = _this.beforeArray[k].price;
                        }
                    }
                }
                //newpushworks!
                //changing to new function
                for (var y = 0; y < _this.nameAmount.length; y++) {
                    _this.currenttotal = _this.nameAmount[y].pricenow * _this.nameAmount[y].amount;
                    _this.difference = _this.currenttotal - _this.nameAmount[y].totalthen;
                    if (_this.difference >= 0) {
                        var hodl = true;
                    }
                    else {
                        var hodl = false;
                    }
                    _this.coindelta = (_this.difference / _this.nameAmount[y].totalthen);
                    _this.afterArray.push({ id: _this.nameAmount[y].id, name: _this.nameAmount[y].name, date: _this.nameAmount[y].date, time: _this.nameAmount[y].time, pricethen: _this.nameAmount[y].pricethen, currentprice: _this.nameAmount[y].pricenow, amount: _this.nameAmount[y].amount, totalthen: _this.nameAmount[y]['totalthen'], currenttotal: _this.currenttotal, difference: _this.difference, change: _this.coindelta, pos_neg: hodl });
                    _this.totalinvested += Number(_this.nameAmount[y]['totalthen']);
                    _this.netgain += _this.difference;
                    //new for piechart
                    _this.totalPortfolioValue += _this.currenttotal;
                    _this.pieArray.push({ coin: _this.nameAmount[y].name, coinTotal: _this.currenttotal, percent: null });
                    //barchart logic
                    // this.nameAmount[y].date=new Date(this.nameAmount[y].date);
                    _this.barArray.push({ coin: _this.nameAmount[y].name, date: _this.nameAmount[y].date, totalThen: _this.nameAmount[y]['totalthen'], currentTotal: _this.currenttotal });
                    //
                }
                console.log('barArray is', _this.barArray);
                for (var b = 0; b < _this.barArray.length; b++) {
                    _this.barCoin.push(_this.barArray[b].coin);
                    _this.barDate.push(_this.barArray[b].date);
                    _this.barTotalThen.push(_this.barArray[b].totalThen);
                    _this.barTotalNow.push(_this.barArray[b].currentTotal);
                }
                console.log('afterarray', _this.afterArray);
                console.log('pie array', _this.pieArray);
                console.log('totalport', _this.totalPortfolioValue);
                //pie chart functionality
                var finalPieArray = [];
                _this.pieArray.forEach(function (a) {
                    if (!this[a.coin]) {
                        this[a.coin] = { coin: a.coin, coinTotal: 0, coinDom: 0 };
                        finalPieArray.push(this[a.coin]);
                    }
                    this[a.coin].coinTotal += a.coinTotal;
                }, Object.create(null));
                console.log('fin-al', finalPieArray);
                for (var p = 0; p < finalPieArray.length; p++) {
                    _this.pieChartData.push(finalPieArray[p].coinTotal);
                    _this.pieChartLabels.push(finalPieArray[p].coin);
                }
                _this.myChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas', {
                    type: 'pie',
                    data: {
                        labels: _this.pieChartLabels,
                        datasets: [
                            {
                                data: _this.pieChartData,
                                backgroundColor: ['#b2ffb2', '#acf6f8', '#f9ff8e', '#fa8072', '#3381ab', '#162e2f', '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']
                            }
                        ],
                    },
                    options: { legend: {
                            position: 'left',
                            labels: { padding: 18, fontColor: 'lightcyan' }
                        },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                                    var tooltipLabel = data.labels[tooltipItem.index];
                                    var tooltipData = allData[tooltipItem.index];
                                    var total = 0;
                                    for (var i in allData) {
                                        total += allData[i];
                                    }
                                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                                    return tooltipLabel + ': ' + '$' + (Math.round(tooltipData * 100) / 100) + ' (' + tooltipPercentage + '%)';
                                }
                            }
                        }
                    }
                });
                //end pie chart functionality
                //bart chart functionality
                __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"].defaults.global.defaultFontColor = 'lightcyan';
                _this.myBarChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"]('canvas2', {
                    type: 'bar',
                    data: {
                        labels: _this.barCoin,
                        datasets: [
                            {
                                label: 'Amount bought',
                                data: _this.barTotalThen,
                                type: 'bar',
                                fill: false,
                                backgroundColor: "rgba(66, 244, 238, 0.7)",
                            },
                            {
                                label: 'Market Worth',
                                data: _this.barTotalNow,
                                type: 'line',
                                borderColor: '#b2ffb2',
                            }
                        ],
                    },
                    options: { legend: {
                            position: 'left',
                            labels: { padding: 18, fontColor: 'lightcyan' }
                        },
                        labels: { fontColor: 'lightcyan' },
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                                    var tooltipLabel = data.labels[tooltipItem.index];
                                    var tooltipData = allData[tooltipItem.index];
                                    var total = 0;
                                    for (var i in allData) {
                                        total += allData[i];
                                    }
                                    return '$' + (Math.round(tooltipData * 100) / 100);
                                }
                            }
                        }
                    },
                    scales: {
                        scales: {
                            xAxes: [{
                                    stacked: true
                                }],
                            yAxes: [{
                                    stacked: true
                                }]
                        }
                    }
                });
                _this.portdelta = (Number(_this.netgain / _this.totalinvested));
                if (_this.portdelta >= 0) {
                    _this.sodl = true;
                }
                else {
                    _this.sodl = false;
                }
            });
        });
    };
    MydashComponent.prototype.onDelete = function (cryptoid) {
        var _this = this;
        this._DataService.deleteTrade(cryptoid).subscribe(function (data) {
            console.log('data from delete', data);
            _this.cryptoList.length = 0;
            _this.cryptoArray.length = 0;
            _this.nameAmount.length = 0;
            _this.beforeArray.length = 0;
            _this.afterArray.length = 0;
            _this.totalinvested = 0;
            _this.totalPortfolioValue = 0;
            _this.netgain = 0;
            _this.pieArray.length = 0;
            _this.barArray.length = 0;
            _this.pieChartData.length = 0;
            _this.pieChartLabels.length = 0;
            _this.barDate.length = 0;
            _this.barCoin.length = 0;
            _this.barTotalThen.length = 0;
            _this.barTotalNow.length = 0;
            _this.getPort();
        });
        console.log('delete successful');
    };
    MydashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mydash',
            template: __webpack_require__("../../../../../src/app/mydash/mydash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mydash/mydash.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MydashComponent);
    return MydashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\na{\n    padding:5px;\n    color:lightskyblue;\n}\n\nhtml,body{\n    margin:0 auto;\nbackground: #4B79A1;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to top, #4B79A1,#283E51); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n}\n\n@font-face {\n    font-family: 'subzero';\n    src:url(" + escape(__webpack_require__("../../../../../src/assets/fonts/earthorbiter.ttf")) + ");\n    font-weight: normal;\n    font-style: normal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <link href=\"http://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>CryptoTrack</title>\n</head>\n\n<body>\n  <div style=\"margin-bottom:40px;height:70px;background: #06beb6;  /* fallback for old browsers */\n      background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */\n      background: linear-gradient(to left, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n      \">\n          <h5 class=\"flow-text\" style=\"color:white;padding-left:20px;padding:20px;font-family:subzero\">Welcome {{currentUser.firstname}}</h5>\n          <div class=\"fixed-action-btn horizontal\" style=\"position:float;top:35px;right:50px;\">\n            <a class=\"btn btn-floating btn-large pulse\" style='background-color:#42ebf4' [routerLink]=\"['mydash']\" (click)='onHomeClick()'><i class=\"material-icons\" style='font-size:35px;padding-right:9px;margin-top:-5px'>equalizer</i></a>\n            <ul>\n              <li style=\"color:white;padding:7px\"><a class=\"btn-floating  waves-effect waves-light\"   style='background-color:#9ef7d2;margin:3px' [routerLink]=\"['convert']\" (click)='otherClick()'><i class=\"material-icons\" style='padding-right:9px;padding-top:2px;margin-top:-7px'>add_circle_outline</i></a>Add Trade</li>\n              <li style=\"color:white;padding:7px\"><a class=\"btn-floating  waves-effect waves-light\"  style='background-color:#63a6ff;margin:3px' [routerLink]=\"['contact']\"(click)='otherClick()'><i class=\"material-icons\" style='padding-right:9px;margin-top:-6px'>forum</i></a>Message</li>\n              <li style=\"color:white;padding:7px\"><a class=\"btn-floating  waves-effect waves-light\" style='background-color:#ff4762;margin:3px' href='javascript:void(0)' (click)='onSignOut()'><i class=\"material-icons\" style='padding-right:9px;margin-top:-6px;'>close</i></a>Sign Out</li>\n            </ul>\n          </div>\n  </div>\n<div *ngIf=\" !homeClicked && !otherClicked ; else routeit\">\n<app-mydash></app-mydash>\n</div>\n\n<div style=\"margin-bottom:0px;\"> \n<ng-template #routeit>\n  <router-outlet></router-outlet>\n</ng-template>\n</div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
        this.currentUser = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeClicked = false;
        this.otherClicked = false;
        this.getUserInfo();
        this.newMessage();
        this._DataService.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log('message in parent profile', this.message);
    };
    ProfileComponent.prototype.newMessage = function () {
        this._DataService.changeMessage(true);
    };
    ProfileComponent.prototype.onHomeClick = function () {
        if (this.homeClicked == false) {
            this.homeClicked = true;
            // }else{
            //   this.homeClicked=false;
            // }
        }
    };
    ProfileComponent.prototype.otherClick = function () {
        if (this.otherClicked == false) {
            this.otherClicked = true;
        }
    };
    ProfileComponent.prototype.onSignOut = function () {
        var _this = this;
        console.log('logoff clicked');
        this._DataService.logOut().subscribe(function () {
            console.log('destroying current user');
            _this._Router.navigate(['/']);
        });
    };
    ProfileComponent.prototype.getUserInfo = function () {
        var _this = this;
        this._DataService.getUser().subscribe(function (data) {
            _this.currentUser = JSON.parse(data['_body']);
            console.log('thisisthebody', _this.currentUser);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reg/reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n    font-size:18px;\n    margin:10px;\n    opacity:0;\n}\n\ninput{\n    width:200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reg/reg.component.html":
/***/ (function(module, exports) {

module.exports = "  <body style='padding-bottom:400px;'>\n  <div class=\"row\" style='display:inline-block;padding-left:30px'>\n    <div class='col s8'>\n      <div class=\"flow-text\" style=\"display:inline-block;border:0px;\">  \n          <form id='regform' (submit)=\"register()\" #registerForm='ngForm'>\n              <div class=\"input-field\">\n                <input style='color:#b7ffea;' id='cfirst' type=\"text\" name=\"firstname\" [(ngModel)]=\"newUser.firstname\" #firstname=\"ngModel\" minlength='2'>\n                <label style='color:aquamarine'for=\"cfirst\">First Name</label>\n              </div>\n\n              <div class=\"input-field\">\n                <input style='color:#b7ffea;'id='clast'type=\"text\" name=\"lastname\" [(ngModel)]=\"newUser.lastname\" #lastname=\"ngModel\" minlength='2'>\n                <label style='color:aquamarine'for=\"clast\">Last Name</label>\n              </div>\n              <div class=\"input-field\">\n                <input class=\"validate\" style='color:#b7ffea;'id='cemail'type=\"email\" name=\"email\" [(ngModel)]=\"newUser.email\" #email=\"ngModel\">\n                <label style='color:aquamarine'for=\"cemail\" data-error=\"Please enter a valid email\">Email</label>\n              </div>\n\n              <div class=\"input-field\">\n                <input style='color:#b7ffea;'id='cpass' type=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\" minlength=\"8\">\n                <label style='color:aquamarine'for=\"cpass\">Password</label>\n              </div>\n\n                <p *ngIf='password.invalid && password.touched' style='color:red;font-size:12px'>Password must be at least 8 characters</p>\n              <div class=\"input-field\">\n                <input style='color:#b7ffea;'id='cconf'type=\"password\" name=\"passwordConfirm\" [(ngModel)]=\"newUser.passwordConfirm\" #passwordConfirm=\"ngModel\">\n                <label style='color:aquamarine'for=\"cconf\">Confirm Password</label>\n                <div *ngIf='errors'style='color:red;font-size:12px'>Passwords don't match</div>\n              </div>           \n                  <input style='width:250px;border-radius:7px;' type=\"submit\" value=\"Sign-Up\" [disabled]=registerForm.invalid class=\"btn waves-effect waves-light\">\n          </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style='display:inline-block;vertical-align:top;padding-top:20px'>\n    <div class='col s9 push-s2'>\n      <h6 class=\"flow-text\" style=\"color:white;font-size:20px;\">You will gain full access to all the exclusive features of transcrypter such as</h6>\n        <ul id='animateme' class=\"flow-text\" style=\"padding-left:30px\">\n          <li class=\"flow-text\" style='list-style-type: circle;color:aquamarine'>Adding or removing trades</li>\n          <li class=\"flow-text\" style='list-style-type: circle;color:white'>Viewing trade history</li>\n          <li class=\"flow-text\" style='list-style-type: circle;color:aquamarine'>Tracking portfolio performance</li>\n          <li class=\"flow-text\" style='list-style-type: circle;color:white'>Tracking Crypto performance</li>\n          <li class=\"flow-text\" style='list-style-type: circle;color:aquamarine'>And much more</li>\n        </ul>\n    </div> \n  </div>  \n  </body>"

/***/ }),

/***/ "../../../../../src/app/reg/reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegComponent = (function () {
    function RegComponent(_DataService, _Router) {
        this._DataService = _DataService;
        this._Router = _Router;
        this.newUser = { firstname: "", lastname: "", email: "", password: "", passwordConfirm: "" };
    }
    RegComponent.prototype.ngOnInit = function () {
        Materialize.showStaggeredList('#animateme');
    };
    RegComponent.prototype.register = function () {
        var _this = this;
        this._DataService.addUser(this.newUser)
            .subscribe(function (data) {
            console.log("got response from server:", data);
            if (data._body == 1) {
                console.log("emails already taken");
                _this.errors = data;
            }
            else if (data._body == 0) {
                console.log('passwords dont match');
                _this.errors = data;
            }
            else {
                console.log("added user, redirecting");
                _this._Router.navigate(['/profile']);
            }
        });
    };
    RegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reg',
            template: __webpack_require__("../../../../../src/app/reg/reg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reg/reg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/fonts/earthorbiter.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "earthorbiter.cc127a063891cbcd1d0e.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map