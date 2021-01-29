(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/suyogkh/Desktop/Projects/Niky/career-coach/src/main.ts */"zUnb");


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../@core/services/auth.service */ "ucNU");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setting/setting.component */ "QHhi");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function HeaderComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.userData == null ? null : ctx_r0.userData.displayName) ? ctx_r0.userData == null ? null : ctx_r0.userData.displayName : "User");
} }
class HeaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userData = this.authService.getUserData;
    }
    ngOnInit() { }
    navigateTo(url) {
        this.router.navigate([url]);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 1, consts: [["color", "primary"], [1, "logo", 3, "click"], [1, "spacer"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "matMenuTriggerFor"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_1_listener() { return ctx.navigateTo("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Career Coach");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_button_4_Template, 2, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { return ctx.navigateTo("/u/profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.authService.SignOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_6__["SettingComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"]], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  border-radius: 10px;\n  margin: 20px;\n  width: calc(100% - 40px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n\nmat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n}\n\n.logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUNJO0VBQ0kscUNBQUE7QUFDUjs7QUFHQTtFQUNJLGVBQUE7QUFBSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgfVxufVxuXG4ubG9nbyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "5APW":
/*!****************************************************!*\
  !*** ./src/app/pages/payment/payment.component.ts ***!
  \****************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_consultants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@core/constants/consultants */ "VdM1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../@core/services/card.service */ "JVzv");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../@core/services/auth.service */ "ucNU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function PaymentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Inorder to proceed to next stage which is online debriefing session with a professional consultant, you need to pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unlock Debriefing Session with ", (ctx_r0.selectedConsultant == null ? null : ctx_r0.selectedConsultant.name) || "...", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("AUD ", (ctx_r0.selectedConsultant == null ? null : ctx_r0.selectedConsultant.fee) || "xxx.xx", "");
} }
function PaymentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Congratulation, Debriefing has been unlocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We have recieved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " amount from the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Detail of the session will be shortly sent to you on your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " , please feel free to contact us if there is any issue or confusion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("AUD ", (ctx_r1.selectedConsultant == null ? null : ctx_r1.selectedConsultant.fee) || "xxx.xx", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.clickedOption, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userData.email);
} }
function PaymentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Congratulation, Debriefing has already been unlocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Detail of the session is already sent to your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " , please feel free to contact us if there is any issue or confusion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.userData.email);
} }
function PaymentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Methods");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_div_3_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.optionClicked("Visa Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pay with Visa Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_div_3_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.optionClicked("Master Card"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pay with Master Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_div_3_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.optionClicked("Google Wallet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pay with Google Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_div_3_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.optionClicked("Paypal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pay with Paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_div_3_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.optionClicked("Mobile Banking"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pay with Mobile Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentComponent_div_3_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.optionClicked("Online Banking"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pay with Online Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaymentComponent {
    constructor(router, cardService, _snackBar, authService) {
        this.router = router;
        this.cardService = cardService;
        this._snackBar = _snackBar;
        this.authService = authService;
        this.paymentClicked = false;
        this.clickedOption = '';
        this.loading = false;
        this.paymentHasbeenDone = false;
        this.userData = this.authService.getUserData;
    }
    ngOnInit() {
        this.consultantsList = src_app_core_constants_consultants__WEBPACK_IMPORTED_MODULE_1__["ConsultantsList"];
        this.getResultData();
    }
    getResultData() {
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data) => {
            this.loading = false;
            if (data['appointment']) {
                if (data['appointment'].payment) {
                    this.paymentHasbeenDone = true;
                }
                this.appointmentData = data['appointment'];
                const consultant = this.consultantsList.filter((consultant) => consultant.id === this.appointmentData.consultantId);
                if (!consultant.length) {
                    this.openSnackBar('Something went wrong, can you please re-appoint any consultant', '');
                    return;
                }
                else {
                    this.selectedConsultant = consultant[0];
                }
            }
            else {
                window.location.href = '/results';
            }
        })
            .catch((err) => {
            this.loading = false;
        });
    }
    optionClicked(paymentName) {
        this.loading = true;
        this.clickedOption = paymentName;
        this.cardService.createAppointment('appointment', {
            consultantId: this.appointmentData.consultantId,
            dateTime: this.appointmentData.dateTime,
            payment: true
        });
        setTimeout(() => {
            this.paymentClicked = true;
            this.loading = false;
        }, 3000);
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000
        });
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], decls: 5, vars: 5, consts: [["class", "page-row", 4, "ngIf"], ["class", "page-row main-content", 4, "ngIf"], ["class", "payment-container", 4, "ngIf"], ["class", "loader-part", 4, "ngIf"], [1, "page-row"], [1, "page-row", "main-content"], [1, "payment-container"], [1, "payment-options"], [1, "payment-row", 3, "click"], ["src", "/assets/svg/visa.svg", "alt", "Visa"], [1, "title"], ["src", "/assets/svg/mastercard.svg", "alt", "master card"], ["src", "/assets/svg/google-wallet.svg", "alt", "Google Wallet"], ["src", "/assets/svg/paypal.svg", "alt", "Paypal"], ["src", "/assets/svg/mobile-payment.svg", "alt", "mobile banking"], ["src", "/assets/svg/online-banking.svg", "alt", "Online Banking"], [1, "loader-part"], ["color", "accent"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaymentComponent_div_0_Template, 8, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentComponent_div_1_Template, 15, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentComponent_div_2_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentComponent_div_3_Template, 28, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaymentComponent_div_4_Template, 2, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.paymentClicked && !ctx.paymentHasbeenDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.paymentClicked && !ctx.paymentHasbeenDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.paymentHasbeenDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.paymentClicked && !ctx.paymentHasbeenDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: [".payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n}\n.payment-options[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.payment-options[_ngcontent-%COMP%]   .payment-row[_ngcontent-%COMP%] {\n  width: 450px;\n  background: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;\n  backdrop-filter: blur(16.5px);\n  -webkit-backdrop-filter: blur(16.5px);\n  border-radius: 20px !important;\n  border: 2px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  margin: 10px;\n  align-items: center;\n  padding: 10px 20px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.payment-options[_ngcontent-%COMP%]   .payment-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  margin-right: 20px;\n}\n.payment-options[_ngcontent-%COMP%]   .payment-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.payment-options[_ngcontent-%COMP%]   .payment-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.5);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.page-row.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBRUk7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwyREFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFFUTtFQUNJLG9DQUFBO0VBQ0EsMENBQUE7QUFBWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFIUiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLnBheW1lbnQtcm93IHtcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTYuNXB4KTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTYuNXB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBhZ2Utcm93IHtcbiAgICAmLm1haW4tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "5KBW":
/*!*******************************************!*\
  !*** ./src/app/@core/guard/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "ucNU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PagesComponent {
    constructor() { }
    ngOnInit() { }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 1, vars: 0, template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".page-row {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n  .page-row h2,   .page-row p {\n  color: #fff;\n}\n  .page-row h2 {\n  font-size: 30px;\n}\n  .page-row p {\n  letter-spacing: 0.045em;\n  font-size: 15px;\n}\n  .career-card {\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 10px;\n  border: 2px solid rgba(255, 255, 255, 0.18);\n  margin: 10px;\n  padding: 30px 12px 20px 12px;\n  width: 178px;\n  height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n  cursor: move;\n  box-sizing: border-box;\n  transition: all 0.3s;\n}\n  .career-card .title {\n  font-size: 16px;\n  line-height: 25px;\n  font-weight: 500;\n}\n  .career-card .description {\n  font-size: 14px;\n}\n  .career-card .value {\n  font-size: 40px;\n  font-weight: 900;\n  padding-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUVROztFQUVJLFdBQUE7QUFBWjtBQUdRO0VBQ0ksZUFBQTtBQURaO0FBSVE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFGWjtBQU1JO0VBQ0ksb0NBQUE7RUFDQSxnREFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKUjtBQU1RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQU9RO0VBQ0ksZUFBQTtBQUxaO0FBUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU5aIiwiZmlsZSI6InBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgICAucGFnZS1yb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgaDIsXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0NWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmVlci1jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgcGFkZGluZzogMzBweCAxMnB4IDIwcHggMTJweDtcbiAgICAgICAgd2lkdGg6IDE3OHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                template: `<router-outlet></router-outlet>`,
                styleUrls: ['./pages.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDvH4-5JMBfabObM5MMZph5M7AK7v666A8',
        authDomain: 'career-coach-4954d.firebaseapp.com',
        projectId: 'career-coach-4954d',
        storageBucket: 'career-coach-4954d.appspot.com',
        messagingSenderId: '141294000648',
        appId: '1:141294000648:web:e7b24a1a483281dec50fbd',
        measurementId: 'G-D2VR41YXT9'
    }
};


/***/ }),

/***/ "E2HZ":
/*!************************************************************!*\
  !*** ./src/app/pages/appointment/appointment.component.ts ***!
  \************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _pick_date_pick_date_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pick-date/pick-date.component */ "L5Fz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_constants_consultants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@core/constants/consultants */ "VdM1");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _core_services_card_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../@core/services/card.service */ "JVzv");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













function AppointmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Let's find your consultant,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Here is the list of few consultants, that we find for you as the best match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppointmentComponent_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentComponent_div_1_mat_card_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const consultant_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.selectConsultant(consultant_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const consultant_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](consultant_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](consultant_r6.profession);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("AUD " + consultant_r6.fee);
} }
function AppointmentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppointmentComponent_div_1_mat_card_1_Template, 12, 3, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.consultantsList);
} }
function AppointmentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.selectedConsultant.name, " is your consultant,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Your next appointment is ", ctx_r2.appointmentDate, "");
} }
function AppointmentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedConsultant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedConsultant.profession);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("AUD " + ctx_r3.selectedConsultant.fee);
} }
function AppointmentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppointmentComponent {
    constructor(router, dialog, cardService, _snackBar) {
        this.router = router;
        this.dialog = dialog;
        this.cardService = cardService;
        this._snackBar = _snackBar;
        this.loading = false;
        this.paymentHasbeenDone = false;
    }
    ngOnInit() {
        this.consultantsList = src_app_core_constants_consultants__WEBPACK_IMPORTED_MODULE_2__["ConsultantsList"];
        this.getAppointmentData();
    }
    getAppointmentData() {
        this.loading = false;
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data) => {
            this.loading = false;
            if (data['game-play']) {
                if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                    if (data['appointment'] && data['appointment'].payment) {
                        return;
                    }
                    window.location.href = '/u/game/level2';
                }
                else {
                    if (data['appointment'].payment) {
                        if (moment__WEBPACK_IMPORTED_MODULE_3__().diff(data['appointment'].dateTime, 'seconds') < 0) {
                            this.paymentHasbeenDone = true;
                            this.appointmentDate = moment__WEBPACK_IMPORTED_MODULE_3__(data['appointment'].dateTime).fromNow();
                        }
                    }
                    this.appointmentData = data['appointment'];
                    const consultant = this.consultantsList.filter((consultant) => consultant.id === this.appointmentData.consultantId);
                    if (!consultant.length) {
                        this.openSnackBar('Something went wrong', '');
                    }
                    else {
                        this.selectedConsultant = consultant[0];
                    }
                }
            }
            else {
                window.location.href = '/u/game/level1';
            }
        })
            .catch((err) => {
            this.loading = false;
        });
    }
    selectConsultant(consultant) {
        const dialogRef = this.dialog.open(_pick_date_pick_date_component__WEBPACK_IMPORTED_MODULE_0__["PickDateComponent"], {
            width: '600px',
            data: { consultantId: consultant.id, consultantName: consultant.name }
        });
        dialogRef.afterClosed().subscribe((date) => {
            if (date && date._d) {
                const pickedDate = date._d;
                if (date && moment__WEBPACK_IMPORTED_MODULE_3__(date).isValid()) {
                    const date = moment__WEBPACK_IMPORTED_MODULE_3__(pickedDate).format('YYYY-MM-DDTHH:mm');
                    this.cardService.createAppointment('appointment', {
                        consultantId: consultant.id,
                        dateTime: date,
                        payment: false
                    });
                    this.router.navigate(['/payment']);
                }
                else {
                    this.openSnackBar('You need to select date and time for an appointment', '');
                }
            }
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000
        });
    }
}
AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) { return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_card_service__WEBPACK_IMPORTED_MODULE_6__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
AppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppointmentComponent, selectors: [["app-appointment"]], decls: 5, vars: 5, consts: [["class", "page-row", 4, "ngIf"], ["class", "appointment-container", 4, "ngIf"], ["class", "loader-part", 4, "ngIf"], [1, "page-row"], [1, "appointment-container"], [4, "ngFor", "ngForOf"], [1, "image-holder"], [1, "material-icons"], [1, "user-name"], [1, "user-detail"], [1, "user-fee"], ["mat-button", "", "color", "primary", "mat-raised-button", "", 3, "click"], [1, "loader-part"], ["color", "accent"]], template: function AppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppointmentComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppointmentComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppointmentComponent_div_2_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppointmentComponent_div_3_Template, 11, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppointmentComponent_div_4_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.paymentHasbeenDone && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.paymentHasbeenDone && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentHasbeenDone && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentHasbeenDone && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: [".appointment-container[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: 15px;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 100px;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-transform: capitalize;\n  margin: 10px 0 5px 0;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: 0.04em;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .user-fee[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n  letter-spacing: 0.04em;\n  margin: 30px 0 0 0;\n}\n.appointment-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 3px 40px !important;\n  width: 100% !important;\n  font-size: 14px !important;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ1E7RUFDSSwwQ0FBQTtBQUNaO0FBRVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUlZO0VBQ0ksZ0JBQUE7QUFGaEI7QUFNUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBSlo7QUFPUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBTFo7QUFRUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFOWjtBQVNRO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFQWiIsImZpbGUiOiJhcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBvaW50bWVudC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgbWF0LWNhcmQge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbjogMTVweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlLWhvbGRlciB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZGV0YWlsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZmVlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-appointment',
                templateUrl: './appointment.component.html',
                styleUrls: ['./appointment.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _core_services_card_service__WEBPACK_IMPORTED_MODULE_6__["CardService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "JVzv":
/*!************************************************!*\
  !*** ./src/app/@core/services/card.service.ts ***!
  \************************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "dOLe");






class CardService {
    constructor(db, ngZone, localStorageService) {
        this.db = db;
        this.ngZone = ngZone;
        this.localStorageService = localStorageService;
        this.dbPath = '/cards';
        const user = this.localStorageService.getLocalStorageData('user');
        if (user) {
            this.cardListRef = db.list(this.dbPath + '/' + user.uid);
        }
    }
    getCardItemsList() {
        return this.cardListRef.snapshotChanges();
    }
    createCardAsPerLevel(key, card) {
        this.cardListRef.set(key, card);
    }
    createAppointment(key, card) {
        return this.cardListRef.set(key, card);
    }
    updateCardAsPerLevel(key, value) {
        return this.cardListRef.update(key, value);
    }
    deleteCardAsPerLevel(key) {
        this.cardListRef.remove(key);
    }
    getUsersCard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getCardItemsList().subscribe((data) => {
                    let returnData = {};
                    data.map((val) => {
                        returnData[val.key] = val.payload.val();
                    });
                    resolve(returnData);
                }, (err) => {
                    reject(err);
                });
            });
        });
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../@core/services/auth.service */ "ucNU");
/* harmony import */ var _core_services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../@core/services/card.service */ "JVzv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");










function LandingComponent_mat_card_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_1_b_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.authService.getUserData == null ? null : ctx_r3.authService.getUserData.displayName, " ");
} }
function LandingComponent_mat_card_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_mat_card_1_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.navigateTo("/u/game/level1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start the game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_mat_card_1_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.navigateTo("/u/game/level1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue to the game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_mat_card_1_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.navigateTo("/u/result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "See the results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_mat_card_1_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.authService.GoogleAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingComponent_mat_card_1_span_3_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LandingComponent_mat_card_1_b_4_Template, 3, 1, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Career Coach ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LandingComponent_mat_card_1_div_9_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LandingComponent_mat_card_1_div_10_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LandingComponent_mat_card_1_div_11_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LandingComponent_mat_card_1_div_12_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LandingComponent_mat_card_1_div_13_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.levelTwoCompleted || ctx_r0.levelOneCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn && !ctx_r0.loading && !ctx_r0.levelTwoCompleted && !ctx_r0.levelOneCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn && !ctx_r0.loading && !ctx_r0.levelTwoCompleted && ctx_r0.levelOneCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn && !ctx_r0.loading && ctx_r0.levelTwoCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.authService.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn && ctx_r0.loading);
} }
function LandingComponent_mat_card_2_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Career Coach ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seems like you are already waiting for your appointment, do you want to update the results?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_mat_card_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.navigateTo("/u/game/level1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update the game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_mat_card_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.navigateTo("/u/result"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "See the results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LandingComponent_mat_card_2_div_16_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.authService.getUserData == null ? null : ctx_r1.authService.getUserData.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
} }
class LandingComponent {
    constructor(router, authService, cardService) {
        this.router = router;
        this.authService = authService;
        this.cardService = cardService;
        this.loading = true;
        this.levelOneCompleted = false;
        this.levelTwoCompleted = false;
        this.paymentHasAlreadyBeenDone = false;
    }
    ngOnInit() {
        if (this.authService.isLoggedIn) {
            const cardData = this.cardService.getUsersCard();
            cardData
                .then((data) => {
                this.loading = false;
                if (data['appointment'] && data['appointment'].payment) {
                    this.paymentHasAlreadyBeenDone = true;
                }
                if (data['game-play']) {
                    if (data['appointment'] && data['appointment'].payment) {
                        return;
                    }
                    if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                        this.levelOneCompleted = true;
                    }
                    else {
                        this.levelTwoCompleted = true;
                    }
                }
            })
                .catch((err) => {
                this.loading = false;
            });
        }
        else {
            this.loading = false;
        }
    }
    navigateTo(URL) {
        this.router.navigate([URL]);
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 3, vars: 2, consts: [[1, "landing-holder"], [4, "ngIf"], [1, "page-title"], ["class", "action-holder", 4, "ngIf"], [1, "action-holder"], ["mat-raised-button", "", "color", "primary", "mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-button", ""], ["diameter", "30", "strokeWidth", "4"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingComponent_mat_card_1_Template, 14, 7, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingComponent_mat_card_2_Template, 17, 2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.paymentHasAlreadyBeenDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentHasAlreadyBeenDone);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], styles: [".landing-holder[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 120px);\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 50%;\n}\n\nmat-card[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 50px;\n  color: #fff;\n  text-align: center;\n  padding: 30px 30px 50px 30px;\n}\n\nmat-card[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n}\n\nmat-card[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\nmat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n\nmat-card[_ngcontent-%COMP%]   .action-holder[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n}\n\nmat-card[_ngcontent-%COMP%]   .action-holder[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUVSOztBQUFRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFWjs7QUFBWTtFQUNJLGVBQUE7QUFFaEI7O0FBRUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFHSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBRFI7O0FBR1E7RUFDSSxZQUFBO0FBRFoiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG59XG5tYXQtY2FyZCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG5cbiAgICAucGFnZS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCA1MHB4IDMwcHg7XG5cbiAgICAgICAgYiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1ob2xkZXIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _core_services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"] }]; }, null); })();


