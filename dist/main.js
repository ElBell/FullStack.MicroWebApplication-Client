(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_users_posts_users_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-posts/users-posts.component */ "./src/app/components/users-posts/users-posts.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/post-form/post-form.component */ "./src/app/components/post-form/post-form.component.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_opening_page_opening_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/opening-page/opening-page.component */ "./src/app/components/opening-page/opening-page.component.ts");
/* harmony import */ var _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/post-edit/post-edit.component */ "./src/app/components/post-edit/post-edit.component.ts");
/* harmony import */ var _components_your_posts_your_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/your-posts/your-posts.component */ "./src/app/components/your-posts/your-posts.component.ts");
/* harmony import */ var _components_tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tag-page/tag-page.component */ "./src/app/components/tag-page/tag-page.component.ts");













var routes = [
    { path: '', component: _components_opening_page_opening_page_component__WEBPACK_IMPORTED_MODULE_9__["OpeningPageComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'users/posts/:id', component: _components_users_posts_users_posts_component__WEBPACK_IMPORTED_MODULE_4__["UsersPostsComponent"] },
    { path: 'post/:id', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'users/createPost', component: _components_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_6__["PostFormComponent"] },
    { path: 'users/posts', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'users/editPost/:id', component: _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_10__["PostEditComponent"] },
    { path: 'callback', component: _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_7__["CallbackComponent"] },
    { path: 'posts', component: _components_your_posts_your_posts_component__WEBPACK_IMPORTED_MODULE_11__["YourPostsComponent"] },
    { path: 'tag/:id', component: _components_tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_12__["TagPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-nav-bar></app-nav-bar>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        authService.handleAuthentication();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/blog.api.service */ "./src/app/services/blog.api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_users_posts_users_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users-posts/users-posts.component */ "./src/app/components/users-posts/users-posts.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _components_opening_page_opening_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/opening-page/opening-page.component */ "./src/app/components/opening-page/opening-page.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/post-form/post-form.component */ "./src/app/components/post-form/post-form.component.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tags/tags.component */ "./src/app/components/tags/tags.component.ts");
/* harmony import */ var _components_tag_form_tag_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tag-form/tag-form.component */ "./src/app/components/tag-form/tag-form.component.ts");
/* harmony import */ var _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/post-edit/post-edit.component */ "./src/app/components/post-edit/post-edit.component.ts");
/* harmony import */ var _components_comments_post_comments_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/comments-post/comments-post.component */ "./src/app/components/comments-post/comments-post.component.ts");
/* harmony import */ var _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/comment-form/comment-form.component */ "./src/app/components/comment-form/comment-form.component.ts");
/* harmony import */ var _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/post-list/post-list.component */ "./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var _components_your_posts_your_posts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/your-posts/your-posts.component */ "./src/app/components/your-posts/your-posts.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/comment-edit/comment-edit.component */ "./src/app/components/comment-edit/comment-edit.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _components_tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/tag-page/tag-page.component */ "./src/app/components/tag-page/tag-page.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _components_users_posts_users_posts_component__WEBPACK_IMPORTED_MODULE_8__["UsersPostsComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"],
                _components_opening_page_opening_page_component__WEBPACK_IMPORTED_MODULE_14__["OpeningPageComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
                _components_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_16__["PostFormComponent"],
                _components_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_20__["PostEditComponent"],
                _components_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_16__["PostFormComponent"],
                _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_18__["TagsComponent"],
                _components_tag_form_tag_form_component__WEBPACK_IMPORTED_MODULE_19__["TagFormComponent"],
                _components_comments_post_comments_post_component__WEBPACK_IMPORTED_MODULE_21__["CommentsPostComponent"],
                _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_22__["CommentFormComponent"],
                _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_23__["PostListComponent"],
                _components_your_posts_your_posts_component__WEBPACK_IMPORTED_MODULE_24__["YourPostsComponent"],
                _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_22__["CommentFormComponent"],
                _components_comment_edit_comment_edit_component__WEBPACK_IMPORTED_MODULE_27__["CommentEditComponent"],
                _components_tag_page_tag_page_component__WEBPACK_IMPORTED_MODULE_29__["TagPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_services_blog_api_service__WEBPACK_IMPORTED_MODULE_5__["BlogApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _services_tag_service__WEBPACK_IMPORTED_MODULE_17__["TagService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/callback/callback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/callback/callback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/callback/callback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/callback/callback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    Logging in\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/components/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/components/callback/callback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/comment-edit/comment-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/comment-edit/comment-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC1lZGl0L2NvbW1lbnQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/comment-edit/comment-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/comment-edit/comment-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <button type=\"button\" class=\"btn btn-sm btn-dark btn\" (click)=\"onUpdate()\"><i class=\"fa fa-edit\"></i></button> &nbsp;\n  <button type=\"button\" class=\"btn btn-sm btn-danger btn\" (click)=\"onDelete()\"><i class=\"fa fa-trash\"></i></button>\n\n"

/***/ }),

/***/ "./src/app/components/comment-edit/comment-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/comment-edit/comment-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentEditComponent", function() { return CommentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Comments */ "./src/app/models/Comments.ts");





var CommentEditComponent = /** @class */ (function () {
    function CommentEditComponent(postId, blogApiService, router) {
        this.postId = postId;
        this.blogApiService = blogApiService;
        this.router = router;
        this.model = new _models_Comments__WEBPACK_IMPORTED_MODULE_4__["Comments"](null, null, null, null, null);
        this.user = true;
        this.deleted = false;
    }
    CommentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getComment(this.comment.commentId);
        setTimeout(function () {
            _this.checkUser();
        }, 400);
        if (this.user) {
            setTimeout(function () {
                _this.loadCommentModel();
            }, 400);
        }
    };
    CommentEditComponent.prototype.getComment = function (commentId) {
        var _this = this;
        console.log(commentId.params.value.id);
        this.blogApiService.getPostById(commentId.params.value.id).subscribe(function (data) { _this.post = data; }, function (err) { return console.log(err); });
    };
    CommentEditComponent.prototype.checkUser = function () {
        this.user = localStorage.getItem('username') === this.comment.user.name;
    };
    CommentEditComponent.prototype.loadCommentModel = function () {
        this.model = new _models_Comments__WEBPACK_IMPORTED_MODULE_4__["Comments"](this.comment.commentID, this.comment.comments, this.comment.createdDate, this.comment.post, this.comment.user);
    };
    CommentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-edit',
            template: __webpack_require__(/*! ./comment-edit.component.html */ "./src/app/components/comment-edit/comment-edit.component.html"),
            styles: [__webpack_require__(/*! ./comment-edit.component.css */ "./src/app/components/comment-edit/comment-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__["BlogApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CommentEditComponent);
    return CommentEditComponent;
}());



/***/ }),

