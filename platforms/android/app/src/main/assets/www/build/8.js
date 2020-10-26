webpackJsonp([8],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CafeinaPageModule", function() { return CafeinaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cafeina__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CafeinaPageModule = (function () {
    function CafeinaPageModule() {
    }
    return CafeinaPageModule;
}());
CafeinaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cafeina__["a" /* CafeinaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cafeina__["a" /* CafeinaPage */]),
        ],
    })
], CafeinaPageModule);

//# sourceMappingURL=cafeina.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeinaPage; });
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
 * Generated class for the CafeinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CafeinaPage = (function () {
    function CafeinaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CafeinaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CafeinaPage');
    };
    return CafeinaPage;
}());
CafeinaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cafeina',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\cafeina\cafeina.html"*/'<!--\n  Generated template for the CafeinaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button> \n    <ion-title>Cafeína</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h4>•	O que é?</h4>\n	<p>É um estimulante encontrado em alimentos e bebidas.</p>\n	<p><b>•	Função no exercício físico</b></p>\n	<p>\n	Melhora da performance (reflexos, velocidade de reação, potência);\n	Melhora da recuperação muscular;\n	Reduzir a sensação de fadiga;\n	Efeito adrenérgico\n	</p>\n	<p><b>•	Recomendação:</b></p>\n	<p>Estudos sugerem a dosagem de 3-6 mg/kg de peso.</p>\n	<p><b>•	Efeitos do Excesso:</b></p>\n	<p>Doses maiores de cafeína (≥9mg/kg) não parecem aumentar o benefício de desempenho e são mais propensas a aumentar o risco de efeitos colaterais como aumento da pressão arterial, frequência cardíaca, propensão a taquicardia e arritmias cardíacas além de, ansiedade, insônia, inquietação e náuseas.</p>\n	\n	<p><b>•	É preciso suplementar Cafeína?</b></p>\n	<p>Depende. É possível atingir às necessidades pela dieta através de alimentos e bebidas como cafés, chás, chocolate. A Sociedade Brasileira de Medicina do Esporte não recomenda a suplementação de cafeína como finalidade ergogênica.</p>\n	\n	<p><b>•	Alimentos:</b></p>\n	<img src="../../assets/cafeina1.png" alt="Smiley face">\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\cafeina\cafeina.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CafeinaPage);

//# sourceMappingURL=cafeina.js.map

/***/ })

});
//# sourceMappingURL=8.js.map