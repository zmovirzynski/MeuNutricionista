webpackJsonp([9],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcaaPageModule", function() { return BcaaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bcaa__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BcaaPageModule = (function () {
    function BcaaPageModule() {
    }
    return BcaaPageModule;
}());
BcaaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bcaa__["a" /* BcaaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bcaa__["a" /* BcaaPage */]),
        ],
    })
], BcaaPageModule);

//# sourceMappingURL=bcaa.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BcaaPage; });
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
 * Generated class for the BcaaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BcaaPage = (function () {
    function BcaaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BcaaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BcaaPage');
    };
    return BcaaPage;
}());
BcaaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bcaa',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\bcaa\bcaa.html"*/'<!--\n  Generated template for the BcaaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>   \n    <ion-title>BCAA</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<h4>•	O que é?</h4>\n	<p>Leucina, Isoleucina e Valina.  São aminoácidos essenciais portanto devem ser adquiridas pela dieta.</p>\n	<p><b>•	Função no exercício físico</b></p>\n	<p>\n	Melhora do sistema imune;\n	Diminuição da fadiga;\n	Melhora da dor muscular tardia;\n	Melhora da performance\n	</p>\n	\n	<p><b>•	Quando usar?</b></p>\n	<p>Alguns estudos mostram benefícios do uso antes e após o treinamento intenso.</p>\n	<p><b>•	Recomendações:</b></p>\n	<img src="../../assets/bcaa1.png" alt="Smiley face">\n	<p><b>•	Efeitos do Excesso:</b></p>\n	<p>Dependendo da dose administrada, pode ocorrer o aumento das concentrações plasmática e musculares de amônia, que atua como agente de fadiga.</p>\n	<p><b>•	É preciso suplementar BCAA?</b></p>\n	<p>Depende. É possível facilmente atingir às necessidades pela dieta. Por exemplo: um homem de 70 kg necessita ingerir 2.940mg de leucina, 1.680 mg de valina e 1.330 mg de isoleucina (DRI, 2006), em um típico suplemento de ACR (aminoácidos de cadeia ramificada) vendido na forma de comprimido (1,3g) contém 500 mg de leucina, 250 mg de valina e 250 mg de isoleucina.  Somente uma fatia média de carne bovina (100g) é composta por 1.950 mg de leucina 1.320 mg de valina e 1.250 mg de isoleucina. Devido às contradições quanto aos seus, a suplementação de BCAA não é recomendada pela Sociedade Brasileira de Medicina Esportiva.</p>\n	\n	<p><b>•	Alimentos:</b></p>\n	<img src="../../assets/bcaa2.png" alt="Smiley face">\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\bcaa\bcaa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], BcaaPage);

//# sourceMappingURL=bcaa.js.map

/***/ })

});
//# sourceMappingURL=9.js.map