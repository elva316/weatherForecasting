webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

// export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n  margin-left: 5px;\n  margin-right: 5px;\n}\nbody{\n    margin: 0;\n    padding: 0;\n}\n.top{\n    width: 100%;\n    height: 100vh;\n    background-size: cover;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/4.jpg")) + ");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n.innerTop{\n    width: 100%;\n    height: 50%;\n    background: white;\n    opacity: .8;\n    vertical-align: center;\n    padding: 5%;\n    padding-left: 25%;\n}\n.center{\n    width:760px;\n    height: 200px;\n    /* top:50%; */\n    /* margin-top: 10%; */\n    text-align: center;\n}\n.container {\n  margin-bottom:0;\n}\n.navbar{\n    background: #00a680;\n    border: #00a680;\n    margin-bottom: 0;\n    height: 80px;\n    }\n\n\n\n/* ///////////////////////box2 */\n#box2{\n    padding: 50px;\n    width:100%;\n    height: 100%;\n    /* position: absolute; */\n}\n.left{\n    width: 100%;\n    height: 227px;\n    margin: 0;\n    border: 1px solid black;\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/6.jpg")) + ");\n    background-size: cover;\n}\n.right{\n    width: 100%;\n    height: 60vh;\n    margin: 10;\n    /* border: 1px solid black; */\n}\n.ima{\n    display: inline-block;\n    margin: 5px 50px 5px 30px;\n    width: 225px;\n    height: 225px;\n    /* border: 1px solid red; */\n}\nimg{\n    width: 225px;\n    height: 225px;\n}\n.r{\n    display: inline-block;\n    text-align: justify;\n    vertical-align: bottom;\n    /* border: 1px solid blue; */\n    margin: 5px 50px 35px 30px;\n}\n.i{\n    font-size:17px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n    <head>\n        <meta charset=\"utf-8\">\n        <title></title>\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\n\n\n    </head>\n    <body>\n        <div class=\"navbar navbar-default\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <a href=\"#\" class=\"navbar-brand\"> <h1> Fair Weather Travel  </h1></a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"top\">\n        <div class=\"innerTop\">\n            <div class=\"center\">\n                <form name=\"myButton\" action=\"app.component.html#show\" (submit)=\"getInfo()\" #formData=\"ngForm\" action=\"#show\">\n                    <br>\n                    <h1 class=\"displayCenter\">Which City Are You Traveling?</h1>\n                    <br>\n                    <input type=\"text\" name=\"cityname\" required [(ngModel)]=\"city\" placeholder=\"City\">\n                    <button onClick=\"document.getElementById('show').scrollIntoView();\" type=\"submit\" [disabled]=\"!formData.valid\">  GO</button>\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n    <div id=\"box2\">\n        <div class=\"left\">\n            <div class=\"ima\">\n                <img src=\"../assets/7.png\" alt=\"\">\n            </div>\n            <div class='r' id=\"show\">\n                <h1>Weather Forecast</h1>\n                <strong> <span class=\"i\" >City:</span> {{ city }}</strong><br>\n                <strong> <span class=\"i\" >Humidity:</span> {{ humidity }}</strong><br>\n                <strong> <span class=\"i\" >Temperature(Average): </span>{{ tempAve }}</strong><br>\n                <strong> <span class=\"i\" >Temperature(High): </span>{{ tempMax }}</strong><br>\n                <strong> <span class=\"i\" >Temperature(Low): </span>{{ tempMin }}</strong><br>\n                <strong> <span class=\"i\" >Status: </span>{{ status }}</strong><br>\n            </div>\n        </div>\n\n\n        <h1>Discover fun activities & delicious food on Tripadvisor</h1>\n        <div class=\"right\">\n            <iframe src=\"https://www.tripadvisor.com/Attractions-g60763-Activities-New_York_City_New_York.html\" width=\"100%\" height=\"100%\" ></iframe>\n        </div>\n\n        <br>\n        <h1>Travel Related Articles...</h1>\n        <hr>\n        <a class=\"i\" href=\"https://www.smartertravel.com/2017/06/19/single-travel-tips-going-solo/\">Solo Travel Tips</a>\n        The article is focusing on singgle travel safety tips.\n        <hr>\n        <a class=\"i\" href=\"https://www.forbes.com/sites/laurabegleybloom/2017/05/18/the-25-cheapest-places-to-travel-this-summer/#6342b2ad5790\">Low Tudget Travel Location</a>\n        The 25 cheapest places to travel in summer.\n        <hr>\n        <a class=\"i\" href=\"https://www.familytravel.com/\">Family traveling.</a>\n        This website provide information about verything you need to know about family traveling.\n        <hr>\n        <a class=\"i\" href=\"http://www.travelandleisure.com/slideshows/50-best-romantic-getaways\">Romantic Getaways</a>\n        From wine-country retreats to Balinese beach idylls, 50 enchanting vacations to swoon over.\n        <hr>\n        <a class=\"i\" href=\"http://rss.cnn.com/rss/cnn_travel.rss\">CNN Travel Feeds</a>\n        From wine-country retreats to Balinese beach idylls, 50 enchanting vacations to swoon over.\n        <hr>\n\n        <div class=\"bottom\">\n            <h2>For any question, <a href=\"mailto:elva316@gmail.com\">Contact Here</a></h2>\n        </div>\n\n    </div>\n\n\n\n    </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
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
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'app';
    }
    AppComponent.prototype.getInfo = function () {
        var _this = this;
        // 5809844
        this.data = this._httpService.retrieveTasks(this.city, function (handle) {
            // console.log(this.city)
            // console.log(handle)
            _this.a = (handle);
            console.log(_this.a);
            _this.humidity = handle.main.humidity;
            _this.tempMin = handle.main.temp_min;
            _this.tempMin = Math.floor(_this.tempMin * (9 / 5) - 459.67);
            _this.tempMax = handle.main.temp_max;
            _this.tempMax = Math.floor(_this.tempMax * (9 / 5) - 459.67);
            _this.tempAve = handle.main.temp;
            _this.tempAve = Math.floor(_this.tempAve * (9 / 5) - 459.67);
            _this.status = handle.weather[0].description;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { Http } from '@angular/http';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // <— Imported

var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.key = 'f33742ecebc85ee4326b936a90716753';
    }
    HttpService.prototype.retrieveTasks = function (city, callback) {
        var _this = this;
        this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + this.key;
        this._http.get(this.url).subscribe(//for post, this._http.post(url, data), data is the json parameter
        function (response) {
            _this.webInfo = response.json();
            console.log('insied server');
            //  console.log(this.webInfo)
            //  console.log(this.webInfo.main)
            callback(_this.webInfo);
            //  console.log(callback(this.username))
        }, function (error) {
            console.log(error);
            callback(error);
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/assets/4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4.58816ede926c406c7758.jpg";

/***/ }),

/***/ "../../../../../src/assets/6.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6.057c3602282a0706a464.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map