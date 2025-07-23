"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "authHandlers", {
    enumerable: true,
    get: function() {
        return authHandlers;
    }
});
const _loginhandler = require("./login-handler");
const _registationhandler = require("./registation-handler");
const _verifyregistationhandler = require("./verify-registation-handler");
const authHandlers = [
    _loginhandler.LoginHandler,
    _registationhandler.RegistrationHandler,
    _verifyregistationhandler.VerifyRegistrationHandler
];

//# sourceMappingURL=indext.js.map