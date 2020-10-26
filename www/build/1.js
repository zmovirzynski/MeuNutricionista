webpackJsonp([1],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuplementosPageModule", function() { return SuplementosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__suplementos__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SuplementosPageModule = (function () {
    function SuplementosPageModule() {
    }
    return SuplementosPageModule;
}());
SuplementosPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__suplementos__["a" /* SuplementosPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__suplementos__["a" /* SuplementosPage */]),
        ],
    })
], SuplementosPageModule);

//# sourceMappingURL=suplementos.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuplementosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SuplementosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuplementosPage = (function () {
    function SuplementosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuplementosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuplementosPage');
    };
    return SuplementosPage;
}());
SuplementosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-suplementos',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\suplementos\suplementos.html"*/'<ion-header>\n  <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>   \n    <ion-title text-center style="margin-top:10px">Suplementos</ion-title>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos _BCAA.jpg" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>BCAA</h2>\n    <p>Suplemento BCAA</p>\n    <button ion-button clear item-end><a href="#/bcaa">View</a></button>\n  </ion-item>\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos _creatina.jpg" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>Creatina</h2>\n    <p>Suplemento Creatina</p>\n    <button ion-button clear item-end><a href="#/creatina">View</a></button>\n  </ion-item>\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos_Cafeina.png" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>Cafeina</h2>\n    <p>Suplemento Cafeina</p>\n    <button ion-button clear item-end><a href="#/cafeina">View</a></button>\n  </ion-item>\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos_Glutamina.jpg" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>Glutamina</h2>\n    <p>Suplemento Glutamina</p>\n    <button ion-button clear item-end><a href="#/gluta">View</a></button>\n  </ion-item>\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos_Malto_Dextrose.png" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>Malto Dextrose</h2>\n    <p>Suplemento Malto Dextrose</p>\n    <button ion-button clear item-end><a href="#/carbo">View</a></button>\n  </ion-item>\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos_Omega 3.png" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>Ômega 3</h2>\n    <p>Suplemento Ômega 3</p>\n    <button ion-button clear item-end><a href="#/omega">View</a></button>\n  </ion-item>\n  \n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="../../assets/Suplementos_Whey Protein.jpg" alt="Smiley face">\n    </ion-thumbnail>\n    <h2>Whey Protein</h2>\n    <p>Suplemento Whey Protein</p>\n    <button ion-button clear item-end><a href="#/whey">View</a></button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\suplementos\suplementos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SuplementosPage);

//# sourceMappingURL=suplementos.js.map

/***/ })

});
//# sourceMappingURL=1.js.map