/***/ }),

/***/ "L5Fz":
/*!********************************************************************!*\
  !*** ./src/app/pages/appointment/pick-date/pick-date.component.ts ***!
  \********************************************************************/
/*! exports provided: PickDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickDateComponent", function() { return PickDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










const _c0 = ["picker"];
class PickDateComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.showSpinners = true;
        this.today = new Date();
        this.minDate = new Date(this.today);
        this.dateControl = moment__WEBPACK_IMPORTED_MODULE_2__().add(1, 'days');
        this.minDate.setDate(this.minDate.getDate() + 1);
        this.consultantId = data.consultantId;
        this.consultantName = data.consultantName;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
}
PickDateComponent.ɵfac = function PickDateComponent_Factory(t) { return new (t || PickDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PickDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PickDateComponent, selectors: [["app-pick-date"]], viewQuery: function PickDateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
    } }, decls: 12, vars: 6, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "placeholder", "Choose a date", 3, "ngxMatDatetimePicker", "ngModel", "min", "ngModelChange", "focus"], [3, "showSpinners"], ["picker", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", "mat-raised-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function PickDateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PickDateComponent_Template_input_ngModelChange_4_listener($event) { return ctx.dateControl = $event; })("focus", function PickDateComponent_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-mat-datetime-picker", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PickDateComponent_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No Thanks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Choose your feasible date for appointment with ", ctx.consultantName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r0)("ngModel", ctx.dateControl)("min", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSpinners", ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.dateControl);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_5__["NgxMatDatetimeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_5__["NgxMatDatetimePicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 3px 40px !important;\n  font-size: 14px !important;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100% !important;\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BpY2stZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0FBQ1I7QUFHQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFBSiIsImZpbGUiOiJwaWNrLWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDNweCA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PickDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pick-date',
                templateUrl: './pick-date.component.html',
                styleUrls: ['./pick-date.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { picker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['picker']
        }] }); })();


/***/ }),