/***/ "./src/app/components/comment-form/comment-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/comment-form/comment-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/comment-form/comment-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/comment-form/comment-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color: white; border-radius: 5px\">\n  <div class=\"list-group\" *ngFor=\"let comment of comments\">\n\n    <div>\n      <span [hidden]=\"comment.user.name !== creator\">\n        <i style=\"margin-left: 1em\" class=\"fa fa-edit\" (click)=\"onUpdate(comment)\"></i>\n        <i style=\"color: crimson\" class=\"fa fa-trash\" (click)=\"onDelete(comment.commentId)\"></i>\n      </span>\n      <span [routerLink]=\"['/users/posts/', comment.user.id]\">{{comment.user.name}}:</span>\n    </div>\n    <div class=\"list-group-item\" [hidden]=\"model === comment\">\n      {{comment.comments}}\n    </div>\n    <label [hidden]=\"model !== comment\">\n      <input style=\"width: 100%; background: aliceblue; \" [(ngModel)]=\"comment.comments\" type=\"text\">\n    </label>\n  </div>\n</div>\n\n<button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"onClick()\">Add Comment</button>\n<div [hidden]=\"!showing\" class=\"form-group\">\n  <textarea placeholder=\"Enter New Comment\" class=\"form-control\" id=\"comment\" rows=\"3\" [(ngModel)]=\"model.comments\" name=\"comments\"></textarea>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"onClickAdd()\">Submit Comment</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/comment-form/comment-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/comment-form/comment-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function() { return CommentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Comments */ "./src/app/models/Comments.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");





