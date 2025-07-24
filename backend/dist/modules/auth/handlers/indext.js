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
const _loginhandler = require("../command/login/login-handler");
const _registrationhandler = require("../command/registration/registration-handler");
const _verifyregistrationhandler = require("../command/verification/verify-registration-handler");
const authHandlers = [
    _loginhandler.LoginHandler,
    _registrationhandler.RegistrationHandler,
    _verifyregistrationhandler.VerifyRegistrationHandler
];

//# sourceMappingURL=indext.js.map