/***/ "LWPj":
/*!**********************************************!*\
  !*** ./src/app/@core/constants/card-data.ts ***!
  \**********************************************/
/*! exports provided: levelOneCard, levelTwoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelOneCard", function() { return levelOneCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelTwoCard", function() { return levelTwoCard; });
const levelOneCard = [
    { title: 'Active Learning', description: 'Giving full attention to whatever people are saying, understanding, questioning, and interrupting only at appropriate times' },
    { title: 'Presentation', description: 'Public speaking, instruct, train or teach, perform' },
    { title: 'Time management', description: "Managing one's own time and the time of others" },
    { title: 'Persuading', description: 'Persuading others to change their minds or behaviour' },
    { title: 'Selling', description: 'Influence others to buy services, product or ideas and concepts' },
    { title: 'Monitoring', description: 'Monitoring performance of yourself, other individual to make inprovements or take corrective action' },
    { title: 'Troubleshooting', description: 'Determining causes of operating errors and actions to rectify' },
    { title: 'Science', description: 'Using scientific rules, methods and processes to solve problem' },
    { title: 'System analyis', description: 'Determining how a system work and changes in condition' },
    { title: 'Designing', description: 'Concieve, create, develop a plan, project' },
    { title: 'Operation Analysis', description: 'Analysing needs and product requirements to create a design' },
    { title: 'Programming', description: 'Writing computer programs for various purposes' },
    { title: 'Managing Material resources', description: 'Obtaining and seeing to the appropriate use of equipment, facilities needed to do certain work' },
    { title: 'Installation', description: 'Installing equipment, machines,wiring or programs to specification' },
    { title: 'Operation and Control', description: 'Controlling operations of equipement or systems' },
    { title: 'Repairing', description: 'Repairing machines or systems using tools' },
    { title: 'Quality Control Analysis', description: 'Conducting tests and inspections of products, services, to evaluate quality or performance' },
    { title: 'Equipment Maintenance', description: 'Performing routine maintenance on equipment and determining when and what kind of maintenance is needed' },
    { title: 'System Evaluation', description: 'Identifying measures of performance and the actions needed to improve or correct performace, relative to goals' },
    { title: 'Technology Design', description: 'Generating or adapting equipement and technology to user needs' },
    { title: 'Nurture', description: 'Culture and foster the developement of the individual in relation to health or skills and ability' },
    { title: 'Operations Monitoring', description: 'Watching gauges, dials, or other indicators to ensure machines work properly' },
    { title: 'Creating', description: 'Handicrafts, creating art, composing music' },
    { title: 'Instructing', description: 'Teaching others how to do something' },
    { title: 'Problem Solving', description: 'Deductive reasoning, idea generation, diagnose factors or issues' },
    { title: 'Managing Personnel resources', description: 'Motivating, developing and directing people as they work and identifying the best people for the job' },
    { title: 'Learning strategies', description: 'Selecting and using training/instructional methods when learning or teaching new things' },
    { title: 'Managing financial resources', description: 'Determining how money will be spent to complete work and accounting for expenditures' },
    { title: 'Administration', description: 'Working with systems, data and procedures attend to detail' },
    { title: 'Critical Thinking', description: 'Using logic and reasoning to identify the strengths and weakness of alternative solution approaches to problem' }
];
const levelTwoCard = [
    { title: 'Short commute', description: '' },
    { title: 'Casual hours', description: '' },
    { title: 'Quiet environment', description: '' },
    { title: 'Casual dress standards', description: '' },
    { title: 'Small employer(2-40 employer)', description: '' },
    { title: 'Work indoors', description: '' },
    { title: 'Evening/Shift Work', description: '' },
    { title: 'Defined, Routine Tasks', description: '' },
    { title: 'Teamwork', description: '' },
    { title: 'Job Share', description: '' },
    { title: 'Authority', description: '' },
    { title: 'Worthwhile products and services', description: '' },
    { title: 'Managing people', description: '' },
    { title: 'Task Variety', description: '' },
    { title: 'Large employer (500+ employees)', description: '' },
    { title: 'Managing Information Resources', description: '' },
    { title: 'Owner operator', description: '' },
    { title: 'Business Travel', description: '' },
    { title: 'Employment benefits', description: '' },
    { title: 'Client/Customer Contact', description: '' },
    { title: 'Family-friendly workplace', description: '' },
    { title: 'Sense of security', description: '' },
    { title: 'Full time', description: '' },
    { title: 'Promotions Gained through responsibilty', description: '' },
    { title: 'Medium employer(40-500 employees)', description: '' },
    { title: 'Flexible work hours', description: '' },
    { title: 'Work with people who share my ideas', description: '' },
    { title: 'Projet work', description: '' },
    { title: "Employer's values match my values", description: '' },
    { title: 'Air Conditioned Modern office', description: '' }
];



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting/setting.component */ "QHhi");
/* harmony import */ var _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../@core/import/angular-material.import */ "kZii");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ "WU52");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");

