var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(postId, blogApiService) {
        this.postId = postId;
        this.blogApiService = blogApiService;
        this.showing = false;
        this.comments = [];
        this.model = new _models_Comments__WEBPACK_IMPORTED_MODULE_2__["Comments"](null, null, null, null, null);
        this.creator = localStorage.getItem('username');
    }
    CommentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setPost(this.postId);
        this.getComments(this.postId);
        setTimeout(function () { return _this.resetModel(); }, 200);
    };
    CommentFormComponent.prototype.getComments = function (postId) {
        var _this = this;
        this.blogApiService.getCommentsByPost(postId.params.value.id)
            .subscribe(function (data) { _this.comments = data; });
    };
    CommentFormComponent.prototype.setPost = function (postId) {
        var _this = this;
        this.blogApiService.getPostById(postId.params.value.id)
            .subscribe(function (data) { _this.post = data; });
    };
    CommentFormComponent.prototype.onClick = function () {
        this.showing = !this.showing;
    };
    CommentFormComponent.prototype.onClickAdd = function () {
        this.blogApiService.createComment(this.model);
        this.comments.push(this.model);
        this.resetModel();
        this.showing = false;
    };
    CommentFormComponent.prototype.onDelete = function (commentId) {
        this.blogApiService.deleteComment(commentId);
        this.comments = this.comments.filter(function (comment) { return comment.commentId !== commentId; });
    };
    CommentFormComponent.prototype.onUpdate = function (comment) {
        if (comment !== this.model) {
            this.model = comment;
        }
        else {
            this.blogApiService.updateComment(this.model);
            this.resetModel();
        }
    };
    CommentFormComponent.prototype.resetModel = function () {
        this.model = new _models_Comments__WEBPACK_IMPORTED_MODULE_2__["Comments"](null, '', new Date(), this.post, { id: localStorage.getItem('userid'), name: localStorage.getItem('username') });
    };
    CommentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-form',
            template: __webpack_require__(/*! ./comment-form.component.html */ "./src/app/components/comment-form/comment-form.component.html"),
            styles: [__webpack_require__(/*! ./comment-form.component.css */ "./src/app/components/comment-form/comment-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_4__["BlogApiService"]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/components/comments-post/comments-post.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/comments-post/comments-post.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudHMtcG9zdC9jb21tZW50cy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/comments-post/comments-post.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/comments-post/comments-post.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  comments-post works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/comments-post/comments-post.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/comments-post/comments-post.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommentsPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPostComponent", function() { return CommentsPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");




var CommentsPostComponent = /** @class */ (function () {
    function CommentsPostComponent(commentId, blogApiService) {
        this.commentId = commentId;
        this.blogApiService = blogApiService;
    }
    CommentsPostComponent.prototype.ngOnInit = function () {
        this.getComments(this.post.getId());
    };
    CommentsPostComponent.prototype.getComments = function (postId) {
        var _this = this;
        this.blogApiService.getCommentsByPost(postId.params.value.id).subscribe(function (data) { _this.post = data; }, function (err) { return console.log(err); });
    };
    CommentsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments-post',
            template: __webpack_require__(/*! ./comments-post.component.html */ "./src/app/components/comments-post/comments-post.component.html"),
            styles: [__webpack_require__(/*! ./comments-post.component.css */ "./src/app/components/comments-post/comments-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__["BlogApiService"]])
    ], CommentsPostComponent);
    return CommentsPostComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" style=\"background-color:#0A96B2\">-->\n<!--    <a class=\"navbar-brand\" href=\"#\">Navbar</a>-->\n<!--    <button style=\"color: #28DA05\" [hidden]=\"!isUserLoggedIn\" (click)=\"logout()\"> Logout </button>-->\n<!--    <button style=\"color: #28DA05\" [hidden]=\"isUserLoggedIn\" (click)=\"login()\"> Login </button>-->\n<!--</nav>-->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">  <img src=\"../../assets/images/Logo.png\" alt=\"GenericPlaceHolder\" class=\"img-thumbnail\"\n                                          style=\"height:7vw; background-color: aliceblue\"/></a>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"color: #28DA05\" [hidden]=\"!isUserLoggedIn\" (click)=\"logout()\">Logout</button>\n      </li>\n      <li class=\"nav-item\">\n        <button  type=\"button\" class=\"btn btn-success\" style=\"color: white\" [hidden]=\"isUserLoggedIn\" (click)=\"login()\">Login</button>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\" [hidden]=\"!isUserLoggedIn\"\n              [routerLink]=\"['/posts/']\">Your Posts</button>\n    </form>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService) {
        this.authService = authService;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isUserLoggedIn = _this.authService.isAuthenticated();
            _this.userId = localStorage.getItem('userid');
        }, 400);
    };
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
        this.isUserLoggedIn = this.authService.isAuthenticated();
    };
    NavBarComponent.prototype.login = function () {
        this.authService.login();
        this.isUserLoggedIn = this.authService.isAuthenticated();
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/opening-page/opening-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/opening-page/opening-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg {\n  opacity: 0.1;\n  filter: alpha(opacity=10);\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  z-index: -1;\n}\n#bg img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: 50%;\n  min-height: 50%;\n}\n.btn:not(.disabled):hover {\n  margin-top: 0.5rem !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVuaW5nLXBhZ2Uvb3BlbmluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcGVuaW5nLXBhZ2Uvb3BlbmluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmcge1xuICBvcGFjaXR5OiAwLjE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiAtNTAlO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbiNiZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogNTAlO1xufVxuXG4uYnRuOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/opening-page/opening-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/opening-page/opening-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"../assets/images/Logo.png\" alt=\"GenericPlaceHolder\" class=\"float-left img-fluid\"\n       style=\"height:15vw; padding-left:10%\"/><br/>\n  <h2 style=\"padding-top:4%; padding-left:30%; color:#0A96B2; font-size: 5vw\">Welcome to WhatThe <span style=\"color:#28DA05\">Tek!</span></h2>\n  <button type=\"button\" class=\"btn btn-success btn-block\" [routerLink]=\"['/users/createPost']\">Create Post</button>\n  <button type=\"button\" class=\"btn btn-primary btn-block\" [routerLink]=\"['/users']\">Users</button> <br/>\n</div>\n<app-tags [totalPosts]=\"totalPosts\" (filter)=\"onFilter($event)\"></app-tags>\n<div>\n  <br/>  <br/>\n  <app-post-list [posts]=\"posts\"></app-post-list>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/opening-page/opening-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/opening-page/opening-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpeningPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningPageComponent", function() { return OpeningPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");



var OpeningPageComponent = /** @class */ (function () {
    function OpeningPageComponent(blogApiService) {
        this.blogApiService = blogApiService;
    }
    OpeningPageComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    OpeningPageComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogApiService.getPosts().subscribe(function (data) { _this.totalPosts = data; _this.posts = data; }, function (err) { return console.log(err); }, function () { return console.log('posts loaded'); });
    };
    OpeningPageComponent.prototype.onFilter = function (posts) {
        this.posts = posts;
    };
    OpeningPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opening-page',
            template: __webpack_require__(/*! ./opening-page.component.html */ "./src/app/components/opening-page/opening-page.component.html"),
            styles: [__webpack_require__(/*! ./opening-page.component.css */ "./src/app/components/opening-page/opening-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__["BlogApiService"]])
    ], OpeningPageComponent);
    return OpeningPageComponent;
}());



/***/ }),

/***/ "./src/app/components/post-edit/post-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/post-edit/post-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/post-edit/post-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/post-edit/post-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<button class=\"btn btn-block btn-success\" [routerLink]=\"['/post/', model.postID]\">View Post</button>\n\n<div style=\"margin-bottom: 2%\" class=\"container\">\n  <div [hidden]=\"model.creator.name !== creator\">\n    <h1>Edit Post</h1>\n    <form (ngSubmit)=\"onUpdate()\" #postForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\"\n               required\n               [(ngModel)]=\"model.postTitle\" name=\"name\"\n               #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\"\n             class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"summary\">Summary</label>\n        <input type=\"text\" class=\"form-control\" id=\"summary\"\n               [(ngModel)]=\"model.postSummary\" name=\"summary\"\n               #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\"\n             class=\"alert alert-danger\">\n          Summary is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <textarea class=\"form-control\" id=\"content\"\n                  [(ngModel)]=\"model.postContent\" name=\"content\"\n                  #name=\"ngModel\" style=\"padding-bottom: 15%\"></textarea>\n        <div [hidden]=\"name.valid || name.pristine\"\n             class=\"alert alert-danger\">\n          Content is required\n        </div>\n      </div>\n\n      <ng-select\n        [items]=\"tags\"\n        [multiple]=\"true\"\n        [closeOnSelect]=\"false\"\n        [searchable]=\"false\"\n        bindLabel=\"tagName\"\n        placeholder=\"Select tags\"\n        [(ngModel)]=\"model.tagsSet\" name=\"tags\"\n        style=\"margin-bottom: 3%\">\n      </ng-select>\n\n\n      <div style=\"text-align:left\">\n        <label> Upload Image:\n          <input type=\"file\" (change)=\"onFileChange($event)\">\n        </label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!postForm.form.valid\">Submit</button>\n      <button class=\"btn btn-danger\" (click)=\"onDelete()\">Delete</button>\n\n    </form>\n  </div>\n\n  <div [hidden]=\"model.creator.name === creator\">\n    <h1 style=\"color: crimson\">You can't edit someone else's post</h1>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/post-edit/post-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-edit/post-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Post */ "./src/app/models/Post.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");






