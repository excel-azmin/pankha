"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "authCommands", {
    enumerable: true,
    get: function() {
        return authCommands;
    }
});
const _logincommand = require("./login/login-command");
const _registrationcommand = require("./registration/registration-command");
const authCommands = [
    _registrationcommand.RegistrationCommand,
    _logincommand.LoginCommand
];

//# sourceMappingURL=index.js.map