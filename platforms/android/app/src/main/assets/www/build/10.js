webpackJsonp([10],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdequadaPageModule", function() { return AdequadaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adequada__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdequadaPageModule = (function () {
    function AdequadaPageModule() {
    }
    return AdequadaPageModule;
}());
AdequadaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__adequada__["a" /* AdequadaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adequada__["a" /* AdequadaPage */]),
        ],
    })
], AdequadaPageModule);

//# sourceMappingURL=adequada.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdequadaPage; });
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
 * Generated class for the AdequadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdequadaPage = (function () {
    function AdequadaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdequadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdequadaPage');
    };
    return AdequadaPage;
}());
AdequadaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-adequada',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\adequada\adequada.html"*/'<!--\n  Generated template for the AdequadaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>  \n    <ion-title>Alimentação Saudável e Adequada</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n	\n	\n<ion-content padding>\n<img src="../../assets/Alimentação Saudável_ Adequada.jpg" alt="Smiley face">\n	<h3>DEZ PASSOS PARA UMA ALIMENTAÇÃO ADEQUADA E SAUDÁVEL</h3>\n		<br>\n			<br><ion-col col-12><b>1.	FAZER DE ALIMENTOS IN NATURA OU MINIMAMENTE PROCESSADOS A BASE DA ALIMENTAÇÃO;</b></ion-col><br>\n		<ion-col col-12>Que a alimentação seja predominantemente de origem vegetal, alimentos in natura ou minimamente processados. Variedade significa alimentos de todos os tipos– grãos, raízes, tubérculos, farinhas, legumes, verduras, frutas, castanhas, leite, ovos e carnes.</ion-col>\n	<br>\n	<br>\n		<ion-col col-12><b>2.	UTILIZAR ÓLEOS, GORDURAS, SAL E AÇÚCAR EM PEQUENAS QUANTIDADES AO TEMPERAR E COZINHAR ALIMENTOS E CRIAR PREPARAÇÕES CULINÁRIAS;</b></ion-col><br>\n		<ion-col col-12>Utilizados com moderação em preparações culinárias com base em alimentos in natura ou minimamente processados.</ion-col>\n	<br><br>\n		<ion-col col-12><b>3.	LIMITAR O CONSUMO DE ALIMENTOS PROCESSADOS;</b></ion-col><br>\n		<ion-col col-12>Os ingredientes e métodos usados na fabricação de alimentos processados – como conservas de legumes, compota de frutas, pães e queijos – alteram de modo desfavorável a composição nutricional dos alimentos dos quais derivam.</ion-col>\n	<br><br>\n		<ion-col col-12><b>4.	EVITAR O CONSUMO DE ALIMENTOS ULTRAPROCESSADOS:</b></ion-col><br>\n		<ion-col col-12>Devido a seus ingredientes, alimentos ultraprocessados – como biscoitos recheados, “salgadinhos de pacote”, refrigerantes e “macarrão instantâneo” – são nutricionalmente desbalanceados.</ion-col>\n	<br><br>\n		<ion-col col-12><b>5.	COMER COM REGULARIDADE E ATENÇÃO, EM AMBIENTES APROPRIADOS E, SEMPRE QUE POSSÍVEL, COM COMPANHIA: </b></ion-col><br>\n		<ion-col col-12>Coma sempre devagar e desfrute o que está comendo, sem se envolver em outra atividade. Procure comer em locais limpos, confortáveis e tranquilos e onde não haja estímulos para o consumo de quantidades ilimitadas de alimento. Evite “beliscar” nos intervalos entre as refeições.</ion-col>\n	<br><br>\n		<ion-col col-12><b>6.	FAZER COMPRAS EM LOCAIS QUE OFERTEM VARIEDADES DE ALIMENTOS IN NATURA OU MINIMAMENTE PROCESSADOS:</b></ion-col><br>\n		<ion-col col-12>Procure fazer compras de alimentos em mercados, feiras livres e feiras de produtores e outros locais que comercializam variedades de alimentos in natura ou minimamente processados. Prefira legumes, verduras e frutas da estação e cultivados localmente. Sempre que possível, adquira alimentos orgânicos.</ion-col>\n	<br><br>\n		<ion-col col-12><b>7.	DESENVOLVER, EXERCITAR E PARTILHAR HABILIDADES CULINÁRIAS:</b></ion-col><br>\n		<ion-col col-12>Se você tem habilidades culinárias, procure compartilhar e, se não tem, procure adquiri-las.</ion-col>\n	<br><br>\n		<ion-col col-12><b>8.	PLANEJAR O USO DO TEMPO PARA DAR À ALIMENTAÇÃO O ESPAÇO QUE ELA MERECE</b></ion-col><br>\n		<ion-col col-12>Faça da preparação de refeições e do ato de comer momentos privilegiados de convivência e prazer.</ion-col>\n	<br><br>\n		<ion-col col-12><b>9.	DAR PREFERÊNCIA, QUANDO FORA DE CASA, A LOCAIS QUE SERVEM REFEIÇÕES FEITAS NA HORA</b></ion-col><br>\n		<ion-col col-12>Procure locais que servem refeições feitas na hora. Evite redes de fast-food.</ion-col>\n	<br><br>\n		<ion-col col-12><b>10.	SER CRÍTICO QUANTO A INFORMAÇÕES, ORIENTAÇÕES E MENSAGENS SOBRE ALIMENTAÇÃO VEICULADAS EM PROPAGANDAS COMERCIAIS</b></ion-col><br>\n		<ion-col col-12>Lembre-se de que a função essencial da publicidade é aumentar a venda de produtos, e não informar ou, menos ainda, educar as pessoas. Avalie com crítica o que você lê, vê e ouve sobre alimentação em propagandas comerciais e estimule outras pessoas, particularmente crianças e jovens, a fazerem o mesmo.</ion-col>\n	<br>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\adequada\adequada.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AdequadaPage);

//# sourceMappingURL=adequada.js.map

/***/ })

});
//# sourceMappingURL=10.js.map