var PostEditComponent = /** @class */ (function () {
    function PostEditComponent(postId, blogApiService, router, tagService) {
        this.postId = postId;
        this.blogApiService = blogApiService;
        this.router = router;
        this.tagService = tagService;
        this.model = new _models_Post__WEBPACK_IMPORTED_MODULE_4__["Post"](null, null, null, null, null, null, null, { name: localStorage.getItem('username') }, null);
        this.creator = localStorage.getItem('username');
        this.tags = [{ tagName: 'testing' }];
    }
    PostEditComponent.prototype.ngOnInit = function () {
        this.getPost(this.postId);
        this.getTags();
        this.getSelectedTags(this.postId);
    };
    PostEditComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.findAllTags().subscribe(function (data) { _this.tags = data; }, function (err) { return console.log(err); });
    };
    PostEditComponent.prototype.getPost = function (postId) {
        var _this = this;
        this.blogApiService.getPostById(postId.params.value.id).subscribe(function (data) {
            _this.model = new _models_Post__WEBPACK_IMPORTED_MODULE_4__["Post"](data.postID, data.postTitle, data.postSummary, data.postContent, data.createdDate, data.comments, data.tagSet, data.creator, data.myFile);
        }, function (err) { return console.log(err); });
    };
    PostEditComponent.prototype.onUpdate = function () {
        var uploadData = new FormData();
        if (this.selectedFile !== undefined) {
            uploadData.append('file', this.selectedFile, this.selectedFile.name);
            this.model.myFile = this.selectedFile.name;
            this.blogApiService.uploadImage(uploadData);
        }
        this.blogApiService.updatePost(this.model);
        this.router.navigate(['/posts/']);
    };
    PostEditComponent.prototype.onDelete = function () {
        this.blogApiService.deletePost(this.model.postID);
        this.router.navigate(['/posts/']);
    };
    PostEditComponent.prototype.getSelectedTags = function (postId) {
        var _this = this;
        this.blogApiService.getPostTags(postId.params.value.id).subscribe(function (data) { _this.model.tagsSet = data; }, function (err) { return console.log(err); });
    };
    PostEditComponent.prototype.onFileChange = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-edit',
            template: __webpack_require__(/*! ./post-edit.component.html */ "./src/app/components/post-edit/post-edit.component.html"),
            styles: [__webpack_require__(/*! ./post-edit.component.css */ "./src/app/components/post-edit/post-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__["BlogApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/components/post-form/post-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/post-form/post-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg {\n  opacity: 0.1;\n  filter: alpha(opacity=10);\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  z-index: -1;\n}\n#bg img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  min-width: 50%;\n  min-height: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWZvcm0vcG9zdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1mb3JtL3Bvc3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnIHtcbiAgb3BhY2l0eTogMC4xO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTApO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogLTUwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgei1pbmRleDogLTE7XG59XG4jYmcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/post-form/post-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/post-form/post-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Post Form</h1>\n  <form (ngSubmit)=\"onSubmit()\" #postForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\"\n             required\n             [(ngModel)]=\"model.postTitle\" name=\"name\"\n             #name=\"ngModel\">\n      <div [hidden]=\"name.valid || name.pristine\"\n           class=\"alert alert-danger\">\n        Title is required\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"summary\">Summary</label>\n      <input type=\"text\" class=\"form-control\" id=\"summary\"\n             [(ngModel)]=\"model.postSummary\" name=\"summary\"\n             #name=\"ngModel\">\n      <div [hidden]=\"name.valid || name.pristine\"\n           class=\"alert alert-danger\">\n        Summary is required\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"content\">Content</label>\n      <textarea class=\"form-control\" id=\"content\"\n                [(ngModel)]=\"model.postContent\" name=\"content\"\n                #name=\"ngModel\" style=\"padding-bottom: 15%\"></textarea>\n      <div [hidden]=\"name.valid || name.pristine\"\n           class=\"alert alert-danger\">\n        Content is required\n      </div>\n    </div>\n\n    <ng-select\n      [items]=\"tags\"\n      [multiple]=\"true\"\n      [closeOnSelect]=\"false\"\n      [searchable]=\"false\"\n      [selectOnTab]=\"true\"\n      bindLabel=\"tagName\"\n      placeholder=\"Select tags\"\n      [(ngModel)]=\"model.tagsSet\" name=\"tags\"\n      style=\"margin-bottom: 3%\">\n    </ng-select>\n\n    <div style=\"text-align:left\">\n      <label> Upload Image:\n        <input type=\"file\" (change)=\"onFileChange($event)\">\n      </label>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!postForm.form.valid\">Submit</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"newPost(); postForm.reset()\">Clear Form</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/post-form/post-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-form/post-form.component.ts ***!
  \*************************************************************/
/*! exports provided: PostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormComponent", function() { return PostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Post */ "./src/app/models/Post.ts");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PostFormComponent = /** @class */ (function () {
    function PostFormComponent(router, blogApiService, tagService) {
        this.router = router;
        this.blogApiService = blogApiService;
        this.tagService = tagService;
        this.model = new _models_Post__WEBPACK_IMPORTED_MODULE_2__["Post"](null, '', '', '', new Date(), null, [], '', null);
        this.tags = [{ tagName: 'testing' }];
    }
    PostFormComponent.prototype.ngOnInit = function () {
        this.getTags();
    };
    PostFormComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.findAllTags().subscribe(function (data) { _this.tags = data; }, function (err) { return console.log(err); });
    };
    PostFormComponent.prototype.onSubmit = function () {
        var uploadData = new FormData();
        uploadData.append('file', this.selectedFile, this.selectedFile.name);
        this.model.myFile = this.selectedFile.name;
        this.blogApiService.uploadImage(uploadData);
        this.blogApiService.createPost(this.model);
        this.router.navigate(['/posts/']);
    };
    PostFormComponent.prototype.onFileChange = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PostFormComponent.prototype.newPost = function () {
        this.model = new _models_Post__WEBPACK_IMPORTED_MODULE_2__["Post"](null, '', '', '', new Date(), null, null, '', null);
    };
    PostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./post-form.component.html */ "./src/app/components/post-form/post-form.component.html"),
            styles: [__webpack_require__(/*! ./post-form.component.css */ "./src/app/components/post-form/post-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__["BlogApiService"], _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagService"]])
    ], PostFormComponent);
    return PostFormComponent;
}());