const SHARED_COMPONENTS = [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__["SettingComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__["SettingDialogComponent"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialImportModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__["SettingComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__["SettingDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_21__["NgxMatTimepickerModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_22__["NgxMatMomentModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_21__["NgxMatDatetimePickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__["SettingComponent"], _setting_setting_component__WEBPACK_IMPORTED_MODULE_0__["SettingDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [...SHARED_COMPONENTS],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialImportModule"]],
                providers: [],
                exports: [...SHARED_COMPONENTS]
            }]
    }], null, null); })();


/***/ }),

/***/ "QHhi":
/*!*****************************************************!*\
  !*** ./src/app/shared/setting/setting.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingComponent, SettingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDialogComponent", function() { return SettingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");





class SettingComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(SettingDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_0_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setting',
                templateUrl: './setting.component.html',
                styleUrls: ['./setting.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();
class SettingDialogComponent {
    check() {
        console.log('Clicked');
    }
}
SettingDialogComponent.ɵfac = function SettingDialogComponent_Factory(t) { return new (t || SettingDialogComponent)(); };
SettingDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingDialogComponent, selectors: [["setting-dialog"]], decls: 17, vars: 0, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["mat-list-item", "", 3, "click"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function SettingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingDialogComponent_Template_button_click_4_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingDialogComponent_Template_button_click_6_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enable Left Hand Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingDialogComponent_Template_button_click_8_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Disable Sounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingDialogComponent_Template_button_click_10_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingDialogComponent_Template_button_click_12_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'setting-dialog',
                templateUrl: 'setting-dialog.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'career-coach';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "main-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".main-body[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  margin: 20px;\n}\n\n  .loader-part {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYm9keSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgICAubG9hZGVyLXBhcnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VdM1":
/*!************************************************!*\
  !*** ./src/app/@core/constants/consultants.ts ***!
  \************************************************/
