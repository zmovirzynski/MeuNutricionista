webpackJsonp([7],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarboPageModule", function() { return CarboPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carbo__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarboPageModule = (function () {
    function CarboPageModule() {
    }
    return CarboPageModule;
}());
CarboPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carbo__["a" /* CarboPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carbo__["a" /* CarboPage */]),
        ],
    })
], CarboPageModule);

//# sourceMappingURL=carbo.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarboPage; });
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
 * Generated class for the CarboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarboPage = (function () {
    function CarboPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarboPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarboPage');
    };
    return CarboPage;
}());
CarboPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-carbo',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\carbo\carbo.html"*/'<!--\n  Generated template for the CarboPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button> \n    <ion-title>Carboidrato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h4>•	O que é?</h4>\n	<p>São bebidas energéticas:</p>\n<p>	Dextrose: carboidratos simples/monossacarídeo de absorção rápida </p>\n<p>	Maltodextrina: carboidratos complexos/oligossacarídeo de absorção mais lente\n</p>\n	\n	<p><b>•	Função no exercício físico</b></p>\n	<p>\n	Fornecer substratos energético;\n	Aumento da performance\n	Retardar a fadiga nas modalidades esportivas que envolvem exercícios intermitentes e de alta intensidade\n	</p>\n	\n	<p><b>•	Quando usar?</b></p>\n	<p>Durante e/ou após o treinamento.</p>\n	\n	<p><b>•	Recomendação:</b></p>\n	<p>DURANTE O TREINO:</p>\n<p>Para exercícios de alta intensidade:  reposição necessária de carboidratos para manter a glicemia e retardar a fadiga é de 30 a 60g por hora, com concentração de 4 a 8g/decilitro sem exceder 80g/hora. </p>\n<p>Para exercícios de baixa intensidade e longa duração (nas provas de aventura, caminhadas longas, expedições em altitudes elevadas ou mesmo em treinamento de natação): maior concentração de carboidratos poderá ser ingerida em intervalos maiores de tempo, por exemplo, 20 a 30 minutos</p>\n<br>\nPÓS-TREINO:\n<p>Após exercícios muito exaustivos, recomenda-se a ingestão de carboidratos simples entre 0,7 e 1,5g/kg peso no período de quatro horas, o que é suficiente para a ressíntese plena de glicogênio muscular.</p>\n	\n	<p><b>•	Efeitos do Excesso:</b></p>\n	<p>Possível ganho de peso para o uso sem necessidade</p>\n	\n	<p><b>•	É preciso suplementar Carboidratros?</b></p>\n	<p>Depende. É possível atingir às necessidades de carboidrato pela dieta. Caso o treinamento exceda 90 minutos com intensidade ≥ 70% do VO² máx a suplementação seja uma boa estratégia.  A Sociedade Brasileira de Medicina do Esporte recomenda o uso da suplementação, com finalidade ergogênica.</p>\n	\n	<p><b>•	Alimentos:</b></p>\n	<img src="../../assets/carbo1.png" alt="Smiley face">\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\carbo\carbo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CarboPage);

//# sourceMappingURL=carbo.js.map

/***/ })

});
//# sourceMappingURL=7.js.map