/***/ }),

/***/ "./src/app/components/post-list/post-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let post of postsList\">\n  <div class=\"card border-success mb-3 clickable\" [routerLink]=\"['/post/', post.postID]\"\n       style=\"max-width: 30vm;\">\n    <div class=\"card-header\" style=\"font-size: 3vmin\">{{post.postTitle}}</div>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{post.postSummary}}</h4>\n      <p class=\"card-text\">{{post.postContent.substring(0, 500) + '...'}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostListComponent = /** @class */ (function () {
    function PostListComponent() {
    }
    Object.defineProperty(PostListComponent.prototype, "posts", {
        set: function (value) {
            if (value !== undefined) {
                this.postsList = value;
                this.postsList = this.postsList.sort(function (a, b) { return b.postID - a.postID; });
            }
        },
        enumerable: true,
        configurable: true
    });
    PostListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], PostListComponent.prototype, "posts", null);
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/components/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/components/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ndiv.backgroundImage {\n  height: 100%; padding-top: 5%; background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHNCQUFzQjtBQUN2RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRpdi5iYWNrZ3JvdW5kSW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7IHBhZGRpbmctdG9wOiA1JTsgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundImage\"\n  [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ')'}\" >\n  <div class=\"jumbotron\" style=\"margin: 2% 5% 0% 5%;\">\n    <h1 style=\"font-size: 7vmin; margin-top: -5vmin\">{{post.postTitle}}</h1><br/>\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" *ngFor=\"let tag of tags\">\n      <button class=\"btn btn-outline-primary\" [routerLink]=\"['/tag/', tag.id]\">#{{tag.tagName}}</button>\n    </div>\n    <div [routerLink]=\"['/users/posts/', post.creator.id]\">By: {{post.creator.name}}</div>\n    <div>Posted Date: {{post.createdDate}}</div>\n    <h3>{{post.postSummary}}</h3>\n    <img [src]=imageUrl alt=\"PlaceHolder\" class=\"rounded-circle\" height=\"80\">\n    <div>{{post.postContent}}</div>\n  </div>\n  <div style=\"margin: 1% 5% 0 5%;\">\n    <app-comment-form></app-comment-form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");
/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Post */ "./src/app/models/Post.ts");





var PostComponent = /** @class */ (function () {
    function PostComponent(postId, blogApiService) {
        this.postId = postId;
        this.blogApiService = blogApiService;
        this.post = new _models_Post__WEBPACK_IMPORTED_MODULE_4__["Post"](null, null, null, null, null, null, null, { id: null, name: '' }, null);
        this.imageUrl = '../../assets/images/defaultBackground.jpeg';
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getPost(this.postId);
        this.getTags(this.postId);
    };
    PostComponent.prototype.getTags = function (postId) {
        var _this = this;
        this.blogApiService.getPostTags(postId.params.value.id).subscribe(function (data) { _this.tags = data; }, function (err) { return console.log(err); });
    };
    PostComponent.prototype.getPost = function (postId) {
        var _this = this;
        this.blogApiService.getPostById(postId.params.value.id).subscribe(function (data) { _this.post = data; _this.setImage(data.myFile); }, function (err) { return console.log(err); });
    };
    PostComponent.prototype.setImage = function (myFile) {
        if (myFile !== null) {
            this.imageUrl = 'server/downloadFile/' + myFile;
        }
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__["BlogApiService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/tag-form/tag-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tag-form/tag-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnLWZvcm0vdGFnLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tag-form/tag-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tag-form/tag-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [hidden]=\"submitted\">\n    <form (ngSubmit)=\"onSubmit()\" #tagForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"title\">Add Tag</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\"\n               required\n               [(ngModel)]=\"model.tagName\" name=\"name\"\n               #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\"\n             class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!tagForm.form.valid\">Submit</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"newTag(); tagForm.reset()\">New Post</button>\n    </form>\n  </div>\n\n  <div [hidden]=\"!submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Id</div>\n      <div class=\"col-xs-9\">{{ model.id }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9\">{{ model.tagName }}</div>\n    </div>\n\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tag-form/tag-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tag-form/tag-form.component.ts ***!
  \***********************************************************/
/*! exports provided: TagFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFormComponent", function() { return TagFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Tag */ "./src/app/models/Tag.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");




var TagFormComponent = /** @class */ (function () {
    function TagFormComponent(tagService) {
        this.tagService = tagService;
        this.model = new _models_Tag__WEBPACK_IMPORTED_MODULE_2__["Tags"](null, '', new Set());
        this.submitted = false;
    }
    TagFormComponent.prototype.onSubmit = function () {
        this.tagService.createTags(this.model);
        this.submitted = true;
    };
    TagFormComponent.prototype.onDelete = function () {
        this.tagService.deleteTags(this.model.tagName);
        this.submitted = true;
    };
    TagFormComponent.prototype.ngOnInit = function () {
    };
    TagFormComponent.prototype.newTag = function () {
        this.model = new _models_Tag__WEBPACK_IMPORTED_MODULE_2__["Tags"](null, '', new Set());
    };
    TagFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-form',
            template: __webpack_require__(/*! ./tag-form.component.html */ "./src/app/components/tag-form/tag-form.component.html"),
            styles: [__webpack_require__(/*! ./tag-form.component.css */ "./src/app/components/tag-form/tag-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]])
    ], TagFormComponent);
    return TagFormComponent;
}());



/***/ }),

/***/ "./src/app/components/tag-page/tag-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tag-page/tag-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFnLXBhZ2UvdGFnLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tag-page/tag-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tag-page/tag-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 style=\"font-size: 5vmin\" align=\"center\"># {{tag.tagName}} </h1>\n\n<app-post-list [posts]=\"posts\"></app-post-list>\n"

/***/ }),