/*! exports provided: ConsultantsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantsList", function() { return ConsultantsList; });
const ConsultantsList = [
    {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        profession: 'Career Consultant',
        fee: '22'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        profession: 'Career Consultant',
        fee: '33'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        profession: 'Career Consultant',
        fee: '60'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        profession: 'Career Consultant',
        fee: '89'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        profession: 'Career Consultant',
        fee: '12'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        profession: 'Career Consultant',
        fee: '32'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        profession: 'Career Consultant',
        fee: '43'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        profession: 'Career Consultant',
        fee: '76'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        email: 'Chaim_McDermott@dana.io',
        profession: 'Career Consultant',
        fee: '55'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        profession: 'Career Consultant',
        fee: '48'
    }
];



/***/ }),

/***/ "VtRx":
/*!**************************************************!*\
  !*** ./src/app/pages/result/result.component.ts ***!
  \**************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../@core/services/card.service */ "JVzv");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/card.component */ "c7Ye");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function ResultComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", data_r6);
} }
function ResultComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultComponent_div_10_div_6_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.level1ResultData[result_r4] == null ? null : ctx_r0.level1ResultData[result_r4].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.level1ResultData[result_r4] == null ? null : ctx_r0.level1ResultData[result_r4].value) && (ctx_r0.level1ResultData[result_r4] == null ? null : ctx_r0.level1ResultData[result_r4].value.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.level1ResultData[result_r4] == null ? null : ctx_r0.level1ResultData[result_r4].value);
} }
function ResultComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResultComponent_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", data_r9);
} }
function ResultComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResultComponent_div_13_div_6_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.level2ResultData[result_r7] == null ? null : ctx_r2.level2ResultData[result_r7].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r2.level2ResultData[result_r7] == null ? null : ctx_r2.level2ResultData[result_r7].value) && (ctx_r2.level2ResultData[result_r7] == null ? null : ctx_r2.level2ResultData[result_r7].value.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.level2ResultData[result_r7] == null ? null : ctx_r2.level2ResultData[result_r7].value);
} }
function ResultComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResultComponent {
    constructor(router, cardService) {
        this.router = router;
        this.cardService = cardService;
        this.level1TotalDataKey = [];
        this.level2TotalDataKey = [];
        this.loading = false;
        this.savedCardData = [];
    }
    ngOnInit() {
        this.getResultData();
    }
    getResultData() {
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data) => {
            this.loading = false;
            if (data['game-play']) {
                if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                    if (data['appointment'] && data['appointment'].payment) {
                        return;
                    }
                    window.location.href = '/u/game/level2';
                }
                else {
                    this.savedCardData = data;
                    this.level1ResultData = this.savedCardData['game-play'].levelOneCard;
                    this.level2ResultData = this.savedCardData['game-play'].levelTwoCard;
                    this.level1TotalDataKey = Object.keys(this.savedCardData['game-play'].levelOneCard);
                    this.level2TotalDataKey = Object.keys(this.savedCardData['game-play'].levelTwoCard);
                }
            }
            else {
                window.location.href = '/u/game/level1';
            }
        })
            .catch((err) => {
            this.loading = false;
        });
    }
    continueToDebriefing() {
        this.router.navigate(['/u/appointment']);
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], decls: 15, vars: 4, consts: [[1, "page-row"], ["mat-button", "", "color", "primary", "mat-raised-button", "", 3, "click"], [1, "result-container"], ["mat-align-tabs", "center", "color", "accent"], ["label", "Level 1"], ["class", "result-data-main", 4, "ngFor", "ngForOf"], ["class", "loader-tab", 4, "ngIf"], ["label", "Level 2"], [1, "result-data-main"], [1, "career-card", "header-card"], [1, "title"], [1, "value"], ["class", "result-data", 4, "ngFor", "ngForOf"], [1, "result-data"], [3, "content"], [1, "loader-tab"], ["diameter", "80", "strokeWidth", "8", "color", "accent"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Congratulation,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have completed the level 1 and level 2 of the game, you can now continue for the debriefing session with the professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_5_listener() { return ctx.continueToDebriefing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continue for Debriefing Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResultComponent_div_10_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultComponent_div_11_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResultComponent_div_13_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResultComponent_div_14_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.level1TotalDataKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.level2TotalDataKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], styles: [".result-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 40px;\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%]     .mat-tab-body-content {\n  display: flex;\n  justify-content: center;\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%]     .mat-tab-labels {\n  border-bottom: 0;\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%]     .mat-ink-bar {\n  display: none;\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%]     .mat-tab-label {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 30px;\n  margin-bottom: 10px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%]     .mat-tab-label.mat-tab-label-active {\n  background-color: rgba(255, 255, 255, 0.6);\n  border: 2px solid rgba(255, 255, 255, 0.8);\n}\n.result-container[_ngcontent-%COMP%]   .mat-tab-group[_ngcontent-%COMP%]     .mat-tab-label:not(:last-child) {\n  margin-right: 20px;\n}\n.result-container[_ngcontent-%COMP%]   .header-card[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.result-container[_ngcontent-%COMP%]   .result-data-main[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n.result-container[_ngcontent-%COMP%]   .loader-tab[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUVZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQWhCO0FBR1k7RUFDSSxnQkFBQTtBQURoQjtBQUlZO0VBQ0ksYUFBQTtBQUZoQjtBQUtZO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFIaEI7QUFLZ0I7RUFDSSwwQ0FBQTtFQUNBLDBDQUFBO0FBSHBCO0FBTWdCO0VBQ0ksa0JBQUE7QUFKcEI7QUFVSTtFQUNJLG1CQUFBO0FBUlI7QUFXSTtFQUNJLFlBQUE7QUFUUjtBQVlJO0VBQ0ksZ0JBQUE7QUFWUiIsImZpbGUiOiJyZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5tYXQtdGFiLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1hdC10YWItbGFiZWxzIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWF0LWluay1iYXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblxuICAgICAgICAgICAgICAgICYubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlci1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB9XG5cbiAgICAucmVzdWx0LWRhdGEtbWFpbiB7XG4gICAgICAgIG1hcmdpbjogNDBweDtcbiAgICB9XG5cbiAgICAubG9hZGVyLXRhYiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }]; }, null); })();


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../@core/services/auth.service */ "ucNU");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userData.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.userData.displayName);
} }
function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.userData.displayName[0]);
} }
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
        this.userData = this.authService.getUserData;
    }
    ngOnInit() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 4, consts: [["class", "image-holder", 4, "ngIf"], [1, "image-holder"], [3, "src", "alt"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.photoURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userData.photoURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.displayName ? ctx.userData.displayName : "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.email);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmat-card[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 100px;\n  border: 6px solid rgba(255, 255, 255, 0.18);\n  overflow: hidden;\n  margin-bottom: 20px;\n}\nmat-card[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksV0FBQTtBQUNaO0FBR0k7RUFDSSxrQkFBQTtBQURSIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmltYWdlLWhvbGRlciB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "n9Sv");
/* harmony import */ var _core_services_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@core/services/card.service */ "JVzv");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@core/services/auth.service */ "ucNU");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _core_import_firebase_import__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@core/import/firebase.import */ "zmHl");
/* harmony import */ var _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@core/import/angular-material.import */ "kZii");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ "WU52");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");






































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _core_services_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialImportModule"], _core_import_firebase_import__WEBPACK_IMPORTED_MODULE_7__["FirebaseImportModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"], _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__["NgxMatTimepickerModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_30__["NgxMatMomentModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_29__["NgxMatDatetimePickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_32__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_33__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_34__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_36__["AngularFireStorageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"], _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialImportModule"], _core_import_firebase_import__WEBPACK_IMPORTED_MODULE_7__["FirebaseImportModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"]],
                providers: [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _core_services_card_service__WEBPACK_IMPORTED_MODULE_1__["CardService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@core/guard/auth.guard */ "5KBW");







const routes = [
    {
        path: '',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"]
    },
    {
        path: 'u',
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN"))).PagesModule; }),
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c7Ye":
/*!**********************************************!*\
  !*** ./src/app/pages/card/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardComponent {
    constructor() { }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { content: "content" }, decls: 5, vars: 2, consts: [[1, "career-card"], [1, "title"], [1, "description"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content == null ? null : ctx.content.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content == null ? null : ctx.content.description);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "dOLe":
/*!*********************************************************!*\
  !*** ./src/app/@core/services/local-storage.service.ts ***!
  \*********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const ENCRYPT_SECRET_KEY = 'PqaFh1ql*a0X';
class LocalStorageService {
    constructor() {
        this.deleteLocalStorage = (key) => {
            localStorage.removeItem(key);
        };
        this.setLocalStorageData = (key, data) => {
            const value = JSON.stringify(this.encryptData(JSON.stringify(data)));
            localStorage.setItem(key, value);
        };
        this.getLocalStorageData = (key) => {
            const localData = localStorage.getItem(key);
            if (localData) {
                const data = JSON.parse(localData);
                return this.decryptData(data);
            }
        };
        this.clearAllLocalStorageData = () => {
            localStorage.clear();
        };
        this.encryptData = (data) => {
            try {
                return crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].encrypt(data, ENCRYPT_SECRET_KEY).toString();
            }
            catch (e) {
                console.log(e);
                return '';
            }
        };
        this.decryptData = (data) => {
            try {
                if (!!data) {
                    const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__["AES"].decrypt(data, ENCRYPT_SECRET_KEY);
                    if (bytes.toString()) {
                        return JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__["enc"].Utf8));
                    }
                }
                return data;
            }
            catch (e) {
                console.log(e);
            }
        };
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _appointment_pick_date_pick_date_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment/pick-date/pick-date.component */ "L5Fz");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment/appointment.component */ "E2HZ");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "Y5Lh");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment/payment.component */ "5APW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "c7Ye");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.component */ "VtRx");
/* harmony import */ var _card_drag_card_drag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-drag/card-drag.component */ "y8Mw");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages.routing */ "lYjW");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../@core/import/angular-material.import */ "kZii");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ "WU52");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
































