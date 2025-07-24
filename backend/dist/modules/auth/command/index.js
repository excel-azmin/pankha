"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get authCommands () {
        return authCommands;
    },
    get authHandlers () {
        return authHandlers;
    }
});
const _logincommand = require("./login/login-command");
const _loginhandler = require("./login/login-handler");
const _registrationcommand = require("./registration/registration-command");
const _registrationhandler = require("./registration/registration-handler");
const _verifyregistrationhandler = require("./verification/verify-registration-handler");
const authCommands = [
    _registrationcommand.RegistrationCommand,
    _logincommand.LoginCommand
];
const authHandlers = [
    _loginhandler.LoginHandler,
    _registrationhandler.RegistrationHandler,
    _verifyregistrationhandler.VerifyRegistrationHandler
];

//# sourceMappingURL=index.js.map