/***/ "./src/app/components/tag-page/tag-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tag-page/tag-page.component.ts ***!
  \***********************************************************/
/*! exports provided: TagPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPageComponent", function() { return TagPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");




var TagPageComponent = /** @class */ (function () {
    function TagPageComponent(tagId, tagService) {
        this.tagId = tagId;
        this.tagService = tagService;
        this.tag = { tagName: '' };
        this.posts = [];
    }
    TagPageComponent.prototype.ngOnInit = function () {
        this.getTag(this.tagId);
    };
    TagPageComponent.prototype.getTag = function (tagId) {
        var _this = this;
        this.tagService.getTag(tagId.params.value.id).subscribe(function (data) { _this.tag = data; _this.posts = data.listOfPosts; });
    };
    TagPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag-page',
            template: __webpack_require__(/*! ./tag-page.component.html */ "./src/app/components/tag-page/tag-page.component.html"),
            styles: [__webpack_require__(/*! ./tag-page.component.css */ "./src/app/components/tag-page/tag-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]])
    ], TagPageComponent);
    return TagPageComponent;
}());



/***/ }),

/***/ "./src/app/components/tags/tags.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/tags/tags.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\n\n#alert {\n  top: 0; position: -webkit-sticky; position: sticky; height: 100%; z-index: 2; float: left;\n  background: #5CCC5E;\n  color: #fff;\n  transition: all 0.3s;\n  padding: 1% 1% 1% 1%;\n}\n\n\n::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #0392B5 !important;\n}\n\n\n::ng-deep .mat-ripple-element {\n  background: #0392B5 !important;\n}\n\n\nbutton.btn {\n  top: 0; width: 15%; position: -webkit-sticky; position: sticky; float: left; z-index: 2; background-color: #5CCC5E; color: white;\n}\n\n\n.btn:focus {\n  outline: none;\n}\n\n\nbutton.ex {\n  color: #0392B5;\n  position: absolute;\n  top: 0;\n  padding: 0;\n  right: 0;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWdzL3RhZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7OztBQUc3RTtFQUNFLE1BQU0sRUFBRSx3QkFBZ0IsRUFBaEIsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXO0VBQy9ELG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7OztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLE1BQU0sRUFBRSxVQUFVLEVBQUUsd0JBQWdCLEVBQWhCLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUseUJBQXlCLEVBQUUsWUFBWTtBQUN4Rzs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFncy90YWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xuXG5cbiNhbGVydCB7XG4gIHRvcDogMDsgcG9zaXRpb246IHN0aWNreTsgaGVpZ2h0OiAxMDAlOyB6LWluZGV4OiAyOyBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogIzVDQ0M1RTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzOTJCNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICMwMzkyQjUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLmJ0biB7XG4gIHRvcDogMDsgd2lkdGg6IDE1JTsgcG9zaXRpb246IHN0aWNreTsgZmxvYXQ6IGxlZnQ7IHotaW5kZXg6IDI7IGJhY2tncm91bmQtY29sb3I6ICM1Q0NDNUU7IGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbi5leCB7XG4gIGNvbG9yOiAjMDM5MkI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMDtcbiAgcmlnaHQ6IDA7XG59XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/tags/tags.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tags/tags.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- MUST READ -->\n<!-- (need to install npm install --save @angular/material @angular/cdk @angular/animations -->\n<!--<button (click)=\"onDelete(tag)\" class=\"del\">x</button>-->\n<button class=\"btn btn-light\" [hidden]=\"showing\" (click)=\"changeShowing()\">Tags</button>\n  <!-- Sidebar -->\n<div id=\"alert\" class=\"alert alert-dismissible alert-success\" [hidden]=\"!showing\">\n  <button type=\"button\" class=\"ex\" (click)=\"changeShowing()\"><i class=\"fa fa-times\"></i></button>\n  <div *ngFor=\"let tag of tags\">\n    <mat-checkbox (change)=\"changeFiltered(tag.tagName, $event)\">\n      {{tag.tagName}}\n    </mat-checkbox>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/tags/tags.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tags/tags.component.ts ***!
  \***************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");



