webpackJsonp([14],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
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
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>    \n    <ion-title text-center>Cadastro</ion-title>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Peso</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Altura</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sexo</ion-label>\n      <ion-select [(ngModel)]="sexo">\n        <ion-option value="M">Masculino</ion-option>\n        <ion-option value="F">Feminino</ion-option>\n      </ion-select>\n    </ion-item>    \n	\n	<ion-item>\n      <ion-label>Nível de Atividade Física</ion-label>\n      <ion-select [(ngModel)]="fisica">\n        <ion-option value="1">Sedentário</ion-option>\n        <ion-option value="2">Leve</ion-option>\n        <ion-option value="3">Moderado</ion-option>\n        <ion-option value="4">Intenso</ion-option>\n      </ion-select>\n    </ion-item>    \n  \n  </ion-list>\n\n  <div padding>\n    <button ion-button full>Salvar</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\cadastro\cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcoesPage; });
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
 * Generated class for the OpcoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpcoesPage = (function () {
    function OpcoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpcoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpcoesPage');
    };
    return OpcoesPage;
}());
OpcoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-opcoes',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\opcoes\opcoes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>    \n    <ion-title text-center>Importância do Nutricionista</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>  \n	<img src="../../assets/aba4_1.jpg" alt="Smiley face">\n	<br>\n	<p>Os estudos científicos vêm demonstrando que a performance e a saúde de atletas são beneficiadas com a modificação dietética. A importância do nutricionista no auxílio e na construção de estratégias que visam o equilíbrio entre saúde e performance para atletas ou praticantes de exercícios físicos regulares é fundamental e indispensável já que sem o devido acompanhamento por intermédio de um plano nutricional adequado, o exercício, isoladamente, não apresenta resultados tão eficazes. Esta área de conhecimento da nutrição é a chamada nutrição esportiva, que tem por objetivo dar suporte nutricional necessário para o desempenho máximo do seu potencial seja em treinamentos ou competições, amenizando os efeitos negativos do excesso de exercício físico sobre o organismo e orientando quanto as restrições e necessidades individuais.</p>\n	<br>\n	<img src="../../assets/aba4_2.jpg" alt="Smiley face">\n	<br>\n    <p>\n	Este aplicativo tem como objetivo contribuir para a promoção da saúde, tornando-os menos vulneráveis às ações nefastas de informações sem base científicas muitas vezes adquiridas por amadores e fake news. O uso apropriado de alguns suplementos podem beneficiar sim o atleta/praticante de exercícios físicos, mas outros podem prejudicar a performance e principalmente a saúde. Portanto a suplementação alimentar deve ficar restrita aos casos especiais, nos quais o nutricionista julgar necessário após extensa avaliação da história nutricional, avaliação dietética, necessidades da modalidade praticada levando em consideração volume, frequência e intensidade de treinamento, antropometria e análise de composição e testes bioquímicos. Procure um profissional especializado e registrado ao Conselho Federal de Nutricionistas, sempre!\n	</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\opcoes\opcoes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OpcoesPage);

