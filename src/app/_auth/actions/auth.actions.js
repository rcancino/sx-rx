"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = '[Auth] Login';
exports.LOGOUT = '[Auth] Logout';
exports.LOGIN_SUCCESS = '[Auth] Login Success';
exports.LOGIN_FAILURE = '[Auth] Login Failure';
exports.LOGIN_REDIRECT = '[Auth] Login Redirect';
exports.CLEAN_AUTH = '[Auth Clean Auth]';
var Login = (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = exports.LOGIN;
    }
    return Login;
}());
exports.Login = Login;
var LoginSuccess = (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = exports.LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());
exports.LoginSuccess = LoginSuccess;
var LoginFailure = (function () {
    function LoginFailure(payload) {
        this.payload = payload;
        this.type = exports.LOGIN_FAILURE;
    }
    return LoginFailure;
}());
exports.LoginFailure = LoginFailure;
var LoginRedirect = (function () {
    function LoginRedirect() {
        this.type = exports.LOGIN_REDIRECT;
    }
    return LoginRedirect;
}());
exports.LoginRedirect = LoginRedirect;
var Logout = (function () {
    function Logout() {
        this.type = exports.LOGOUT;
    }
    return Logout;
}());
exports.Logout = Logout;
var CleanAuth = (function () {
    function CleanAuth() {
        this.type = exports.CLEAN_AUTH;
    }
    return CleanAuth;
}());
exports.CleanAuth = CleanAuth;
