webpackJsonp([5],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlutaPageModule", function() { return GlutaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gluta__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlutaPageModule = (function () {
    function GlutaPageModule() {
    }
    return GlutaPageModule;
}());
GlutaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gluta__["a" /* GlutaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gluta__["a" /* GlutaPage */]),
        ],
    })
], GlutaPageModule);

//# sourceMappingURL=gluta.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlutaPage; });
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
 * Generated class for the GlutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlutaPage = (function () {
    function GlutaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GlutaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlutaPage');
    };
    return GlutaPage;
}());
GlutaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gluta',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\gluta\gluta.html"*/'<!--\n  Generated template for the GlutaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button> \n    <ion-title>Glutamina</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h4>•	O que é?</h4>\n	<p>É um aminoácido não essencial mais abundante no plasma e no tecido muscular.</p>\n	\n	<p><b>•	Função no exercício físico</b></p>\n	<p>\n	Aumentar a defesa imunológica de atletas. \n	</p>\n	\n	<p><b>•	Quando usar?</b></p>\n	<p>Após a realização das atividades físicas</p>\n	\n	<p><b>•	Recomendação:</b></p>\n	<p>Para adultos sugere-se a dosagem de 5g/dia.</p>\n	\n	<p><b>•	Efeitos do Excesso:</b></p>\n	<p>O consumo via oral elevado faz com que as células intestinais inviabilizarem sua disponibilidade para outras regiões do organismo.</p>\n	\n	<p><b>•	É preciso suplementar Creatina?</b></p>\n	<p>Depende. É possível facilmente atingir às necessidades pela dieta através do consumo de alimentos fonte de proteína vegetal e principalmente animal. A Sociedade Brasileira de Medicina do Esporte não recomenda a utilização da suplementação via oral, mesmo para os praticantes de exercícios físicos muito desgastantes.</p>\n	\n	<p><b>•	Alimentos:</b></p>\n	<img src="../../assets/gluta1.png" alt="Smiley face">\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\gluta\gluta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], GlutaPage);

//# sourceMappingURL=gluta.js.map

/***/ })

});
//# sourceMappingURL=5.js.map