class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _pages_routing__WEBPACK_IMPORTED_MODULE_9__["PagesRoutingModule"], _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialImportModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_10__["PagesComponent"], _card_drag_card_drag_component__WEBPACK_IMPORTED_MODULE_8__["CardDragComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentComponent"], _appointment_pick_date_pick_date_component__WEBPACK_IMPORTED_MODULE_0__["PickDateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _pages_routing__WEBPACK_IMPORTED_MODULE_9__["PagesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_28__["NgxMatTimepickerModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_29__["NgxMatMomentModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_28__["NgxMatDatetimePickerModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _pages_routing__WEBPACK_IMPORTED_MODULE_9__["PagesRoutingModule"], _core_import_angular_material_import__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialImportModule"]],
                declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_10__["PagesComponent"], _card_drag_card_drag_component__WEBPACK_IMPORTED_MODULE_8__["CardDragComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentComponent"], _appointment_pick_date_pick_date_component__WEBPACK_IMPORTED_MODULE_0__["PickDateComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kZii":
/*!*********************************************************!*\
  !*** ./src/app/@core/import/angular-material.import.ts ***!
  \*********************************************************/
/*! exports provided: AngularMaterialImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialImportModule", function() { return AngularMaterialImportModule; });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ "WU52");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



















const AngularMaterialImportModule = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
    _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepickerModule"],
    _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_17__["NgxMatMomentModule"],
    _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_16__["NgxMatDatetimePickerModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"]
];


/***/ }),

/***/ "lYjW":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/page-not-found/page-not-found.component */ "n9Sv");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment/appointment.component */ "E2HZ");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "Y5Lh");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment/payment.component */ "5APW");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result/result.component */ "VtRx");
/* harmony import */ var _card_drag_card_drag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-drag/card-drag.component */ "y8Mw");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.component */ "8D7W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@core/guard/auth.guard */ "5KBW");