var TagsComponent = /** @class */ (function () {
    function TagsComponent(tagService) {
        this.tagService = tagService;
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteTag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TagsComponent.prototype.ngOnInit = function () {
        this.getTags();
        this.filteredTagList = [];
        this.showing = false;
    };
    TagsComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.findAllTags().subscribe(function (data) {
            _this.tags = data;
        }, function (err) { return console.log(err); }, function () { return console.log('users loaded'); });
    };
    TagsComponent.prototype.nothingToggled = function () {
        this.filteredPost = this.totalPosts;
    };
    TagsComponent.prototype.changeShowing = function () {
        this.showing = !this.showing;
    };
    TagsComponent.prototype.changeFiltered = function (tagName, event) {
        if (event.checked) {
            this.filteredTagList.push(tagName);
        }
        else {
            this.filteredTagList.splice(this.filteredTagList.indexOf(tagName), 1);
        }
        this.getPosts();
    };
    TagsComponent.prototype.getPosts = function () {
        var _this = this;
        if (this.filteredTagList.length === 0) {
            this.filteredPost = this.totalPosts;
            this.filter.emit(this.filteredPost);
        }
        else {
            this.tagService.findFilteredPostsByTag(this.filteredTagList).subscribe(function (data) {
                _this.filteredPost = data;
                _this.filter.emit(_this.filteredPost);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagsComponent.prototype, "totalPosts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagsComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagsComponent.prototype, "deleteTag", void 0);
    TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/components/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.css */ "./src/app/components/tags/tags.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagService"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/components/users-posts/users-posts.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users-posts/users-posts.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtcG9zdHMvdXNlcnMtcG9zdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/users-posts/users-posts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users-posts/users-posts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 style=\"margin-bottom:4vm; padding: 2% 2% 2% 6%;\">{{user.name}}'s Posts:</h1>\n  <app-post-list [posts]=\"posts\"></app-post-list>\n  <h1 style=\"margin-bottom:4vm; padding: 2% 2% 2% 6%;\">{{user.name}}'s Comments:</h1>\n  <div class=\"list-group\" style=\"margin: 0 4% 0 4%\" *ngFor=\"let comment of comments\">\n    <div class=\"list-group-item\">\n      {{comment.comments}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users-posts/users-posts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-posts/users-posts.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsersPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPostsComponent", function() { return UsersPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");




var UsersPostsComponent = /** @class */ (function () {
    function UsersPostsComponent(userId, blogApiService) {
        this.userId = userId;
        this.blogApiService = blogApiService;
        this.user = { name: '' };
    }
    UsersPostsComponent.prototype.ngOnInit = function () {
        this.getUser(this.userId);
        this.getPosts(this.userId);
        this.getComments(this.userId);
    };
    UsersPostsComponent.prototype.getUser = function (userId) {
        var _this = this;
        this.blogApiService.getUserById(userId.params.value.id).subscribe(function (data) { _this.user = data; }, function (err) { return console.log(err); });
    };
    UsersPostsComponent.prototype.getPosts = function (userId) {
        var _this = this;
        this.blogApiService.getPostsByUser(userId.params.value.id).subscribe(function (data) { _this.posts = data; }, function (err) { return console.log(err); });
    };
    UsersPostsComponent.prototype.getComments = function (userId) {
        var _this = this;
        this.blogApiService.getCommentsByUser(userId.params.value.id).subscribe(function (data) { _this.comments = data; }, function (err) { return console.log(err); });
    };
    UsersPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-blogs',
            template: __webpack_require__(/*! ./users-posts.component.html */ "./src/app/components/users-posts/users-posts.component.html"),
            styles: [__webpack_require__(/*! ./users-posts.component.css */ "./src/app/components/users-posts/users-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_blog_api_service__WEBPACK_IMPORTED_MODULE_3__["BlogApiService"]])
    ], UsersPostsComponent);
    return UsersPostsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Click to access Posts by user</h2>\n  <table class=\"table table-bordered table-hover\">\n    <tr class=\"table-success\">\n      <th>User Name</th>\n      <th>ID</th>\n    </tr>\n    <tr class=\"clickable\" *ngFor=\"let user of users\" [routerLink]=\"['/users/posts/', user.id]\">\n      <td>\n        {{user.name}}\n      </td>\n      <td>\n        {{user.id}}\n      </td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(userListService, authService) {
        this.userListService = userListService;
        this.authService = authService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userListService.getUsers().subscribe(function (data) { _this.users = data; }, function (err) { return console.log(err); }, function () { return console.log('users loaded'); });
    };
    UsersComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__["BlogApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/components/your-posts/your-posts.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/your-posts/your-posts.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveW91ci1wb3N0cy95b3VyLXBvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/your-posts/your-posts.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/your-posts/your-posts.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button style=\"margin-top: 2%; margin-bottom: 2%\" type=\"button\" class=\"btn btn-success btn-block\" [routerLink]=\"['/users/createPost']\">Create Post</button>\n\n<h1 align=\"center\" style=\"font-size: 4vmin\">Click on Post to Edit or Delete</h1>\n<div class=\"container\" *ngFor=\"let post of posts\">\n  <div class=\"card border-success mb-3 clickable\" [routerLink]=\"['/users/editPost/', post.postID]\" style=\"max-width: 30vm;\">\n    <div class=\"card-header\" style=\"font-size: 3vmin\">{{post.postTitle}}</div>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{post.postSummary}}</h4>\n      <p class=\"card-text\">{{post.postContent.substring(0, 100) + '...'}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/your-posts/your-posts.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/your-posts/your-posts.component.ts ***!
  \***************************************************************/
/*! exports provided: YourPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourPostsComponent", function() { return YourPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.api.service */ "./src/app/services/blog.api.service.ts");



var YourPostsComponent = /** @class */ (function () {
    function YourPostsComponent(userListService) {
        this.userListService = userListService;
    }
    YourPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getPosts(localStorage.getItem('userid'));
        }, 500);
    };
    YourPostsComponent.prototype.getPosts = function (userId) {
        var _this = this;
        this.userListService.getPostsByUser(userId).subscribe(function (data) { _this.posts = data.sort(function (a, b) { return b.postID - a.postID; }); }, function (err) { return console.log(err); }, function () { return console.log('posts loaded'); });
    };
    YourPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-your-posts',
            template: __webpack_require__(/*! ./your-posts.component.html */ "./src/app/components/your-posts/your-posts.component.html"),
            styles: [__webpack_require__(/*! ./your-posts.component.css */ "./src/app/components/your-posts/your-posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blog_api_service__WEBPACK_IMPORTED_MODULE_2__["BlogApiService"]])
    ], YourPostsComponent);
    return YourPostsComponent;
}());



/***/ }),

/***/ "./src/app/models/Comments.ts":
/*!************************************!*\
  !*** ./src/app/models/Comments.ts ***!
  \************************************/
/*! exports provided: Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
var Comments = /** @class */ (function () {
    function Comments(commentId, comments, createdDate, post, user) {
        this.commentId = commentId;
        this.comments = comments;
        this.createdDate = createdDate;
        this.post = post;
        this.user = user;
    }
    return Comments;
}());



/***/ }),

/***/ "./src/app/models/Post.ts":
/*!********************************!*\
  !*** ./src/app/models/Post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(postID, postTitle, postSummary, postContent, createdDate, comments, tagsSet, creator, myFile /* property of File type */) {
        this.postID = postID;
        this.postTitle = postTitle;
        this.postSummary = postSummary;
        this.postContent = postContent;
        this.createdDate = createdDate;
        this.comments = comments;
        this.tagsSet = tagsSet;
        this.creator = creator;
        this.myFile = myFile;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/models/Tag.ts":
/*!*******************************!*\
  !*** ./src/app/models/Tag.ts ***!
  \*******************************/
/*! exports provided: Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
var Tags = /** @class */ (function () {
    function Tags(id, tagName, listOfPosts) {
        this.id = id;
        this.tagName = tagName;
        this.listOfPosts = listOfPosts;
    }
    return Tags;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.authService.login();
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _blog_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.api.service */ "./src/app/services/blog.api.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(router, blogApiService) {
        this.router = router;
        this.blogApiService = blogApiService;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
            clientID: 'v6OMhNmN0OO3aPQnC9VnEACBDX7COR0N',
            domain: 'whatthetek.auth0.com',
            responseType: 'token id_token',
            audience: 'http://localhost:8080',
            redirectUri: 'http://localhost:4200/callback',
            scope: 'profile openid view:user view:users'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        // console.log(authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.blogApiService.signUp();
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        // Go back to the home route
        this.auth0.logout({
            returnTo: 'http://localhost:4200/'
        });
        // window.location.href = 'https://whatthetek.auth0.com/v2/logout';
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _blog_api_service__WEBPACK_IMPORTED_MODULE_4__["BlogApiService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/blog.api.service.ts ***!
  \**********************************************/
/*! exports provided: BlogApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogApiService", function() { return BlogApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }).set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
};
var BlogApiService = /** @class */ (function () {
    function BlogApiService(http) {
        this.http = http;
    }
    BlogApiService.prototype.signUp = function () {
        var token = localStorage.getItem('access_token');
        return this.http.post('server/users/sign-up', localStorage.getItem('id_token'), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + token) })
            .subscribe(function (data) {
            localStorage.setItem('userid', data.id);
            localStorage.setItem('username', data.name);
        }, function (err) {
            console.log('error occurred');
        });
    };
    BlogApiService.prototype.getUsers = function () {
        var token = localStorage.getItem('access_token');
        return this.http.get('server/users', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')) });
    };
    BlogApiService.prototype.getUserById = function (userId) {
        return this.http.get('server/users/id/' + userId);
    };
    BlogApiService.prototype.getPosts = function () {
        return this.http.get('server/post');
    };
    BlogApiService.prototype.getPostsByUser = function (userId) {
        var url = 'server/users/posts/' + userId;
        return this.http.get(url);
    };
    BlogApiService.prototype.getPostById = function (postId) {
        var url = 'server/post/' + postId;
        return this.http.get(url);
    };
    BlogApiService.prototype.getPostTags = function (postId) {
        var url = 'server/post/tags/' + postId;
        return this.http.get(url);
    };
    BlogApiService.prototype.createPost = function (post) {
        console.log(localStorage.getItem('access_token'));
        return this.http.post('server/users/createPost/' + localStorage.getItem('id_token'), JSON.stringify(post), httpOptions)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('error occurred creating post');
        });
    };
    BlogApiService.prototype.deletePost = function (postID) {
        this.http.delete('server/users/deletePost/' + postID, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')) })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('Error occurred deleting the post');
        });
    };
    BlogApiService.prototype.updatePost = function (post) {
        this.http.put('server/users/updatePost/' + post.postID, JSON.stringify(post), httpOptions)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('Error occurred updating the post');
        });
    };
    BlogApiService.prototype.createComment = function (comment) {
        var token = localStorage.getItem('access_token');
        console.log(JSON.stringify(comment));
        this.http.post('server/comment/create/' + localStorage.getItem('id_token'), JSON.stringify(comment), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }).set('Authorization', 'Bearer ' + token) })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('error occurred creating comment');
        });
    };
    BlogApiService.prototype.getCommentsByPost = function (postId) {
        var url = 'server/comments/post/' + postId;
        return this.http.get(url);
    };
    BlogApiService.prototype.deleteComment = function (commentId) {
        this.http.delete('server/comment/delete/' + commentId, httpOptions)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('Error occurred deleting the comment');
        });
    };
    BlogApiService.prototype.updateComment = function (comment) {
        this.http.put('server/comment/update/' + comment.commentId, JSON.stringify(comment), httpOptions)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('Error occurred updating the comment');
        });
    };
    BlogApiService.prototype.getCommentsByUser = function (userId) {
        var url = 'server/users/comments/' + userId;
        return this.http.get(url);
    };
    BlogApiService.prototype.uploadImage = function (myFile) {
        var url = 'server/uploadFile';
        return this.http.post(url, myFile)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log('Error occurred updating the post');
        });
    };
    BlogApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogApiService);
    return BlogApiService;
}());