//# sourceMappingURL=opcoes.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adequada/adequada.module": [
		265,
		10
	],
	"../pages/auth/auth.module": [
		266,
		13
	],
	"../pages/bcaa/bcaa.module": [
		267,
		9
	],
	"../pages/cadastro/cadastro.module": [
		268,
		12
	],
	"../pages/cafeina/cafeina.module": [
		269,
		8
	],
	"../pages/carbo/carbo.module": [
		270,
		7
	],
	"../pages/creatina/creatina.module": [
		271,
		6
	],
	"../pages/gluta/gluta.module": [
		272,
		5
	],
	"../pages/omega/omega.module": [
		273,
		4
	],
	"../pages/opcoes/opcoes.module": [
		274,
		11
	],
	"../pages/referencia/referencia.module": [
		275,
		3
	],
	"../pages/referencias/referencias.module": [
		276,
		2
	],
	"../pages/suplementos/suplementos.module": [
		277,
		1
	],
	"../pages/whey/whey.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(nav) {
        this.nav = nav;
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
        this.password = window.localStorage.getItem('password');
    }
    HomePage.prototype.logout = function () {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthPage */]);
        this.nav.popToRoot();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>    \n\n    <ion-title text-center>Inicio</ion-title>\n\n  </ion-navbar>\n\n</ion-header> \n\n\n\n<ion-content padding>\n\n  <h1>Seja Bem-Vindo {{username}}</h1>\n\n     \n\n  <hr>\n\n  <h3>Este é um aplicativo</h3>\n\n  <p>As informações e sugestões contidas neste aplicativo têm caráter meramente informativo e não substituem o aconselhamento e o acompanhamento de um nutricionista.</p>\n\n  <br>\n\n  <br>\n\n  \n\n  <p>IMC: <b>25.2</b></p>\n\n  <p>Atividade Física:   <b><ion-icon name="walk"></ion-icon></b></p> \n\n\n\n  <img src="../../assets/tabela.png" alt="Smiley face">\n\n</ion-content>'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_opcoes_opcoes__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_opcoes_opcoes__["a" /* OpcoesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/adequada/adequada.module#AdequadaPageModule', name: 'AdequadaPage', segment: 'adequada', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bcaa/bcaa.module#BcaaPageModule', name: 'BcaaPage', segment: 'bcaa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cafeina/cafeina.module#CafeinaPageModule', name: 'CafeinaPage', segment: 'cafeina', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/carbo/carbo.module#CarboPageModule', name: 'CarboPage', segment: 'carbo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/creatina/creatina.module#CreatinaPageModule', name: 'CreatinaPage', segment: 'creatina', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gluta/gluta.module#GlutaPageModule', name: 'GlutaPage', segment: 'gluta', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/omega/omega.module#OmegaPageModule', name: 'OmegaPage', segment: 'omega', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/opcoes/opcoes.module#OpcoesPageModule', name: 'OpcoesPage', segment: 'opcoes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/referencia/referencia.module#ReferenciaPageModule', name: 'ReferenciaPage', segment: 'referencia', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/referencias/referencias.module#ReferenciasPageModule', name: 'ReferenciasPage', segment: 'referencias', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/suplementos/suplementos.module#SuplementosPageModule', name: 'SuplementosPage', segment: 'suplementos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/whey/whey.module#WheyPageModule', name: 'WheyPage', segment: 'whey', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_opcoes_opcoes__["a" /* OpcoesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_opcoes_opcoes__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.checkPreviousAuthorization();
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Cadastro', component: __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */] },
                { title: 'Importância do Nutricionista', component: __WEBPACK_IMPORTED_MODULE_7__pages_opcoes_opcoes__["a" /* OpcoesPage */] }
            ];
            _this.username = window.localStorage.getItem('username');
        });
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_auth_auth__["a" /* AuthPage */]);
        //this.nav.popToRoot();   
        window.location.reload();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n  \n\n    <ion-content>\n\n      <ion-list>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n      <ion-list id="sidenav">\n\n          <ion-item-group submenu [class.visible]="showSubmenu">\n\n            <ion-item submenu-item menuToggle><a style="display:block" href="#/suplementos">Suplementos</a></ion-item>            \n\n            <ion-item submenu-item><a style="display:block" href="#/adequada">Alimentação Saudável</a></ion-item>\n\n			<ion-item submenu-item><a style="display:block" href="#/referencias">Referências</a></ion-item>\n\n          </ion-item-group>\n\n        </ion-list>      \n\n    </ion-content>    \n\n\n\n    <ion-footer>\n\n        <ion-toolbar>\n\n          <ion-row align-items-center>\n\n            <ion-col>\n\n              {{username}}\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button clear icon-left (click)="logout()" style="float:right">\n\n                   <ion-icon name="power"></ion-icon>\n\n                   Sair\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-toolbar>\n\n      </ion-footer>\n\n    \n\n  </ion-menu> \n\n  \n\n  \n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthPage = (function () {
    function AuthPage(nav, navParams, formBuilder) {
        this.nav = nav;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])]
        });
    }
    AuthPage.prototype.onSubmit = function (value) {
        if (this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            //this.nav.push(HomePage);
            window.location.reload();
        }
    };
    return AuthPage;
}());
AuthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-auth',template:/*ion-inline-start:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\auth\auth.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>NutriHelp</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<img src="../../assets/logo.jpg" alt="Smiley face"><br>\n\n	<form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n        <ion-item>\n\n			\n\n            <ion-label floating>Usuário</ion-label>\n\n            <ion-input formControlName="username" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n\n            <p>Campo Obrigatório!</p>\n\n        </ion-item>\n\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n\n            <p>Somente letras são permitidas!</p>\n\n        </ion-item>        \n\n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n\n            <p>Mínimo 8 caracteres!</p>\n\n        </ion-item>\n\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n\n            <p>Máximo 30 caracteres!</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Senha</ion-label>\n\n            <ion-input formControlName="password" type="password"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n\n            <p>Campo Obrigatório!</p>\n\n        </ion-item>\n\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n\n            <p>Mínimo 8 caracteres!</p>\n\n        </ion-item>                \n\n\n\n		<button ion-button full color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;" type="submit">Entrar</button>        \n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\wellington.oliveira\MeuNutricionista\src\pages\auth\auth.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
], AuthPage);

//# sourceMappingURL=auth.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map