const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"],
        children: [
            {
                path: 'game/:level',
                component: _card_drag_card_drag_component__WEBPACK_IMPORTED_MODULE_5__["CardDragComponent"],
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'result',
                component: _result_result_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponent"],
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'payment',
                component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"],
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'appointment',
                component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentComponent"],
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: '**',
                component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]
            }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "n9Sv":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 5, vars: 0, consts: [[1, "page-not-found"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Requested page cannot be found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-not-found[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 200px;\n}\n.page-not-found[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n.page-not-found[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 100px;\n  font-weight: 100;\n  margin-bottom: 50px;\n}\n.page-not-found[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTs7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLGVBQUE7QUFDUiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW5vdC1mb3VuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG5cbiAgICBoMSxcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ucNU":
/*!************************************************!*\
  !*** ./src/app/@core/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-storage.service */ "dOLe");








class AuthService {
    constructor(afs, afAuth, router, ngZone, localStorageService) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.localStorageService = localStorageService;
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = this.buildUserData(user);
                this.localStorageService.setLocalStorageData('user', this.userData);
            }
        });
    }
    get isLoggedIn() {
        const user = this.localStorageService.getLocalStorageData('user');
        if (user && user.displayName) {
            return true;
        }
        else {
            return false;
        }
    }
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider());
    }
    AuthLogin(provider) {
        return this.afAuth
            .signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['/']);
            });
            this.SetUserData(result.user);
        })
            .catch((error) => {
            window.alert(error);
        });
    }
    buildUserData(user) {
        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
    }
    SetUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    SignOut() {
        return this.afAuth.signOut().then(() => {
            this.localStorageService.clearAllLocalStorageData();
            window.location.href = '';
        });
    }
    get getUserData() {
        return this.localStorageService.getLocalStorageData('user');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "y8Mw":
/*!********************************************************!*\
  !*** ./src/app/pages/card-drag/card-drag.component.ts ***!
  \********************************************************/
/*! exports provided: CardDragComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDragComponent", function() { return CardDragComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _core_constants_card_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/constants/card-data */ "LWPj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_services_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../@core/services/card.service */ "JVzv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function CardDragComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18.description);
} }
function CardDragComponent_div_0_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.description);
} }
function CardDragComponent_div_0_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.description);
} }
function CardDragComponent_div_0_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.description);
} }
function CardDragComponent_div_0_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r22.description);
} }
function CardDragComponent_div_0_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.description);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return [a0, a1, a2, a3, a4, a5, a6, a7, a8]; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9]; };
const _c2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
function CardDragComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Barrier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Could Do Without");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Essential For Satisfation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nice To Have");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Shuffe Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardDragComponent_div_0_Template_div_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.shuffleCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Shuffle Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CardDragComponent_div_0_div_54_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CardDragComponent_div_0_div_57_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CardDragComponent_div_0_div_60_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CardDragComponent_div_0_div_63_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CardDragComponent_div_0_div_66_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function CardDragComponent_div_0_Template_div_cdkDropListDropped_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, CardDragComponent_div_0_div_69_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.barrier)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](35, _c0, [_r3, _r6, _r8, _r10, _r12, _r14, _r16, _r4, _r5]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.barrier[0] == null ? null : ctx_r0.barrier[0].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.barrier[0] == null ? null : ctx_r0.barrier[0].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.couldDoWithout)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](45, _c1, [_r3, _r6, _r8, _r10, _r12, _r14, _r16, _r4, _r5, _r2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.couldDoWithout[0] == null ? null : ctx_r0.couldDoWithout[0].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.couldDoWithout[0] == null ? null : ctx_r0.couldDoWithout[0].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.essentialForSatisfation)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](56, _c0, [_r3, _r6, _r8, _r10, _r12, _r14, _r16, _r2, _r5]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.essentialForSatisfation[0] == null ? null : ctx_r0.essentialForSatisfation[0].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.essentialForSatisfation[0] == null ? null : ctx_r0.essentialForSatisfation[0].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.niceToHave)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](66, _c0, [_r3, _r6, _r8, _r10, _r12, _r14, _r16, _r4, _r2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.niceToHave[0] == null ? null : ctx_r0.niceToHave[0].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.niceToHave[0] == null ? null : ctx_r0.niceToHave[0].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.cardListData.data1)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](76, _c2, _r3, _r2, _r4, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardListData.data1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.cardListData.data2)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](81, _c2, _r3, _r2, _r4, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardListData.data2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.cardListData.data3)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](86, _c2, _r3, _r2, _r4, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardListData.data3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.cardListData.data4)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](91, _c2, _r3, _r2, _r4, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardListData.data4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.cardListData.data5)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](96, _c2, _r3, _r2, _r4, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardListData.data5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r0.cardListData.data6)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](101, _c2, _r3, _r2, _r4, _r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardListData.data6);
} }
function CardDragComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
let $this;
class CardDragComponent {
    constructor(router, cardService, route) {
        this.router = router;
        this.cardService = cardService;
        this.route = route;
        this.loading = false;
        this.levelOneCard = _core_constants_card_data__WEBPACK_IMPORTED_MODULE_2__["levelOneCard"];
        this.levelTwoCard = _core_constants_card_data__WEBPACK_IMPORTED_MODULE_2__["levelTwoCard"];
        this.barrier = [];
        this.couldDoWithout = [];
        this.essentialForSatisfation = [];
        this.niceToHave = [];
        this.totalCardColumn = 6;
        this.cardData = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];
        this.totalCard = [];
        this.savedCardData = [];
        this.currentLevel = 'Level 1';
        this.cardListData = {
            data1: [],
            data2: [],
            data3: [],
            data4: [],
            data5: [],
            data6: []
        };
        $this = this;
    }
    ngOnInit() {
        const level = this.route.snapshot.params['level'];
        if (level !== 'level1' && level !== 'level2') {
            this.router.navigate(['/']);
        }
        if (level === 'level1') {
            this.currentLevel = 'Level 1';
            this.startGame(this.levelOneCard);
        }
        if (level === 'level2') {
            this.currentLevel = 'Level 2';
            this.startGame(this.levelTwoCard);
        }
        this.checkIfAlreadyPlayed(level);
    }
    checkIfAlreadyPlayed(level) {
        this.loading = true;
        this.cardService
            .getUsersCard()
            .then((data) => {
            this.loading = false;
            this.savedCardData = data;
            if (data['game-play']) {
                if (data['appointment'] && data['appointment'].payment) {
                    return;
                }
                if (data['game-play'].levelOneCard && !data['game-play'].levelTwoCard) {
                    if (level === 'level1') {
                        window.location.href = '/u/game/level2';
                    }
                }
                else if (data['game-play'].levelOneCard && data['game-play'].levelTwoCard) {
                    if (level === 'level1' || level === 'level2') {
                        window.location.href = '/u/result';
                    }
                }
            }
            else {
                if (level === 'level2') {
                    window.location.href = '/u/game/level1';
                }
            }
        })
            .catch((err) => {
            this.loading = false;
        });
    }
    startGame(gameLevelData) {
        this.totalCard = [...gameLevelData];
        this.getEqualCard(this.totalCard);
    }
    getEqualCard(gameCardData) {
        const amountFraction = gameCardData.length / this.totalCardColumn;
        const amount = Math.round(amountFraction);
        const cardContent = this.shuffleArray(gameCardData);
        for (let j = 0; j <= amount; j++) {
            for (let i = 0; i < this.cardData.length; i++) {
                if (i === 0 && cardContent[0])
                    this.cardListData.data1.push(cardContent[0]);
                if (i === 1 && cardContent[0])
                    this.cardListData.data2.push(cardContent[0]);
                if (i === 2 && cardContent[0])
                    this.cardListData.data3.push(cardContent[0]);
                if (i === 3 && cardContent[0])
                    this.cardListData.data4.push(cardContent[0]);
                if (i === 4 && cardContent[0])
                    this.cardListData.data5.push(cardContent[0]);
                if (i === 5 && cardContent[0])
                    this.cardListData.data6.push(cardContent[0]);
                cardContent.shift();
            }
        }
    }
    shuffleCard() {
        for (let item in this.cardData) {
            this.cardListData.data1 = this.shuffleArray(this.cardListData.data1);
            this.cardListData.data2 = this.shuffleArray(this.cardListData.data2);
            this.cardListData.data3 = this.shuffleArray(this.cardListData.data3);
            this.cardListData.data4 = this.shuffleArray(this.cardListData.data4);
            this.cardListData.data5 = this.shuffleArray(this.cardListData.data5);
            this.cardListData.data6 = this.shuffleArray(this.cardListData.data6);
        }
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.checkIfLevelCompleted();
    }
    checkIfLevelCompleted() {
        const totalSelectedCard = this.barrier.length + this.couldDoWithout.length + this.essentialForSatisfation.length + this.niceToHave.length;
        if ((totalSelectedCard === this.levelOneCard.length && this.currentLevel === 'Level 1') || (totalSelectedCard === this.levelTwoCard.length && this.currentLevel === 'Level 2')) {
            this.showResult();
        }
    }
    showResult() {
        let levelCard;
        if (this.currentLevel === 'Level 2') {
            levelCard = {
                levelOneCard: this.savedCardData['game-play'].levelOneCard,
                levelTwoCard: this.getResult()
            };
            this.cardService.createCardAsPerLevel('game-play', levelCard);
            window.location.href = '/u/result';
        }
        else {
            levelCard = { levelOneCard: this.getResult() };
            this.cardService.createCardAsPerLevel('game-play', levelCard);
            window.location.href = '/u/game/level2';
        }
    }
    getResult() {
        return {
            barrier: {
                title: 'Barrier',
                value: this.barrier
            },
            couldDoWithout: {
                title: 'Could Do Without',
                value: this.couldDoWithout
            },
            essentialForSatisfation: {
                title: 'Essential For Satisfation',
                value: this.essentialForSatisfation
            },
            niceToHave: {
                title: 'Nice To Have',
                value: this.niceToHave
            }
        };
    }
}
CardDragComponent.ɵfac = function CardDragComponent_Factory(t) { return new (t || CardDragComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CardDragComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDragComponent, selectors: [["app-card-drag"]], decls: 2, vars: 2, consts: [["class", "game-card", 4, "ngIf"], ["class", "loader-part", 4, "ngIf"], [1, "game-card"], [1, "row"], [1, "header-row"], [1, "drag-zone"], [1, "card-holder"], ["cdkDropList", "", 1, "get-drag-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["barrierList", "cdkDropList"], ["cdkDrag", "", 1, "career-card"], [1, "title"], [1, "description"], ["couldDoWithoutList", "cdkDropList"], ["essentialForSatisfationList", "cdkDropList"], ["niceToHaveList", "cdkDropList"], [1, "shuffle-zone"], [1, "career-card", "card-shuffle", 3, "click"], [1, "career-card-list-holder"], ["cdkDropList", "", 1, "career-card-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["cardList1", "cdkDropList"], ["class", "career-card", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cardList2", "cdkDropList"], ["cardList3", "cdkDropList"], ["cardList4", "cdkDropList"], ["cardList5", "cdkDropList"], ["cardList6", "cdkDropList"], [1, "loader-part"], ["color", "accent"]], template: function CardDragComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardDragComponent_div_0_Template, 70, 106, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardDragComponent_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: [".row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 800;\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.drag-zone[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n}\n\n.drag-zone[_ngcontent-%COMP%]   .card-holder[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.get-drag-list[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  height: 300px;\n  position: relative;\n  width: 200px;\n}\n\n.get-drag-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n\n.get-drag-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:not(:first-child) {\n  top: 20px;\n}\n\n.shuffle-zone[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  margin: 50px auto;\n  justify-content: center;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 200px;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:not(:first-child) {\n  top: 60px;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  top: 30px;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:nth-child(3) {\n  top: 60px;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:nth-child(4) {\n  top: 90px;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:nth-child(5) {\n  top: 120px;\n}\n\n.career-card-list-holder[_ngcontent-%COMP%]   .career-card-list[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:nth-child(6) {\n  top: 150px;\n}\n\n.card-shuffle.career-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  justify-content: center;\n  font-size: 20px;\n}\n\n.card-shuffle.career-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.career-card[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.career-card-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .career-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcmQtZHJhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUFBUjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQURKOztBQUdJO0VBQ0ksWUFBQTtBQURSOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJSTtFQUNJLGtCQUFBO0FBRlI7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtBQUhSOztBQUtRO0VBQ0ksU0FBQTtBQUhaOztBQVFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBTEo7O0FBT0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTFI7O0FBT1E7RUFDSSxrQkFBQTtBQUxaOztBQU9ZO0VBQ0ksU0FBQTtBQUxoQjs7QUFRWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQU5oQjs7QUFTWTtFQUNJLFNBQUE7QUFQaEI7O0FBVVk7RUFDSSxTQUFBO0FBUmhCOztBQVdZO0VBQ0ksVUFBQTtBQVRoQjs7QUFZWTtFQUNJLFVBQUE7QUFWaEI7O0FBaUJJO0VBQ0ksZUFBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZFI7O0FBZ0JRO0VBQ0ksb0NBQUE7QUFkWjs7QUFtQkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFoQko7O0FBbUJBO0VBQ0ksVUFBQTtBQWhCSjs7QUFtQkE7RUFDSSxzREFBQTtBQWhCSjs7QUFtQkE7RUFDSSxZQUFBO0FBaEJKOztBQW1CQTtFQUNJLHNEQUFBO0FBaEJKIiwiZmlsZSI6ImNhcmQtZHJhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDNweCA0cHggN3B4IHJnYmEoODEsIDY3LCAyMSwgMC44KTtcbiAgICB9XG59XG5cbi5oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGgyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLmRyYWctem9uZSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmNhcmQtaG9sZGVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuLmdldC1kcmFnLWxpc3Qge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAuY2FyZWVyLWNhcmQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNodWZmbGUtem9uZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uY2FyZWVyLWNhcmQtbGlzdC1ob2xkZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5jYXJlZXItY2FyZC1saXN0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG5cbiAgICAgICAgLmNhcmVlci1jYXJkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgIHRvcDogOTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgICAgIHRvcDogMTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1zaHVmZmxlIHtcbiAgICAmLmNhcmVlci1jYXJkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY2FyZWVyLWNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY2FyZWVyLWNhcmQtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jYXJlZXItY2FyZDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardDragComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-drag',
                templateUrl: './card-drag.component.html',
                styleUrls: ['./card-drag.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zmHl":
/*!*************************************************!*\
  !*** ./src/app/@core/import/firebase.import.ts ***!
  \*************************************************/
/*! exports provided: FirebaseImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseImportModule", function() { return FirebaseImportModule; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");






const FirebaseImportModule = [_angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorageModule"]];


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map