/***/ }),

/***/ "./src/app/services/tag.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TagService = /** @class */ (function () {
    function TagService(http) {
        this.http = http;
    }
    TagService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TagService.prototype.findAllTags = function () {
        return this.http.get('server/tags');
    };
    TagService.prototype.findFilteredPostsByTag = function (tagNames) {
        var url = 'server/tags/filteredPosts/' + tagNames;
        return this.http.get(url);
    };
    TagService.prototype.createTags = function (tag) {
        this.http.post('server/createTag', JSON.stringify(tag), httpOptions).subscribe(function (data) { console.log(data); }, function (err) { return console.log('error'); });
    };
    // addTags(tag: Tags): Observable<any> {
    //   return this.http.post(this.tagUrl, tag, httpOptions);
    // }
    TagService.prototype.updateTags = function (id, tag) {
        var url = 'server/updateTag/${id}';
        return this.http.put(url, id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('updated tag id=${id}'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTag')));
    };
    //
    // deleteTags(id): Observable<Tag> {
    //   const url = `server/tags/${id}`;
    //   return this.http.delete<Tag>(url, httpOptions).pipe(
    //     tap(_ => console.log(`deleted tag id =${id}`)),
    //     catchError(this.handleError<Tag>('deleteTag'))
    //   );
    TagService.prototype.deleteTags = function (tagName) {
        var url = 'server/deleteTags/' + tagName;
        return this.http.delete(url, httpOptions).subscribe(function (data) { console.log(data); }, function (err) { return console.log('error'); });
    };
    TagService.prototype.getTag = function (tagId) {
        var url = 'server/tags/' + tagId;
        return this.http.get(url);
    };
    TagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eleonorbart/Projects/WhatTheTec/FullStack.MicroWebApplication-Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map